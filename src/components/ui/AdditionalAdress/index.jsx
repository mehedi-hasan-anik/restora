import { Col, Form, Input, Row, Select } from "antd";
import "./AdditionalAdress.style.scss";
const { Option } = Select;

const AdditionalAdress = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="additional-wrapper">
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
              label="Home Email"
              name="homeEmail"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Home Email" />
            </Form.Item>

            <Form.Item
              label="Home Phone "
              name="homePhone "
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Home Phone " />
            </Form.Item>

            <Form.Item
              label="Cell Phone"
              name="cellPhone"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Cell Phone" />
            </Form.Item>
          </Col>
          <Col lg={12} xl={12} xxl={12}>
            <Form.Item
              label="Business Email"
              name="businessEmail"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Business Email" />
            </Form.Item>

            <Form.Item
              label="Business Phone"
              name="businessPhone"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Business Phone" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AdditionalAdress;
