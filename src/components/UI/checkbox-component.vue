<template>
  <div class="box-1">
    <input
      :checked="!modelValue"
      @change="$emit('update:modelValue', !modelValue)"
      id="2"
      type="checkbox"
    />
    <span class="toogle"></span>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.box-1 {
  width: 60px;
  height: 37px;
  background: rgb(200, 200, 200);
  position: relative;
  border-radius: 5px;
}

.box-1 input {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  z-index: 999;
}

.box-1 .toogle {
  display: block;
  position: absolute;
  z-index: 998;
  width: 30px;
  height: 100%;
  background: rgb(5, 175, 19);
  border-radius: 5px 0px 0px 5px;
  top: 0;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  text-align: center;
}
.box-1 .toogle:before {
  content: 'ON';
  color: rgb(255, 255, 255);
  font-family: tahoma;
  font-size: 11px;
}

.box-1 input:checked ~ .toogle {
  margin-left: 30px;
  background: rgb(175, 39, 5);
  border-radius: 0px 5px 5px 0px;
}
.box-1 input:checked + .toogle:before {
  content: 'OFF';
}
</style>
