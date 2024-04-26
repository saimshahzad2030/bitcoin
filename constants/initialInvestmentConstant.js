export const initialInvestmentConstant = [
  {
    title: "#I.I.O",
    note: '(this only populates if they say "yes", to the "initial investment?" above)',
    inputs: [
      {
        type: "text",
        name: "I.I.O Price",
        label: "I.I.O Price",
        note: "(always blank)",
      },
      {
        type: "text",
        name: "Return on Investment",
        label: "Return on Investment",
        note: '(this will always be their initial investment amount identified in the "initial investment?" above)',
      },
    ],
  },
  {
    title: "#1",
    inputs: [
      {
        type: "text",
        name: "Sell Price",
        label: "Sell Price",
        note: "(populates to depending on the sell level)",
      },
      {
        type: "text",
        name: "Custom Sell Price",
        label: "Custom Sell Price",
        note: "(this override the original sell price and allow a custom sell level to be added in)",
      },
      {
        type: "text",
        name: "Return of Investment",
        label: "Return of Investment",
        note: "(revenue)",
      },
    ],
  },
  {
    title: "#2",
    inputs: [
      {
        type: "text",
        name: "Sell Price",
        label: "Sell Price",
        note: "(populates to depending on the sell level)",
      },
      {
        type: "text",
        name: "Custom Sell Price",
        label: "Custom Sell Price",
        note: "(this override the original sell price and allow a custom sell level to be added in)",
      },
      {
        type: "text",
        name: "Return of Investment",
        label: "Return of Investment",
        note: "(revenue)",
      },
    ],
  },
  {
    title: "#3",
    inputs: [
      {
        type: "text",
        name: "Sell Price",
        label: "Sell Price",
        note: "(populates to depending on the sell level)",
      },
      {
        type: "text",
        name: "Custom Sell Price",
        label: "Custom Sell Price",
        note: "(this override the original sell price and allow a custom sell level to be added in)",
      },
      {
        type: "text",
        name: "Return of Investment",
        label: "Return of Investment",
        note: "(revenue)",
      },
    ],
  },
];
