document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('booking-form');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('b-name').value;
            const phone = document.getElementById('b-phone').value;
            const service = document.getElementById('b-service').value;
            const date = document.getElementById('b-date').value;
            const location = document.getElementById('b-location').value;
            const message = document.getElementById('b-message').value;

            const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdmFpMUV7dcl1OOegnOK8ZQ5W1Kt5YeROqD8KgASmrnUUCSpg/formResponse";

            const formData = new FormData();
            formData.append("entry.706825052", name);
            formData.append("entry.490132020", phone);
            formData.append("entry.94114696", service);
            formData.append("entry.1185227348", date);
            formData.append("entry.1640169105", location);
            formData.append("entry.201337356", message);

            fetch(formURL, {
                method: "POST",
                mode: "no-cors",
                body: formData
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
