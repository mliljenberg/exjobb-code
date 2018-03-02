/**
 *
 * Asynchronously loads the component for PageTest
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
