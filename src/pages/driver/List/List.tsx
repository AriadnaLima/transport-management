import React from "react";
import "./list.css";
import { CgMenuRight } from "react-icons/cg";
import ItemList from "../ItemList/ItemList";
import { IDriver } from "../../../models/driver";

export interface IProps {
    driverList: IDriver[];
    setDriverSelected: React.Dispatch<React.SetStateAction<IDriver>>
}

function List({ driverList, setDriverSelected }: IProps) {
    return (
        <div className="list">
            <div className="title">
                Motoristas
                <div className="list-icon"> <CgMenuRight /></div>
            </div>
            <h4>Quantidade: {driverList?.length}</h4>
            <div className="content-items">
                {driverList?.map(driver => {
                    return <ItemList driver={driver} setdriverSelected={setDriverSelected} />
                })}
            </div>
        </div>
    )
}

export default List;