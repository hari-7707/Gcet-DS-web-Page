export default function Logo({ className, src, props }) {
  return (
    <>
      <img
        src={src}
        alt="GCET LOGO"
        className={`rounded-full ${className}`}
        {...props}
      />
    </>
  );
}
