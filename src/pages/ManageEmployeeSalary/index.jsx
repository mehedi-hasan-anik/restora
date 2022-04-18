import { Button, Col, Input, Row } from "antd";
import ManageEmployeeSalaryTable from "../../components/ui/ManageEmployeeSalaryTable";
import "./ManageEmployeeSalary.style.css";
const { Search } = Input;

const ManageEmployeeSalary = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="manage-employee-salary-wrapper">
      <div className="inner-manage-employee-salary-wrapper">
        <div className="search-wrapper">
          <Row>
            <Col lg={20} xl={20} xxl={20} className="printBtn-wrapper">
              <Button type="primary">Print</Button>
            </Col>
            <Col lg={4} xl={4} xxl={4} className="seachform-wrapper">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </Col>
          </Row>
        </div>
        <ManageEmployeeSalaryTable />
      </div>
    </div>
  );
};

export default ManageEmployeeSalary;
