import { Button, Col, Input, Row } from "antd";
import DesignationModal from "../../components/ui/DesignationModal";
import DesignationTable from "../../components/ui/DesignationTable";
import "./Designation.style.scss";

const { Search } = Input;

const Designation = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className="designation-wrapper">
      <DesignationModal />
      <div className="inner-designation-wrapper">
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
        <DesignationTable />
      </div>
    </div>
  );
};

export default Designation;
