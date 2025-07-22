window.addEventListener("DOMContentLoaded", () => {

  const xArray = [
    "IoT device connection status",
    "User Access Logs",
    "Startup repair",
    "Boot logs",
    "Recovering systems & disaster recovery"
  ];
  const yArray = [55, 49, 44, 24, 15];

  const pieData = [{
    labels: xArray,
    values: yArray,
    type: "pie"
  }];

  const pieLayout = {
    title: "Nexus Cloud Shield - System Components Distribution"
  };

  Plotly.newPlot("myPlot", pieData, pieLayout);


  const xValues = [];
  const yValues = [];

  generateData("x * 2 + 7", 0, 10, 0.5);

  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        pointRadius: 1,
        borderColor: "rgba(255,0,0,0.5)",
        data: yValues
      }]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: "y = x * 2 + 7",
        fontSize: 16
      }
    }
  });

  function generateData(expr, start, end, step = 1) {
    for (let x = start; x <= end; x += step) {
      xValues.push(x);
      yValues.push(eval(expr));
    }
  }
});
