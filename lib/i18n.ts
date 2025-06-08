import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

// Define translations directly in this file instead of importing
const resources = {
  en: {
    home: {
      hero: {
        badge: "Transform Your Business with AI & Automation",
        title: "Intelligent Automation for Modern Business",
        description:
          "We help businesses streamline operations, reduce costs, and boost productivity through cutting-edge automation and AI solutions.",
        cta: "Get Started Today",
        watchDemo: "Watch Demo",
      },
      stats: {
        projects: "Successful Projects",
        satisfaction: "Client Satisfaction",
        support: "Support Available",
        clients: "Happy Clients",
      },
      about: {
        badge: "About Us",
        title: "Transforming Businesses Through Innovation",
        description:
          "We are a team of passionate technologists dedicated to helping businesses leverage cutting-edge technology to achieve their goals. With years of experience in automation, AI, and custom development, we deliver solutions that drive real results.",
        expertTeam: "Expert Team",
        expertTeamDesc: "Certified professionals",
        provenResults: "Proven Results",
        provenResultsDesc: "150+ successful projects",
      },
      services: {
        badge: "Our Services",
        title: "Comprehensive Solutions",
        subtitle: "We offer a full range of services to help your business thrive",
      },
      projects: {
        badge: "Recent Projects",
        title: "Our Latest Work",
        subtitle: "Discover how we've helped businesses transform their operations with innovative solutions",
      },
      technology: {
        badge: "Technology Stack",
        title: "Built with Modern Technologies",
        subtitle: "We use cutting-edge technologies to deliver robust, scalable, and future-proof solutions",
      },
      testimonials: {
        badge: "Client Success Stories",
        title: "What Our Clients Say",
        subtitle: "Don't just take our word for it",
        client1: {
          name: "Sarah Johnson",
          role: "CEO, TechStart",
          text: "TapUp transformed our business processes completely. The automation solutions they implemented saved us 40% of our operational time.",
        },
        client2: {
          name: "Michael Chen",
          role: "CTO, DataFlow",
          text: "The AI integration they developed increased our productivity by 60%. Professional team with exceptional results.",
        },
        client3: {
          name: "Emma Rodriguez",
          role: "Operations Manager, RetailPlus",
          text: "Outstanding work on our custom development project. They delivered exactly what we needed, on time and within budget.",
        },
      },
      blog: {
        badge: "Latest Insights",
        title: "From Our Blog",
        subtitle: "Stay updated with the latest trends and insights in technology and business automation",
      },
      contact: {
        badge: "Get In Touch",
        title: "Ready to Transform Your Business?",
        subtitle: "Let's discuss how we can help you achieve your goals with our innovative solutions",
        formTitle: "Let's Start a Conversation",
        emailUs: "Email Us",
        callUs: "Call Us",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell us about your project...",
      },
      cta: {
        title: "Ready to Get Started?",
        description: "Join hundreds of businesses that have transformed their operations with our innovative solutions",
        button: "Start Your Project",
      },
      trusted: "Trusted by 50+ companies",
      rating: "rating",
      globalReach: "Global Reach",
    },
    services: {
      automation: {
        title: "Process Automation",
        description: "Streamline your workflows and eliminate repetitive tasks with intelligent automation solutions",
        features: [
          "Workflow Design & Implementation",
          "API Integration & Data Sync",
          "Real-time Monitoring & Analytics",
        ],
      },
      custom: {
        title: "Custom Development",
        description: "Tailored software solutions built specifically for your business needs and requirements",
        features: ["Web & Mobile Applications", "Database Design & Optimization", "Cloud Infrastructure Setup"],
      },
      aiAgents: {
        title: "AI Agents",
        description: "Intelligent AI agents that understand, learn, and act autonomously to enhance your operations",
        features: ["Natural Language Processing", "Machine Learning Models", "Automated Decision Making"],
      },
    },
    common: {
      buttons: {
        getStarted: "Get Started",
        watchDemo: "Watch Demo",
        learnMore: "Learn More",
        viewDetails: "View Details",
        viewAll: "View All",
        readMore: "Read More",
        sendMessage: "Send Message",
        viewWork: "View Our Work",
      },
      status: {
        completed: "Completed",
        inProgress: "In Progress",
      },
      client: "Client",
    },
  },
  he: {
    home: {
      hero: {
        badge: "שנה את העסק שלך עם בינה מלאכותית ואוטומציה",
        title: "אוטומציה חכמה לעסקים מודרניים",
        description:
          "אנחנו עוזרים לעסקים לייעל תהליכים, להפחית עלויות ולהגביר פרודוקטיביות באמצעות פתרונות אוטומציה ובינה מלאכותית מתקדמים.",
        cta: "התחל היום",
        watchDemo: "צפה בהדגמה",
      },
      stats: {
        projects: "פרויקטים מוצלחים",
        satisfaction: "שביעות רצון לקוחות",
        support: "תמיכה זמינה",
        clients: "לקוחות מרוצים",
      },
      about: {
        badge: "אודותינו",
        title: "משנים עסקים באמצעות חדשנות",
        description:
          "אנחנו צוות של טכנולוגים נלהבים שמתמחים בעזרה לעסקים לנצל טכנולוגיה מתקדמת כדי להשיג את המטרות שלהם. עם שנות ניסיון באוטומציה, בינה מלאכותית ופיתוח מותאם, אנחנו מספקים פתרונות שמניעים תוצאות אמיתיות.",
        expertTeam: "צוות מומחים",
        expertTeamDesc: "אנשי מקצוע מוסמכים",
        provenResults: "תוצאות מוכחות",
        provenResultsDesc: "150+ פרויקטים מוצלחים",
      },
      services: {
        badge: "השירותים שלנו",
        title: "פתרונות מקיפים",
        subtitle: "אנחנו מציעים מגוון מלא של שירותים כדי לעזור לעסק שלך לשגשג",
      },
      projects: {
        badge: "פרויקטים אחרונים",
        title: "העבודות האחרונות שלנו",
        subtitle: "גלה איך עזרנו לעסקים לשנות את הפעילות שלהם עם פתרונות חדשניים",
      },
      technology: {
        badge: "מחסנית טכנולוגיות",
        title: "בנוי עם טכנולוגיות מודרניות",
        subtitle: "אנחנו משתמשים בטכנולוגיות מתקדמות כדי לספק פתרונות חזקים, מדרגיים ועמידים בפני עתיד",
      },
      testimonials: {
        badge: "סיפורי הצלחה של לקוחות",
        title: "מה הלקוחות שלנו אומרים",
        subtitle: "אל תסתמכו רק על המילים שלנו",
        client1: {
          name: "שרה ג'ונסון",
          role: 'מנכ"לית, TechStart',
          text: "TapUp שינתה לחלוטין את התהליכים העסקיים שלנו. פתרונות האוטומציה שהם יישמו חסכו לנו 40% מהזמן התפעולי.",
        },
        client2: {
          name: "מיכאל צ'ן",
          role: "מנהל טכנולוגיות, DataFlow",
          text: "האינטגרציה של הבינה המלאכותית שהם פיתחו הגדילה את הפרודוקטיביות שלנו ב-60%. צוות מקצועי עם תוצאות יוצאות דופן.",
        },
        client3: {
          name: "אמה רודריגז",
          role: "מנהלת תפעול, RetailPlus",
          text: "עבודה מעולה על פרויקט הפיתוח המותאם שלנו. הם סיפקו בדיוק מה שהיינו צריכים, בזמן ובתקציב.",
        },
      },
      blog: {
        badge: "תובנות אחרונות",
        title: "מהבלוג שלנו",
        subtitle: "הישאר מעודכן עם הטרנדים והתובנות האחרונים בטכנולוגיה ואוטומציה עסקית",
      },
      contact: {
        badge: "צור קשר",
        title: "מוכן לשנות את העסק שלך?",
        subtitle: "בוא נדבר על איך אנחנו יכולים לעזור לך להשיג את המטרות שלך עם הפתרונות החדשניים שלנו",
        formTitle: "בוא נתחיל שיחה",
        emailUs: "שלח לנו אימייל",
        callUs: "התקשר אלינו",
        nameLabel: "שם",
        namePlaceholder: "השם שלך",
        emailLabel: "אימייל",
        emailPlaceholder: "האימייל שלך",
        messageLabel: "הודעה",
        messagePlaceholder: "ספר לנו על הפרויקט שלך...",
      },
      cta: {
        title: "מוכן להתחיל?",
        description: "הצטרף למאות עסקים ששינו את הפעילות שלהם עם הפתרונות החדשניים שלנו",
        button: "התחל את הפרויקט שלך",
      },
      trusted: "מהימן על ידי 50+ חברות",
      rating: "דירוג",
      globalReach: "טווח גלובלי",
    },
    services: {
      automation: {
        title: "אוטומציית תהליכים",
        description: "ייעל את זרימות העבודה שלך וחסל משימות חוזרות עם פתרונות אוטומציה חכמים",
        features: ["עיצוב ויישום זרימות עבודה", "אינטגרציית API וסנכרון נתונים", "ניטור וניתוח בזמן אמת"],
      },
      custom: {
        title: "פיתוח מותאם",
        description: "פתרונות תוכנה מותאמים הבנויים במיוחד לצרכים ולדרישות העסק שלך",
        features: ["אפליקציות אינטרנט ומובייל", "עיצוב ואופטימיזציה של מסדי נתונים", "הקמת תשתית ענן"],
      },
      aiAgents: {
        title: "סוכני בינה מלאכותית",
        description: "סוכני בינה מלאכותית חכמים שמבינים, לומדים ופועלים באופן עצמאי לשיפור הפעילות שלך",
        features: ["עיבוד שפה טבעית", "מודלים של למידת מכונה", "קבלת החלטות אוטומטית"],
      },
    },
    common: {
      buttons: {
        getStarted: "התחל",
        watchDemo: "צפה בהדגמה",
        learnMore: "למד עוד",
        viewDetails: "צפה בפרטים",
        viewAll: "צפה בכל",
        readMore: "קרא עוד",
        sendMessage: "שלח הודעה",
        viewWork: "צפה בעבודות שלנו",
      },
      status: {
        completed: "הושלם",
        inProgress: "בתהליך",
      },
      client: "לקוח",
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  })

export default i18n
