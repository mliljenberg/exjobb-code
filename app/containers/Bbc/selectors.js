import { createSelector } from 'reselect';

/**
 * Direct selector to the bbc state domain
 */
const selectBbcDomain = (state) => state.get('bbc');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Bbc
 */

const makeSelectBbc = () => createSelector(
  selectBbcDomain,
  (substate) => substate.toJS()
);

export default makeSelectBbc;
export {
  selectBbcDomain,
};
