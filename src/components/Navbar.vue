<template>
     <header class="d-flex justify-content-center py-3 border-bottom box-shadow">
         <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">關於我</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/experience">工作經驗與能力</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contribute">我能為公司做什麼？</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/demo">demo</router-link>
          </li>
        </ul>
    </header>
</template>


<style scoped>
.nav-link.router-link-exact-active {
  font-weight: bold;
  color: #fff !important;
  background-color: var(--bs-link-color);
}
</style>
