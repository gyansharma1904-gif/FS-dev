const FetchProduct = ()=> {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(console.log);
    return(
        <>

        </>)
};

export default FetchProduct;