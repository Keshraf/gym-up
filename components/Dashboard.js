import GridInfo from "./ui/GridInfo";

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
      <div className="w-8/12 h-60 relative"></div>
    </section>
  );
};

export default Dashboard;
