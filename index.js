fetch('products.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.getElementById('cards-container');
            data.products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h2>${product.name}</h2>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <button class="buy-button">Buy Now</button>
                `;
                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading products:', error));    

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('buy-button')) {
        const card = e.target.parentElement;
        const product = {
            name: card.querySelector('h2').innerText,
            price: card.querySelector('.price').innerText,
            image: card.querySelector('img').src
        };
        
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        
        cartItems.push(product);
        
        localStorage.setItem('cart', JSON.stringify(cartItems));
        
        // alert(`${product.name} has been added to your cart!`);
        
        
        updateCartCount();
    }
});


function updateCartCount() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cartItems.length;
}





        // header menu
        const menuBtn = document.getElementById('menu-btn');
        const navbar = document.querySelector('.navbar');

        menuBtn.addEventListener('click', () => {

            if (navbar.style.display === 'flex') {
                navbar.style.display = 'none';
            } else {
                navbar.style.display = 'flex';
            }
        });


        if (window.innerWidth > 768) {
            navbar.style.display = 'flex';
        } else {
            navbar.style.display = 'none';
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navbar.style.display = 'flex'; 
            } else {
                navbar.style.display = 'none'; 
            }
        });

        // welcome message

        const currentUser = localStorage.getItem('currentUser');
        
        if (currentUser) {
            document.getElementById('welcome-message').textContent = `Welcome, ${currentUser}!`;
        } else {
            document.getElementById('welcome-message').textContent = 'Welcome, guest!';
        }

        // Swiper Slider Configuration
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000, 
                disableOnInteraction: false, 
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        


        // paymentttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
        function openModal() {
            document.getElementById('payment-modal').style.display = 'flex';
          }
          
          function closeModal() {
            document.getElementById('payment-modal').style.display = 'none';
          }
          
          document.getElementById('payment-method').addEventListener('change', function() {
            const selectedMethod = this.value;
            if (selectedMethod === 'cash') {
              document.getElementById('card-details').style.display = 'none';
              document.getElementById('card-number-group').style.display = 'none';
              document.getElementById('expiry-group').style.display = 'none';
              document.getElementById('cvv-group').style.display = 'none';
            } else {
              document.getElementById('card-details').style.display = 'block';
              document.getElementById('card-number-group').style.display = 'block';
              document.getElementById('expiry-group').style.display = 'block';
              document.getElementById('cvv-group').style.display = 'block';
            }
          });
          
          
          document.getElementById('payment-form').addEventListener('submit', function(event) {
            event.preventDefault(); 
          
            
            const cardNumber = document.getElementById('card-number').value;
            const expiry = document.getElementById('expiry').value;
            const cvv = document.getElementById('cvv').value;
          
            if (this.checkValidity()) {
              if (cardNumber && expiry && cvv) {
                const cardPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|7[0-9]{15})$/; // نمط بطاقات فيزا وماستركارد
                if (!cardPattern.test(cardNumber)) {
                  alert("Invalid card number. Please enter a valid Visa or Mastercard number.");
                  return;
                }
                
              }
          
              
              document.getElementById('payment-form').style.display = 'none';
              
              
              document.getElementById('success-message').style.display = 'block';
            }
          });
          