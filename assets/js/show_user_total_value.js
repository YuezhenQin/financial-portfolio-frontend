async function fetchUserTotalValue(userName) {
    try {
        const response = await fetch(`http://localhost:8081/oneInvest/userTotalValue?userName=${userName}`);
        const data = await response.json();
        document.getElementById('totalValueDisplay').innerText = `$${data.totalValue}`;
    } catch (error) {
        console.error('Error fetching total value:', error);
    }
}

// Call this function with the appropriate username when you need to update the display
fetchUserTotalValue('David');