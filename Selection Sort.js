var swap = function(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
  var minValue = array[startIndex];
  var minIndex = startIndex;

  for (var i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

var selectionSort = function(array) {
  var min;
  for (var j = 0; j < array.length; j++) {
    min = indexOfMinimum(array, j);
    swap(array, j, min);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
println("Array after sorting:  " + array);

Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

var array = [3, 5, 83, 9, 2, 20, 22];

selectionSort(array);

Program.assertEqual(array, [2, 3, 5, 9, 20, 22, 83]);
