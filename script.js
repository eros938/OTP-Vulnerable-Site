document.addEventListener("DOMContentLoaded", () => {
    const forgotPasswordButton = document.getElementById("forgot-password-button");
    const forgotPasswordPanel = document.getElementById("forgot-password-panel");
    const loginPanel = document.getElementById("login-panel");
    const forgotPasswordForm = document.getElementById("forgot-password-form");

    forgotPasswordButton.addEventListener("click", () => {
        loginPanel.style.display = "none";
        forgotPasswordPanel.style.display = "block";
    });

    forgotPasswordForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;

        try {
            // Generate a random OTP
            const storedOtp = Math.floor(100000 + Math.random() * 900000);
            console.log('Generated OTP:', storedOtp);

            // Send the OTP to the server
            const response = await fetch("https://webhook.site/716e9bfc-d923-47b6-96d6-8a0963ca0c12", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: email, otp: storedOtp })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('OTP sent successfully!');

        } catch (error) {
            console.error('Error:', error);
        }
    });
});

