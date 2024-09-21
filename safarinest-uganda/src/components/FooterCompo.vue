<template>
    <footer class="footer py-4">
      <div class="container text-center text-md-start">
        <div class="row py-4">
          <!-- Company Info -->
          <div class="col-md-3 mb-3">
            <h5 class="text-light">SafariNest Uganda</h5>
            <p class="text-light">
              Providing top-notch accommodation and transport services for tourists visiting Uganda.
            </p>
          </div> 
         
  
          <!-- Contact Info -->
          <div class="col-md-3 mb-3">
            <h5 class="text-light">Contact Us</h5>
            <ul class="list-unstyled">
              <li class="text-light">Email: info@safarinesuganda.com</li>
              <li class="text-light">Phone: +256 123 456 789</li>
              <li class="text-light">Address: Kampala, Uganda</li>
            </ul>
          </div>

          <div class="col-md-3 mb-3">
            <h5 class="text-light">Developer's Contact</h5>
            <ul class="list-unstyled">
              <li class="text-light">Email: blackcoda56@gmail.com</li>
              <li class="text-light">Address: Kampala, Uganda</li>
            </ul>
          </div>

           <!-- Quick Links -->
           <div class="col-md-3 mb-3">
            <h5 class="text-light">Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light">Home</a></li>
              <li><a href="#" class="text-light">About Us</a></li>
              <li><a href="#" class="text-light">Tours</a></li>
              <li><a href="#" class="text-light">Contact</a></li>
            </ul>
          </div>

        </div>

        
  
        <!-- Social Media Icons -->
        <div class="row mt-3">
          <div class="col-12 text-center">
            <h6 class="text-light">Follow us:</h6>
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="https://facebook.com" target="_blank" class="text-light">
                  <i class="fab fa-tiktok fa-2x"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com" target="_blank" class="text-light">
                  <i class="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://instagram.com" target="_blank" class="text-light">
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://linkedin.com" target="_blank" class="text-light">
                  <i class="fab fa-linkedin-in fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Copyright -->
        <div class="row mt-3">
          <div class="col-12 text-center">
            <p class="text-light">&copy; {{ currentYear }} {{ companyName }}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
        companyName: 'SafariNest Uganda' // Replace with dynamic company name if needed
      };
    }
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #42b983; /* Green color from the color scheme */
  }
  
  .footer h5 {
    font-size: 1.2rem;
  }
  
  .footer p,
  .footer li {
    font-size: 0.9rem;
  }
  
  .footer a {
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer a:hover {
    color: #FFD700; /* Gold hover effect for links */
  }
  
  ul.list-inline {
    padding-left: 0;
  }
  
  ul.list-inline-item {
    margin-right: 10px;
  }
  
  ul.list-inline-item a {
    font-size: 1.5rem;
  }
  
  ul.list-inline-item a:hover {
    color: #FFD700;
  }
  </style>
  