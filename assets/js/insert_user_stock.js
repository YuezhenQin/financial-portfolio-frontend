// Function to submit the form data
async function submitForm() {
    // Gather form data
    const stockName = document.getElementById('stockName').value;
    const userName = document.getElementById('userName').value;
    const shares = document.getElementById('shares').value;
    const purchasePrice = document.getElementById('purchasePrice').value;
    const purchaseDate = document.getElementById('purchaseDate').value;
    //console.log(purchaseDate)

    // Prepare data to send to the backend API
    const formData = {
        stockName: stockName,          // Stock Name
        userName: userName,            // User Name
        shares: shares,                // Shares
        purchasePrice: purchasePrice,  // Purchase Price
        purchaseDate: purchaseDate     // Purchase Date (if needed)
    };

    try {
        // Send data to the backend API
        const response = await fetch('http://localhost:8081/oneInvest/userStock', { // Updated endpoint URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Handle response
        if (response.ok) {
            const result = await response.json();
            document.getElementById('responseMessage').textContent = 'Data saved successfully!';
            $('#addStockModal').modal('hide'); // Hide modal on success
            window.location.reload();
        } else {
            const error = await response.text();
            document.getElementById('responseMessage').textContent = 'Error saving data: ' + error;
        }
    } catch (error) {
        document.getElementById('responseMessage').textContent = 'Network error: ' + error.message;
    }
}

