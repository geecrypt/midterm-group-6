$(document).ready(function() {
<<<<<<< HEAD
 //see product-card.js
});
=======

  AppLib.productModal = {};

  const createProductModal = (product) => {

    const $productModal = $(
      `
      <div class="product-modal" id="${product.id}-modal">
        <h3 class="product-name">${product.name}</h3>
        <ul class="product-details"> 
          <li>Price: ${product.price}</li>
          <li>Description: ${product.description}</li>
        </ul>
        <button id="delete-button" type="submit">Delete product</button>
      </div> `
    ).on('click', '#delete-button', function() {
      // retrieve the id from the html
    const productId = (product.id);
   
    deleteProduct(productId);
    
    getProducts()
        .then(function(json) {
          AppLib.productList.createProductList(json);
          AppLib.viewManager.show('productList');
        });
  });

    return $productModal;
  }

  AppLib.productModal.createProductModal = createProductModal;


  // ('#delete-button').on('click', function() {
    
  });


    // If admin, render the delete button. If user, do not render

>>>>>>> da5bb887955c1c20a20e98ade82fdc28c3c09fdf
