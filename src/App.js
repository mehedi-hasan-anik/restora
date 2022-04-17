import "antd/dist/antd.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddEmployee from "./pages/AddEmployee";
import Designation from "./pages/Designation";
import FinancialYear from "./pages/FinancialYear";
import Home from "./pages/Home";
import JournalVoucher from "./pages/JournalVoucher";
import ManageEmployee from "./pages/ManageEmployee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="financial-year" element={<FinancialYear />} />
        <Route path="journal-voucher" element={<JournalVoucher />} />
        <Route path="designation" element={<Designation />} />
        <Route path="add-employee" element={<AddEmployee />} />
        <Route path="manage-employee" element={<ManageEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
