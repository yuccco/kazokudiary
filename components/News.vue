<template>
  <h2
    class="flex py-2 px-4 md:px-6 md:py-4 bg-sand rounded-[40px] justify-start items-center gap-3 mb-10"
  >
    <img src="~/assets/img/ashiato.svg" alt="" width="22" /><span
      class="text-2xl font-bold leading-9 text-brown"
      >かいはつ日記</span
    >
  </h2>
  <div class="flex items-start justify-between md:px-10 sm:gap-4">
    <img
      src="~/assets/img/main_cat03.png"
      alt="さいあくさん"
      width="250"
      class="hidden sm:block"
    />
    <div class="w-full sm:w-8/12">
      <div
        v-for="news in data.contents"
        :key="news.id"
        class="flex items-center justify-between pb-5 mb-5 border-b border-dashed border-border sm:gap-4"
      >
        <p class="text-lg font-bold">
          <NuxtLink :to="`/${news.id}`">{{ news.title }}</NuxtLink>
        </p>
        <p class="text-xs text-brownsub">
          {{ new Date(news.publishedAt).toLocaleDateString() }}
        </p>
        <!-- <div class="mt-2 news" v-html="news.body" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/news", {
  baseURL: "https://kazokudiary.microcms.io/api/v1",
  headers: {
    "X-MICROCMS-API-KEY": "PpMfE99br9BMplnaSr4lOABYK7lYxNhVmdbg",
  },
});
</script>
