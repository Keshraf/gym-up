import Header from "./ui/Header";
import SideBoard from "./SideBoard";

const AdminLayout = (props) => {
  return (
    <>
      <Header title="Anytime Fitness" subtitle="Kolkata - India" />
      <section className="flex flex-row justify-start w-full h-fit mt-16">
        <SideBoard />
        {props.children}
      </section>
    </>
  );
};

export default AdminLayout;
