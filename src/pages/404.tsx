import React from "react";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>404</h1>
      <p>抱歉，您访问的页面不存在</p>
    </div>
  );
};

export default NotFound;
