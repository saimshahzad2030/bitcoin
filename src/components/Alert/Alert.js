import React, { Children, useEffect } from "react";

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
