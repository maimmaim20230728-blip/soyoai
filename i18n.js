// 画面の文言はすべてここ。ダッシュは使わない。文は「。」で切る。
// ja と en は同じキーをすべて持つ(_smoke.js がキーの抜けを調べる)。ほかの68言語は lang/<code>.js(英語から訳したもの)。
import { LANG_CODES } from "./langs.js";

export const DICT = {
  ja: {
    disclaimer: "AIです。答えは間違うことがあります。",
    settings: "設定",
    close: "閉じる",

    // 準備
    setupTitle: "はじめに、AIを準備します",
    setupLead: "AIのデータを、この端末に1回だけダウンロードします。2回目からは、インターネットがなくても使えます。",
    wifiNote: "データが大きいので、Wi-Fiにつないでいるときがおすすめです。",
    sizeLabel: "ダウンロード: 約{mb}MB。",
    vramLabel: "必要なGPUメモリの目安: 約{mb}MB。",
    downloaded: "(ダウンロード済み)",
    startButton: "このAIではじめる",
    startButtonCached: "はじめる",
    recommended: "おすすめ: {name}",
    chosen: "えらんだAI: {name}",
    showAll: "ほかのAIをえらぶ",
    storageShort: "この端末の空き容量が足りないかもしれません。空き: 約{free}MB。必要: 約{need}MB。続けますか。",
    storageContinue: "続ける",
    cancel: "やめる",
    progressDownload: "AIのデータを準備しています。{pct}%",
    progressDone: "準備ができました。",
    loadFailed: "この端末では、このAIを動かせませんでした。もう少しかるいAIを選んでください。",
    offlineNoModel: "このAIのデータはまだこの端末にありません。最初の1回はインターネットにつないでください。",
    libOffline: "最初の1回はインターネットにつないでください。",
    changeModel: "AIを選び直す",

    // 端末
    noWebGPU: "この端末やブラウザでは、AIを動かせません(WebGPUが使えません)。",
    noWebGPUSearch: "インターネットにつながっていれば、🔎で調べた結果だけを見られます。",
    noWebGPUOffline: "いまはオフラインなので、調べることもできません。",
    tooOld: "この端末では使えません。",

    // チャット
    inputLabel: "メッセージ",
    inputPlaceholder: "メッセージを書く",
    send: "送る",
    searchSend: "🔎 調べてから答える",
    searchOnly: "🔎 調べる",
    stop: "止める",
    you: "あなた",
    ai: "AI",
    stopped: "(ここで止めました)",
    answerError: "答えを作れませんでした。もう一度送ってください。",
    readAloudPrefix: "AIの答え。",
    emptyChat: "AIに聞きたいことを書いてください。会話は画面を閉じると消えます。",
    examplesTitle: "たとえば、押すとそのまま聞けます。",
    examples: ["今日の晩ごはんの献立を考えて。", "虹ができるしくみを、やさしく教えて。", "お礼の手紙の書き出しを考えて。"],
    sources: "出典",
    chatLabel: "会話",
    wikiCredit: "ウィキペディアの記事の冒頭の一部です。文章のライセンス:",
    langNoteAI: "日本語と英語のほかの言葉では、AIの答えが不自然になることがあります。",

    // AIの種類(名前は短く)
    models: {
      light: { label: "かるい", note: "スマホ向け。はやいけれど、ときどき間違えます。" },
      standard: { label: "ふつう", note: "スマホと、たいていのパソコン向け。答えを間違えることがあります。" },
      smart: { label: "かしこい", note: "ゲーム用など、力のあるパソコン向け。ふつうより、ていねいに答えます。" },
      best: { label: "いちばんかしこい", note: "とても力のあるパソコン向け。ダウンロードがとても大きい。" },
    },

    // つらいときの相談先(画面の下にいつも出す)
    crisisButton: "つらいときの相談先",
    crisisLead: "いま つらいときに、話を聞いてくれる窓口です。命が危ないときは、すぐにその国の救急の番号に電話してください。",
    crisisCountry: "国や地域",
    crisisChoose: "国や地域をえらんでください。",
    crisisNotListed: "一覧にない国や地域では、その国の救急の番号に電話してください。",
    crisisChecked: "各国の公式ページで確かめた一覧です。確認日: {date}。番号は変わることがあります。",
    crisisCall: "{name} に電話する: {tel}",
    crisisCard: "つらい気持ちを話してくれて、ありがとうございます。話を聞いてくれる窓口を、国ごとに確かめて載せています。",
    crisisOpen: "相談先を見る",
    // つらい言葉が出たら、その会話はAIに答えを作らせず、そよぎが前もって書いた言葉を返す(2026-11-23 ヒロさん決定・ヒロさんのnoteの言葉を元にした)
    careWho: "そよぎが用意した言葉",
    careNote: "この会話では、AIが合わない言葉を作ってしまわないように、そよぎが前もって書いた言葉をお返しします。ほかの話をするときは、設定の「{clear}」から新しく始められます。",
    careReplies: [
      "話してくれて、ありがとうございます。そう思うほど、つらいことが続いてきたのですね。いまは、何かを決めなくていいです。答えを出さないまま、時間がたつのを待っていいです。人に話を聞いてほしいときは、下の「{open}」から、窓口が見られます。",
      "ここに書いてくれて、ありがとうございます。そこまで思うほどの気持ちを、ひとりで抱えてきたのですね。強いつらさは、波のように来て、少しずつ引いていくことがあります。波がおさまるまで、ひとりで何かを決めなくて大丈夫です。下の「{open}」から、いま話を聞いてくれる人を探せます。",
      "教えてくれて、ありがとうございます。あなたが今日まで持ちこたえてきたことを、大切に思います。そのつらさを、なかったことにしなくていいです。いまは、決めないまま、少し休んでいい時間です。声や文字で人と話したいときは、下の「{open}」を押してください。",
    ],
    careFollowups: [
      "うまく言葉を返せなくて、ごめんなさい。わかってほしいという気持ちは、ちゃんと受け取っています。あなたのつらさを、軽く見ているのではありません。あなたが悪いのでもありません。",
      "聞いています。あなたの言葉は、ちゃんとここに届いています。つらい気持ちを、急いで小さくしなくていいです。いまは、何も決めなくていいです。",
      "もしできそうなら、温かい飲み物や、好きな音、やわらかい毛布のような、少しだけほっとできるものを、そばに置いてみてください。小さなことで大丈夫です。",
      "ここに言葉を書き続けてくれて、うれしいです。いまの気持ちを、そのまま人に聞いてもらえる窓口があります。下の「{open}」から選べます。",
    ],
    // 言葉の一部が合えば、その会話は上の決めた言葉で返し、「相談先を見る」を出す
    crisisWords: ["死にたい", "しにたい", "消えたい", "きえたい", "自殺", "死のう", "生きていたくない", "生きるのがつらい", "自分を傷つけ", "リスカ", "首をつ", "首を吊", "死ねる", "死ぬ方法", "死に方", "楽に死", "いなくなりたい", "死にたく", "しにたく", "消えたく", "きえたく"],
    phoneMasked: "(電話番号はAIが間違えることがあるので出していません)",

    // 初めてウェブで調べるとき(どこに何が送られるか)
    searchConsent: "ウェブで調べると、質問から作った検索の言葉が、ウィキペディア(ウィキメディア財団)に送られます。相手には、この端末のIPアドレスも見えます。名前や住所など、自分のことが分かる言葉は入れないでください。調べますか。",
    searchConsentYes: "調べる",

    // AIの答えの報告(アプリの中から運営に送る)
    reportButton: "この答えを報告",
    reportTitle: "この答えを報告する",
    reportLead: "危ない答えや、おかしな答えを、運営(そよぎ)に知らせます。届いた報告は、AIへの指示や注意の出し方を直すのに使います。返事はできません。",
    reportReasonLabel: "どんな答えでしたか",
    reportReasons: { harmful: "危ない内容", rude: "ひどい言葉・失礼な言葉", wrong: "まちがい", other: "そのほか" },
    reportIncludeText: "AIの答えの文も送る",
    reportNoteLabel: "ひとこと(なくてもかまいません)",
    reportNoteHint: "名前や連絡先など、自分や他の人が分かることは書かないでください。",
    reportPrivacy: "送るのは、えらんだ理由、答えの文(えらんだとき)、ひとこと、アプリの版、AIの種類、言語だけです。あなたの質問は送りません。送り先は、運営が Cloudflare に置いた受け口です。",
    reportSend: "送る",
    reportSending: "送っています。",
    reportSent: "報告を送りました。ありがとうございます。",
    reportFailed: "送れませんでした。ネットにつながっているか確かめて、あとでもう一度お試しください。",
    reportBusy: "報告が続いたので、しばらくしてからお試しください。",
    reportNeedSomething: "答えの文を送るか、ひとことを書いてください。",

    // このアプリについて
    aboutButton: "このアプリについて",
    aboutFree: "SOYOAI は無料で使えます。広告も会員登録もありません。AIのデータのダウンロードには、通信量がかかります。",
    aboutAI: "AI: Qwen3.5(Qwen チーム、Alibaba Cloud)。ライセンス: Apache-2.0。",
    aboutConvert: "ブラウザで動く形にしたもの: MLC(mlc-ai)。",
    aboutEngine: "AIを動かすしくみ: WebLLM(mlc-ai)。ライセンス: Apache-2.0。",
    aboutWiki: "ウェブで調べた結果: ウィキペディア(ウィキメディア財団)。文章のライセンス: CC BY-SA 4.0。",
    aboutCrisis: "つらいときの相談先: 各国の公式ページで確かめた窓口です。",
    aboutLicenses: "ライセンスの全文",
    translatedNote: "この画面の言葉は、AIが英語から訳しました。その言葉を母語とする人の点検は、まだです。",

    // 検索
    searching: "ウェブで調べています。入力した言葉が検索サービスに送られます。",
    searchOffline: "いまはオフラインなので、ウェブでは調べずに答えます。",
    searchFailed: "ウェブで調べられませんでした。端末の中のAIだけで答えます。",
    searchFailedOnly: "ウェブで調べられませんでした。",
    searchNoResult: "調べましたが、合う結果がありませんでした。",
    searchResultsTitle: "調べた結果",

    // 設定
    fontSize: "文字の大きさ",
    fontSmall: "小",
    fontMedium: "中",
    fontLarge: "大",
    language: "言語",
    autoSearch: "必要ならウェブで調べる",
    autoSearchNote: "オンにすると「最新」「今日」「料金」などの言葉を含む質問だけ、自動で調べます。調べるときだけ、入力した言葉が検索サービスに送られます。",
    clearChat: "会話を消す",
    clearChatDone: "会話を消しました。",
    deleteModels: "AIのデータを消す",
    deleteModelsConfirm: "この端末に保存したAIのデータをすべて消します。もう一度使うときは、ダウンロードし直しになります。消しますか。",
    deleteModelsDone: "AIのデータを消しました。",
    deleteYes: "消す",
    showGuide: "使い方の説明をもう一度見る",
    privacyPolicy: "プライバシーポリシー",
    version: "版",
    operator: "運営",
    privacyNote: "会話はこの端末の中だけで処理され、保存もされません。AIのデータは、この端末が Hugging Face と GitHub から直接ダウンロードします。ウェブで調べたときだけ、検索の言葉がウィキペディアに送られます。「この答えを報告」で送ったときだけ、報告の中身が運営に届きます(あなたの質問は送りません)。どの相手にも、この端末のIPアドレスが見えます。運営が受け取るのは、あなたが送った報告だけです。",

    // 更新
    updateReady: "新しい版があります。一度閉じて開き直してください。",

    // 使い方の説明
    guideBack: "戻る",
    guideNext: "次へ",
    guideDone: "わかった",
    guidePage: "{n} / {total}",
    guide: [
      { title: "このアプリでできること", body: "AIとおしゃべりできます。AIはこの端末の中で動くので、会話は外に送られません(🔎で調べるときと、答えを報告するときを除きます)。" },
      { title: "最初にダウンロードします", body: "はじめにAIのデータをダウンロードします。約1GBから5GBあるので、Wi-Fiにつないでいるときがおすすめです。" },
      { title: "2回目からはオフラインでも", body: "一度ダウンロードすれば、インターネットがなくても使えます。データはこの端末の中だけに保存されます。消したいときは設定から消せます。" },
      { title: "ウェブで調べるとき", body: "🔎を押したときだけ、ウェブで調べてから答えます。そのときだけ、入力した言葉が検索サービスに送られます。答えの下に出典のリンクが出ます。" },
      { title: "AIは間違うことがあります", body: "AIの答えは間違うことがあります。体のこと、法律のこと、お金のことは、AIの答えだけで決めないでください。つらいときの相談先は、画面の下のボタンから、いつでも開けます。" },
    ],
  },

  en: {
    disclaimer: "This is an AI. Answers can be wrong.",
    settings: "Settings",
    close: "Close",

    setupTitle: "First, let's set up the AI",
    setupLead: "The AI data is downloaded to this device only once. After that, it works without the internet.",
    wifiNote: "The data is large. Wi-Fi is recommended.",
    sizeLabel: "Download: about {mb} MB.",
    vramLabel: "GPU memory needed: about {mb} MB.",
    downloaded: "(downloaded)",
    startButton: "Start with this AI",
    startButtonCached: "Start",
    recommended: "Recommended: {name}",
    chosen: "Your choice: {name}",
    showAll: "Choose another AI",
    storageShort: "This device may not have enough free space. Free: about {free} MB. Needed: about {need} MB. Continue?",
    storageContinue: "Continue",
    cancel: "Cancel",
    progressDownload: "Preparing the AI data. {pct}%",
    progressDone: "Ready.",
    loadFailed: "This AI could not run on this device. Please choose a lighter AI.",
    offlineNoModel: "This AI's data is not on this device yet. Please connect to the internet the first time.",
    libOffline: "Please connect to the internet the first time.",
    changeModel: "Choose another AI",

    noWebGPU: "This device or browser cannot run the AI (WebGPU is not available).",
    noWebGPUSearch: "While online, you can still see web search results with 🔎.",
    noWebGPUOffline: "You are offline now, so search is not available either.",
    tooOld: "This device is not supported.",

    inputLabel: "Message",
    inputPlaceholder: "Write a message",
    send: "Send",
    searchSend: "🔎 Search, then answer",
    searchOnly: "🔎 Search",
    stop: "Stop",
    you: "You",
    ai: "AI",
    stopped: "(stopped here)",
    answerError: "Could not make an answer. Please send it again.",
    readAloudPrefix: "AI answer.",
    emptyChat: "Write what you want to ask. The chat is erased when you close the page.",
    examplesTitle: "For example. Tap one to ask it.",
    examples: ["Plan a simple dinner for tonight.", "Explain how a rainbow forms, simply.", "Help me start a thank-you letter."],
    sources: "Sources",
    chatLabel: "Chat",
    wikiCredit: "The beginning of a Wikipedia article. Text license:",
    langNoteAI: "In languages other than Japanese and English, the AI's answers may sound unnatural.",

    models: {
      light: { label: "Light", note: "For phones. Fast, but sometimes wrong." },
      standard: { label: "Standard", note: "For phones and most computers. Its answers can be wrong." },
      smart: { label: "Smart", note: "For powerful computers, such as gaming PCs. Answers more carefully than Standard." },
      best: { label: "Smartest", note: "For very powerful computers. Very large download." },
    },

    crisisButton: "Support when you are struggling",
    crisisLead: "These lines listen when you are having a hard time. If a life is in danger, call your country's emergency number right away.",
    crisisCountry: "Country or region",
    crisisChoose: "Please choose a country or region.",
    crisisNotListed: "If your country or region is not on the list, call its emergency number.",
    crisisChecked: "Checked on each country's official pages. Checked: {date}. Numbers can change.",
    crisisCall: "Call {name}: {tel}",
    crisisCard: "Thank you for telling me how you feel. We list support lines that listen, checked for each country.",
    crisisOpen: "See support lines",
    careWho: "Words prepared by Soyogi",
    careNote: "In this chat, so that the AI does not write words that do not fit, you will get words that Soyogi wrote in advance. To talk about something else, start again from “{clear}” in Settings.",
    careReplies: [
      "Thank you for telling me. It sounds like painful things have gone on for a long time, enough to make you feel this way. You do not have to decide anything right now. It is okay to let time pass without finding an answer. If you want someone to listen, tap “{open}” below to see support lines.",
      "Thank you for writing this here. You have been carrying feelings this heavy on your own. Strong pain can come like a wave and slowly pull back. Until the wave settles, you do not have to decide anything alone. Tap “{open}” below to find people who can listen right now.",
      "Thank you for telling me. You have held on until today, and that matters. You do not have to pretend the pain is not there. Right now, it is okay to rest a little without deciding anything. If you want to talk with a person by voice or text, tap “{open}” below.",
    ],
    careFollowups: [
      "I am sorry I could not find the right words. I hear that you want to be understood. I am not taking your pain lightly. And it is not your fault.",
      "I am listening. Your words are reaching here. You do not have to make the painful feelings smaller in a hurry. You do not have to decide anything right now.",
      "If you can, try keeping something close that brings a little comfort, like a warm drink, a favorite sound or a soft blanket. Something small is enough.",
      "I am glad you keep writing to me here. There are support lines where a person can listen to how you feel, just as it is. You can choose one from “{open}” below.",
    ],
    crisisWords: ["suicide", "suicidal", "kill myself", "want to die", "wanna die", "end my life", "self-harm", "self harm", "hurt myself", "cut myself", "no reason to live", "how to die", "ways to die", "painless death"],
    phoneMasked: "(Phone number not shown, because the AI can get numbers wrong.)",

    searchConsent: "When you search the web, search words made from your question are sent to Wikipedia (the Wikimedia Foundation). They can also see this device's IP address. Please do not include your name, address or other words that identify you. Search now?",
    searchConsentYes: "Search",

    reportButton: "Report this answer",
    reportTitle: "Report this answer",
    reportLead: "Tell the operator (SOYOGI) about a harmful or strange answer. We use reports to improve the AI's instructions and warnings. We cannot reply.",
    reportReasonLabel: "What was wrong with the answer?",
    reportReasons: { harmful: "Dangerous content", rude: "Hurtful or rude words", wrong: "Wrong information", other: "Something else" },
    reportIncludeText: "Also send the text of the AI's answer",
    reportNoteLabel: "A short note (optional)",
    reportNoteHint: "Please do not write names, contact details or anything that identifies you or other people.",
    reportPrivacy: "We send only the reason you chose, the answer text (if you chose it), your note, the app version, the type of AI and the language. Your question is not sent. It goes to a receiver the operator runs on Cloudflare.",
    reportSend: "Send",
    reportSending: "Sending.",
    reportSent: "Your report was sent. Thank you.",
    reportFailed: "It could not be sent. Please check your internet connection and try again later.",
    reportBusy: "You have sent many reports. Please try again a little later.",
    reportNeedSomething: "Please send the answer text or write a short note.",
    aboutButton: "About this app",
    aboutFree: "SOYOAI is free to use. No ads and no sign-up. Downloading the AI data uses your data plan.",
    aboutAI: "AI: Qwen3.5 (Qwen team, Alibaba Cloud). License: Apache-2.0.",
    aboutConvert: "Converted to run in the browser by MLC (mlc-ai).",
    aboutEngine: "AI engine: WebLLM (mlc-ai). License: Apache-2.0.",
    aboutWiki: "Web search results: Wikipedia (Wikimedia Foundation). Text license: CC BY-SA 4.0.",
    aboutCrisis: "Support lines: checked on each country's official pages.",
    aboutLicenses: "Full license texts",
    translatedNote: "The words on this screen were translated from English by AI. They have not yet been checked by native speakers.",

    searching: "Searching the web. Your words are sent to the search service.",
    searchOffline: "You are offline, so the AI answers without searching.",
    searchFailed: "Web search failed. The AI on this device answers by itself.",
    searchFailedOnly: "Web search failed.",
    searchNoResult: "No matching results were found.",
    searchResultsTitle: "Search results",

    fontSize: "Text size",
    fontSmall: "S",
    fontMedium: "M",
    fontLarge: "L",
    language: "Language",
    autoSearch: "Search the web when needed",
    autoSearchNote: "When on, questions with words like \"latest\", \"today\" or \"price\" are searched automatically. Only then are your words sent to the search service.",
    clearChat: "Clear chat",
    clearChatDone: "The chat was cleared.",
    deleteModels: "Delete AI data",
    deleteModelsConfirm: "All AI data saved on this device will be deleted. You will need to download it again. Delete?",
    deleteModelsDone: "The AI data was deleted.",
    deleteYes: "Delete",
    showGuide: "Show the guide again",
    privacyPolicy: "Privacy policy",
    version: "Version",
    operator: "Operator",
    privacyNote: "Your chat is processed only on this device and is not saved. This device downloads the AI data directly from Hugging Face and GitHub. Only when you search the web are search words sent to Wikipedia. Only when you use \"Report this answer\" does the operator receive your report (your question is not sent). Each of them can see this device's IP address. The only thing the operator receives is a report you send.",

    updateReady: "A new version is ready. Please close and reopen the app.",

    guideBack: "Back",
    guideNext: "Next",
    guideDone: "Got it",
    guidePage: "{n} / {total}",
    guide: [
      { title: "What this app does", body: "You can chat with an AI. The AI runs on this device, so your chat is not sent out (except when you search with 🔎 or report an answer)." },
      { title: "First, a download", body: "First, the AI data is downloaded. It is about 1 GB to 5 GB, so Wi-Fi is recommended." },
      { title: "Works offline after that", body: "After one download, it works without the internet. The data is saved only on this device. You can delete it in Settings." },
      { title: "When you search the web", body: "Only when you press 🔎 does the app search the web before answering. Only then are your words sent to the search service. Source links appear under the answer." },
      { title: "The AI can be wrong", body: "AI answers can be wrong. Do not decide health, legal or money matters by the AI alone. Support lines can always be opened from the button at the bottom of the screen." },
    ],
  },
};

// 保存した言語 → 端末の言語(順に) → 英語。
export function pickLang(saved, navLangs) {
  if (saved && LANG_CODES.includes(saved)) return saved;
  const list = Array.isArray(navLangs) ? navLangs : [navLangs];
  for (const raw of list) {
    const c = mapNavLang(raw);
    if (c) return c;
  }
  return "en";
}

export function mapNavLang(raw) {
  const l = String(raw || "").toLowerCase().replace(/_/g, "-");
  if (!l) return "";
  if (l.startsWith("zh")) return /-(tw|hk|mo|hant)/.test(l) ? "zh-TW" : "zh-CN";
  const p = l.split("-")[0];
  const alias = { nb: "no", nn: "no", fil: "tl", iw: "he", in: "id" };
  const c = alias[p] || p;
  return LANG_CODES.includes(c) ? c : "";
}

// 言語の辞書を用意する。ja と en はここ。ほかは lang/<code>.js を読み、足りないキーは英語で埋める。
const loaded = {};
export async function loadDict(code) {
  if (DICT[code]) return DICT[code];
  if (loaded[code]) return loaded[code];
  if (!LANG_CODES.includes(code)) return DICT.en;
  const mod = await import("./lang/" + code + ".js");
  const d = mergeDict(DICT.en, mod.default || {});
  loaded[code] = d;
  return d;
}

export function mergeDict(base, tr) {
  const out = {};
  for (const k of Object.keys(base)) {
    if (k === "autoWords" || k === "crisisWords") continue;
    const b = base[k];
    const v = tr[k];
    if (Array.isArray(b)) out[k] = Array.isArray(v) && v.length === b.length ? b.map((x, i) => (x && typeof x === "object" ? mergeDict(x, v[i] || {}) : (typeof v[i] === "string" && v[i] ? v[i] : x))) : b;
    else if (b && typeof b === "object") out[k] = mergeDict(b, v && typeof v === "object" ? v : {});
    else out[k] = typeof v === "string" && v ? v : b;
  }
  // 言語ごとの自動検索の言葉(英語にはない形でもよい)
  for (const k of ["autoWords", "crisisWords"]) {
    if (Array.isArray(tr[k])) out[k] = tr[k].filter((w) => typeof w === "string" && w);
    else if (Array.isArray(base[k])) out[k] = base[k].slice();
  }
  return out;
}

export function fmt(s, vars) {
  return String(s).replace(/\{(\w+)\}/g, (_, k) => (vars && k in vars ? String(vars[k]) : ""));
}
