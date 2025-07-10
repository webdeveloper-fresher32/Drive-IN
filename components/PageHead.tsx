import Head from "next/head";

interface PageHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function PageHead({
  title = "Car Rental Dashboard",
  description = "Modern car rental management dashboard built with Next.js, TypeScript, and shadcn/ui components",
  keywords = "car rental, dashboard, nextjs, typescript, shadcn, tailwind, react",
  ogImage = "/logo.svg",
  canonicalUrl,
}: PageHeadProps) {
  const siteTitle = "Car Rental Pro";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const fullCanonicalUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  return (
    <Head>
      <title>OneClickDive - {fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Car Rental Pro" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content={siteTitle} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      <link rel="canonical" href={fullCanonicalUrl} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.svg" />

      <meta name="theme-color" content="#171717" />
      <meta name="msapplication-TileColor" content="#171717" />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Head>
  );
}
