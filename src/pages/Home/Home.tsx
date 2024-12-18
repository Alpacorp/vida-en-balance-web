import { Heading } from "@components/Heading/Heading.tsx";
import { Tabs } from "@components/Tabs/Tabs";
import { Self } from "@components/Self/Self.tsx";
import {Hero} from "@components/Hero/Hero.tsx";

import "./styles.css";

export const Home = () => {
  return (
    <main>
      <Hero />
      <Heading tag="h1" text="Productos San Rafael Balance" customClassName="bg-amber-400" />
      <Tabs />
      <Heading tag="h2" text="Aprende a Cuidarte" customClassName="bg-amber-100"/>
      <Self />
    </main>
  );
};
