import React from 'react';
import './adminPanel.scss'
import {NavLink} from "react-router-dom";

const AdminPanel = () => {
    return (
        <div className="AdminPanel">
            <div className="tabMenu">
                <ul className="tabBtns">
                    <li className="tabBtn">
                        <NavLink className="tabBtnLink" to="/AdminPanel/Users" >Users</NavLink>
                    </li>
                    <li className="tabBtn">
                        <NavLink className="tabBtnLink" to="/AdminPanel/Roles">Roles</NavLink>
                    </li>
                    <li className="tabBtn">
                        <NavLink className="tabBtnLink" to="/AdminPanel/Subscriptions">Subscriptions</NavLink>
                    </li>
                    <li className="tabBtn">
                        <NavLink className="tabBtnLink" to="/AdminPanel/Movies">Movies</NavLink>
                    </li>
                    <li className="tabBtn">
                        <NavLink className="tabBtnLink" to="/AdminPanel/Serials">Serials</NavLink>
                    </li>
                    <li className="tabBtn">
                        <NavLink className="tabBtnLink" to="/AdminPanel/Genres">Genres</NavLink>
                    </li>

                </ul>

            </div>


        </div>
    );
};

export default AdminPanel;