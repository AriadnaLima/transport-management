import FilterDropdown from "../../../components/dropdown/Dropdown";
import { ICreateDelivery, IOptions } from "../useDelivery";
import './createdelivery.css'

interface IProps {
    options: IOptions;
    setDelivery: React.Dispatch<React.SetStateAction<ICreateDelivery>>
    delivery: ICreateDelivery
    handleCreateDelivery: () => Promise<void>
}

function CreateDelivery({ options, setDelivery, delivery, handleCreateDelivery }: IProps) {

    return (
        <div className="content">
            <FilterDropdown
                title="Motorista"
                options={options.drivers?.map(item => ({ label: item.name, value: item.id })) ?? []}
                callback={(value) => setDelivery(prev => ({ ...prev, driverId: value as number }))}

            />
            <FilterDropdown
                title="Caminhão"
                options={options.trucks?.map(item => ({ label: item.plate, value: item.id })) ?? []}
                callback={(value) => setDelivery(prev => ({ ...prev, truckId: value as number }))}
            />
            <FilterDropdown
                title="Produto"
                options={options.products?.map(item => ({ label: item.category?.toString(), value: item.id })) ?? []}
                callback={(value) => setDelivery(prev => ({ ...prev, productId: value as number }))}
            />

            <div className="content-input">
                <div className='title-container'>
                    <span>Localicade</span>
                </div>
                <input
                    type="text"
                    className="text-input"
                    value={delivery.loc}
                    onChange={(e) => setDelivery(prev => ({ ...prev, loc: e.target.value }))}
                    placeholder={'Nordeste'}
                />
            </div>
            <div className="content-input">

                <div className='title-container'>
                    <span>Valor do frete</span>
                </div>
                <input
                    type="text"
                    className="text-input"
                    value={delivery.value}
                    onChange={(e) => setDelivery(prev => ({ ...prev, value: e.target.value }))}
                    placeholder={'20000'}
                />
            </div>

            <button onClick={() => handleCreateDelivery()}>Salvar</button>
        </div>

    )
}

export default CreateDelivery;