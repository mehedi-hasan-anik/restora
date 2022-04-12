import { Table } from "antd";
import Title from "../Title/index";
import "./FinancialYearLIst.style.scss";

const FinancialYearList = () => {
  const columns = [
    {
      title: "SL NO.",
      dataIndex: "SL NO.",
      key: "SL NO.",
    },
    {
      title: "Title",
      dataIndex: "Title",
      key: "Title",
    },
    {
      title: "From",
      dataIndex: "From",
      key: "From",
    },
    {
      title: "To",
      dataIndex: "To",
      key: "To",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    },
  ];
  return (
    <div className="financial-year-list-wrapper">
      <Title text="Financial Year list" />
      <Table columns={columns} />
    </div>
  );
};

export default FinancialYearList;
