# JS-Client-Side-Login-Simulation

A client-side JavaScript application that simulates user authentication functionality, including account creation and login processes.

## Overview

This project demonstrates basic authentication workflows using client-side JavaScript, HTML, and CSS. It provides a functional simulation of user registration and login systems without backend integration.

## Project Structure

```
JS-Client-Side-Login-Simulation/
├── assets/
  ├── brightness_6_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg
  ├── brightness_7_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg
  ├── letter-w-svgrepo-com (2).svg
  └── logout_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg     
├── css/
  └── styles.css      
├── js/
  ├── auth.js
  ├── chart.js
  ├── chart.umd.min.js
  ├── darkmode.js
  └── langchange.js    
├── home.html        
├── login.html       
├── register.html    
└── dashboard.html    
```

## Features

- User registration with form validation
- User login authentication
- Session management using browser storage
- Responsive user interface
- Dashboard access for authenticated users
- Client-side data persistence

## Technology Stack

- HTML (43.0%)
- JavaScript (37.2%)
- CSS (19.8%)

## Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or backend required

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Cleoven-Calderon/JS-Client-Side-Login-Simulation.git
cd JS-Client-Side-Login-Simulation
```

2. Open the project:
```bash
# Simply open home.html in your web browser
# Or use a local development server for better experience
```

## Usage

1. Open `home.html` in your web browser to start the application

2. Navigate to the registration page to create a new account

3. Fill in the registration form with required information

4. After registration, log in using your credentials on the login page

5. Access the dashboard upon successful authentication

## How It Works

This simulation uses browser's local storage to store user credentials and session data. The authentication process includes:

- Input validation on registration and login forms
- Password verification
- Session token management
- Protected route access (dashboard)

## Security Notice

This is a demonstration project for educational purposes only. It implements client-side authentication which is not secure for production use. In real-world applications, authentication should always be handled server-side with proper security measures including:

- Password hashing
- HTTPS encryption
- Server-side validation
- Secure session management
- Protection against common vulnerabilities

## Development

To modify or extend the application:

- Update HTML files for structure changes
- Modify JavaScript files in the `js/` directory for functionality
- Edit CSS files in the `css/` directory for styling
- Add assets to the `assets/` directory

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This is a school project created for educational purposes.

