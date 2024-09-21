<template>
    <section class="contact-section">
      <div class="contact-container">
        <!-- Image Section -->
        <div class="contact-image">
          <img src="@/assets/meerkat.jpg" alt="Contact Us">
        </div>
  
        <!-- Contact Form Section -->
        <div class="contact-form">
          <h2>Contact Us</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="fullName">Full Name</label>
              <input type="text" id="fullName" v-model="form.fullName" class="form-control" placeholder="eg. Senoga Grace" required />
            </div>
  
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" class="form-control" placeholder="example@gmail.com" required />
            </div>
  
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" class="form-control" placeholder="Enter your message here..." required></textarea>
            </div>
  
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          fullName: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission (e.g., send to backend)
        alert('Message sent successfully!');
        this.form.fullName = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Contact Section */
  .contact-section {
    background-color: #F5F5F5;
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }
  
  /* Container for both image and form */
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    width: 80%;  
    max-width: 1200px;
    height: 600px;
  }
  
  /* Image Section */
  .contact-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #A67F59;
  }
  
  .contact-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Form Section */
  .contact-form {
    padding: 40px;
  }
  
  .contact-form h2 {
    color: #A67F59;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
  
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #333333;
    font-weight: bold;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .form-group textarea {
    resize: none;
    height: 150px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #FFD700;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .contact-section{
        padding: 50px 5px;
        height: 90vh;
    }
    .contact-container {
      grid-template-columns: 1fr;
      /* margin-top: 40px; */
      height: 500px;
    }

    .form-group input,
  .form-group textarea {
    font-size: 0.8rem;
  }   

    .form-group textarea {
        resize: none;
        height: 100px;
    }
   
    .contact-image {
      display: none; /* Hide image on smaller screens */
    }
  
    .contact-form {
      padding: 20px;
    }
  }
  </style>
  