// Task 1
document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard"); // Selecting the riskDashboard container
    console.log("Risk Dashboard Loaded"); // Printing "Risk Dashboard Loaded" to the console
});

// Task 2
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard"); // Assigning a class "riskCard"
    riskCard.innerHTML = `
            <p><strong>Risk:</strong> ${riskName}</p>
            <p><strong>Level:</strong> ${riskLevel}</p>
            <p><strong>Department:</strong> ${department}</p>
                `;
        }
