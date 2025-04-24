import Head from "next/head";

export default function Custom404() {
  return (
    <div className="center">
      <Head>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist."
        />
      </Head>
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
