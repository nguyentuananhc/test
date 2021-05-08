import React, { useState, useEffect } from "react";
import { Table, Space, Modal } from "antd";
import {
  EditFilled,
  DeleteFilled,
  InfoCircleFilled,
  ToolFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import EditModal from "./component/EditModal";
import data from "./data";

function App() {
  const [visible, setVisible] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const toggleModal = (id) => {
    if (id) {
      const customer = data.find((cus) => cus.id === id);
      setCurrentCustomer(customer);
    }
    setVisible((prevState) => !prevState);
  };

  useEffect(() => {
    if (!visible) setCurrentCustomer(null);
  }, [visible]);

  const columns = [
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <EditFilled onClick={() => toggleModal(record?.id)} />
          <DeleteFilled onClick={() => confirmDelete(record)} />
          <InfoCircleFilled />
          <ToolFilled />
        </Space>
      ),
    },
    {
      title: "Customer ID",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <a href="/#" onClick={() => toggleModal(record?.id)}>
          {text}
        </a>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.length - b.email.length,
      sortDirections: ["descend"],
    },
  ];

  function confirmDelete(record) {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: `Do you want to delete this customer ${record?.name}`,
      okText: "YES",
      cancelText: "NO",
    });
  }
  return (
    <React.Fragment>
      <EditModal
        visible={visible}
        currentCustomer={currentCustomer}
        toggleModal={toggleModal}
      />
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
}

export default App;
