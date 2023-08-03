import React, { useEffect, useState } from "react";
import TableComponents from "./table";
import { Button, Modal, Input, Form } from "antd";
import { usePostData } from "@/Hooks/Postdata";
import { useGetData } from "@/Hooks/Getdata";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { IFormInput } from "@/Interface";
import { toast } from "react-toastify";
import { queryClient } from "../_app";

const Dashbord = () => {
  const [showmadal, setShowmadal] = useState(false);
  const Reset = () => setShowmadal(false);
  const Getdata = useGetData({ keys: ["tablegetdata"], url: "/products" });
  const postData = usePostData("/products");

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      price: "",
      image: "",
      category: "",
    },
  });

  useEffect(() => {}, [Getdata]);

  const onSubmit: SubmitHandler<any> = (data) => {
    postData.mutate(data, {
      onSuccess: (e) => (
        toast.success("Products Editet"),
        queryClient.invalidateQueries(["tablegetdata"])
      ),
      onError: (e) => toast.error("Product no Editet"),
    });
  };

  return (
    <div className="mt-[30px]">
      <div className="flex justify-center container">
        <Button
          onClick={() => setShowmadal(true)}
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
          >
            Send
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Dashbord;
