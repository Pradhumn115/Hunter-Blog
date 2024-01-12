"use client"
import { data } from "autoprefixer";
import { useParams, useSearchParams } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"


// export const generateStaticParams= async ()=>{
//   let data = await fetch('http://localhost:3000/api/blogs',{cache:'force-cache'})
//   let blogs = await data.json()
//   return blogs.map((blog)=>({
//     slug: blog.slug
//   }))
// }
export const getblog= async (slug)=>{
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`,{cache:'no-store'})
  let blog = await data.json()
  return blog
}
const Slug =  async ({params}) => {
  let blog = await getblog(params.slug)
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