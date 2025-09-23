document.getElementById('emiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('/', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert('Error: ' + data.error);
            return;
        }

        document.getElementById('emi-val').textContent = '₹ ' + data.emi;
        document.getElementById('interest-val').textContent = '₹ ' + data.total_interest;
        document.getElementById('total-val').textContent = '₹ ' + data.total_payment;
        document.getElementById('results').style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while calculating EMI.');
    });
});