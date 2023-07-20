import { ReactComponent as CreativeIcon } from '../assets/questionnaire/1-creative.svg';
import { ReactComponent as BusinessIcon } from '../assets/questionnaire/1-business.svg';
import { ReactComponent as MarketerIcon } from '../assets/questionnaire/1-marketer.svg';
import { ReactComponent as SearchIcon } from '../assets/questionnaire/2-search.svg';
import { ReactComponent as SocialIcon } from '../assets/questionnaire/2-social.svg';
import { ReactComponent as InfluencerIcon } from '../assets/questionnaire/2-influencer.svg';
import { ReactComponent as MyBusinessIcon } from '../assets/questionnaire/3-business.svg';
import { ReactComponent as ClientIcon } from '../assets/questionnaire/3-client.svg';
import { ReactComponent as CuriousIcon } from '../assets/questionnaire/3-curious.svg';

export const QuestionnairePages = [
  {
    title: 'What role describes you best?',
    key: 'occupation',
    options: [
      {
        title: 'Creative Professional',
        subtitle: 'Logo Designer, Graphic Designer, digital artist...',
        icon: CreativeIcon,
      },
      {
        title: 'Business',
        subtitle: 'Startup, Small Business, Entrepreneur...',
        icon: BusinessIcon,
      },
      {
        title: 'Marketer/Brand Manager',
        subtitle: 'Creative Agency, Advertising agency, large brand...',
        icon: MarketerIcon,
      },

    ]
  },
  {
    title: 'How did you hear about logo diffusion?',
    key: 'discovery',
    options: [
      {
        title: 'Search Engine',
        subtitle: 'Through searching in the web, Google, Bing...',
        icon: SearchIcon,
      },
      {
        title: 'Social Media',
        subtitle: 'In social media, Instagram, Twitter, TikTok...',
        icon: SocialIcon,
      },
      {
        title: 'Influencer / Newsletter',
        subtitle: 'Influencer mentioned it, Saw it on a newsletter/A.I tools website',
        icon: InfluencerIcon,
      },

    ]
  },
  {
    title: 'What role describes you best?',
    key: 'usageExplanation',
    options: [
      {
        title: 'Design a logo for my business',
        subtitle: 'Creating a logo for a new or existing business',
        icon: MyBusinessIcon,
      },
      {
        title: 'Design a logo for a client',
        subtitle: 'Logo Design projects for my clients',
        icon: ClientIcon,
      },
      {
        title: 'Curious about new A.I tools',
        subtitle: 'Just experimenting with new A.I design tools.',
        icon: CuriousIcon,
      },
    ]
  },
]
