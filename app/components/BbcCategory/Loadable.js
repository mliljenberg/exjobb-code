/**
 *
 * Asynchronously loads the component for BbcCategory
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
