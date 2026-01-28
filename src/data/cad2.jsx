const CAD2 = [
  {
    "id": 65,
    "text": "A graphical view of relationships among tables is a <blank>.",
    "options": [
      "A. Schema map",
      "B. Dependency view",
      "C. Graphical User Interface",
      "D. Map source report"
    ],
    "correctAnswers": [
      "A. Schema map"
    ],
    "multipleChoice": false
  },
  {
    "id": 66,
    "text": "Which one of the following is true for the Application Picker?",
    "options": [
      "A. All custom application scope and the Global scope appear in the Application Picker",
      "B. All applications in ServiceNow, including baseline applications like Incident, appear in the Application Picker",
      "C. Only custom applications appear in the Application Picker",
      "D. Only downloaded applications appear in the Application Picker"
    ],
    "correctAnswers": [
      "A. All custom application scope and the Global scope appear in the Application Picker"
    ],
    "multipleChoice": false
  },
  {
    "id": 67,
    "text": "When creating an application through the Guided Application Creator, which of the following is a user experience option?",
    "options": [
      "A. Portal",
      "B. Mobile",
      "C. Self-service",
      "D. Workspace"
    ],
    "correctAnswers": [
      "B. Mobile"
    ],
    "multipleChoice": false
  },
  {
    "id": 68,
    "text": "When writing a Client Script to provide feedback targeted at a specific field, which method should be used?",
    "options": [
      "A. g_form.showInfoMessage()",
      "B. g_form.showFieldMsg()",
      "C. g_form.addInfoMessage()",
      "D. g_form.addFieldMsg()"
    ],
    "correctAnswers": [
      "B. g_form.showFieldMsg()"
    ],
    "multipleChoice": false
  },
  {
    "id": 69,
    "text": "Which actions can a Business Rule take without scripting?",
    "options": [
      "A. Set field values and write to the system log",
      "B. Set field values and generate an event",
      "C. Set field values and add message",
      "D. Set field values and query the database"
    ],
    "correctAnswers": [
      "C. Set field values and add message"
    ],
    "multipleChoice": false
  },
  {
    "id": 70,
    "text": "Which server-side object provides methods for working with dates when writing a script in a privately scoped application?",
    "options": [
      "A. GlideDateTime",
      "B. GlideRecord",
      "C. GlideSystem",
      "D. current"
    ],
    "correctAnswers": [
      "A. GlideDateTime"
    ],
    "multipleChoice": false
  },
  {
    "id": 71,
    "text": "Application developers can specify which ServiceNow page a user sees after submitting a new record using the Record Producer UI. How is the page specified?",
    "options": [
      "A. Create an application property to store the URL",
      "B. Configure the page in the Module that opens the Record Producer UI",
      "C. Write an after Business Rule script for the Record Producer's table: window.redirect = \"<URL>\";",
      "D. Write a script in the Record Producer's Script field: producer.redirect = \"<URL>\";"
    ],
    "correctAnswers": [
      "D. Write a script in the Record Producer's Script field: producer.redirect = \"<URL>\";"
    ],
    "multipleChoice": false
  },
  {
    "id": 72,
    "text": "Identify characteristic(s) of a Record Producer. (Choose three.)",
    "options": [
      "A. All records created using this strategy are inserted into the Requested Item [sc_req_item] table.",
      "B. Each field prompts the user with a question rather than a field label.",
      "C. They must be scripted.",
      "D. You can script behaviors of fields in the user interface.",
      "E. Graphics can be included on the user interface."
    ],
    "correctAnswers": [
      "B. Each field prompts the user with a question rather than a field label.",
      "D. You can script behaviors of fields in the user interface.",
      "E. Graphics can be included on the user interface."
    ],
    "multipleChoice": true
  },
  {
    "id": 73,
    "text": "Which server-side API debug log method is available for scoped applications?",
    "options": [
      "A. gs.log()",
      "B. gs.info()",
      "C. gs.debuglog()",
      "D. gs.print()"
    ],
    "correctAnswers": [
      "B. gs.info()"
    ],
    "multipleChoice": false
  },
  {
    "id": 74,
    "text": "Which script types execute on the server? (Choose three.)",
    "options": [
      "A. Business Rule",
      "B. Client Scripts",
      "C. UI Policies",
      "D. Script Actions",
      "E. Scheduled Jobs"
    ],
    "correctAnswers": [
      "A. Business Rule",
      "D. Script Actions",
      "E. Scheduled Jobs"
    ],
    "multipleChoice": true
  },
  {
    "id": 75,
    "text": "What is the best UX format to use for lists and forms?",
    "options": [
      "A. Forms",
      "B. Lists",
      "C. Standard",
      "D. Classic"
    ],
    "correctAnswers": [
      "D. Classic"
    ],
    "multipleChoice": false
  },
  {
    "id": 76,
    "text": "When creating a table in a privately-scoped application, which four Access Controls are created for the table?",
    "options": [
      "A. Insert, Delete, Query, Write",
      "B. Create, Delete, Read, Write",
      "C. Create, Delete, Read, Update",
      "D. Insert, Delete, Query, Update"
    ],
    "correctAnswers": [
      "B. Create, Delete, Read, Write"
    ],
    "multipleChoice": false
  },
  {
    "id": 77,
    "text": "Which one of the following is true for this script fragment? g_user.hasRole('x_my_app_user');",
    "options": [
      "A. There is no g_user.hasRole() method",
      "B. The method returns false only if the currently logged in user has the x_my_app_user role",
      "C. The method returns true only if the currently logged in user has the x_my_app_user role",
      "D. The method returns true if the currently logged in user has the x_my_app_user role or the admin role"
    ],
    "correctAnswers": [
      "D. The method returns true if the currently logged in user has the x_my_app_user role or the admin role"
    ],
    "multipleChoice": false
  },
  {
    "id": 78,
    "text": "Which one of the following database operations cannot be controlled with Application Access?",
    "options": [
      "A. Query",
      "B. Update",
      "C. Create",
      "D. Delete"
    ],
    "correctAnswers": [
      "A. Query"
    ],
    "multipleChoice": false
  },
  {
    "id": 79,
    "text": "For Application Access there is a configuration option called Allow access to this table via web services. Which one of the following statements is true when this option is selected?",
    "options": [
      "A. This option restricts the ability to delete records via web services but records can always be read",
      "B. Even when not selected, users with the correct permissions can use web services to access the table's records",
      "C. This option restricts access only to SOAP web services but does not apply to REST",
      "D. The user performing the query via web services must have the correct permissions to access the table's records"
    ],
    "correctAnswers": [
      "D. The user performing the query via web services must have the correct permissions to access the table's records"
    ],
    "multipleChoice": false
  },
  {
    "id": 80,
    "text": "Which of the following statements must evaluate to true for a user to pass an Access Control? (Choose three.)",
    "options": [
      "A. The user has one of the roles specified in the Required roles related list.",
      "B. Scripts configured in the Access Control must evaluate to true.",
      "C. Other matching Access Controls for the records evaluate to true.",
      "D. Conditions configured in the Access Control must evaluate to true.",
      "E. The user must be granted access through a business rule."
    ],
    "correctAnswers": [
      "A. The user has one of the roles specified in the Required roles related list.",
      "B. Scripts configured in the Access Control must evaluate to true.",
      "D. Conditions configured in the Access Control must evaluate to true."
    ],
    "multipleChoice": true
  },
  {
    "id": 81,
    "text": "What is a workflow context?",
    "options": [
      "A. The table for which a workflow is defined plus any conditions such as \"Active is true\"",
      "B. It is generated from a workflow version, executes activities, and follows transitions",
      "C. The business reason or process for which a workflow is designed",
      "D. It is a checked out workflow which is being edited"
    ],
    "correctAnswers": [
      "B. It is generated from a workflow version, executes activities, and follows transitions"
    ],
    "multipleChoice": false
  },
  {
    "id": 82,
    "text": "Which one of the following is a benefit of creating an Application Properties page for each application you develop?",
    "options": [
      "A. Application Properties allow a developer to override the application properties inherited from ServiceNow",
      "B. An Application Properties page is a good landing page for an application",
      "C. Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts",
      "D. Application users know to go to the Application Properties page to change the appearance of an application"
    ],
    "correctAnswers": [
      "C. Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts"
    ],
    "multipleChoice": false
  },
  {
    "id": 83,
    "text": "Which one of the following is NOT an example of when an application might use a Scheduled Script Execution (Scheduled Job)?",
    "options": [
      "A. The application needs to send weekly email reminders to requestors for all records on a table",
      "B. The application needs to run a clean up script on the last day of every month",
      "C. The application needs to query the database every day to look for unassigned records",
      "D. The application needs to run a client-side script at the same time every day"
    ],
    "correctAnswers": [
      "D. The application needs to run a client-side script at the same time every day"
    ],
    "multipleChoice": false
  },
  {
    "id": 84,
    "text": "Which one of the following objects CANNOT be used in a Script Action script?",
    "options": [
      "A. previous",
      "B. GlideRecord",
      "C. event",
      "D. current"
    ],
    "correctAnswers": [
      "A. previous"
    ],
    "multipleChoice": false
  },
  {
    "id": 85,
    "text": "How does ServiceNow match inbound email to existing records?",
    "options": [
      "A. Watermark",
      "B. Record link",
      "C. Subject line",
      "D. sys_id"
    ],
    "correctAnswers": [
      "A. Watermark"
    ],
    "multipleChoice": false
  },
  {
    "id": 86,
    "text": "When debugging Email Notifications, what must you check on a user record? (Choose three.)",
    "options": [
      "A. Active must be true.",
      "B. The First name and Last name fields must have values.",
      "C. The value in the Notification field must be set to enabled.",
      "D. The user must not be locked out.",
      "E. The Email field must have a value."
    ],
    "correctAnswers": [
      "A. Active must be true.",
      "C. The value in the Notification field must be set to enabled.",
      "E. The Email field must have a value."
    ],
    "multipleChoice": true
  },
  {
    "id": 87,
    "text": "What are web services?",
    "options": [
      "A. Methods used to create and maintain UI Pages",
      "B. Methods used to allow applications to connect to other software applications over a network",
      "C. Methods used to discover a wide variety of systems and applications",
      "D. They provide a customer-facing view of available service and product offerings provided by departments within the organization"
    ],
    "correctAnswers": [
      "B. Methods used to allow applications to connect to other software applications over a network"
    ],
    "multipleChoice": false
  },
  {
    "id": 88,
    "text": "Which of the following methods is NOT part of the ServiceNow REST API?",
    "options": [
      "A. COPY",
      "B. GET",
      "C. DELETE",
      "D. POST"
    ],
    "correctAnswers": [
      "A. COPY"
    ],
    "multipleChoice": false
  },
  {
    "id": 89,
    "text": "You are developing the MyApp application that has a table, Table A. When the MyApp application is installed on an instance, you want Table A's records to be installed as part of the application. Table A's records will be installed when:",
    "options": [
      "A. Table A is active and extends the Task table",
      "B. Table A's records are added to the application record using the Create Application Files context menu item",
      "C. Table A has an automatic number counter for new records",
      "D. Table A is not included in the System Clone > Exclude Tables list"
    ],
    "correctAnswers": [
      "B. Table A's records are added to the application record using the Create Application Files context menu item"
    ],
    "multipleChoice": false
  },
  {
    "id": 90,
    "text": "How can an application link to a repository behind a firewall?",
    "options": [
      "A. This option is not supported.",
      "B. Link an application to source control through a MID Server.",
      "C. Link an application to source control through an access token.",
      "D. Link an application to source control with multi-factor authentication."
    ],
    "correctAnswers": [
      "B. Link an application to source control through a MID Server."
    ],
    "multipleChoice": false
  },
  {
    "id": 91,
    "text": "What is the ServiceNow store?",
    "options": [
      "A. Downloadable content ServiceNow script archive",
      "B. Alternate name for the ServiceNow Developer Share site",
      "C. The source for ServiceNow Community created developer content",
      "D. Marketplace for free and paid certified ServiceNow applications and integrations"
    ],
    "correctAnswers": [
      "D. Marketplace for free and paid certified ServiceNow applications and integrations"
    ],
    "multipleChoice": false
  },
  {
    "id": 92,
    "text": "Tables that extend a table do what?",
    "options": [
      "A. Automatically update the application scope",
      "B. Do not inherit the parent’s fields",
      "C. Sometimes inherit the parent’s fields",
      "D. Inherit the parent’s fields"
    ],
    "correctAnswers": [
      "D. Inherit the parent’s fields"
    ],
    "multipleChoice": false
  },
  {
    "id": 93,
    "text": "When creating an application through the Guided Application Creator, which of the following is NOT an option for creating a table?",
    "options": [
      "A. Create table from template",
      "B. Create table from scratch",
      "C. Extend a table",
      "D. Upload spreadsheet"
    ],
    "correctAnswers": [
      "A. Create table from template"
    ],
    "multipleChoice": false
  },
  {
    "id": 94,
    "text": "Server-side scripts manage what?",
    "options": [
      "A. Database and backend",
      "B. Playbook access",
      "C. User access",
      "D. Forms and Fields"
    ],
    "correctAnswers": [
      "A. Database and backend"
    ],
    "multipleChoice": false
  },
  {
    "id": 95,
    "text": "What intuitive development interface guides users through the initial application development process?",
    "options": [
      "A. Guided Tour Designer",
      "B. Guided Application Creator",
      "C. ServiceNow Studio",
      "D. Flow Designer"
    ],
    "correctAnswers": [
      "B. Guided Application Creator"
    ],
    "multipleChoice": false
  },
  {
    "id": 96,
    "text": "What are some benefits of developing private, scoped applications? (Choose two.)",
    "options": [
      "A. To avoid using a code repository like GitHub or GitLab",
      "B. To reduce risk at code collisions",
      "C. To enable installation and uninstallation of an application",
      "D. To replicate ServiceNow functions a private scope"
    ],
    "correctAnswers": [
      "B. To reduce risk at code collisions",
      "C. To enable installation and uninstallation of an application"
    ],
    "multipleChoice": true
  },
  {
    "id": 97,
    "text": "Which of the following statements is NOT true for the Form Designer?",
    "options": [
      "A. To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
      "B. To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form.",
      "C. To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button.",
      "D. To create a new field on a form’s table, drag the appropriate data type from the Field Types tab to the form and then configure the new field."
    ],
    "correctAnswers": [
      "A. To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form."
    ],
    "multipleChoice": false
  },
  {
    "id": 98,
    "text": "What records are used to track cross-scope applications or scripts that request access to an application, application resource, or event?",
    "options": [
      "A. Restricted caller access records",
      "B. Caller tracking records",
      "C. Access control level records",
      "D. Cross-scope access records"
    ],
    "correctAnswers": [
      "A. Restricted caller access records"
    ],
    "multipleChoice": false
  },
  {
    "id": 99,
    "text": "Which ATF Test step allows you to create a user with speeded roles and groups for the test?",
    "options": [
      "A. Create a group",
      "B. Impersonation",
      "C. Create a user",
      "D. Create a role"
    ],
    "correctAnswers": [
      "C. Create a user"
    ],
    "multipleChoice": false
  },
  {
    "id": 100,
    "text": "What plugin enables the Guided Application Creator?",
    "options": [
      "A. com.glide.sn-guided-app-creator",
      "B. com.glide.service_creator",
      "C. com.glide.snc.apps_creator",
      "D. com.snc.apps_creator_template"
    ],
    "correctAnswers": [
      "A. com.glide.sn-guided-app-creator"
    ],
    "multipleChoice": false
  },
  {
    "id": 101,
    "text": "Which of the following can be an external data source for a ServiceNow application?",
    "options": [
      "A. Microsoft Excel File",
      "B. Data provided by a public web service using SOAP or REST",
      "C. CSV file",
      "D. All of the above"
    ],
    "correctAnswers": [
      "D. All of the above"
    ],
    "multipleChoice": false
  },
  {
    "id": 102,
    "text": "Which one of the following is true for the Application Picker and Application Scope?",
    "options": [
      "A. Global is a reserved application which does not appear in the Application Picker",
      "B. Selecting an application from the Application Picker does not set the Application Scope",
      "C. Selecting an application from the Application Picker sets the Application Scope",
      "D. Selecting Global in the Application Picker sets the Application Scope to Incident"
    ],
    "correctAnswers": [
      "C. Selecting an application from the Application Picker sets the Application Scope"
    ],
    "multipleChoice": false
  },
  {
    "id": 103,
    "text": "Which of the following is an available feature in Studio? (Choose two.)",
    "options": [
      "A. Push to update set",
      "B. Merge branches",
      "C. Search code",
      "D. Push to external source control"
    ],
    "correctAnswers": [
      "C. Search code",
      "D. Push to external source control"
    ],
    "multipleChoice": true
  },
  {
    "id": 104,
    "text": "The Task table is an example of which of the following? (Choose two.)",
    "options": [
      "A. Parent class",
      "B. Legacy class",
      "C. Child class",
      "D. Base class"
    ],
    "correctAnswers": [
      "A. Parent class",
      "D. Base class"
    ],
    "multipleChoice": true
  },
  {
    "id": 105,
    "text": "Which of the following is true about deleting fields from a table?",
    "options": [
      "A. Table records are deleted when a field is deleted",
      "B. User-defined non-inherited fields can be deleted",
      "C. Any field on a table can be deleted",
      "D. Inherited fields can be deleted"
    ],
    "correctAnswers": [
      "B. User-defined non-inherited fields can be deleted"
    ],
    "multipleChoice": false
  },
  {
    "id": 106,
    "text": "Why would you build a custom app? (Choose two.)",
    "options": [
      "A. To avoid using a code repository like GitHub or GitLab",
      "B. To replace ServiceNow base tables",
      "C. To fulfill a specific use case on internal processes",
      "D. To create a custom integration for a 3rd party system"
    ],
    "correctAnswers": [
      "C. To fulfill a specific use case on internal processes",
      "D. To create a custom integration for a 3rd party system"
    ],
    "multipleChoice": true
  },
  {
    "id": 107,
    "text": "What are three ServiceNow table creation methods? (Choose three.)",
    "options": [
      "A. Using legacy Workflows",
      "B. Upload and turn a spreadsheet into a custom table",
      "C. Using Flow Designer",
      "D. Use the Now Experience Table Creator",
      "E. Extend a table",
      "F. Create a custom table"
    ],
    "correctAnswers": [
      "B. Upload and turn a spreadsheet into a custom table",
      "E. Extend a table",
      "F. Create a custom table"
    ],
    "multipleChoice": true
  },
  {
    "id": 108,
    "text": "When selecting a data type for a field that will be displayed on a form, which of the following statements is NOT correct?",
    "options": [
      "A. Use the String data type tor a free-form text field",
      "B. Use the Phone Number data type to automate phone number data validation",
      "C. Use the Choice data type to limit options in a field",
      "D. Use the Date data type to enter the date and time of day"
    ],
    "correctAnswers": [
      "D. Use the Date data type to enter the date and time of day"
    ],
    "multipleChoice": false
  },
  {
    "id": 109,
    "text": "Which one of the following is NOT part of the Form Designer?",
    "options": [
      "A. Page header",
      "B. Schema map",
      "C. Field navigator",
      "D. Form layout"
    ],
    "correctAnswers": [
      "B. Schema map"
    ],
    "multipleChoice": false
  },
  {
    "id": 110,
    "text": "Which class is NOT part of the Client side scoped APIs?",
    "options": [
      "A. GlideDialogWindow",
      "B. GlideAjax",
      "C. GlideRecord",
      "D. GlideForm"
    ],
    "correctAnswers": [
      "C. GlideRecord"
    ],
    "multipleChoice": false
  },
  {
    "id": 111,
    "text": "When designing and creating a form what do you create to organize fields on a form?",
    "options": [
      "A. Buttons",
      "B. Tabs",
      "C. Sections",
      "D. Related lists"
    ],
    "correctAnswers": [
      "C. Sections"
    ],
    "multipleChoice": false
  },
  {
    "id": 112,
    "text": "Which one of the following is a good practice for adding instructions to a form?",
    "options": [
      "A. Related links to wiki pages",
      "B. A Context Menu UI Action",
      "C. Annotations",
      "D. A populated read-only field"
    ],
    "correctAnswers": [
      "C. Annotations"
    ],
    "multipleChoice": false
  },
  {
    "id": 113,
    "text": "Which of the following GlideRecord methods run a query against a database table? (Choose three.)",
    "options": [
      "A. _get()",
      "B. runQuery()",
      "C. query()",
      "D. _query()",
      "E. get()"
    ],
    "correctAnswers": [
      "C. query()",
      "D. _query()",
      "E. get()"
    ],
    "multipleChoice": true
  },
  {
    "id": 114,
    "text": "What is the GlideForm Client-side scripting object?",
    "options": [
      "A. sn.form",
      "B. g_form",
      "C. gs.form",
      "D. gs_form"
    ],
    "correctAnswers": [
      "B. g_form"
    ],
    "multipleChoice": false
  },
  {
    "id": 115,
    "text": "In a Business Rule, which one of the following returns the sys_id of the currently logged in user?",
    "options": [
      "A. g_form.getUserID()",
      "B. gs.getUserSysID()",
      "C. gs.getUserID()",
      "D. g_form.getUserSysID()"
    ],
    "correctAnswers": [
      "C. gs.getUserID()"
    ],
    "multipleChoice": false
  },
  {
    "id": 116,
    "text": "Access Control debug information identifies whether each element of an Access Control granted or denied access. The elements appear in the debug information in the order of evaluation. In which order are the elements of an Access Control evaluated?",
    "options": [
      "A. Conditions, Roles, Script",
      "B. Conditions, Script, Roles",
      "C. Roles, Conditions, Script",
      "D. Script, Conditions, Roles"
    ],
    "correctAnswers": [
      "C. Roles, Conditions, Script"
    ],
    "multipleChoice": false
  },
  {
    "id": 117,
    "text": "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: Which field or fields can a user with the itil role read?",
    "options": [
      "A. All fields except field3",
      "B. field1, field2, and field3",
      "C. field1 and field3",
      "D. field3 only"
    ],
    "correctAnswers": [
      "D. field3 only"
    ],
    "multipleChoice": false
  },
  {
    "id": 118,
    "text": "Assume a table called table exists and contains 3 fields: field1, field2, field3. Examine the Access Control list for table: Which field or fields can a user with the itil role read?",
    "options": [
      "A. field3 only",
      "B. filed1 and field3",
      "C. All fields",
      "D. All fields except field3"
    ],
    "correctAnswers": [
      "D. All fields except field3"
    ],
    "multipleChoice": false
  },
  {
    "id": 119,
    "text": "Which of the following is NOT a caller access field option?",
    "options": [
      "A. Caller Tracking",
      "B. Caller Restriction",
      "C. None",
      "D. Caller Permission"
    ],
    "correctAnswers": [
      "D. Caller Permission"
    ],
    "multipleChoice": false
  },
  {
    "id": 120,
    "text": "Which method is used to retrieve Application Property values in a script?",
    "options": [
      "A. gs.getProperty()",
      "B. g_form.getAppProperty()",
      "C. g_form.getProperty()",
      "D. gs.getAppProperty()"
    ],
    "correctAnswers": [
      "A. gs.getProperty()"
    ],
    "multipleChoice": false
  },
  {
    "id": 121,
    "text": "What Module Link type is used to access an Application Properties page?",
    "options": [
      "A. Single Record",
      "B. HTML (from Arguments)",
      "C. URL (from Arguments)",
      "D. Script (from Arguments)"
    ],
    "correctAnswers": [
      "C. URL (from Arguments)"
    ],
    "multipleChoice": false
  },
  {
    "id": 122,
    "text": "Identify the way(s) an application can respond to an Event generated by the gs.eventQueue() method.",
    "options": [
      "A. b and c",
      "B. c",
      "C. a and d",
      "D. a and c"
    ],
    "correctAnswers": [
      "C. a and d"
    ],
    "multipleChoice": false
  },
  {
    "id": 123,
    "text": "When troubleshooting and debugging notifications, where do you navigate to see if an email was sent in response to an event?",
    "options": [
      "A. System Logs > Events",
      "B. System Logs > Emails",
      "C. System Logs > Push Notifications",
      "D. System Logs > ICE Logs"
    ],
    "correctAnswers": [
      "B. System Logs > Emails"
    ],
    "multipleChoice": false
  },
  {
    "id": 124,
    "text": "What are the benefits of storing the majority of an Application’s server-side script logic in a Script Include?",
    "options": [
      "A. a, b, and d",
      "B. a, b, c, and d",
      "C. b, c, and d",
      "D. a, b, and c"
    ],
    "correctAnswers": [
      "C. b, c, and d"
    ],
    "multipleChoice": false
  },
  {
    "id": 125,
    "text": "Which of the following is NOT a Flow Designer feature?",
    "options": [
      "A. Run a flow from a Catalog item",
      "B. Call a flow from another flow or subflow",
      "C. Add stages to a flow",
      "D. Test a flow using the “Run as” feature"
    ],
    "correctAnswers": [
      "B. Call a flow from another flow or subflow"
    ],
    "multipleChoice": false
  },
  {
    "id": 126,
    "text": "What is the purpose of the coalesce field when importing data?",
    "options": [
      "A. If a match is not found, the existing record is updated",
      "B. To determine if a record matches an existing record or is a new record",
      "C. To identify and merge duplicate records",
      "D. When a match is found, a new record is inserted"
    ],
    "correctAnswers": [
      "B. To determine if a record matches an existing record or is a new record"
    ],
    "multipleChoice": false
  },
  {
    "id": 127,
    "text": "If you create a SOAP Message what syntax indicates a variable to pass when the function is called?",
    "options": [
      "A. current.variable_name",
      "B. ${variable_name}",
      "C. <variable_name>.do?WSDL",
      "D. <variable_name>"
    ],
    "correctAnswers": [
      "B. ${variable_name}"
    ],
    "multipleChoice": false
  },
  {
    "id": 128,
    "text": "Which of the following is NOT a way to install an application on a ServiceNow instance?",
    "options": [
      "A. Install an application from the Application Repository",
      "B. Select the Copy button on the application record",
      "C. Download and install an application from the ServiceNow Share web site",
      "D. Download and install a third-party application from the ServiceNow Store"
    ],
    "correctAnswers": [
      "B. Select the Copy button on the application record"
    ],
    "multipleChoice": false
  },   
];
  export default CAD2;
