import { Center } from "@mantine/core";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import App from "../../components/App";
import Stats from "../../components/Stats";
// @ts-ignore
import { Database } from "../database.types";

export default function Statistika() {
  const [data, setData] = useState<any>();
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    getStatsData();
  }, []);

  async function getStatsData() {
    try {
      const { data, error, status } = await supabaseClient
        .from("profiles")
        .select("stats_saved_trees, stats_saved_co2, stats_boxes_used")
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setData(data);
        console.log(data);
      }
    } catch (error: any) {
      console.log(error);
      alert(error.message);
    } finally {
    }
  }
  return (
    <App>
      <Center style={{ width: "100%", height: "100%" }}>
        <Stats data={data} />
      </Center>
    </App>
  );
}
// export const getServerSideProps = withPageAuth();
