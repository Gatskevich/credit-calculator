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
\[
\text{Monthly Payment} = \frac{\text{Credit Amount}}{\text{Term}}
\]
Each month, the same amount is paid towards the credit, reducing the balance accordingly.

### With Interest Rate

When there is an interest rate, the monthly payment is calculated using the formula:
\[
\text{Monthly Payment} = \frac{P \times r}{1 - (1 + r)^{-n}}
\]
where:

- \( P \) is the principal amount (credit),
- \( r \) is the monthly interest rate (annual rate divided by 12),
- \( n \) is the total number of payments (term in months).

Each month, the interest payment is:
\[
\text{Interest Payment} = \text{Remaining Balance} \times r
\]
and the capital payment is:
\[
\text{Capital Payment} = \text{Monthly Payment} - \text{Interest Payment}
\]
