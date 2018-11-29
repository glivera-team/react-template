import React from 'react';
import { Route } from 'react-router-dom';

class TransitionRoute extends Route {
  componentWillAppear (cb) {
    if (this.refs.child && this.refs.child.componentWillAppear) {
      console.log('Route appear');
      this.refs.child.componentWillAppear(cb);
    } else {
      cb();
    }
  }
  
  componentWillEnter (cb) {
    if (this.refs.child && this.refs.child.componentWillEnter) {
      console.log('Route enter');
      this.refs.child.componentWillEnter(cb);
    } else {
      cb();
    }
  }
  
  componentWillLeave (cb) {
    if (this.refs.child && this.refs.child.componentWillLeave) {
      console.log('Route leave');
      this.refs.child.componentWillLeave(cb);
    } else {
      cb();
    }
  }
  
  render () {
    const { match } = this.state
    const { children, component, render } = this.props
    const { history, route, staticContext } = this.context.router
    const location = this.props.location || route.location
    const props = { match, location, history, staticContext, ref: 'child' }

    return (
      component ? ( // component prop gets first priority, only called if there's a match
        match ? React.createElement(component, props) : null
      ) : render ? ( // render prop is next, only called if there's a match
        match ? render(props) : null
      ) : children ? ( // children come last, always called
        typeof children === 'function' ? (
          children(props)
        ) : !isEmptyChildren(children) ? (
          React.Children.only(children)
        ) : (
          null
        )
      ) : (
        null
      )
    )
  }
}

export default TransitionRoute;

