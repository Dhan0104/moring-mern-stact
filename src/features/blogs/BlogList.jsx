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
        return <div key={blog.id} className="mb-6 shadow p-2">
          <h1 className="text-xl font-semibold">{blog.title}</h1>
          <p className="text-gray-800 italic">{blog.detail}</p>
        </div>
      })}

    </div>
  )
}
