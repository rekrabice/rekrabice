import { Group } from "@mantine/core";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <Group grow position="apart">
      <TeamMember
        avatar="/images/avatars/marek.jpeg"
        title="Exekutiva a technologie"
        name="Marek Svitek"
        email="marek.svitek@zelenakrabice.cz"
      />
      <TeamMember
        avatar="/images/avatars/tadeas.jpeg"
        title="Marketing a sales"
        name="Tadeáš Bíbr"
        email="tadeas.bibr@zelenakrabice.cz"
      />
      <TeamMember
        avatar=""
        title="CFO/COO..."
        name="Ty? 🤔😎"
        email="Zajímá tě víc? Ozvi se nám a něco spolu vymyslíme!"
        disabled
      />
    </Group>
  );
}
