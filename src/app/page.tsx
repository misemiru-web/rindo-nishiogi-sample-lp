/* eslint-disable @next/next/no-img-element -- Static export uses pre-generated WebP files and picture/srcset for responsive delivery. */
import SiteHeader from "@/components/SiteHeader";
import ScrollReveal from "@/components/ScrollReveal";
import {
  CalendarCheck2, CalendarDays, Clock, ExternalLink as ExternalLinkIcon,
  Footprints, Info, Instagram, Map, MapPin,
} from "lucide-react";
import {
  assetPath, courseData, imageAssets, menuGalleryImages, menuHighlights, siteData, visitGuideData,
} from "@/data/site";
import styles from "./page.module.css";

const visitGuideIcons = [CalendarCheck2, Instagram, Info] as const;
const accessIcons = [MapPin, Footprints, Clock, CalendarDays] as const;

function ExternalLink({ href, children, className = "", showArrow = true }: { href: string; children: React.ReactNode; className?: string; showArrow?: boolean }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<span className="sr-only">（新しいタブで開く）</span>{showArrow && <span className={styles.external} aria-hidden="true">↗</span>}</a>;
}

function SectionHeading({ label, title, id }: { label: string; title: React.ReactNode; id: string }) {
  return <div className={styles.sectionHeading}><p className={styles.eyebrow}>{label}</p><h2 id={id}>{title}</h2></div>;
}

function ResponsiveImage({ src, small, alt, width, height, className = "" }: { src: string; small?: string; alt: string; width: number; height: number; className?: string }) {
  return <picture className={className}>{small && <source media="(max-width: 960px)" srcSet={assetPath(small)} />}<img src={assetPath(src)} alt={alt} width={width} height={height} loading="lazy" /></picture>;
}

export default function Home() {
  return <>
    <ScrollReveal />
    <SiteHeader />
    <main id="main-content">
      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.heroKicker}>NISHIOGIKUBO<br />DINING &amp; SAKE</p>
          <div className={styles.heroBrand}><img src={assetPath(imageAssets.brand.hero)} width="2896" height="2172" alt="りんどう 西荻窪 お酒と料理" /></div>
          <h1 id="hero-title">
            <span className={styles.heroTitleLine}>西荻窪、</span>
            <span className={styles.heroTitleLine}>
              <span>お酒と料理を</span><span>楽しむ夜。</span>
            </span>
          </h1>
          <p className={styles.heroLead}>料理と酒を囲みながら、ゆっくりと夜を過ごす。西荻窪の食卓へ。</p>
          <ExternalLink href={siteData.links.reservation} className="button button-primary">食べログで予約</ExternalLink>
          <p className={styles.buttonNote}>空席とコースを確認できます</p>
          <p className={styles.sample}>{siteData.sampleLabel}</p>
        </div>
        <picture className={styles.heroVisual}>
          <source media="(max-width: 767px)" srcSet={assetPath(imageAssets.hero.mobile)} />
          <source media="(max-width: 1100px)" srcSet={assetPath(imageAssets.hero.desktopSmall)} />
          <img src={assetPath(imageAssets.hero.desktop)} alt="テーブルに並ぶりんどうの料理" width="1600" height="2000" fetchPriority="high" />
        </picture>
      </section>

      <section className={`${styles.concept} section`} id="concept" aria-labelledby="concept-title">
        <div className={`${styles.conceptInner} container`}>
          <div className={styles.conceptCopy}><SectionHeading label="ABOUT RINDO" title={<><span className={styles.conceptTitleLine}>料理と酒を、</span><span className={styles.conceptTitleLine}>ゆっくり楽しむ。</span></>} id="concept-title" /><p className={`${styles.conceptLead} lead`}>料理とお酒を落ち着いて楽しむ、りんどう。白木を基調とした店内で、炭焼きや魚料理、一品料理と、ナチュラルワイン、日本酒、焼酎などをお楽しみいただけます。</p></div>
          <figure className={styles.conceptPhoto}><img src={assetPath(imageAssets.concept)} alt="りんどうの暖簾と店名ロゴ" width="1000" height="1250" loading="lazy" /><figcaption>西荻窪の路地に灯る、りんどうの暖簾。</figcaption></figure>
        </div>
        <img className={styles.conceptDecoration} src={assetPath("/images/decor/botanical/05-corner-botanical-spray.webp")} width="1086" height="1448" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className={`${styles.food} section`} id="food" aria-labelledby="food-title">
        <div className={styles.foodGrid}>
          <div className={styles.foodVisual}>
            <picture className={styles.foodMain}>
              <source media="(min-width: 768px) and (max-width: 960px)" srcSet={assetPath(imageAssets.food.mainSmall)} />
              <img src={assetPath(imageAssets.food.main)} alt="しらすを添えたパスタ料理" width="1440" height="1800" loading="lazy" />
            </picture>
            <div className={styles.foodMobileDetail}>
              <img src={assetPath(imageAssets.food.mainSmall)} alt="しらす、からすみ、麺の質感が見えるパスタ料理の寄りの写真" width="1448" height="1086" loading="lazy" />
            </div>
          </div>
          <div className={styles.foodCopy}><SectionHeading label="FOOD" title="料理を楽しむ。" id="food-title" /><p className="lead">炭焼き、魚料理、そして季節の一品。皿ごとの表情を、酒とともにお楽しみください。</p></div>
        </div>
        <img className={styles.foodDecoration} src={assetPath("/images/decor/botanical/03-delicate-floral-sprig.webp")} width="1254" height="1254" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className={`${styles.menu} section`} id="menu" aria-labelledby="menu-title">
        <div className={styles.menuFeatureRow}>
          <div className={styles.menuCopy}><SectionHeading label="MENU HIGHLIGHTS" title={<>今夜の一皿を、<br />選ぶ楽しみ。</>} id="menu-title" /><p>公開メニューに掲載された料理から、代表例をご紹介します。</p></div>
          <figure className={styles.menuLeadPhoto}><img src={assetPath(menuGalleryImages[0].image)} alt={menuGalleryImages[0].alt} width={menuGalleryImages[0].width} height={menuGalleryImages[0].height} loading="lazy" /></figure>
        </div>
        <div className={`${styles.menuLower} container`}>
          <div className={styles.menuGallery} aria-label="料理写真ギャラリー">
            <figure className={styles.menuGalleryMain}><img src={assetPath(menuGalleryImages[1].image)} alt={menuGalleryImages[1].alt} width={menuGalleryImages[1].width} height={menuGalleryImages[1].height} loading="lazy" /></figure>
            <div className={styles.menuGallerySide}>
              <figure className={styles.menuGallerySecondary}><img src={assetPath(menuGalleryImages[2].image)} alt={menuGalleryImages[2].alt} width={menuGalleryImages[2].width} height={menuGalleryImages[2].height} loading="lazy" /></figure>
              <div className={styles.menuGalleryBottom}>
                <figure className={styles.menuGalleryTertiary}><img src={assetPath(menuGalleryImages[3].image)} alt={menuGalleryImages[3].alt} width={menuGalleryImages[3].width} height={menuGalleryImages[3].height} loading="lazy" /></figure>
                <figure className={styles.menuGalleryAccent}><img src={assetPath(menuGalleryImages[4].image)} alt={menuGalleryImages[4].alt} width={menuGalleryImages[4].width} height={menuGalleryImages[4].height} loading="lazy" /></figure>
              </div>
            </div>
          </div>
          <div className={styles.menuNames}>
            <p className={styles.menuNamesLabel}>公開メニュー名の例</p>
            <ul>{menuHighlights.map((item) => <li key={item.name}>{item.name}</li>)}</ul>
            <p className="note">掲載名は公開情報を基にした候補です。写真との対応・現行の提供内容は店舗確認が必要で、内容は仕入れ等により変わります。</p>
          </div>
        </div>
        <img className={styles.menuDecoration} src={assetPath("/images/decor/botanical/03-delicate-floral-sprig.webp")} width="1254" height="1254" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className={`${styles.seasonal} section`} id="seasonal" aria-labelledby="seasonal-title">
        <div className={styles.seasonalLayout}>
          <div className={styles.seasonalCopy}><SectionHeading label="SEASONAL" title={<><span className={styles.seasonalTitleLine}>仕入れで変わる、</span><span className={styles.seasonalTitleLine}>その日の一皿。</span></>} id="seasonal-title" /><p>訪れるたびに出会う、季節と仕入れの表情。今日の内容は公式Instagramでご覧ください。</p><ExternalLink href={siteData.links.instagram} className="text-link">今日の内容をInstagramで見る</ExternalLink></div>
          <ResponsiveImage className={styles.seasonalMain} src={imageAssets.seasonal.main} small={imageAssets.seasonal.mainSmall} alt="レモンと香草を添えた季節の魚介料理" width={1254} height={1254} />
          <img className={styles.seasonalDetail} src={assetPath(imageAssets.seasonal.detail)} alt="ハーブとライムを添えた季節の一皿" width="1200" height="1500" loading="lazy" />
        </div>
        <img className={styles.seasonalDecoration} src={assetPath("/images/decor/botanical/03-delicate-floral-sprig.webp")} width="1254" height="1254" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className={`${styles.drinks} section-dark section`} id="drinks" aria-labelledby="drinks-title">
        <div className={`${styles.drinksGrid} container`}>
          <div className={styles.drinksMain}><ResponsiveImage src={imageAssets.drinks.main} small={imageAssets.drinks.mainSmall} alt="店内に並ぶナチュラルワインのボトル" width={1800} height={1013} /></div>
          <div className={styles.drinksCopy}><SectionHeading label="WINE / SAKE" title={<><span className={styles.drinksTitleLine}>料理に寄り添う、</span><span className={styles.drinksTitleLine}>夜の一杯。</span></>} id="drinks-title" /><p className="lead">ナチュラルワイン、日本酒、焼酎など。銘柄を固定せず、料理と過ごす時間に似合う一杯を。</p><ExternalLink href={siteData.links.instagram} className="text-link text-link-light">ドリンク・最新情報を見る</ExternalLink></div>
        </div>
        <img className={styles.drinksDecoration} src={assetPath("/images/decor/botanical/03-delicate-floral-sprig.webp")} width="1254" height="1254" alt="" aria-hidden="true" loading="lazy" />
      </section>

      <section className={`${styles.course} section`} id="course" aria-labelledby="course-title">
        <div className={`${styles.courseGrid} container`}>
          <div className={styles.courseIntro}>
            <p className={styles.courseWord} aria-hidden="true">COURSE</p>
            <SectionHeading label="COURSE & GROUP" title={<><span className={styles.courseTitleLine}>会食やグループでの</span><span className={styles.courseTitleLine}>ご利用に</span></>} id="course-title" />
          </div>
          <div className={styles.courseInfo}>
            <p className="lead">{courseData.description}</p>
            <ul>{courseData.notes.map((note) => <li key={note}>{note}</li>)}</ul>
            <p className={`${styles.courseNote} note`}>料金・品数・時間・貸切条件は正式公開前の店舗確認事項です。</p>
            <ExternalLink href={siteData.links.reservation} className={`${styles.courseCta} button button-outline`}>コース・空席を食べログで確認</ExternalLink>
          </div>
        </div>
      </section>

      <section className={styles.space} id="space" aria-labelledby="space-title">
        <div className={styles.spaceComposition}>
          <div className={styles.spaceVisual}>
            <div className={styles.spaceMain}><img src={assetPath(imageAssets.space.main)} alt="夜の灯りに照らされたりんどうの店内" width="1672" height="941" loading="lazy" /></div>
            <img className={styles.spaceTable} src={assetPath(imageAssets.space.table)} alt="白木のテーブルと椅子が並ぶ客席" width="1122" height="1402" loading="lazy" />
          </div>
          <div className={styles.spacePanel}>
            <div className={styles.spaceCopy}><SectionHeading label="SPACE" title={<><span className={styles.spaceTitleLine}>料理と酒に、</span><span className={styles.spaceTitleLine}><span>ゆっくり</span><span>向き合う。</span></span></>} id="space-title" /><p className="lead">白木のぬくもりが感じられる店内で、料理と酒をゆっくり楽しめる空間です。</p></div>
            <img className={styles.spaceDecoration} src={assetPath("/images/decor/botanical/03-delicate-floral-sprig.webp")} width="1254" height="1254" alt="" aria-hidden="true" loading="lazy" />
          </div>
        </div>
      </section>

      <section className={`${styles.lunch} section`} id="lunch" aria-labelledby="lunch-title"><div className={`${styles.lunchGrid} container`}>
        <div className={styles.lunchPhoto}><img src={assetPath(imageAssets.lunch)} alt="昼に提供された料理のセット" width="1600" height="900" loading="lazy" /></div>
        <div className={styles.lunchCopy}><SectionHeading label="LUNCH" title="昼のりんどう。" id="lunch-title" /><p>公開情報では昼営業も案内されています。現行メニューと当日の営業は、公式Instagramで最新情報をご確認ください。</p><p className="note">ランチ内容・営業時間は正式公開前の確認事項です。</p><ExternalLink href={siteData.links.instagram} className="text-link">Instagramで営業情報を見る</ExternalLink></div>
      </div></section>

      <section className={`${styles.firstVisit} section`} id="first-visit" aria-labelledby="first-visit-title"><div className={`${styles.firstGrid} container`}>
        <SectionHeading label="FIRST VISIT" title="初めての方へ。" id="first-visit-title" />
        <dl className={styles.guideList}>{visitGuideData.map((item, index) => {
          const Icon = visitGuideIcons[index];
          return <div key={item.term}><dt><Icon className={styles.guideIcon} size={21} strokeWidth={1.4} aria-hidden="true" /><span>{item.term}</span></dt><dd>{item.description}</dd><span className={styles.guideNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>;
        })}</dl>
      </div></section>

      <section className={`${styles.access} section`} id="access" aria-labelledby="access-title"><div className={`${styles.accessGrid} container`}>
        <div className={styles.accessInfo}>
          <SectionHeading label="ACCESS" title={<>西荻窪から、<br />歩いて。</>} id="access-title" />
          <p className={styles.accessLead}>西荻窪駅北口から徒歩4分。料理と酒をゆっくり楽しむ、りんどうです。</p>
          <address><dl>{[
            { term: "住所", description: siteData.address },
            { term: "アクセス", description: siteData.access },
            { term: "営業時間", description: <><span>{siteData.hours.days}</span><span>昼 {siteData.hours.lunch}</span><span>夜 {siteData.hours.dinner}</span></> },
            { term: "定休日", description: siteData.hours.closed },
          ].map((item, index) => {
            const Icon = accessIcons[index];
            return <div key={item.term}><dt><Icon className={styles.accessIcon} size={18} strokeWidth={1.5} aria-hidden="true" /><span>{item.term}</span></dt><dd>{item.description}</dd></div>;
          })}</dl></address>
          <p className={`${styles.accessNote} note`}>{siteData.provisionalNotice}</p>
        </div>
        <div className={styles.accessMap}>
          <p className={styles.eyebrow}>MAP / INFO</p>
          <h3>場所と行き方は、<br />Google マップで。</h3>
          <div className={styles.accessLinks}><ExternalLink href={siteData.links.map} className={`button button-outline ${styles.accessMapButton}`} showArrow={false}><Map size={17} strokeWidth={1.5} aria-hidden="true" /><span>Google マップで開く</span><ExternalLinkIcon size={14} strokeWidth={1.5} aria-hidden="true" /></ExternalLink><ExternalLink href={siteData.links.tabelog} className={`text-link ${styles.accessTextLink}`} showArrow={false}><span>食べログで店舗情報を見る</span><ExternalLinkIcon size={14} strokeWidth={1.5} aria-hidden="true" /></ExternalLink></div>
          <ResponsiveImage className={styles.accessExterior} src={imageAssets.access.exterior} small={imageAssets.access.exteriorSmall} alt="夜のりんどうの外観" width={1600} height={1200} />
        </div>
        <img className={styles.accessDecoration} src={assetPath("/images/decor/botanical/05-corner-botanical-spray.webp")} width="1086" height="1448" alt="" aria-hidden="true" loading="lazy" />
      </div></section>

      <section className={`${styles.finalCta} section-dark`} id="reservation" aria-labelledby="reservation-title">
        <picture className={styles.finalCtaImage}>
          <source media="(max-width: 768px)" srcSet={assetPath(imageAssets.ctaMobile)} />
          <img src={assetPath(imageAssets.cta)} alt="" width="2056" height="765" loading="lazy" />
        </picture>
        <div className={`${styles.finalGrid} container`}>
          <div className={styles.finalCopy}><p className={styles.eyebrow}>RESERVATION</p><h2 id="reservation-title">今夜の席を、<br />りんどうで。</h2><p>料理と酒をゆっくり楽しむ夜を、食べログからご予約いただけます。</p><p className={styles.sample}>{siteData.sampleLabel}</p></div>
          <div className={styles.finalActions}><ExternalLink href={siteData.links.reservation} className="button button-primary button-large" showArrow={false}><span>食べログで予約</span><ExternalLinkIcon size={15} strokeWidth={1.5} aria-hidden="true" /></ExternalLink><ExternalLink href={siteData.links.instagram} className="text-link text-link-light" showArrow={false}><span>Instagramで最新情報を見る</span><ExternalLinkIcon size={14} strokeWidth={1.5} aria-hidden="true" /></ExternalLink></div>
        </div>
      </section>
    </main>

    <footer className={`${styles.footer} section-dark`}><div className={`${styles.footerInner} container`}>
      <div className={styles.footerBrand}><img src={assetPath(imageAssets.brand.footer)} width="3072" height="2048" alt="りんどう 西荻窪 お酒と料理" loading="lazy" /></div>
      <div className={styles.footerInfo}>
        <p className={styles.footerStoreName}>りんどう</p>
        <p>{siteData.address}</p>
        <p className={styles.footerAccess}>西荻窪駅 北口から徒歩4分</p>
        <nav className={styles.footerExternal} aria-label="店舗外部リンク"><ExternalLink href={siteData.links.instagram}>Instagram</ExternalLink><ExternalLink href={siteData.links.tabelog}>食べログ</ExternalLink><ExternalLink href={siteData.links.map}>Google Map</ExternalLink></nav>
      </div>
      <nav className={styles.footerNav} aria-label="フッターナビゲーション">
        <a href="#food">FOOD</a><a href="#menu">MENU</a><a href="#drinks">WINE &amp; SAKE</a><a href="#space">SPACE</a><a href="#access">ACCESS</a>
      </nav>
      <div className={styles.footerBottom}><p>{siteData.sampleLabel}</p><p><small>© 2026 Rindo sample proposal.</small></p></div>
      <img className={styles.footerDecoration} src={assetPath("/images/decor/botanical/05-corner-botanical-spray.webp")} width="1086" height="1448" alt="" aria-hidden="true" loading="lazy" />
    </div></footer>

    <ExternalLink href={siteData.links.reservation} className={styles.mobileFixedCta}>食べログで予約</ExternalLink>
  </>;
}
