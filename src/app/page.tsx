import Link from "next/link";

import Button from "./components/Button";
import Header from "./components/Header";
import PortoImage from "./components/PortoImage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Header hideHomeButton />
      <PortoImage />
      <div className="mt-20 flex flex-col gap-10 h-1/2">
        <Link href="/tipo">
          <Button isBlueColor>{"Cadastrar bikes"}</Button>
        </Link>
        <Link href="/bikes">
          <Button>{"Visualizar bikes"}</Button>
        </Link>
      </div>
    </main>
  );
}
