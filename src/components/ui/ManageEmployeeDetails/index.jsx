import {
  DeleteOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import "./ManageEmployeeDetails.style.css";

const ManageEmployeeDetails = () => {
  return (
    <div>
      <ul className="details-list">
        <li>
          <span class="dtr-title">Termination Reason</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Voluntary Termination</span>{" "}
          <span class="dtr-data">1</span>
        </li>
        <li>
          <span class="dtr-title">Re Hire Date</span>{" "}
          <span class="dtr-data">2022-04-13</span>
        </li>
        <li>
          <span class="dtr-title">Rate Type</span>{" "}
          <span class="dtr-data">Hourly</span>
        </li>
        <li>
          <span class="dtr-title">Rate</span>{" "}
          <span class="dtr-data">584653</span>
        </li>
        <li>
          <span class="dtr-title">Pay Frequency</span>{" "}
          <span class="dtr-data">Annual</span>
        </li>
        <li>
          <span class="dtr-title">Pay Frequency Text</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Hourly Rate2</span>{" "}
          <span class="dtr-data">0</span>
        </li>
        <li>
          <span class="dtr-title">Hourly Rate3</span>{" "}
          <span class="dtr-data">0</span>
        </li>
        <li>
          <span class="dtr-title">Home Department</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Department Text</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Supervisor Name</span>{" "}
          <span class="dtr-data">1</span>
        </li>
        <li>
          <span class="dtr-title">Is Supervisor</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Supervisor Report</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Date of Birth</span>{" "}
          <span class="dtr-data">2022-04-15</span>
        </li>
        <li>
          <span class="dtr-title">Gender</span>{" "}
          <span class="dtr-data">Male</span>
        </li>
        <li>
          <span class="dtr-title">Marital Status</span>{" "}
          <span class="dtr-data">Single</span>
        </li>
        <li>
          <span class="dtr-title">Ethnic Group</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">EEO Class</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">SSN</span> <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Work in State</span>{" "}
          <span class="dtr-data">1</span>
        </li>
        <li>
          <span class="dtr-title">Live in State</span>{" "}
          <span class="dtr-data">1</span>
        </li>
        <li>
          <span class="dtr-title">Home Email</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Business Email</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Home Phone</span>{" "}
          <span class="dtr-data">4456456</span>
        </li>
        <li>
          <span class="dtr-title">Business Phone</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Cell Phone</span>{" "}
          <span class="dtr-data">455634534</span>
        </li>
        <li>
          <span class="dtr-title">Emergency Contact</span>{" "}
          <span class="dtr-data">adsfasdf</span>
        </li>
        <li>
          <span class="dtr-title">Emergency Home Phone</span>{" "}
          <span class="dtr-data">asdfasdfads</span>
        </li>
        <li>
          <span class="dtr-title">Emergency Work Phone</span>{" "}
          <span class="dtr-data">asdfasdf</span>
        </li>
        <li>
          <span class="dtr-title">Emergency Contact Relation</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Alter Emergency Contact</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Alt Emergency Home Phone</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Alt Emergency Work Phone</span>{" "}
          <span class="dtr-data"></span>
        </li>
        <li>
          <span class="dtr-title">Action</span>{" "}
          <span class="dtr-data">
            <a
              href="https://restorapos.com/newrpos/hrm/Employees/update_employee_form/EUH68XDU"
              class="action-btn"
            >
              <EditOutlined />
            </a>
            <a
              href="https://restorapos.com/newrpos/hrm/Employees/delete_employhistory/EUH68XDU"
              class="action-btn"
              onclick="return confirm('Are You Sure ? ') "
            >
              <DeleteOutlined />
            </a>
            <a
              href="https://restorapos.com/newrpos/hrm/Employees/cv/EUH68XDU"
              class="action-btn"
            >
              <UserAddOutlined />
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ManageEmployeeDetails;
