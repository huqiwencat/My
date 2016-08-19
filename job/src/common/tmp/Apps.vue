<template>
  <div @click="go(1)"><p><img :src="flag==1 ? 'common/images/job_on.png':'common/images/job.png'"></p>
  <p :style="flag==1 ? 'color:#ea5504' : ''">职位列表</p>
  </div>
  <div @click="go(2)"><p><img :src="flag==2 ? 'common/images/vita_on.png':'common/images/vita.png'"></p>
  <p :style="flag==2 ? 'color:#ea5504' : ''">简历({{complete}}%)</p>
  </div>
  <div @click="go(3)"><p><img :src="flag==3 ? 'common/images/foot_on.png':'common/images/foot.png'"></p>
  <p :style="flag==3 ? 'color:#ea5504' : ''">足迹</p>
  </div>
</template>

<script>
export default {
  data: {
    flag: 2,
    complete: '50'
  }
}
</script>
