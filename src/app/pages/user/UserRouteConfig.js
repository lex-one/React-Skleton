import ManageUser from './ManageUser';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import RegisterUser from './RegisterUser';
import { ROLE } from '../../resources/Role';
import { AuthorizationPermission } from '../../resources/AuthorizationPermission';

const rootPermission = [ROLE.ADMINISTRATOR]; //can access all resource
export const UserRouteConfig = {
    permission : rootPermission,
    routes  : [
        {
            path     : '/users/',
            component: ManageUser,
        },
        {
            path     : '/user/add',
            component: AddUser,
        },
        {
            path     : '/user/update/:id',
            component: UpdateUser,
        },
        {
            path     : '/user/register',
            component: RegisterUser,
            permission: AuthorizationPermission.GUEST //override permission
        }
    ]
};