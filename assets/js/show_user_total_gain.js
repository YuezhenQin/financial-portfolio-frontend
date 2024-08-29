async function fetchUserTotalGain(userName) {
    try {
        const response = await fetch(`http://localhost:8081/oneInvest/userGain?userName=${userName}`);
        const data = await response.json();
        document.getElementById('totalGainDisplay').innerText = `$${data.totalGain}`;
    } catch (error) {
        console.error('Error fetching total gain:', error);
    }
}

// Call this function with the appropriate username when you need to update the display
fetchUserTotalGain('David');
