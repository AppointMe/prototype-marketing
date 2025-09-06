<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import ContactUs from "@components/common/ContactUs.vue";

const route = useRoute()
const showContactForm = ref(false)
const showSidebar = ref(false)

const secondButton = computed(() => {
  if (route.path === '/clients') {
    return { label: '¿Tienes un negocio?', href: '/partners' }
  } else if (route.path === '/partners') {
    return { label: '¿Eres un cliente?', href: '/clients' }
  }
  return null
})

function closeSidebar() {
  showSidebar.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow z-50">
    <nav class="mx-4 my-2 px-4 py-3 flex justify-between items-center navbar-main">
      <div class="logo">
        <h1 class="text-4xl font-bold font-heading">
          <a href="#hero" class="flex items-center">
            <span class="text-indigo-700">Appoint</span><span class="text-pink-500">Me</span>
          </a>
        </h1>
      </div>
      <!-- Desktop nav -->
      <ul class="flex flex-row justify-evenly w-1/2 gap-6 text-text text-lg font-bold nav-links">
        <li><a href="#features" class="hover:text-indigo-500">¿Qué ofrecemos?</a></li>
        <li><a href="#about" class="hover:text-indigo-500">¿Quiénes somos?</a></li>
        <li><a href="#plans" class="hover:text-indigo-500">Planes</a></li>
        <li><a href="#demo" class="hover:text-indigo-500">Demo</a></li>
      </ul>
      <div class="flex gap-4 nav-actions">
        <a
            v-if="secondButton"
            :href="secondButton.href"
            class="bg-white border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50"
        >
          {{ secondButton.label }}
        </a>
        <button
            @click="showContactForm = true"
            class="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Contáctanos
        </button>
      </div>
      <!-- Hamburger for mobile -->
      <button class="hamburger" @click="showSidebar = true" aria-label="Open navigation">
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
          <rect y="4" width="24" height="2" rx="1" fill="#6366F1"/>
          <rect y="11" width="24" height="2" rx="1" fill="#6366F1"/>
          <rect y="18" width="24" height="2" rx="1" fill="#6366F1"/>
        </svg>
      </button>
    </nav>
    <!-- Sidebar nav for mobile -->
    <transition name="sidebar-fade">
      <div v-if="showSidebar" class="sidebar-overlay" @click.self="closeSidebar">
        <aside class="sidebar">
          <button class="close-btn" @click="closeSidebar" aria-label="Close navigation">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/>
              <path d="M6 18L18 6" stroke="#6366F1" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <ul class="sidebar-links">
            <li><a href="#features" @click="closeSidebar">¿Qué ofrecemos?</a></li>
            <li><a href="#about" @click="closeSidebar">¿Quiénes somos?</a></li>
            <li><a href="#plans" @click="closeSidebar">Planes</a></li>
            <li><a href="#demo" @click="closeSidebar">Demo</a></li>
          </ul>
          <div class="sidebar-actions">
            <a
              v-if="secondButton"
              :href="secondButton.href"
              class="bg-white border border-indigo-500 text-indigo-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50 block mb-2"
              @click="closeSidebar"
            >
              {{ secondButton.label }}
            </a>
            <button
              @click="showContactForm = true; closeSidebar()"
              class="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold w-full"
            >
              Contáctanos
            </button>
          </div>
        </aside>
      </div>
    </transition>
    <ContactUs v-if="showContactForm" @close="showContactForm = false" />
  </header>
</template>

<style scoped>
/* Hide hamburger and sidebar by default (desktop) */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

/* Sidebar overlay styles */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.3);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
}

/* Sidebar styles */
.sidebar {
  background: #fff;
  width: 80vw;
  max-width: 320px;
  height: 100vh;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  box-shadow: -2px 0 16px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideIn 0.2s;
}

@keyframes slideIn {
  from { transform: translateX(100%);}
  to { transform: translateX(0);}
}

.close-btn {
  background: none;
  border: none;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
}

.sidebar-links {
  list-style: none;
  padding: 0;
  margin: 3rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-links a {
  color: #3730a3;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
}

.sidebar-actions {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Sidebar fade transition */
.sidebar-fade-enter-active, .sidebar-fade-leave-active {
  transition: opacity 0.2s;
}
.sidebar-fade-enter-from, .sidebar-fade-leave-to {
  opacity: 0;
}

/* Responsive styles */
@media (max-width: 900px) {
  .nav-links,
  .nav-actions {
    display: none !important;
  }
  .hamburger {
    display: block !important;
  }
  .navbar-main {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }
}

/* Optional: Adjust logo size for mobile */
@media (max-width: 500px) {
  .logo h1 {
    font-size: 2rem !important;
  }
}
</style>