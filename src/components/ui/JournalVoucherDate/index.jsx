import { Col, DatePicker, Form, Input, Row } from "antd";
import "./JournalVoucherDate.style.scss";

function JournalVoucherDate() {
  const { TextArea } = Input;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div className="journal-voucher-date-wrapper">
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Row>
          <Col lg={12} xl={12} xxl={12}>
            <Form.Item label="Voucher No" name="voucherNo">
              <Input />
            </Form.Item>

            <Form.Item label="Date" name="date">
              <div style={{ float: "left" }}>
                <DatePicker onChange={onChange} />
              </div>
            </Form.Item>

            <Form.Item label="Remark" name="remark">
              <TextArea rows={4} />
            </Form.Item>
          </Col>

          {/* <Col lg={12} xl={12} xxl={12}></Col> */}
        </Row>
      </Form>
    </div>
  );
}

export default JournalVoucherDate;
