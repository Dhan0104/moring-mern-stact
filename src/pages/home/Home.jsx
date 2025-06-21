import About from "../about/About";
import Display from "./Display";

export default function Home() {



  return (
    <div>

      <Display />
      <main className="px-[100px] py-[70px]">
        <About />

      </main>



      <select name="" id="">
        <option value="" hidden disabled selected>Select Your Country</option>
        <option value="">India</option>
        <option value="">China</option>
      </select>
      <br />
      <br />



    </div>
  )
}
