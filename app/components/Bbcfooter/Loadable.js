/**
 *
 * Asynchronously loads the component for Bbcfooter
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
