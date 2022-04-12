import { DeleteOutlined } from "@ant-design/icons";
import { Button, Form, Input, Popconfirm, Select, Space, Table } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./JournalVoucherTable.style.scss";
const { Option } = Select;
const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  return <td {...restProps}>{childNode}</td>;
};

function handleChange(value) {
  console.log(`selected ${value}`);
}

// const [values, setValues] = useState({
//   code: "",
// });

// const handleDataChange = (e) => {
//   const { name, value } = e.target;
//   setValues({ ...values, [name]: value });
// };

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "Account Name",
        dataIndex: "AccountName",
        width: "15%",
        editable: true,
        render: (text, record) => (
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        ),
      },
      {
        title: "Code",
        dataIndex: "Code",
        render: (text, record) => (
          <Form.Item name="Code" style={{ marginBottom: "10px" }}>
            <Input placeholder="Code" size="large" />
          </Form.Item>
        ),
      },
      {
        title: "Debit",
        dataIndex: "Debit",
        render: (text, record) => (
          <Form.Item name="Debit" style={{ marginBottom: "10px" }}>
            <Input placeholder="Debit" size="large" />
          </Form.Item>
        ),
      },
      {
        title: "Credit",
        dataIndex: "Credit",
        render: (text, record) => (
          <Form.Item name="Credit" style={{ marginBottom: "10px" }}>
            <Input placeholder="Credit" size="large" />
          </Form.Item>
        ),
      },

      {
        title: "Action",
        dataIndex: "Action",
        align: "center",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <Button type="danger">
                <DeleteOutlined
                  style={{ fontWeight: "700", fontSize: "20px" }}
                />
              </Button>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: "0",
          AccountName: "Edward King 0",
          Code: "32",
          Debit: "London, Park Lane no. 0",
          Credit: "test",
        },
      ],
      count: 1,
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      AccountName: `Edward King ${count}`,
      Code: "32",
      Debit: `London, Park Lane no. ${count}`,
      Credit: "test",
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };
  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
    console.log("newData", newData);
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div className="journal-voucher-table-wrapper">
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <Space className="btn-wrapper">
          <Button
            onClick={this.handleAdd}
            type="primary"
            style={{
              marginTop: 16,
            }}
          >
            Add a row
          </Button>

          <Button
            type="primary"
            style={{
              marginTop: 16,
            }}
          >
            save
          </Button>
        </Space>
      </div>
    );
  }
}
export default EditableTable;
