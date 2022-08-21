import Form from "../components/Form";
import axios from "axios";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const formSubmitHandler = async (data) => {
    console.log(data);
    const response = await axios({
      url: "/api/user/login",
      method: "post",
      data,
    });
    localStorage.setItem("type", response.data.type);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("code", response.data.code);

    if (response.status === 200 && data.type === "Business") {
      router.push("/admin");
    } else if (response.status === 200 && data.type === "Trainer") {
      router.push("/trainer");
    } else if (response.status === 200 && data.type === "Member") {
      router.push("/member");
    } else {
      console.log("ERROR!");
    }
  };
  return (
    <>
      <Form title="Sign Up" formSubmitHandler={formSubmitHandler} />
    </>
  );
}
