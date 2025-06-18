

export default function button({label,color}) {
 console.log(color)
  return(
  <div>
 <button className={'${color} text-white px-4 py-2 rounded mb-5'}>{label}</button>
 </div>
 )}