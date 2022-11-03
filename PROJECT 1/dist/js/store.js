let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('products-container .img').forEach(product=>{
    product.onclick = () =>{
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview=>{
            let target = preview.getAttribute('data-target')
            if(name == target){
                preview.classList.add('active')
            }
        })
    }

})