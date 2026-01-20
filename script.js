const lengthInput = document.getElementById("length");
const generateBtn = document.getElementById("generate");
const resultInput  = document.getElementById("result");
const copyBtn = document.getElementById("copy");
const msg = document.getElementById("msg");

// Characters we allow in the password
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

// Function to generate password
function generatePassword(length) {
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    return password;
}

// When the generate button is clicked → create password
generateBtn.addEventListener("click", () => {
    const length = Number(lengthInput.value);
    const newPassword = generatePassword(length);
    resultInput.value = newPassword;

    msg.textContent = "Password generated ✔";
    msg.style.color = "lightgreen";
});

// Copy button
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(resultInput.value);

    msg.textContent = "Copied to clipboard ✔";
    msg.style.color = "skyblue";
});
