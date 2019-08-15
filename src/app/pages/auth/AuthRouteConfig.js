import Login from './Login';
import { AuthorizationPermission } from '../../resources/AuthorizationPermission';

export const AuthRouteConfig = {
    permission : AuthorizationPermission.GUEST,
    routes  : [
        {
            path     : '/login',
            component: Login
        },
        {
            path     : '/auth/login',
            component: Login
        },
    ]
};