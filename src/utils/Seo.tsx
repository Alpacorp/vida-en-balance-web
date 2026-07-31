import { FC } from "react";

import { DEFAULT_SOCIAL_IMAGE, IS_INDEXABLE, toAbsoluteUrl } from "@config/config";

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

/**
 * React 19 hoists <title>, <meta> and <link> into <head> by itself, both in the
 * browser and while prerendering, so no Helmet wrapper is needed. The previous
 * version mounted a second <HelmetProvider> inside every page — a provider
 * nested under the one in main.tsx — which is also what made the tree
 * impossible to render on the server.
 *
 * The JSON-LD <script> is not a hoistable tag, so it stays where it renders.
 * That is fine: Google reads structured data from the body as well as the head.
 */
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
  const indexRule = IS_INDEXABLE && !noIndex ? "index" : "noindex";
  const followRule = noFollow ? "nofollow" : "follow";

  // Social crawlers reject relative og:image values, and every content entry
  // stores its image as a site-relative path. A page without one falls back to
  // the site image rather than shipping no og:image at all, which is what makes
  // a shared link preview as a bare grey box.
  const image = toAbsoluteUrl(imageSeo ?? DEFAULT_SOCIAL_IMAGE);
  const canonical = toAbsoluteUrl(url);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={`${indexRule}, ${followRule}`} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="San Rafael Balance®" />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </>
  );
};
