interface ISeparatorBar {
  direction: "vertical" | "horizontal";
  color: "grey" | "blue";
  width: number;
  margin?: number;
  length?: string;
}

const SeparatorBar = ({
  direction,
  color,
  width,
  margin,
  length,
}: ISeparatorBar): JSX.Element => {
  return direction == "horizontal" ? (
    <div
      className={`h-${width} ${
        length ? `w-${length}` : "w-full"
      } bg-base-${color} ${margin ? `my-${margin}` : ""}`}
    />
  ) : (
    <div
      className={`w-${width} ${
        length ? `h-${length}` : "h-full"
      } bg-base-${color} ${margin ? `mx-${margin}` : ""}`}
    />
  );
};

export default SeparatorBar;
