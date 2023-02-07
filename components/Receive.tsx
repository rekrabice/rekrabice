// // @ts-nocheck
// import { Autocomplete, Button, Container, Space } from "@mantine/core";
// import { useSupabaseClient } from "@supabase/auth-helpers-react";
// import { useEffect, useState } from "react";
// // @ts-ignore
// import { useForm } from "@mantine/form";

// import {
//   showNotification,
//   // hideNotification,
//   updateNotification,
// } from "@mantine/notifications";
// import { IconCheck, IconX } from "@tabler/icons";
// import { Database } from "../database.types";
// // import { UserButton } from "./UserButton/UserButton";

// export default function Receive({ session }: any) {
//   const [loading, setLoading] = useState(false);
//   const [boxes, setBoxes] = useState([{ name: "", id: 0 }]);
//   const [boxesNames, setBoxesNames] = useState([]);
//   const supabaseClient = useSupabaseClient<Database>();

//   const form: any = useForm({
//     initialValues: {
//       boxName: "",
//       // boxId: 44,
//     },

//     validate: {
//       boxName: (value) =>
//         !boxes.find((box) => box.name == value)
//           ? "Tato krabice neexistuje."
//           : null,
//     },
//   });

//   useEffect(() => {
//     getBoxes();
//   }, [session]);

//   async function getBoxes() {
//     try {
//       setLoading(true);

//       const { data, error } = await supabaseClient.rpc("get_returnable_boxes");

//       if (error && status !== "406") {
//         console.log("Not found");
//         throw error;
//       }
//       if (error && status == "406") {
//         console.log("Not found");
//       }
//       if (data) {
//         setBoxes(data);
//         const tempNames: any = data.map((box: any) => box.name);
//         setBoxesNames(tempNames);
//       }
//     } catch (error: any) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function returnBox(selectedBox: any) {
//     try {
//       setLoading(true);
//       showNotification({
//         id: "notification-return-box",
//         loading: true,
//         title: "Kontrolování",
//         message: "Kontrolujeme jméno krabice s naší databází...",
//         autoClose: false,
//         radius: "xs",
//         disallowClose: true,
//       });
//       const { data, error } = await supabaseClient.rpc("return_box", {
//         box_id: selectedBox,
//       });

//       if (error) {
//         throw error;
//       } else {
//         updateNotification({
//           id: "notification-return-box",
//           color: "teal",
//           title: "Hurá, krabice vrácená. 🤩",
//           message:
//             "Děkujeme, že používáte Zelenou krabici a šetříte tím naši planetu.",
//           icon: <IconCheck size={16} />,
//           autoClose: 10000,
//           loading: false,
//         });
//         // console.log(data);
//       }
//     } catch (error: any) {
//       updateNotification({
//         id: "notification-return-box",
//         autoClose: 20000,
//         title: "Něco se pokazilo. 😥",
//         message: error.message,
//         color: "red",
//         icon: <IconX />,
//         radius: "xs",
//         loading: false,
//       });
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <Container size="xs">
//       <form
//         onSubmit={form.onSubmit((values?: any) => {
//           const selectedBox: any = boxes?.find(
//             (box: any) => box.name == values.boxName
//           );
//           returnBox(selectedBox.id);
//           getBoxes();
//         })}
//       >
//         <Autocomplete
//           label="Zadejte jméno krabice"
//           placeholder="Krabicon"
//           data={boxesNames}
//           disabled={loading}
//           // onChange={(e) => { }
//           // onChange={(e) => { form.setFieldValue('boxId', 4) }}
//           {...form.getInputProps("boxName")}
//           required
//         />
//         <Space h="xs" />
//         {/* <Input.Wrapper label="ID krabice">
//             <Input

//                 // placeholder="777 777"
//                 disabled
//                 placeholder={form.values.boxId}
//                         {...form.getInputProps("boxId")}

//             />
//             </Input.Wrapper>
//             <Space h="sm" /> */}

//         <Button
//           type="submit"
//           fullWidth
//           loading={loading}
//           loaderPosition="right"
//         >
//           {loading ? "Kontrolování" : "Přijmout krabici"}
//         </Button>
//       </form>
//     </Container>
//   );
// }

export default function Receive() {
  return (
    <div>
      <h1>Receive</h1>
    </div>
  );
}
