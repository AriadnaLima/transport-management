import InfoDetail from "./InfoDetail/InfoDetail";
import List from "./List/List";
import { useProduct } from "./useProduct";
import Modal from "../../components/modal/Modal";
import CreateTruck from "./createProduct";

function Product() {
    const {
        productList,
        setSelectedProduct,
        selectedProduct,
        setProduct,
        product,
        open,
        setOpen,
        handleCreateProduct
    } = useProduct()
    return (
        <>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title={"Criar produto"}
                content={() => <CreateTruck
                    setProduct={setProduct}
                    product={product}
                    handleCreateProduct={handleCreateProduct}
                />}
            />
            <List
                productList={productList}
                setProductSelected={setSelectedProduct}
            />
            <InfoDetail
                productSelected={selectedProduct}
                setOpen={() => setOpen(true)}
            />
        </>
    )
}

export default Product;