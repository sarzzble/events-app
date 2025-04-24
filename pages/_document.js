import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
// bu dosya, Next.js uygulamanızın HTML yapısını özelleştirmenizi sağlar. Örneğin, özel fontlar eklemek veya meta etiketleri ayarlamak için kullanabilirsiniz. Bu dosya genellikle uygulamanızın genel yapısını ve stilini belirlemek için kullanılır.
