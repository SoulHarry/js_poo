class Product{
    constructor(name,price,year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    
}

class UI{
    addProduct(producto){
        const productList = document.getElementById('product-list');
        const elemento = document.createElement('div');
        elemento.innerHTML = `
            <div class="card ">
                <div class="card-body text-center mb-4">
                    <strong>Producto:</strong> ${producto.name}
                    <strong>precio:</strong> ${producto.price}
                    <strong>Año:</strong> ${producto.year}
                    <a href="/" name="btnEliminar" class="btn btn-danger ">Eliminar</a>
                </div>
            </div>
        `;
        productList.appendChild(elemento);
        //this.resetForm();
    }
    deleteProduct(elemento){

        if(elemento.name==='btnEliminar'){
            elemento.parentElement.parentElement.parentElement.remove();
        }

    }
    showMessage(message,cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-3`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(div,app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000)
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
}

//Eventos del DOM
document.getElementById("product-form")
    .addEventListener('submit',function(e){
        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;

        const objProducto = new Product(name,price,year);

        const ui = new UI();
        ui.addProduct(objProducto);
        ui.resetForm();
        ui.showMessage('Producto insertado','success');
        e.preventDefault();
});

document.getElementById("product-list")
    .addEventListener('click',function(e){
        const ui = new UI();
        ui.deleteProduct(e.target);
        ui.showMessage('Producto eliminado','info');
        e.preventDefault();

})