
https://e-commerce-product-entry-form.vercel.app/
<img width="1920" height="1192" alt="screencapture-127-0-0-1-5500-index-html-2025-11-25-13_26_49" src="https://github.com/user-attachments/assets/50eea46b-d769-433d-a9eb-b53a6ae80dc3" />
# 🛒 E-Commerce Product Entry Form

## 🌟 Overview

This project is a single-page, dynamic application designed to demonstrate client-side data capture and real-time DOM manipulation. It simulates an administrative form used on an e-commerce platform for entering new product details and instantly displaying them in a live catalog preview.

The application is built using standard web development languages and styled with the popular Bootstrap framework for a clean, responsive, and user-friendly interface.

## 🚀 Live Demo

You can view the live, deployed version of the project here:

[E-Commerce Product Entry Form Demo](https://e-commerce-product-entry-form.vercel.app/)

## ✨ Features

* **Dynamic Submission:** Product details are displayed immediately upon form submission without a page reload (using JavaScript's `event.preventDefault()` and DOM manipulation).
* **Product Card Layout:** Each entry is rendered as a clean, responsive card, providing a visual preview of the catalog item.
* **Detailed Data Capture:** Supports essential e-commerce fields including:
    * Product Name
    * Price
    * Category (Dropdown)
    * Product Image (via URL)
    * Description
    * Ratings (out of 5)
    * Warranty Period
    * Company Name
    * Return Policy
* **Responsive Design:** Styled with Bootstrap 5 to ensure a consistent and optimized viewing experience across desktop, tablet, and mobile devices.
* **Error Handling:** Includes basic image error handling (`onerror` attribute) to display a placeholder if a submitted image URL fails to load.

## 💻 Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Structure and Semantic Markup |
| **CSS3** | Custom styling, including card hover effects and category colors |
| **JavaScript (ES6+)** | Core functionality, event handling, data extraction, and dynamic DOM manipulation |
| **Bootstrap 5** | Responsive layout (Grid system), form styling, and UI components (Cards, Badges) |

## ⚙️ Project Structure

The project follows a standard separation of concerns using three distinct files:
