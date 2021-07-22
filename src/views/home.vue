<template>
  <div v-show="showMsg">
    <h2>{{ msg }}</h2>
  </div>
  <a-button @click="showMsg = !showMsg">Toggle</a-button>
  <p>{{ $store.state.name }}</p>
  <p><a-button @click="changeName('change name')">CHANGE</a-button></p>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { mapState, mapMutations } from "vuex";
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "default message",
    },
  },
  setup() {
    let showMsg = ref(false);
    return {
      showMsg,...mapMutations(['changeName'])
    };
  },
//   ...mapState(['name']),
  mounted(){
      console.log(this.name);
      console.log(this.changeName);
  }
});
</script>

<style scoped></style>
