<template>
  <div id="home">
    <div class="app-container">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld message="Welcome to Your PrimeVue + TypeScript App"/>
      <form @submit.prevent="greet">
        <InputText type="text" v-model="hello.text"/>
        <Button type="submit" label="Submit"/>
        <h3>{{hello.message}}</h3>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const name = ref<string>('Bijaya')
	// const text = ''
	const hello = reactive({
      message: '',
      text: ''
	})
	const greet = () => {
      if (hello.text.length) hello.message = 'Hello ' + hello.text
	}
    return {
      name,
      hello
    };
  },
})

</script>
