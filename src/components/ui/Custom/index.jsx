import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Select } from "antd";

import "./Custom.style.scss";
const { Option } = Select;

const Custom = () => {
  const onCustomFieldTypeChange = (value) => {
    console.log("value", value);
  };

  return (
    <div className="custom-wrapper">
      <Row gutter={20}>
        <Col lg={11} xl={11} xxl={11}>
          <Form.Item
            label="Custom Field Name"
            name="customFieldName"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Custom Field Name" size="large" />
          </Form.Item>
        </Col>
        <Col lg={11} xl={11} xxl={11}>
          <Form.Item
            label="Custom Field Type"
            name="customFieldType"
            rules={[{ required: true, message: "" }]}
          >
            <Select
              size="large"
              placeholder="Custom Field Type"
              onChange={onCustomFieldTypeChange}
              allowClear
              style={{ textAlign: "left" }}
            >
              <Option value="Bangladesh">Bangladesh</Option>
              <Option value="India">India</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col lg={2} xl={2} xxl={2}></Col>
        <Col lg={22} xl={22} xxl={22}>
          <Form.Item
            label="Custom Value"
            name="customValue"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Custom Value" size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Row gutter={20}>
                <Col lg={11} xl={11} xxl={11}>
                  <Form.Item
                    {...restField}
                    label="Custom Field Name"
                    name={[name, "first"]}
                    rules={[{ required: true, message: "" }]}
                  >
                    <Input placeholder="Custom Field Name" size="large" />
                  </Form.Item>
                </Col>
                <Col lg={11} xl={11} xxl={11}>
                  <Form.Item
                    {...restField}
                    label="Custom Field Type"
                    name={[name, "last"]}
                    rules={[{ required: true, message: "" }]}
                  >
                    <Select
                      size="large"
                      placeholder="Custom Field Type"
                      onChange={onCustomFieldTypeChange}
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
                <Col lg={22} xl={22} xxl={22}>
                  <Form.Item
                    {...restField}
                    label="Custom Value"
                    name={[name, "last"]}
                    rules={[{ required: true, message: "" }]}
                  >
                    <Input placeholder="Custom Value" size="large" />
                  </Form.Item>
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
    </div>
  );
};

export default Custom;
