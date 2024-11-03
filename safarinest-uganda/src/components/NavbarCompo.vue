<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.jpg" alt="SafariNest Logo" class="navbar-logo">
        <span>SafariNest Uganda</span>
      </a>

      <!-- Toggler button for mobile view -->
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <!-- Toggler icon should toggle between the hamburger and X icon -->
        <span v-if="navbarOpen" class="navbar-toggler-icon" @click="closeNavbar">
          <span class="close-icon">X</span>
        </span>
        <span v-else class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation links in fullscreen when opened -->
      <div class="collapse navbar-collapse fullscreen-menu" :class="{ open: navbarOpen }" id="navbarNav">
        <!-- X Icon for closing the menu, appears at the top -->
        <div v-if="navbarOpen" class="close-menu" @click="closeNavbar">
          &times;
        </div>

        <!-- Navigation links -->
        <ul class="navbar-nav">
          <li class="nav-item ">
            <a class="nav-link" href="/" @click=" closeNavbar">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about" @click="closeNavbar">About</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#services" @click="closeNavbar">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/tours" @click="closeNavbar">Tours</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#accommodations" @click="closeNavbar">Accommodations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#book" @click="closeNavbar"><strong>Book</strong></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" @click="closeNavbar">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    closeNavbar() {
      this.navbarOpen = false; 
    }
  }
};
</script>

<style scoped>
/* Navbar Styling */
.navbar {
  background-color: #42b983; /* Primary green */
  color: #F5F5F5; /* Light gray text */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  min-height: 80px;
}
.nav-item.active{
  color: #FFD700;
}
.navbar-brand {
  display: flex;
  align-items: center;
  color: #F5F5F5; /* Brand text color */
}

.navbar-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

/* Styling for Nav links */
.navbar-nav .nav-link {
  color: #F5F5F5;
}

.navbar-nav .nav-link:hover {
  color: #FFD700; /* Golden Yellow on hover */
}

/* Full-Screen Toggle Menu for Small Screens */
.navbar-collapse.open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #42b983; /* Full-screen background */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-20px); /* For smooth slide-in */
  transition: all 1.0s ease; 
}

.fullscreen-menu.open {
  visibility: visible;
  opacity: 1;
  transform: translateY(0); /* Slide back to the original position */
}


/* Center the nav items */
.navbar-nav {
  list-style: none;
  text-align: center;
}

.navbar-nav .nav-item {
  margin: 15px 0;
}

.close-icon {
  display: block;
  font-size: 24px;
  color: #F5F5F5; /* Same color as other text */
}

/* Fixed Top Navbar */
.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

/* Style for the "X" close icon when menu is open */
.close-menu {
  position: absolute;
  top: 20px;
  right: 50px;
  font-size: 50px;
  color: #F5F5F5; /* Light gray */
  cursor: pointer;
}


/* For desktop screens */
@media (min-width: 992px) {
  .navbar-collapse {
    display: flex !important;
    justify-content: center;
    position: relative;
  }

  .navbar-collapse.open {
    position: relative;
    height: auto;
    background-color: transparent;
  }
}
</style>
