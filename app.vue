<template>
  <NuxtLayout>
    <div ref="pagetop" class="flex-col items-center px-6 flxed">
      <div
        class="absolute hidden opacity-50 main-bg_01 md:block"
      >
        <img src="~/assets/img/bg_can.png" alt="ねこ缶" width="125" />
      </div>
      <div class="absolute hidden opacity-50 main-bg_02 md:block animate-[wiggle_1s_ease-in-out_infinite]">
        <img src="~/assets/img/bg_fish.png" alt="さかな" width="147" />
      </div>
      <div class="absolute hidden opacity-50 main-bg_03 xl:block animate-[wiggle_1s_ease-in-out_infinite]">
        <img src="~/assets/img/bg_jarashi.png" alt="じゃらし" width="152" />
      </div>
      <div class="absolute hidden opacity-50 main-bg_04 xl:block">
        <img src="~/assets/img/bg_koban.png" alt="小判" width="140" />
      </div>
      <NuxtPage />
      <Footer />
    </div>
  </NuxtLayout>
  <button
    @click="scrollTo"
    class="fixed bottom-0 right-0 z-10 mr-5 duration-150 translate-y-3 hover:-translate-y-0"
  >
    <img src="~/assets/img/icon_top.png" alt="ページのトップに戻る" width="100" />
  </button>
</template>

<script setup>
  const pagetop = ref(null)

  function scrollTo() {
    pagetop.value.scrollIntoView({ behavior: 'smooth' })
  }
</script>
