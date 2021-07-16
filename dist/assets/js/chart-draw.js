var data = {
  // A labels array that can contain any sort of values
  labels: ['1', '2', '3', '4', '5'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0, 5]
  ],
  
};


var data2 = {
  // A labels array that can contain any sort of values
  labels: ['1', '2', '3', '4', '5'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 1, 0]
  ],
  
};


var data3 = {
  // A labels array that can contain any sort of values
  labels: ['1', '2', '3', '4', '5'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [3, 2, 4, 2, 0, 7]
  ],
  
};

var option = {
  width: 90,
  height: 32,
    showPoint: false,
    showLine: true,
    showArea: true,
    fullWidth: true,
    showLabel: false,
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    chartPadding: 0,
    low: 0
  
};

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('#first-chart', data, option);

new Chartist.Line('#second-chart', data2, option);

new Chartist.Line('#third-chart', data3, option);