import AdminLayout from "../../components/AdminLayout";
import memberData from "../../data/memberData";
import MemberList from "../../components/MemberList";
import { FillButton, OutlineButton } from "../../components/ui/Button";

export default function Members() {
  const initialData = {
    name: "name",
    age: "age",
    tier: "tier",
    phone: "phone",
    email: "email",
  };
  return (
    <section className="w-8/12 h-screen flex flex-col mx-auto">
      <AdminLayout>
        <section className="ml-20 flex flex-col gap-6 w-full">
          <h2 className="font-prim font-medium text-prim text-2xl">Members</h2>
          <MemberList data={initialData} blur={true} />
          {memberData.map((item) => {
            return <MemberList data={item} key={item.email} blur={false} />;
          })}
          <div className="flex flex-row gap-6 w-7/12">
            <FillButton>Add Members</FillButton>

            <OutlineButton>Remove Members</OutlineButton>
          </div>
        </section>
      </AdminLayout>
    </section>
  );
}
