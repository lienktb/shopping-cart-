import CartContext from '../Context/Cart';
import {useReducer} from 'react';
import reducer, { initState } from '../Reducer/Cart';
function Provider({ children }){
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <CartContext.Provider value={[state, dispatch]}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;