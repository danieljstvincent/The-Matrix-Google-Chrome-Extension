document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:8000/api/data');
        const data = await response.json();
        document.getElementById('dataDisplay').textContent = data.message;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
