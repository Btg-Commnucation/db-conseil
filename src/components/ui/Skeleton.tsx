const Skeleton = ({
  styles,
  namedClass,
}: {
  styles: { [key: string]: string };
  namedClass: string;
}) => {
  return <div style={styles} className={`skeleton ${namedClass}`} />;
};

export { Skeleton };
