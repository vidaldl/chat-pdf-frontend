// Import API Token
import apiToken from "./env";

// script.js
$(document).ready(function() {
    $('#sendMessageButton').click(function() {
        const userMessage = $('#userMessage').val();
        $('.messages').append('<div class="message user mb-2 p-2 border rounded">' + userMessage + '</div>');
        $('#userMessage').val('');

        // Configuration for the fetch request

        // API endpoint
        const url = "https://api.chatpdf.com/v1/chats/message";
        
        const config = {
            method: 'POST',
            headers: {
                "x-api-key": "",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sourceId: "cha_fMMlfQu5HVQyVOSPLowYj",
                messages: [
                    {
                        role: "user",
                        content: userMessage,
                    },
                ],
            })
        };

        // Making a POST request using fetch
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                // Appending bot's response to the messages div
                $('.messages').append('<div class="message bot mb-2 p-2 border rounded">' + data.content + '</div>');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });
});
