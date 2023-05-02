import Layout from '@/components/Layout/Layout';
import MainContext from '@/contexts/MainContext';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Inter, Kaisei_Decol, Kaisei_HarunoUmi, Kaisei_Opti, Kaisei_Tokumin } from 'next/font/google'
import Head from 'next/head';

// interface Props with AppProps
type IProps = AppProps & {
  Component: {
    Layout?: "default" | "none"
  }
}


const inter = Inter({ subsets: ['latin'] })
const kaisei = Kaisei_Decol({
  weight: "400",
  subsets: ['latin']
})


export default function App({ Component, pageProps }: IProps) {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");

  function controlTheme() {
    const themeLocal = localStorage.getItem("theme") as "light" | "dark" | "system" || "system";
    const body = document.querySelector("body") as HTMLBodyElement;
    if (themeLocal === "system") {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.setAttribute("data-theme", "dark");
      } else {
        body.setAttribute("data-theme", "light");
      }
    } else {
      body.setAttribute("data-theme", themeLocal);
    }
    setTheme(themeLocal || "system");
  }


  useEffect(() => {
    controlTheme();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", controlTheme);
  }, []);

  function changeTheme() {
    const themeLocal = localStorage.getItem("theme") as "light" | "dark" | "system" || "system";
    if (themeLocal === "system") {
      localStorage.setItem("theme", "dark");
    } else if (themeLocal === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "system");
    }
    controlTheme();
  }


  return <>
    <MainContext.Provider value={{ theme, changeTheme }}>
      <Head>
        <style>
          {`
            .page-title {
              font-family: ${kaisei.style.fontFamily};
            }
          `}
        </style>

      </Head>
      {Component.Layout === "default" ? <Layout >
        <Component {...pageProps} />
      </Layout> :
        <Component {...pageProps} />
      }
    </MainContext.Provider>
  </>
}
