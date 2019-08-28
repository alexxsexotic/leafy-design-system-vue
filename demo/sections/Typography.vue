<template>
  <div>
    <section>
      <p>Headers</p>
      <h1 class="text-size_large">H1 Page Header</h1>
      <h2 class="text-size_medium">H2 Page Header</h2>
      <h3 class="text-size_small">H3 Page Header</h3>
      <h4>H4 Page Header</h4>
    </section>
    <section>
      <p>Text sizes</p>
      <div class="text-size_large">Size Large</div>
      <div class="text-size_medium">Size Medium</div>
      <div class="text-size_small">Size Small</div>
      <div>Size Root</div>
      <div class="text-size_label">Size Label</div>
    </section>
    <section>
      <p>Font Weight</p>
      <div class="text-weight_bold">Bold Text</div>
      <div class="text-weight_medium">Medium Text</div>
      <div>Normal Text</div>
      <div></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>

h1,h2,h3,h4 {
  padding: 10px 0;
}

section {
  div {
    margin: 10px 0;
  }
}
</style>
