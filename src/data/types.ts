export type ProductCategory =
  | "rain"
  | "heat"
  | "phone"
  | "bag"
  | "convenience"
  | "camp";

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  rain: "雨対策",
  heat: "暑さ対策",
  phone: "スマホ・充電",
  bag: "バッグ",
  convenience: "便利グッズ",
  camp: "宿泊・キャンプ",
};

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  amazonUrl: string | null;
  rakutenUrl: string | null;
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
