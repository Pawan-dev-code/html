document.addEventListener('DOMContentLoaded', () => {
    const scheduleList = document.getElementById('schedule-list');

    const schedule = [
        { time: '10:00 AM', match: 'Team A vs Team B' },
        { time: '12:00 PM', match: 'Team C vs Team D' },
        { time: '02:00 PM', match: 'Team E vs Team F' },
    ];

    schedule.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.time} - ${item.match}`;
        scheduleList.appendChild(li);
    });
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registration Successful!');
});




function submitForm(event, formId, subject) {
    event.preventDefault();
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const params = new URLSearchParams(formData).toString();
    const mailtoLink = `mailto:readingways.ani@gmail.com?subject=${subject}&body=${params.replace(/&/g, '%0D').replace(/=/g, ': ')}`;
    window.location.href = mailtoLink;
}

function submitSoloForm(event) {
    submitForm(event, 'soloForm', 'Free Fire BR Solo Match Registration');
}

function submitDuoForm(event) {
    submitForm(event, 'duoForm', 'Free Fire BR Duo Match Registration');
}

function submitSquadForm(event) {
    submitForm(event, 'squadForm', 'Free Fire BR Squad Match Registration');
}

function submitCsSquadForm(event) {
    submitForm(event, 'csSquadForm', 'Free Fire CS Squad Match Registration');
}