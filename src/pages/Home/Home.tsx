import { Headings } from "@components/Headings/Headings";
import { Header } from "../../components/Header/Header";
import { Tabs } from "@components/Tabs/Tabs";

import "./styles.css";

export const Home = () => {
  return (
    <main>
      <Header />
      <Headings text="Productos San Rafael Balance" />
      <Tabs />
    </main>
  );
};
