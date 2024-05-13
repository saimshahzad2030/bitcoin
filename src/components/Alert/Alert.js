import React, { Children, useEffect } from "react";

import { Button, notification, Space } from "antd";
const Alert = ({ type, message, description }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: message,
      description: description,
    });
  };
  useEffect(() => {
    openNotificationWithIcon(type);
  }, []);
  return <>{contextHolder}</>;
};

export default Alert;
