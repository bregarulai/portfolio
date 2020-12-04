import React from "react";
import { Helmet } from "react-helmet";
import siteImage from "./site.PNG";

const SEO = () => {
  return (
    <Helmet
      title="Flavio Aquino front-end developer Tampa Fl"
      titleTemplate={`%s | Flavio Aquino front-end developer Tampa Fl`}
    >
      <meta
        name="description"
        content="Front-end developer in Tampa Florida area.  Great attitude, excellent team player."
      />
      <meta name="image" content={siteImage} />
      <meta
        name="keywords"
        content="front end developer wesley chapel, front-end developer wesley chapel, front end developer wesley chapel fl, front-end developer wesley chapel fl, front end developer tampa, front-end deverloper tampa, front-end developer tampa fl, front end developer tampa fl, web developer wesley chapel, web developer wesley chapel fl, web developer tampa, web developer tampa fl "
      />

      <meta property="og:url" content="https://www.flavioaquino.com/" />

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content="Flavio Aquino front-end developer Tampa Fl"
      />

      <meta
        property="og:description"
        content="Front-end developer in Tampa Florida area.  Great attitude, excellent team player."
      />

      <meta property="og:image" content={siteImage} />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:creator" content="Flavio Aquino" />

      <meta
        name="twitter:title"
        content="Flavio Aquino front-end developer Tampa Fl"
      />

      <meta
        name="twitter:description"
        content="Front-end developer in Tampa Florida area.  Great attitude, excellent team player."
      />

      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default SEO;
