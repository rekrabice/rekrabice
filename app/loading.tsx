import { Loader } from "./mantineClientComponents";

export default function Loading() {
  return (
    <Loader
      color="green"
      size="xl"
      className="fixed inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
}