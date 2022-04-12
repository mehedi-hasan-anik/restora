import { Table } from "antd";
import "./DesignationTable.style.scss";

const DesignationTable = () => {
  const dataSource = [
    {
      key: "1",
      sl: "1",
      positon: "mike",
      details:
        "	Oversee the successful running of a restaurant by hiring qualkklk;ified staff, monitoring customer satisfaction, and ensuring that all products and beverages are ordered in the correct quantities.",
    },
    {
      key: "2",
      sl: "2",
      positon: "hussey",
      details:
        "A salesman is someone who works in sales, with the main function of selling products or services to others either by visiting locations",
    },
    {
      key: "3",
      sl: "3",
      positon: "hussey",
      details:
        "A salesman is someone who works in sales, with the main function of selling products or services to others either by visiting locations",
    },
    {
      key: "4",
      sl: "4",
      positon: "hussey",
      details:
        "A salesman is someone who works in sales, with the main function of selling products or services to others either by visiting locations",
    },
  ];

  const columns = [
    {
      title: "sl",
      dataIndex: "sl",
      key: "sl",
    },
    {
      title: "positon",
      dataIndex: "positon",
      key: "positon",
    },
    {
      title: "details",
      dataIndex: "details",
      key: "details",
    },
  ];
  return (
    <div className="designation-table-wrapper">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default DesignationTable;
