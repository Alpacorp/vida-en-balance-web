import { Headings } from "@components/Headings/Headings";
import { Header } from "../../components/Header/Header";

import "./styles.css";

export const Home = () => {
  return (
    <main>
      <Header />
      <Headings />
      <h1>Home</h1>
      <p className="font-montserrat-black">test font black</p>
      <p className="font-montserrat-black-italic">test font italic</p>
      <p className="font-montserrat-bold">test font bold</p>
    </main>
  );
};
