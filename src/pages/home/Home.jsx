import { useState } from "react";



export default function Home() {


  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  }

  console.log('render');
  return (
    <div className="p-5">

      <h1>{count}</h1>

      <button onClick={handleCount}>Increment</button>





    </div>
  )
}
