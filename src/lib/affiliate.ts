// Amazon・楽天のアフィリエイトIDをここで一元管理する。
// 環境変数を設定するだけでサイト全体の商品リンクに反映される。
//   NEXT_PUBLIC_AMAZON_AFFILIATE_TAG  例: yourtag-22
//   NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID  例: 1a2b3c4d.5e6f7g8h
// 未設定の間は通常の検索結果リンク(プレースホルダー)のまま動作する。

const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_AFFILIATE_TAG;
const RAKUTEN_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID;

export function buildAmazonSearchUrl(keyword: string): string {
  const params = new URLSearchParams({ k: keyword });
  if (AMAZON_TAG) params.set("tag", AMAZON_TAG);
  return `https://www.amazon.co.jp/s?${params.toString()}`;
}

export function buildRakutenSearchUrl(keyword: string): string {
  const searchUrl = `https://search.rakuten.co.jp/search/mall/${encodeURIComponent(keyword)}/`;
  if (!RAKUTEN_ID) return searchUrl;
  // 楽天アフィリエイトのリンク変換(hb.afl.rakuten.co.jp)経由に切り替える
  const params = new URLSearchParams({ pc: searchUrl, link_type: "hybrid_url" });
  return `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_ID}/?${params.toString()}`;
}
