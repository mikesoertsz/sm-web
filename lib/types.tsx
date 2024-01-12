export type TitleC = {
  icon?: string | React.ReactNode | JSX.Element;
  image?: string;
  preheading?: string;
  heading?: React.ReactNode[] | string | string[] | JSX.Element;
  subheading?: string | React.ReactNode | string[] | JSX.Element;
  body?: string;
  body2?: string;
};

export type TitleHeader = {
  content: {
    icon?: React.ReactNode;
    image?: string;
    preheading?: string;
    heading?: React.ReactNode[] | React.ReactNode | string | string[];
    subheading?: string | React.ReactNode | string[] | JSX.Element;
    body?: string | React.ReactNode | React.ReactNode[];
    body2?: string;
  };
};

// AIDA framework Landing page content
export type Attention = {
  hero: {
    header: TitleC;
    buttons: {
      primary: {
        text: string;
        url: string;
      };
      secondary: {
        text: string;
        url: string;
      };
    };
  };
  breadcrumbs: {
    label: string;
    href: string;
    color?: string;
  }[];
  valueprop: any; // Needs further specification
  trustbadges: any[]; // Needs further specification
};

export type Interest = {
  approach: {
    header: TitleC;
    list: {
      preheading: string;
      icon: React.ReactNode;
      title: string;
      subtitle: string;
      description_long: string;
    }[];
    grid: {
      preheading: string;
      icon: React.ReactNode;
      title: string;
      subtitle: string;
      description: string;
    }[];
    banner: {
      narrow?: {
        text?: string;
        url?: string;
      };
      mid?: {
        text?: string | React.ReactNode;
        url?: string;
        ctatext?: string | React.ReactNode;
        ctaurl?: string;
      };
    };
  };
  benefits: {
    header: TitleC;
    list: {
      icon: string | React.ReactNode;
      imageURL: string;
      pretitle: string;
      title: string;
      subtitle: string;
      description: string;
    }[];
  };
  deliverables: {
    header: TitleC;
    overall: {
      icon: React.ReactNode | string;
      title: string;
      imageURL: string;
      description: string;
    }[];
    strategy: {
      icon: string;
      url: string;
      title: string;
      description: string;
      category: string | string[];
    }[];
    design: {
      icon: string;
      url: string;
      title: string;
      description: string;
      category: string | string[];
    }[];
    development: {
      icon: string;
      url: string;
      title: string;
      description: string;
      category: string | string[];
    }[];
  };
  ourtech: {
    header: TitleC;
    list: {
      name: string;
      icon: string | React.ReactNode | JSX.Element;
      longdesc: string;
      size: number;
      active: boolean;
      category: string;
    }[];
  };
  small: {
    title: string | React.ReactNode;
    body: string | React.ReactNode;
  };
  services: {
    header: TitleC;
    buttons: {
      variant: string;
      text: string;
      url: string;
    }[];
    servicesList: {
      preheading: string;
      icon: string | React.ReactNode;
      title: string;
      description_short: string | React.ReactNode | string[] | JSX.Element;
      description_long: string;
      url: string;
      image: string;
      list: string[];
      darkMode: boolean;
    }[];
  };
  testimonials: {
    quote: string;
    statistic: {
      value: string;
      description: string;
    };
    name: string;
    avatar: string;
    role: string;
  }[];
};

export type Desire = {
  faq: {
    header: TitleC;
    questions: {
      question: string;
      answer: string | React.ReactNode | JSX.Element;
      value: string;
    }[];
  };
  stinger_footer: {
    list: string[];
  };
};

export type Action = {
  cta: {
    header: TitleC;
    buttons: {
      variant: string;
      text: string;
      url: string;
      icon: string | React.ReactNode;
    }[];
  };
  pricing: {
    header: TitleC;
    list: {
      icon: string;
      imgHeight: string;
      imgWidth: string;
      title: string;
      description: string;
      price: number;
      pricefrequency: string;
      subtitle: string;
      included: string[];
      ctatext: string | string[];
      ctaurl: string;
      whofor: string;
      slots: number;
    }[];
  };
};
