

function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
  const currentUser = localStorage.getItem('currentUser');
  return currentUser ? JSON.parse(currentUser) : null;
}

function setCurrentUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem('currentUser');
}

function showError(message) {
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
  }
}

function hideError() {
  const errorElement = document.getElementById('error-message');
  if (errorElement) {
    errorElement.classList.remove('show');
  }
}

const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hideError();
        
        const name = document.getElementById('registerName').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        
        if (password !== confirmPassword) {
            showError('Passwords do not match!');
            return;
        }
        
        if (password.length < 6) {
            showError('Password must be at least 6 characters long!');
            return;
        }
        
        const users = getUsers();
        
        const userExists = users.find(user => user.name === name || user.email === email);
        if (userExists) {
            showError('User with this name or email already exists!');
            return;
        }

        const newUser = {
            name: name,
            email: email,
            password: password
        };
        
        users.push(newUser);
        saveUsers(users);
        
        alert('Registration successful! You can now login.');
        window.location.href = 'login.html';
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hideError();
        
        const name = document.getElementById('loginName').value.trim();
        const password = document.getElementById('loginPassword').value;
        
        const users = getUsers();
        const user = users.find(u => u.name === name && u.password === password);
        
        if (user) {
            setCurrentUser(user);
            window.location.href = 'dashboard.html';
        } else {
            showError('Invalid name or password!');
        }
    });
}

if (window.location.pathname.includes('dashboard.html')) {
    const currentUser = getCurrentUser();
    if (!currentUser) {
        window.location.href = 'home.html';
    } else {
        const userNameElement = document.getElementById('userName-header');
        if (userNameElement) {
            userNameElement.textContent = currentUser.name;
            
        }

        const userNameDashElement = document.getElementById('userName-dash');
        if (userNameDashElement) {
            userNameDashElement.textContent = currentUser.name;
        }
    }
}

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        clearCurrentUser();
        alert('You have been logged out!');
        window.location.href = 'home.html';
    });
}

