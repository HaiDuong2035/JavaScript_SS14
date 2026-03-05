const products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];
let autoId = 6;
let inputName = document.getElementById("product-name");
let inputPrice = document.getElementById("product-price");
let addButton = document.getElementById("add-button");
let form = document.getElementById("product-form");
let searchInput = document.getElementById("search-input");
const renderData = () => {
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    products.forEach(product => {
        let addProduct = document.createElement("li");
        addProduct.innerHTML = `
        <div class="product">
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Giá tiền: ${product.price.toLocaleString("vi-VN")} VND</p>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">Xóa</button>
            <button class="edit-price-btn" onclick="updatePrice("${product.id}")">Sửa giá</button>
        </div>
        `;
        list.appendChild(addProduct);
    });
};
renderData();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    autoId++;
    let newName = inputName.value;
    let newPrice = inputPrice.value;
    let newProduct = {
        id: autoId,
        name: newName,
        price: newPrice
    };
    products.push(newProduct);
    renderData();
    inputName.value = "";
    inputPrice.value = "";
    form.submit;
});
const deleteProduct = (idProduct) => {
    let confirmButton = confirm("Bạn có chắc muốn xóa sản phẩm này?");
    if (!confirmButton) {
        return;
    };
    let indexProduct;
    products.find((product, index) => {
        indexProduct = index;
        return product.id === idProduct;
    });
    products.splice(indexProduct, 1);
    renderData();
};
const updatePrice = (idProduct) => {
    let indexProduct = products.findIndex(product => product.id === idProduct);
    let updatePricePrompt = +prompt("Nhập giá mới (VND):");
    products[indexProduct].price = updatePricePrompt;
    renderData();
};
const searchProduct = () => {
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    let searchName = searchInput.value.toLowerCase();
    let searchList = products.filter(product => product.name.toLowerCase().includes(searchName));
    searchList.forEach(product => {
        let addProduct = document.createElement("li");
        addProduct.innerHTML = `
        <div class="product">
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Giá tiền: ${product.price.toLocaleString("vi-VN")} VND</p>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">Xóa</button>
            <button class="edit-price-btn" onclick="updatePrice("${product.id}")">Sửa giá</button>
        </div>
        `;
        list.appendChild(addProduct);
    });
};
const sortDown = () => {
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    let sortList = products.toSorted((el1, el2) => el1.price - el2.price);
    sortList.forEach(product => {
        let addProduct = document.createElement("li");
        addProduct.innerHTML = `
        <div class="product">
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Giá tiền: ${product.price.toLocaleString("vi-VN")} VND</p>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">Xóa</button>
            <button class="edit-price-btn" onclick="updatePrice("${product.id}")">Sửa giá</button>
        </div>
        `;
        list.appendChild(addProduct);
    });
}
const sortUp = () => {
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    let sortList = products.toSorted((el1, el2) => el2.price - el1.price);
    sortList.forEach(product => {
        let addProduct = document.createElement("li");
        addProduct.innerHTML = `
        <div class="product">
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Giá tiền: ${product.price.toLocaleString("vi-VN")} VND</p>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">Xóa</button>
            <button class="edit-price-btn" onclick="updatePrice("${product.id}")">Sửa giá</button>
        </div>
        `;
        list.appendChild(addProduct);
    });
}