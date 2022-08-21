import {
  FiAirplay,
  FiDollarSign,
  FiLogIn,
  FiPhoneCall,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import Linked from "./Linked";
import { useRouter } from "next/dist/client/router";

const SideBoard = () => {
  const router = useRouter();
  const clickHandler = () => {
    localStorage.clear();
    router.replace("../");
  };

  return (
    <nav className="flex flex-col justify-between gap-60 w-fit pr-12 border border-y-0 border-l-0 border-sec border-dotted py-4">
      <div className="flex flex-col gap-5">
        <Linked href="/admin">
          <div className="flex flex flex-row gap-6 items-center  cursor-pointer">
            <FiAirplay className="text-2xl text-sec" />
            <h3 className="font-sec text-white text-2xl">Dashboard</h3>
          </div>
        </Linked>
        <Linked href="/admin/members">
          <div className="flex flex flex-row gap-6 items-center cursor-pointer">
            <FiUser className="text-2xl text-sec " />
            <h3 className="font-sec text-white text-2xl ">Members</h3>
          </div>
        </Linked>
        <Linked href="/admin/trainer">
          <div className="flex flex flex-row gap-6 items-center  cursor-pointer">
            <FiUsers className="text-2xl text-sec" />
            <h3 className="font-sec text-white text-2xl">Trainer</h3>
          </div>
        </Linked>
        <Linked href="/admin/finance">
          <div className="flex flex flex-row gap-6 items-center  cursor-pointer">
            <FiDollarSign className="text-2xl text-sec" />
            <h3 className="font-sec text-white text-2xl">Finance</h3>
          </div>
        </Linked>
      </div>
      <div className="flex flex-col gap-5">
        <Linked href="/admin">
          <div className="flex flex flex-row gap-6 items-center  cursor-pointer">
            <FiPhoneCall className="text-2xl text-sec" />
            <h3 className="font-sec text-white text-2xl">Support</h3>
          </div>
        </Linked>
        <div
          className="flex flex flex-row gap-6 items-center  cursor-pointer"
          onClick={clickHandler}
        >
          <FiLogIn className="text-2xl text-sec" />
          <h3 className="font-sec text-white text-2xl">Log Out</h3>
        </div>
      </div>
    </nav>
  );
};

export default SideBoard;
