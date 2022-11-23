let choiceSelect = document.querySelector(".choices");

choiceSelect.addEventListener("click", (e) => {
    let target = e.target;
    if(target.classList.contains("choice")){
        choiceSelect.querySelector(".active").classList.remove("active");
        target.classList.add("active");

        document.querySelector(".main-img .active").classList.remove("active");
        console.log(e);
        document.querySelector(`.main-img #${target.id}`).classList.add("active");
    };

});

let productPreview = document.querySelector(".product-info");
let PreviewBox = document.querySelectorAll(".product-card");

document.querySelectorAll('.product-container .product').forEach(product =>{
    product.onclick = () => {
        let name = product.getAttribute('data-name');
        PreviewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            console.log(target);
            if(name == target){
                productPreview.style.display = 'flex';
                preview.classList.add('active');
            };
        });
    };
});

PreviewBox.forEach(close =>{
   close.querySelector(".close-icon").onclick = () =>{
    close.classList.remove("active");
    productPreview.style.display = 'none';
   };
});