import Header from "./components/Header";
import { Carousel } from "@material-tailwind/react";
import g1 from "/Gcet1.jpg";
import g2 from "/Gcet5.jpg";
import g3 from "/Gcet2.jpg";

export default function App() {
  return (
    <>
      <Header></Header>
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-xl my-10"
        autoplay
        loop
      >
        <img
          src={g1}
          alt="image 1"
          className="h-1/2 w-1/2 object-cover mx-auto "
        />
        <img
          src={g2}
          alt="image 2"
          className="h-1/2 w-1/2 object-cover mx-auto"
        />
        <img
          src={g3}
          alt="image 3"
          className="h-1/2 w-1/2 object-cover mx-auto"
        />
      </Carousel>
    </>
  );
}
