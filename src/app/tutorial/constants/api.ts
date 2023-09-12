import { environment } from 'environments/environment';

export const api = {
    'fetchUser': environment.appUrl + 'fetchUser',
    'addUser': environment.appUrl + 'addUser',
    'updateUser': environment.appUrl + 'updateUser',
    'signIn': environment.appUrl + 'signIn',
    
};
