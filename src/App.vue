<template>
  <header>
    <nav>
      <ul id="cart">
        <RouterLink to="/comida">
          <li class="text-sm"><v-icon name="co-cart" fill="red" scale="1.5" animation="wrench" hover /></li>
        </RouterLink>
      </ul>

      <ul>
          <li class="text-sm"><a href="#products">Produtos</a></li>
          <li class="text-sm"><RouterLink to="#">Sobre</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <p class="text-xs">© 2024 MarshFfeco. All rights reserved.</p>
    <a target="_blank" href="https://github.com/MarshFfeco"><v-icon name="bi-github" fill="black" scale="1.5" animation="wrench" hover /></a>
  </footer>
</template>

<style scoped>
header {
  width: 70%;

  position: fixed;
  top: 10px;
  left: 50%;

  z-index: 100;

  transform: translate(-50%, 0);

  border-radius: 999px;

  background-color: white;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

nav {
  padding-inline: 25px;

  height: 5vh;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

#cart:hover {
  cursor: pointer;
}

nav ul:nth-child(2) li {
  display: inline;

  font-weight: 500;
}

nav ul:nth-child(2) li:nth-child(1n+2) {
  padding-left: 25px;
}

@media only screen and (max-width: 600px) {
  header {
    width: 90%;
  }
}

main {
  height: 200vh;
}

footer {
  height: 5vh;

  padding-inline: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: .5px solid #6b7280;
}

footer p {
  color: #6b7280;
}
</style>
