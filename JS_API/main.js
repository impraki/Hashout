const store_container = document.getElementById('store_container');
const item_counts = 3;

const fetchItems = async () => {
    for(let i = 1; i<=item_counts; i++){
        await getItems(i);
    }
}

const getItems = async id => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const res = await fetch(url);
    const item = await res.json();
    console.log(item);
    createItemCard(item);
}

const createItemCard = item => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    const { id, title, image, rating, description } = item;
    const itemInnerHTML = `
    <div class="img-container">
        <img src="${image}" alt="${title}" />
    </div>
    <div class="info">
        <h3 class="title">${title}</h3>
        <small class="desc">Desc: <span>${description}</span></small>
        <h4>Rating:${rating.rate}</h4>
    <div>
    `;
    itemEl.innerHTML = itemInnerHTML;
    store_container.appendChild(itemEl);
}


fetchItems();