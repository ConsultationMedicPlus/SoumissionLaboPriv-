document.addEventListener("DOMContentLoaded", function () {
    const config = window.LAB_ESTIMATOR_CONFIG;

    let total = 0;
    const totalEl = document.getElementById("total");
    const patientEl = document.getElementById("patientTotal");

    document.getElementById("clinic-name").textContent = config.clinicName || "Lab Test Cost Estimator";
    document.getElementById("disclaimer").textContent = config.disclaimer || "This is an estimate only.";

    const panelContainer = document.getElementById("panel-container");
    const categoryContainer = document.getElementById("category-container");

    // Create panels
    config.panels.forEach(panel => {
        const div = document.createElement("div");
        div.className = "panel";

        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        checkbox.addEventListener("change", () => {
            total += checkbox.checked ? panel.price : -panel.price;
            totalEl.textContent = config.currency + total.toFixed(2);
            updatePatientTotal();
        });

        label.appendChild(checkbox);
        label.append(` ${panel.name} (${config.currency}${panel.price})`);
        div.appendChild(label);

        const desc = document.createElement("p");
        desc.className = "panel-description";
        desc.textContent = panel.description;
        div.appendChild(desc);

        panelContainer.appendChild(div);
    });

    // Create categories
    config.categories.forEach(category => {
        const div = document.createElement("div");
        div.className = "category";

        const heading = document.createElement("h4");
        heading.textContent = category.name;
        div.appendChild(heading);

        category.tests.forEach(test => {
            const label = document.createElement("label");
            label.className = "category-test";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            checkbox.addEventListener("change", () => {
                total += checkbox.checked ? test.price : -test.price;
                totalEl.textContent = config.currency + total.toFixed(2);
                updatePatientTotal();
            });

            label.appendChild(checkbox);
            label.append(` ${test.name} (${config.currency}${test.price})`);
            div.appendChild(label);
        });

        categoryContainer.appendChild(div);
    });

    // Insurance discount
    const insuranceInput = document.getElementById("insurancePercent");
    insuranceInput.addEventListener("input", updatePatientTotal);

    function updatePatientTotal() {
        const discount = parseFloat(insuranceInput.value) || 0;
        const patientTotal = total * (1 - discount / 100);
        patientEl.textContent = config.currency + patientTotal.toFixed(2);
    }

    // Initialize patient total
    updatePatientTotal();
});
