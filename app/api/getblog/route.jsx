import * as fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(req){
  const url = new URL(req.url)
  const uhref = url.href
  let newurl = uhref.split('=')[1]
  try{
  let data2 = fs.readFileSync(`blogdata/${newurl}.json`)
  return NextResponse.json(JSON.parse(data2))
  }catch(e){
    console.log(newurl)
    return NextResponse.json({error: "Blog data not found"})
    
  }
  
}


 
