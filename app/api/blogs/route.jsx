import * as fs from 'fs';
import { NextResponse } from 'next/server';

export async function GET(req){
    let data = fs.readdirSync(`blogdata`)
    let blogs;
    let blogcontent=[]
    
    for(let i=0; i<data.length; i++){
        blogs = JSON.parse(fs.readFileSync(`blogdata/${data[i]}`))
        blogcontent.push(blogs)
    }
    return NextResponse.json(blogcontent)
}
 
