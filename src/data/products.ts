import type { Product } from "./types";

// 商品マスタ。amazonUrl / rakutenUrl はアフィリエイトタグ確定後に差し替える。
// 現状は商品名の検索結果URL(プレースホルダー)。null の場合はボタン非表示。
function amazonSearch(query: string) {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(query)}`;
}
function rakutenSearch(query: string) {
  return `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(query)}/`;
}

function product(
  id: string,
  name: string,
  category: Product["category"],
  description: string
): Product {
  return {
    id,
    name,
    category,
    description,
    amazonUrl: amazonSearch(name),
    rakutenUrl: rakutenSearch(name),
  };
}

export const PRODUCTS: Product[] = [
  // 雨対策
  product("rain-poncho", "レインポンチョ", "rain", "両手が空いて動きやすい。フェス定番の雨対策。"),
  product("waterproof-bag-cover", "防水バッグカバー", "rain", "リュックごとすっぽり覆って荷物を雨から守る。"),
  product("waterproof-phone-case", "スマホ防水ケース", "rain", "首から下げられるタイプなら雨でも操作しやすい。"),
  product("waterproof-shoes", "防水シューズ・長靴", "rain", "ぬかるみ対策に。軽量タイプが歩きやすい。"),
  product("quick-dry-towel", "速乾タオル", "rain", "濡れた体や荷物を拭くのに。かさばらない。"),
  product("dry-bag", "防水スタッフバッグ", "rain", "着替えや電子機器をまとめて濡れから守る。"),

  // 暑さ対策
  product("cooling-towel", "冷却タオル", "heat", "水に濡らして首に巻くとひんやり長持ち。"),
  product("neck-fan", "ハンディ・首かけ扇風機", "heat", "屋外の炎天下でも風を確保できる。"),
  product("sunscreen", "日焼け止め", "heat", "汗に強いウォータープルーフタイプがおすすめ。"),
  product("cap-hat", "帽子・キャップ", "heat", "直射日光から頭を守る基本アイテム。"),
  product("cooling-spray", "冷却スプレー", "heat", "服の上からシュッとひと吹きで体感温度を下げる。"),
  product("salt-candy", "塩分タブレット・飴", "heat", "熱中症対策に塩分・ミネラル補給。"),
  product("sports-drink", "経口補水パウダー", "heat", "水に溶かすだけで手軽に塩分補給できる。"),
  product("cooling-inner", "接触冷感インナー", "heat", "着るだけで涼しい素材のインナーウェア。"),
  product("portable-parasol", "折りたたみ日傘・パラソル", "heat", "待機列や休憩時の日陰づくりに。"),

  // スマホ・電源
  product("mobile-battery", "モバイルバッテリー", "phone", "1日中スマホを使うフェスの必需品。"),
  product("charge-cable", "充電ケーブル(予備)", "phone", "断線・忘れ物対策に予備を1本。"),
  product("neck-pouch", "スマホ用ネックポーチ", "phone", "両手を空けたまま貴重品を管理できる。"),
  product("solar-charger", "ソーラーチャージャー", "phone", "長時間の野外フェス・キャンプ泊で活躍。"),

  // 衛生用品
  product("wet-tissue", "ウェットティッシュ", "convenience", "手や汗を拭くのに何かと便利。"),
  product("hand-sanitizer", "携帯用消毒液", "convenience", "屋外トイレ利用時などの衛生対策に。"),
  product("deodorant-sheet", "デオドラントシート", "convenience", "汗の匂いや汗じみが気になるときに。"),
  product("tissue-pack", "ポケットティッシュ", "convenience", "トイレットペーパー切れの野外トイレ対策にも。"),

  // あると便利
  product("waist-pouch", "ウエストポーチ", "bag", "貴重品を身につけて身軽に動ける。"),
  product("folding-chair", "コンパクト折りたたみ椅子", "convenience", "待機時間や休憩時にあると疲れが違う。"),
  product("earplugs", "耳栓(ライブ用)", "convenience", "大音量から耳を守り、翌日の耳鳴りを防ぐ。"),
  product("rain-boots-light", "軽量レインシューズ", "rain", "本降りが予想される日の足元対策。"),
  product("led-light", "LEDライト・光るグッズ", "convenience", "夜間の視認性確保やペンライト代わりに。"),
  product("power-strip", "電源タップ(車中泊・宿泊用)", "camp", "複数人でコンセントを分け合うのに便利。"),

  // 宿泊用品
  product("sleeping-bag", "寝袋・シュラフ", "camp", "車中泊やキャンプ泊での防寒に。"),
  product("air-mat", "エアマット・キャンプマット", "camp", "地面の硬さや冷気を防いで睡眠の質を上げる。"),
  product("tent-light", "テント用ランタン", "camp", "夜間のテント内・周辺の明かり確保に。"),
  product("travel-pillow", "携帯枕・ネックピロー", "camp", "移動中や仮眠時の首への負担を軽減。"),
  product("cooler-box", "小型クーラーボックス", "camp", "飲み物や食材の保冷に。連泊フェスで活躍。"),
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
