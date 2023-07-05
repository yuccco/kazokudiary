<template>
  <div class="w-full mx-auto lg:px-12 xl:w-[1280px]">
    <nuxt-link to="/"
      ><h1
        class="flex items-center justify-center mt-16 mb-0 text-4xl text-center md:mt-24"
      >
        <img src="~/assets/img/logo.svg" alt="家族ダイアリー" width="630" /></h1
    ></nuxt-link>
    <h2
      class="flex py-2 px-4 md:px-6 md:py-4 bg-sand rounded-[40px] justify-start items-center gap-3 mb-10 mt-10"
    >
      <img src="~/assets/img/ashiato.svg" alt="" width="22" /><span
        class="text-2xl font-bold leading-9 text-brown"
        >かいはつ日記</span
      >
    </h2>
    <div class="news">
      <h3 class="mb-2 text-xl">{{ article.title }}</h3>
      <p class="text-xs text-brownsub">
        <time :datetime="article.publishedAt" v-text="article.publishedAt" />
      </p>
      <hr />

      <div class="post" v-html="article.body" />
    </div>
    <div class="flex justify-center mt-5">
      <NuxtLink
        class="px-8 py-3 ml-0 rounded-full p text-cream bg-brown hover:bg-brownsub hover:drop-shadow-xl md:ml-4 md:mt-0"
        to="/"
        >前のページに戻る</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: article } = await useFetch(`/news/${slug}`, {
  baseURL: "https://kazokudiary.microcms.io/api/v1",
  headers: {
    "X-MICROCMS-API-KEY": "PpMfE99br9BMplnaSr4lOABYK7lYxNhVmdbg",
  },
});
</script>
