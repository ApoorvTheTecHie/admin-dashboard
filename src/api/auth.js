import { apiPost, apiGet, apiReq, apiPut } from '../utils';
// import qs from 'query-string';
import { formTypes } from '../constants';

const headers = {
	'Content-Type': formTypes.json,
	'Content-Type': formTypes.urlencoded
}


export function loginAPI (user) {
  const obj = {
    id: 1,
    email: user.email,
    firstName: 'Tester',
    lastName: 'One',
    accessToken: 'myAccessTokenPractice'
  };

	return new Promise((response, rej) => {
    return response({ message: 'Login success!', user: obj });
  })
}
