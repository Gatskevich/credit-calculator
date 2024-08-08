import React from 'react'
import CreditForm from '../../components/CreditForm/CreditForm'
import RepaymentSchedule from '../../components/RepaymentScheduleList/RepaymentSchedule'

const CreditCalculator = () => {
  return (
    <div>
      <CreditForm />
      <RepaymentSchedule />
    </div>
  )
}

export default CreditCalculator