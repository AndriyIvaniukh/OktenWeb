import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {endProductsLoading, setProducts, startProductsLoading, loadProduct} from "../redux/action-creators";
import '../App.css'

const Products = () => {
    const {products, isLoading} = useSelector(({products}) => ({
        products: products.products,
        isLoading: products.isLoading,
    }))

    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     dispatch(startProductsLoading());
    //     try{
    //     const resp = await fetch('https://fakestoreapi.com/products/');
    //     const json = await resp.json();
    //     dispatch(setProducts(json))
    //     }catch (e){
    //         console.error(e)
    //     }finally {
    //         dispatch(endProductsLoading());
    //     }
    //
    // }

    useEffect(() => {
        dispatch(loadProduct());
        // fetchProducts();
    },[])


    return(
        <div className={'products'}>
            {isLoading && <h3 style={{color: 'red'}}>LOADING</h3>}
            {products.map(el =>
                <div key={el.id}
                     style={{width: '500px', margin: '20px'}}
                >
                    <h3>{el.title}</h3>
                    <h4>{el.price}</h4>
                    <p>{el.description}</p>
                    <img style={{width: '100%' }} src={el.image} alt={el.category}/>
                </div>)}
        </div>
    )
}

export default Products;