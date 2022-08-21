import AdminLayout from "../../components/AdminLayout";
import TrainerList from "../../components/TrainerList";
import { FillButton, OutlineButton } from "../../components/ui/Button";
import trainerData from "../../data/trainerData";

export default function Trainer() {
  const initialData = {
    name: "name",
    attendance: "checkin",
    salary: "salary",
    phone: "phone",
    email: "email",
  };
  return (
    <section className="w-8/12 h-screen flex flex-col mx-auto">
      <AdminLayout>
        <section className="ml-20 flex flex-col gap-6 w-full">
          <h2 className="font-prim font-medium text-prim text-2xl">Members</h2>
          <TrainerList data={initialData} blur={true} />
          {trainerData.map((item) => {
            return <TrainerList data={item} key={item.email} blur={false} />;
          })}
          <div className="flex flex-row gap-6 w-7/12">
            <FillButton>Add Trainer</FillButton>

            <OutlineButton>Remove Trainer</OutlineButton>
          </div>
        </section>
      </AdminLayout>
    </section>
  );
}
