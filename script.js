// Sample workshop data
const workshops = [
    { title: 'Web Development Basics', date: '2024-10-10', time: '10:00 AM' },
    { title: 'Advanced JavaScript Techniques', date: '2024-10-15', time: '2:00 PM' },
    { title: 'Graphic Design Essentials', date: '2024-10-20', time: '1:00 PM' }
];

// Function to display workshops
function displayWorkshops() {
    const workshopList = document.getElementById('workshop-list');
    workshopList.innerHTML = ''; // Clear existing content

    workshops.forEach(workshop => {
        const workshopItem = document.createElement('div');
        workshopItem.classList.add('workshop-item'); // Add a class for styling
        workshopItem.innerHTML = `
            <h3>${workshop.title}</h3>
            <p>Date: ${workshop.date} | Time: ${workshop.time}</p>
            <button onclick="register('${workshop.title}')">Register</button>
        `;
        workshopList.appendChild(workshopItem);
    });
}

// Function to handle registration
function register(workshopTitle) {
    document.getElementById('workshop-title').value = workshopTitle; // Set the hidden input value
    document.getElementById('register').style.display = 'block'; // Show the registration form
}

// Handle registration form submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const workshopTitle = document.getElementById('workshop-title').value;

    // Display a confirmation message
    const message = `Thank you, ${name}! You have registered for "${workshopTitle}".`;
    document.getElementById('registration-message').innerText = message;

    this.reset(); // Reset the form fields
});

// Handle admin workshop addition
document.getElementById('workshop-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const title = document.getElementById('workshop-name').value;
    const date = document.getElementById('workshop-date').value;
    const time = document.getElementById('workshop-time').value;

    // Add new workshop to the array
    workshops.push({ title, date, time });

    // Display a success message
    const adminMessage = `Workshop "${title}" has been added successfully!`;
    document.getElementById('admin-message').innerText = adminMessage;

    this.reset(); // Reset the form fields
    displayWorkshops(); // Refresh the workshop list
});

// Navigation between sections
document.querySelectorAll("nav a").forEach(link => {
   link.addEventListener("click", (e) => {
       e.preventDefault();
       const targetSection = e.target.getAttribute("href").substring(1);
       
       // Hide all sections and show the selected one
       document.querySelectorAll("main > section").forEach(section => {
           section.style.display = "none";
       });
       document.getElementById(targetSection).style.display = "block"; // Show selected section
   });
});

// Initialize the workshop list on page load
window.onload = displayWorkshops; // Display workshops when the page loads