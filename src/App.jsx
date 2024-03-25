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
        className="rounded-2xl h-lvh bg-gray-100 py-auto"
        autoplay
        loop
      >
        <div className=" flex justify-center items-center size-full">
          <img
            src={g1}
            alt="image 1"
            className=" size-3/4 object-cover mx-auto my-auto "
          />
        </div>
        <div className=" flex justify-center items-center size-full">
          <img
            src={g2}
            alt="image 2"
            className="size-3/4 object-cover mx-auto my-auto"
          />
        </div>
        <div className=" flex justify-center items-center size-full">
          <img
            src={g3}
            alt="image 3"
            className="size-3/4 object-cover mx-auto"
          />
        </div>
      </Carousel>
      <Footer></Footer>
    </>
  );
}
