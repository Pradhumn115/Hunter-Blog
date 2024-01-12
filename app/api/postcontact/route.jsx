import { NextResponse } from "next/server";
import * as fs from "fs";
export async function POST(request,context){
    const res = await request.json()
    let data = JSON.stringify(res)
    console.log(res)
    fs.appendFileSync('contactdata/1.json',`\n${data}`)
    return Response.json({res})

}