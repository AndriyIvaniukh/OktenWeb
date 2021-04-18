import {SET_PRODUCTS, END_PRODUCTS_LOADING, START_PRODUCTS_LOADING} from "../action-types";


const setProducts = (payload) => ({type: SET_PRODUCTS, payload});
const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
const loadProduct = () => async (dispatch) => {
    try{
        dispatch(startProductsLoading());
        const resp = await fetch('https://fakestoreapi.com/products/');
        const json = await resp.json();
        dispatch(setProducts(json))
    }catch (e){
        console.error(e)
    }finally {
        dispatch(endProductsLoading());
    }

}
export {
    setProducts,
    startProductsLoading,
    endProductsLoading,
    loadProduct,
}