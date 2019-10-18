import { formDataFrom }  from '../helpers/form_data'

export function sendForm(values, endPoint) {
  return fetch(endPoint, {
    method: 'POST',
    body: formDataFrom(values),
  }).then(res => res)
  .catch(error => {
    throw new Error();
  })
  .then(response => {
    if (response.status !== 200) {
      throw new Error();
    }
  });
}
