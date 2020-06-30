// Runs a shell command and outputs results. Handles errors.

var command = "ls"; // Command here

console.log("[run-shell-command] - attempting to run shell command...");
const command = exec(command);

command.stdout.on("data", data => {
    console.log("[run-shell-command] - success. stdout: " + data);
    event.returnValue = data;
});

command.stderr.on("data", data => {
    console.log("[run-shell-command] - stderr: " + data);
    event.returnValue = data;
});

command.on("error", (error) => {
    console.log("[run-shell-command] - error: " + error.message);
    event.returnValue = data;
});

command.on("close", code => {
    console.log("[run-shell-command] - child process finished w/ code " + code);
});
