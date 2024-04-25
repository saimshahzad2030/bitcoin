import Cookies from "js-cookie";
// export const BASEURL = "https://bitcoin-backend-lyart.vercel.app/api";
export const BASEURL = "http://localhost:4000/api";

export const headersFunction = () => {
  const token = Cookies.get("token");
  const headersvalue = { headers: { Authorization: `Bearer ${token}` } };
  return headersvalue;
};
export const coins = [
  {
    name: "Coin1",
    maxValue: 200,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "August",
      "October",
      "November",
      "December",
    ],
    data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
  },
  {
    name: "Coin2",
    maxValue: 120,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "August",
      "October",
      "November",
      "December",
    ],
    data: [15, 59, 4, 82, 30, 67, 69, 21, 15, 70, 14, 13, 55],
  },
  {
    name: "Coin3",
    maxValue: 350,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "August",
      "October",
      "November",
      "December",
    ],
    data: [165, 59, 40, 181, 56, 45, 40, 65, 59, 29, 14, 156, 55],
  },
];

export const WELCOMEPAGE = [
  "/assets/welcome/1.jpg",
  "/assets/welcome/2.jpg",
  "/assets/welcome/3.jpg",
];

export const BLANKPAGE = [
  { name: "Coin", image: "/assets/blankhome/bit-coin.svg" },
  { name: "Chart", image: "/assets/blankhome/chart-line.svg" },
  { name: "Custom levels", image: "/assets/blankhome/customization.svg" },
  { name: "Table View", image: "/assets/blankhome/table.svg" },
];
