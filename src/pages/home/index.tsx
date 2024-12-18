import Modal from "../../components/modal/Modal";
import CreateDelivery from "./createDelivery";
import InfoDetail from "./InfoDetail/InfoDetail";
import List from "./List/List";
import { useDelivery } from "./useDelivery";

function Home() {
    const {
        open,
        setOpen,
        options,
        setDelivery,
        delivery,
        handleCreateDelivery,
        deliversList,
        deliversSelected, 
        setDeliversSelected,
        handleFinishDelivery,
    } = useDelivery();

    return (
        <>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title={"Criar entrega"}
                content={() => <CreateDelivery
                    options={options}
                    setDelivery={setDelivery}
                    delivery={delivery}
                    handleCreateDelivery={handleCreateDelivery}
                />}
            />
            <List
                deliversList={deliversList}
                setDeliversSelected={setDeliversSelected}
            />
            <InfoDetail
                setOpen={setOpen}
                deliversSelected={deliversSelected }
                handleFinishDelivery={handleFinishDelivery}
            />
        </>
    );
}

export default Home;
