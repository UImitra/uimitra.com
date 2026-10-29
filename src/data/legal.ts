/* Legal copy carried over unchanged from the previous site. */

export type LegalDoc = 'privacy' | 'cookies' | 'terms';

export const legal: Record<LegalDoc, { title: string; description: string; path: string; sections: { title: string; body: string[] }[] }> = {
  "privacy": {
    "title": "Privacy policy",
    "description": "How UImitra collects, uses and protects your information.",
    "path": "/privacy-policy",
    "sections": [
      {
        "title": "Introduction",
        "body": [
          "At Uimitra, we are committed to protecting your privacy and ensuring transparency about how your data is used. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data when you use our website and services.",
          "By using our services, you agree to the terms of this Privacy Policy. If you have any questions, please contact us at info@uimitra.com."
        ]
      },
      {
        "title": "Data We Collect",
        "body": [
          "• Personal information (name, email, phone, company, etc.) you provide via forms or sign-up.",
          "• Payment and billing information (if you purchase services).",
          "• Usage data (pages visited, actions taken, device/browser info).",
          "• Cookies and similar tracking technologies for analytics and personalization.",
          "• Communications and feedback you send to us.",
          "• Data from third-party integrations (e.g., Google, LinkedIn sign-in) if you use them."
        ]
      },
      {
        "title": "How We Use Your Data",
        "body": [
          "• To provide, maintain, and improve our services and website.",
          "• To communicate with you about your account, projects, or inquiries.",
          "• To personalize your experience and deliver relevant content.",
          "• To analyze usage and improve our offerings.",
          "• To comply with legal obligations and protect our rights.",
          "• For marketing, research, and product improvement (with your consent where required).",
          "• To prevent fraud, abuse, or security issues."
        ]
      },
      {
        "title": "How We Share Information",
        "body": [
          "• With trusted service providers who help us operate our business (e.g., hosting, analytics, payment processors).",
          "• With your consent or at your direction.",
          "• When required by law or to protect our rights and safety.",
          "• In connection with a business transfer (e.g., merger, acquisition).",
          "• With business partners for joint offerings (with notice and consent where required).",
          "• We do not sell your personal data to third parties."
        ]
      },
      {
        "title": "Cookie Policy",
        "body": [
          "We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.",
          "• Essential cookies: Required for basic site functionality.",
          "• Analytics cookies: Help us understand site usage and improve our services.",
          "• Marketing cookies: Used to deliver relevant ads and measure campaign effectiveness.",
          "You can manage or disable cookies through your browser settings. For more details, see our Cookie Policy (if available)."
        ]
      },
      {
        "title": "Data Retention",
        "body": [
          "We retain your personal data only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.",
          "• Account data is retained while your account is active and for a reasonable period afterward.",
          "• Data related to transactions is kept for tax and legal compliance.",
          "• We regularly review and securely delete or anonymize data that is no longer needed."
        ]
      },
      {
        "title": "Security",
        "body": [
          "We implement appropriate technical and organizational measures to protect your data, including:",
          "• Encryption of data in transit and at rest where possible.",
          "• Access controls and authentication for staff and systems.",
          "• Regular security assessments and monitoring.",
          "• Incident response procedures in case of a breach.",
          "While we strive to protect your data, no method of transmission or storage is 100% secure. If you have security concerns, please contact us."
        ]
      },
      {
        "title": "Your Rights",
        "body": [
          "• You can access, update, or delete your personal information by contacting us.",
          "• You can opt out of marketing emails at any time using the unsubscribe link.",
          "• You can manage cookies through your browser settings.",
          "• You have the right to object to or restrict certain processing of your data.",
          "• You may request data portability (a copy of your data in a machine-readable format).",
          "• If you are in the EU/EEA, you have rights under the GDPR. If you are in California, you have rights under the CCPA.",
          "• To exercise your rights, contact us at info@uimitra.com."
        ]
      },
      {
        "title": "Other Important Information",
        "body": [
          "• We may update this Privacy Policy from time to time. Changes will be posted on this page.",
          "• Our website may contain links to third-party sites. We are not responsible for their privacy practices.",
          "• For more details, contact us at info@uimitra.com.",
          "• International transfers: Your data may be processed outside your country. We ensure appropriate safeguards are in place for such transfers."
        ]
      },
      {
        "title": "Contact Us",
        "body": [
          "If you have any questions or concerns about this Privacy Policy or your data, please contact us:",
          "• Email: info@uimitra.com",
          "• Address: E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka, India - 560103"
        ]
      }
    ]
  },
  "cookies": {
    "title": "Cookie policy",
    "description": "What cookies uimitra.com uses and how to control them.",
    "path": "/cookie-policy",
    "sections": [
      {
        "title": "What are cookies?",
        "body": [
          "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, improve user experience, and provide information to site owners."
        ]
      },
      {
        "title": "How We Use Cookies",
        "body": [
          "To enable essential site functionality (e.g., navigation, forms, security).",
          "To remember your preferences and settings.",
          "To analyze site usage and improve our services.",
          "To deliver personalized content and marketing (with your consent where required)."
        ]
      },
      {
        "title": "Types of Cookies We Use",
        "body": [
          "Essential cookies: Required for the website to function properly.",
          "Analytics cookies: Help us understand how visitors interact with our site.",
          "Preference cookies: Remember your choices and settings.",
          "Marketing cookies: Used to deliver relevant ads and track campaign effectiveness."
        ]
      },
      {
        "title": "Managing Cookies",
        "body": [
          "You can manage or disable cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of our website.",
          "For more information, visit your browser's help section.",
          "To opt out of analytics cookies, you may use browser add-ons or privacy settings."
        ]
      },
      {
        "title": "Contact",
        "body": [
          "If you have any questions about our Cookie Policy, please contact us at info@uimitra.com."
        ]
      }
    ]
  },
  "terms": {
    "title": "Terms & conditions",
    "description": "The terms for using the UImitra website and services.",
    "path": "/terms",
    "sections": [
      {
        "title": "What are the Terms & Conditions for using Uimitra?",
        "body": [
          "By accessing or using Uimitra, you agree to follow these Terms & Conditions. If you do not agree, please do not use our services. These terms may be updated from time to time, and continued use means you accept any changes."
        ]
      },
      {
        "title": "What are my responsibilities as a user?",
        "body": [
          "You must provide accurate information, keep your login details secure, and use Uimitra only for lawful purposes. Do not attempt to hack, disrupt, or misuse the platform. You are responsible for all activity under your account."
        ]
      },
      {
        "title": "Who owns the content and intellectual property?",
        "body": [
          "All content, branding, and intellectual property on Uimitra belong to us or our licensors. You may not copy, share, or use our content without written permission. Content you create remains yours, but you grant us a license to use it for providing our services."
        ]
      },
      {
        "title": "What are the limitations of liability?",
        "body": [
          "Uimitra is provided as-is. We do not guarantee uninterrupted or error-free service. We are not liable for any indirect, incidental, or consequential damages resulting from your use of the platform."
        ]
      },
      {
        "title": "Can my access be terminated?",
        "body": [
          "We may suspend or terminate your account at any time if you violate these terms, misuse the platform, or act in a way that harms other users or our business. We may also remove content that violates our policies."
        ]
      },
      {
        "title": "What law governs these terms?",
        "body": [
          "These Terms & Conditions are governed by the laws of India. Any disputes will be resolved in the courts of Bengaluru, Karnataka, India."
        ]
      },
      {
        "title": "How can I contact Uimitra?",
        "body": [
          "If you have questions or concerns about these Terms & Conditions, email us at info@uimitra.com."
        ]
      }
    ]
  }
};
