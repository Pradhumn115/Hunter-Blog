import * as fs from 'fs';
import { unstable_noStore as noStore } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(req){
    noStore();
    let data = fs.readdirSync(`blogdata`)
    let blogs;
    let blogcontent=[]
    
    for(let i=0; i<data.length; i++){
        blogs = JSON.parse(fs.readFileSync(`blogdata/${data[i]}`))
        blogcontent.push(blogs)
    }
    return NextResponse.json(blogcontent)
}
 
