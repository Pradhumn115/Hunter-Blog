
import { data } from "autoprefixer";
import { useParams, useSearchParams } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"
import * as fs from 'fs'

export const generateStaticParams= async ()=>{
  let data = fs.readdirSync(`blogdata`)
    let blogs;
    let blogcontent=[]
    
    for(let i=0; i<data.length; i++){
        blogs = JSON.parse(fs.readFileSync(`blogdata/${data[i]}`))
        blogcontent.push(blogs)
    }
  // let blogs = await data.json()
  return blogcontent.map((blog)=>({
    slug: blog.slug
  }))
}
export const getblog= (slug)=>{
  try{
    let data2 = fs.readFileSync(`blogdata/${slug}.json`)
    return (JSON.parse(data2))
    }catch(e){
      console.log(slug)
      return console.log({error: "Blog data not found"})
      
    }
  // let data = await fetch(`http://localhost:3000/api/getblog/${slug}`,{cache:'no-store'})
  // let blog = await data.json()
  // return blog
}



const Slug =  ({params}) => {
  let blog = getblog(params.slug)
  return (
      <div>
          <div className="title flex w-screen h-fit justify-center my-10">
              <h1 className="text-3xl font-bold py-4 font-Deserta">{blog.title}</h1>
          </div>

          <div className="content flex-col flex  items-center justify-center">
            <div className="textbox w-[80vw]">
              <p className=" font-Comfortaa leading-8">{blog.content}</p>
              <p className="my-12 text-2xl float-right font-Deserta">- {blog.author}</p>
            </div>
          </div>
      </div>
  )
}


export default Slug