const productionBasePath = "/rindo-nishiogi-sample-lp";

export const assetPath = (path: string) =>
  `${process.env.NODE_ENV === "production" ? productionBasePath : ""}${path}`;

export const siteData = {
  name: "りんどう",
  area: "西荻窪",
  descriptor: "DINING & SAKE",
  sampleLabel: "営業提案用サンプル",
  address: "東京都杉並区西荻北3-9-13",
  access: "西荻窪駅 北口から徒歩4分",
  hours: {
    days: "火曜日を除く",
    lunch: "11:30–14:00",
    dinner: "18:00–22:00",
    closed: "火曜日",
  },
  links: {
    instagram: "https://www.instagram.com/rindo.nishiogi/",
    tabelog: "https://tabelog.com/tokyo/A1319/A131907/13284107/",
    reservation: "https://tabelog.com/tokyo/A1319/A131907/13284107/",
    map: "https://www.google.com/maps/place/%E3%82%8A%E3%82%93%E3%81%A9%E3%81%86/@35.7049075,139.5939046,17z/data=!3m1!4b1!4m6!3m5!1s0x6018ef626c197fcd:0x50907ab73b6978ff!8m2!3d35.7049075!4d139.5964795!16s%2Fg%2F11tgdhq926?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D",
  },
  provisionalNotice:
    "住所・アクセス・営業時間・定休日は公開情報を基にした仮情報です。正式公開前に店舗確認が必要です。",
} as const;

export const imageAssets = {
  brand: {
    header: "/images/brand/rindou-header-logo.webp",
    hero: "/images/brand/rindou-brand-logo-ivory.webp",
    footer: "/images/brand/rindou-footer-logo.webp",
    master: "/images/brand/rindou-master-logo.webp",
    pageIcon: "/images/brand/rindou-page-icon.webp",
    pageIcon512: "/images/brand/rindou-page-icon-512.webp",
  },
  hero: {
    desktop: "/images/hero/01_hero_food-overview_desktop.webp",
    desktopSmall: "/images/hero/01_hero_food-overview_desktop-960.webp",
    mobile: "/images/hero/01_hero_food-overview_mobile.webp",
  },
  concept: "/images/concept/02_concept_rindo-noren-logo.webp",
  food: {
    main: "/images/food/03_food_whitebait-pasta.webp",
    mainSmall: "/images/food/03_food_whitebait-pasta-detail.webp",
    detail: "/images/food/03_food_chicken-dish.webp",
  },
  menu: [
    "/images/menu/04_menu_whitefish-carpaccio.webp",
    "/images/menu/04_menu_squid-pasta.webp",
    "/images/menu/04_menu_fish-couscous.webp",
    "/images/menu/04_menu_fried-fish-cutlet.webp",
    "/images/menu/04_menu_mango-dessert.webp",
  ],
  seasonal: {
    main: "/images/seasonal/05_seasonal_lemon-seafood-bowl-centered.webp",
    mainSmall: "/images/seasonal/05_seasonal_lemon-seafood-bowl-centered.webp",
    detail: "/images/seasonal/05_seasonal_specialty-dish-02.webp",
    vegetable: "/images/seasonal/05_seasonal_vegetable-dish.webp",
  },
  drinks: {
    main: "/images/drinks/06_drinks_natural-wine-selection.webp",
    mainSmall: "/images/drinks/06_drinks_natural-wine-selection-960.webp",
  },
  space: {
    main: "/images/space/08_space_interior-night.webp",
    table: "/images/space/08_space_table-seating.webp",
  },
  lunch: "/images/lunch/09_lunch_lunch-set.webp",
  access: {
    exterior: "/images/access/11_access_exterior-night.webp",
    exteriorSmall: "/images/access/11_access_exterior-night-960.webp",
    entrance: "/images/access/11_access_entrance-noren.webp",
  },
  cta: "/images/cta/12_reservation_evening-dining.webp",
  ctaMobile: "/images/cta/12_reservation_evening-dining-mobile.webp",
} as const;

// TODO: 店舗確認後、各写真と正式な料理名の対応を確定する。
export const menuGalleryImages = [
  { image: imageAssets.menu[0], alt: "黒い皿に盛り付けた魚料理", width: 1448, height: 1086 },
  { image: imageAssets.menu[1], alt: "白い器に盛り付けた麺料理", width: 1448, height: 1086 },
  { image: imageAssets.menu[2], alt: "ソースと穀物を添えた魚料理", width: 1448, height: 1086 },
  { image: imageAssets.menu[3], alt: "衣をまとった魚料理", width: 1448, height: 1086 },
  { image: imageAssets.menu[4], alt: "ガラスの器に盛り付けた黄色いデザート", width: 1448, height: 1086 },
] as const;

// TODO: 店舗確認後、現行提供中の料理名へ更新する。
export const menuHighlights = [
  { name: "レアアジフライ" },
  { name: "A5黒毛和牛のたたき" },
  { name: "〆鯖とフルーツトマト" },
  { name: "自家製ハムとトンナート" },
] as const;

// TODO: 料金・品数・時間・貸切条件は店舗確認後に追加する。
export const courseData = {
  title: "会食やグループでのご利用に",
  description:
    "コースやグループ利用の最新内容は、食べログの店舗ページでご確認いただけます。",
  notes: ["コース内容", "空席状況", "グループ利用のご相談"],
} as const;

export const visitGuideData = [
  {
    term: "ご予約",
    description: "ディナーの空席とコースは、食べログで最新情報をご確認ください。",
  },
  {
    term: "当日の営業",
    description: "臨時営業・休業や季節の料理は、公式Instagramでご確認ください。",
  },
  {
    term: "ご利用条件",
    description: "支払方法、貸切、ランチ予約などの条件は、正式公開前の店舗確認事項です。",
  },
] as const;
