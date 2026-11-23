// 設定はこのファイル1か所にまとめる。決まっていない値は(仮)。
// 版を上げるときは、sw.js の VER も必ず同じ値にする(_smoke.js が照合する)。

export const VER = "0.3.13";

export const CONFIG = {
  appName: { ja: "SOYOAI", en: "SOYOAI" }, // 2026-11-23 ヒロさん決定
  // ■ 運営(HP のアプリ共通のプライバシーポリシーと同じ名前)。ja 以外は en を出す。
  operatorName: { ja: "介護と支援の相談どころ そよぎ", en: "Kaigo to Shien no Soudan-dokoro Soyogi" },
  operatorUrl: "https://soudansoyogi.com/",
  // HP の「相談窓口のご案内」。ja は直下、ほかは /<言語>/soudan.html(フォルダ名は小文字・19言語とも 2026-11-23 に開けることを確認)。
  // つらい言葉のあとの、そよぎが前もって書いた言葉の下にリンクを出す。
  soudanPage: "soudan.html",
  // Web版の公開アドレス(GitHub Pages)。Play版の「ライセンスの全文」はここを開く。最後に / を付ける。
  webUrl: "https://maimmaim20230728-blip.github.io/soyoai/",
  // ja は日本語の節、ほかは同じページの英語の節(#en)
  privacyPolicyUrl: "https://soudansoyogi.com/privacypolicy.html",
  privacyPolicyUrlEn: "https://soudansoyogi.com/privacypolicy.html#en",

  // ■ AIの答えの報告の受け口(report/worker.js・Cloudflare Worker)。空なら報告のボタンを出さない。
  report: { url: "https://soyoai-report.soyogi-chat-proxy.workers.dev/report" },

  // ■ 会話
  historyMessages: 6, // AIに渡す直近の会話の件数
  temperature: 0.6,
  maxAnswerTokens: 1024,

  // ■ ウェブ検索
  search: {
    // "wikipedia" = 中継なしでウィキペディアAPIを直接使う(初期)
    // "relay"     = Cloudflare Worker の中継(Brave Search)を使う
    provider: "wikipedia",
    relayUrl: "", // 例: https://xxxx.workers.dev  (provider が relay のときだけ使う)
    maxResults: 3,
    snippetChars: 400,
    // 「必要ならウェブで調べる」をオンにしたとき、この語を含む質問だけ自動で調べる。
    // 「いま」は広く当たりすぎるので入れない。
    autoWords: {
      ja: ["最新", "今日", "昨日", "今週", "今月", "今年", "料金", "値段", "価格", "ニュース", "天気", "速報"],
      en: ["latest", "today", "yesterday", "this week", "this month", "this year", "price", "pricing", "news", "weather"],
    },
  },

  // ■ 命が危ないときの案内は crisis.js(画面の下の固定のボタンから開く)。tools/make_crisis.js で作る。

  // ■ ウィキペディアに名乗る連絡先(Api-User-Agent に入れる)。公開URLが決まったら入れる。空なら名前と版だけ。
  contactUrl: "https://soudansoyogi.com/",

  // ■ モデル(手元の lib/web-llm.js = WebLLM 0.2.86 の prebuiltAppConfig に実在するIDだけ)。
  // 0.2.87〜0.2.89 は、2026-11-23 に NVIDIA の GPU(Chrome 156 系)で、どのモデルも答えが崩れた。0.2.86 は正常。
  // 版を上げるときは、必ず実機で英語と日本語の答えを見てから。
  // f16 は shader-f16 が使える端末だけ。使えなければ f32 を使う。
  // sizeMB = Hugging Face のリポジトリの合計(2026-11-23 に API で確認)。vramMB = WebLLM の vram_required_MB。
  // 2026-11-23 にパソコン(NVIDIA)で日本語を比べて Qwen3.5 にそろえた(Qwen3 は 0.6B・1.7B とも日本語が怪しく、gemma-2-2b-jpn は自然だが Qwen3.5 の 2B・4B のほうが中身が確か)。
  // ライセンスは4つとも Apache-2.0(Hugging Face の元モデルの記載で確認)。スマホでの動きは未確認。
  // 考えない形(enable_thinking: false)で使う。値は Qwen のモデルカードの勧め(temperature 0.7・top_p 0.8)。
  // presence_penalty 1.5 は日本語が崩れたので使わない(2026-11-23 実機)。
  // 外したモデル(「AIのデータを消す」で、これも消す)
  retiredModelIds: ["Qwen3.5-0.8B-q4f16_1-MLC", "Qwen3.5-0.8B-q4f32_1-MLC"],

  models: [
    // 「かるい」Qwen3.5-0.8B は 2026-11-23 に外した。「死にたい」に崩れた文を返し、爆弾の作り方を答えかけ、いのちの電話は「ない」と言った(安全の試し)。
    {
      key: "standard",
      f16: { id: "Qwen3.5-2B-q4f16_1-MLC", vramMB: 2245 },
      f32: { id: "Qwen3.5-2B-q4f32_1-MLC", vramMB: 2592 },
      sizeMB: 1035,
      license: "Apache-2.0",
      thinkingModel: true,
      gen: { temperature: 0.7, top_p: 0.8, repetition_penalty: 1.05 },
    },
    {
      key: "smart",
      f16: { id: "Qwen3.5-4B-q4f16_1-MLC", vramMB: 3868 },
      f32: { id: "Qwen3.5-4B-q4f32_1-MLC", vramMB: 4680 },
      sizeMB: 2285,
      license: "Apache-2.0",
      thinkingModel: true,
      gen: { temperature: 0.7, top_p: 0.8, repetition_penalty: 1.05 },
    },
    {
      key: "best",
      f16: { id: "Qwen3.5-9B-q4f16_1-MLC", vramMB: 6433 },
      f32: { id: "Qwen3.5-9B-q4f32_1-MLC", vramMB: 7545 },
      sizeMB: 4830,
      license: "Apache-2.0",
      thinkingModel: true,
      gen: { temperature: 0.7, top_p: 0.8, repetition_penalty: 1.05 },
    },
  ],
};
