<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {

  },
  setup() {
    // const name = ref<string>('Bijaya')
    let message = ''
	// const text = ''
    return {
      // name,
      message
    };
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
