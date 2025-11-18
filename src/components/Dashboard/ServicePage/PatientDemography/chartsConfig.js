const primaryColor = "#194159";

export const patientsSexChartConfig = (data) => {
  return {
    type: "pie",
    data: {
      labels: [`Masculino`, `Feminino`],
      datasets: [
        {
          label: "Quantidade de Pacientes",
          data: [data.malePatients, data.femalePatients],
          backgroundColor: ["#0f9bd3ff", "#d30fc9ff"],
        },
      ],
    },
    options: {
      responsive: true, // Torna o gráfico responsivo
      maintainAspectRatio: false,
      layout: {}, // Permite que o canvas redimensione livremente
      plugins: {
        legend: {
          position: "top",
          align: "center",
          labels: {
            font: {
              size: 16,
              family: "Kanit",
              weight: 500,
            },
            color: primaryColor,
            usePointStyle: true,
          },
        },
        title: {
          display: true,
          text: "Sexo",
          font: {
            size: 20,
            family: "Kanit",
            weight: 700,
          },
          color: primaryColor,
        },
      },
    },
  };
};



export const patientsAgeChartConfig = (data) => {
  return {
    type: "pie",
    data: {
      labels: [`Jovens (0 a 19 anos)`, `Adultos (20 a 59 anos)`, "Idosos (+60 anos)"],
      datasets: [
        {
          label: "Quantidade de Pacientes",
          data: [data.young, data.adult, data.elderly],
          backgroundColor: ["#c0a287ff", "#88572cff", "#361d07ff"],
        },
      ],
    },
    options: {
      responsive: true, // Torna o gráfico responsivo
      maintainAspectRatio: false,
      layout: {}, // Permite que o canvas redimensione livremente
      plugins: {
        legend: {
          position: "top",
          align: "center",
          labels: {
            font: {
              size: 16,
              family: "Kanit",
              weight: 500,
            },
            color: primaryColor,
            usePointStyle: true,
          },
        },
        title: {
          display: true,
          text: "Idade",
          font: {
            size: 20,
            family: "Kanit",
            weight: 700,
          },
          color: primaryColor,
        },
      },
    },
  };
};
