const users = [
    { email: "igorkank@hotmail.com", password: "birozeez" },
    //{ email: "admin@example.com", password: "aaaaa" }
];

function authenticate(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Verifica se as credenciais são válidas
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login bem-sucedido!");
        // Salva o estado de login no localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redireciona para a página inicial
        window.location.href = "index.html";
    } else {
        alert("E-mail ou senha inválidos!");
    }
}