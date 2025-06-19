import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="flex shadow-lg px-5 py-4 justify-between">
      <h1>Gourmet au Catering</h1>

      <nav className="space-x-2">
        <a href='#about' className={'hover:bg-gray-300 px-5 py-2'}>About</a>
        <NavLink className={'hover:bg-gray-300 px-5 py-2'}>Menu</NavLink>
        <NavLink className={'hover:bg-gray-300 px-5 py-2'}>Contact</NavLink>
      </nav>

    </div>
  )
}
