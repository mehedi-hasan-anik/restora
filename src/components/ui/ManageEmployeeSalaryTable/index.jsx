import { DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Space, Table } from "antd";
import { useState } from "react";
import "./ManageEmployeeSalaryTable.style.css";

const ManageEmployeeSalaryTable = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleReset = () => {
    form.resetFields();
  };

  const columns = [
    {
      title: "SL",
      dataIndex: "sl",
      key: "name",
      width: 60,
    },
    {
      title: "Emplyee Name",
      dataIndex: "emplyeeName",
      key: "age",
    },
    { title: "Employee Id", dataIndex: "employeeId", key: "1" },
    { title: "Total Salary", dataIndex: "totalSalary", key: "2" },
    { title: "Working Hour", dataIndex: "workingHour", key: "3" },
    { title: "Payment Type", dataIndex: "paymentType", key: "4" },
    { title: "Date", dataIndex: "date", key: "5" },
    { title: "Paid By", dataIndex: "paidBy", key: "6" },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      render: () => (
        <Space>
          <Button type="primary" onClick={showModal}>
            Pay now
          </Button>

          <Button danger type="primary">
            <DeleteOutlined style={{ fontSize: "17px" }} />
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      sl: "1",
      emplyeeName: "fdsfsdf",
      employeeId: "dfdf",
      totalSalary: "dfs",
      workingHour: "fsdfs",
      paymentType: "dfsdf",
      date: "dsfff",
      paidBy: "dfdsf",
    },
    {
      key: "2",
      sl: "2",
      emplyeeName: "dsfsf",
      employeeId: "dfsd",
      totalSalary: "dsfds",
      workingHour: "dfsd",
      paymentType: "dfsdf",
      date: "dsfsf",
      paidBy: "fsfsd",
    },
  ];

  const handleSubmit = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="confirm"
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Employee Name"
            name="employeeName"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Total Salary"
            name="totalSalary"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Working Hour"
            name="workingHour"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Working Period"
            name="workingPeriod"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Space>
            <Button htmlType="button" danger onClick={handleReset}>
              Reset
            </Button>

            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageEmployeeSalaryTable;
