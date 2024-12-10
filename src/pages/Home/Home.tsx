import { Headings } from "@components/Headings/Headings";
import { Header } from "@components/Header/Header.tsx";
import { Tabs } from "@components/Tabs/Tabs";
import { Self } from "@components/Self/Self.tsx";

import "./styles.css";

export const Home = () => {
  return (
    <main>
      <Header />
      <Headings text="Productos San Rafael Balance" customClassName="bg-amber-400" />
      <Tabs />
      <Headings text="Aprende a Cuidarte" customClassName="bg-amber-100"/>
      <Self />
    </main>
  );
};
