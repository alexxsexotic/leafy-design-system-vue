<template>
  <div>
    <section>
      <div>
        <p>Icons</p>
        <a href="https://ant.design/components/icon/" style="margin-bottom: 20px; display: block">Icon list link</a>
        <div class="inline">
          <icon 
            type="shopping-cart"
          />
          <h5>normal</h5>
        </div>
        <div class="inline">
          <icon 
            type="shopping-cart"
            class="icon-size_small"
          />
          <h5>small</h5>
        </div>
        <div class="inline">
          <icon 
            type="shopping-cart"
            class="icon-size_medium"
          />
          <h5>medium</h5>
        </div>
        <div class="inline">
          <icon 
            type="shopping-cart"
            class="icon-size_large"
          />
          <h5>large</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Icon from '../Icon'
export default {
  components: { Icon }
}
</script>
