const patients = [
    { id: 101, name: "Aarav Sharma", age: 29, gender: "Male", condition: "Routine Checkup" },
    { id: 102, name: "Priya Patel", age: 34, gender: "Female", condition: "Dental Cleaning" },
    { id: 103, name: "Rahul Verma", age: 45, gender: "Male", condition: "Blood Pressure Monitoring" }
];

const patientContainer = document.getElementById("patient-list");

patients.forEach(patient => {
    const card = document.createElement("div");
    card.classList.add("patient-card");
    card.innerHTML = `
        <h3>${patient.name} (ID: ${patient.id})</h3>
        <p><strong>Age:</strong> ${patient.age} | <strong>Gender:</strong> ${patient.gender}</p>
        <p><strong>Condition/Reason:</strong> ${patient.condition}</p>
    `;
    patientContainer.appendChild(card);
});
