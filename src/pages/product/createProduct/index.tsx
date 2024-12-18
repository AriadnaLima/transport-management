import FilterDropdown from '../../../components/dropdown/Dropdown';
import { ICreateProduct } from '../useProduct';
import './createproduct.css'

interface IProps {
    setProduct: React.Dispatch<React.SetStateAction<ICreateProduct>>
    product: ICreateProduct
    handleCreateProduct: () => void;
}

function CreateProduct({ setProduct, product, handleCreateProduct }: IProps) {

    return (
        <div className="content">
            <FilterDropdown
                title="Categoria"
                options={[{ label: 'Eletronico', value: 1 }, { label: 'Combustivel', value: 2 }]}
                callback={(value) => setProduct(prev => ({ ...prev, category: value as number }))}
            />
            <div className="content-input">
                <div className='title-container'>
                    <span>Valor</span>
                </div>
                <input
                    type="text"
                    className="text-input"
                    value={product.value}
                    onChange={(e) => setProduct(prev => ({ ...prev, value: e.target.value }))}
                    placeholder={'200,00'}
                />
            </div>

            <button onClick={() => handleCreateProduct()}>Salvar</button>
        </div>

    )
}

export default CreateProduct;