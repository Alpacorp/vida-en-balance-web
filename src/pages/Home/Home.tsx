import {Heading, Hero, Self, Tabs} from "@ui/components";


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
