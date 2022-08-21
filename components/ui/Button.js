export const OutlineButton = (props) => {
  const empptyFn = () => {};
  return (
    <button
      className={`font-prim bg-transparent outline outline-1 outline-sec text-white border-box px-8 py-1 rounded ${props.className}`}
      onClick={props.onClickHandler ? props.onClickHandler : empptyFn}
    >
      {props.children}
    </button>
  );
};
export const FillButton = (props) => {
  const empptyFn = () => {};
  return (
    <button
      className={`font-prim bg-white text-third border-box px-8 py-1 rounded ${props.className}`}
      onClick={props.onClickHandler ? props.onClickHandler : empptyFn}
    >
      {props.children}
    </button>
  );
};
