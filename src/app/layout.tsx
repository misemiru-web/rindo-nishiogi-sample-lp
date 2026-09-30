import type { Metadata } from "next";
import { assetPath, imageAssets } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "りんどう｜西荻窪 お酒と料理｜営業提案用サンプル",
  description: "西荻窪『りんどう』の営業提案用サンプルLPです。公式サイトではありません。",
  robots: { index: false, follow: false, nocache: true },
  icons: {
    icon: [{ url: assetPath(imageAssets.brand.pageIcon512), sizes: "512x512", type: "image/webp" }],
    apple: [{ url: assetPath(imageAssets.brand.pageIcon), type: "image/webp" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="ja"><body>{children}</body></html>;
}
