export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      body: 'Success',
    });

    reject(new Error('Error'));
  });
}
