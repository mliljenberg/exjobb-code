/**
 *
 * Asynchronously loads the component for Bbcshare
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
