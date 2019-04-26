import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import routerConfig from '../../routerConfig';

class MainRoutes extends Component {
  /**
   * 渲染路由组件
   */
  renderNormalRoute = (item, index) => {
    return item.component ? (
      <Route
        key={index}
        path={item.path}
        component={item.component}
        exact={item.exact}
      />
    ) : null;
  };

  render() {
    return (
      <Switch>
        {/* 渲染路由表 */}
        {routerConfig.map(this.renderNormalRoute)}

        {/* 首页默认重定向到 /dashboard */}
        <Redirect exact from="/" to="/dashboard" />
      </Switch>
    );
  }
}

export default MainRoutes;
