import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Head from "next/head";
import Header from "@/components/layout/Header";
import { NextIntlClientProvider } from "next-intl";
import { cookies } from "next/headers";
import { defaultMetadata } from "@/constants/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const allCookies = await cookies()
  const locale = await allCookies?.get("NEXT_LOCALE")?.value || "en";
  return defaultMetadata[locale];
}

export default async function RootLayout({ children }) {
  const allCookies = await cookies()
  const locale = await allCookies?.get("NEXT_LOCALE")?.value || "en";
  const dir = locale === "fa" ? "rtl" : "ltr";

  const messages = await import(`../../i18n/locales/${locale}.json`).then(
    (mod) => mod.default || mod
  );

  return (
    <html lang={locale} dir={dir}>
      <Head>
        <link rel="manifest" href="/images/favicon/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/ms-icon-144x144.png"
        />
      </Head>

      <NextIntlClientProvider messages={messages} locale={locale}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
          <Header />
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
