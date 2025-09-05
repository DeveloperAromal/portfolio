import Head from "next/head";
interface MetadataProps {
  title: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export default function Metadata({
  title,
  description,
  keywords,
  canonical,
}: MetadataProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
