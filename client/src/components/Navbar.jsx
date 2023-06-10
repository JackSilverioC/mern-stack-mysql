import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-zinc-800 flex justify-between items-center p-4 font-bold text-white ">
      <h1 className="text-lg">
        <Link to={"/"} className="hover:text-yellow-400">
          Mysql - Express - React - Nodejs
        </Link>
      </h1>
      <ul className="flex gap-4 ">
        <li className="hover:text-yellow-400">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-yellow-400">
          <Link to={"/new"}>Crear Tarea</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
