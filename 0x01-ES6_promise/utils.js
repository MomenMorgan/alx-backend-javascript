export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
