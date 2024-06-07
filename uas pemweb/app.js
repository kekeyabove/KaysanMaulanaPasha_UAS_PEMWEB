document.addEventListener("DOMContentLoaded", function() {
    var subscribeBtn = document.getElementById("subscribeBtn");

    subscribeBtn.addEventListener("click", function() {
        // Display text notification
        displayNotification("Subscribed!");
    });

    // Function to display notification
    function displayNotification(message) {
        // Create a div element for the notification
        var notification = document.createElement("div");
        notification.classList.add("notification");
        notification.textContent = message;

        // Append the notification to the body
        document.body.appendChild(notification);

        // Remove the notification after 3 seconds
        setTimeout(function() {
            notification.remove();
        }, 3000);
    }
});
