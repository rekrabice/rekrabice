import Link from "next/link";
import translations from "../../dictionaries/translations";
import {
  Anchor,
  Container,
  Paper,
  Text,
  Title,
} from "../mantineClientComponents";
import LoginComponent from "./_components/LoginComponent";

function UpperText() {
  return (
    <div className="relative">
      <Title align="center" className="font-extrabold">
        {translations.login.heading}
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        {translations.login.dontAccept}{" "}
        <Anchor href="/kontakt" component={Link}>
          {translations.login.contactUs}
        </Anchor>
      </Text>
    </div>
  );
}

export default async function LoginPage() {
  return (
    <main className="flex flex-col h-screen relative">
      <UpperText />
      <Container size="sm" className="self-center">
        <Paper withBorder shadow="md" p="xl" mt="xl" miw={400}>
          <LoginComponent />
        </Paper>
      </Container>
    </main>
  );
}
