import { Accordion, MediaQuery, Navbar, Stack } from "@mantine/core";
import Link from "next/link";

export default function CustomNavbar({
  links,
  isOpen,
}: {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  isOpen: boolean;
  // TODO: fix this
  // eslint-disable-next-line react/no-unused-prop-types
  toggle: () => void;
}) {
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Link key={item.link} href={item.link}>
        {item.label}
      </Link>
    ));
    if (menuItems) {
      return (
        <Accordion key={link.label} variant="filled">
          <Accordion.Item value={link.label}>
            <Accordion.Control>{link.label}</Accordion.Control>
            <Accordion.Panel>
              <Stack ml="md">
                <Link key={link.link} href={link.link}>
                  {link.label}
                </Link>
                {menuItems}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      );
    }
    return (
      <Link
        key={link.label}
        href={link.link}
        className="p-4 inline-block w-full"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <MediaQuery largerThan="sm" styles={{ display: "none", width: 0 }}>
      <Navbar
        width={{ base: 300 }}
        p="xs"
        hidden={!isOpen}
        hiddenBreakpoint="sm"
      >
        <Navbar.Section grow>{items}</Navbar.Section>
      </Navbar>
    </MediaQuery>
  );
}