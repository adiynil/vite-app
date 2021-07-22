<template>
    <div v-show="showMsg">
        <h2>{{ msg }}</h2>
    </div>
    <a-button @click="showMsg = !showMsg">Toggle</a-button>
    <p>{{ name }}</p>
    <p><a-button @click="changeName('change name')">CHANGE</a-button></p>
</template>

<script>
import { defineComponent,ref,onMounted,readonly } from 'vue';
export default defineComponent({
    props: {
        msg: {
            type: String,
            default: "default message"
        }
    },
    setup(props, context){
        let showMsg = ref(false)
        // console.log(context)
        let name,changeName
        onMounted(() => {
            console.log(this)
        })
        // let { name } = ctx.store.state
        // let { changeName } = ctx.store.mutations
        return {
            showMsg,
            name,changeName
        }
    }
})
</script>

<style scoped>

</style>