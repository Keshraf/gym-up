import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { FillButton, OutlineButton } from "../../components/ui/Button";
import axios from "axios";

export default function Finance() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const phoneChangeHandler = (event) => {
    setPhone(event.currentTarget.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.currentTarget.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios({
      url: "/api/message",
      method: "post",
      data: { phone, message },
    });

    console.log(response);
  };
  return (
    <section className="w-8/12 h-screen flex flex-col mx-auto">
      <AdminLayout>
        <section className="ml-20 flex flex-col gap-6 w-full">
          <h2 className="font-prim font-medium text-prim text-2xl">Message</h2>

          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <input
              type="text"
              onChange={phoneChangeHandler}
              className="w-5/12 h-12 pl-4 rounded mb-2 bg-sec font-prim"
              value={phone}
              placeholder="phone"
            ></input>
            <input
              type="text"
              onChange={messageChangeHandler}
              className="w-5/12 h-12 pl-4 rounded mb-2 bg-sec font-prim"
              message={message}
              placeholder="message"
            ></input>
            <button
              type="submit"
              className="font-prim bg-white text-third border-box px-8 py-1 rounded w-5/12 h-12"
            >
              Send
            </button>
          </form>
        </section>
      </AdminLayout>
    </section>
  );
}
