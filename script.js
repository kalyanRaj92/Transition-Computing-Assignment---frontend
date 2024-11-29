const resultsDiv = document.getElementById("results");

function displayResults(results) {
  for (const [key, value] of Object.entries(results)) {
    
    const resultDiv = document.createElement("div");
    resultDiv.classList.add('result');
    resultDiv.textContent = `${key} : ${value}`;
    resultsDiv.appendChild(resultDiv);
  }
}

async function fetchChecklist() {
  try {
    const response = await fetch("http://localhost:3000/checklist");
    const results = await response.json();
    //console.log(results);
    displayResults(results);
  } catch (err) {
    console.error("Error fetching checklist:", err);
  }
}

fetchChecklist();
