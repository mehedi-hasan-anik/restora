import JournalVoucherDate from "../../components/ui/JournalVoucherDate";
import EditableTable from "../../components/ui/JournalVoucherTable/JournalVoucherTable";
import Title from "../../components/ui/Title/index";
import "./JournalVoucher.style.scss";

const JournalVoucher = () => {
  return (
    <div className="journal-voucher-wrapper">
      <div className="inner-journal-voucher-wrapper">
        <Title text="Journal Voucher" />
        <JournalVoucherDate />
        <EditableTable />
      </div>
    </div>
  );
};

export default JournalVoucher;
