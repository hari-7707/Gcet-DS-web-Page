import { Carousel } from "@material-tailwind/react";
import g1 from "/Gcet1.jpg";
import g2 from "/Gcet5.jpg";
import g3 from "/Gcet2.jpg";
export default function CarouselTransition({ className, props }) {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className={`    ${className}`}
      autoplay
      loop
      {...props}
    >
      <img src={g3} alt="image 3" className="h-full w-full object-cover" />
      <img src={g1} alt="image 1" className="h-full w-full object-cover" />
      <img src={g2} alt="image 2" className="h-full w-full object-cover" />
    </Carousel>
  );
}
