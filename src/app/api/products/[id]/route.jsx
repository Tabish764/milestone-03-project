import { NextResponse } from "next/server";
import { products } from "../../../util/data";

export async function GET(req,res) {
  const { id } = res.params;
  let data = products.find((product) => product.id == id);

  

  return NextResponse.json(data, { status: 200 });
}
