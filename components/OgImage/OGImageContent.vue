<script setup lang="ts">

// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  lang: String,
  path: String
})
const page = await queryContent(props.path).findOne()

const url = computed(() => {
  if (page && page.header && page.header.image) {
    return page.header.image
  } else if (page && page.thumbnail) {
    return page.thumbnail
  } else {
    return null
  }
})
const category = 'trance'
</script>

<template>
  <div class="w-full h-full bg-white">
    <div class="w-full flex flex-row">
      <div class="w-1/2 items-start text-center p-12">
        <img src="/images/harmonics_fulllogo400.png" width="500" alt="Harmonics logo">
      </div>
      <div
        class="w-1/2 text-center"
      >
        <div
          v-if="url"
          class="m-5 p-5 rounded-xl shadow-lg"
          :style="'background-image: url(https://harmonics.be' + url + '); background-size: cover; background-position: center; background-repeat: no-repeat;'"
        >
          <h1
            class="font-mic32 text-white text-6xl mb-12 mx-auto"
          >
            {{ page?.title }}
          </h1>
        </div>

        <div v-if="false" class="w-1/2 flex justify-center">
          <div
            class="rounded-full shadow-lg relative h-[50px] w-[50px] -mt-[25px] z-50 mx-auto top-[66px]"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 768 768"
              xml:space="preserve"
            >
              <radialGradient
                id="ecstaticGradient"
                cx="611.8259"
                cy="623.6183"
                r="695.3079"
                gradientTransform="matrix(0.9996 0 0 1.0314 -3.641656e-03 0.6767)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style="stop-color:#FFFFFF" />
                <stop offset="5.612361e-02" style="stop-color:#F3F6D4" />
                <stop offset="0.1172" style="stop-color:#E8EEAD" />
                <stop offset="0.1846" style="stop-color:#DEE78A" />
                <stop offset="0.2579" style="stop-color:#D6E16D" />
                <stop offset="0.339" style="stop-color:#CFDC55" />
                <stop offset="0.4311" style="stop-color:#CAD943" />
                <stop offset="0.5407" style="stop-color:#C7D637" />
                <stop offset="0.6851" style="stop-color:#C5D42F" />
                <stop offset="1" style="stop-color:#C4D42D" />
              </radialGradient>
              <radialGradient
                id="tranceGradient"
                cx="611.6025"
                cy="647.687"
                r="695.0581"
                gradientTransform="matrix(1 0 0 1.0318 0 -24.389)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style="stop-color:#FFFFFF" />
                <stop offset="4.474443e-02" style="stop-color:#D5E0E0" />
                <stop offset="9.906924e-02" style="stop-color:#A8C0C0" />
                <stop offset="0.1591" style="stop-color:#80A3A2" />
                <stop offset="0.2234" style="stop-color:#5D8A88" />
                <stop offset="0.2932" style="stop-color:#407573" />
                <stop offset="0.3705" style="stop-color:#296362" />
                <stop offset="0.4582" style="stop-color:#165654" />
                <stop offset="0.5626" style="stop-color:#0A4D4B" />
                <stop offset="0.7001" style="stop-color:#024846" />
                <stop offset="1" style="stop-color:#004644" />
              </radialGradient>
              <radialGradient
                id="musicGradient"
                cx="606.3086"
                cy="643.9041"
                r="717.1711"
                gradientTransform="matrix(0.9692 0 0 1 23.9887 0)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style="stop-color:#FFFFFF" />
                <stop offset="3.129005e-03" style="stop-color:#FEFEFD" />
                <stop offset="6.792003e-02" style="stop-color:#EAEAD6" />
                <stop offset="0.1377" style="stop-color:#D8D8B4" />
                <stop offset="0.2152" style="stop-color:#C9C997" />
                <stop offset="0.3009" style="stop-color:#BDBC7F" />
                <stop offset="0.3983" style="stop-color:#B4B36D" />
                <stop offset="0.5142" style="stop-color:#ADAC61" />
                <stop offset="0.6669" style="stop-color:#A9A859" />
                <stop offset="1" style="stop-color:#A8A757" />
              </radialGradient>
              <radialGradient
                id="soundGradient"
                cx="631.3786"
                cy="643.9041"
                r="717.1711"
                gradientTransform="matrix(0.9692 0 0 1 -0.3083 0)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" style="stop-color:#FFFFFF" />
                <stop offset="1.401919e-02" style="stop-color:#FAFBFA" />
                <stop offset="0.1014" style="stop-color:#DDE4DD" />
                <stop offset="0.1994" style="stop-color:#C5D1C6" />
                <stop offset="0.3109" style="stop-color:#B3C2B4" />
                <stop offset="0.4436" style="stop-color:#A7B8A7" />
                <stop offset="0.6185" style="stop-color:#9FB2A0" />
                <stop offset="1" style="stop-color:#9DB09E" />
              </radialGradient>
              <path
                class="st0"
                d="M0,381.6C0,161.5,180.1,0,384,0s384,161.5,384,381.6C768,591.9,592.6,768,384,768S0,596.8,0,381.6z"
              />
              <g v-show="category === 'ecstatic'" id="ecstaticDetail" class="opacity-0 transform transition-all duration-500 ease-in-out">
                <path
                  class="st1"
                  d="M213.5,28.5c0,0,93.7,152.7,226.3,149.3s121.5-30.5,115.3-34.7c-9.4-6.3-56.3-6.9-170.2,84
		s-99.6,114.8-95.1,118c17.4,12.5,54.4,6,147.2-31.2c84.7-34,121.4,9.9-6.9,78.5c-55.1,29.4-148.6,95.1-185.4,177
		S186.4,718,186.4,718s20.1-120.8,71.5-197.9S378.5,399.3,406.5,382c29.2-18.1,70.8-34.7,70.8-43.7c0-19.4-37.5-4.2-111.1,22.9
		c-73.6,27.1-108.7,6.9-103.5-19.3c8.3-41.8,41-79.3,83.3-116.8s141-97.9,180.5-106.2c39.6-8.3,60.4,10.4,53.5,30.5
		s-38.2,54.2-136.8,47.2c-98.6-6.9-128.4-48.6-159-73.6S213.5,28.5,213.5,28.5z"
                />
                <circle class="st1" cx="407.8" cy="83.4" r="39.6" />
              </g>
              <g v-show="category === 'trance'" id="tranceDetail" class="opacity-0 transform transition-all duration-500 ease-in-out">
                <circle class="st1" cx="196.1" cy="404" r="34.2" />
                <path
                  class="st1"
                  d="M246.7,602.2L177.4,561c-1.5-35.7-5.3-35.7,13.6-97.7c-17.9,58.8-35.3,87.9-18.2,122c0,0,26.3-9.1,58.8,19.2
		c35.7,31.1,41,52.3,41,52.3s-16.8-109.4-88.5-263.7L246.7,602.2z"
                />
                <g>
                  <path
                    class="st1"
                    d="M426.8,80c64.7,35.5,75.1,105.2,119.4,157c14.9,17.4,33.4,31.3,53.8,41.7c-4.9,9.2-9.8,18.6-13.8,28.1
			c-1.7,4.1-3.4,8.6-4.2,12.9c-0.4,2.1-0.4,4.1,0.1,5c0.2,0.5,0.6,0.8,1.2,1.2c3.2,1.6,6.7,1.9,10.1,4.5c10.1,8,4.9,26.8,2.5,37.4
			c-1.2,4.7-2.6,9.3-4.1,13.9l-2.5-4.2c10.3,1.7,18,8,16.5,19.3c-0.9,6.6-3.5,11.9-6,17.6c-0.8,1.8-1.6,3.5-2.1,5.1
			c0,0-0.4-2.7-0.4-2.7c39.3,61.1-37.2,71-80.8,76.8c-11,1.4-23.1,2.7-34.1,4.1c-2.8,0.4-7.9,0.8-10.6,2
			c-23.1,10.3-31.8,55.6-36.2,78.6c-5.3,30-7.8,60.5-8.8,91c-0.3-30.6,1.5-61.2,5.9-91.5c2.3-15.2,5.4-30.3,10.3-44.9
			c5.6-15.8,14.5-36.2,33.1-39.5c27.5-4.2,57.6-6.7,84.4-13.7c19.1-5.1,46.8-15.3,40.5-39.8c-1.7-7.4-5.6-14.4-9.9-21
			c0.8-2.5,1.8-5.1,2.8-7.2c2.7-6.7,9-17.9,3.2-24c-2.7-2.8-8.4-3.9-12.6-4.6c0,0,1.1-3.5,1.1-3.5c2.9-9.5,12.5-37.3,3.9-44.3
			c-2.3-1.8-6.4-2.4-9.4-4.1c-9.4-5.6-2.6-19.4,0.3-27c3.9-8.9,8.4-17.4,12.9-25.8c0,0,1.2,4,1.2,4c-30.1-15.7-54.7-40.6-71.8-69.6
			C493.4,163.5,479.3,111.8,426.8,80L426.8,80z"
                  />
                </g>
                <g>
                  <path
                    class="st1"
                    d="M357.4,338.6c-49.5,4.7-235.7,104.1-125.7-10.9c46.8-49,61.9-91.8,120.3-120.2c68.3-37.2,132.7-28.9,38-37
			c-102.8,40.4-228,173.8-190.2,235.6C214.3,409.4,506.6,300.8,357.4,338.6z"
                  />
                  <path
                    class="st1"
                    d="M559.2,227.5c-54.5-70.5-29.5-142.1-145.6-69.7c87.8,24.3,53.8-43.3,128.4,87.1c0,0-136.6,63.4-214.8,83.1
			c130.2-32.7,56.8,28,155.9-35.5C583.7,227.9,585,276.6,559.2,227.5z"
                  />
                </g>
              </g>
              <g v-show="category === 'music'" id="musicDetail" class="opacity-0 transform transition-all duration-500 ease-in-out">
                <g>
                  <path
                    class="st1"
                    d="M401.7,229.8c0,0-9.7,28.1,4.6,142c16.5,130.8,5.9,160.9,5.9,160.9l-29.5-54.1c0,0,7.5-16.6,7.5-153.5
			c0-66-6-176.7-6-176.7s39.8,35.2,72.2,57.4s57.4,29.6,63,76.9s-15.8,86.2-15.8,86.2s15.6-68.6-28.2-107.1
			C442.4,232.8,401.7,229.8,401.7,229.8z"
                  />
                </g>
                <circle class="st1" cx="359.6" cy="519.6" r="55.1" />
              </g>
              <g v-show="category === 'sound'" id="soundDetail" class="opacity-0 transform transition-all duration-500 ease-in-out">
                <path class="st0" d="M0,381.6C0,161.5,180.1,0,384,0s384,161.5,384,381.6C768,591.9,592.6,768,384,768S0,596.8,0,381.6z" />
                <path
                  class="st1"
                  d="M87.9,390.2c0,0,11.9,7.8,27.3,7.8s19.7-37,30.8-37c11.1,0,17.3,91.1,30.2,91.1s35.4-120.9,57.6-120.9
	c13.6,0,36.6,173.4,69.9,173.4c22.8,0,39.4-235.4,68.4-235.4c29,0,29.6,173.1,76.4,173.1s42.5-133.6,59.8-133.6
	c17.3,0,16,101.8,48.7,101.8c32.7,0,24.6-73,38.8-73c14.2,0,13.3,36.6,39.9,45.6c26.6,8.9,44.3,8.9,44.3,8.9s-38.7,2.9-55.3-4.9
	c-16.6-7.8-16.6-19.5-28.3-19.5c-11.8,0-21,95.4-37,95.4S533.6,362,507.1,362c-26.5,0-29.6,144.9-61.6,144.9s-44.4-314.9-73.9-314.9
	c-29.6,0-30.2,383.9-68.4,383.9s-46.8-285.1-70.2-285.1s-35.7,199.4-59.2,199.4s-4.9-113.6-27.1-113.6c-17.3,0-19.7,48.6-32,48.6
	S87.9,390.2,87.9,390.2z"
                />
              </g>
            </svg>
          </div>
        </div>
        <div
          v-if="page?.desc"
          class="text-3xl leading-normal p-7"
          v-html="page?.desc"
        />
      </div>
    </div>
  </div>
</template>
