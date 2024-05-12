import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="dashboard">Dashboard</Menu.Item>
      <Menu.Item key="masterPrice">Master Price</Menu.Item>
      <Menu.Item key="customPrice">Custom Price</Menu.Item>
      <Menu.Item key="calender">Calender</Menu.Item>
      <Menu.Item key="reports">Reports</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;