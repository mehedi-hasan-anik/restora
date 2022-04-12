import { Button, Form, Input, Modal, Select, Space } from "antd";
import { useState } from "react";
import "./DesignationModal.style.scss";
const { Option } = Select;

const { TextArea } = Input;

const DesignationModal = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <div className="add-positionBtn-wrapper">
        <Button type="primary" onClick={showModal}>
          Add Position
        </Button>
      </div>
      <Modal
        title="Add employee positon"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          name="control-hooks"
          onFinish={onFinish}
        >
          <Form.Item
            name="position"
            label="Position"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="details"
            label="Details"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <Form.Item>
            <div className="btn-wrapper">
              <Space>
                <Button
                  htmlType="button"
                  onClick={onReset}
                  type="primary"
                  danger
                >
                  Reset
                </Button>
                <Button type="primary" htmlType="submit">
                  Add
                </Button>
              </Space>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DesignationModal;
