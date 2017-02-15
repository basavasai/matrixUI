# matrixUI

Input is:
[[1,2,3,4]
[5,6,7,8]
[9,10,11,12]
[13,14,15,16]]

Please click the button  - Traverse

Output is : 

[ 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10, ]

Logic:
-The idea is we know for each pass we need to do these things:
-Adding the first array to output array
-Next add the last item from each remaining array to output
-Add the last array to output
-Add the first item from each remaining array in input


