const getMaximumLoanAmount = (monthlyIncomeAfterTax: number): number => {
  return monthlyIncomeAfterTax * 0.49;
};

export default getMaximumLoanAmount;
