import { Headings } from "@components/Headings/Headings";
import { Header } from "@components/Header/Header.tsx";
import { Tabs } from "@components/Tabs/Tabs";
import { Self } from "@components/Self/Self.tsx";
import {Footer} from "@components/Footer/Footer.tsx";

import "./styles.css";

export const Home = () => {
  return (
    <main>
      <Header />
      <Headings tag="h1" text="Productos San Rafael Balance" customClassName="bg-amber-400" />
      <Tabs />
      <Headings tag="h2" text="Aprende a Cuidarte" customClassName="bg-amber-100"/>
      <Self />
      <Footer />
    </main>
  );
};
