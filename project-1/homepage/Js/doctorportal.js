document.addEventListener('DOMContentLoaded', () => {
    // Chart.js integration for analytics
    const ctx = document.getElementById('analytics-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Patient Visits',
                data: [10, 20, 15, 25, 30],
                borderColor: '#FF7F50',
                fill: false,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    });

    // Theme toggle
    const themeSelect = document.getElementById('theme-select');
    themeSelect.addEventListener('change', () => {
        if (themeSelect.value === 'light') {
            document.body.style.background = '#FFFFFF';
            document.body.style.color = '#000000';
        } else {
            document.body.style.background = '#121212';
            document.body.style.color = '#FFFFFF';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.getElementById('toggle-btn');

    // Sidebar toggle functionality
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
});
