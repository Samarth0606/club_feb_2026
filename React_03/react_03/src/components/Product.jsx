
function Product({name,desc,price,img}) {
  return (
    <div>
        <img width={300} height={300} src={img} alt="broom img" />
        <h2>Name: {name}</h2>
        <h3>Price: {price} </h3>
        <h4>Desc: {desc} </h4>
    </div>
  )
}

export default Product


// rfce , rafce , rfc , rafc