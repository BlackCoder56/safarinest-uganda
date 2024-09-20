<template>
    <section class="services">
        <div class="service-head">
            <h2>Services We Offer</h2>      
        </div>
      <!-- Service 1: Tours -->
      <div class="service-item">
        <div class="service-text">
          <h3>Tours</h3>
          <p>
            Explore Uganda’s stunning wildlife with our carefully curated tours. From the majestic 
            savannas of <strong>Elizabeth National Park</strong> to the rare gorilla trekking experiences in 
            <strong>Bwindi Impenetrable Forest</strong>, <span class="co-name">SafariNest Uganda</span> offers a diverse range of adventures. 
            Our expert guides ensure that you witness the beauty of Uganda while staying safe and 
            comfortable throughout your journey.
          </p>
        </div>
        <div class="service-image">
          <img src="@/assets/tours.jpg" alt="Tours in Uganda">
        </div>
      </div>
  
      <!-- Service 2: Accommodations -->
      <div class="service-item reverse">
        <div class="service-text">
          <h3>Accommodations</h3>
          <p>
            At <span class="co-name">SafariNest Uganda</span>, we provide high-quality accommodations to ensure your stay is as 
            memorable as the wildlife tours. Our accommodations range from luxurious lodges nestled 
            in nature to budget-friendly options that guarantee comfort after a day of adventure. 
            Enjoy modern amenities with a touch of Ugandan culture and hospitality.
          </p>
        </div>
        <div class="service-image">
          <img src="@/assets/accommodations.jpg" alt="Accommodations in Uganda">
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .services {
    background-color: #F5F5F5; /* Light Gray background */
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .service-head{
    margin-bottom: 20px;
  }

  .service-head h2{
    font-family: 'Times New Roman', Times, serif;
  }
  
  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
    max-width: 1200px;
  }

  .co-name{
    color: #42b983;
    font-weight: bold;
}
  
  .service-item h3 {
    color: #A67F59; /* Safari Brown for headers */
    margin-bottom: 20px;
  }

  
  .service-text {
    flex: 1;
    margin-bottom: 20px;
    color: #333333; /* Dark gray text */
    text-align: center;
  }
  
  .service-text p {
    line-height: 1.6;
    margin-bottom: 15px;
  }
  
  .service-image img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    max-width: 500px;
    border-radius: 10px;
  }
  
  /* Media query for larger screens - desktop */
  @media (min-width: 768px) {
    .service-item {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      max-width: 1200px;
    }
  
    .service-item.reverse {
      flex-direction: row-reverse;
    }
  
    .service-text {
      text-align: left;
      margin-bottom: 0;
      padding: 0 30px;
    }
  
    .service-image {
      flex: 1;
    }
  
    .service-image img {
      height: 300px; /* Ensure uniform image height */
    }
  }
  
  /* On small screens (mobile), ensure text comes first and images are below */
  @media (max-width: 767px) {
    .service-item {
      flex-direction: column;
    }

    .service-text p{
        text-align: justify;
    }
    
    .service-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    max-width: 500px;
    border-radius: 10px;
  }
    .service-item.reverse {
      flex-direction: column;
    }
  }
  </style>
  