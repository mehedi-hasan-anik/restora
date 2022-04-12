import { InboxOutlined } from "@ant-design/icons";
import { Col, DatePicker, Form, Input, Row, Select, Upload } from "antd";
import "./BiographicalInfo.style.scss";
const { Option } = Select;

const { Dragger } = Upload;

const BiographicalInfo = () => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        // message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        // message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  function onDateOfBirthChange(date, dateString) {
    console.log(date, dateString);
  }

  const onMaritalChange = (value) => {
    console.log("value", value);
  };

  const onStateChange = (value) => {
    console.log("value", value);
  };
  const onLiveStateChange = (value) => {
    console.log("value", value);
  };

  const onCityzenChange = (value) => {
    console.log("value", value);
  };

  const onGenderChange = (value) => {
    console.log("value", value);
  };

  return (
    <div className="biographical-info">
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
            <Form.Item label="Date of Birth" name="dateOfBirth">
              <DatePicker
                style={{ width: "100%" }}
                onChange={onDateOfBirthChange}
                placeholder="Date of Birth"
              />
            </Form.Item>

            <Form.Item
              label="Marital Status"
              name="maritalStatus"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select Marital Status"
                onChange={onMaritalChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="EEO Class"
              name="eeoClass"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="EEO Class" />
            </Form.Item>

            <Form.Item
              label="Work in State"
              name="workInState"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select  State"
                onChange={onStateChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Citizenship"
              name="Citizenship"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select  Citizenship"
                onChange={onCityzenChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col lg={12} xl={12} xxl={12}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select  Gender"
                onChange={onGenderChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Ethnic Group"
              name="ethnicGroup"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Ethnic Group" />
            </Form.Item>

            <Form.Item
              label="SSN"
              name="SSN"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="SSN" />
            </Form.Item>

            <Form.Item
              label="Live in State"
              name="liveInState"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                placeholder="Select  Live state"
                onChange={onLiveStateChange}
                allowClear
                style={{ textAlign: "left" }}
              >
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Row gutter={10}>
                <Col lg={18}>
                  <Dragger {...props} style={{ height: "100px" }}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                    </p>
                  </Dragger>
                </Col>
                <Col lg={6}>
                  <p>preview</p>
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BiographicalInfo;
