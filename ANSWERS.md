# Assessment Answers

## 1. How to run


Clone the repository:

git clone https://github.com/Sadaf032/Tip-Calculator.git
Open index.html using a browser or Live Server.

No dependencies required.

## 2. Stack & design choices

I used Vanilla HTML, CSS and JavaScript because this task is a single-page interactive application and does not require a framework.

Decision 1:
I used a two-column layout on larger screens so users can see inputs and outputs together.

Decision 2:
I highlighted the active tip percentage button so users know which value is applied.

## 3. Responsive & accessibility

On laptops the app shows two columns.

On phones it switches to one-column layout.

Accessibility:
Visible focus states and aria labels.

Skipped:
Live screen reader announcements.

## 4. AI usage

I used ChatGPT for validation ideas and layout improvements.

I replaced parseInt() with Number() and Number.isInteger() so decimal people values are handled correctly.

## 5. Honest gap

I would improve animations and micro-interactions with more time.

Rounding policy:
Used toFixed(2) for standard currency rounding.
