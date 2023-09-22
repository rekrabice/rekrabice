"use client";

import { notifications } from "@mantine/notifications";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import createLoopUpdate from "../../../../utils/supabase_helpers/createLoopUpdate";
import getBoxFromTrackingName from "../../../../utils/supabase_helpers/getBoxFromTrackingName";
import addNewBox from "./addNewBox";
import createNewLoop from "./createNewLoop";
import updateActiveLoopId from "./updateActiveLoopId";

export default async function handleScannedBox(
  palleteId: number | string,
  trackingName: string,
) {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase
    .from("palletes")
    .select("boxes")
    .eq("pallete_id", palleteId)
    .single();

  if (error) {
    throw error;
  } else {
    const boxData = await getBoxFromTrackingName(trackingName);
    const activeLoopId = boxData?.active_loop_id;
    const boxId = boxData?.box_id;

    // if the box is already on the pallete, do nothing
    if (data?.boxes.includes(boxId)) {
      notifications.show({
        title: `${trackingName} už je v paletě`,
        message: `Krabice s označením ${trackingName} už byla přidána do palety`,
        autoClose: 4000,
        color: "red",
      });
      return;
    }

    // loop update of receiving at our warehouse from point of return
    await createLoopUpdate(activeLoopId, 701);

    // loop update of the box being washed
    await createLoopUpdate(activeLoopId, 801);

    // Creates a new loop for the box, since the 801 loop update is the last one
    const newLoopId = await createNewLoop(boxId);

    // Updates the box with the new active loop id
    await updateActiveLoopId(boxId, newLoopId);

    // add the box to the pallete
    await addNewBox(palleteId, data?.boxes, boxId, trackingName);

    // Loop update of the box being loaded on a pallete
    await createLoopUpdate(newLoopId, 102);
  }
}
