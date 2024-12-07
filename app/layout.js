// import { Inter } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/Providers";

// import { Roboto } from "next/font/google";
// import { Segoe } from "https://fonts.cdnfonts.com/css/segoe-ui-4";
// @import url('https://fonts.cdnfonts.com/css/segoe-ui-4');
// const segoe = Segoe({ subsets: ["segoe"] });
// const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BDyana.com",
  description: "Shop in hand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="facebook-domain-verification"
          content="pzi59zqi0qrjrv2rbtdiflwivnynhz"
        />
        <meta
          name="google-site-verification"
          content="MZrG05ej8tcAbK1d7W9RCA9JTHIG5Z8zdz_EHKMycfI"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
