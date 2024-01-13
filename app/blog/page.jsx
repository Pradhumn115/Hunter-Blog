import React from 'react'
import Link from 'next/link'
import * as fs from 'fs'

const serverside= async ()=>{
  let data = fs.readdirSync(`blogdata`)
  let blogs;
  let blogcontent=[]
  
  for(let filedata of data){
      blogs = JSON.parse(fs.readFileSync(`blogdata/${filedata}`))
      blogcontent.push(blogs)
  }
  // let data = await fetch('http://localhost:3000/api/blogs',{cache:'no-store'})
  // const allBlogs = await data.json()
  return blogcontent
}

const blog = async () => {
  let blogs = await serverside()
  return (
    <div className='w-screen flex flex-col justify-center items-center my-24'>
      <div>
      <h1 className='text-6xl pb-16 font-Comfortaa'>Blogs</h1>
      </div>

      <div className='blogslist w-3/6 flex flex-col justify-center items-center'>

        {blogs.map((blogitem)=>{
          return(
            <div className="blog1 pb-10" key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}><h2 className=' text-3xl font-bold py-4 font-Deserta'>{blogitem.title}</h2></Link>
            <p className='font-Comfortaa'>{blogitem.content.substr(0,140)}...</p>
            </div>
          )
        })}

      </div>
    </div>
  )
}


export default blog