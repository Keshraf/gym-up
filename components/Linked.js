import Link from "next/link";

const Linked = (props) => {
  return (
    <Link href={props.href}>
      <a>{props.children}</a>
    </Link>
  );
};

export default Linked;
