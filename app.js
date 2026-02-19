async function fetchAndVisualize() {
  try {
    // 1️⃣ API Call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    // 2️⃣ Transform Data
    const companyCount = {};

    users.forEach(user => {
      const company = user.company.name;

      if (!companyCount[company]) {
        companyCount[company] = 0;
      }

      companyCount[company]++;
    });

    const chartData = Object.keys(companyCount).map(company => ({
      index: company,
      value: companyCount[company]
    }));

    // 3️⃣ Plot Bar Chart
    const surface = {
      name: 'Users Per Company',
      tab: 'Visualization'
    };

    tfvis.render.barchart(surface, chartData, {
      xLabel: 'Company',
      yLabel: 'Number of Users',
      height: 400
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndVisualize();