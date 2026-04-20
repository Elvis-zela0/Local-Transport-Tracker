document.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (e.target.id === 'loginForm') {
        window.location.href = 'admin-index.html';
    } else {
        alert("Action Successful");
        e.target.reset();
    }
});

function filterTable() {
    let input = document.getElementById('routeSearch').value.toLowerCase();
    let rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(input) ? '' : 'none';
    });
}
const addForm = document.getElementById('addScheduleForm');

if (addForm) {
    addForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        window.location.href = 'admin-schedules.html';
    });
}