import "@/app/globals.css";
import { allMessages, getI18nInstance } from "@/i18n";
import { LinguiClientProvider } from "@/i18n/LinguiClientProvider";
import { initLingui, PageLangParam } from "@/i18n/initLingui";
import { Geist, Geist_Mono } from "next/font/google";
import linguiConfig from "../../../lingui.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}

export async function generateMetadata(props: PageLangParam) {
  const i18n = getI18nInstance((await props.params).lang);

  return {
    title: i18n._("Translation Demo"),
    description: i18n._("A demo of internationalization with Next and Lingui."),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<
  {
    children: React.ReactNode;
  } & PageLangParam
>) {
  const { lang } = await params;
  initLingui(lang);

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={allMessages[lang]}
        >
          {children}
        </LinguiClientProvider>
      </body>
    </html>
  );
}
