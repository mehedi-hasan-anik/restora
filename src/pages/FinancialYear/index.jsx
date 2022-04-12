import FinancialDate from "../../components/ui/FinancialDate";
import FinancialYearList from "../../components/ui/FinancialYearList";
import "./FinancialYear.style.scss";

const FinancialYear = () => {
  return (
    <div className="financial-wrapper">
      <FinancialDate />
      <FinancialYearList />
    </div>
  );
};

export default FinancialYear;
