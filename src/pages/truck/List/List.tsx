import React, { useState } from "react";
import "./list.css";
import { CgMenuRight } from "react-icons/cg";
import { ITruck } from "../../../models/truck";
import ItemList from "../ItemList/ItemList";

export interface IProps {
    truckList: ITruck[];
    setTruckSelected: React.Dispatch<React.SetStateAction<ITruck>>
}

function List({ truckList, setTruckSelected }: IProps) {
    return (
        <div className="list">
            <div className="title">
                Caminhões
                <div className="list-icon"> <CgMenuRight /></div>
            </div>
            <h4>Quantidade: {truckList?.length}</h4>
            <div className="content-items">
                {truckList?.map(truck => {
                    return <ItemList truck={truck} setTruckSelected={setTruckSelected} />
                })}
            </div>

        </div>
    )
}

export default List;