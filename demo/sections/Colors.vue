<template>
  <div>
    <section>
      <p>Colors</p>
      <main>
        <div>
          <div class="block green-1"></div>
          <div class="block green-2"></div>
          <div class="block green-3"></div>
        </div>
        <div>
          <div class="block blue-1"></div>
          <div class="block blue-2"></div>
        </div>
        <div>
          <div class="block bg-white"></div>
          <div class="block border-white"></div>
          <div class="block bg"></div>
          <div class="block white"></div>
        </div>
      </main>
    </section>
  </div>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-wrap: wrap;
}

.block {
  border: 2px solid rgba(0, 0, 0, 0.158);
  display: block;
  content: "";
  width: 100px;
  height: 100px;
  margin: 10px;
}

</style>
