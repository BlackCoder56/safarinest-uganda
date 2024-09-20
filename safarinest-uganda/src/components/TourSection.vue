<template>
    <section class="tours">
      <div class="overlay">
        <h2>Explore Uganda’s Wonders</h2>
        <!-- <p>SafariNest Uganda offers exclusive tours to some of the most breathtaking places in Uganda. From national parks to historical sites, explore Uganda with our expert guides.</p> -->

        <div class="tour-places">
        <!-- Example Tour 1 -->
        <div class="tour-card">
          <img src="@/assets/queen-elizabeth.jpg" alt="Queen Elizabeth National Park">
          <div class="tour-info">
            <h3>Queen Elizabeth National Park</h3>
            <p>
              One of Uganda's most popular tourist destinations, known for its stunning landscapes and diverse wildlife.
            </p>
            <button @click="readMore('queen-elizabeth')">Read More</button>
          </div>
        </div>
  
        <!-- Example Tour 2 -->
        <div class="tour-card">
          <img src="@/assets/bwindi.jpg" alt="Bwindi Impenetrable Forest">
          <div class="tour-info">
            <h3>Bwindi Impenetrable Forest</h3>
            <p>
              Famous for gorilla trekking, this UNESCO World Heritage site offers an immersive experience into the heart of Uganda's biodiversity.
            </p>
            <button @click="readMore('bwindi')">Read More</button>
          </div>
        </div>

         <!-- Example Tour 3 -->
         <div class="tour-card">
          <img src="@/assets/kidepo.jpg" alt="Bwindi Impenetrable Forest">
          <div class="tour-info">
            <h3>Kidepo National Park</h3>
            <p>
                Kidepo is rugged savannah, dominated by the 2,750 metres Mount Morungole and transected by the Kidepo and Narus rivers. 
            </p>
            <button @click="readMore('bwindi')">Read More</button>
          </div>
        </div>

         <!-- Example Tour 4 -->
         <div class="tour-card">
          <img src="@/assets/kabale.jpg" alt="Bwindi Impenetrable Forest">
          <div class="tour-info">
            <h3>Kibale National Park</h3>
            <p>
              Famous for gorilla trekking, this UNESCO World Heritage site offers an immersive experience into the heart of Uganda's biodiversity.
            </p>
            <button @click="readMore('bwindi')">Read More</button>
          </div>
        </div>
        
        <!-- Add more tour places here -->
      </div>

      </div>  
     
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      readMore(place) {
        // Handle redirect to detailed place page or toggle more information
        this.$router.push({ name: 'PlaceDetail', params: { place } });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Fixed image background */
  .tours {
    position: relative;
    background: url('@/assets/uganda-scenic.png') no-repeat center center fixed;
    background-size: cover;
    color: #F5F5F5;
    /* padding: 100px 0; */
    text-align: center;
    height: 90vh;    
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.4);
    padding: 50px;
    margin-bottom: 50px;
    height: 100%;
  }
  
  .overlay h2 {
    color: #FFD700;
  }
  
  .tour-places {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 10px;
    margin: 30px 0;
    padding: 100px 0;
  }
  
  .tour-card {
    background-color: #FFF;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .tour-card:hover {
    transform: translateY(-10px);
  }
  
  .tour-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .tour-info {
    padding: 20px;
  }
  
  .tour-info h3 {
    color: #A67F59;
    margin-bottom: 10px;
  }
  
  .tour-info p {
    color: #333333;
    font-family: 'Times New Roman', Times, serif;
  }
  
  button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #FFD700;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {

    .tours {  
    height: auto;    
  }  

    .tour-places {
      flex-direction: column;
      align-items: center;
    }

    .tour-card {
      margin-bottom: 50px;
  }
  }
  </style>
  