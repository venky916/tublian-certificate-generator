# Certificate Generator

This Certificate Generator application allows users to create a personalized certificate in PDF format. Users can enter details such as the name, certificate description, certificate ID, and date, preview the certificate in real-time, and download it as a PDF.

## Tech Stack

- **React.js** with Vite - For the front-end framework
- **Material UI** - For form components and UI elements
- **CSS** - For custom styling
- **html2canvas** and **jsPDF** - For generating and downloading the PDF

## Features

- **Real-Time Preview**: Instantly see the certificate details as they’re entered in the form.
- **Download as PDF**: Generate a high-quality PDF version of the certificate with a single click.
- **Form Inputs**: Fields for the certificate holder's name, description, certificate ID, and issue date.
- **Responsive Design**: The layout adapts for various screen sizes.

## Project Structure

- `App.js`: Manages the main layout, including the sidebar form and certificate preview.
- `CertificateTemplate.js`: Contains the certificate template structure and layout.
- `SidebarForm.js`: Handles user input for certificate details.
- `App.css`: Contains styles for the main layout and components.

## Workflow

1. **Input Details**: Use the sidebar form to input the certificate holder's name, description, certificate ID, and date.
2. **Preview Certificate**: As you enter details, the certificate updates in real-time, displaying changes on the right side.
3. **Download PDF**: When all details are filled, click the "Download as PDF" button to save the certificate as a PDF file.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/certificate-generator.git
   cd certificate-generator
   ```
2. **Install dependencies**:
    ```bash
        npm install
    ```
3. **Start the development server**:
    ```bash
        npm run dev
    ```
4. **Open the app**: Visit **http://localhost:5173** to see the certificate generator in action.


## How to Use

1. Enter the required details (name, description, certificate ID, and date) in the sidebar form.
2. Review the certificate preview on the right.
3. Click **Download as PDF** to generate and download the certificate.

## Folder Structure

- **src**
  - `App.js`: Main application file with layout and routing
  - **components**
    - `CertificateTemplate.jsx`: Certificate layout component
  - **assets**: Folder for images like logos and background images
  - `App.css`: Global styles for the app

## Additional Notes

- Ensure that all input fields are filled before downloading to avoid incomplete certificates.
- Customize the certificate by adjusting styles in `CertificateTemplate.js` or `App.css`.

## Screenshots

### Certificate Without Information
![Certificate Without Information](src/assests/certificate-without-info.png)
![Certificate Without Information](\src\assets\certificate-without-info.png)

## License

This project is open-source and available under the MIT License.
