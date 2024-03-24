function sendMessage() {
    var userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('👦🏻 You', userInput);
        document.getElementById('user-input').value = '';
        setTimeout(() => {
            botResponse(userInput);
        }, 500);
    }
}

function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("p");
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

function botResponse(userInput) {
    var response;

    switch(userInput.toLowerCase()) {
        case 'হাই':
        case 'হ্যালো':
        case 'hello':
        case 'hi':
        case 'yo':
            response = 'Hi there!';
            break;

        case 'oh':
        case 'ohw':
        case 'আচ্ছা':
            response = "Yup.🙌"
            break;

        case 'how are you?':
        case 'আপনি কেমন আছেন?':
        case 'তুমি কেমন আছো?':
        case 'কেমন আছো':
            response = 'I\'m just a bot, but thanks for asking!';
            break;

        case 'এই দুষ্ট':
        case 'জান':
        case 'সোনা পাখি':
            response = "হুম বলো।"
            break;

        case 'tell me a joke':
            response = 'Why don\'t scientists trust atoms? Because they make up everything!';
            break;

        case 'who are you?':
        case 'তুমি কে?':
            response = 'I am a simple chatbot Made by Asraful.';
            break;

        case 'who is the president of bangladesh?':
            response = "The President of Bangladesh is Md. Abdul Hamid.";
            break;

        case 'who is the prime minister of bangladesh?':
        case 'বাংলাদেশের প্রধানমন্ত্রী কে?':
            response = "The Prime Minister of Bangladesh is Sheikh Hasina.";
            break;

        case 'i love you':
        case 'can i love you?':
        case 'can i love you?🙃':
        case 'can i love you?😗':
        case 'can i love you?🙄':
            response = "Aw, that's so sweet!🥰 But I'm just a bot.😶";
            break;

        case '😭':
            response = "What happened why are you crying.😥";
            break;

        case '😙':
        case '🥰':
        case '😁':
            response = "You seem like very happy.😃";
            break;

        case 'আমি তোমাকে ভালোবাসি':
        case 'আমার মনে হয় আমি তোমাকে ভালোবাসি':
            response = "ইস এসব কি বলো তুমি।😶 আমি তো শুধু মাত্র একটা ChatBot।🙃";
            break;

        case 'i hate you':
        case 'আমি আপনাকে ঘৃণা করি':
        case 'আমি তোমাকে ঘৃণা করি':
        case 'আমি তোমাকে পছন্দ করি না':
            response = "I feel so sad to hear that.😞";
            break;

        case 'fuck you':
        case 'fuck u':
        case 'fuck u man':
            response = "Fuck You,Too.🤬"
            break;

        case 'i am sorry':
        case 'i am so sorry':
        case 'for give me':
            response = "It's oK.😊"
            break;

        case 'how made facebook':
        case 'how created facebook':
        case 'how is the maker of facebook':
        case 'কে ফেসবুক তৈরি করে।':
        case 'কে ফেসবুক তৈরি করে':
            response = "Facebook was created by Mark Zuckerberg.";
            break;

        case 'bye':
        case 'বিদায়':
            response = "Goodbye! Have a great day!🤗";
            break;

        default:
            response = 'I\'m sorry, I don\'t understand that.Can you say something else?';
    }

    appendMessage('🤖 Bot', response);
}