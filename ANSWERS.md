## 1. How to run

To run this project on a fresh machine:

### Steps:
- Clone the repository:

git clone https://github.com/Sadaf032/Tip-Calculator.git

Open the project folder
Open index.html in any browser (Chrome, Firefox, Edge)

OR

Using VS Code:
Open project in VS Code
Right-click on index.html
Click "Open with Live Server"

No installation or dependencies are required.

##2. Stack & design choices

I used Vanilla HTML, CSS, and JavaScript because this is a simple single-page frontend project. It does not need any framework and runs directly in the browser.

Design Decision 1:

I used a two-column layout on desktop screens so that input fields and output results are visible at the same time. This improves usability and makes the app easier to use.

Design Decision 2:

I added active state styling on tip percentage buttons (10%, 15%, 20%) so the user can clearly see which tip option is selected.

##3. Responsive & accessibility
Responsive behavior:
Mobile (360px): The layout changes to a single column so inputs and results stack vertically for better readability.
Desktop (1440px): A two-column layout is used where inputs and results are shown side by side.

Accessibility:
All input fields have labels for better understanding
Focus states are visible for keyboard navigation
Inline error messages are shown near the inputs instead of alerts
Skipped feature:

I did not implement ARIA live regions because of time constraints and focus on core functionality.

##4. AI usage

I used ChatGPT to help with:

Input validation logic for bill, tip,
responsive design ideas and handling calculation logic improvements
Modification made:

AI suggested using parseInt() for numeric inputs, but I changed it to Number() so that decimal values (like 250.75) are handled correctly.

##5. Honest gap

The UI can still be improved with animations and smoother transitions. This is something I would improve with more time.

Rounding policy:

I used toFixed(2) so that all currency values are shown with 2 decimal places for consistency.

