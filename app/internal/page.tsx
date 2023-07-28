/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { Button, PinInput, Stack, Text } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// * For some reason this library is producing an error when importing it
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserQRCodeReader } from "@zxing/browser";
import {
  ChecksumException,
  FormatException,
  NotFoundException,
} from "@zxing/library";

export default function Page() {
  const supabase = createClientComponentClient();

  const idForm = useForm({
    initialValues: {
      pallete_id: "",
    },

    validate: {
      pallete_id: isNotEmpty("Chybný kód"),
    },

    transformValues: (values) => ({
      pallete_id: values.pallete_id.toUpperCase(),
    }),
  });

  const handlePinChange = (value: string) => {
    idForm.setValues({ pallete_id: value.toUpperCase() });
  };

  async function scan(palleteId: string | number) {
    const codeReader = new BrowserQRCodeReader();
    const videoInputDevices = await BrowserQRCodeReader.listVideoInputDevices();
    // choose your media device (webcam, frontal camera, back camera, etc.)
    const selectedDeviceId = videoInputDevices[0].deviceId;
    const previewElem = document.querySelector("#video-preview");

    // eslint-disable-next-line no-unused-vars
    const controls = await codeReader.decodeFromVideoDevice(
      selectedDeviceId,
      previewElem,
      (result: any, error: any) => {
        // you can use the controls to stop() the scan or switchTorch() if available
        // const controls = await codeReader.decodeFromVideoDevice(selectedDeviceId, previewElem, (result, error, controls) => {
        // use the result and error values to choose your actions
        // you can also use controls API in this scope like the controls
        // returned from the method.

        if (result) {
          handleSuccess(palleteId, result.getText());
        } else if (error && error instanceof NotFoundException) {
          // console.log("Not found any code");
        } else if (error && error instanceof ChecksumException) {
          notifications.show({
            title: "Chybná hodnota",
            message: "A code was found, but it's read value was not valid.",
            autoClose: 2000,
            color: "red",
          });
        } else if (error && error instanceof FormatException) {
          notifications.show({
            title: "Špatný formát",
            message: "A code was found, but it was in a invalid format.",
            autoClose: 2000,
            color: "red",
          });
        } else {
          notifications.show({
            title: "Ještě nepoznaná chyba",
            message: "Nastala chyba, kterou zatím jsme nebyli schopin popsat.",
            autoClose: 2000,
            color: "red",
          });
        }
      },
    );
  }

  const updatePallete = async (
    palleteId: any,
    existingArray: any,
    newBox: any,
  ) => {
    if (existingArray.includes(newBox)) {
      notifications.show({
        title: `${newBox} už je v paletě`,
        message: `Krabice s označením ${newBox} už byla přidána do palety`,
        autoClose: 2000,
        color: "red",
      });
    } else {
      const newArray = [...existingArray, newBox];

      const { data, error } = await supabase
        .from("palletes")
        .update({ boxes: newArray })
        .eq("pallete_id", palleteId)
        .select();

      if (error) {
        throw new Error("Error updating data from Supabase");
      } else {
        console.log(data);
        notifications.show({
          title: `${newBox} přidána`,
          message: `Krabice s označením ${newBox} byla přidána do palety`,
          autoClose: 2000,
        });
      }
    }
  };

  const getBoxId = async (boxTrackingName: string) => {
    const { data, error } = await supabase
      .from("boxes")
      .select("box_id")
      .eq("tracking_id", boxTrackingName)
      .single();
    if (error) {
      throw new Error("Error fetching data from Supabase");
    } else return data.box_id;
  };

  const handleSuccess = async (
    palleteId: number | string,
    trackingName: string,
  ) => {
    const { data, error } = await supabase
      .from("palletes")
      .select("boxes")
      .eq("pallete_id", palleteId)
      .single();

    if (error) {
      throw new Error("Error fetching data from Supabase");
    } else {
      const boxId = await getBoxId(trackingName);
      updatePallete(palleteId, data?.boxes, boxId);
    }
  };

  return (
    <form
      onSubmit={idForm.onSubmit((values) => {
        scan(values.pallete_id);
      })}
    >
      <Stack spacing="md" maw={500} m="sm" mx="auto">
        <Text>Zadejte kód palety</Text>
        <PinInput
          length={4}
          autoFocus
          required
          size="xl"
          {...idForm.getInputProps("pallete_id")}
          onChange={(event) => handlePinChange(event)}
          mx="auto"
        />
        <Button type="submit" fullWidth>
          Načíst paletu
        </Button>
        <video id="video-preview" width="300" height="200" />
      </Stack>
    </form>
  );
}
