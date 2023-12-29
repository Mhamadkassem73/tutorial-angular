import { environment } from 'environments/environment';

export const api = {
    'fetchUser': environment.appUrl + 'fetchUser',
    'addUser': environment.appUrl + 'addUser',
    'updateUser': environment.appUrl + 'updateUser',
    'signUp': environment.appUrl + 'signUp',
    'signIn': environment.appUrl + 'signIn',


    //question
    'fetchNextQuestionById': environment.appUrl + 'fetchNextQuestionById',
    'fetchFirstQuestion': environment.appUrl + 'fetchFirstQuestion',
    'selectAnswersByuser': environment.appUrl + 'selectAnswersByuser',
    'fetchLessons': environment.appUrl + 'fetchLessons',
    //question
};
