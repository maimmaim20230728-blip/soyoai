// 選べる言語(これまでのアプリと同じ19言語・2026-11-23 ヒロさん「アプリだから今まで通り」)。
// ja と en は i18n.js に手書き。ほかは lang/<code>.js(tools/tr/<code>.json から tools/build_i18n.js で作る)。
// [コード, 英語名(AIへの指示に使う), その言語での名前, 右から左, ウィキペディアのサブドメイン]
export const LANGS = [
  ["ja","Japanese","日本語",0,"ja"],
  ["en","English","English",0,"en"],
  ["zh-CN","Simplified Chinese","简体中文",0,"zh"],
  ["zh-TW","Traditional Chinese (Taiwan)","繁體中文",0,"zh"],
  ["ko","Korean","한국어",0,"ko"],
  ["es","Spanish","Español",0,"es"],
  ["pt","Brazilian Portuguese","Português",0,"pt"],
  ["fr","French","Français",0,"fr"],
  ["de","German","Deutsch",0,"de"],
  ["it","Italian","Italiano",0,"it"],
  ["nl","Dutch","Nederlands",0,"nl"],
  ["pl","Polish","Polski",0,"pl"],
  ["ru","Russian","Русский",0,"ru"],
  ["tr","Turkish","Türkçe",0,"tr"],
  ["hi","Hindi","हिन्दी",0,"hi"],
  ["id","Indonesian","Bahasa Indonesia",0,"id"],
  ["ar","Arabic","العربية",1,"ar"],
  ["bn","Bengali","বাংলা",0,"bn"],
  ["sw","Swahili","Kiswahili",0,"sw"],
].map((a) => ({ code: a[0], en: a[1], name: a[2], rtl: !!a[3], wiki: a[4] }));

export const LANG_CODES = LANGS.map((l) => l.code);
export function langInfo(code) { return LANGS.find((l) => l.code === code) || LANGS[1]; }
