import React from "react";
import "./itemList.css";
import { IDriver } from "../../../models/driver";

export interface IProps {
  driver: IDriver;
  setdriverSelected: React.Dispatch<React.SetStateAction<IDriver>>
}

function ItemList({ driver, setdriverSelected }: IProps) {
  return (
    <div className="item" onClick={() => setdriverSelected(driver)}>
      <div className="card">
        <div className="del-title">Nome: {driver.name}</div>
        <div className="del-indicator">ID: {driver.id}</div>
      </div>
    </div>
  )
}

export default ItemList;