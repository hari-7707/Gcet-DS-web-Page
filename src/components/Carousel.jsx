import { Carousel } from "@material-tailwind/react";

export default function CarouselTransition({ className, props }) {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className={`    ${className}`}
      autoplay
      loop
      {...props}
    >
      <img src="" alt="image 1" className="h-full w-full object-cover" />
      <img src="" alt="image 2" className="h-full w-full object-cover" />
      <img src="" alt="image 3" className="h-full w-full object-cover" />
    </Carousel>
  );
}
