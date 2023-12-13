const products = document.getElementById("products")

function getProducts() {
    products.innerHTML=" "
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item, index)=>{
        let div = document.createElement("div")
        div.className = "itemCart"
        div.innerHTML= `<img src="${item.image}">
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick="deleyt(${index})">delete</button>`
        products.appendChild(div)
    })
}

function deleyt(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(index , 1)
    localStorage.setItem("cart" , JSON.stringify(cart))
    getProducts()
}

getProducts()