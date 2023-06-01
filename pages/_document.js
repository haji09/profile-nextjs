import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll scroll-smooth">
      <Head />

      <body className=" bg-slate-300  p-4  md:p-5">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
