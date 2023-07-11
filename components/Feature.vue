<template>
  <div id="feather" class="mb-24">
    <h2
      class="flex py-2 px-4 md:px-6 md:py-4 bg-sand rounded-[40px] justify-start items-center gap-3"
    >
      <img src="~/assets/img/ashiato.svg" alt="" width="22" /><span
        class="text-xl font-bold leading-9 md:text-2xl text-brown"
        >アプリの特徴</span
      >
    </h2>
    <div
      class="flex flex-col my-5 md:my-10 md:items-center md:px-10 md:flex-row md:gap-8"
    >
      <div
        class="border-2 flex justify-center mb-5 md:mb-0 bg-cream border-border p-5 rounded-[20px] md:w-2/6"
      >
        <img
          src="~/assets/img/feather_img01.png"
          alt="かんたんでシンプル！"
          width="300"
        />
      </div>
      <div class="md:w-4/6">
        <h3 class="mb-5 text-2xl font-bold">1.かんたんでシンプル！</h3>
        <p class="text-brownsub">
          お子様やスマホの操作に慣れていないお年寄りでも書きやすい、シンプルな操作性。気軽に招待して、交換日記をはじめましょう！<br />
          日記は画像追加、テンション選択、みんなへの通知on/offが選択できます。<br />
          シンプルながら、コメントができたり、カレンダーでの日記一覧など必要な機能はしっかり揃っています。
        </p>
      </div>
    </div>

    <div
      class="bg-white rounded-[20px] p-5 flex flex-col justify-center mx-0 md:mx-10 md:p-10"
    >
      <h4 class="mb-5 text-xl font-bold text-center text-brownsub">
        気分ねこ達の紹介
      </h4>
      <div class="flex flex-wrap justify-between lg:flex-nowrap">
        <div
          class="flex flex-col items-center w-1/2 px-2 mb-4 lg:w-auto lg:mb-0"
        >
          <div class="h-[120px] flex items-center">
            <img
              src="~/assets/img/icon_awsome.png"
              alt="さいこうさん"
              width="140"
              class="hover:animate-wiggle"
            />
          </div>
          <p
            class="my-3 border-2 rounded-[20px] border-border px-4 py-1 text-brownsub"
          >
            さいこう<span class="text-xs">さん</span>
          </p>
          <p class="text-sm text-center text-brownsub">
            最高な気分でぶち上がっているねこ。最高のハードルを下げるのがQOL爆上げの秘訣らしい。
          </p>
        </div>
        <!-- nekotati -->
        <div
          class="flex flex-col items-center w-1/2 px-2 mb-4 lg:w-auto lg:mb-0"
        >
          <div class="h-[120px] flex items-center">
            <img
              src="~/assets/img/icon_good.png"
              alt="ごきげんさん"
              width="134"
              class="hover:animate-wiggle"
            />
          </div>
          <p
            class="my-3 border-2 rounded-[20px] border-border px-4 py-1 text-brownsub"
          >
            ごきげん<span class="text-xs">さん</span>
          </p>
          <p class="text-sm text-center text-brownsub">
            いつもいい気分なねこ。何でもないことが幸せだったと思えるようになってから１日１ハッピーを探すように。
          </p>
        </div>
        <!-- nekotati -->
        <div
          class="flex flex-col items-center w-1/2 px-2 mb-4 lg:w-auto lg:mb-0"
        >
          <div class="h-[120px] flex items-center">
            <img
              src="~/assets/img/icon_normal.png"
              alt="まあまあさん"
              width="134"
              class="hover:animate-wiggle"
            />
          </div>
          <p
            class="my-3 border-2 rounded-[20px] border-border px-4 py-1 text-brownsub"
          >
            まあまあ<span class="text-xs">さん</span>
          </p>
          <p class="text-sm text-center text-brownsub">
            普通な気分のねこ。普通をキープするのが簡単そうで難しい。不動の心を持っている。
          </p>
        </div>
        <!-- nekotati -->
        <div
          class="flex flex-col items-center w-1/2 px-2 mb-4 lg:w-auto lg:mb-0"
        >
          <div class="h-[120px] flex items-center">
            <img src="~/assets/img/icon_bad.png" alt="う〜んさん" width="136" class="hover:animate-wiggle" />
          </div>
          <p
            class="my-3 border-2 rounded-[20px] border-border px-4 py-1 text-brownsub"
          >
            う〜ん<span class="text-xs">さん</span>
          </p>
          <p class="text-sm text-center text-brownsub">
            なんだかな〜な感じのねこ。ちりつもの小さなモヤモヤを抱えている。ねこの世界もいろいろあります。
          </p>
        </div>
        <!-- nekotati -->
        <div
          class="flex flex-col items-center w-1/2 px-2 mb-4 lg:w-auto lg:mb-0"
        >
          <div class="h-[120px] flex items-center">
            <img
              src="~/assets/img/icon_worst.png"
              alt="さいあくさん"
              width="160"
              class="hover:animate-wiggle"
            />
          </div>
          <p
            class="my-3 border-2 rounded-[20px] border-border px-4 py-1 text-brownsub"
          >
            さいあく<span class="text-xs">さん</span>
          </p>
          <p class="text-sm text-center text-brownsub">
            テンションがガタ落ちしているねこ。元気がなくしょんぼりしており、心配事が絶えず毛づくろいが止まらない。
          </p>
        </div>
        <!-- nekotati -->
      </div>
    </div>
    <hr class="mt-12 md:mx-10" />
    <div
      class="flex flex-col my-10 md:items-center md:px-10 md:flex-row md:gap-8"
    >
      <div class="">
        <h3 class="mb-5 text-2xl font-bold">
          2.クラウド保存だから、容量を気にせず書ける！
        </h3>
        <p class="text-brownsub">
          日記も画像も、容量の制限なくクラウド上に保存されます。<br />
          アプリのデータでスマホをパンパンにすることなく、続けることができます。<br />
          また、データがクラウドにあるので、スマホが故障してもデータがなくなることはありません。<br />
          安心してお使いください。
        </p>
      </div>
    </div>
    <hr class="mt-12 md:mx-10" />
    <div
      class="flex flex-col my-10 md:items-center md:px-10 md:flex-row md:gap-8"
    >
      <div
        class="flex justify-center p-5 md:mb-0 md:w-5/12"
      >
        <img
          src="~/assets/img/feather_img02.png"
          alt="AIがコメント返信してくれる！"
          width="354"
        />
      </div>
      <div class="md:w-7/12">
        <h3 class="mb-5 text-2xl font-bold">3.AIがコメント返信してくれる！</h3>
        <p class="text-brownsub">
          サブスクリプションに登録すると、にゃボット（ChatGTP）が日記へのコメントをしてくれるようになります！<br />
          みんなで使っていても、ひとりでも楽しく日記が続けられます。
          <div class="flex items-center justify-center gap-3 mt-5">
          <img
          src="~/assets/img/icon_nyabot.png"
          alt="にゃボット"
          width="120"
          class="animate-wiggle"
        />
        <p class="px-4 py-2 rounded-[20px] bg-brownsub text-cream text-sm nyabot">一緒におしゃべりしようにゃ〜！</p>
      </div>
        </p>
      </div>
    </div>
  </div>
</template>
