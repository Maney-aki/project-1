let healthData = [];
let dietData = [];
let emergencyData = [];
let doctorData = [];
let communicationData = [];
let reminders = [];

// Function to add a new health entry
function addHealthEntry(date, metric, value) {
    healthData.push({ date, metric, value });
    updateHealthTable();
}

// Function to update the health monitoring table
function updateHealthTable() {
    const healthTableBody = document.querySelector('#health-monitoring tbody');
    healthTableBody.innerHTML = ''; // Clear existing rows

    healthData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.metric}</td>
            <td>${entry.value}</td>
        `;
        healthTableBody.appendChild(row);
    });
}

// Function to add a new diet entry
function addDietEntry(meal, calories, notes) {
    dietData.push({ meal, calories, notes });
    updateDietTable();
}

// Function to update the diet control table
function updateDietTable() {
    const dietTableBody = document.querySelector('#diet-control tbody');
    dietTableBody.innerHTML = ''; // Clear existing rows

    dietData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.meal}</td>
            <td>${entry.calories}</td>
            <td>${entry.notes}</td>
        `;
        dietTableBody.appendChild(row);
    });
}

// Function to add a new emergency log entry
function addEmergencyEntry(date, type, notes) {
    emergencyData.push({ date, type, notes });
    updateEmergencyTable();
}

// Function to update the emergency log table
function updateEmergencyTable() {
    const emergencyTableBody = document.querySelector('#emergency-log tbody');
    emergencyTableBody.innerHTML = ''; // Clear existing rows

    emergencyData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.type}</td>
            <td>${entry.notes}</td>
        `;
        emergencyTableBody.appendChild(row);
    });
}

// Function to add a new reminder
function addReminder(reminder) {
    reminders.push(reminder);
    updateReminderList();
}

// Function to update the medical reminders list
function updateReminderList() {
    const reminderList = document.querySelector('#reminders');
    reminderList.innerHTML = ''; // Clear existing reminders

    reminders.forEach(reminder => {
        const listItem = document.createElement('li');
        listItem.textContent = reminder;
        reminderList.appendChild(listItem);
    });
}

// Function to display alerts for reminders
function checkReminders() {
    const currentDate = new Date().toLocaleDateString();
    reminders.forEach(reminder => {
        if (reminder.includes(currentDate)) {
            alert(`Reminder: ${reminder}`);
        }
    });
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Adding sample data
    addHealthEntry('2023-10-01', 'Blood Pressure', '120/80');
    addDietEntry('Breakfast', 300, 'Oatmeal with fruits');
    addEmergencyEntry('2023-10-01', 'Allergy', 'Severe reaction to nuts');
    addReminder('Take medication at 8 AM on 2023-10-01');
    addReminder('Doctor\'s appointment on 2023-10-15');

    // Check reminders every minute
    setInterval(checkReminders, 60000);n
});
