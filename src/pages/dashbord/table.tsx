import React, { useState } from "react";
import { Button, Table } from "antd";
import { columns } from "@/constants";
import { useGetData } from "@/Hooks/Getdata";
import { datapropsdetel } from "@/Interface";
import Head from "next/head";
import { useSearch, useshowmadal } from "@/store";
import { useDelete } from "@/Hooks/Deletedata";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { instance } from "@/Utils";

const TableComponents = () => {
  const QueryClient = useQueryClient();
  const [dataId, setDataId] = useState<number>(0);
  const Getdata = useGetData({ keys: ["tablegetdata"], url: "/products" });
  const myTable: datapropsdetel[] = [];
  const { setNumber, number } = useSearch();
  const { setshowmadal } = useshowmadal();

  const DeleteData = () => {
    instance
      .delete(`products/${dataId}`)
      .then(
        (res) => (
          toast.success(`Products Deltete`),
          console.log(res),
          QueryClient.invalidateQueries(["tablegetdata"])
        )
      )
      .catch((err) => (toast.error("Category No Deleted"), console.log(err)));
  };

  Getdata?.data?.data?.map((element: any, index: number) =>
    myTable.push({
      ...element,
      key: index,
      id: `${index + 1}`,
      name: element.name,
      category: element.category,
      price: `${element.price} $`,
      description: (
        <div className="flex justify-center gap-7 items-center">
          <div className="flex gap-[60px]">
            <p className="text-[25px]">Name:{element.name}</p>
            <p className="text-[25px]">Price:{element.price}$</p>
            <p className="text-[25px]">
              Category:{String(element.category).toLocaleUpperCase()}
            </p>
          </div>
          <img
            src={element.image}
            width={200}
            height={200}
            alt={element.name}
          />
        </div>
      ),
      images: <img src={element.image} height={50} width={50}></img>,
      options: (
        <div className="flex gap-8 justify-center">
          <Button
            onClick={() => (setDataId(element?.id), DeleteData())}
            style={{ backgroundColor: "red", color: "white" }}
          >
            <i className="fa-solid fa-trash"></i>
          </Button>
          <Button
            onClick={() => (setNumber(index), setshowmadal(true))}
            style={{ backgroundColor: "orange", color: "white" }}
          >
            <i className="fa-solid fa-pen"></i>
          </Button>
        </div>
      ),
    })
  );

  return (
    <>
      <Head>
        <title></title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <div className="container">
        <Table
          className="mt-[50px] text-center"
          style={{ textAlign: "center" }}
          bordered
          columns={columns}
          dataSource={myTable}
          expandable={{
            expandedRowRender: (record) => record.description,
            rowExpandable: (record) => record.name !== "Not Expandable",
          }}
        ></Table>
      </div>
    </>
  );
};

export default TableComponents;
