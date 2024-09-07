import { Label } from '../components/label';
import { SvgColor } from '../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  // {
  //   title: 'Dashboard',
  //   path: '/',
  //   icon: icon('ic-analytics'),
  // },
  {
    title: 'IFSC Code',
    path: '/ifsc',
    icon: icon('ic-user'),
  },
  // {
  //   title: 'Blogs',
  //   path: '/products',
  //   icon: icon('ic-cart'),
  //   info: (
  //     <Label color="error" variant="inverted">
  //       +3
  //     </Label>
  //   ),
  // },
  // {
  //   title: 'Quotes',
  //   path: '/sign-in',
  //   icon: icon('ic-lock'),
  // },
  // {
  //   title: 'Blog',
  //   path: '/blog',
  //   icon: icon('ic-blog'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic-disabled'),
  // }, 
];
