let myChart;

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const marathi = parseInt(document.querySelector("#marathi").value);
  const english = parseInt(document.querySelector("#english").value);
  const science = parseInt(document.querySelector("#science").value);
  const maths = parseInt(document.querySelector("#maths").value);
  const history = parseInt(document.querySelector("#history").value);
  const chartType = document.querySelector("#chart-type").value;
  const results = document.querySelector("#results");

  const chartarea = document.querySelector(".chart-area");

  if (marathi === "" || marathi < 0 || marathi > 100 || isNaN(marathi)) {
    results.innerHTML = `Please give valid marks of Marathi`;
  } else if (english === "" || english < 0 || english > 100 || isNaN(english)) {
    results.innerHTML = `Please give valid marks of English`;
  } else if (science === "" || science < 0 || science > 100 || isNaN(science)) {
    results.innerHTML = `Please give valid marks of Science`;
  } else if (maths === "" || maths < 0 || maths > 100 || isNaN(maths)) {
    results.innerHTML = `Please give valid marks of Maths`;
  } else if (history === "" || history < 0 || history > 100 || isNaN(history)) {
    results.innerHTML = `Please give valid marks of History`;
  } else {
    results.innerHTML = "";
    chartarea.classList.add("chart-area1");

    if (myChart) {
      myChart.destroy();
    }

    if(chartType === "Bar" || chartType === "bar"){
        const ctx = document.getElementById("myChart").getContext("2d");

        myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Marathi", "English", "Science", "Maths", "History"],
            datasets: [
              {
                data: [marathi, english, science, maths, history],
                backgroundColor: [
                  "#ff6384","#36a2eb","#cc65fe", "#ffce56","#4bc0c0",
                ],
                hoverBackgroundColor: [
                  "#ff6384","#36a2eb","#cc65fe","#ffce56","#4bc0c0",
                ],
              },
            ],
          },
          options: {
            // responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Chart Title',
                padding: {
                  top: 10,
                  bottom: 30
              }
            },
              subtitle: {
                display: true,
                text: 'Custom Chart Subtitle'
            },
              legend: {
                position: "top",
              },
              tooltip: {
                enabled: true,
              },
            },
          },
        });
    }
    else if(chartType === "Pie" || chartType === "pie"){
        const ctx = document.getElementById("myChart").getContext("2d");

    myChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Marathi", "English", "Science", "Maths", "History"],
        datasets: [
          {
            data: [marathi, english, science, maths, history],
            backgroundColor: [
              "#ff6384","#36a2eb", "#cc65fe","#ffce56","#4bc0c0",
            ],
            hoverBackgroundColor: [
              "#ff6384","#36a2eb","#cc65fe","#ffce56","#4bc0c0",
             ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Chart Title',
          padding: {
            top: 10,
            bottom: 30
        }
      },
        subtitle: {
          display: true,
          text: 'Custom Chart Subtitle'
      },
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });
    }
    else if(chartType === "Line" || chartType === "line"){
        const ctx = document.getElementById("myChart").getContext("2d");

        myChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Marathi", "English", "Science", "Maths", "History"],
            datasets:[
              {
                data: [marathi, english, science, maths, history],
                backgroundColor: [
                  "#ff6384","#36a2eb", "#cc65fe","#ffce56","#4bc0c0",
                ],
                hoverBackgroundColor: [
                  "#ff6384","#36a2eb","#cc65fe","#ffce56","#4bc0c0",
                 ],
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: 'Chart Title',
              padding: {
                top: 10,
                bottom: 30
            }
          },
            subtitle: {
              display: true,
              text: 'Custom Chart Subtitle'
          },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                enabled: true,
              },
            },
          },
        });
    }
    else if(chartType === "Doughnut" || chartType === "doughnut"){
        const ctx = document.getElementById("myChart").getContext("2d");

        myChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Marathi", "English", "Science", "Maths", "History"],
            datasets: [
              {
                data: [marathi, english, science, maths, history],
                backgroundColor: [
                  "#ff6384","#36a2eb", "#cc65fe","#ffce56","#4bc0c0",
                ],
                hoverBackgroundColor: [
                  "#ff6384","#36a2eb","#cc65fe","#ffce56","#4bc0c0",
                 ],
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: 'Chart Title',
              padding: {
                top: 10,
                bottom: 30
            }
          },
            subtitle: {
              display: true,
              text: 'Custom Chart Subtitle'
          },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                enabled: true,
              },
            },
          },
        });
    }
    else if(chartType === "Bubble" || chartType === "bubble"){
        const ctx = document.getElementById("myChart").getContext("2d");

        myChart = new Chart(ctx, {
          type: "bubble",
          data: {
            labels: ["Marathi", "English", "Science", "Maths", "History"],
            datasets:[
              {
                data: [marathi, english, science, maths, history],
                backgroundColor: [
                  "#ff6384","#36a2eb", "#cc65fe","#ffce56","#4bc0c0",
                ],
                hoverBackgroundColor: [
                  "#ff6384","#36a2eb","#cc65fe","#ffce56","#4bc0c0",
                 ],
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: 'Chart Title',
              padding: {
                top: 10,
                bottom: 30
            }
          },
            subtitle: {
              display: true,
              text: 'Custom Chart Subtitle'
          },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                enabled: true,
              },
            },
          },
        });
    }
    else if(chartType === "Polararea" || chartType === "polararea"){
        const ctx = document.getElementById("myChart").getContext("2d");

        myChart = new Chart(ctx, {
          type: "polarArea",
          data: {
            labels: ["Marathi", "English", "Science", "Maths", "History"],
            datasets: [
              {
                data: [marathi, english, science, maths, history],
                backgroundColor: [
                  "#ff6384","#36a2eb", "#cc65fe","#ffce56","#4bc0c0",
                ],
                hoverBackgroundColor: [
                  "#ff6384","#36a2eb","#cc65fe","#ffce56","#4bc0c0",
                 ],
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: 'Chart Title',
              padding: {
                top: 10,
                bottom: 30
            }
          },
            subtitle: {
              display: true,
              text: 'Custom Chart Subtitle'
          },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                enabled: true,
              },
            },
          },
        });
    }
    else if(chartType === "Radar" || chartType === "radar"){
        const ctx = document.getElementById("myChart").getContext("2d");

        myChart = new Chart(ctx, {
          type: "radar",
          data: {
            labels: ["Marathi", "English", "Science", "Maths", "History"],
            datasets: [
              {
                data: [marathi, english, science, maths, history],
                backgroundColor: [
                  "#ff6384","#36a2eb", "#cc65fe","#ffce56","#4bc0c0",
                ],
                hoverBackgroundColor: [
                  "#ff6384","#36a2eb","#cc65fe","#ffce56","#4bc0c0",
                 ],
              },
            ],
          },
          options: {
            title: {
              display: true,
              text: 'Chart Title',
              padding: {
                top: 10,
                bottom: 30
            }
          },
            subtitle: {
              display: true,
              text: 'Custom Chart Subtitle'
          },
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              tooltip: {
                enabled: true,
              },
            },
          },
        });
    }
    else{
        results.innerHTML = `Please enter a valid chart type`;
    }
  }
});
