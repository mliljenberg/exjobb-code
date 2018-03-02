/**
 *
 * Asynchronously loads the component for Bbcheader
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
