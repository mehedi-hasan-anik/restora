import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import "./Benefits.style.scss";
const { Option } = Select;

const Benefits = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  function onDateAccrualChange(date, dateString) {
    console.log(date, dateString);
  }
  const onBenefitStatusChange = (value) => {
    console.log("value", value);
  };

  return (
    <div className="benefits-wrapper">
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Row gutter={20}>
          <Col lg={11} xl={11} xxl={11}>
            <Form.Item
              label="Benefit Class code"
              name="benefitClassCode"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Benefit Class code" size="large" />
            </Form.Item>

            <Form.Item
              label="Benefit Accrual Date"
              name="benefitAccrualDate"
              rules={[{ required: true, message: "" }]}
            >
              <DatePicker
                style={{ width: "100%" }}
                onChange={onDateAccrualChange}
                placeholder="Benefit Accrual Date"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col lg={11} xl={11} xxl={11}>
            <Form.Item
              label="Benefit Description"
              name="benefitDescription"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Benefit Description" size="large" />
            </Form.Item>
            <Form.Item
              label="Benefit Status"
              name="benefitStatus"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                size="large"
                placeholder="Benefit Description"
                onChange={onBenefitStatusChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col lg={2} xl={2} xxl={2}></Col>
        </Row>
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row gutter={20}>
                  <Col lg={11} xl={11} xxl={11}>
                    <Form.Item
                      label="Benefit Class code"
                      {...restField}
                      name={[name, "first"]}
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Benefit Class code" size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Benefit Accrual Date"
                      {...restField}
                      name={[name, "first"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <DatePicker
                        size="large"
                        style={{ width: "100%" }}
                        onChange={onDateAccrualChange}
                        placeholder="Benefit Accrual Date"
                      />
                    </Form.Item>
                  </Col>
                  <Col lg={11} xl={11} xxl={11}>
                    <Form.Item
                      label="Benefit Description"
                      {...restField}
                      name={[name, "last"]}
                      rules={[{ required: true, message: "" }]}
                    >
                      <Input placeholder="Benefit Description" size="large" />
                    </Form.Item>
                    <Form.Item
                      label="Benefit Status"
                      {...restField}
                      name={[name, "last"]}
                      rules={[{ required: true, message: "Missing last name" }]}
                    >
                      <Select
                        size="large"
                        placeholder="Benefit Status"
                        onChange={onBenefitStatusChange}
                        allowClear
                        style={{ textAlign: "left" }}
                      >
                        <Option value="Bangladesh">Bangladesh</Option>
                        <Option value="India">India</Option>
                      </Select>
                    </Form.Item>
                  </Col>

                  <Col lg={2} xl={2} xxl={2}>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Col>
                </Row>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  );
};

export default Benefits;
