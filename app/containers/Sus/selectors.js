import { createSelector } from 'reselect';

/**
 * Direct selector to the sus state domain
 */
const selectSusDomain = (state) => state.get('sus');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Sus
 */

const makeSelectSus = () => createSelector(
  selectSusDomain,
  (substate) => substate.toJS()
);

export default makeSelectSus;
export {
  selectSusDomain,
};
