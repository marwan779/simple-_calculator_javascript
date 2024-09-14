JavaScript Calculator
--------------------

![Screenshot (249)](https://github.com/user-attachments/assets/3e4c8a46-683d-4609-b1dd-df3e3332c725)

Overview
--------
This is a simple calculator application built with HTML, CSS, and JavaScript. The calculator mimics the look of real calculators, featuring a digital seven-segment display and an intuitive user interface that allows users to perform basic arithmetic operations.

Features
-------
Realistic digital display using the Seven Segment font.
Basic operations: Addition (+), Subtraction (-), Multiplication (*), and Division (/).
Error handling for invalid inputs with a Syntax Error message that clears after a short delay.
Responsive design, ensuring a smooth experience across all devices.
Animated buttons that change color when clicked or hovered over for enhanced UX.

Technologies Used
-----------------
HTML5: To structure the layout of the calculator.
CSS3: For the design, including the use of HSL colors for modern appearance.
JavaScript: Handles all the logic for updating the display and performing calculations.

How to Use
----------
Clone the repository:
bash
Copy code
git clone  https://github.com/marwan779/simple-_calculator_javascript.git
Open index.html in your browser to start using the calculator.

Code Structure
--------------
HTML: Defines the structure and elements, including buttons and display input.
CSS: Styles the calculator and ensures responsiveness.
JavaScript: Manages the logic for appending values to the display, performing calculations, and handling errors.

Key JavaScript Functions
------------------------
AppendToDisplay(input): Appends the clicked button's value to the display.
Calculate(): Evaluates the expression in the display and outputs the result.
Clear(): Clears the display.
