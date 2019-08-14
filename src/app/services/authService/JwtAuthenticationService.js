import axios from '../../utils/AxiosHttpClient';
import AppConfig from '../../config/AppConfig';
import ClientPersintentUtil from '../../utils/ClientPersintentLocalStorageUtil';

const jwt_access_token = AppConfig.jwtKeyName;

class JwtAuthenticationService {
    loginWithUsernameAndPassword = (payload) => {
        const headerConfig = { headers: { 'content-type': 'application/json' } };
        return axios.post('auth/login', payload, headerConfig
            ).then(response => {
                const result = response.data.data;
                const { data, token } = result;
                this.setSession(token);
                return data;
            })
            .catch(error => {
                if(!error.response){
                    //handle global error;
                    return null;
                }
                const responsePayload = error.response.data;
                const { data } = responsePayload;
                return {error: data};
            });
    }
    
    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.post('/auth/login-with-token', { 
                accessToken: this.getAccessToken()
            })
            .then(response => {
                const content = response.data;
                const result = content.data;
                this.setSession(result.token);
                let userData = result.data;
                resolve(userData);
            })
            .catch(error => {
                console.log("c"); //debug info
                window.aaa = error; //debug info
                // const result = error.response.data;
                reject({email: "Email not valid.", password: "Password not valid."});
            });
        });
    };

    logout = () => {
        this.setSession(null);
    };
    
    setSession = access_token => {
        if ( access_token )
        {
            ClientPersintentUtil.setData(jwt_access_token, access_token);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else
        {
            ClientPersintentUtil.removeData(jwt_access_token);
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    getAccessToken = () => {
        return ClientPersintentUtil.getData(jwt_access_token);
    };
}

const jwtAuthenticationService = new JwtAuthenticationService();
export default jwtAuthenticationService;