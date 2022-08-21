import tierData from "../data/tierData";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import GridInfo from "./ui/GridInfo";

const Dashboard = () => {
  return (
    <section className="ml-20 flex flex-col gap-12 w-full">
      <GridInfo />
      <h3 className="font-prim font-medium text-prim text-2xl ">Metrics -</h3>
      <ResponsiveContainer width="70%" height="100%">
        <BarChart width={10} height={40} data={tierData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="june" fill="#1F1F1F" barCategoryGap="20%" />
          <Bar dataKey="july" fill="#343434" barCategoryGap="20%" />
          <Bar dataKey="august" fill="#414141" barCategoryGap="20%" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Dashboard;
