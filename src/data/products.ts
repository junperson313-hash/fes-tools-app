import type { Product, Scenario } from "./types";

function product(
  id: string,
  name: string,
  category: Product["category"],
  description: string,
  searchKeyword?: string
): Product {
  return { id, name, category, description, searchKeyword };
}

export const PRODUCTS: Product[] = [
  // 暑さ対策
  product("cooling-spray", "冷却スプレー", "heat", "服の上からシュッとひと吹きで体感温度を下げる。"),
  product("neck-fan", "ハンディ・首かけ扇風機", "heat", "屋外の炎天下でも風を確保できる。"),
  product("sunscreen", "日焼け止め", "heat", "汗に強いウォータープルーフタイプがおすすめ。"),
  product("salt-candy", "塩分タブレット・飴", "heat", "熱中症対策に塩分・ミネラル補給。"),
  product("cooling-inner", "接触冷感インナー", "heat", "着るだけで涼しい素材のインナーウェア。"),
  product("portable-parasol", "折りたたみ日傘・パラソル", "heat", "待機列や休憩時の日陰づくりに。"),
  product("sunglasses", "サングラス", "heat", "強い日差しから目を守る。UVカット素材がおすすめ。"),

  // 雨対策
  product("rain-poncho", "レインポンチョ", "rain", "両手が空いて動きやすい。フェス定番の雨対策。"),
  product("waterproof-bag-cover", "防水バッグカバー", "rain", "リュックごとすっぽり覆って荷物を雨から守る。"),
  product("waterproof-phone-case", "スマホ防水ケース", "rain", "首から下げられるタイプなら雨でも操作しやすい。"),
  product("waterproof-shoes", "防水シューズ・レインブーツ", "rain", "ぬかるみ対策に。ゴアテックスなど防水透湿素材のトレッキングシューズなら、山開催のフェスでも濡れずに快適に歩ける。"),
  product("dry-bag", "防水スタッフバッグ", "rain", "着替えや電子機器をまとめて濡れから守る。"),
  product("extra-socks", "予備の靴下", "rain", "濡れた足元をリセットできる。雨の日の必需品。"),

  // モバイルバッテリー・充電
  product("mobile-battery", "モバイルバッテリー", "power", "1日中スマホを使うフェスの必需品。"),
  product("charge-cable", "充電ケーブル(予備)", "power", "断線・忘れ物対策に予備を1本。"),
  product("solar-charger", "ソーラーチャージャー", "power", "長時間の野外フェス・キャンプ泊で活躍。"),
  product("power-strip", "電源タップ(車中泊・宿泊用)", "power", "複数人でコンセントを分け合うのに便利。"),

  // バッグ
  product("waist-pouch", "ウエストポーチ", "bag", "貴重品を身につけて身軽に動ける。"),
  product("neck-pouch", "スマホ用ネックポーチ", "bag", "両手を空けたまま貴重品を管理できる。"),
  product("rucksack", "防水リュック", "bag", "荷物をまとめて背負える、フェス向けの定番バッグ。"),

  // タオル
  product("cooling-towel", "冷却タオル", "towel", "水に濡らして首に巻くとひんやり長持ち。"),
  product("quick-dry-towel", "速乾タオル", "towel", "汗や雨で濡れた体・荷物を拭くのに。かさばらない。"),
  product("sports-towel", "スポーツタオル", "towel", "汗拭き・日除けなど何かと使い回せる1枚。"),

  // 帽子
  product("cap-hat", "帽子・キャップ", "hat", "直射日光から頭を守る基本アイテム。"),
  product("bucket-hat", "つば広ハット", "hat", "首元まで日差しをカバーできる暑さ対策帽子。"),

  // 飲み物関連
  product("sports-drink", "経口補水パウダー", "drink", "水に溶かすだけで手軽に塩分補給できる。"),
  product("water-bottle", "保冷水筒・ボトル", "drink", "冷たい飲み物をキープして熱中症対策に。"),
  product("collapsible-cup", "折りたたみカップ", "drink", "給水スポットでの水分補給にかさばらず便利。"),

  // レジャー用品
  product(
    "folding-chair",
    "コンパクト折りたたみ椅子",
    "leisure",
    "待機時間や休憩時にあると疲れが違う。ヘリノックスなど軽量・コンパクトなアウトドアチェアがフェスでも定番。",
    "ヘリノックス 折りたたみ椅子"
  ),
  product("earplugs", "耳栓(ライブ用)", "leisure", "大音量から耳を守り、翌日の耳鳴りを防ぐ。"),
  product("led-light", "LEDライト・光るグッズ", "leisure", "夜間の視認性確保やペンライト代わりに。"),
  product("rain-boots-light", "軽量レインシューズ", "leisure", "本降りが予想される日の足元対策。"),

  // 宿泊・遠征
  product("tent", "テント", "camp", "キャンプ泊フェスの拠点に。設営が簡単なワンタッチタイプが便利。"),
  product("sleeping-bag", "寝袋・シュラフ", "camp", "車中泊やキャンプ泊での防寒に。"),
  product("air-mat", "エアマット・キャンプマット", "camp", "地面の硬さや冷気を防いで睡眠の質を上げる。"),
  product("tent-light", "テント用ランタン", "camp", "夜間のテント内・周辺の明かり確保に。"),
  product("travel-pillow", "携帯枕・ネックピロー", "camp", "移動中や仮眠時の首への負担を軽減。"),
  product("cooler-box", "小型クーラーボックス", "camp", "飲み物や食材の保冷に。連泊フェスで活躍。"),

  // その他便利グッズ
  product("wet-tissue", "ウェットティッシュ", "misc", "手や汗を拭くのに何かと便利。"),
  product("hand-sanitizer", "携帯用消毒液", "misc", "屋外トイレ利用時などの衛生対策に。"),
  product("deodorant-sheet", "デオドラントシート", "misc", "汗の匂いや汗じみが気になるときに。"),
  product("tissue-pack", "ポケットティッシュ", "misc", "トイレットペーパー切れの野外トイレ対策にも。"),
  product("trash-bag", "携帯ゴミ袋", "misc", "ゴミを持ち帰るためのマナーアイテム。"),
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

// シーン別のおすすめ商品リスト。用品一覧ページのクイックフィルタで使用する。
export const SCENARIO_PRODUCT_IDS: Record<Scenario, string[]> = {
  beginner: [
    "mobile-battery",
    "charge-cable",
    "waist-pouch",
    "cap-hat",
    "sunscreen",
    "wet-tissue",
    "hand-sanitizer",
    "rain-poncho",
  ],
  "peak-summer": [
    "cooling-towel",
    "neck-fan",
    "sunscreen",
    "cooling-spray",
    "salt-candy",
    "sports-drink",
    "cooling-inner",
    "portable-parasol",
    "bucket-hat",
  ],
  rainy: [
    "rain-poncho",
    "waterproof-bag-cover",
    "waterproof-phone-case",
    "waterproof-shoes",
    "dry-bag",
    "quick-dry-towel",
    "extra-socks",
  ],
  overnight: [
    "tent",
    "sleeping-bag",
    "air-mat",
    "tent-light",
    "travel-pillow",
    "cooler-box",
    "power-strip",
    "solar-charger",
  ],
};

export function getProductsByScenario(scenario: Scenario): Product[] {
  const ids = SCENARIO_PRODUCT_IDS[scenario];
  return ids.map((id) => getProductById(id)).filter((p): p is Product => Boolean(p));
}

// トップページの「あると便利な持ち物」ピックアップで使用する定番アイテム。
export const FEATURED_PRODUCT_IDS: string[] = [
  "mobile-battery",
  "rain-poncho",
  "waterproof-phone-case",
  "cap-hat",
  "cooling-towel",
  "sunscreen",
  "neck-fan",
  "folding-chair",
  "earplugs",
  "waist-pouch",
  "sunglasses",
  "waterproof-shoes",
];

export function getFeaturedProducts(): Product[] {
  return FEATURED_PRODUCT_IDS.map((id) => getProductById(id)).filter(
    (p): p is Product => Boolean(p)
  );
}
