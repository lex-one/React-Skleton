import Error403 from './Error403';
import Error404 from './Error404';
import { AuthorizationPermission } from '../../resources/AuthorizationPermission';

export const ErrorRouteConfig = {
    permission : AuthorizationPermission.PERMIT_ALL,
    routes  : [
        {
            path     : '/403',
            component: Error403
        },
        {
            path     : '/404',
            component: Error404
        }
    ]
};