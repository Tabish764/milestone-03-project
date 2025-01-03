import { NextResponse } from 'next/server'
import {products} from '../../util/data'

export async function GET() {
  let data = products
  return NextResponse.json({res:data,ok:true})
}