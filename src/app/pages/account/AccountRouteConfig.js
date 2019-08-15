import ChangePassword from './ChangePassword';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';
import { AuthorizationPermission } from '../../resources/AuthorizationPermission';

export const AuthRouteConfig = {
    permission : AuthorizationPermission.AUTHENTICATED,
    routes  : [
        {
            path     : '/account/change-password',
            component: ChangePassword
        },
        {
            path     : '/account/profile',
            component: Profile
        },
        {
            path     : '/account/update-profile',
            component: UpdateProfile
        },
    ]
};