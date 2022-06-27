import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  constructor(props) {
    super(props);
    this.state = { blodyClass: "day" };
  }
  render() { 
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
            
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "http://schema.org/",
                "@type": "Organization",
                "name": "KUPIBAS GROUP",
                "logo": "https://собственный-пляж.рф/night/logo.svg",
                "url": "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Особенная 116",
                  "addressLocality": "Ростов-на-Дону",
                  "postalCode": "344064",
                  "addressCountry": "Russia"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "8 (800) 350-75-60",
                  "email" : "info@kupibas.ru",
                  "contactType": "customer service",
                  "areaServed": "RU",
                  "availableLanguage": "Russian"
                },  
                "image" : [ "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/biodisign1.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/biodisign2.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/biodisign13.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/oldFoto/image%2021.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/newFoto/Rectangle123.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/oldFoto/2.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/newFoto/3.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/oldFoto/4.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/newFoto/5.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/oldFoto/6.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/newFoto/7.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/oldFoto/8.jpg", "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai/biodisign/newFoto/9.jpg" ]

                
              })
           }}
      />
            
        </Head>
        <body id="bidyMain">
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

 