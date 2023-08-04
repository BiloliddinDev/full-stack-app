import React, { useEffect, useState } from "react";
import TableComponents from "./table";
import { Button, Modal, Input, Form } from "antd";
import { usePostData } from "@/Hooks/Postdata";
import { useGetData } from "@/Hooks/Getdata";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { queryClient } from "../_app";
import { useSearch, useshowmadal } from "../../store";
import { useUpdate } from "@/Hooks/Editdata";
import { useQueryClient } from "@tanstack/react-query";

const Dashbord = () => {
  const QueryClient = useQueryClient();
  const Reset = () => setshowmadal(false);
  const { setshowmadal, showmadal } = useshowmadal();
  const { number, setNumber } = useSearch();

  console.log(number + 1, "bu products ID");

  const Getdata = useGetData({
    keys: [`single`, `${number}`],
    url: `/products/${Number(number + 1)}`,
    options: {
      enabled: !!number,
    },
  });

  const data = Getdata?.data?.product;

  // update edit data === Post data
  const update = useUpdate(`products/${number}`);
  const postData = usePostData(`products`);

  const { control, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("name", data?.name);
    setValue("price", data?.price);
    setValue("image", data?.image);
    setValue("category", data?.category);
  }, [number, Getdata]);

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data, "Bu submit data");
    if (Getdata) {
      return update.mutate(data, {
        onSuccess: () => (
          toast.success("Products Editet"),
          setshowmadal(false),
          QueryClient.invalidateQueries(["tablegetdata"])
        ),
        onError: () => toast.error("Product no Update"),
      });
    } else {
      return postData.mutate(data, {
        onSuccess: (e) => (
          toast.success("Products Update"),
          QueryClient.invalidateQueries(["tablegetdata"])
        ),
        onError: (e) => toast.error("Product no Editet"),
      });
    }
  };

  return (
    <div className="mt-[30px]">
      <div className="flex justify-center container">
        <Button
          onClick={() => (setshowmadal(true), setNumber(0))}
          style={{ backgroundColor: "orange", color: "white", border: "none" }}
          size="large"
          block
        >
          Add New Products
        </Button>
      </div>
      <TableComponents />
      <Modal
        title={"Change this Product"}
        open={showmadal}
        onCancel={() => Reset()}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input {...field} className="py-2" placeholder="Name" />
            )}
          />
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Input {...field} className="py-2" placeholder="price" />
            )}
          />
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <Input {...field} className="py-2" placeholder="image" />
            )}
          />
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Input {...field} className="py-2" placeholder="category" />
            )}
          />

          <Button
            style={{
              backgroundColor: "orange",
              color: "white",
              border: "none",
            }}
            htmlType="submit"
            block
            onClick={() => setshowmadal(false)}
          >
            Send
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Dashbord;
