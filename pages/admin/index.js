import adminData from "../../data/adminData";
import trainerData from "../../data/trainerData";
import memberData from "../../data/memberData";
import Dashboard from "../../components/Dashboard";
import AdminLayout from "../../components/AdminLayout";

export default function Admin() {
  return (
    <section className="w-8/12 h-screen flex flex-col mx-auto">
      <AdminLayout>
        <Dashboard />
      </AdminLayout>
    </section>
  );
}
