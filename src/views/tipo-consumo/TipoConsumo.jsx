import ProductContextProvider from './ProductContextProvider'
import Table from './Table'

const Tipo_consumo = () => {
    return (
        <div>
            <ProductContextProvider>
                <Table />
            </ProductContextProvider>
        </div>
    )
}

export default Tipo_consumo