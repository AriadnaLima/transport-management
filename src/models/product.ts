import { IDelivery } from "./delivery";

export interface IProduct {
  id: number;
  category: number | string;
  value: string;
  Delivery: IDelivery[];
  createAt: string;
  updateAt: string;
}
