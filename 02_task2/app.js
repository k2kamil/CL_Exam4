
function bigestSumOfTwoElements(array) {

}


//
// function bigestSumOfTwoElements(array) {
//     if(array.length == 0) {
//         return "Pusta tablica";
//     } else if (array.length == 1) {
//         return array[0];
//     } else {
//         var najwieksza1 = array[0];
//         var najwieksza2 = array[1];
//
//         for (var i = 2; i < array.length; i++) {
//             if(najwieksza1 < najwieksza2) {
//                 var tmp = najwieksza1;
//                 najwieksza1 = najwieksza2;
//                 najwieksza2 = tmp;
//             }
//
//             if(array[i] > najwieksza1) {
//                 najwieksza2 = array[i];
//             } else if (array[i] > najwieksza2) {
//                 najwieksza2 = array[i];
//             }
//         }
//
//         return najwieksza1 + najwieksza2;
//     }
// }