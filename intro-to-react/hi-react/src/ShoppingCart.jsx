import Product from "./Product";

const ShoppingCart = () => {

    return (
        <section>
            <h1>Shopping Cart</h1>
            
            <Product 
                productName={'RTX 5090'}  
                productImage={'https://hanoicomputercdn.com/media/product/88632_card_man_hinh_asus_tuf_rtx_5090_32g_gddr7__8_.jpg'}
            />

            <Product
                productImage={'https://amdvietnam.vn/template/Default/images/gpu/579976-amd-radeon-6000-series-ryzen-logos-1260x709_0.png'}
                productName={'AMD Radeon™ RX'}
            />
            
        </section>
    )
}

export default ShoppingCart;
