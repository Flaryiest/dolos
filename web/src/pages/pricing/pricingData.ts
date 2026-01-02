export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  buttonText: string;
  buttonType: 'primary' | 'secondary' | 'enterprise';
  features: Feature[];
  isFeatured?: boolean;
  isEnterprise?: boolean;
  badge?: string;
}

export interface Feature {
  text: string;
  icon: 'check' | 'plus';
  badge?: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Essential assignment templates and outlines to get you started.',
    monthlyPrice: 0,
    annualPrice: 0,
    buttonText: 'Get Started Free',
    buttonType: 'secondary',
    features: [
      {
        text: 'Assignment templates & outlines',
        icon: 'check'
      },
      {
        text: 'Basic research scaffolding',
        icon: 'check'
      },
      {
        text: 'Limited AI responses (5 per day)',
        icon: 'check'
      },
      {
        text: 'Standard response speed',
        icon: 'check'
      },
      {
        text: 'Community support',
        icon: 'check'
      }
    ]
  },
  {
    id: 'core',
    name: 'Core',
    description: 'Full functionality with moderate limits for dedicated students.',
    monthlyPrice: 10,
    annualPrice: 100,
    buttonText: 'Start Core',
    buttonType: 'primary',
    isFeatured: true,
    badge: 'Most Popular',
    features: [
      {
        text: 'Full AI Research Assistant',
        icon: 'check'
      },
      {
        text: 'AI Presentation Creation',
        icon: 'check'
      },
      {
        text: 'Essay & Assignment Scaffolds',
        icon: 'check'
      },
      {
        text: 'Rich text editor with AI detection',
        icon: 'check'
      },
      {
        text: 'Source summaries & citations',
        icon: 'check'
      },
      {
        text: 'Progress tracking & completion checks',
        icon: 'check'
      },
      {
        text: 'Faster response times',
        icon: 'check',
        badge: '≤30 sec'
      },

      {
        text: 'Plus everything in Free',
        icon: 'plus'
      }
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Enhanced fine-tuning and variety with generous limits.',
    monthlyPrice: 30,
    annualPrice: 300,
    buttonText: 'Go Premium',
    buttonType: 'secondary',
    features: [
      {
        text: 'Advanced AI fine-tuning options',
        icon: 'check'
      },
      {
        text: 'Extended template variety',
        icon: 'check'
      },
      {
        text: 'Custom presentation styles',
        icon: 'check'
      },
      {
        text: 'Rubric-based grading assistance',
        icon: 'check'
      },
      {
        text: 'Exemplar analysis & comparison',
        icon: 'check'
      },
      {
        text: 'Script & cue card generation',
        icon: 'check'
      },
      {
        text: 'Priority support',
        icon: 'check'
      },
      {
        text: 'Plus everything in Core',
        icon: 'plus'
      }
    ]
  }
];
