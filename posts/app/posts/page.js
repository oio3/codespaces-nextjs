import Link from "next/link"

export default async function postsPage() {
  const response = await fetch('https://jsonplaceholder.org/posts',{
    next :{
      revalidate:10
    }
  })
  const result = await response.json()
  const postsJSX = result.map((post)=>{
   // console.log(post.title)
    return(
     <Link href={`/posts/${post.id}`}>
     <div style={{width:"70%" , backgroundColor:"teal",margin:"10px" ,display:"flex",justifyContent:"center"}}>
      <h1>{post.title}</h1>
      </div>
      </Link>
    )
    })

return(
  <div style={{display:"flex",justifyContent:"center" , justifyItems:"center",flexDirection:"column" }}>
    {postsJSX}</div>
)
}