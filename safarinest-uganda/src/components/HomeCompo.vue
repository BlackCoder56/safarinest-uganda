<template>
    <div class="home-container">
      <h1>Welcome to SafariNest Uganda</h1>
      <p>Your ultimate wildlife adventure</p>
      <button class="btn btn-primary">Explore Now</button>
    </div>
  </template>
  
  <style scoped>
  .home-container{
    background-image: url('@/assets/bird.jpg'); 
    background-size: cover;
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    color: #F5F5F5; /* Light Gray for contrast */
    height: 50vh;
    padding: 100px 0;
    position: relative;
  }
  h1{
    font-weight: bolder;
    margin-top: 10px;
  }
  button.btn-primary {
    background-color: #42b983; /* Primary Green */
    border: none;
    color: #F5F5F5; /* Light Gray for text */
  }
  
  button.btn-primary:hover {
    background-color: #FFD700; /* Golden Yellow for hover */
  }
  </style>
  