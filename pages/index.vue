<template>
  <div class="w-full mx-auto lg:px-12 xl:w-[1280px]">
    <h1
      class="flex items-center justify-center mt-16 mb-0 text-4xl text-center md:mt-24"
    >
      <img src="~/assets/img/logo.svg" alt="家族ダイアリー" width="630" />
    </h1>
    <div
      class="relative flex items-end justify-center gap-3 mt-0 mb-16 lg:items-center"
    >
      <div class="hidden w-1/5 md:jstify-center md:flex">
        <img src="~/assets/img/main_cat01.png" alt="ごきげんさん" width="250" />
      </div>
      <div class="flex flex-col items-center justify-center md:w-3/5">
        <p class="mt-5 leading-7 text-center text-brownsub md:leading-9">
          家族や友達や恋人など、仲がいい人たちで交換日記を書こう！<br />
          日々のできごとを写真付きで投稿してシェアできる<br />
          シンプルな日記アプリです。<br />
          みんなで今日あったできごとを共有しあって日常のできごとを語り合いましょう！
        </p>
        <div class="flex items-center justify-center gap-3 mt-4">
          <NuxtLink
            class="px-8 py-3 rounded-full text-cream bg-brown hover:bg-brownsub hover:scale-105 hover:drop-shadow-xl hover:-rotate-2"
            to="https://apps.apple.com/jp/app/%E5%AE%B6%E6%97%8F%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AA%E3%83%BC-%E4%BA%A4%E6%8F%9B%E6%97%A5%E8%A8%98%E3%82%A2%E3%83%97%E3%83%AA/id1528947553"
            target="_blank"
            >iPhone版</NuxtLink
          >
          <NuxtLink
            class="px-8 py-3 ml-0 rounded-full p text-cream bg-brown hover:bg-brownsub hover:scale-105 hover:drop-shadow-xl md:ml-4 md:mt-0 hover:-rotate-2"
            to="https://play.google.com/store/apps/details?id=com.sekky.kibunya&hl=en_US"
            target="_blank"
            >Android版</NuxtLink
          >
        </div>
      </div>
      <div class="hidden w-1/5 md:jstify-center md:flex">
        <img
          src="~/assets/img/main_cat02.png"
          alt="さいこうさん!"
          width="230"
        />
      </div>
    </div>
    <Feature />
    <News />
  </div>
</template>
