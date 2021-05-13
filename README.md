# Introduction

This project is a recreation of the i-want-to-study-engineering.org page for the question 'balances', created as part of the Web Applications Development module for MSc Web Technologies. This project demonstrates Firebase integration in a React app, utilising Google authentication, Firestore, Firebase Storage and Realtime Database to build the page and allow user interaction, additionally using Bootstrap to create a clean visual layout.

The application aims to fulfil the assessment criteria by implementing the following three features:
  1. Live chat support between the user and an admin, including image upload support
  2. The ability for the admin to add a message from chat to an FAQs page
  3. Hints in the forms of percentages shown on each answer, showing how many other users have selected each answer

# Methodology

The app was created using npx-create-react-app and edited in Visual Studio Code. Initial setup included the installation of Firebase tools and Bootstrap scripts and integration of previous work carried out through chapters of the Web Applications Development module tutorials. 

In order to create the final app, the main question page was broken down into several smaller components; these included sections for the question, answers, and hint buttons, in addition to a component for the video explanation, implemented as a modal opened by clicking on the relevant button. This modal also includes the FAQ section, where admin explanations are displayed. A second modal was implemented for opening the chatroom component, accessed through the chat button in the upper right of the page, with a second button in the upper left allowing users to logout and be redirected to the login component.

The following sections demonstrate the way each key feature was implemented, showing tickets from the project kanban board on Github, screenshots of code and the structure of relevant Firebase collections, with full explanations.

## Live Chat

The implementation of live chat support began with the creation of a Firestore collection titled "Chats". 

![image](https://user-images.githubusercontent.com/70897032/117646888-351fad80-b184-11eb-8fd8-1f3db4c51f93.png)

Here each message is stored as a document with a randomly generated name, including fields for message content, image (if included with the user's message), a timestamp, user ID and a "like", denoting whether the admin has selected this message as worth adding to the FAQ. This structure was used in chapter 5 of the WAD module for an example of a chatroom with a like button for individual messages, and seemed suitable to modify for this app to implement the "add to FAQ" button.

![image](https://user-images.githubusercontent.com/70897032/117646723-0275b500-b184-11eb-8a72-0f944b9ef8a3.png)

Simple UI was created as part of the chapter 5 tutorial, which I further modified to be more clean and readable, using a simple Bootstrap icon for the image upload button. 

In order to send and receive messages through the Firestore database, React's useState and useEffect hooks were used to query the Firestore "Chats" collection and set the user's local messages. The content of the messages is then displayed in the DOM, identifying which messages should be displayed as belonging to the current user and the conversation partner depending on the matching UIDs. These are differentiated through colours and placement on the page.

(Put image here)

On sending a new message, the various fields are initialised, generating the current time for timestamp, setting the "like" boolean to false and pushing the message content and current user ID to the database as a new document. If an image is uploaded, it is first uploaded to Firebase Storage, then the download URL provided is taken and pushed to Firestore with the other values. In order to clear the text box and selected image after a message is sent, these values are then set to their initial blank state.

![image](https://user-images.githubusercontent.com/70897032/118116689-7c0ade80-b3e2-11eb-9bb4-a979087dc122.png)

## FAQs

Implementation of the FAQs feature closely connected with the chat feature, as noted by the "like" field on chat messages in the database. This feature also required the creation of an admin list, which, for the purposes of this assignment, is simply an array of UIDs listed in the Chatroom.js file. In a fully developed version of this app with a larger userbase, an admin list could also be stored in Firestore for the sake of security. 

![image](https://user-images.githubusercontent.com/70897032/118117395-79f54f80-b3e3-11eb-828c-4a2cfa058218.png)
![image](https://user-images.githubusercontent.com/70897032/118117422-824d8a80-b3e3-11eb-8039-8d368c750286.png)

Implementation of FAQs on the page itself required creation of an FAQSection component, featuring the same code from the Chatroom page in order to load all messages from Firestore. Instead of multiple chatboxes for different users, this component simply uses one chat box per FAQ item, showing only items in the "Chats" collection that have the "like" boolean set to true. 

![image](https://user-images.githubusercontent.com/70897032/118117795-f5ef9780-b3e3-11eb-9d6b-a5f99cfe7788.png)

This component is then displayed inside a narrow column in the Video modal.

(Put image here)

As this prototype site does not feature working videos, it did not seem worth creating unique videos for each button on the page in order to demonstrate this feature. If I were to develop this application further to make this possible, each individual video could have an ID that would be attached to the initial help message sent to the admin and to any further messages, allowing each FAQ item to be viewed on the relevant video only. Further work could allow the FAQ section to be collapsible (or hidden when no FAQs exist) so as not to be obtrusive to users not facing the same problems.

## Hinting

Implementing the hinting percentages involved some trial and error. New fields were added to the Firestore document where the answers were stored, labelled users 1-4.

![image](https://user-images.githubusercontent.com/70897032/118119689-aced1280-b3e6-11eb-9889-c7140e9bc0ba.png)

My initial plan was to have a user's ID added to an array under each of these headings upon clicking an answer button, however this proved harder to implement and meant each user could only be counted once and answering the question repeatedly would not affect totals if a user revisited the page or changed their answer. My solution was to set each value to a number, and increase it by one each time the relevant button was clicked.

![image](https://user-images.githubusercontent.com/70897032/118119729-bbd3c500-b3e6-11eb-916c-55991ba64845.png)

Following this, the values for each user field was accessed through React Hooks and totalled to get an overall number of users, with each individual user quantity divided by this number and multiplied by 100 to get a percentage. With percentage values set, these were then displayed using Bootstrap badges on top of the answer buttons. In order to display these badges, a button was added to the lower right of the answer section, which toggles these badges when clicked.

# Evaluation
