<template>
  <div>
    <section>
      <p>Borders/Shadows</p>
      <div>
        <h5>Borders</h5>
        <div class="inline">
          <div class="box border_thick"></div>
          <div class="box border_normal"></div>
        </div>
      </div>
      <div>
        <h5>Box-shadows</h5>
        <div class="inline">
          <div class="box shadow_thick"></div>
          <div class="box shadow_normal"></div>
        </div>
      </div>
      <div>
        <h5>Border-radius</h5>
        <div class="inline">
          <div class="box border_normal"></div>
          <div class="box border_normal round_small"></div>
          <div class="box border_normal round_large"></div>
          <div class="box border_normal round"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.box {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

</style>


