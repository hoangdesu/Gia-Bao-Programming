import Product from "./Product";
import { Fragment, useState } from "react";

const ShoppingCart = () => {

    console.log('Shopping Cart component rendered');

    // when a state changes, it will trigger the component to re-render
    const [clicked, setClicked] = useState(false);

    const games = ['league of legends', 'tft', 'roblox', 'marvel rivals'];

    return (
        // JSX: extended HTML
        // each function can only return 1 parent element
        // even if it's an empty element (fragment)
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

            <div className="productContainer">
                silly container hehe
            </div>

            <button
                onClick={() => setClicked(!clicked)}
            >
                {clicked ? 'Clicked' : 'Click me!!'}
            </button>

            {/* rendering a list */}
            <h1>Games</h1>
            <ul>
                {games.map((g) => <li key={g}>{g}</li>)}
            </ul>


            <div style={{ marginBottom: '500px' }}>

            </div>
            
        </section>
    )
}

export default ShoppingCart;
