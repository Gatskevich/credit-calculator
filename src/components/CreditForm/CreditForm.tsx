import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from 'react-hook-form';
import { ICreditForm } from '../../interfasec/ICreditForm';
import { InputField } from '../Shared/InputField/InputField';
import { Button } from '../Shared/Button/Button';
import { useCredit } from '../../utils/context/CreditContext';
import './CreditForm.scss';

const schema: Yup.ObjectSchema<ICreditForm> = Yup.object().shape({
  amount: Yup.number()
  .transform((value, originalValue) => (originalValue === '' ? NaN : Number(originalValue)))
  .required("Amount is required")
  .typeError("Amount must be a number")
  .moreThan(0, "Amount must be greater than 0"),
term: Yup.number()
  .transform((value, originalValue) => (originalValue === '' ? NaN : Number(originalValue)))
  .required("Term is required")
  .typeError("Term must be a number")
  .moreThan(0, "Term must be greater than 0"),
rate: Yup.number()
  .transform((value, originalValue) => (originalValue === '' ? NaN : Number(originalValue)))
  .required("Rate is required")
  .typeError("Rate must be a number"),
});

const CreditForm= () => {
  const { setFormData } = useCredit();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 0,
      term: 0,
      rate: 0,
    }
  });

  const onSubmit = (data: ICreditForm) => {
    setFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="credit-form">
      <div className="input-row">
        <InputField
            id="amount"
            type="number"
            label="Credit Amount"
            register={register}
            error={errors.amount?.message}
          />
        <InputField
          id="term"
          type="number"
          label="Term (in months)"
          register={register}
          error={errors.term?.message}
        />
        <InputField
          id="rate"
          type="number"
          label="Percentage rate (%)"
          register={register}
          error={errors.rate?.message}
        />
      </div>
      <div className="button-row">
        <Button type="submit" color="SECONDARY">
          Calculate
        </Button>
      </div>
    </form>
  );
};

export default CreditForm;
