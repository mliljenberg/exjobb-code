/**
 *
 * Asynchronously loads the component for HyperLink
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
