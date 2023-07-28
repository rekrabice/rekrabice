import {
  ActionIcon,
  Burger,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Menu,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  isOpen: boolean;
  toggle: () => void;
}

export default function HeaderAction({
  links,
  isOpen,
  toggle,
}: HeaderActionProps) {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} component={Link} href={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover">
          <Menu.Target>
            <Center>
              <Link className={classes.link} href={link.link}>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Link>
            </Center>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} mb={120}>
      <Container size="lg" className={classes.inner}>
        <Group>
          <Burger
            opened={isOpen}
            onClick={toggle}
            className={classes.burger}
            size="sm"
            aria-label="Side navigation toggle"
          />
          {/* <Avatar src="/favicon.svg" size={28} /> */}
          <Link href="/">
            <Image
              src="/logo_text.svg"
              width={120}
              height={30}
              className="cursor-pointer"
              alt="Logo"
            />
          </Link>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group position="center" my="xl">
          <ActionIcon
            // onClick={() => toggleColorScheme()}
            size="lg"
            aria-label="Toggle color scheme"
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.yellow[4]
                  : theme.colors.blue[6],
            })}
          >
            {/* {colorScheme === "dark" ? (
              <IconSun size={18} />
            ) : (
              <IconMoonStars size={18} />
            )} */}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}