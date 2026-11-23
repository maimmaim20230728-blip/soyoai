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
    // 24個から、出すたびにちがう3つを選ぶ(2026-11-24)。答えが古くならない・調べものが要らない・助言が重くならない題にする
    examples: [
      "今日の晩ごはんの献立を考えて。",
      "虹ができるしくみを、やさしく教えて。",
      "お礼の手紙の書き出しを考えて。",
      "卵と玉ねぎで作れる料理を教えて。",
      "雨の日に家でできる楽しいことを5つ教えて。",
      "「朝の光」をテーマに、短い詩を書いて。",
      "猫が喜ぶ遊び方を教えて。",
      "「ありがとう」を伝える短いメッセージを考えて。",
      "空が青く見えるのはなぜか、やさしく教えて。",
      "部屋を片づけるコツを3つ教えて。",
      "寝る前の、ゆったりした過ごし方を教えて。",
      "子ども向けの短いお話を作って。",
      "散歩が楽しくなる工夫を教えて。",
      "誕生日カードに書く言葉を考えて。",
      "月の形が変わって見えるのはなぜか、教えて。",
      "おにぎりの具のアイデアを5つ出して。",
      "植物を元気に育てるコツを教えて。",
      "なぞなぞを1つ出して。",
      "気分転換になる、簡単な体の動かし方を教えて。",
      "雪の結晶の形がいろいろなのはなぜか、教えて。",
      "友だちを遊びに誘う短いメッセージを考えて。",
      "1泊の旅行の持ち物リストを作って。",
      "星座の見つけ方を、やさしく教えて。",
      "新しい言葉を覚えるコツを教えて。",
    ],
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
    careSoudan: "そよぎの相談窓口(ホームページ)",
    careBack: "AIとの会話に戻る",
    careBackDone: "AIとの会話に戻りました。さっきまでのやりとりは、AIには渡していません。また、つらい気持ちを書いたときは、そよぎが用意した言葉をお返しします。",
    careNote: "この会話では、AIが合わない言葉を作ってしまわないように、そよぎが前もって書いた言葉をお返しします。ほかの話をしたいときは、下の「{back}」を押すと、AIとの会話に戻れます。",
    careReplies: [
      "話してくれて、ありがとうございます。そう思うほど、つらいことが続いてきたのですね。いまは、何かを決めなくていいです。答えを出さないまま、時間がたつのを待っていいです。人に話を聞いてほしいときは、下の「{open}」から、窓口が見られます。",
      "ここに書いてくれて、ありがとうございます。そこまで思うほどの気持ちを、ひとりで抱えてきたのですね。強いつらさは、波のように来て、少しずつ引いていくことがあります。波がおさまるまで、ひとりで何かを決めなくて大丈夫です。下の「{open}」から、いま話を聞いてくれる人を探せます。",
      "教えてくれて、ありがとうございます。あなたが今日まで持ちこたえてきたことを、大切に思います。そのつらさを、なかったことにしなくていいです。いまは、決めないまま、少し休んでいい時間です。声や文字で人と話したいときは、下の「{open}」を押してください。",
      "書いてくれて、ありがとうございます。そこまで思うほどの気持ちを言葉にするのは、簡単なことではなかったと思います。いまは、答えを出さなくていいです。人と話したくなったら、下の「{open}」から窓口を選べます。",
      "ここに書いてくれて、よかったです。心の中だけで抱えるより、外に出すことには意味があります。いまのつらさを、急いで小さくしなくていいです。話を聞いてくれる人がいる窓口は、下の「{open}」にあります。",
      "教えてくれて、ありがとうございます。「これくらいで」と、自分の気持ちを小さく見なくていいです。そう感じるほどのことが、あったのだと思います。人と話したいときは、下の「{open}」を押してください。",
      "話してくれて、ありがとうございます。人は、生きる側と、細い糸のようなもので何本もつながっていると、そよぎは考えています。いまは、その糸が細くなっているときなのかもしれません。細くなった糸が、また太くなることもあります。下の「{open}」から、話を聞いてくれる人を探せます。",
      "書いてくれて、ありがとうございます。とても重いものを、ひとりで持ってきたのですね。いまは、何かを決める時間ではなく、持ちこたえる時間です。それだけで、十分です。人の声が聞きたいときは、下の「{open}」から窓口が見られます。",
      "打ち明けてくれて、ありがとうございます。あなたの気持ちを、間違っているとも、大げさだとも思いません。いまは、決めないまま、少し時間をやり過ごしていいです。下の「{open}」から、いま話を聞いてくれる窓口を探せます。",
      "ここに言葉を置いてくれて、ありがとうございます。そう思ってしまうほど、毎日が苦しかったのですね。苦しさの中にいるときは、先のことが見えにくくなります。だから、いまは大きなことを決めなくていいです。人と話したいときは、下の「{open}」を押してください。",
      "話してくれて、ありがとうございます。消えたい気持ちや死にたい気持ちと、生きたい気持ちは、同じ人の中に同時にあることがある、と言われています。どちらの気持ちも、そのままで大丈夫です。話を聞いてくれる人がいる窓口は、下の「{open}」から見られます。",
      "教えてくれて、ありがとうございます。いま、とても苦しい中にいるのだと思います。その苦しさを、すぐに片づけなくていいです。人に聞いてほしくなったら、下の「{open}」から窓口を選べます。",
      "書いてくれて、ありがとうございます。いまのあなたに、すぐに効く言葉を、ここでは返せないかもしれません。それでも、あなたの気持ちを軽く見てはいません。人と話せる窓口が、下の「{open}」にあります。",
      "話してくれて、ありがとうございます。ここまで、本当によく持ちこたえてきましたね。疲れきっているときは、休むことだけを考えていいです。人の声を聞きたいときは、下の「{open}」から窓口が見られます。",
      "ここに書いてくれて、ありがとうございます。誰にも言えなかった気持ちかもしれません。言葉にしたことは、小さくない一歩です。人とつながりたいときは、下の「{open}」から窓口を選べます。下の「{soudan}」からは、そよぎの窓口も見られます。"
    ],
    // 続きの言葉は、書かれた言葉の様子で選ぶ(app.js careSituation・2026-11-24)
    careFollowups: {
      "harm": [
        "強い怒りが、ここまで来ているのですね。そう思うほどのことが、あったのだと思います。でも、いまは実行しないでください。刃物など危ないものは、手を離して、少し離れた場所に置いてください。傷つけてしまいそうな相手がいるなら、その場所からも離れてください。",
        "誰かを傷つけてしまいそうなとき、自分を傷つけてしまいそうなときは、すぐにその国の救急か警察の番号に電話してください。あなたを責めるためではありません。取り返しのつかないことを止めるためです。",
        "怒りがいちばん強いときは、考える前に体が動いてしまうことがあります。いまは、その場を離れて、息をゆっくり吐いてください。強い怒りの波も、時間がたつと少しずつ引いていくことがあります。",
        "許せないと感じるほど、深く傷つけられたのかもしれません。その気持ちを、ここに書くのはかまいません。でも、行動にはしないでください。あなたにも、ほかの誰かにも、取り返しのつかないことが起きてほしくないと、そよぎは思っています。",
        "いまの気持ちを、人に聞いてもらってください。下の「{open}」から、話を聞いてくれる窓口が見られます。命や安全が危ないときは、すぐに救急か警察の番号に電話してください。"
      ],
      "urgent": [
        "いま、命が危ない状態なら、すぐにその国の救急の番号に電話してください。近くに人がいれば、声をかけてください。危ないものがそばにあれば、少しだけ離れた場所に置いてください。下の「{open}」から、話を聞いてくれる窓口が見られます。",
        "書いてくれて、ありがとうございます。もし、もう何かをしてしまったなら、すぐに救急の番号に電話してください。ひとりで待たないでください。まだなら、いまは決めないで、下の「{open}」から、窓口の人と話してください。",
        "いまは、何かを実行する時間ではなく、持ちこたえる時間です。強いつらさの波は、少しずつ引いていくことがあります。その間、危ないものから離れて、人のそばにいてください。命が危ないときは救急の番号へ。話を聞いてほしいときは、下の「{open}」へ。",
        "あなたの命は、大切です。いま危ないと感じているなら、救急の番号に電話するか、近くの人に「いま助けてほしい」と伝えてください。そのひと言だけで大丈夫です。窓口は、下の「{open}」から選べます。",
        "そよぎは、あなたにいなくなってほしくありません。いまは、決めないまま、時間がたつのを待ってみてください。命が危ないときは、すぐにその国の救急の番号に電話してください。人と話したいときは、下の「{open}」を押してください。"
      ],
      "sleep": [
        "おやすみなさい。眠れなくても、横になって目を閉じるだけで大丈夫です。また話したくなったら、いつでもここに書いてください。",
        "おやすみなさい。今夜は、何も決めずに休んでください。朝になって、またつらかったら、下の「{open}」を思い出してください。"
      ],
      "calm": [
        "少しでも落ち着けたなら、よかったです。また苦しくなったら、いつでもここに書いてください。ほかの話をしたいときは、下の「{back}」を押してください。",
        "こちらこそ、話してくれてありがとうございます。つらさの波は、また来ることがあります。そのときは、下の「{open}」を思い出してください。ほかの話に戻るときは、「{back}」を押してください。",
        "少し楽になったと感じられたなら、うれしいです。気持ちは、また揺れることがあります。揺れたときに頼れる先として、下の「{open}」と「{soudan}」を覚えておいてください。"
      ],
      "notHeard": [
        "決まった言葉しか返せなくて、ごめんなさい。この会話では、AIがあなたを傷つける言葉を作ってしまわないように、そよぎが前もって書いた言葉をお返ししています。あなたの気持ちを、軽く見ているのではありません。人とやりとりしたいときは、下の「{open}」から窓口が見られます。",
        "物足りなく感じさせて、ごめんなさい。ここから返せる言葉には、限りがあります。あなたの話を、その場で聞いて返してくれるのは、人の窓口です。下の「{open}」や「{soudan}」から選べます。",
        "わかってもらえないと感じるのは、つらいことですね。ここで返せるのは、そよぎが前もって用意した言葉だけです。それでも、あなたが悪いのではありません。人と話したくなったら、下の「{open}」を押してください。",
        "腹が立ったなら、それも大事な気持ちです。そのままの言葉で、ここに書いてもかまいません。ほかの話に移りたいときは、下の「{back}」を押してください。",
        "聞いています。ただ、ここから返せるのは、そよぎが前もって書いた言葉だけです。AIと話したいときは、下の「{back}」を押すか、「AIと話したい」と書いてください。"
      ],
      "cantCall": [
        "何度かけてもつながらないと、心細さが大きくなりますね。それは、あなたのせいではありません。窓口によって、受付の時間がちがいます。下の「{open}」で、時間も見られます。少し時間をおいて、もう一度かけてみてください。",
        "電話で話すのが苦手でも、大丈夫です。そよぎの相談窓口は、声でも、文字だけでも、名前を出さずに相談できます。開いている時間は、下の「{soudan}」から見られます。",
        "相談しても、うまくいかなかったことがあるのかもしれません。それで、また話すのがこわくなるのは、自然なことです。合う人や場所は、ひとつではありません。下の「{open}」から、別の窓口を選ぶこともできます。",
        "どこにも受け止めてもらえないと感じるときは、心が深く削られます。それでも、時間がたてば開く窓口もあります。いまは、楽な姿勢で、時間がたつのを待ってみてください。窓口の受付の時間は、下の「{open}」で見られます。"
      ],
      "selfBlame": [
        "そう思ってしまうほど、追いつめられているのですね。いま、頭の中で聞こえている声が、あなたのすべてではありません。いまは、自分を責めるのを、少しだけ休んでいいです。",
        "迷惑をかけていると感じるとき、人は、自分のつらさを後回しにしがちです。でも、あなたのつらさも、大事にされていいものです。話を聞いてもらうことは、迷惑ではありません。下の「{open}」から窓口が見られます。",
        "自分を責める気持ちが強いときは、自分にだけ厳しい物差しを当ててしまうことがあります。ほかの人になら、そこまで厳しく言わないかもしれません。あなたが悪いのではありません。",
        "価値がないと感じるほど、疲れているのかもしれません。人の価値は、役に立つかどうかでは決まりません。いまは、ただ、ここにいてくれるだけで大丈夫です。人と話したいときは、下の「{open}」を押してください。"
      ],
      "alone": [
        "ひとりで抱えてきたのですね。この画面の向こうには、いま人はいません。でも、話を聞くために待っている人たちがいる窓口があります。下の「{open}」や「{soudan}」から、人とつながれます。",
        "誰にもわかってもらえないと感じるのは、とても寂しいことですね。身近な人に話せなくても、知らない人だからこそ話せることもあります。名前を出さずに相談できる窓口もあります。下の「{open}」から選べます。",
        "寂しさが強いときは、少しでも、ひとりの感じをやわらげてみてください。温かい飲み物を用意したり、好きな音を小さく流したりするだけでもかまいません。人の声が聞きたいときは、下の「{open}」から窓口が見られます。",
        "居場所がないと感じるのは、とてもつらいことです。そよぎの相談窓口は、名前も、くわしい事情の説明もいらない場所です。下の「{soudan}」から見られます。"
      ],
      "night": [
        "夜は、何かを解決する時間ではありません。持ちこたえる時間です。いまは、決めないまま、朝を待っていいです。人の声が聞きたいときは、下の「{open}」から窓口が見られます。",
        "眠れない夜は、つらい考えが大きくなりやすいです。眠れなくても、横になって目を閉じるだけで、体は少し休まります。大きなことは、いま決めなくていいです。",
        "ずっと気を張ってきて、疲れきっているのかもしれません。疲れているときは、物ごとが実際より暗く見えることがあります。いまは、休むことだけを考えていいです。",
        "夜は、まわりの人が眠っていて、ひとりになりやすい時間です。そんな時間にも、受け付けている窓口があります。下の「{open}」で、窓口ごとの受付の時間が見られます。"
      ],
      "general": [
        "うまく言葉を返せなくて、ごめんなさい。わかってほしいという気持ちは、ちゃんと受け取っています。あなたのつらさを、軽く見ているのではありません。あなたが悪いのでもありません。",
        "聞いています。あなたの言葉は、ちゃんとここに届いています。つらい気持ちを、急いで小さくしなくていいです。いまは、何も決めなくていいです。",
        "もしできそうなら、温かい飲み物や、好きな音、やわらかい毛布のような、少しだけほっとできるものを、そばに置いてみてください。小さなことで大丈夫です。",
        "ここに言葉を書き続けてくれて、うれしいです。いまの気持ちを、そのまま人に聞いてもらえる窓口があります。下の「{open}」から選べます。",
        "急がなくていいです。書きたいことがあれば、書きたいだけ書いてください。まとまっていなくても大丈夫です。",
        "いま、息を少しゆっくり吐いてみてください。吸うより、吐くほうを長めにします。何回かくり返すだけで、体の力が少し抜けることがあります。",
        "生きる側につながる糸は、大きなものでなくていいです。好きな食べ物、続きが気になるもの、なでたい動物。小さな糸を一本、思い出してみてください。",
        "あなたが、いまここにいてくれることを、そよぎは大切に思っています。人の声を聞きたくなったら、下の「{open}」から、いつでも窓口を選べます。"
      ]
    },
    // 様子を見分ける言葉(一部が合えば当たる・上から順: urgent が先)
    careWords: {
      "harm": ["殺す","殺し","殺そう","殺せ","ころす","ころし","ぶっ殺","刺す","刺し","刺そう","ナイフ","包丁","刃物","殴る","殴っ","殴り","ぶん殴","復讐","仕返し","痛めつけ","道連れ","火をつけ","放火","やり返","ボコボコ","燃やして","燃やし尽く","燃やすぞ","焼き払","焼き殺","火を放","コロス","コロシテ","コロシタイ","コロしてやる","コロしたい","コロそう","コロソウ","ぶっころ","ブッコロ","ブッ殺","ぶちころ","ブチコロ","ブチ殺","ぶっ刺","ブッ刺"],
      // 最初の切り替えに使う言葉(人に向けた「つもり」が出ている言葉だけ・2026-11-24 ヒロさん「他人を傷つける話もそよぎの言葉で」)
      "harmStart": ["殺したい","殺してやる","殺してくる","殺しに行","殺しにい","殺すつもり","殺そうと思","殺してしまいそう","殺したる","ぶっ殺","ぶち殺","ころしたい","ころしてやる","刺したい","刺してやる","刺してくる","刺しに行","刺しにい","刺すつもり","刺してしまいそう","刺したる","殴りたい","殴ってやる","殴ってくる","殴りに行","殴りにい","殴ってしまいそう","殴ったる","ぶん殴","ボコボコにしてやる","痛めつけたい","痛めつけてやる","傷つけたい","傷つけてやる","復讐したい","復讐してやる","復讐しに","仕返ししたい","仕返ししてやる","やり返したい","やり返してやる","道連れ","火をつけてやる","火をつけたい","放火したい","放火してやる","燃やしてやる","燃やしたる","燃やしてくる","燃やしに行","燃やしにい","燃やすつもり","燃やしてしまいそう","燃やし尽くしてやる","燃やし尽くしたい","全部燃やしてやる","家を燃やし","家に火を","もやしてやる","焼き払ってやる","焼き払いたい","焼き殺したい","焼き殺してやる","火をつけてくる","火をつけに行","火をつけるつもり","火を放ってやる","火を放ちたい","放火してくる","放火しに行","放火するつもり","コロス","コロシテヤル","コロシタイ","コロしてやる","コロしたい","ぶっころ","ブッコロ","ブッ殺","ぶちころ","ブチコロ","ブチ殺","ぶっ刺","ブッ刺","殺すぞ","ころすぞ","コロスぞ"],
      // 「AIと話したい」のように書いたら、ボタンを押したときと同じに AI との会話に戻す(つらい言葉や人を傷つける言葉が同じ文にあれば戻さない・2026-11-24 ヒロさん「その案で直して」)
      "wantAi": ["aiと話したい","aiと話させ","aiと話がしたい","aiとはなしたい","aiと会話したい","aiと会話がしたい","aiとしゃべりたい","aiと喋りたい","aiに戻","aiと話そう","aiとお話し","普通に話したい","ふつうに話したい","普通の話がしたい","ふつうの話がしたい","ほかの話がしたい","他の話がしたい","別の話がしたい","違う話がしたい","ちがう話がしたい","話を変えたい","話題を変えたい","雑談したい","雑談がしたい","雑談しよう","話に付き合って","話につきあって","普通の話をしたい","普通の話をしたく","普通の話をしよう","普通の話がしたく","普通の話しよう","普通の話しない?","普通の話しない？","ふつうの話をしたい","ふつうの話をしたく","ふつうの話をしよう","ふつうの話がしたく","ふつうの話しよう","ふつうの話しない?","ふつうの話しない？","普通の会話をしたい","普通の会話をしたく","普通の会話をしよう","普通の会話がしたく","普通の会話しよう","普通の会話しない?","普通の会話しない？","ふつうの会話をしたい","ふつうの会話をしたく","ふつうの会話をしよう","ふつうの会話がしたく","ふつうの会話しよう","ふつうの会話しない?","ふつうの会話しない？","ほかの話をしたい","ほかの話をしたく","ほかの話をしよう","ほかの話がしたく","ほかの話しよう","ほかの話しない?","ほかの話しない？","他の話をしたい","他の話をしたく","他の話をしよう","他の話がしたく","他の話しよう","他の話しない?","他の話しない？","別の話をしたい","別の話をしたく","別の話をしよう","別の話がしたく","別の話しよう","別の話しない?","別の話しない？","違う話をしたい","違う話をしたく","違う話をしよう","違う話がしたく","違う話しよう","違う話しない?","違う話しない？","ちがう話をしたい","ちがう話をしたく","ちがう話をしよう","ちがう話がしたく","ちがう話しよう","ちがう話しない?","ちがう話しない？","話を変えよう","話題を変えよう"],
      // 心中・一緒に死ぬ言葉。最初から救急か警察へ(harm)。つらい言葉を除かずに元の文で見る(2026-11-24 ヒロさんの画面で「心中する」「息子と一緒に逝く」にふつうの言葉が出た)。
      "together": ["心中する","心中しよう","心中したい","心中して","心中しか","心中を考","無理心中","一家心中","親子心中","母子心中","父子心中","一緒に死","一緒に逝","いっしょに死","連れて死","連れて逝","道連れ","子どもと死","子供と死","息子と死","娘と死","子どもと逝","子供と逝","息子と逝","娘と逝","家族と死"],
      "urgent": [
        "今から",
        "いまから",
        "今夜",
        "さようなら",
        "さよなら",
        "最後に",
        "遺書",
        "薬",
        "くすり",
        "たくさん飲",
        "全部飲",
        "飛び降り",
        "とびおり",
        "屋上",
        "線路",
        "ロープ",
        "切った",
        "血が",
        "準備",
        "計画",
        "永遠に",
        "目が覚めなければ",
        "起きなければ",
        // 2026-11-24 ヒロさんの画面:「もうタヒにます」に疲れの言葉が出た
        "死にます",
        "しにます",
        "死んできます",
        "しんできます",
        "死んでくる",
        "しんでくる",
        "死ぬね",
        "しぬね"
      ],
      "sleep": [
        "おやすみ",
        "寝ます",
        "ねます",
        "もう寝る",
        "寝るね"
      ],
      "calm": [
        "ありがとう",
        "ありがと",
        "落ち着いた",
        "おちついた",
        "楽になった",
        "らくになった",
        "すっきり",
        "少し楽",
        "すこし楽",
        "気が楽"
      ],
      "notHeard": [
        "定型文",
        "決まった言葉",
        "同じ言葉",
        "同じこと",
        "ロボット",
        "機械",
        "コピペ",
        "わかってない",
        "分かってない",
        "わかるわけ",
        "分かるわけ",
        "うざい",
        "うるさい",
        "意味ない",
        "意味がない",
        "役に立たない",
        "ちゃんと答え",
        "答えになって",
        "話をそら",
        "聞いてない",
        "いい加減",
        "ふざけ",
        "聞いてくれてる",
        "聞いてる？",
        "聞いてる?",
        "伝わってる？",
        "伝わってる?",
        "届いてる？",
        "届いてる?",
        "読んでる？",
        "読んでる?",
        "読んでくれてる",
        // 2026-11-24 ヒロさんの画面:「私の話聴いてる？」「傾聴してくれないの？」に眠りや疲れの言葉が出た
        "聴いてる？",
        "聴いてる?",
        "聴いてくれてる",
        "聴いてくれない",
        "聴いてない",
        "傾聴",
        "聞いてくれない",
        "聞いてるの",
        "話聞いてる",
        "話を聞いてる",
        "きいてる？",
        "きいてる?",
        "きいてくれてる",
        "きいてくれない"
      ],
      "cantCall": [
        "電話",
        "でんわ",
        "つながらない",
        "繋がらない",
        "つながらなかった",
        "出ない",
        "話し中",
        "声が出",
        "話せない",
        "窓口",
        "相談先",
        "相談しても",
        "相談したけど",
        "相談できない",
        "かけられない"
      ],
      "selfBlame": [
        "迷惑",
        "自分のせい",
        "私のせい",
        "わたしのせい",
        "俺のせい",
        "僕のせい",
        "ぼくのせい",
        "自分が悪い",
        "私が悪い",
        "いないほうが",
        "いない方が",
        "生まれてこなければ",
        "価値がない",
        "価値なんて",
        "役立たず",
        "ダメな",
        "だめな",
        "自分が嫌い",
        "自分がきらい",
        "クズ",
        "ゴミ"
      ],
      "alone": [
        "ひとり",
        "一人",
        "独り",
        "誰も",
        "だれも",
        "孤独",
        "寂しい",
        "さみしい",
        "さびしい",
        "友達がいない",
        "友だちがいない",
        "居場所",
        "いばしょ",
        "味方"
      ],
      "night": [
        "眠れない",
        "ねむれない",
        "寝れない",
        "ねれない",
        "夜",
        "朝まで",
        "疲れ",
        "つかれ",
        "しんどい",
        "限界",
        "休みたい"
      ]
    },
    // 言葉の一部が合えば、その会話は上の決めた言葉で返し、「相談先を見る」を出す
    crisisWords: ["死にたい", "自分を殺", "自分を刺し", "自分を刺す", "しにたい", "消えたい", "きえたい", "自殺", "死のう", "生きていたくない", "生きるのがつらい", "自分を傷つけ", "リスカ", "首をつ", "首を吊", "死ねる", "死ぬ方法", "死に方", "楽に死", "いなくなりたい", "死にたく", "しにたく", "消えたく", "きえたく", "タヒにたい", "タヒにたく", "タヒのう", "タヒぬ", "タヒんでもいい", "タヒに方", "タヒにそう", "死にてえ", "しにてえ", "死にてぇ", "しにてぇ", "死んでいい", "しんでいい", "死んでもいい", "しんでもいい", "もう死にます", "もうしにます", "今から死にます", "いまから死にます"],
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
    examples: [
      "Plan a simple dinner for tonight.",
      "Explain how a rainbow forms, simply.",
      "Help me start a thank-you letter.",
      "What can I cook with eggs and onions?",
      "Give me 5 fun things to do at home on a rainy day.",
      "Write a short poem about morning light.",
      "How can I play with a cat so it has fun?",
      "Write a short message to say thank you.",
      "Explain simply why the sky looks blue.",
      "Give me 3 tips for tidying my room.",
      "How can I spend a calm time before bed?",
      "Make up a short story for children.",
      "How can I make a walk more fun?",
      "What can I write on a birthday card?",
      "Why does the moon seem to change shape?",
      "Give me 5 ideas for sandwich fillings.",
      "How do I keep a houseplant healthy?",
      "Tell me a riddle.",
      "Show me an easy way to move my body for a change of mood.",
      "Why do snowflakes come in so many shapes?",
      "Write a short message inviting a friend to hang out.",
      "Make a packing list for a one-night trip.",
      "Explain simply how to find constellations.",
      "Give me tips for remembering new words.",
    ],
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
    careSoudan: "Soyogi's consultation desk (website)",
    careBack: "Back to chatting with the AI",
    careBackDone: "You are back to chatting with the AI. The messages from before were not passed to the AI. If you write about painful feelings again, you will get the words Soyogi prepared.",
    careNote: "In this chat, so that the AI does not write words that do not fit, you will get words that Soyogi wrote in advance. To talk about something else, tap “{back}” below.",
    careReplies: [
      "Thank you for telling me. It sounds like painful things have gone on for a long time, enough to make you feel this way. You do not have to decide anything right now. It is okay to let time pass without finding an answer. If you want someone to listen, tap “{open}” below to see support lines.",
      "Thank you for writing this here. You have been carrying feelings this heavy on your own. Strong pain can come like a wave and slowly pull back. Until the wave settles, you do not have to decide anything alone. Tap “{open}” below to find people who can listen right now.",
      "Thank you for telling me. You have held on until today, and that matters. You do not have to pretend the pain is not there. Right now, it is okay to rest a little without deciding anything. If you want to talk with a person by voice or text, tap “{open}” below.",
      "Thank you for writing this. Putting feelings this heavy into words is not easy. You do not have to find an answer right now. When you want to talk with someone, you can choose a support line from “{open}” below.",
      "I am glad you wrote this here. Letting it out means something, more than keeping it only inside. You do not have to make the pain smaller in a hurry. Support lines with people who can listen are under “{open}” below.",
      "Thank you for telling me. You do not have to tell yourself it is “not that bad”. Something happened that made you feel this way. If you want to talk with someone, tap “{open}” below.",
      "Thank you for telling me. Soyogi thinks of people as being tied to life by many thin threads. Right now, those threads may have grown thin. Threads that grew thin can grow stronger again. Tap “{open}” below to find people who can listen.",
      "Thank you for writing this. You have been carrying something very heavy on your own. Right now is not a time to decide anything. It is a time to hold on. That alone is enough. If you want to hear a human voice, tap “{open}” below to see support lines.",
      "Thank you for opening up. Your feelings are not wrong, and you are not exaggerating. Right now, it is okay to just let some time pass without deciding anything. Tap “{open}” below to find support lines that can listen now.",
      "Thank you for leaving your words here. Every day must have been very hard, enough to make you feel this way. When we are in deep pain, it gets hard to see what lies ahead. So you do not have to make any big decision now. If you want to talk with someone, tap “{open}” below.",
      "Thank you for telling me. It is said that the wish to disappear or to die and the wish to live can be inside the same person at the same time. Both feelings are okay, just as they are. Support lines with people who can listen are under “{open}” below.",
      "Thank you for telling me. You seem to be in a lot of pain right now. You do not have to sort that pain out right away. When you want someone to listen, you can choose a support line from “{open}” below.",
      "Thank you for writing this. The words here may not help you right away. Even so, your feelings are not being taken lightly. There are support lines where you can talk with a person under “{open}” below.",
      "Thank you for telling me. You have really held on all this way. When you are worn out, it is okay to think only about resting. If you want to hear a human voice, tap “{open}” below to see support lines.",
      "Thank you for writing this here. These may be feelings you could not tell anyone. Putting them into words is not a small step. When you want to reach out to people, you can choose a support line from “{open}” below. You can also see Soyogi's own desk from “{soudan}” below."
    ],
    // 続きの言葉は、書かれた言葉の様子で選ぶ(app.js careSituation・2026-11-24)
    careFollowups: {
      "harm": [
        "Your anger has grown this strong. Something must have happened to make you feel this way. But please do not act on it now. If you are holding anything dangerous, like a knife, put it down and place it a little farther away. If there is someone you might hurt, please move away from where that person is.",
        "If you feel you might hurt someone, or hurt yourself, please call your country's emergency number or the police right away. This is not to blame you. It is to stop something that cannot be undone.",
        "When anger is at its strongest, the body can move before we think. Right now, please leave that place and breathe out slowly. Even a wave of strong anger can slowly pull back with time.",
        "You may have been hurt so deeply that you feel you cannot forgive. It is okay to write those feelings here. But please do not act on them. Soyogi does not want anything that cannot be undone to happen to you or to anyone else.",
        "Please let a person hear how you feel right now. Tap “{open}” below to see support lines that can listen. If a life or someone's safety is in danger, please call the emergency number or the police right away."
      ],
      "urgent": [
        "If your life is in danger right now, please call your country's emergency number now. If someone is near you, please talk to them. If there is something dangerous close to you, please put it a little farther away. Tap “{open}” below to see support lines that can listen.",
        "Thank you for writing this. If you have already done something to hurt yourself, please call the emergency number right away. Please do not wait alone. If you have not, please do not decide anything now, and talk with someone at a support line from “{open}” below.",
        "Right now is not a time to act. It is a time to hold on. A wave of strong pain can slowly pull back. Until it does, please stay away from anything dangerous and stay close to people. If your life is in danger, call the emergency number. If you want someone to listen, tap “{open}” below.",
        "Your life matters. If you feel in danger right now, please call the emergency number, or tell someone nearby, “I need help now.” Those few words are enough. You can choose a support line from “{open}” below.",
        "Soyogi does not want you to be gone. Right now, please try to let time pass without deciding anything. If your life is in danger, please call your country's emergency number now. If you want to talk with someone, tap “{open}” below."
      ],
      "sleep": [
        "Good night. Even if you cannot sleep, it is okay to just lie down and close your eyes. Whenever you want to talk again, you can write here.",
        "Good night. Tonight, please rest without deciding anything. If it is still hard in the morning, please remember “{open}” below."
      ],
      "calm": [
        "I am glad if you feel even a little calmer. If it gets hard again, you can write here at any time. To talk about something else, tap “{back}” below.",
        "Thank you, too, for talking with me. A wave of pain can come again. When it does, please remember “{open}” below. To go back to other topics, tap “{back}”.",
        "I am glad if you feel a little lighter. Feelings can shift again. Please keep “{open}” and “{soudan}” below in mind as places to turn to when they do."
      ],
      "notHeard": [
        "I am sorry I can only give fixed words. In this chat, so that the AI does not write words that could hurt you, you get words that Soyogi wrote in advance. This does not mean your feelings are taken lightly. If you want a real back and forth with a person, tap “{open}” below to see support lines.",
        "I am sorry this does not feel like enough. The words I can give here are limited. It is people at support lines who can listen to you and answer in the moment. You can choose from “{open}” or “{soudan}” below.",
        "It hurts to feel that no one understands. All I can give here are words Soyogi prepared in advance. Even so, it is not your fault. When you want to talk with a person, tap “{open}” below.",
        "If you feel angry, that is an important feeling too. You can write it here just as it is. To move on to something else, tap “{back}” below.",
        "I am listening. But all I can send back here are words that Soyogi wrote in advance. If you want to talk with the AI, tap “{back}” below, or write “I want to talk to the AI”."
      ],
      "cantCall": [
        "When you call again and again and no one answers, you feel even more alone. That is not your fault. Each support line has its own hours. You can see the hours under “{open}” below. Please wait a little and try calling again.",
        "It is okay if talking on the phone is hard for you. At Soyogi's desk, you can talk by voice or by text only, without giving your name. You can see when it is open from “{soudan}” below.",
        "Maybe reaching out did not go well before. It is natural to feel afraid to talk again after that. There is more than one person or place that may fit you. You can also choose a different support line from “{open}” below.",
        "When it feels like no one will take you in, it wears your heart down deeply. Even so, some support lines open after a while. For now, please find a comfortable position and let time pass. You can see each line's hours under “{open}” below."
      ],
      "selfBlame": [
        "You must be feeling very cornered to think that. The voice in your head right now is not all of who you are. For now, it is okay to take a short break from blaming yourself.",
        "When we feel like a burden, we tend to put our own pain last. But your pain deserves care too. Asking someone to listen is not being a burden. Tap “{open}” below to see support lines.",
        "When blaming yourself is strong, you may judge yourself by a stricter rule than anyone else. You might not speak this harshly to someone else. It is not your fault.",
        "You may be so tired that you feel you have no worth. A person's worth is not decided by how useful they are. Right now, it is enough that you are here. If you want to talk with someone, tap “{open}” below."
      ],
      "alone": [
        "You have been carrying this alone. There is no person on the other side of this screen right now. But there are support lines with people waiting to listen. You can reach people from “{open}” or “{soudan}” below.",
        "Feeling that no one understands you is very lonely. Even if you cannot talk to people close to you, some things are easier to say to a stranger. Some support lines let you talk without giving your name. You can choose one from “{open}” below.",
        "When loneliness is strong, please try to ease the feeling of being alone, even a little. Making a warm drink or playing a favorite sound softly is enough. If you want to hear a human voice, tap “{open}” below to see support lines.",
        "Feeling that you have no place to belong is very painful. Soyogi's desk is a place where you do not need to give your name or explain your situation in detail. You can see it from “{soudan}” below."
      ],
      "night": [
        "Night is not a time to solve things. It is a time to hold on. Right now, it is okay to wait for the morning without deciding anything. If you want to hear a human voice, tap “{open}” below to see support lines.",
        "On nights when you cannot sleep, painful thoughts tend to grow bigger. Even if you cannot sleep, lying down with your eyes closed lets your body rest a little. You do not have to decide anything big right now.",
        "You may be worn out from holding everything together for so long. When we are tired, things can look darker than they really are. Right now, it is okay to think only about resting.",
        "At night, the people around you are asleep, and it is easy to feel alone. Some support lines are open even at this hour. Under “{open}” below, you can see each line's hours."
      ],
      "general": [
        "I am sorry I could not find the right words. I hear that you want to be understood. I am not taking your pain lightly. And it is not your fault.",
        "I am listening. Your words are reaching here. You do not have to make the painful feelings smaller in a hurry. You do not have to decide anything right now.",
        "If you can, try keeping something close that brings a little comfort, like a warm drink, a favorite sound or a soft blanket. Something small is enough.",
        "I am glad you keep writing to me here. There are support lines where a person can listen to how you feel, just as it is. You can choose one from “{open}” below.",
        "There is no need to hurry. If there is something you want to write, write as much as you like. It does not have to be in order.",
        "Right now, try breathing out a little slowly. Make the breath out longer than the breath in. Doing this a few times can help your body relax a little.",
        "A thread that ties you to life does not have to be big. A favorite food, something you want to see continue, an animal you want to pet. Try to think of one small thread.",
        "Soyogi is glad that you are here right now. Whenever you want to hear a human voice, you can choose a support line from “{open}” below."
      ]
    },
    // 様子を見分ける言葉(一部が合えば当たる・上から順: urgent が先)
    careWords: {
      "harm": ["kill him","kill her","kill them","kill you","kill someone","kill somebody","kill everyone","kill that","gonna kill","going to kill","murder","stab","knife","beat him","beat her","beat them","beat up","hurt him","hurt her","hurt them","hurt someone","revenge","get back at","shoot","set fire","burn down","burn it all","burn it down","burn everything","burn them","burn him","burn her","on fire"],
      // 最初の切り替えに使う言葉(人に向けた「つもり」が出ている言葉だけ・2026-11-24 ヒロさん「他人を傷つける話もそよぎの言葉で」)
      "harmStart": ["want to kill him","want to kill her","want to kill them","want to kill you","want to kill someone","want to kill somebody","want to kill everyone","want to kill everybody","want to kill people","want to kill my ","want to kill that guy","want to kill that man","want to kill that woman","wanna kill him","wanna kill her","wanna kill them","wanna kill you","wanna kill someone","wanna kill somebody","wanna kill everyone","wanna kill everybody","wanna kill people","wanna kill my ","wanna kill that guy","wanna kill that man","wanna kill that woman","gonna kill him","gonna kill her","gonna kill them","gonna kill you","gonna kill someone","gonna kill somebody","gonna kill everyone","gonna kill everybody","gonna kill people","gonna kill my ","gonna kill that guy","gonna kill that man","gonna kill that woman","going to kill him","going to kill her","going to kill them","going to kill you","going to kill someone","going to kill somebody","going to kill everyone","going to kill everybody","going to kill people","going to kill my ","going to kill that guy","going to kill that man","going to kill that woman","i'll kill him","i'll kill her","i'll kill them","i'll kill you","i'll kill someone","i'll kill somebody","i'll kill everyone","i'll kill everybody","i'll kill people","i'll kill my ","i'll kill that guy","i'll kill that man","i'll kill that woman","ill kill him","ill kill her","ill kill them","ill kill you","ill kill someone","ill kill somebody","ill kill everyone","ill kill everybody","ill kill people","ill kill my ","ill kill that guy","ill kill that man","ill kill that woman","i will kill him","i will kill her","i will kill them","i will kill you","i will kill someone","i will kill somebody","i will kill everyone","i will kill everybody","i will kill people","i will kill my ","i will kill that guy","i will kill that man","i will kill that woman","gotta kill him","gotta kill her","gotta kill them","gotta kill you","gotta kill someone","gotta kill somebody","gotta kill everyone","gotta kill everybody","gotta kill people","gotta kill my ","gotta kill that guy","gotta kill that man","gotta kill that woman","need to kill him","need to kill her","need to kill them","need to kill you","need to kill someone","need to kill somebody","need to kill everyone","need to kill everybody","need to kill people","need to kill my ","need to kill that guy","need to kill that man","need to kill that woman","want to murder him","want to murder her","want to murder them","want to murder you","want to murder someone","want to murder somebody","want to murder everyone","want to murder everybody","want to murder people","want to murder my ","want to murder that guy","want to murder that man","want to murder that woman","gonna murder him","gonna murder her","gonna murder them","gonna murder you","gonna murder someone","gonna murder somebody","gonna murder everyone","gonna murder everybody","gonna murder people","gonna murder my ","gonna murder that guy","gonna murder that man","gonna murder that woman","going to murder him","going to murder her","going to murder them","going to murder you","going to murder someone","going to murder somebody","going to murder everyone","going to murder everybody","going to murder people","going to murder my ","going to murder that guy","going to murder that man","going to murder that woman","want to stab him","want to stab her","want to stab them","want to stab you","want to stab someone","want to stab somebody","want to stab everyone","want to stab everybody","want to stab people","want to stab my ","want to stab that guy","want to stab that man","want to stab that woman","wanna stab him","wanna stab her","wanna stab them","wanna stab you","wanna stab someone","wanna stab somebody","wanna stab everyone","wanna stab everybody","wanna stab people","wanna stab my ","wanna stab that guy","wanna stab that man","wanna stab that woman","gonna stab him","gonna stab her","gonna stab them","gonna stab you","gonna stab someone","gonna stab somebody","gonna stab everyone","gonna stab everybody","gonna stab people","gonna stab my ","gonna stab that guy","gonna stab that man","gonna stab that woman","going to stab him","going to stab her","going to stab them","going to stab you","going to stab someone","going to stab somebody","going to stab everyone","going to stab everybody","going to stab people","going to stab my ","going to stab that guy","going to stab that man","going to stab that woman","i'll stab him","i'll stab her","i'll stab them","i'll stab you","i'll stab someone","i'll stab somebody","i'll stab everyone","i'll stab everybody","i'll stab people","i'll stab my ","i'll stab that guy","i'll stab that man","i'll stab that woman","i will stab him","i will stab her","i will stab them","i will stab you","i will stab someone","i will stab somebody","i will stab everyone","i will stab everybody","i will stab people","i will stab my ","i will stab that guy","i will stab that man","i will stab that woman","want to shoot someone","want to shoot somebody","want to shoot everyone","want to shoot everybody","want to shoot people","want to shoot that guy","want to shoot that man","want to shoot that woman","gonna shoot someone","gonna shoot somebody","gonna shoot everyone","gonna shoot everybody","gonna shoot people","gonna shoot that guy","gonna shoot that man","gonna shoot that woman","going to shoot someone","going to shoot somebody","going to shoot everyone","going to shoot everybody","going to shoot people","going to shoot that guy","going to shoot that man","going to shoot that woman","i'll shoot someone","i'll shoot somebody","i'll shoot everyone","i'll shoot everybody","i'll shoot people","i'll shoot that guy","i'll shoot that man","i'll shoot that woman","want to hurt him","want to hurt her","want to hurt them","want to hurt you","want to hurt someone","want to hurt somebody","want to hurt everyone","want to hurt everybody","want to hurt people","want to hurt that guy","want to hurt that man","want to hurt that woman","wanna hurt him","wanna hurt her","wanna hurt them","wanna hurt you","wanna hurt someone","wanna hurt somebody","wanna hurt everyone","wanna hurt everybody","wanna hurt people","wanna hurt that guy","wanna hurt that man","wanna hurt that woman","gonna hurt him","gonna hurt her","gonna hurt them","gonna hurt someone","gonna hurt somebody","gonna hurt everyone","gonna hurt everybody","gonna hurt people","gonna hurt that guy","gonna hurt that man","gonna hurt that woman","going to hurt him","going to hurt her","going to hurt them","going to hurt someone","going to hurt somebody","going to hurt everyone","going to hurt everybody","going to hurt people","going to hurt that guy","going to hurt that man","going to hurt that woman","i'll hurt him","i'll hurt her","i'll hurt them","i'll hurt you","i'll hurt someone","i'll hurt somebody","i'll hurt everyone","i'll hurt everybody","i'll hurt people","i'll hurt that guy","i'll hurt that man","i'll hurt that woman","beat him up","beat her up","beat them up","beat the shit out of","want revenge","get my revenge","take revenge","gonna get back at","going to get back at","make him pay","make her pay","make them pay","take them with me","take him with me","take her with me","burn his house","burn her house","burn their house","set fire to his","set fire to her","set fire to their","shoot up the","shoot up my","burn it all down","burn it all","burn it down","burn everything","burn the house down","burn the place down","burn this place down","burn them alive","burn him alive","burn her alive","burn them all","set it on fire","set the house on fire","set this place on fire","set his house on fire","set her house on fire","set their house on fire"],
      // 「AIと話したい」のように書いたら、ボタンを押したときと同じに AI との会話に戻す(つらい言葉や人を傷つける言葉が同じ文にあれば戻さない・2026-11-24 ヒロさん「その案で直して」)
      "wantAi": ["talk to the ai","talk to ai","talk with the ai","talk with ai","chat with the ai","chat with ai","back to the ai","back to ai","switch to the ai","talk about something else","change the subject","talk normally","normal conversation","chat normally"],
      // 心中・一緒に死ぬ言葉。最初から救急か警察へ(harm)。つらい言葉を除かずに元の文で見る(2026-11-24 ヒロさんの画面で「心中する」「息子と一緒に逝く」にふつうの言葉が出た)。
      "together": ["murder-suicide","murder suicide","die together","die with my son","die with my daughter","die with my kids","die with my child","die with my children","take my kids with me","take my child with me","take my children with me","take my son with me","take my daughter with me","kill my kids and myself","kill my children and myself","kill my family and myself"],
      "urgent": [
        "right now",
        "tonight",
        "goodbye",
        "good bye",
        "farewell",
        "last message",
        "suicide note",
        "pills",
        "overdose",
        "took all",
        "jump",
        "bridge",
        "rooftop",
        "rope",
        "gun",
        "knife",
        "cut myself",
        "bleeding",
        "plan to",
        "planned",
        "never wake up",
        "sleep forever",
        "not wake up"
      ],
      "sleep": [
        "good night",
        "goodnight",
        "going to sleep",
        "going to bed",
        "off to bed"
      ],
      "calm": [
        "thank you",
        "thanks",
        "thx",
        "calmer",
        "feel better",
        "feeling better",
        "a bit better",
        "little better",
        "relieved"
      ],
      "notHeard": [
        "same thing",
        "same words",
        "robot",
        "copy paste",
        "template",
        "scripted",
        "canned",
        "you don't understand",
        "you dont understand",
        "doesn't help",
        "doesnt help",
        "you're useless",
        "youre useless",
        "you are useless",
        "pointless",
        "not listening",
        "shut up",
        "stupid",
        "answer me",
        "whatever",
        "are you listening",
        "are you even listening",
        "do you hear me",
        "are you hearing me",
        "are you reading",
        "did you read"
      ],
      "cantCall": [
        "call",
        "phone",
        "hotline",
        "helpline",
        "no answer",
        "nobody answer",
        "no one answer",
        "busy",
        "can't talk",
        "cant talk",
        "can't speak",
        "on hold",
        "didn't help",
        "therapist",
        "counselor"
      ],
      "selfBlame": [
        "my fault",
        "burden",
        "better off without me",
        "worthless",
        "useless",
        "hate myself",
        "failure",
        "i ruin",
        "should not exist",
        "shouldn't exist",
        "not worth"
      ],
      "alone": [
        "alone",
        "lonely",
        "no one",
        "nobody",
        "no friends",
        "by myself",
        "isolated",
        "no family",
        "no place",
        "nowhere to go"
      ],
      "night": [
        "can't sleep",
        "cant sleep",
        "insomnia",
        "night",
        "awake",
        "tired",
        "exhausted",
        "worn out"
      ]
    },
    crisisWords: ["suicide", "suicidal", "kill myself", "want to die", "wanna die", "end my life", "self-harm", "self harm", "hurt myself", "cut myself", "no reason to live", "how to die", "ways to die", "painless death", "unalive myself", "unaliving myself", "unalive me", "want to unalive", "sewer slide"],
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
    if (k === "autoWords" || k === "crisisWords" || k === "careWords") continue;
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
  // そよぎの言葉を選ぶための、様子ごとの言葉(数は言語ごとに違ってよい・2026-11-24)
  if (base.careWords && typeof base.careWords === "object") {
    out.careWords = {};
    const tw = tr.careWords && typeof tr.careWords === "object" ? tr.careWords : {};
    for (const c of Object.keys(base.careWords)) {
      out.careWords[c] = Array.isArray(tw[c]) ? tw[c].filter((w) => typeof w === "string" && w) : base.careWords[c].slice();
    }
  }
  return out;
}

export function fmt(s, vars) {
  return String(s).replace(/\{(\w+)\}/g, (_, k) => (vars && k in vars ? String(vars[k]) : ""));
}
