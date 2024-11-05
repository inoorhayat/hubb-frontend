const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <span className=" letter letter1">Loading</span>
        <span className="letter letter2">حب</span>
      </div>
    </div>
  );
};

export const LoaderLayout = () => {
  return (
    <section
      style={{
        height: "calc(100vh - 4rem)",
      }}
      className="loader"
    >
      <div></div>
    </section>
  );
};

export default Loader;

export const Skeleton = ({
  width = "unset",
  length = 3,
}: {
  width?: string;
  length?: number;
}) => {
  const skeletons = Array.from({ length }, (_, idx) => (
    <div key={idx} className="skeleton-shape"></div>
  ));
  return (
    <div className="skeleton-loader" style={{ width }}>
      {skeletons}
    </div>
  );
};
