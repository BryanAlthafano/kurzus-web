<template>
  <q-page class="custom-page">
    <div class="row justify-between">
      <p class="custom-title self-center">Video Course</p>
      <div>
        <CustomTextInput
          :modelValue="searchModel"
          :rounded="true"
          :placeholder="'Search...'"
          :prependIconName="'mdi-magnify'"
          @update:modelValue="val => (searchModel = val)"
        />
      </div>
    </div>
    <div class="row justify-center q-mt-lg">
      <div v-for="(item, index) in categories" :key="index" style="width: 70px">
        <q-btn @click="selectedCategory = index" flat dense no-caps>
          {{ item?.title }}
        </q-btn>
      </div>
    </div>
    <div class="row justify-start custom-container">
      <div
        v-for="(item, index) in categories[selectedCategory].items"
        :key="index"
        class="custom-card col-12 col-sm-6 col-md-4 col-lg-3 q-px-md"
      >
        <div @click="handleDetail(item)" style="cursor: pointer">
          <q-img
            no-spinner
            class="custom-card-image"
            alt="card-img"
            :src="url + item?.imageUrl"
          />
          <div class="row justify-between q-mt-sm q-px-sm">
            <p class="custom-card-title self-center">
              {{ item?.title }}
            </p>
            <p class="custom-card-description self-center">
              {{ item?.duration }} read
            </p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import CustomTextInput from 'src/components/common/CustomTextInput.vue'
import { useVideoCourseStore } from 'src/stores/VideoCourse'

export default {
  name: 'VideoCoursePage',
  components: { CustomTextInput },
  data () {
    return {
      searchModel: '',
      selectedCategory: 0,
      categories: [
        {
          title: 'Math',
          items: [
            {
              title: 'Math class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'Math class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'Math class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'Math class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'Math class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'Math class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            }
          ]
        },
        {
          title: 'English',
          items: [
            {
              title: 'English class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'English class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'English class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'English class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'English class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            },
            {
              title: 'English class 10',
              duration: '10 min',
              imageUrl: 'images/sampleCourseImg.png',
              content: `<p class='custom-content-title'>Pendahuluan</p><br/><p class='custom-content-description'>Lorem ipsum dolor sit amet consectetur. Ac imperdiet ac sed in faucibus dignissim massa luctus pellentesque. Nibh pellentesque in egestas blandit volutpat. Faucibus bibendum lobortis vehicula urna sollicitudin blandit purus suspendisse interdum. Fusce facilisis quis lectus varius varius quam sed aliquam. Nisl cursus egestas in morbi fermentum. Dolor blandit sed purus lobortis dui est pellentesque. Urna tincidunt elementum velit venenatis. Egestas sapien vitae ante morbi viverra tristique. Curabitur elit morbi tempus malesuada tortor. Nunc massa diam proin auctor dictumst auctor leo. Duis pretium ac varius urna id molestie mattis tristique mauris. Elementum eget augue mauris et nec nullam. Pharetra dui tellus diam in vestibulum in odio viverra a. Placerat sed sit adipiscing quis tincidunt gravida quis purus ultricies. Et non mattis sapien sit hendrerit hendrerit. Tellus tristique elementum sit amet tellus vulputate interdum facilisi bibendum. Nunc duis libero duis tincidunt. Curabitur mus consectetur ultricies integer venenatis in ac. Massa gravida suspendisse tincidunt pharetra lobortis risus odio pretium sagittis. Tristique velit elementum sagittis nunc sit ante ante dui. Sed eu sed porttitor tristique nunc leo lacus feugiat. Urna risus quisque amet semper venenatis justo eget. Integer ultricies maecenas velit lectus nulla donec. Gravida lorem facilisis imperdiet nisi. Libero dolor iaculis sed in consectetur scelerisque ullamcorper ultricies amet. Eget aliquam nisi leo turpis ut bibendum amet. Vitae id ut lobortis mattis ipsum sagittis. Purus vestibulum non malesuada ultrices consequat eget eu. Vitae odio aliquet in diam accumsan consequat aliquet egestas varius. Ut diam eu in leo. In sit suspendisse sagittis sollicitudin sagittis id imperdiet. Facilisis sem neque lectus purus dictumst nulla lectus sed.</p>`
            }
          ]
        }
      ]
    }
  },
  computed: {
    url () {
      return window.location.href.split('#')[0]
    },
    isXSmallScreen () {
      return this.$q.screen.width <= 350
    },
    isSmallScreen () {
      return this.$q.screen.width <= 500
    },
    isMediumScreen () {
      return this.$q.screen.width <= 750
    },
    videoCourseStore () {
      return useVideoCourseStore()
    }
  },
  methods: {
    handleDetail (item) {
      const payload = {
        key: 'selectedVideoCourse',
        data: item
      }
      this.videoCourseStore.SET_DATA(payload)
      this.$router.push({ name: 'VideoCourseDetailPage' })
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-page {
  overflow-x: hidden;
  padding: 20px 10px;
  @media (min-width: 500px) {
    padding: 50px 20px !important;
  }
}
.custom-title {
  font-weight: 700;
  font-size: 20px;
  color: #222831;
  @media (min-width: 500px) {
    font-size: 30px !important;
  }
}
.custom-container {
  margin-top: 50px;
  padding: 0px 10px;
  @media (min-width: 500px) {
    padding: 0px 50px !important;
  }
}
.custom-card {
  margin-bottom: 10px;
  @media (min-width: 500px) {
    margin-bottom: 20px !important;
  }
}
.custom-card-image {
  border-radius: 10px;
  width: 100%;
  height: 150px;
}
.custom-card-title {
  font-weight: 400;
  font-size: 14px;
  color: #222831;
  @media (min-width: 500px) {
    font-size: 16px !important;
  }
}
.custom-card-description {
  font-weight: 400;
  font-size: 12px;
  color: #a5a5a5;
  @media (min-width: 500px) {
    font-size: 14px !important;
  }
}
</style>
