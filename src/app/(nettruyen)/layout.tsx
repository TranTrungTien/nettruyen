import Link from "next/link";
import { Inter } from "next/font/google";
import MainNav from "@/components/nettruyen/layout/main-nav";
import Header from "@/components/nettruyen/layout/header";
import { Constants } from "@/constants";
import "@/styles/nettruyen/index.scss";
import { twMerge } from "tailwind-merge";
import { LayoutWrapper } from "@/components/LayoutWrapper";
import { Metadata } from "next";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: `${Constants.APP_NAME} - Truyện tranh chất lượng cao không quảng cáo`,
  description: ` ${Constants.APP_NAME} – web đọc truyện tranh online miễn phí lớn nhất, cập nhật nhanh chóng các truyện tranh hot, truyện tranh hay nhất. Đọc truyện tranh full online và 
                thảo luận với hơn 10 triệu thành viên tại ${Constants.APP_NAME}!`,
  applicationName: Constants.APP_NAME,
  authors: [{ name: "Truyện tranh NetTruyen", url: "https://nettruyen-lac.vercel.app/" }],
  keywords:[
    "nettruyen",
    "truyện tranh",
    "đọc truyện tranh",
    "truyện tranh online",
    "nettruyen tv",
    "truyện tranh full",
    "truyện tranh hay nhất",
    "truyện tranh nettruyen",
    "đọc truyện tranh online",
    "nettruyen vn",
    "nettruyen mới",
    "nettruyen tổng tài",
    "truyện nettruyen",
    "web đọc truyện tranh",
    "đọc truyện tranh nettruyen"
  ],
  robots: "follow, index",
  metadataBase: new URL(Constants.APP_URL),
  other: {
    referrer: "same-origin",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function NettruyenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const copyrightYear = new Date().getFullYear();
  return (
    <LayoutWrapper id="nettruyen">
      <NextTopLoader
        zIndex={1000}
        easing="ease-in-out"
        speed={400}
        height={4}
        showSpinner={false}
        template={`
        <div class="bar bg-web-title" role="bar"><div class="peg"></div></div> 
  <div class="spinner text-web-title" role="spinner"><div class="spinner-icon"></div></div>`}
      />
      <Suspense>
        <Header />
      </Suspense>
      <nav className="main-nav hidden-xs" id="mainNav">
        <div className="inner">
          <div className="container">
            <div className="py-4">
              <MainNav />
            </div>
          </div>
        </div>
      </nav>
      <main className={twMerge("main text-foreground", inter.className)}>
        <div className="container">{children}</div>
      </main>
      <footer className="footer border-t bg-[#000]">
        <div className="container">
          <div className="row">
            <div
              className="col-sm-4 copyright"
              itemType="http://schema.org/Organization"
            >
              <Link itemProp="url" href="/">
                <img
                  itemProp="logo"
                  src={"/nettruyen/images/logo-nettruyen.png"}
                  style={{ aspectRatio: 5 }}
                  alt={`${Constants.APP_NAME} - Truyện tranh Online`}
                />
              </Link>
              <div className="mrt10 row">
                <div className="col-xs-6">
                  {/* <a
                    href="https://mangadex.org/about"
                    rel="nofollow noopener"
                    target="_blank"
                  >
                    MangaDex
                  </a> */}
                </div>
                {/* <div className="col-xs-6">
                      <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
                    </div> */}
              </div>
              <p></p>
              <p>
                Copyright © {copyrightYear}
                <Link
                  href="/"
                  className="text-web-title transition hover:!bg-transparent hover:bg-web-titleLighter hover:underline"
                >
                  {Constants.APP_NAME}
                </Link>
              </p>
            </div>
            <div className="col-sm-8">
              <div className="link-footer">
                <h4>Từ khóa</h4>
                <ul>
                  <li>
                    <Link target="_self" href="/">
                      Truyện tranh
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      Truyen tranh online
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      Đọc truyện tranh
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_self"
                      href={`${Constants.Routes.nettruyen.search}?order[followedCount]=desc#results`}
                    >
                      Truyện tranh hot
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      Truyện tranh hay
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_self"
                      href={`${Constants.Routes.nettruyen.search}?publicationDemographic=josei&publicationDemographic=shoujo#results`}
                    >
                      Truyện ngôn tình
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      Manhwa
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      Manga
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      Manhua
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      truyenqq
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      mi2manga
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      doctruyen3q
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      toptruyen
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      cmanga
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      vlogtruyen
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      blogtruyen
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      truyentranhaudio
                    </Link>
                  </li>
                  <li>
                    <Link target="_self" href="/">
                      vcomi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </LayoutWrapper>
  );
}