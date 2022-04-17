import { Table } from "antd";
import userImg from "../../../image/13151484_10206249714988133_4438894344071414203_n.jpg";
import ManageEmployeeDetails from "../ManageEmployeeDetails";
import "./ManageEmployeeTable.style.css";

const ManageEmployeeTable = () => {
  const columns = [
    {
      title: "Photograph",
      dataIndex: "Photograph",
      key: "Photograph",
      render: () => (
        <img
          src={userImg}
          alt="userImg"
          style={{ width: "200px", height: "50px" }}
        />
      ),
    },
    { title: "First name", dataIndex: "firstName", key: "First name" },
    { title: "Last name", dataIndex: "lastName", key: "Last name" },
    { title: "Designation", dataIndex: "designation", key: "Designation" },
    { title: "Phone", dataIndex: "phone", key: "Phone" },
    { title: "Email adress", dataIndex: "emailAdress", key: "Email adress" },
    { title: "Divison", dataIndex: "divison", key: "Divison" },
    { title: "Duty type", dataIndex: "dutyType", key: "Duty type" },
    { title: "Hire date", dataIndex: "hireDate", key: "Hire date" },
    {
      title: "Original Hire date",
      dataIndex: "originalHireDate",
      key: "Original Hire date",
    },
    {
      title: "Termination date",
      dataIndex: "terminationDate",
      key: "Termination date",
    },
  ];

  const data = [
    {
      key: 1,
      firstName: "john",
      lastName: "brown",
      designation: "react developer",
      phone: "58439579845",
      emailAdress: "jhon@jhon.com",
      divison: "fdsdf",
      dutyType: "df",
      hireDate: "dfdfsf",
      originalHireDate: "dfdsf",
      terminationDate: "dfsdf",
      description: <ManageEmployeeDetails />,
    },
    {
      key: 2,
      firstName: "john",
      lastName: "brown",
      designation: "react developer",
      phone: "58439579845",
      emailAdress: "jhon@jhon.com",
      divison: "fdsdf",
      dutyType: "df",
      hireDate: "dfdfsf",
      originalHireDate: "dfdsf",
      terminationDate: "dfsdf",
      description: <ManageEmployeeDetails />,
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  );
};

export default ManageEmployeeTable;
