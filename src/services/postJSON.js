export const postJSON = (url, data) =>
  new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = resolve;
    xhr.onerror = reject;
    xhr.send(JSON.stringify(data));
  });
