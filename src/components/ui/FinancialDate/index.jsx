import { Button, DatePicker, Form, Radio } from "antd";
import { useState } from "react";
import Title from "../Title";
import "./FinancialDate.style.scss";

const FinancialDate = () => {
  const [value, setValue] = useState(1);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const onStatusChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="wrapper">
      <Title text="Financial Year" />
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="From" name="from">
          <DatePicker onChange={onChange} />
        </Form.Item>

        <Form.Item label="To" name="to">
          <DatePicker onChange={onChange} />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Radio.Group onChange={onStatusChange} value={value}>
            <Radio value={1}>Active</Radio>
            <Radio value={2}>Inactive</Radio>
          </Radio.Group>
        </Form.Item>

        <div className="button-wrapper">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button htmlType="button" type="primary">
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FinancialDate;
