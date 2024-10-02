async function getProducts() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const products = data.recipes; // It should be 'recipes', not 'products', based on your API data
    const count = data.count;
    
    document.querySelector(".count").textContent = count;
    
    const result = products.map(function(product) {
        return `
            <div class='product'>
                <h2>${product.title}</h2>
                <img src='${product.image_url}' alt='${product.title}'/>
            </div>
        `;
    }).join('');

    document.querySelector(".products .row").innerHTML = result;
}

getProducts();