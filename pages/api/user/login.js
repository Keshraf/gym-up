import adminData from "../../../data/adminData";
import memberData from "../../../data/memberData";
import trainerData from "../../../data/trainerData";

export default async function handler(req, res) {
  try {
    const { type, email, password } = req.body;

    if (type === "Business") {
      const user = adminData.filter((item) => item.email === email);
      if (password === user[0].password) {
        res.status(200).json(user[0]);
      } else {
        res.status(500);
      }
    } else if (type === "Trainer") {
      const user = trainerData.filter((item) => item.email === email);
      if (password === user[0].password) {
        res.status(200).json(user[0]);
      } else {
        res.status(500);
      }
    } else {
      const user = memberData.filter((item) => item.email === email);
      if (password === user[0].password) {
        res.status(200).json(user[0]);
      } else {
        res.status(500);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
