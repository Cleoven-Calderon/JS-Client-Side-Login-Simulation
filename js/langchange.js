const translations = {
  en: {
    // Home page
    welcomeMessage: "Welcome to WALKnDA", 
    mainContent: "Login to access your account. Or register if you don't have an account yet.",
    loginBtn: "Login",
    registerBtn: "Register",
    darkmodeTextHome: "Dark mode",
    languageTextHome: "Language",
    
    // Login page
    loginText: "Login",
    nameLabel: "Name:",
    passwordLabel: "Password:",
    registerTextQuestion: "Don't have an account?",
    registerLink: "Register here",
    back2HomeText: "Back to Home",
    darkmodeTextLogin: "Dark mode",
    languageTextLogin: "Language",
    loginButtonLogin: "Login",

    
    // Register page
    darkmodeTextRegister: "Dark mode",
    languageTextRegister: "Language",
    registerText: "Register",
    nameTextRegister: "Name:",
    emailTextRegister: "Email:",
    passwordTextRegister: "Password:",
    confirmPasswordTextRegister: "Confirm Password:",
    createAccountButtonRegister: "Create Account",
    alreadyHaveAccountText: "Already have an account?",
    loginHereTextRegister: "Login here",
    back2HomeTextRegister: "Back to Home",

    // Dashboard page
    darkModeDash: "Dark mode",
    logoutBtnDash: "Logout",
    languageTextDash: "Language",
    dashboardText: "Dashboard",
    stocksText: "Stocks"
  },
  es: { 
    // Home page
    welcomeMessage: "Bienvenidos a WALKnDA",
    mainContent: "Inicia sesión para acceder a tu cuenta. O regístrate si aún no tienes una.",
    loginBtn: "Iniciar sesión",
    registerBtn: "Registrarse",
    darkmodeTextHome: "Modo oscuro",
    languageTextHome: "Idioma",
    
    // Login page
    loginText: "Iniciar sesión",
    nameLabel: "Nombre:",
    passwordLabel: "Contraseña:",
    registerTextQuestion: "¿No tienes una cuenta?",
    registerLink: "Regístrate aquí",
    back2HomeText: "Volver a la página principal",
    darkmodeTextLogin: "Modo oscuro",
    languageTextLogin: "Idioma",
    loginButtonLogin: "Iniciar sesión",
    
    // Register page
    darkmodeTextRegister: "Modo oscuro",
    languageTextRegister: "Idioma",
    registerText: "Registrarse",
    nameTextRegister: "Nombre:",
    emailTextRegister: "Correo electrónico:",
    passwordTextRegister: "Contraseña:",
    confirmPasswordTextRegister: "Confirmar contraseña:",
    createAccountButtonRegister: "Crear cuenta",
    alreadyHaveAccountText: "¿Ya tienes una cuenta?",
    loginHereTextRegister: "Iniciar sesión aquí",
    back2HomeTextRegister: "Volver a la página principal",

    //Dashboard page
    darkModeDash: "Modo oscuro",
    logoutBtnDash: "Cerrar sesión",
    languageTextDash: "Idioma",
    dashboardText: "Tablero / Panel de control",
    stocksText: "Existencias / Inventario"
  }
};

// Get all possible elements
const elements = {
  // Home page elements
  welcomeMessage: document.getElementById('welcomeMessage'),
  mainContent: document.getElementById('mainContent'),
  loginBtn: document.getElementById('loginBtn'),
  registerBtn: document.getElementById('registerBtn'),
  darkmodeTextHome: document.getElementById('darkmodeTextHome'),
  languageTextHome: document.getElementById('languageTextHome'),
  loginButtonLogin: document.getElementById('loginButtonLogin'),
  
  // Login page elements
  loginText: document.getElementById('loginText'),
  nameLabel: document.getElementById('nameLabel'),
  passwordLabel: document.getElementById('passwordLabel'),
  registerTextQuestion: document.getElementById('registerTextQuestion'),
  registerLink: document.getElementById('registerLink'),
  back2HomeText: document.getElementById('back2HomeText'),
  darkmodeTextLogin: document.getElementById('darkmodeTextLogin'),
  languageTextLogin: document.getElementById('languageTextLogin'),
  
  // Register page elements
  darkmodeTextRegister: document.getElementById('darkmodeTextRegister'),
  languageTextRegister: document.getElementById('languageTextRegister'),
  registerText: document.getElementById('registerText'),
  nameTextRegister: document.getElementById('nameTextRegister'),
  emailTextRegister: document.getElementById('emailTextRegister'),
  passwordTextRegister: document.getElementById('passwordTextRegister'),
  confirmPasswordTextRegister: document.getElementById('confirmPasswordTextRegister'),
  createAccountButtonRegister: document.getElementById('createAccountButtonRegister'),
  alreadyHaveAccountText: document.getElementById('alreadyHaveAccountText'),
  loginHereTextRegister: document.getElementById('loginHereTextRegister'),
  back2HomeTextRegister: document.getElementById('back2HomeTextRegister'),

  //Dashboard page elements
    darkModeDash: document.getElementById('darkModeDash'),
    logoutBtnDash: document.getElementById('logoutBtnDash'),
    languageTextDash: document.getElementById('languageTextDash'),
    dashboardText: document.getElementById('dashboardText'),
    stocksText: document.getElementById('stocksText')
};

const languageSelector = document.querySelector('#language-selector');

languageSelector.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

const setLanguage = (language) => {
  const trans = translations[language];
  
  // Update only elements that exist on current page
  Object.keys(elements).forEach(key => {
    if (elements[key] && trans[key]) {
      elements[key].innerText = trans[key];
    }
  });
  
  console.log(`Language set to ${language}`);
}