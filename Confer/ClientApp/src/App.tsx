import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import './custom.css'
import { SettingsComp } from './components/Settings';
import { SessionInfoContextData, SessionInfoContext } from './services/SessionInfoContext';
import { ViewComponent } from './components/ViewComponent';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <ViewComponent viewModel={SessionInfoContextData} viewContext={SessionInfoContext}>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/settings' component={SettingsComp} />
          <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        </Layout>
      </ViewComponent>
    );
  }
}
