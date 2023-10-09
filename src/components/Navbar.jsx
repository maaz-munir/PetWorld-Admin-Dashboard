import { useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png'
import { BiSolidDashboard } from 'react-icons/bi'
// import { useEffect } from 'react';

const Navbar = () => {

  const Menus = [
    { title: "Home", src: <BiSolidDashboard />},
    { title: "Verified Breeders", src: <BiSolidDashboard />},
    { title: "Accounts", src: <BiSolidDashboard />},
    { title: "Schedule ", src: <BiSolidDashboard />},
    { title: "Search", src: <BiSolidDashboard />},
    { title: "Analytics", src: <BiSolidDashboard /> },
    { title: "Files ", src:<BiSolidDashboard />},
    { title: "Setting", src: <BiSolidDashboard /> },
  ];
  const navigate = useNavigate();


  const handleClick = (title) => {
    if (title == "Home") {
      navigate("/home")
    }
    else if (title == "Verified Breeders") {
      navigate("/home/breeder")
    }
  }

  return (
    <div className="top-0 left-0 h-screen w-52 m-0 flex flex-col bg-yellow-400 text-black shadow-lg">
      <img src={logo}/>

      <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointe hover:bg-yellow-200 text-black text-lg items-center gap-x-4 cursor-pointer
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              }`}
              onClick = {() => {handleClick(Menu.title)}}
            >
              <Icon icon={Menu.src} />
              <span className={`${!open && "hidden"} origin-left duration-200 cursor-pointer`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>

    </div>
  )
}

const Icon = ({icon}) => {
  return (
    <div className="drop-shadow-lg">
      {icon}
    </div>
  )
}

export default Navbar