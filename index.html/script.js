// Array to store friends' names and corresponding years of friendship
const friends = [
    { name: "Aryan", years: 6 },
    { name: "Sukrut", years: 7 },
    { name: "Rakshith", years: 11 },
    { name: "Hruday", years: 10 },
    { name: "Pruthvi", years: 3 },
    { name: "Jeevan", years: 3 },
    { name: "Shreyas", years: 3 },
    { name: "Siddarth", years: 3 },
    { name: "Thanush", years: 8 },
    { name: "Chrianthan", years: 7 },
    { name: "Rohan", years: 10 },
    { name: "Prajwal", years: 10 },
    { name: "Ullas", years: 3 },
    { name: "Sukin", years: 3 },
    { name: "Aditya", years: 11 },
    { name: "Yashas", years: 3 },
    { name: "Tilak", years: 3 },
    { name: "Vivek", years: 3 },
    { name: "Abhinav", years: 8 },
    { name: "Shourya", years: 10 },
    { name: "Shub", years: 3 },
    { name: "Nithin", years: 5 },
    { name: "Rathan", years: 3 }
];

// Function to check friendship duration and display a message
function checkFriendship() {
    // Get the input value and convert it to lowercase
    const inputName = document.getElementById('friendName').value.trim().toLowerCase();
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = '';

    // Find the friend in the array, ignoring case
    const friend = friends.find(f => f.name.toLowerCase() === inputName);

    // Check if the friend is found
    if (friend) {
        // Display a congratulatory message if years are 5 or more
        if (friend.years >= 5) {
            messageDiv.innerHTML = `Congratulations ${friend.name} for being with me for ${friend.years} years. Hope we would be like this forever!`;
        } else {
            messageDiv.innerHTML = `${friend.name} and Navneeth have been friends for ${friend.years} years.`;
        }
    } else {
        // If the friend's name is not found, display an error message
        messageDiv.innerHTML = "Sorry if your name isn't in the list. DM me if you want to add your name!";
        messageDiv.classList.add('error');
    }
}
