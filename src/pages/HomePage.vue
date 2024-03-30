<template>
  <q-page class="custom-page">
    <div class="q-mt-sm">
      <Section1 />
    </div>
    <div class="custom-section2">
      <Section2 />
    </div>
    <div class="custom-section3">
      <Section3 />
    </div>
    <div class="custom-section4">
      <Section4 />
    </div>
    <div class="custom-section5">
      <Section5 />
    </div>
    <div>
      <Copyright />
    </div>
  </q-page>
</template>

<script>
import Section1 from 'src/components/home/Section1.vue'
import Section2 from 'src/components/home/Section2.vue'
import Section3 from 'src/components/home/Section3.vue'
import Section4 from 'src/components/home/Section4.vue'
import Section5 from 'src/components/home/Section5.vue'
import Copyright from 'src/components/Copyright.vue'

export default {
  name: 'HomePage',
  components: { Section1, Section2, Section3, Section4, Section5, Copyright }
}
</script>

<style lang="scss" scoped>
.custom-page {
  overflow-x: hidden;
}
.custom-section2 {
  margin-top: 100px;
}
.custom-section3 {
  margin-top: 100px;
}
.custom-section4 {
  margin-top: 100px;
}
.custom-section5 {
  margin-top: 100px;
}
</style>
