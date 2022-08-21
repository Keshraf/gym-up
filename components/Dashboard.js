import GridInfo from "./ui/GridInfo";
import Image from "next/image";
import Chart from "../public/images/chart.png";

const Dashboard = () => {
  const grid = {
    Revenue: "$10000",
    Members: "3",
    Expenditure: "$6000",
    Trainers: "2",
  };
  return (
    <section className="ml-20 flex flex-col gap-12 w-full">
      <GridInfo data={grid} />
      <h3 className="font-prim font-medium text-prim text-2xl ">Metrics -</h3>
      <div className="w-8/12 h-60 relative">
        <Image src={Chart} alt="chart" layout="fill" />
      </div>
    </section>
  );
};

export default Dashboard;
