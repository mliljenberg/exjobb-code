/**
 *
 * Asynchronously loads the component for Bbc
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
