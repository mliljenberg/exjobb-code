import { createSelector } from 'reselect';

/**
 * Direct selector to the qq state domain
 */
const selectQqDomain = (state) => state.get('qq');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Qq
 */

const makeSelectQq = () => createSelector(
  selectQqDomain,
  (substate) => substate.toJS()
);

export default makeSelectQq;
export {
  selectQqDomain,
};
