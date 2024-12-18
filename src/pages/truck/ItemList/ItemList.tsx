import React from "react";
import "./itemList.css";
import { ITruck } from "../../../models/truck";

export interface IProps {
  truck: ITruck;
  setTruckSelected: React.Dispatch<React.SetStateAction<ITruck>>
}

function ItemList({ truck, setTruckSelected }: IProps) {
  return (
    <div className="item" onClick={() => setTruckSelected(truck)}>
      <div className="card">
        <div className="del-title">Placa: {truck.plate}</div>
        <div className="del-indicator">ID: {truck.id}</div>
      </div>
    </div>
  )
}

export default ItemList;