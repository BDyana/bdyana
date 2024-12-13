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
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR6Z9978');</script>
<!-- End Google Tag Manager -->
        <meta
          name="facebook-domain-verification"
          content="pzi59zqi0qrjrv2rbtdiflwivnynhz"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
