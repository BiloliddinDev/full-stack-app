import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/products.json";
import { dataprops } from "@/Interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<dataprops>
) {
  let Products = data.products;

  if (req.method === "GET") {
    res.status(200).json({ data: Products, total: Products.length });
  } else if (req.method === "POST") {
    Products.push({ ...req.body, id: `${Products.length + 1}` });
    res
      .status(201)
      .json({ data: { ...req.body, id: `${Products.length + 1}` } });
  }
}
