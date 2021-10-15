import Head from 'next/head';

type Props = {
  title: string;
  metatitle: string;
  description: string;
  url?: string;
  keywords?: string;
  ogImage?: string;
};

export const SEO = ({
  title,
  metatitle,
  description,
  url,
  keywords,
  ogImage,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="title" content={metatitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default SEO;
