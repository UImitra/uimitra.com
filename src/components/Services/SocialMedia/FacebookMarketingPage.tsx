import React from 'react';
import { Helmet } from 'react-helmet-async';

const FacebookMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Facebook Marketing Services | Social Media Growth | Uimitra</title>
        <meta name="description" content="Maximize your Facebook presence with Uimitra's expert marketing services. We help businesses grow their audience, increase engagement, and drive conversions through strategic content and targeted advertising." />
        <meta name="keywords" content="facebook marketing, social media marketing, facebook ads, facebook strategy, content marketing, social media growth, facebook business, facebook advertising, community management, social media engagement, Uimitra" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uimitra.com/services/social-media/facebook" />
        <meta property="og:title" content="Facebook Marketing Services | Social Media Growth | Uimitra" />
        <meta property="og:description" content="Maximize your Facebook presence with Uimitra's expert marketing services. We help businesses grow their audience, increase engagement, and drive conversions through strategic content and targeted advertising." />
        <meta property="og:image" content="https://uimitra.com/favicon-uimitra.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://uimitra.com/services/social-media/facebook" />
        <meta name="twitter:title" content="Facebook Marketing Services | Social Media Growth | Uimitra" />
        <meta name="twitter:description" content="Maximize your Facebook presence with Uimitra's expert marketing services. We help businesses grow their audience, increase engagement, and drive conversions through strategic content and targeted advertising." />
        <meta name="twitter:image" content="https://uimitra.com/favicon-uimitra.svg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://uimitra.com/services/social-media/facebook" />
      </Helmet>

      // ... existing code ...
    </>
  );
};

export default FacebookMarketingPage; 