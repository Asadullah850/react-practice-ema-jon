import { getShoppingCart } from "./utilities/fakedb";

const cartProductsLoader = async() => {
    const loadProduct = await fetch('data.json')
    const products = await loadProduct.json();
    const storeCart = getShoppingCart();
    const saveCart = []
    for (const id in storeCart) {
      const addproduct = products.find(pd => pd.id === id);
      if(addproduct){
        const quantity = storeCart[id];
        addproduct.quantity = quantity;
        saveCart.push(addproduct)
      }
    }
    // if you need to send two elements you should
    // return[one, two]
    // return {one , two}
    return saveCart;
}
export default cartProductsLoader