import { Modal, Form, Input } from "antd";

import { layout } from "./const";

const EditModal = ({ visible, toggleModal, customer }) => {
  return (
    <Modal
      title="Edit Customer"
      visible={visible}
      onOk={toggleModal}
      onCancel={toggleModal}
      okText="SAVE"
      cancelText="CANCEL"
    >
      <Form
        {...layout}
        name="basic"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="Email"
          initialValue={customer?.email}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Retype Password"
          name="retypepassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
