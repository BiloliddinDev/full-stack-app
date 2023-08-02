import { NextApiRequest, NextApiResponse } from "next";
import data from "../../../data/products.json";
import { Data, datapropsdetel } from "@/Interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { id } = req.query;

  if (req.method == "GET") {
    let prod = data.products;
    let product = prod.filter((item: datapropsdetel) => item.id == `${id}`);
    res.status(200).json({ product: product[0] });
  } else if (req.method == "PATCH") {
    res.status(203).json({ method: "patch" });
  } else if (req.method == "DELETE") {
    res.status(204).json({ method: "delete" });
  }
}
