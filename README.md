📊 EMI Calculator

A modern and responsive web application built with Flask that helps users calculate the Equated Monthly Installment (EMI) for a loan. The calculator provides a clear breakdown of the monthly payment, total interest payable, and the total amount to be paid back over the loan tenure.
✨ Features

    EMI Calculation: Accurately calculates the EMI based on principal amount, interest rate, and loan tenure.

    Responsive Design: The user interface adjusts seamlessly to different screen sizes, providing an optimal experience on both desktop and mobile devices.

    Loan Tenure Flexibility: Supports both years and months as units for the loan tenure.

    Real-time Results: Displays the calculation results (Monthly EMI, Total Interest Payable, Total Payment) dynamically without a full page reload.

    User-Friendly Interface: Features a clean and intuitive design with a professional look.


💻 Technologies Used

    Backend:

        Python: The core programming language.

        Flask: A lightweight and powerful web framework for building the application.

    Frontend:

        HTML: For the structure of the web page.

        Bootstrap 5: A popular CSS framework for responsive design and styling.

        JavaScript: To handle the EMI calculation logic on the client-side.

🚀 Installation & Setup

Follow these steps to get a copy of the project up and running on your local machine.
Prerequisites

    Python 3.6+

    pip (Python package installer)

Step 1: Clone the Repository

Clone the project from your Git repository.

git clone [https://github.com/your-username/your-repository.git](https://github.com/your-username/your-repository.git)
cd your-repository

Step 2: Create a Virtual Environment

It's a best practice to use a virtual environment to manage project dependencies.

python3 -m venv venv

Step 3: Activate the Virtual Environment

    On macOS / Linux:

    source venv/bin/activate

    On Windows:

    venv\Scripts\activate

Step 4: Install Dependencies

Install all the required Python libraries from the requirements.txt file.

pip install -r requirements.txt

Step 5: Run the Application

Start the Flask development server.

flask run

The application will be running at http://127.0.0.1:5000.
📄 Project Structure

.
├── app.py
├── requirements.txt
├── Procfile (for Heroku deployment)
├── vercel.json (for Vercel deployment)
└── templates/
    └── index.html
└── static/
    ├── css/
    │   └── style.css
    └── js/
        └── index.js

📄 License

This project is open-source and available under the MIT License.
