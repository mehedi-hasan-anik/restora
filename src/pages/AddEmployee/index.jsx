import { Button, Form, message, Steps } from "antd";
import { useState } from "react";
import AdditionalAdress from "../../components/ui/AdditionalAdress";
import BasicInformation from "../../components/ui/BasicInformation";
import Benefits from "../../components/ui/Benefits";
import BiographicalInfo from "../../components/ui/BiographicalInfo";
import Custom from "../../components/ui/Custom";
import EmergencyContact from "../../components/ui/EmergencyContact";
import PositionalInfo from "../../components/ui/PositionalInfo";
import Supervisor from "../../components/ui/Supervisor";
import "./AddEmployee.style.scss";

const { Step } = Steps;

const steps = [
  {
    title: "Basic Information",
    content: <BasicInformation />,
  },
  {
    title: "Positional Info",
    content: <PositionalInfo />,
  },
  {
    title: "Benefits",
    content: <Benefits />,
  },
  {
    title: "Supervisor",
    content: <Supervisor />,
  },
  {
    title: "Biographical Info",
    content: <BiographicalInfo />,
  },
  {
    title: "Additional Address",
    content: <AdditionalAdress />,
  },
  {
    title: "Emergency Contact",
    content: <EmergencyContact />,
  },
  {
    title: "Custom",
    content: <Custom />,
  },
];

const AddEmployee = () => {
  const [current, setCurrent] = useState(0);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="add-employee-wrapper">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        autoComplete="off"
      >
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}

          {current === steps.length - 1 && (
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}

          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default AddEmployee;
