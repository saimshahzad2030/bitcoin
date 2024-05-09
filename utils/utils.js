export const weightedAveragePrice = (
  levelRange,
  levelArray,
  numberOfTokens
) => {
  var value = 0;
  levelArray.map((level) => {
    value += ((parseInt(level.levelPrice) * levelRange) / 100) * numberOfTokens;
  });
  return numberOfTokens == 0 ? 0 : value / numberOfTokens;
};
export const totalRevenue = (levelRange, levelArray, numberOfTokens) => {
  var value = 0;
  levelArray.map((level) => {
    value += ((parseInt(level.levelPrice) * levelRange) / 100) * numberOfTokens;
  });
  return typeof value !== "number" ? 0 : value;
};

export const totalProfit = (
  levelArray,
  averagePurchasePrice,
  numberOfTokens
) => {
  return (
    totalRevenue(levelArray, numberOfTokens) -
    averagePurchasePrice * numberOfTokens
  );
};

export const returnOnServiceEachLevel = (
  level,
  averagePurchasePrice,
  numberOfTokens
) => {
  return (level.levelPrice - averagePurchasePrice) * numberOfTokens;
};
