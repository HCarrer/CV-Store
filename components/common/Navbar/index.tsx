import { useState } from "react"
import { NavBar } from "../../../constants/Navbar"
import { Technologies } from "../../../constants/Technologies"
import CartIcon from "../Icons/Cart"
import Logo from "../Icons/Logo"

const Navbar = (): JSX.Element => {
  const [selectedSection, setSelectedSection] = useState('')
  return (
    <div className="flex justify-between w-vw py-2 px-8 bg-base-grey border-b-4 border-base-blue">
      <div className="flex gap-x-8 my-auto text-xl font-normal">
        {NavBar.map((section) => {
          return (
            <div key={section.header} className='cursor-pointer' onClick={() => {setSelectedSection(section.header)}}>
              <span className={`h-fit ${selectedSection == section.header ? 'text-base-blue border-b-2 border-base-blue' : 'text-black'}`}>{section.header}</span>
            </div>
          )
        })}
      </div>
      <div className="flex gap-x-8">
        <CartIcon width={40} height={40}/>
        <Logo width={40} height={40}/>
      </div>
    </div>
  )
}

export default Navbar