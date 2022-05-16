interface ISeparatorBar {
  className: string
}

const SeparatorBar = ({
  className
}: ISeparatorBar): JSX.Element => {
  return <div className={className}/>
};

export default SeparatorBar;
