import Header from "./components/Header";
import { Carousel } from "@material-tailwind/react";
import Footer from "./components/Footer";
import g1 from "/Gcet1.jpg";
import g2 from "/Gcet5.jpg";
import g3 from "/Gcet2.jpg";

export default function App() {
  return (
    <>
      <Header></Header>
      <Carousel
        transition={{ duration: 1 }}
        className="rounded-2xl my-10 h-lvh bg-blue-gray-500 py-auto"
        // autoplay
        loop
      >
        <img
          src={g1}
          alt="image 1"
          className="h-3/4 w-3/4 object-cover mx-auto my-auto "
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
      <Footer></Footer>
    </>
  );
}
