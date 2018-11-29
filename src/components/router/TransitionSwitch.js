import React from 'react';
import { Switch } from 'react-router-dom';
import matchPath from 'react-router/matchPath';
import TransitionGroup from 'react-transition-group-plus';

class TransitionSwitch extends Switch {
  render() {
    const { route } = this.context.router;
    const { children } = this.props;
    const location = this.props.location || route.location;

    let match, child;
    React.Children.forEach(children, element => {
      if (!React.isValidElement(element)) return;

      const { path: pathProp, exact, strict, from } = element.props;
      const path = pathProp || from;

      if (match == null) {
        child = element;
        match = path
          ? matchPath(location.pathname, { path, exact, strict })
          : route.match;
      }
    });

    return (
      <TransitionGroup  className="main_section" component="div" transitionMode={this.props.transitionMode}>
        {match
          ? React.cloneElement(child, { location, computedMatch: match })
          : null}
      </TransitionGroup>
    );
  }
}

export default TransitionSwitch;
