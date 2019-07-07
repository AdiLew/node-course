//Object property shorthand
const name = 'Adi'
const userAge = 27
const user = {
    name,
    age: userAge,
    location: 'Tel Aviv'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4
}

// const {label: productLabel, stock, rating = 5} = product;
// console.log(productLabel)
// console.log(rating)

//product argument is assigned a default value of an empty object

const transaction = (type, {label, stock = 0}={})=>{
    console.log(type, label, stock)

}
transaction('Order')
transaction('Order',product)