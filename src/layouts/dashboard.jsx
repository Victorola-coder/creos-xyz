/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import BrandLogo from "../components/brandLogo"
import { CalenderIcon, IdentityIcon } from "../components/svgs"
import { Outlet } from "react-router-dom"

export default function Dashboard() {
  return (
    <div className='w-full h-[100vh] flex flex-col bg-[#E6EAE8]'>
      <TopNavigation />
      <div className="flex flex-1">
        <SideNavigation />
        <div className="px-[60px] py-[44px]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const TopNavigation = () => {

  return (
    <nav className="px-[60px] py-[26px] flex justify-between border-b-[#B0BDB9] border-b-[1px]">
      <figure className='flex flex-row items-center'>
        <BrandLogo />
      </figure>
      <div className="w-[234px] h-[68px] p-[10px] rounded-[100px] flex items-center gap-4 bg-[#D9DFDD]">
        <div className="bg-primary grid place-items-center text-white h-[48px] w-[48px] rounded-[100%]">
          SE
        </div>
        <p className="text-primary text-[20px] font-medium">Stephen Elufisan</p>
      </div>
    </nav>
  )
}

const links = [
  {
    to: '/dashboard',
    label: 'Events',
    leading: CalenderIcon
  },
  {
    to: '/dashboard/contact',
    label: 'Contact',
    leading: IdentityIcon
  },
]

const SideNavigation = () => {

  return (
    <nav className="w-[300px] h-full py-[40px] px-[20px] bg-[#D9DFDD] flex flex-col gap-[22px]">
      {
        links.map((link, i) => (
          <NavLink key={i} to={link.to} end>
            {
              (({ isActive }) => (
                <button
                  className={`${isActive ? "bg-[#E6EAE8]" : "bg-[#D9DFDD]"} rounded-[12px] py-[16px] px-[20px] w-full`}>
                  <div className="flex gap-5 items-center text-primary text-[20px] font-bold">
                    <div className={`${isActive ? "bg-primary" : ""} rounded-[12px] p-[12px]`}>
                      <link.leading className={`${isActive ? 'fill-[#E6EAE8] stroke-[#E6EAE8]' : 'fill-primary stroke-primary'}`} />
                    </div>
                    {link.label}
                  </div>
                </button>
              ))
            }
          </NavLink>
        ))
      }
    </nav>
  )
}