interface RouteProps {
  href: string;
  label: string;
}

interface ProductProps {
  title: string;
  icon: string;
  description: string;
}

export const routeList: RouteProps[] = [
  {
    href: "/#technology",
    label: "Technology"
  },
  {
    href: "/#solutions",
    label: "Industries"
  },
  {
    href: "/blog",
    label: "Insights"
  },
  {
    href: "/#team",
    label: "Team"
  },
  {
    href: "/#contact",
    label: "Contact"
  }
];

export const productList: ProductProps[] = [
  {
    title: "BizFlow™",
    icon: "Workflow",
    description: "AI-powered workflow automation for complex business processes."
  },
  {
    title: "Q-Grid™",
    icon: "ShieldCheck",
    description: "Post-quantum cryptography infrastructure for enterprise."
  },
  {
    title: "AssetGrid™",
    icon: "Database",
    description: "Hedera-powered real-world asset tokenization."
  },
  {
    title: "Neovibe™",
    icon: "Sparkles",
    description: "Next-generation AI for creative and marketing automation."
  }
];
