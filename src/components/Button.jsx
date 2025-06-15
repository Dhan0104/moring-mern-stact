
export default function Button({ label, color }) {

  console.log(color)
  return (
    <div>
      <button className={`${color} text-white px-3 py-1 rounded-sm`}>{label}</button>
    </div>
  )
}
