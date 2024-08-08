import React, { useEffect, useMemo, useState } from 'react';
import { useCredit } from '../../utils/context/CreditContext';
import { Button } from '../Shared/Button/Button';
import { generateRepaymentSchedule } from '../../utils/help-functions/generate-repayment-schedule';
import './RepaymentSchedule.scss';

const ITEMS_PER_PAGE = 10;
const PAGE_RANGE = 5;

const RepaymentSchedule: React.FC = () => {
  const { formData } = useCredit();
  const [currentPage, setCurrentPage] = useState(1);

  const startMonth = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endMonth = Math.min(currentPage * ITEMS_PER_PAGE, formData?.term || 0);

  const currentPageSchedule = useMemo(() => {
    if (!formData) return [];

    const { amount, term, rate } = formData;
    return generateRepaymentSchedule(amount, term, rate, startMonth, endMonth);
  }, [formData, startMonth, endMonth]);

  const totalPages = useMemo(() => {
    if (!formData) return 0;

    return Math.ceil((formData.term || 0) / ITEMS_PER_PAGE);
  }, [formData]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [formData]);

  const getPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - PAGE_RANGE);
    const endPage = Math.min(totalPages, currentPage + PAGE_RANGE);

    if (startPage > 1) {
      buttons.push(
        <Button key={1} color="PRIMARY" onClick={() => handlePageChange(1)}>
          1
        </Button>
      );
      if (startPage > 2) buttons.push(<span key="ellipsis-start">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          color="PRIMARY"
          active={i === currentPage}
        >
          {i}
        </Button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) buttons.push(<span key="ellipsis-end">...</span>);
      buttons.push(
        <Button key={totalPages} color="PRIMARY" onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </Button>
      );
    }

    return buttons;
  };

  if (!formData) {
    return (
      <div className="container">
        <p>Please provide credit details to see the repayment schedule.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Payment</th>
            <th>Capital</th>
            <th>Interest</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {currentPageSchedule.map(({ month, payment, capital, interest, balance }) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{payment.toFixed(2)}</td>
              <td>{capital.toFixed(2)}</td>
              <td>{interest.toFixed(2)}</td>
              <td>{balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          color="PRIMARY"
        >
          Previous
        </Button>
        {getPageButtons()}
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          color="PRIMARY"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default RepaymentSchedule;
