//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".code");

    // Add event listener for input changes
    inputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            const value = event.target.value;
            if (value.length === 1) {
                // Move focus to the next input
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else if (value.length === 0) {
                // Move focus to the previous input on backspace
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });

        // Add event listener for backspace key press
        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && input.value.length === 0) {
                // Move focus to the previous input
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
});

