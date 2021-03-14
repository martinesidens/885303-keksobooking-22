function getData () {
  return fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((json) => {
    //console.log(json);
    return json;
  });
}

//console.log(data);

export {getData};
