import { useEffect, useState } from "react";
import { useDriverService } from "../../services/driver";
import { IDriver } from "../../models/driver";
import { ITruck } from "../../models/truck";
import { IProduct } from "../../models/product";
import { useTruckService } from "../../services/truck";
import { useProductService } from "../../services/product";
import { useDeliveryService } from "../../services/delivery";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IDelivery } from "../../models/delivery";

export interface IOptions {
    drivers: IDriver[] | undefined
    trucks: ITruck[] | undefined
    products: IProduct[] | undefined
}

export interface ICreateDelivery {
    truckId: number,
    driverId: number,
    loc: string,
    productId: number,
    value: string
}

export function useDelivery() {
    const [open, setOpen] = useState(false)
    const [options, setOptions] = useState({} as IOptions)
    const [delivery, setDelivery] = useState({} as ICreateDelivery)
    const [deliversList, setDeliversList] = useState([] as IDelivery[])
    const [deliversSelected, setDeliversSelected] = useState({} as IDelivery)

    const { getDriver } = useDriverService();
    const { getTruck } = useTruckService();
    const { getProduct } = useProductService();
    const { createDelivery, updateDelivery, getDelivery } = useDeliveryService()

    async function handleGetDelivers() {
        try {
            const delivers = await getDelivery()
            setDeliversList(delivers as IDelivery[]);
        } catch (error) {
            let err = 'Não foi possivel carregar lista de entregas';
            if((error as AxiosError).response?.data) {
                err = (error as AxiosError).response?.data as string;
            }
            toast.warning(err)
        }
    }

    async function handleGetOptions() {
        try {
            const [drivers, trucks, products] = await Promise.all([
                await getDriver(),
                await getTruck(),
                await getProduct()
            ])
            setOptions({
                drivers: drivers,
                trucks: trucks,
                products: products
            })
        } catch (err) {
            console.log(err)
        }
    }

    async function handleCreateDelivery() {
        try {
            await createDelivery(delivery)
            toast.success("Entrega salva com sucesso!")
            refresh()
            setDelivery({} as ICreateDelivery)
            setOpen(false);
        } catch (error) {
            let err = 'Não foi possivel salvar sua entrega';
            if((error as AxiosError).response?.data) {
                err = (error as AxiosError).response?.data as string;
            }
            toast.warning(err)
        }
    }

    async function handleFinishDelivery(deliveryId: number) {
        try {
            await updateDelivery(deliveryId)
            toast.success("Entrega finalizada com sucesso!")
            refresh()
            setOpen(false);
        } catch (error) {
            let err = 'Não foi possivel finalizar essa entrega';
            if((error as AxiosError).response?.data) {
                err = (error as AxiosError).response?.data as string;
            }
            toast.warning(err)
        }
    }

    function refresh() {
        handleGetDelivers();
        handleGetOptions();
        setDeliversSelected({} as IDelivery)
    }

    useEffect(() => {
        handleGetDelivers();
        handleGetOptions();
    }, [])

    return {
        open,
        setOpen,
        options,
        setDelivery,
        delivery,
        handleCreateDelivery,
        handleFinishDelivery,
        deliversList,
        deliversSelected, 
        setDeliversSelected
    }
}