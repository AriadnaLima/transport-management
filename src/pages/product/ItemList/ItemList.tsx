import React from "react";
import "./itemList.css";
import { IProduct } from "../../../models/product";

export interface IProps {
  product: IProduct;
  setProductSelected: React.Dispatch<React.SetStateAction<IProduct>>
}

function ItemList({ product, setProductSelected }: IProps) {
  return (
    <div className="item" onClick={() => setProductSelected(product)}>
      <div className="card">
        <div className="del-title">Categoria: {product.category}</div>
        <div className="del-indicator">Valor: {product.value}</div>
        <div className="del-indicator">ID: {product.id}</div>
      </div>
    </div>
  )
}

export default ItemList;