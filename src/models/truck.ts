import { IDelivery } from "./delivery";

export interface ITruck {
    id: number,
    plate: string,
    Delivery: IDelivery[]
    createAt: string,
    updateAt: string,
}