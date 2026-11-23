// Service Worker
// 自分のファイルとライブラリだけを保存する。AIのデータ(WebLLM の保存先)と検索のリクエストには触らない。
// 版を上げるときは config.js の VER と同じ値にする(_smoke.js が照合する)。
const VER = "0.3.10";
const CACHE = "ai-app-" + VER;

const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./config.js",
  "./i18n.js",
  "./langs.js",
  "./crisis.js",
  "./THIRD-PARTY-NOTICES.txt",
  "./lib/WEB-LLM-LICENSE.txt",
  "./llm-worker.js",
  "./lib/web-llm.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  // 言語(17)。オフラインでも切り替えられるよう、全部保存する
  "./lang/zh-CN.js",
  "./lang/zh-TW.js",
  "./lang/ko.js",
  "./lang/es.js",
  "./lang/pt.js",
  "./lang/fr.js",
  "./lang/de.js",
  "./lang/it.js",
  "./lang/nl.js",
  "./lang/pl.js",
  "./lang/ru.js",
  "./lang/tr.js",
  "./lang/hi.js",
  "./lang/id.js",
  "./lang/ar.js",
  "./lang/bn.js",
  "./lang/sw.js",
];

self.addEventListener("install", (event) => {
  // HTTP の一時保存を通さず、新しいファイルを取りに行く
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: "reload" }))))
  );
  // skipWaiting はしない。新しい版は、画面を一度閉じて開き直したときに切り替わる。
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k.startsWith("ai-app-") && k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // 別のサイト(AIのデータ、ウィキペディア、検索の中継)には触らない
  if (url.origin !== self.location.origin) return;

  // 画面そのもの(アプリの入口)を開くときだけ index.html を返す。
  // ほかのファイル(ライセンスの全文など)を開くときは、そのファイルを返す(2026-11-23 に、全部 index.html になっていたのを直した)。
  const scope = new URL(self.registration.scope);
  const isEntry = url.pathname === scope.pathname || url.pathname === scope.pathname + "index.html";
  if (req.mode === "navigate" && isEntry) {
    event.respondWith(
      caches.match("./index.html", { cacheName: CACHE }).then((hit) => hit || fetch(req))
    );
    return;
  }
  event.respondWith(
    caches.match(req, { cacheName: CACHE, ignoreSearch: true }).then((hit) => hit || fetch(req))
  );
});
