'use client'
import Cart from '@/app/components/Cart'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { id } = useParams()

  const fetchData = async () => {
    try {
      setError("");
      const res = await fetch(`https://milestone-03-project-sepia.vercel.app/api/products/${id}`);
      console.log('Response:', res);  
      if (!res.ok) {
        throw new Error('Product not found');
      }
      const response = await res.json();
      console.log('Fetched Data:', response);  
      setData(response);
    } catch (error) {
      console.error('Error:', error);  
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='max-w-7xl px-4 mt-[100px] mx-auto  flex items-center justify-between  flex-wrap'>
      <div className=' mx-auto '>
      <Image className='' src={data.imageSrc} alt='' width={400} height={500}></Image>
      </div>
      {data && (
        <div className='md:text-left mx-auto text-center text-2xl w-[500px]'>
          
          <h1 className='md:text-4xl mt-5  text-3xl lg:text-5xl'>{data.name}</h1>
          <div className='mt-5 md:text-xl text-lg flex flex-col gap-2'>

          <p>{data.category}</p>
          <p>{data.description}</p>
          <p>Processor: {data.specs.processor}</p>
          <p>Graphic Card: {data.specs.graphicsCard}</p>
          <p>Motherboard: {data.specs.motherboard}</p>
          <p>Price: {data.price} PKR</p>
          
         
          </div>
        </div>
      )}
    </div>

  )
}

export default Page
