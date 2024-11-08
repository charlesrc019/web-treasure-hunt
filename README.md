# Treasure Hunt App
## Overview

The "Treasure Hunt" app provides a fun, interactive way to access hidden pages by entering secret codes. This app serves as a simple web-based puzzle game where users can unlock specific URLs by correctly inputting pre-defined codes. 

The frontend is styled using Bootstrap for responsive design, and JavaScript handles the code-checking and page redirection functionalities.

---

## Features

- **Secret Code Input**: Users can enter a code to unlock a hidden page.
- **Show/Hide Code**: Toggle between viewing the code and hiding it as a security measure.
- **Error Feedback**: If an incorrect code is entered, the app displays an error message.
- **Dynamic Redirection**: Based on the correct code, users are redirected to a unique page.

---

## Structure

- **HTML**: 
  - `index.html` - Main page with an input form and a responsive layout.
- **JavaScript**: 
  - `script.js` - Handles the code-checking, toggling code visibility, and loading of codes from a CSV file.
- **CSS**:
  - Inline CSS for styling the form and button elements.

---

## Installation and Setup

1. **Clone the repository** to your local machine.
2. **Ensure the following files are in the same directory**:
   - `index.html`: Main HTML file for the input form.
   - `script.js`: JavaScript file for handling logic.
   - `codes.csv`: CSV file containing secret codes and their corresponding URLs.

3. **Directory Structure**:
   - The file `codes.csv` should follow a simple format:
     ```
     code,url
     code2,url2
     ```
   - Ensure each code is unique and is associated with a specific URL.

---

## Usage Instructions

1. **Open `index.html` in a browser**.
2. **Enter the Secret Code**:
   - Type a code into the input box.
   - Click the arrow button or press `Enter`.
3. **Toggle Code Visibility**:
   - Click the eye icon to reveal or hide the code input.
4. **Invalid Code Handling**:
   - If an invalid code is entered, an error message will appear below the input.

### Expected Behavior

- **Correct Code**: Redirects to the associated URL.
- **Incorrect Code**: Displays an error message for 5 seconds, allowing the user to re-enter a code.

---

## Technical Details

- **JavaScript Functions**:
  - `codeLoad()`: Loads the `codes.csv` file via AJAX and stores the codes in an array.
  - `codeReveal()`: Toggles the visibility of the input field.
  - `codeCheck()`: Checks the inputted code against the stored array and redirects if a match is found.
  - `errWarn()` & `errHide()`: Controls the display of error messages.

---

## Troubleshooting

- **CSV Loading Errors**: Ensure the `codes.csv` file is in the same directory as `index.html` and contains valid data.
- **Accessing Links**: If URLs do not redirect, check the URL format in `codes.csv`.
