const dataBody = document.getElementById("data-body");

function displayResults(results) {
  // Clear previous results
  dataBody.innerHTML = "";

  // Iterate over each application result
  results.forEach((result) => {
    const row = document.createElement("tr");

    const appId = document.createElement("td");
    appId.textContent = result.applicationId;
    appId.classList.add("idClass");
    row.appendChild(appId);

    const valuation = document.createElement("td");
    valuation.textContent = result.valuationFeePaid ? "Passed" : "Failed";
    valuation.classList.add(result.valuationFeePaid ? "passed" : "failed");
    row.appendChild(valuation);

    const ukResident = document.createElement("td");
    ukResident.textContent = result.ukResident ? "Passed" : "Failed";
    ukResident.classList.add(result.ukResident ? "passed" : "failed");
    row.appendChild(ukResident);

    const riskRatingMedium = document.createElement("td");
    riskRatingMedium.textContent = result.riskRatingMedium
      ? "Passed"
      : "Failed";
    riskRatingMedium.classList.add(
      result.riskRatingMedium ? "passed" : "failed"
    );
    row.appendChild(riskRatingMedium);

    const ltvBelow60 = document.createElement("td");
    ltvBelow60.textContent = result.ltvBelow60 ? "Passed" : "Failed";
    ltvBelow60.classList.add(result.ltvBelow60 ? "passed" : "failed");
    row.appendChild(ltvBelow60);

    const status = document.createElement("td");
    status.textContent = result.status ? "Passed" : "Failed";
    status.classList.add(result.status ? "passed" : "failed");
    row.appendChild(status);

    dataBody.appendChild(row);
  });
}


async function fetchChecklist() {
  try {
    const response = await fetch("http://localhost:3000/checklist");
    const results = await response.json();
    console.log(results);
    displayResults(results);
  } catch (err) {
    console.error("Error fetching checklist:", err);
  }
}

fetchChecklist();
