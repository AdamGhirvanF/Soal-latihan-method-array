// const collectionNumber = [1, 2, 3, 4, 5, 6]
// /**
//  * Manipulasi array sederhana
//  * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
//  */

// const newCollectionNumber = collectionNumber.map(function(data){
//     return data * 3;
// });

// console.log("Hasil perkalian angka tiga: " + newCollectionNumber)

// const colors = ["blue", "black", "purple", "white", "pink"]
// /**
//  * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
//  */

// const newColors = colors.filter(function(data){
//     return data.length > 4;
// });

// console.log("Huruf lebih dari 4: " + newColors);


// // Hasil Explore

// const studentData = [
//     {
//         'name': 'Adam',
//         'score': 80,
//     },
//     {
//         'name': 'Marcel',
//         'score': 95,
//     },
//     {
//         'name': 'Ditra',
//         'score': 60,
//     },
//     {
//         'name': 'Kharisma',
//         'score': 100,
//     },
// ]

// studentData.sort((prev, next) => next.score - prev.score);

// console.log(studentData);

// studentData.sort((prev, next) => prev.name.localeCompare(next.name));

// console.log(studentData);

// const studentDataMultiScore = [
//     {
//         'name': 'Adam',
//         'score': [90, 50, 70, 80],
//     },
//     {
//         'name': 'Marcel',
//         'score': [100, 50, 90, 80],
//     },
//     {
//         'name': 'Ditra',
//         'score': [80, 40, 70, 90],
//     },
//     {
//         'name': 'Kharisma',
//         'score': [100, 20, 90, 80],
//     },
// ]

// studentDataMultiScore.sort((a, b) => a.score - b.score);

const videoData = [
    {
      name: 'Miss Scarlet',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Rusty',
      present: false,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Colonel Mustard',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    },
    {
      name: 'Professor Plum',
      present: true,
      rooms: {
        kitchen: false,
        ballroom: false,
        conservatory: false,
        'dining room': false,
        'billiard room': false,
        library: false
      }
    }
  ]

  videoData.forEach(data => {
    if(data.present == true) {
    //   console.log(data);
    }
  });

  let collectionScore = [100, 200, 300, 400];

  let newColl = collectionScore.map(function(data){
    return data * 2;
  });

  let tampung = [];
  
  let newColl2 = collectionScore.forEach(data => {
    tampung.push(data * 2);
    return data * 2;
  });

  console.log(newColl);
  console.log(tampung);
