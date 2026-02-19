function multiplyNumbers (...numbers) 
{
    if (numbers.length === 0) return 0;
    return numbers.reduce((product, num) => product * num, 1);
}

console.log("The Result of the Multiplication is ", multiplyNumbers(4,5,7));
console.log("The Result of the Multiplication is ", multiplyNumbers(8,2,4));
console.log("The Result of the Multiplication is ", multiplyNumbers(9,5,9));
console.log("The Result of the Multiplication is ", multiplyNumbers(3,3,3));


async function visualizeUserData() {
    // 1. Fetch data from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    // 2. Transform the data
    // We'll map the users to get:
    // - Bar Chart: Name length per user
    // - Line Chart: Latitude vs Longitude (as a mock trend)
    const barData = data.map(user => ({
        index: user.username,
        value: user.name.length,
    }));

    const lineData = data.map(user => ({
        x: parseFloat(user.address.geo.lat),
        y: parseFloat(user.address.geo.lng),
    }));

    // Sort line data by X to ensure the line doesn't zig-zag backward
    lineData.sort((a, b) => a.x - b.x);

    // 3. Initialize the Visor
    const visor = tfvis.visor();
    
    // 4. Plot the Bar Chart
    const barSurface = { name: 'User Name Lengths', tab: 'Charts' };
    tfvis.render.barchart(barSurface, barData, {
        xLabel: 'Username',
        yLabel: 'Characters in Name',
        height: 300
    });

    // 5. Plot the Line Chart
    const lineSurface = { name: 'Geo-Location Distribution', tab: 'Charts' };
    tfvis.render.linechart(lineSurface, { values: [lineData], series: ['Location Trend'] }, {
        xLabel: 'Latitude',
        yLabel: 'Longitude',
        height: 300
    });
}

// Execute the function
visualizeUserData();