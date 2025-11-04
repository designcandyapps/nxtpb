const { execSync } = require("child_process");

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: "inherit" });
}

try {
  console.log("Pulling latest changes...");
  run("git pull --no-rebase");

  console.log("Adding changes...");
  run("git add .");

  const msg = `Auto commit on ${new Date().toLocaleString()}`;
  console.log(`Committing: \"${msg}\"`);
  run(`git commit --allow-empty -m \"${msg}\"`);

  console.log("Pushing...");
  run("git push");

  console.log("✅ Auto-commit complete!");
} catch (err) {
  console.error("❌ Error:", err.message);
}
