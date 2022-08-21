const adminData = [
  {
    id: Math.random().toString(),
    name: "Pratip Kumar",
    code: "abcd",
    gym: "FitWay",
    location: "Kolkata, India",
    password: "admin",
    email: "admin@fitway.com",
    pricing: {
      bronze: 2000,
      silver: 7000,
      gold: 10000,
    },
    maintainence: 2000,
    type: "admin",
  },
  {
    id: Math.random().toString(),
    name: "Sudip Khanna",
    code: "efgh",
    gym: "Anytime Fitness",
    location: "Kolkata, India",
    password: "admin2",
    email: "anytime@fitway.com",
    pricing: {
      bronze: 3000,
      silver: 6000,
      gold: 9000,
    },
    maintainence: 3000,
    type: "admin",
  },
];

export default adminData;
