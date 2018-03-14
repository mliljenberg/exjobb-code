/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';


import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

import BbcmainNews from '../../components/BbcmainNews';
import BbccategoryHeader from '../../components/BbccategoryHeader';
import BbcCategory from '../../components/BbcCategory';
import BbcratingCategory from '../../components/BbcratingCategory';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <BbcmainNews />
        <BbccategoryHeader />
        <BbcCategory />
        <BbcratingCategory headers={['something', 'something', 'something', 'something', 'something', 'something']} />
      </div>
    );
  }
}

HomePage.propTypes = {
  onLocaleToggle: PropTypes.func,
};
const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: () => dispatch(changeLocale('de')),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
