const MemberList = ({ data, blur }) => {
  return (
    <div>
      <div
        className={`flex flex-row font-prim text-lg font-medium ${
          blur ? "text-sec" : "text-white"
        }`}
      >
        <p className="w-44">{data.name}</p>
        <p className="w-32">{data.age}</p>
        <p className="w-24">{data.tier}</p>
        <p className="w-44">{data.phone}</p>
        <p>{data.email}</p>
      </div>
      <div className="w-full bg-prim h-px my-4"></div>
    </div>
  );
};

export default MemberList;
