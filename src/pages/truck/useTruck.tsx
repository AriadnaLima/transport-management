import { useEffect, useState } from "react";
import { useTruckService } from "../../services/truck";
import { ITruck } from "../../models/truck";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface ICreateTruck {
    plate: string
}

export function useTruck() {
    const [truckList, setTruckList] = useState([] as ITruck[])
    const [selectedTruck, setSelectedTruck] = useState({} as ITruck)
    const [truck, setTruck] = useState({} as ICreateTruck)
    const [open, setOpen] = useState(false)

    const { getTruck, createTruck } = useTruckService();

    async function handleGetTrucks() {
        try {
            const trucks = await getTruck()
            setTruckList(trucks as ITruck[])
        } catch (error) {
            toast.warning('Não foi possivel carregar a lista de caminhões')
        }
    }

    async function handleCreateTruck() {
        try {
            await createTruck(truck)
            toast.success('Caminhão salvo com sucesso!')
            handleGetTrucks();
            setTruck({} as ICreateTruck)
            setOpen(false)
        } catch (error) {
            let err = 'Não foi possivel salvar o caminhão';
            if ((error as AxiosError).response?.data) {
                err = (error as AxiosError).response?.data as string;
            }
            toast.warning(err)
        }
    }


    useEffect(() => {
        handleGetTrucks();
    }, [])


    return {
        truckList,
        setSelectedTruck,
        selectedTruck,
        setTruck,
        truck,
        open,
        setOpen,
        handleCreateTruck
    }
}