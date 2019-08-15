import React from 'react';
import { Redirect } from 'react-router-dom'
import { UserRouteConfig } from '../pages/user/UserRouteConfig';
import { ErrorRouteConfig } from '../pages/error/ErrorRouteConfig';
import { AuthRouteConfig } from '../pages/auth/AuthRouteConfig';
import AppUtils from '../utils/AppUtils';

const routeConfigs = [
    UserRouteConfig,
    AuthRouteConfig,
    ErrorRouteConfig,
];

const routes = [
    ...AppUtils.resolveRoutes(routeConfigs),
    {
        component: () => <Redirect to="/404"/>
    }
];

export default routes;