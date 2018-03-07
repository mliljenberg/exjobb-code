import { createSelector } from 'reselect';

/**
 * Direct selector to the qq state domain
 */
const selectQqDomain = (state) => state.get('qq');
const selectStore = (state) => state;

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
const makeSelectStore = () => createSelector(
  selectStore,
  (substate) => substate.toJS()
);

export default makeSelectQq;
export {
  selectQqDomain,
  selectStore,
  makeSelectStore,
};
