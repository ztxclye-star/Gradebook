function openQuarter(subject, quarter) {
  const container = document.getElementById("assignments");
  container.innerHTML = `<h3>Assignments</h3>`;

  let count = quarter === 3 ? 2 : 10;

  for (let i = 1; i <= count; i++) {
    container.innerHTML += `
      <div class="assignment">
        Assignment ${i} — 100%
      </div>
    `;
  }
}
