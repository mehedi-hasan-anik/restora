import { Col, Form, Input, Row, Select } from "antd";
import "./EmergencyContact.style.scss";
const { Option } = Select;

const EmergencyContact = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="emergency-contact-wrapper">
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
              label="Emergency Contact"
              name="emergencyContact"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Emergency Contact" />
            </Form.Item>

            <Form.Item
              label="Emergency Work Phone"
              name="emergencyWorkPhone"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Emergency Work Phone" />
            </Form.Item>

            <Form.Item
              label="Alter Emergency Contact"
              name="alterEmergencyContact"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Alter Emergency Contact" />
            </Form.Item>

            <Form.Item
              label="Alt Emergency Work Phone"
              name="altEmergencyWorkPhone"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Alt Emergency Work Phone" />
            </Form.Item>
          </Col>
          <Col lg={12} xl={12} xxl={12}>
            <Form.Item
              label="Emergency Home Phone"
              name="emergencyHomePhone"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Emergency Home Phone" />
            </Form.Item>

            <Form.Item
              label="Emergency Contact Relation"
              name="emergencyContactRelation"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Emergency Contact Relation" />
            </Form.Item>
            <Form.Item
              label="Alt Emergency Home Phone"
              name="altEmergencyHomePhone"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Alt Emergency Home Phone" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EmergencyContact;
