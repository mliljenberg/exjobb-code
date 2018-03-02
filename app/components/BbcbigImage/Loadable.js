/**
 *
 * Asynchronously loads the component for BbcbigImage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
