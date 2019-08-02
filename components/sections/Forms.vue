<template>
  <div>
    <section>
      <p>Form</p>
    </section>
    <section>
      <p>Input types</p>
      <div>
        <h5>Inline with icon</h5>
        <div>
          <div class="input-icon">
            <icon 
              type="user"/>
            <input
              class="input" 
              type="text" 
              placeholder="Username">
          </div>
          <div class="input-icon">
            <icon 
              type="lock"/>
            <input 
              class="input"
              type="password" 
              placeholder="Password">
          </div>
        </div>
      </div>
      <div>
        <h5>Inline with text</h5>
        <div>
          <div class="input-text">
            <span>Https</span>
            <input
              class="input"
              type="text"
              placeholder="url"
            >
          </div>
        </div>
      </div>
      <div>
        <h5>Default</h5>
        <div>
          <div style="margin-bottom: 10px">
            <input 
              class="input"
              type="text"
              placeholder="Default input"
            >
          </div>
          <div class="input-inline">
            <label for="input">Default</label>
            <input 
              class="input"
              type="text"
              placeholder="Default input"
            > 
          </div>
        </div>
      </div>
      <div>
        <h5>Disabled</h5>
        <div>
          <input 
            type="text"
            class="input input-disabled"
            placeholder="Disabled input"
          >
        </div>
      </div>
      <div>
        <h5>Question-mark</h5>
        <div class="input-question">
          <input 
            type="text"
            class="input"
            placeholder="Questionmark input"
          >
          <icon type="question"/>
        </div>
      </div>
      <div>
        <h5>Required</h5>
        <div class="inline">
          <span class="required">*</span>
          <input 
            type="text"
            class="input"
            placeholder="Required input"
          >
        </div>
      </div>
      <div>
        <h5>Dropdown</h5>
        <div class="input-select">
          <select class="input">
            <option 
              value="" 
              selected 
              disabled
            >Select</option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
          <icon type="down"/>
        </div>
      </div>
      <div>
        <h5>CheckBox</h5>
        <div>
          <checkbox> Neco</checkbox>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Icon from '../Icon'
import Checkbox from '../Checkbox'
export default {
  components: { Icon, Checkbox }
}
</script>

<style lang="scss" scoped>
h5 {
  margin: 50px 0 20px;
}
.input-icon {
  margin: 10px 0;
}

</style>
