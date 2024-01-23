function Add() {
    let pname = document.getElementById('product').value;
    let img = document.getElementById('img').files[0];
    let price = document.getElementById('price').value;

    let reader = new FileReader();
    reader.onloadend = function() {
        let image = reader.result;
        let html = `
        <div class="col-md-4">
            <div class="card mb-4">
                <img class="card-img-top" src="${image}" alt="Card image cap" style="height: 350px;">
                <div class="card-body">
                    <h5 class="card-title">${pname}</h5>
                    <p class="card-text">${price}</p>
                    <a href="#" class="btn btn-success">Đặt mua</a>
                </div>
            </div>
        </div>
        `;
        let app = document.querySelector('.row');
        app.innerHTML += html;
    }
    reader.readAsDataURL(img);
}
