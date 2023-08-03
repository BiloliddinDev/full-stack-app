export const columns = [
  {
    key: 1,
    title: "Id",
    dataIndex: "id",
    sorter: (a: any, b: any) => a.id - b.id,
  },
  {
    key: 2,
    title: "Name",
    dataIndex: "name",
  },
  {
    key: 3,
    title: "Price",
    dataIndex: "price",
    sorter: (a: any, b: any) => a.id - b.id,
  },
  {
    key: 4,
    title: "Category",
    dataIndex: "category",
  },
  {
    key: 5,
    title: "Image",
    dataIndex: "images",
  },
  {
    key: 6,
    title: "Options",
    dataIndex: "options",
  },
];
