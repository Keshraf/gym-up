import {
  FiActivity,
  FiZap,
  FiUsers,
  FiShield,
  FiMapPin,
  FiGlobe,
  FiDollarSign,
  FiHeart,
} from "react-icons/fi";

const Features = () => {
  return (
    <div className="flex flex-row gap-12 mt-8">
      <div className="flex flex-col items-start">
        <h3 className="font-sec text-3xl font-light">Features</h3>
        <ul className="mt-6 flex flex-col font-sec text-2xl text-prim gap-4 ">
          <li className="flex flex-row gap-6 items-center">
            <FiUsers /> HR Management
          </li>
          <li className="flex flex-row gap-6 items-center">
            <FiActivity /> Performance Analytics
          </li>
          <li className="flex flex-row gap-6 items-center">
            <FiShield /> Security Access
          </li>
          <li className="flex flex-row gap-6 items-center">
            <FiDollarSign /> Finance Tracking
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="font-sec text-3xl font-light">Metric</h3>
        <ul className="mt-6 flex flex-col font-sec text-2xl text-prim gap-4 ">
          <li className="flex flex-row gap-6 items-center">
            <FiGlobe /> Globally Recognised
          </li>
          <li className="flex flex-row gap-6 items-center">
            <FiHeart /> 100% User Satisfaction
          </li>
          <li className="flex flex-row gap-6 items-center">
            <FiZap /> 4x Efficiency
          </li>
          <li className="flex flex-row gap-6 items-center">
            <FiMapPin /> 50 Partner Chains
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
