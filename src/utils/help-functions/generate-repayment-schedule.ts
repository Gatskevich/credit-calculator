export const generateRepaymentSchedule = (
  amount: number,
  term: number,
  rate: number,
  startMonth: number = 1,
  endMonth: number = term
) => {
  const schedule = [];

  if (rate === 0) {
    const monthlyPayment = amount / term;
    let balance = amount - monthlyPayment * (startMonth - 1);

    for (let i = startMonth; i <= endMonth; i++) {
      const capitalPayment = monthlyPayment;
      balance -= capitalPayment;

      schedule.push({
        month: i,
        payment: monthlyPayment,
        capital: capitalPayment,
        interest: 0,
        balance: balance > 0 ? balance : 0,
      });
    }
  } else {
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));

    const balanceAtStartMonth = amount * Math.pow(1 + monthlyRate, startMonth - 1) -
      (monthlyPayment * (Math.pow(1 + monthlyRate, startMonth - 1) - 1)) / monthlyRate;

    let balance = balanceAtStartMonth;

    for (let i = startMonth; i <= endMonth; i++) {
      const interestPayment = balance * monthlyRate;
      const capitalPayment = monthlyPayment - interestPayment;
      balance -= capitalPayment;

      schedule.push({
        month: i,
        payment: monthlyPayment,
        capital: capitalPayment,
        interest: interestPayment,
        balance: balance > 0 ? balance : 0,
      });
    }
  }

  return schedule;
};
