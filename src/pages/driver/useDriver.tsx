import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useDriverService } from "../../services/driver";
import { IDriver } from "../../models/driver";

export interface ICreateDriver {
    name: string
}

export function useDriver() {
    const [driverList, setDriverList] = useState([] as IDriver[])
    const [selectedDriver, setSelectedDriver] = useState({} as IDriver)
    const [driver, setDriver] = useState({} as ICreateDriver)
    const [open, setOpen] = useState(false)

    const { getDriver, createDriver } = useDriverService();

    async function handleGetdrivers() {
        try {
            const drivers = await getDriver();
            setDriverList(drivers as IDriver[])
        } catch (error) {
            toast.warning('Não foi possivel carregar a lista de motoristas')
        }
    }

    async function handleCreateDriver() {
        try {
            await createDriver(driver)
            toast.success('Motorista salvo com sucesso!')
            handleGetdrivers();
            setDriver({} as ICreateDriver);
            setOpen(false)
        } catch (error) {
            let err = 'Não foi possivel salvar o Mmtorista';
            if ((error as AxiosError).response?.data) {
                err = (error as AxiosError).response?.data as string;
            }
            toast.warning(err)
        }
    }


    useEffect(() => {
        handleGetdrivers();
    }, [])


    return {
        driverList,
        setSelectedDriver,
        selectedDriver,
        setDriver,
        driver,
        open,
        setOpen,
        handleCreateDriver
    }
}