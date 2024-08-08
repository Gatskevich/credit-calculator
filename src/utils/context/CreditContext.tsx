import { ReactNode, createContext, useContext, useState } from "react";
import { ICreditForm } from "src/interfasec";

interface CreditContextType {
  formData: ICreditForm | null;
  setFormData: (data: ICreditForm) => void;
}

interface CreditProviderProps {
  children: ReactNode;
}

const CreditContext = createContext<CreditContextType | undefined>(undefined);

export const CreditProvider = ({ children }: CreditProviderProps) => {
  const [formData, setFormData] = useState<ICreditForm | null>(null);

  return (
    <CreditContext.Provider value={{ formData, setFormData }}>
      {children}
    </CreditContext.Provider>
  );
};

export const useCredit = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error('useCredit must be used within a CreditProvider');
  }
  return context;
};