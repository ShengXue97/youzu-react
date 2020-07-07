## Overview
A simple React website which allows you to upload Singapore primary/secondary school exam papers in PDF, and receive
the output of a CSV file containing the text of the questions.

## Website
This project website is available [here](https://shengxue97.github.io/youzu-react/).

## Breakdown
The front-end code of this project is split into three (build, public and src) folders. SRC is the most relevant folder.

#### SRC
The src folder hosts all the logic for the front-end UI, with `App.js` routing all the essential components in the 
components folder to the back-end flask framework. The main components are as follows:

##### 1. Home.js
This is the component responsible for the first page the user sees on loading the UI. It allows the user to upload PDFs  
for processing on the back-end, or process multiple PDFs at once using the file selector, since the page features over
10,000 available PDFs from different schools and subjects.

Helper components in this Component are `Drawer.js` and `ServerInfo.js`. `Drawer.js` is the sidebar that allows the user
to navigate to different pages, while `ServerInfo.js` controls which server the front-end is running on 
(since we use both development and production builds).

The essential functions in Home.js are, but not limited to:
* `pollServer()` *(Posts file to back-end)*
* `sendFileToServer()` *(Posts file including specified pages to process, to the back-end)*
* `onDrop()` *(Drop-zone for drag-and-drop feature)*
* `processFile()` *(Sends POST request to back-end, under the user's ip address and a single user session)*

While there are many other essential features, these are crucial for the site to work and communicate with the back-end 
server. The other features can be found in the component and have self-explanatory purposes on loading the UI.

##### 2. Edit.js
This is main feature of the project, where the user is brought to this page upon the successful processing of a PDF to 
an editable .csv file. By sending a GET request to the back-end server, the processed data is displayed beautifully on 
the Edit page for the user to edit the questions and diagrams, before saving them as a Workspace or selected/all 
questions to the Database.

The helper component in this Component is `Question.js`, which is solely responsible for allowing mutable question 
titles and options, along with other functions that work on *individual* questions.
 
The essential functions in `Edit.js` are, but not limited to:
* `handleOnSaveWorkspace()` *(Saves the current edited workspace into the Library, where the user can re-access later)*
* `handleCleanCsvRows()` *(Saves the current version of the workspace as a .csv file, with all relevant paper details)*
* `handleOnRevertToOriginal()` *(Reverts all changes to the last time the user saved **and** closed the workspace)*
* `handleOnUpdateDatabase()` *(Sends all questions with valid answers to the DataBase, **overriding** questions of the 
same paper already in the DataBase.)*
* `handleOnUploadQnsToDatabase()` *(Similar, but overrides DataBase with only questions that have their checkboxes 
ticked)*
* `handleOnDeleteQuestions()` *(Deletes all questions that have their checkboxes ticked)*

The helper component, `Question.js`, also contains some essential functions of its own:
* `handleOnAddQuestion()` *(Appends a new question below the question that had the "Add Question" button clicked)*
* `handleonDeleteSingleQuestion()` *(Deletes that particular question who had its "Delete Question" button clicked)*
* `handleOnAddimage()` *(Adds a diagram to the diagram portion for that question, based on the page preview crop)*
* `handleOnDeleteImage()` *(Deletes that particular diagram from that question)*

While there are other essential functions, these are some of them that make up the required logic for the Edit page. The
other unmentioned features are also self-explanatory in `Edit.js`/`Question.js`, such as checkbox selection logic.

##### 3. Library.js
This component is responsible for making the saved content from the back-end (/Workspaces under youzu-flask repository) 
accessible and displayed on the front-end UI.

While there are no helper components, `Library.js` is heavily reliant on communication with the back-end server via 
[axios](https://www.npmjs.com/package/axios "Axios Page"), a `Promise` based HTTP client for the browser and node.js.

The essential functions in `Library.js` are, but not limited to:
* `listWorkspace()` *(Posts the user ip address and port to the server, and displays the server response data containing 
all the names of the saved workspaces under the /Workspace folder in the flask repository)*
* `openWorkspace()` *(Similar communication with the back-end server to open a new window for the Edit page, using 
 data from the server response corresponding to the selected Workspace)*
* `deleteWorkspace()` *(Similar communication with the back-end server, but to remove that Workspace using its name)*

While there are other essential functions, the three listed are the most important in the logic of the Library.

##### 4. Database.js
This component is responsible for allowing the user to view all questions and paper details saved on the DataBase 
using [PyMySQL](https://pypi.org/project/PyMySQL/ "PyMySQL Homepage"), a Pure Python MySQL Driver.

There are also no helper components, except heavy reliance on the back-end communication to `App.py` on the youzu-flask 
repository.

The most essential function in Database.js is `getDatabase()`, which receives the data from the back-end server by 
making a request with `axios.post`, before displaying the response data for the user's easy viewing.

Using [material-table](https://material-table.com/#/ "material-table's homepage"), a React Data Table component based on
[material-ui](https://material-ui.com/ "material-ui's homepage"), many features are available on the Database and 
Library pages (such as a search feature and download button for users that want a .csv version of the DataBase/Library.)