const xArray = ["IoT device connection status", "User Access Logs", "Startup repair", "Boot logs", "Recovering systems & disaster recovery"];
const yArray = [55, 49, 44, 24, 15];

const layout = {title:"World Wide Wine Production"};

const data = [{labels:xArray, values:yArray, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);
