function analyzeDecision() {
  const text = document.getElementById("scenario").value;
  const result = document.getElementById("result");

  if (text.trim() === "") {
    result.innerText = "❌ Please enter a scenario.";
    return;
  }

  // Simple demo logic (frontend only)
  if (text.toLowerCase().includes("hand")) {
    result.innerText = "🟥 Decision: Handball – Free Kick!";
  } 
  else if (text.toLowerCase().includes("foul")) {
    result.innerText = "🟨 Decision: Foul – Yellow Card!";
  } 
  else {
    result.innerText = "✅ Decision: Play On!";
  }
}