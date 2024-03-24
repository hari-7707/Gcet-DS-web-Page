export default function Logo({ classname, src, props }) {
  return (
    <>
      <img
        src={src}
        alt="GCET LOGO"
        className={`rounded-full ${classname}`}
        {...props}
      />
    </>
  );
}
