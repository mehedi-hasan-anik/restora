import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import "./PositionalInfo.style.scss";
const { Option } = Select;

const PositionalInfo = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onDivisonChange = (value) => {
    console.log("value", value);
  };

  const onDutyChange = (value) => {
    console.log("value", value);
  };

  const onRateChange = (value) => {
    console.log("value", value);
  };

  const onFrequencyChange = (value) => {
    console.log("value", value);
  };

  const onDesignationcyChange = (value) => {
    console.log("value", value);
  };

  const onVoluntaryChange = (value) => {
    console.log("value", value);
  };

  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  function onHireDateChange(date, dateString) {
    console.log(date, dateString);
  }

  function onTerminationDateChange(date, dateString) {
    console.log(date, dateString);
  }
  function onReHireChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className="positional-info">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="off"
      >
        <Row gutter={20}>
          <Col lg={12} xl={12} xxl={12}>
            <Form.Item
              label="Divison"
              name="Divison"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select Divison"
                onChange={onDivisonChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Duty type"
              name="dutyType"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select Duty Type"
                onChange={onDutyChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Original Hire Date" name="originalHireDate">
              <DatePicker style={{ width: "100%" }} onChange={onDateChange} />
            </Form.Item>

            <Form.Item
              label="Termination Reason"
              name="terminationReason"
              rules={[{ required: true, message: "" }]}
            >
              <TextArea
                rows={2}
                placeholder="maxLength is 200"
                maxLength={200}
              />
            </Form.Item>

            <Form.Item
              label="Rate type"
              name="rateType"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select Rate Type"
                onChange={onRateChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Pay Frequency"
              name="payFrequency"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select Frequency"
                onChange={onFrequencyChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Hourly Rate2"
              name="hourlyRate2"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Hourly" />
            </Form.Item>

            <Form.Item
              label="Home Department"
              name="homeDepartment"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Hourly Rate" />
            </Form.Item>
          </Col>
          <Col lg={12} xl={12} xxl={12}>
            <Form.Item
              label="Designation"
              name="designation"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select Designation"
                onChange={onDesignationcyChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item label=" Hire Date" name="hireDate">
              <DatePicker
                style={{ width: "100%" }}
                onChange={onHireDateChange}
              />
            </Form.Item>

            <Form.Item label="Termination Date" name="terminationDate">
              <DatePicker
                style={{ width: "100%" }}
                onChange={onTerminationDateChange}
              />
            </Form.Item>

            <Form.Item
              label="Voluntary Termination"
              name="voluntaryTermination"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select Designation"
                onChange={onVoluntaryChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Re Hire Date" name="reHireDate">
              <DatePicker style={{ width: "100%" }} onChange={onReHireChange} />
            </Form.Item>

            <Form.Item
              label="Rate"
              name="rate"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Rate" />
            </Form.Item>

            <Form.Item
              label="Pay Frequency Text"
              name="payFrequencyText"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Rate" />
            </Form.Item>

            <Form.Item
              label="Hourly Rate3"
              name="hourlyRate3"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder=" Hourly Rate" />
            </Form.Item>

            <Form.Item
              label="Department Text"
              name="departmentText"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder=" Hourly Rate" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PositionalInfo;
