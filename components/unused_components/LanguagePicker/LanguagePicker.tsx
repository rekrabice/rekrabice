import {
  createStyles,
  Group,
  Image,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

// TODO: replace this with next image
// import Image from "next/image";

const data = [
  { label: "Česky", image: "/icons/flags/cz.svg" },
  { label: "Slovensky", image: "/icons/flags/sk.svg" },
  { label: "English", image: "/icons/flags/gb.svg" },
];

function getBgColor(opened:boolean, theme:any) {
  if (theme.colorScheme === "dark") {
    return (opened ? theme.colors.dark[5] : theme.colors.dark[6]);
  }
  return (opened ? theme.colors.gray[0] : theme.white);
}

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius: theme.radius.md,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    transition: "background-color 150ms ease",
    backgroundColor: getBgColor(opened, theme),

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export default function LanguagePicker() {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      icon={
        <Image src={item.image} alt="language icon" width="18" height="auto" />
      }
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
    >
      <Menu.Target>
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            <Image
              src={selected.image}
              alt="selected language icon"
              width={22}
              height="auto"
            />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={16} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
}