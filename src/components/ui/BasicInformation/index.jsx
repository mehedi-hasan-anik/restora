import { Col, Form, Input, Row, Select } from "antd";
import "./BasicInformation.style.scss";
const { Option } = Select;

const BasicInformation = () => {
  const onGenderChange = (value) => {
    console.log("value", value);
  };

  return (
    <div className="basic-information-wrapper">
      <Row gutter={20}>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="first name" />
          </Form.Item>
        </Col>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="last Name" />
          </Form.Item>
        </Col>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Email Address"
            name="emailAddress"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="your email address" />
          </Form.Item>
        </Col>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="your phone number" />
          </Form.Item>
        </Col>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            name="Country"
            label="Country"
            rules={[{ required: true }]}
          >
            <Select
              placeholder="Select country"
              onChange={onGenderChange}
              allowClear
              style={{ textAlign: "left" }}
            >
              <Option value="Bangladesh">Bangladesh</Option>
              <Option value="India">India</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            label="State"
            name="state"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Select
              placeholder="Select state"
              onChange={onGenderChange}
              allowClear
              style={{ textAlign: "left" }}
            >
              <Option value="Bangladesh">Bangladesh</Option>
              <Option value="India">India</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="city" />
          </Form.Item>
        </Col>
        <Col lg={6} xl={6} xxl={6}>
          <Form.Item
            label="Zip Code "
            name="zipCode"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="your zip code" />
          </Form.Item>
        </Col>
      </Row>

      {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}

      <h2 className="basic-information-title">Login Information</h2>

      <Row gutter={20}>
        <Col lg={12} xl={12} xxl={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="your email" />
          </Form.Item>
        </Col>
        <Col lg={12} xl={12} xxl={12}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInformation;
