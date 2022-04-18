import { Col, Form, Input, Row, Select } from "antd";
import "./Supervisor.style.scss";
const { Option } = Select;

const Supervisor = () => {
  const onSuprervisorNameChange = (value) => {
    console.log("value", value);
  };
  const isSupervisor = (value) => {
    console.log("value", value);
  };

  return (
    <div className="supervisor-wrapper">
      <Row gutter={20}>
        <Col lg={12} xl={12} xxl={12}>
          <Form.Item
            name="Supervisor Name"
            label="supervisorName"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select Supervisor Name"
              onChange={onSuprervisorNameChange}
              allowClear
              style={{ textAlign: "left" }}
            >
              <Option value="Bangladesh">Bangladesh</Option>
              <Option value="India">India</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Supervisor Report"
            name="supervisorReport"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Reports" />
          </Form.Item>
        </Col>
        <Col lg={12} xl={12} xxl={12}>
          <Form.Item
            name="Is Supervisor"
            label="isSupervisor"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="is Supervisor"
              onChange={isSupervisor}
              allowClear
              style={{ textAlign: "left" }}
            >
              <Option value="Bangladesh">Bangladesh</Option>
              <Option value="India">India</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default Supervisor;
