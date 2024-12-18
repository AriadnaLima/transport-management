import { IDelivery } from "./delivery";

export interface IDriver {
  id: number;
  name: string;
  Delivery: IDelivery[];
  createAt: string;
  updateAt: string;
}
