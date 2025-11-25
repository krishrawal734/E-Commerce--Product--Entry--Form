document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('product-form');
    const productList = document.getElementById('product-list');
    const noProductsMessage = document.getElementById('no-products');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission (page reload)
        event.preventDefault();

        // 1. Collect Data from Form Fields
        const productData = {
            name: document.getElementById('product-name').value,
            price: parseFloat(document.getElementById('price').value).toFixed(2),
            description: document.getElementById('description').value || 'No description provided.',
            imageUrl: document.getElementById('image-url').value,
            category: document.getElementById('category').value,
            ratings: document.getElementById('ratings').value || 'N/A',
            warranty: document.getElementById('warranty').value || 'None',
            company: document.getElementById('company-name').value || 'Generic',
            returnPolicy: document.getElementById('return-policy').value || 'Standard 30-day return policy.',
        };

        // 2. Hide "No products" message if it's visible
        if (noProductsMessage) {
            noProductsMessage.style.display = 'none';
        }

        // 3. Generate HTML for the new product card
        const productCardHtml = createProductCard(productData);

        // 4. Insert the new card into the product list
        productList.insertAdjacentHTML('afterbegin', productCardHtml);

        // 5. Reset the form for the next entry
        form.reset();
    });

    /**
     * Helper function to generate the HTML for a single product card.
     * @param {object} product - The product data object.
     * @returns {string} The HTML string for the product card.
     */
    function createProductCard(product) {
        // Function to generate star icons based on rating
        const generateStars = (rating) => {
            const num = parseFloat(rating);
            if (isNaN(num)) return `<span>${rating}</span>`;
            
            let stars = '';
            // Full stars
            for (let i = 0; i < Math.floor(num); i++) {
                stars += '<i class="bi bi-star-fill rating-star"></i>';
            }
            // Half star
            if (num % 1 !== 0) {
                stars += '<i class="bi bi-star-half rating-star"></i>';
            }
            // Empty stars
            const remaining = 5 - Math.ceil(num);
            for (let i = 0; i < remaining; i++) {
                stars += '<i class="bi bi-star rating-star"></i>';
            }
            return stars;
        };

        return `
            <div class="col-sm-6">
                <div class="card product-card shadow-sm">
                    <img src="${product.imageUrl}" class="card-img-top product-img" alt="${product.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/150?text=Image+Not+Found';">
                    
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h5 class="card-title text-truncate me-2">${product.name}</h5>
                            <span class="badge rounded-pill text-light badge-category-${product.category}">${product.category}</span>
                        </div>
                        
                        <h4 class="text-success mb-3">$${product.price}</h4>
                        
                        <table class="table table-sm table-borderless">
                            <tbody>
                                <tr>
                                    <th scope="row">Company:</th>
                                    <td>${product.company}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Rating:</th>
                                    <td>${generateStars(product.ratings)} (${product.ratings})</td>
                                </tr>
                                <tr>
                                    <th scope="row">Warranty:</th>
                                    <td>${product.warranty}</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            <a class="btn btn-link p-0" data-bs-toggle="collapse" href="#details-${Date.now()}" role="button" aria-expanded="false" aria-controls="details-${Date.now()}">
                                Show More Details
                            </a>
                        </p>
                        <div class="collapse" id="details-${Date.now()}">
                            <div class="card card-body p-2 border-light bg-light">
                                <strong>Description:</strong> 
                                <p class="text-muted small">${product.description}</p>
                                <strong>Return Policy:</strong> 
                                <p class="text-muted small">${product.returnPolicy}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
});