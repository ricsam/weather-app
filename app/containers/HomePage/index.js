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
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Search from 'containers/Search';
import Tiles from 'containers/Tiles';
import styled from 'styled-components';

const H1 = styled.h1`

  font-family: Pacifico, sans-serif;
  text-align: center;
  padding-top: 2em;
  padding-bottom: 0.5em;
  color: #4a4a4a;
  font-size: 2em;
`;

import { Container as bsContainer } from 'reactstrap';

const White = styled(bsContainer)`
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid white;
  border-radius: 2px;
  border-width: 1px 1px 0 0;
  max-width: 800px;
  margin-bottom: 15px;
`;

const SearchContainer = styled.div`
  padding-bottom: 2em;
  padding-right: 2%;
  padding-left: 2%;
`;

const MainContainer = styled.div`
  margin-top: 10%;
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MainContainer>
        <White fluid>
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
          <SearchContainer>
            <Search />
          </SearchContainer>
        </White>
        <Tiles />
      </MainContainer>
    );
  }
}
