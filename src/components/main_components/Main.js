import React from 'react'

import { TransitionSwitch, TransitionRoute } from '../router';

import TransitionGroupPlus from 'react-transition-group-plus';
import {findDOMNode} from 'react-dom';

import Home from '../pages/Home';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  render() {
    return (
        <main className="base">

          <TransitionSwitch>
            <TransitionRoute exact path="/" render={ (props) => <Home {...props} />} key="index-page" />
          </TransitionSwitch>

        </main>
    )
  }
}

