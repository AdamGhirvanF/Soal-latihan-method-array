function makeAllCaps(givenArray){
    return new Promise((resolve, reject) => {
        if(givenArray.every(item => typeof item === 'string')) {
                let capsWord = givenArray.map(word => word.toUpperCase());
                resolve(capsWord);
        } else {
            reject("Ur array contain non string data");
        }
    });
}

function sortWords(givenArray){
    return new Promise((resolve, reject) => {
        givenArray.map(function(data){
            if(typeof data === 'string') {
                resolve(givenArray.sort((prev,next) => prev.localeCompare(next)));
            } else {
                reject("Ur array contain non string data");
            }
        });
    });
}

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });