import React from "react";
import TableComponents from "./table";
import { Button } from "antd";

const Dashbord = () => {
  return (
    <div className="mt-[30px]">
      <div className="flex justify-center container">
        <Button
          style={{ backgroundColor: "orange", color: "white", border: "none" }}
          size="large"
          block
        >
          Add New Products
        </Button>
      </div>
      <TableComponents />
    </div>
  );
};

export default Dashbord;
