const flowers = {
    Rose: {
        description: 'A classic symbol of love and beauty, the rose is perfect for any occasion.',
        price: '$15'
    },
    Tulip: {
        description: 'Bright and cheerful, tulips bring a splash of color to any room.',
        price: '$10'
    },
    Lily: {
        description: 'Elegant and fragrant, lilies are a wonderful addition to any bouquet.',
        price: '$12'
    }
};

function showFlower(flowerName) {
    const flower = flowers[flowerName];
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <h2>${flowerName}</h2>
        <p>${flower.description}</p>
        <p>Price: ${flower.price}</p>
        <button onclick="buyNow('${flowerName}')">Buy Now</button>
    ;
}

function buyNow(flowerName) {
    alert(You have selected to buy: ${flowerName});
}