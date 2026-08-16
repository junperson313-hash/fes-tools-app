export type ProductCategory =
  | "heat"
  | "rain"
  | "power"
  | "bag"
  | "towel"
  | "hat"
  | "drink"
  | "leisure"
  | "camp"
  | "misc";

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  heat: "暑さ対策",
  rain: "雨対策",
  power: "モバイルバッテリー・充電",
  bag: "バッグ",
  towel: "タオル",
  hat: "帽子",
  drink: "飲み物関連",
  leisure: "レジャー用品",
  camp: "宿泊・遠征",
  misc: "その他便利グッズ",
};

export type Scenario = "beginner" | "peak-summer" | "rainy" | "overnight";

export const SCENARIO_LABELS: Record<Scenario, string> = {
  beginner: "初心者向け",
  "peak-summer": "真夏フェス向け",
  rainy: "雨予報の日",
  overnight: "泊まりフェス向け",
};

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  /** Amazon/楽天の検索キーワード。未指定の場合はnameを使う。ブランド名などを含めて検索精度を上げたい時に指定する。 */
  searchKeyword?: string;
}

export type PackingCategory =
  | "must"
  | "heat"
  | "rain"
  | "phone"
  | "hygiene"
  | "nice"
  | "stay";

export const PACKING_CATEGORY_LABELS: Record<PackingCategory, string> = {
  must: "絶対必要",
  heat: "暑さ対策",
  rain: "雨対策",
  phone: "スマホ・電源",
  hygiene: "衛生用品",
  nice: "あると便利",
  stay: "宿泊用品",
};

export interface PackingAnswers {
  venue: "outdoor" | "indoor";
  stay: "day" | "overnight";
  weather: "sunny" | "maybe_rain" | "rain";
  duration: "full" | "half";
  transport: "train" | "car" | "other";
}

export interface PackingItem {
  id: string;
  label: string;
  category: PackingCategory;
  productId?: string;
  show: (a: PackingAnswers) => boolean;
}
