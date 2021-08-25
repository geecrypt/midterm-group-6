// NOTES:
//  LINE 18 - 19 ONLY IF ADMIN: show if the item is in the favorites - render the heart icon here?

$(document).ready(function() {
  // add empty object to AppLib library
  AppLib.productCard = {};

  // FUNCTION: generates the HTML for the modal view of a product.
  // if admin, the favorites part should not be generated.
  const createProductCard = (product) => {
    return `
    <article class = 'product-card'>
      <section class = 'product-card-preview-image'>
        <img src = '${product.imagePath}'} alt = 'product-preview'>    
      </section>
      <section class = 'product-details'>
        <h3 class = 'product-card-name'>${product.name}</h3>
        <ul class = 'product-details'> 
          <li>Price: ${product.price}</li>
          <li>Description: ${product.description}</li>
        </ul>
        ${product.favorite ?
    `This product is in your favorites` : ``}
      </section> 
    </article>
    `;
  };

  // add the createProductCard method to the productCard object in the AppLib library
  AppLib.productCard.createProductCard = createProductCard;
});