// Users array - single declaration
const users = [
    { email: "igorkank@hotmail.com", password: "birozeez" },
    { email: "admin@admin.com", password: "admin" }
];

// Authentication function
function authenticate(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        showToast("Login bem-sucedido!", false);
        localStorage.setItem("isLoggedIn", "true");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
    } else {
        showToast("E-mail ou senha inválidos!", true);
    }
}

// Toast notification function
function showToast(message, isError) {
    const toast = document.getElementById("toast");
    if (!toast) {
        console.error("Elemento toast não encontrado");
        return;
    }
    toast.textContent = message;
    toast.className = "toast show";
    if (isError) {
        toast.classList.add("error");
    }
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
        if (isError) {
            toast.classList.remove("error");
        }
    }, 3000);
}

// Logout function
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}

// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}