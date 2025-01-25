import { FC } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  imageSeo?: string;
  url: string;
  type?: "website" | "article" | "product";
  schema?: object;
  noIndex?: boolean;
  noFollow?: boolean;
}

export const Seo: FC<SEOProps> = ({
  title,
  description,
  keywords,
  imageSeo,
  url,
  type = "website",
  schema,
  noIndex = false,
  noFollow = false,
}) => {
  const robotsContent = `${noIndex ? "noindex" : "index"}, ${noFollow ? "nofollow" : "follow"}`;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content={robotsContent} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        <meta property="og:url" content={url} />
        {imageSeo && <meta property="og:image" content={imageSeo} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {imageSeo && <meta name="twitter:image" content={imageSeo} />}
        <link rel="canonical" href={url} />
        {schema && (
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        )}
      </Helmet>
    </HelmetProvider>
  );
};
