/**
 *
 * Asynchronously loads the component for QqsocialMedia
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
