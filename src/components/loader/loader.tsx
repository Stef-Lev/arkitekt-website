interface Props {
  size: number;
}

const Loader = ({ size }: Props) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="loader text-white"
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
};

export default Loader;
