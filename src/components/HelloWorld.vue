<template>
  <div v-if="false" class="container">
    <a-card class="card">
      <a-input-group>
        <a-row :gutter="20">
          <a-col :span="18">
            <a-input prefix="COUNT" v-model:value="count"></a-input>
          </a-col>
          <a-col :span="6">
            <a-button @click="count++">ADD</a-button>
          </a-col>
        </a-row>
        <br>
        <a-row :gutter="20">
          <a-col :span="18">
            <a-input prefix="STATE" v-model:value="state.count"></a-input>
          </a-col>
          <a-col :span="6">
            <a-button @click="state.count++">ADD</a-button>
          </a-col>
        </a-row>
        
      </a-input-group>
    </a-card>
    
  </div>
  <div class="charts">
    <div id="c1" class="item"></div>
    <div id="c2" class="item"></div>
  </div>
  <div class="charts">
    <div id="c3" class="item"></div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  setup(){
    const state = reactive({
      count: 0,
    })
    let count = ref(0)
    onMounted(()=>{
      console.log('setup onMounted')
    })
    return {
      state,count
    }
  },
  mounted(){
    echarts.init(document.getElementById("c1")).setOption({
      title: {
        text: '近六年数据（2015-2020）'
      },
      legend: { bottom: 20, data:['教师数','骨干教师数'], },
      xAxis: [
        { data: ['2015', '2016', '2017', '2018', '2019', '2020'] },
      ],
      yAxis: [
        { name: '人数', type: 'value' },
      ],
      series: [
        { name: '教师数', type: 'bar', data: [206, 230, 261, 277, 293, 317] },
        { name: '骨干教师数', type: 'bar', data: [152, 155, 170, 173, 181, 188] },
      ]
    })
    echarts.init(document.getElementById("c2")).setOption({
      // title: {
      //   text: '教师数据统计'
      // },
      xAxis: [],
      yAxis: [],
      series: [
        { radius: 100, center: [300,150], type: 'pie', data: [{name: '普通教师', value: 69.23},{name: '学科骨干教师', value: 25},{name: '德育骨干教师', value: 5.77}] },
        { radius: 100, center: [300,400], type: 'pie', data: [{name: '女教师', value: 45.78},{name: '男教师', value: 54.22},] },
        { radius: 100, center: [800,150], type: 'pie', data: [{name: '女教师', value: 29.18},{name: '男教师', value: 70.82}] },
        { radius: 100, center: [800,400], type: 'pie', data: [{name: '女教师', value: 39.31},{name: '男教师', value: 60.69}] },
      ]
    })
    echarts.init(document.getElementById("c3")).setOption({
      title: {
        text: '按年龄段统计'
      },
      xAxis: [
        { data: ['普通教师（学科）', '骨干教师（学科）', '普通教师（德育）', '骨干教师（德育）'] },
      ],
      yAxis: [
        { name: '人数', type: 'value' },
      ],
      series: [
        { name: '<30', type: 'bar', data: [260,260,260,260,260,260] },
        { name: '30-35', type: 'bar', data: [420,420,420,420,420,420,] },
        { name: '36-40', type: 'bar', data: [360,360,360,360,360,360,] },
        { name: '41-45', type: 'bar', data: [300,300,300,300,300,300] },
        { name: '46-50', type: 'bar', data: [260,420,360,250,300,200] },
        { name: '57-55', type: 'bar', data: [200,200,200,200,200,200] },
      ]
    })
  }
})
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.charts {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#c1 {
  height: 600px;
  width: 30%;
  flex: 1
}

#c2 {
  height: 600px;
  width: 60%;
  flex: 2;
}

#c3 {
  height: 500px;
  width: 90%;
  flex: 3;
  justify-items: flex-start;
}

.card {
  width: 400px;
  height: 300px;
  box-shadow: 0px 0px 10px 5px #eee;
  border-radius: 4px;
}

</style>
