import createClientServer from "@/utils/supabase/server";
import { Container, Paper, Title } from "@mantine/core";
import { redirect } from "next/navigation";
import LoginComponent from "./_components/LoginComponent";

export default async function Page() {
  const supabase = createClientServer();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    redirect("odeslat");
  }

  return (
    <main className="flex flex-col absolute top-1/4 left-1/2 -translate-x-1/2">
      <div className="relative">
        <Title ta="center" className="font-extrabold">
          Přihlášení do systému pro eshopy
        </Title>
      </div>
      <Container size="sm" className="self-center">
        <Paper
          withBorder
          shadow="md"
          p={{ base: "md", md: "xl" }}
          mt="xl"
          miw={{ base: "90vw", md: 400 }}
        >
          <LoginComponent />
        </Paper>
      </Container>
    </main>
  );
}
