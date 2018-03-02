/**
 *
 * Asynchronously loads the component for BbcsmallCategory
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
