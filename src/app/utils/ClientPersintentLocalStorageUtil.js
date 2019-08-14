export default class ClientPersintentLocalStorageUtil {
    static saveData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    }
    static getData = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }
    static removeData = (key) => {
        return localStorage.removeItem(key);
    }
}