This is a Contacts List Web in which you can send an OTP (via SMS) from a list of contacts and see History of OTP Messages. 

Some Explanation about the various files:


<p>├── App.css : Base css</p>
├── App.js : It contains main structure of routes in the react app.
├── App.test.js :
├── components: This contains all the components I used for the app.
│ ├── contact_details.js : This generates card to show contact and history details after
selecting a contact.
│ ├── contact_list.js: This extract all contacts from server and passes that to List Component.
│ ├── home.js
│ ├── List : This folder contains all file which generate list of rows for contact list and history
list.
│ │ ├── Contacts.js : Generates contact row
│ │ ├── History.js : Generates history row
│ │ ├── index.js:
│ │ └── Styles.js: all styles for list
│ ├── msg_history.js: This extract all message history from server and passes that to List
Component.
│
│ └── send_otp.js: This contains all the logic related to the page where otp is sent to contact.
├── index.css
├── index.js
├── logo.svg
├── serviceWorker.js
└── setupTests.js
