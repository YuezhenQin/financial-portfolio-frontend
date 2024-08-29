// Function to submit the Update Stock form
async function submitUpdateForm() {
    // Gather form data
    const stockName = document.getElementById('updateStockName').value;
    const userName = document.getElementById('updateUserName').value;
    const shares = document.getElementById('updateShares').value;

    // Prepare query parameters for the PUT request
    const queryParams = new URLSearchParams({
        stockName: stockName,
        userName: userName,
        shares: shares
    }).toString();

    try {
        // Send PUT request to the backend API
        const response = await fetch(`http://localhost:8081/oneInvest/userStock?${queryParams}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Handle response
        if (response.ok) {
            const result = await response.text();
            document.getElementById('updateResponseMessage').textContent = 'Shares updated successfully!';
            $('#updateModal').modal('hide'); // Hide modal on success
            window.location.reload();
        } else {
            const error = await response.text();
            document.getElementById('updateResponseMessage').textContent = 'Error updating data: ' + error;
        }
    } catch (error) {
        document.getElementById('updateResponseMessage').textContent = 'Network error: ' + error.message;
    }
}