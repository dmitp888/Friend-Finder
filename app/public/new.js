var totalDifference=0
var arr1=[6,7,8]
var arr2=[9,10,12]
for (var i = 0; i < arr1.length; i++) {
    totalDifference += Math.abs(arr1[i] - arr2[i]);
}

console.log(totalDifference)

