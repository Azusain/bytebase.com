import ROUTE from '@/lib/route';

const PROMO_DATA = {
  TOP_BANNER: {
    title: '⭐️ All the database tools Bytebase replaces',
    pathname: `/blog/all-database-tools-bytebase-replaces/?source=top-banner`,
  },
  BLOG_ASIDE: {
    title: 'What is Bytebase?',
    description:
      'A web-based collaboration workspace to help DBAs and Developers manage the database development lifecycle.',
    cta: 'See Features',
    pathname: `${ROUTE.PRICING}?source=blog`,
  },
  DOC_ASIDE: {
    title: '🕹️ Live Demo',
    description: 'We have prepared a guided live demo for you to play with.',
    cta: 'View Now',
    pathname: `${ROUTE.VIEW_LIVE_DEMO}?source=docs`,
  },
};

export default PROMO_DATA;
