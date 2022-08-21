import AdminLayout from "../../components/AdminLayout";
import GridInfo from "../../components/ui/GridInfo";
import { FillButton, OutlineButton } from "../../components/ui/Button";

export default function Finance() {
  const grid = {
    Revenue: "$10000",
    Expenditure: "$6000",
    Personnel: "$4500",
    Maintainence: "$1500",
  };
  return (
    <section className="w-8/12 h-screen flex flex-col mx-auto">
      <AdminLayout>
        <section className="ml-20 flex flex-col gap-6 w-full">
          <h2 className="font-prim font-medium text-prim text-2xl">Finance</h2>
          <GridInfo data={grid} />
          <div className="flex flex-row gap-6 w-7/12 mt-12">
            <FillButton>Add Income</FillButton>

            <OutlineButton>Add Expenditure</OutlineButton>
          </div>
        </section>
      </AdminLayout>
    </section>
  );
}
