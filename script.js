document.getElementById("compareForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const workload = document.getElementById("workload").value;
    const scaling = document.getElementById("scaling").value;
    const budget = document.getElementById("budget").value;
    const maintenance = document.getElementById("maintenance").value;

    let recommendation = "";
    let explanation = "";

    if (
        workload === "short" &&
        scaling === "high" &&
        maintenance === "low"
    ) {
        recommendation = "AWS Lambda";
        explanation = "Lambda is ideal for short, event-driven workloads. It automatically scales and requires no server management, making it cost-efficient for such use cases.";
    } 
    else {
        recommendation = "AWS EC2";
        explanation = "EC2 is better suited for long-running workloads or applications requiring full control over the server environment. It provides flexibility at the cost of higher management effort.";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
        <h3>Recommended Service: ${recommendation}</h3>
        <p>${explanation}</p>
        <p><strong>Trade-off:</strong> 
        ${recommendation === "AWS Lambda" 
            ? "Limited execution time and less control over infrastructure."
            : "Higher operational overhead and manual scaling responsibility."}
        </p>
    `;
});