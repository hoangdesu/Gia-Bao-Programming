import { useState } from 'react';

export default function Product(props) {
    // Props: input values (object) to a React component (function)
    const { productName } = props;

    // make sure the prop names match


    // State: special variable (object) that:
    //     1. holds a value just like another var
    //     2. will trigger componen re-render when changed
    //     3. CANNOT change the state directly. MUST modify it thru the given function

    
    const [itemOrdered, setItemOrdered] = useState(false); // [state, setState]

    // helper callback function
    const onBuyNowButtonClick = () => {
        // itemOrdered = true; // CANNOT change the state directly. => DONT EVER DO THIS!!!

        setItemOrdered(true);
    }


    return (
        <div>
            <h2>{productName}</h2>
            <img src={props.productImage} alt="" width={400} />
            <div>
                <button
                    onClick={onBuyNowButtonClick}
                    disabled={itemOrdered}
                    style={{ backgroundColor: !itemOrdered ? 'green' : 'gray',  color: !itemOrdered ? 'white' : 'black'}}
                >
                    {itemOrdered ? 'Your item has been ordered!' : `Buy ${productName} now!`}
                </button>
            </div>
        </div>
    )
}
