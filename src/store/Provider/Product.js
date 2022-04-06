import { useReducer } from 'react'
import {ProductContext} from '../index'
import reducer,{ initState } from '../Reducer/Product'

const Provider = ({ children })=>{ 
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <ProductContext.Provider value={[state, dispatch]}>
            {children}
        </ProductContext.Provider>
    )
}

export default Provider;