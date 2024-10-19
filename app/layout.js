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
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1183341726099321');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1183341726099321&ev=PageView&noscript=1"
/></noscript>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
