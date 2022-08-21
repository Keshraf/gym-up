import { OutlineButton, FillButton } from "./ui/Button";
import Link from "next/dist/client/link";

const Navigation = () => {
  return (
    <nav className="flex flex-row justify-between w-full h-fit items-center mt-20 mb-20 ">
      <ul className="flex flex-row justify-start items-center gap-4 font-prim">
        <li className="cursor-pointer">Business</li>
        <li className="rounded bg-white h-1.5 w-1.5"></li>
        <li className="cursor-pointer">Trainer</li>
        <li className="rounded bg-white h-1.5 w-1.5"></li>
        <li className="cursor-pointer">Member</li>
        <li className="rounded bg-white h-1.5 w-1.5"></li>
        <li className="cursor-pointer">
          <Link href="/blog">
            <a>Blogs</a>
          </Link>
        </li>
      </ul>
      <div className="flex flex-row gap-6">
        <Link href="/login">
          <a>
            <OutlineButton>Login</OutlineButton>
          </a>
        </Link>
        <Link href="/signup">
          <a>
            <FillButton>Sign up</FillButton>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
