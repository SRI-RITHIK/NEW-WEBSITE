document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('booking-form');

    const scriptURL = "https://script.google.com/macros/s/AKfycbyaM2du8IebER0tXHwN0J7lKRMujH5HXldjTz1qH1dt_2TfaAJLq5CAchOBBdPrD_R5lA/exec";

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('b-name').value;
            const phone = document.getElementById('b-phone').value;
            const service = document.getElementById('b-service').value;
            const date = document.getElementById('b-date').value;
            const location = document.getElementById('b-location').value;
            const message = document.getElementById('b-message').value;

            const data = {
                name: name,
                phone: phone,
                service: service,
                date: date,
                location: location,
                message: message
            };

            fetch(scriptURL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                document.getElementById("booking-success").classList.remove("hidden");
                form.reset();
            })
            .catch(() => {
                alert("Booking failed. Please try again.");
            });
        });
    }
});
