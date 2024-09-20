<template>
  <section id="about" class="about">
    <div class="about-content">
      <!-- Text content -->
      <div class="about-text">
        <h2>Discover Uganda's Wildlife</h2>
        <p>
          Uganda is home to some of the most breathtaking wildlife and natural landscapes in the world. 
          From the rolling savannas of <strong><i>Elizabeth National Park</i></strong> to the misty mountains where gorillas roam, 
          our tours take you closer to nature. Experience the call of the wild, witness majestic elephants, 
          lions, and a variety of bird species in their natural habitat. Whether you're an adventurer or 
          nature lover, Uganda has something magical for everyone.
        </p>
        <p>
          <span class="co-name"><strong>SafariNest Uganda</strong></span>, we provide both accommodation and transportation to make your journey 
          unforgettable. With our expert guides and tailor-made tours, you'll explore Uganda's wonders 
          while enjoying comfort and convenience.
        </p>
      </div>

      <!-- Image content -->
      <div class="about-image">
        <img src="@/assets/giraffe.jpg" alt="Ugandan-giraffe">
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: #F5F5F5; /* Light Gray background */
  color: #333333; /* Dark Gray text */
  padding: 30px;
}

.about h2 {
  color: #A67F59; /* Safari Brown for headers */
  margin-bottom: 20px;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-text {
  flex: 1;
  margin-bottom: 20px;
}

.co-name{
    color: #42b983;
}

.about p {
  line-height: 1.6;
  margin-bottom: 15px;
  text-align: justify;
}

.about-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
}

/* Media query for larger screens - desktop */
@media (min-width: 768px) {
  .about-content {
    flex-direction: row;
    align-items: flex-start;
    margin: 0px 180px;
  }

  .about-text {
    flex: 1;
    margin-right: 30px;
  }

  .about-image {
    flex: 1;
  }
}
</style>
