# Introduction

This project is a recreation of the i-want-to-study-engineering.org page for the question 'balances', created as part of the Web Applications Development module for MSc Web Technologies. This project demonstrates Firebase integration in a React app, utilising Google authentication, Firestore, Firebase Storage and Realtime Database to build the page and allow user interaction, additionally using Bootstrap to create a clean visual layout.

The application aims to fulfil the assessment criteria by implementing the following three features:
  1. Live chat support between the user and an admin, including image upload support
  2. The ability for the admin to add a message from chat to an FAQs page
  3. Hints in the forms of percentages shown on each answer, showing how many other users have selected each answer

# Methodology

The app was created using npx-create-react-app and edited in Visual Studio Code. Initial setup included the installation of Firebase tools and Bootstrap scripts and integration of previous work carried out through chapters of the Web Applications Development module tutorials. In order to create the final app, the main question page was broken down into several smaller components; these included sections for the question, answers, and hint buttons, in addition to a component for the video explanation, implemented as a modal opened by clicking on the relevant button. This modal also includes the FAQ section, where admin explanations are displayed. A second modal was implemented for opening the chatroom component, accessed through the chat button in the upper right of the page, with a second button in the upper left allowing users to logout and be redirected to the login component.

## Live Chat

## FAQs

## Hinting

# Evaluation
