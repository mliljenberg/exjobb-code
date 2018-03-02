/**
 *
 * Asynchronously loads the component for BbcmainNormalNews
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
