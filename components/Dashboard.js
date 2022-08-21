import GridInfo from "./ui/GridInfo";
import Image from "next/image";

const Dashboard = () => {
  return (
    <section className="ml-20 flex flex-col gap-12 w-full">
      <GridInfo />
      <h3 className="font-prim font-medium text-prim text-2xl ">Metrics -</h3>
      <div className="w-32 h-32 relative"></div>
    </section>
  );
};

export default Dashboard;
