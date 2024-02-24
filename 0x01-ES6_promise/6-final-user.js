import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      console.log(
        `${values[0].body} ${values[1].firstName} ${values[1].lastName}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
