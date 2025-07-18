import { Button } from "@material-tailwind/react";
import { useGetBlogsQuery, useLazyGetBlogsQuery } from "./blogApi"

export default function BlogList() {
  const { data, error, isLoading, } = useGetBlogsQuery();



  //const [func, { data, error, isLoading }] = useLazyGetBlogsQuery();

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="p-5">
      {/* <Button onClick={() => func()} >Click Me</Button> */}
      {data && data.map((blog) => {
        return <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.detail}</p>
        </div>
      })}

    </div>
  )
}
