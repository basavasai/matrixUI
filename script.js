/**
 * Created by konuru on 2/14/17.
 */


// [1, 2, 3, 4, 12, 16, 15, 14, 13, 5, 6, 7, 8, 11, 10, 9]

(function () {
    'use strict';

   var el = document.getElementById('traverse');
    var outputElement = document.getElementById('output');

    el.addEventListener('click', function () {

       var matrix = [];
       var container = document.getElementsByClassName('container')[0];
       for(var i=0, len = container.children.length; i < len; i++){
           matrix.push(returnArrayRow(container.children[i]));
       }
       function returnArrayRow(elm) {
           var arr = [];
           for(var i=0, len = elm.children.length; i < len; i++){
               arr.push(parseInt(elm.children[i].textContent));
           }
           return arr;
       }


    var matrixTraverse = function(matrix){
    var result = [];
    var goAround = function(matrix) {
        if (matrix.length == 0) {
            return;
        }

        // move right
        result = result.concat(matrix.shift());

        // move down
        for (var j=0; j < matrix.length-1; j++) {
            result.push(matrix[j].pop());
        }

        // move bottom
        result = result.concat(matrix.pop().reverse());

        // move up
        for (var k=matrix.length -1; k > 0; k--) {
            result.push(matrix[k].shift());
        }

        return goAround(matrix);
    };

    goAround(matrix);

    return result;
};


     var result = matrixTraverse(matrix);
       var matrixString = '[ ';

       for(var item=0, resultLen = result.length; item < resultLen; item++){
              matrixString = matrixString + result[item] + ', ';
     }

      matrixString = matrixString + ']';
      outputElement.textContent = matrixString;
   });




}());





