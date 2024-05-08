// Написать метод getBase64FromUrl который конвертирует картинку в строку base64 (метод должен быть реализован с помощью Promise). Пример:

//  getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
//  .then(console.log)
//  .catch(console.error)

// // Output
// data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAACeCAIAAADL6SW3AAAAA3NCSVQICAjb4U/gAAAMGElEQVR4nO3dfZBdZX3A8d....

function getBase64FromUrl(url) {
    return new Promise((resolve, reject) => {
      const httpRequest = new XMLHttpRequest();
      httpRequest.open('GET', url);
      httpRequest.responseType = 'blob';
  
      httpRequest.onload = () => {
        if (httpRequest.status === 200) {
          const reader = new FileReader();
          reader.readAsDataURL(httpRequest.response);
  
          reader.onload = () => {
            resolve(reader.result);
          };
  
          reader.onerror = () => {
            reject('Помилка');
          };
        } else {
          reject('Помилка завантаження зображення' + httpRequest.status);
        }
      };
  
      httpRequest.onerror = () => {
        reject('Помилка запиту');
      };
  
      httpRequest.send();
    });
  }
  
  getBase64FromUrl('https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8')
    .then(base64String => {
      console.log(base64String);
    })
    .catch(error => {
      console.error(error);
    });
  
