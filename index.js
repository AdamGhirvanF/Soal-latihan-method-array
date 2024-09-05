const collectionNumber = [1, 2, 3, 4, 5, 6]
/**
 * Manipulasi array sederhana
 * Buat array baru berisi angka2 yg merupakan hasil perkalian 3 dari setiap element array collectionNumber
 */

const newCollectionNumber = collectionNumber.map(function(data){
    return data * 3;
});

console.log("Hasil perkalian angka tiga: " + newCollectionNumber)

const colors = ["blue", "black", "purple", "white", "pink"]
/**
 * buat array baru yang isinya element yang hurufnya lebih dari 4 berdasarkan array colors
 */

const newColors = colors.filter(function(data){
    return data.length > 4;
});

console.log("Huruf lebih dari 4: " + newColors);