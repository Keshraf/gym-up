const GridInfo = ({ data }) => {
  const keys = Object.keys(data);
  const values = Object.values(data);
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-x-12 gap-y-8 w-6/12">
      {keys.map((item, index) => {
        return (
          <>
            <div>
              <h2 className="font-sec text-sec text-2xl font-light mb-2">
                {keys[index]}
              </h2>
              <h3 className="font-prim font-medium text-white text-2xl">
                {values[index]}
              </h3>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default GridInfo;
