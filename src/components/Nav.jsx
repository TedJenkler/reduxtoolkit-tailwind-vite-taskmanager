import logo from "../assets/logo.png"
import arrow from "../assets/arrowdown.png"
import addbtn from "../assets/addbtn.png"
import settings from "../assets/settings.png"
import { useState } from "react"
import DropdownMenu from "./DropdownMenu"

const Nav = ( {toggleAdd, setToggleAdd} ) => {
    const [openMenu, setOpenMenu] = useState(false)
return (
    <>
    <nav className="h-16 flex items-center justify-between px-4">
        <div className="flex gap-4">
            <img src={logo} alt="logo" />
            <div onClick={(e) => {setOpenMenu(!openMenu)}} className="flex gap-2 items-center">
                <h1>Platform Launch</h1>
                <img className="h-1" src={arrow} alt="arrowdown"/>
            </div>
        </div>
        <div className="flex gap-4 items-center">
            <img onClick={(e) => {setToggleAdd(!toggleAdd)}} className="h-8" src={addbtn} alt="addbtn"/>
            <img className="h-4" src={settings} alt="settings"/>
        </div>
    </nav>
    {openMenu === true ? <DropdownMenu setOpenMenu={setOpenMenu}/> : null}
    </>
)
}

export default Nav