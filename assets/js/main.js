const products = document.getElementById("products");
const productsSearch = document.getElementById("productsSearch");

function getProducts() {
    axios.get("https://655dd2b79f1e1093c599f093.mockapi.io/products")
    .then((res)=>{
        db = res.data
        db.forEach(item => {
            let div = document.createElement("div")
            div.className ="col-4"
            div.innerHTML= `<img style="width:100%;" src ="${item.image}">
            <p>${item.title}</p>
            <p>${item.price}</p>
            <button onclick="addToBasket(${item.id})" id="data-btn">BASKET</button>`
            products.appendChild(div)
        });
    })
}

function addToBasket(itemId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item => item.id == itemId))
    localStorage.setItem("cart" , JSON.stringify(cart))
}
getProducts()

function searchByName () {
    productsSearch.innerHTML = ``
    products.style.display='none'
    productsSearch.style.display='block'

    axios.get(`https://655dd2b79f1e1093c599f093.mockapi.io/products?title=${inp.value}`)
    .then(res => {
        db = res.data
        db.map(item => {
            const div = document.createElement('div')
            div.innerHTML = `
            <p>${item.title}</p>`
            productsSearch.append(div)
        })

    })
}

btn.addEventListener('click', searchByName)