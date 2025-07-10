import { Button, Option, Select } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router"

export default function Home() {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products`, {
        params: {
          sortBy: searchParams.get('sortBy'),
          order: searchParams.get('order')
        }
      })
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, [searchParams]);


  if (load) return <h1>Loading....</h1>


  return (
    <div className="p-5">


      <div className="flex max-w-[300px] gap-7 mb-5">
        <Select
          onChange={(e) => setSearchParams({ sortBy: e })}
          label="Select Field">
          <Option value="title">Title</Option>
          <Option value="stock">Stock</Option>
        </Select>

        <Select
          onChange={(e) => setSearchParams({ order: e })}
          label="Select Field">
          <Option value="asc">Ascending</Option>
          <Option value="desc">Desc</Option>
        </Select>
      </div>





      <div className="grid grid-cols-4 gap-5">
        {data && data.products.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
              <img className="h-[200px]" src={item.thumbnail} alt="" />
            </div>
          )
        })}
      </div>


    </div>
  )
}
