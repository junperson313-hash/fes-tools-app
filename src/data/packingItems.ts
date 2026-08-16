import type { PackingItem } from "./types";

export const PACKING_ITEMS: PackingItem[] = [
  // 絶対必要
  { id: "ticket", label: "チケット・電子チケット画面", category: "must", show: () => true },
  { id: "id", label: "身分証明書", category: "must", show: () => true },
  { id: "cash", label: "現金(電子決済不可の出店も多い)", category: "must", show: () => true },
  { id: "wallet", label: "財布", category: "must", show: () => true },
  { id: "watch", label: "腕時計(電池切れ対策)", category: "must", show: () => true },

  // 暑さ対策
  { id: "cooling-towel", label: "冷却タオル", category: "heat", productId: "cooling-towel", show: (a) => a.venue === "outdoor" },
  { id: "cap-hat", label: "帽子・キャップ", category: "heat", productId: "cap-hat", show: (a) => a.venue === "outdoor" },
  { id: "sunscreen", label: "日焼け止め", category: "heat", productId: "sunscreen", show: (a) => a.venue === "outdoor" && a.weather !== "rain" },
  { id: "neck-fan", label: "ハンディ扇風機", category: "heat", productId: "neck-fan", show: (a) => a.venue === "outdoor" && a.duration === "full" },
  { id: "salt-candy", label: "塩分タブレット・飴", category: "heat", productId: "salt-candy", show: (a) => a.venue === "outdoor" },
  { id: "water-bottle", label: "飲料・水筒", category: "heat", productId: "sports-drink", show: () => true },
  { id: "sunglasses", label: "サングラス", category: "heat", productId: "sunglasses", show: (a) => a.venue === "outdoor" },

  // 雨対策
  { id: "rain-poncho", label: "レインポンチョ", category: "rain", productId: "rain-poncho", show: (a) => a.weather !== "sunny" },
  { id: "waterproof-bag-cover", label: "防水バッグカバー", category: "rain", productId: "waterproof-bag-cover", show: (a) => a.weather !== "sunny" && a.venue === "outdoor" },
  { id: "waterproof-phone-case", label: "スマホ防水ケース", category: "rain", productId: "waterproof-phone-case", show: (a) => a.weather !== "sunny" },
  { id: "waterproof-shoes", label: "防水シューズ・長靴", category: "rain", productId: "waterproof-shoes", show: (a) => a.weather === "rain" },
  { id: "quick-dry-towel", label: "速乾タオル", category: "rain", productId: "quick-dry-towel", show: (a) => a.weather !== "sunny" },
  { id: "extra-socks", label: "予備の靴下", category: "rain", show: (a) => a.weather === "rain" },
  { id: "dry-bag", label: "防水スタッフバッグ", category: "rain", productId: "dry-bag", show: (a) => a.weather === "rain" },

  // スマホ・電源
  { id: "mobile-battery", label: "モバイルバッテリー", category: "phone", productId: "mobile-battery", show: () => true },
  { id: "charge-cable", label: "充電ケーブル", category: "phone", productId: "charge-cable", show: () => true },
  { id: "neck-pouch", label: "スマホ用ネックポーチ", category: "phone", productId: "neck-pouch", show: (a) => a.venue === "outdoor" },
  { id: "solar-charger", label: "ソーラーチャージャー", category: "phone", productId: "solar-charger", show: (a) => a.stay === "overnight" && a.venue === "outdoor" },

  // 衛生用品
  { id: "wet-tissue", label: "ウェットティッシュ", category: "hygiene", productId: "wet-tissue", show: () => true },
  { id: "hand-sanitizer", label: "携帯用消毒液", category: "hygiene", productId: "hand-sanitizer", show: () => true },
  { id: "tissue-pack", label: "ポケットティッシュ", category: "hygiene", productId: "tissue-pack", show: () => true },
  { id: "deodorant-sheet", label: "デオドラントシート", category: "hygiene", productId: "deodorant-sheet", show: (a) => a.duration === "full" },
  { id: "mask", label: "マスク(念のため)", category: "hygiene", show: () => true },

  // あると便利
  { id: "waist-pouch", label: "ウエストポーチ", category: "nice", productId: "waist-pouch", show: () => true },
  { id: "folding-chair", label: "コンパクト折りたたみ椅子", category: "nice", productId: "folding-chair", show: (a) => a.duration === "full" },
  { id: "earplugs", label: "耳栓(ライブ用)", category: "nice", productId: "earplugs", show: () => true },
  { id: "led-light", label: "LEDライト・光るグッズ", category: "nice", productId: "led-light", show: (a) => a.duration === "full" },
  { id: "snacks", label: "軽食・おやつ", category: "nice", show: () => true },
  { id: "trash-bag", label: "ゴミ袋・レジ袋", category: "nice", show: () => true },
  { id: "car-key-note", label: "駐車場所のメモ・写真", category: "nice", show: (a) => a.transport === "car" },
  { id: "ic-card", label: "交通系ICカード", category: "nice", show: (a) => a.transport === "train" },

  // 宿泊用品
  { id: "change-clothes", label: "着替え", category: "stay", show: (a) => a.stay === "overnight" },
  { id: "toiletries", label: "洗面用具", category: "stay", show: (a) => a.stay === "overnight" },
  { id: "sleeping-bag", label: "寝袋・シュラフ", category: "stay", productId: "sleeping-bag", show: (a) => a.stay === "overnight" && a.transport === "car" },
  { id: "air-mat", label: "エアマット", category: "stay", productId: "air-mat", show: (a) => a.stay === "overnight" && a.transport === "car" },
  { id: "tent-light", label: "テント用ランタン", category: "stay", productId: "tent-light", show: (a) => a.stay === "overnight" && a.transport === "car" },
  { id: "travel-pillow", label: "携帯枕・ネックピロー", category: "stay", productId: "travel-pillow", show: (a) => a.stay === "overnight" },
  { id: "cooler-box", label: "小型クーラーボックス", category: "stay", productId: "cooler-box", show: (a) => a.stay === "overnight" && a.transport === "car" },
  { id: "charger-multi", label: "宿泊先用の充電タップ", category: "stay", productId: "power-strip", show: (a) => a.stay === "overnight" },
];
