import { AuthorizationPermission } from "../resources/AuthorizationPermission";

class AppUtils {
    static hasPermission(requiredPermission, user) {
        if(requiredPermission == null){
            return true;
        }
        if(requiredPermission === AuthorizationPermission.PERMIT_ONLY_AUTHENTICATED){
            return !user.isGuest;
        }
        if(requiredPermission === AuthorizationPermission.PERMIT_ONLY_GUEST){
            return user.isGuest;
        }
        if(Array.isArray(requiredPermission)){
            return requiredPermission.some(item => user.accessRight.some(nItem => nItem === item));
        }
        return false;
    }
    static resolveRoutes(routeConfigs, defaultPermission) {
        //implement here
    }
}

export default AppUtils;