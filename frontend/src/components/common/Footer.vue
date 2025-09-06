<script setup>
import logo from '@/assets/icons/appointme.svg'
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <img :src="logo" alt="AppointMe Logo" class="footer-logo" />
        <h1 class="text-2xl font-bold font-heading">
          <a href="#hero" class="flex items-center">
            <span class="text-indigo-700">Appoint</span><span class="text-pink-500">Me</span>
          </a>
        </h1>
      </div>
      <div class="footer-social">
        <a href="mailto:info@appointme.today" class="footer-icon" aria-label="Email">
          <svg width="28" height="28" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="6" fill="#6366F1" fill-opacity="0.08"/>
            <path d="M5 7.5A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5v-9Zm2.28.22a.75.75 0 0 0-.53 1.41l5.25 3.75a.75.75 0 0 0 .9 0l5.25-3.75a.75.75 0 1 0-.88-1.22l-4.8 3.43-4.8-3.43a.75.75 0 0 0-.39-.19Z" fill="#6366F1"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/appointme2day/" target="_blank" rel="noopener" class="footer-icon" aria-label="Instagram">
          <svg width="28" height="28" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="6" fill="#6366F1" fill-opacity="0.08"/>
            <path d="M16.75 5.5h-9.5A1.75 1.75 0 0 0 5.5 7.25v9.5A1.75 1.75 0 0 0 7.25 18.5h9.5A1.75 1.75 0 0 0 18.5 16.75v-9.5A1.75 1.75 0 0 0 16.75 5.5Zm-4.75 2.25a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm5.25.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" fill="#6366F1"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; {{ new Date().getFullYear() }} AppointMe. Todos los derechos reservados.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  padding: 2rem 0 1rem 0;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo {
  height: 2.5rem;
  width: auto;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #6366F1;
  letter-spacing: 0.02em;
}

.footer-social {
  display: flex;
  gap: 1.2rem;
}

.footer-icon {
  display: flex;
  align-items: center;
  transition: transform 0.15s;
}
.footer-icon:hover {
  transform: scale(1.12);
}

.footer-bottom {
  width: 100%;
  text-align: center;
  margin-top: 1.5rem;
  color: #64748b;
  font-size: 1rem;
}

/* Responsive styles */
@media (max-width: 700px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 0 1rem;
  }
  .footer-brand {
    justify-content: center;
  }
  .footer-social {
    justify-content: center;
  }
  .footer {
    padding: 1.5rem 0 0.5rem 0;
  }
  .footer-bottom {
    font-size: 0.95rem;
    margin-top: 1rem;
  }
}
</style>