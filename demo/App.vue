<template>
  <div id="app">
    <h1>hi</h1>
    <Icon class="icon-size_large" name="user"/>
    <Icon class="icon-size_medium" name="user"/>
    <Icon class="icon-size_small" name="user"/>
    <Icon name="user"/>
    <Checkbox>hi</Checkbox>
    <Button class="btn btn_primary" loaded="true">hi</Button>
    <Google link="'neco.com'"/>
    <Fb link="'neco.com'"/>
  </div>
</template>

<script>
import Icon from '../components/icon'
import Checkbox from '../components/checkbox'
import Button from '../components/button'
import Google from '../components/google-icon'
import Fb from '../components/fb-icon'

export default {
  components: { Icon, Checkbox, Button, Google, Fb }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-size: 15px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
</style>

