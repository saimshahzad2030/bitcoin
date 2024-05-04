import Cookies from "js-cookie";
// export const BASEURL = "https://bitcoin-backend-lyart.vercel.app/api";
export const BASEURL = "http://localhost:4000/api";

export const headersFunction = () => {
  const token = Cookies.get("token");
  if (token) {
    return { headers: { Authorization: `Bearer ${token}` } };
  } else {
    return { headers: {} }; // If token is not available, return empty headers
  }
};
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
  { name: "Subscribed plan", image: "/assets/blankhome/subscribed-plan.svg" },
  { name: "Free plan", image: "/assets/blankhome/free-plan.svg" },
];

export const TOPSELLINGCOINS = [
  { name: "Etherum", image: "/assets/blankhome/bit-coin.svg" },
  { name: "Doge", image: "/assets/blankhome/bit-coin.svg" },
  { name: "Bitcoin ", image: "/assets/blankhome/bit-coin.svg" },
];

export const GoBack = {
  name: "go back",
  image: "/assets/blankhome/go-back.svg",
};
