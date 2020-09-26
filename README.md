This is a Contacts List Web in which you can send an OTP (via SMS) from a list of contacts and see History of OTP Messages. 

Description of the various files:


<p>├── App.css : Base css</p>
<p>├── App.js : It contains main structure of routes in the react app.</p>
<p>├── App.test.js :</p>
<p>├── components: This contains all the components I used for the app. </p>
<p>│ ├── contact_details.js : This generates card to show contact and history details after selecting a contact. </p>
<p>│ ├── contact_list.js: This extract all contacts from server and passes that to List Component.</p>
<p>│ ├── home.js</p>
<p>│ ├── List : This folder contains all file which generate list of rows for contact list and history list.</p>
<p>│ │ ├── Contacts.js : Generates contact row</p>
<p>│ │ ├── History.js : Generates history row</p>
<p>│ │ ├── index.js:</p>
<p>│ │ └── Styles.js: all styles for list</p>
<p>│ ├── msg_history.js: This extract all message history from server and passes that to List Component. </p>
<p>│</p>
<p>│ └── send_otp.js: This contains all the logic related to the page where otp is sent to contact.</p>
