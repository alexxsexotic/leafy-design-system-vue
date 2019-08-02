<template>
  <div>
    <section>
      <p>Buttons</p>
      <div>
        <h5>Normal</h5>
        <div>
          <button class="btn btn_primary">Primary</button>
          <button class="btn btn_secondary">Secondary</button>
          <button class="btn btn_default">Default</button>
          <button class="btn btn_outline">Outline</button>
          <button class="btn btn_default btn-disabled">Disabled</button>
        </div>
      </div>
      <div>
        <h5>Action buttons</h5>
        <div>
          <Button
            type="loading"
            class="btn btn_primary">
          Loading</Button>
          <button class="btn btn_default">
            <Icon type="mobile" class="right"/>Icon</button>
          <button class="btn btn_default">
            <Icon type="mobile"/>
          </button>
        </div>
      </div>
    </section>
    <section>
      <p>Links</p>
      <div>
        <a class="text_primary" href="">Primary</a>
        <a class="text_secondary" href="">Secondary</a>
        <a class="text_default" href="">Default</a>
      </div>
    </section>
  </div>
</template>

<script>
import Button from '../Button'
import Icon from '../Icon'

export default {
  components: { Button, Icon }
}
</script>

<style lang="scss" scoped>
section {
  div button {
    margin-right: 20px;
  }
  a {
    margin-right: 20px;
  }
}

</style>

