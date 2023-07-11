// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/style.css"],
  ssr: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "家族ダイアリー",
      htmlAttrs: {
        lang: "ja",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "家族や友達や恋人など、仲がいい人たちで交換日記を書けるシンプルな日記アプリです。もちろん一人でも楽しめます！",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "家族ダイアリー,かぞくだいありー,家族ダイヤリー,交換日記,日記,ファミリー,家族,カップル,遠距離恋愛,ChatGTP",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Kosugi+Maru&display=swap",
          crossorigin: "",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js",
        },
      ],
    },
  },
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  nitro: {
    preset: "firebase",
  },
  runtimeConfig: {
    newt: {
      spaceUid: "",
      cdnApiToken: "",
    },
  },
});
