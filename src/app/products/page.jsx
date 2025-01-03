import Image from "next/image";
import React from "react";
import Cart from "../components/Cart";
import Link from "next/link";

const Page = async () => {
  let data = [];
  let loading = true;
  let error = "";

  try {
    error = "";
    loading = true;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(apiUrl, {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("error fetching data");
    }
    const response = await res.json();
    data = response.res;
  } catch (error) {
    error = "error fetching data";
    console.log("error", error);
  } finally {
    loading = false;
  }

  return (
    <div className="flex max-w-7xl mx-auto  gap-[50px] pt-[50px] text-center flex-wrap items-center justify-center px-5 ">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && data.map((item) => 
      <div  className="bg-[#222222]   delay-100 transition-all flex gap-2 card flex-col items-center w-[20rem] px-5 h-[36rem] p-4 rounded-md mb-5 mt-5" key={item.id}>
        <Image  alt="" width={150} height={200} src={item.imageSrc}></Image>
        <h1 className="text-2xl">{item.name}</h1>
        <p>{item.category}</p>
        <p>{item.description}</p>
        <p>{item.specs.processor}</p>
        <p>{item.specs.graphicsCard}</p>
        <p>{item.specs.motherboard}</p>
       
        <p>{item.price} PKR</p>
        <div className="flex gap-2">

         <Cart data={item}/>
          <Link className="bg-red-600 py-2 px-4 rounded-lg mt-auto" href={`/products/${item.id}`}>Learn More</Link>
        </div>
        </div>
      )}
    </div>
  );
};

export default Page;