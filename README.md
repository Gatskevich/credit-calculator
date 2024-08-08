# Credit Repayment Scheduler

## Overview

The Credit Repayment Scheduler is a web application designed to help users visualize their credit repayment schedule. By entering the credit amount, term (in months), and interest rate, the app calculates monthly payments and provides a detailed breakdown of each payment, showing how much goes towards the credit (capital) and how much goes towards the interest.

## Features

- **Monthly Payment Calculation:** Computes the monthly payment amount based on the credit amount, term, and interest rate.
- **Detailed Breakdown:** Shows how each monthly payment is split between the capital and interest.
- **Pagination:** Allows navigation through the repayment schedule month by month.
- **Responsive Design:** Optimized for various screen sizes and devices.

## How It Works

### Zero Interest Rate

When the interest rate is 0%, the monthly payment is calculated as:
Monthly Payment = Credit Amount / Term
Each month, the same amount is paid towards the credit, reducing the balance accordingly.

### With Interest Rate

When there is an interest rate, the monthly payment is calculated using the formula:
Monthly Payment = P \* r / (1 - (1 + r)^(-n))
where:

- \( P \) is the principal amount (credit),
- \( r \) is the monthly interest rate (annual rate divided by 12),
- \( n \) is the total number of payments (term in months).

Each month, the interest payment is:
Interest Payment = Remaining Balance \* r
and the capital payment is:
Capital Payment = Monthly Payment - Interest Payment

## Getting Started

To get started with the Credit Repayment Scheduler, follow these steps:

1. **Navigate to the Project Directory:**
   ```bash
   git clone https://github.com/yourusername/credit-repayment-scheduler.git
   ```
2. **Clone the Repository:**
  ```bash
  cd credit-repayment-scheduler
   ```
3. **Install Dependencies:**
  ```bash
  npm install
  ```
4. **Start the Development Server:**
  ```bash
  npm start
   ```
## Node.js Version

This project was developed and tested with the following Node.js version:
v22.2.0
  
  


