import React from "react";
import "./sidebar.css";
import { IconContext } from "react-icons";
import { FaBox, FaTruck } from "react-icons/fa";
import { MdPerson4 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiFillProduct } from "react-icons/ai";
import { NavLink } from 'react-router';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="profile-icon">
                <CgProfile size={50} />
            </div>
            <IconContext.Provider value={{}}>
                <nav>
                    <ul>
                    <NavLink className="link" to="/"><FaBox size={20} color="white" /></NavLink>
                    <NavLink className="link" to="/truck"><FaTruck size={25} color="white"/></NavLink>
                    <NavLink className="link" to="/driver"><MdPerson4 size={25} color="white"/></NavLink>
                    <NavLink className="link" to="/product"><AiFillProduct size={25} color="white"/></NavLink>
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    )
}

export default SideBar;