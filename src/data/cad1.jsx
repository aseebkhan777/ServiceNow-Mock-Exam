const CAD1 = [

{
  id: 1,
  text: "Which of the following statements is true for the Form Designer? a) To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form. b) To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field. c) To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button. d) To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
  options: [
    "a, b, c, and d",
    "b, c, and d",
    "a, b, and d",
    "a, b, and c"
  ],
  correctAnswers: ["a, b, and c"],
  multipleChoice: false
},
{
  id: 2,
  text: "Which of the following are configured in an Email Notification? a) Who will receive the notification. b) What content will be in the notification. c) When to send the notification. d) How to send the notification.",
  options: [
    "a, b and c",
    "a, b, and d",
    "b, c and d",
    "a, c and d"
  ],
  correctAnswers: ["a, b and c"],
  multipleChoice: false
},
{
  id: 3,
  text: "To see what scripts, reports, and other application artifacts will be in a published application:",
  options: [
    "Enter the name of the Application in the Global search field",
    "Open the list of Update Sets for the instance",
    "Examine the Application Files Related List in the application to be published",
    "Open the artifact records individually to verify the value in the Application field"
  ],
  correctAnswers: ["Examine the Application Files Related List in the application to be published"],
  multipleChoice: false
},
   {
    "id": 4,
    "text": "Which one of the following is NOT a debugging strategy for client-side scripts?",
    "options": [
      "g_form.addInfoMessage()",
      "Field Watcher",
      "jslog()",
      "gs.log()"
    ],
    "correctAnswers": ["gs.log()"],
    "multipleChoice": false
  },
  {
    "id": 5,
    "text": "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
    "options": [
      "All access to this table via web services",
      "Can create, Can update, and Can delete",
      "Can read does not affect the availability of other Application Access fields",
      "Allow configuration"
    ],
    "correctAnswers": ["Can create, Can update, and Can delete"],
    "multipleChoice": false
  },
  {
    "id": 6,
    "text": "Which of the following is NOT a trigger type in Flow Designer?",
    "options": [
      "Outbound Email",
      "Application",
      "Record",
      "Schedule"
    ],
    "correctAnswers": ["Outbound Email"],
    "multipleChoice": false
  },
  {
    "id": 7,
    "text": "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
    "options": [
      "REST messages",
      "Table",
      "Script Include",
      "Workflow"
    ],
    "correctAnswers": ["Table"],
    "multipleChoice": false
  },
  {
    "id": 8,
    "text": "In an Email Notification, which one of the following is NOT true for the Weight field?",
    "options": [
      "Only Notifications with the highest weight for the same record and recipients are sent",
      "A Weight value of zero means that no email should be sent",
      "The Weight value defaults to zero",
      "A Weight value of zero means the Notification is always sent when criteria is met"
    ],
    "correctAnswers": ["A Weight value of zero means that no email should be sent"],
    "multipleChoice": false
  },
  {
    "id": 9,
    "text": "Which of the following objects does a Display Business Rule NOT have access to?",
    "options": [
      "previous",
      "GlideSystem",
      "g_scratchpad",
      "current"
    ],
    "correctAnswers": ["previous"],
    "multipleChoice": false
  },
  {
    "id": 10,
    "text": "Which of the following features are available to Global applications?",
    "options": [
      "Automated Test Framework",
      "Source Control",
      "Delegated Development",
      "Flow Designer"
    ],
    "correctAnswers": ["Automated Test Framework", "Flow Designer"],
    "multipleChoice": true
  },
  {
    "id": 11,
    "text": "Which one of the following is NOT a UI Action type?",
    "options": [
      "List choice",
      "Form button",
      "List banner button",
      "Form choice"
    ],
    "correctAnswers": ["Form choice"],
    "multipleChoice": false
  },
  {
    "id": 12,
    "text": "Which of the following is NOT supported by Flow Designer?",
    "options": [
      "Call a subflow from a flow",
      "Test a flow with rollback",
      "Use Delegated Developer",
      "Run a flow from a MetricBase Trigger"
    ],
    "correctAnswers": ["Test a flow with rollback"],
    "multipleChoice": false
  },
  {
    "id": 13,
    "text": "Which of the following are true for reports in ServiceNow?",
    "options": [
      "Any user can see any report shared with them",
      "Can be a graphical representation of data",
      "All users can generate reports on any table",
      "Can be run on demand by authorized users",
      "Can be scheduled to be run and distributed by email"
    ],
    "correctAnswers": [
      "Can be a graphical representation of data",
      "Can be run on demand by authorized users",
      "Can be scheduled to be run and distributed by email"
    ],
    "multipleChoice": true
  },
  {
    "id": 14,
    "text": "Modules must have a Link type. Which one of the following is a list of Link types?",
    "options": [
      "List of Records, Separator, Catalog Type, Roles",
      "Assessment, List of Records, Separator, Timeline Page",
      "List of Records, Content Page, Order, URL",
      "Assessment, List of Records, Content Page, Roles"
    ],
    "correctAnswers": ["Assessment, List of Records, Separator, Timeline Page"],
    "multipleChoice": false
  },
  {
    "id": 15,
    "text": "Which one of the following is true for a table with the `Allow configuration` Application Access option selected?",
    "options": [
      "A. Only the in scope application's scripts can create Business Rules for the table",
      "B. Any user with the application's user role can modify the application's scripts",
      "C. Out of scope applications can create Business Rules for the table",
      "D. Out of scope applications can add new tables to the scoped application"
    ],
    "correctAnswers": [
      "C. Out of scope applications can create Business Rules for the table"
    ],
    "multipleChoice": false
  },
  {
    "id": 16,
    "text": "When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?",
    "options": [
      "A. base table",
      "B. child table",
      "C. parent table",
      "D. all tables"
    ],
    "correctAnswers": [
      "B. child table"
    ],
    "multipleChoice": false
  },
  {
    "id": 17,
    "text": "Which one of the following is true?",
    "options": [
      "A. A UI Policy's Actions execute before the UI Policy's Scripts",
      "B. The execution order for a UI Policy's Scripts and Actions is determined at runtime",
      "C. A UI Policy's Scripts execute before the UI Policy's Actions",
      "D. A UI Policy's Actions and Scripts execute at the same time"
    ],
    "correctAnswers": [
      "A. A UI Policy's Actions execute before the UI Policy's Scripts"
    ],
    "multipleChoice": false
  },
  {
    "id": 18,
    "text": "Here is the Business Rule script template: This type of JavaScript function is known as:",
    "options": [
      "A. Constructor",
      "B. Scoped",
      "C. Anonymous",
      "D. Self-invoking"
    ],
    "correctAnswers": [
      "D. Self-invoking"
    ],
    "multipleChoice": false
  },
  {
    "id": 19,
    "text": "Which method call returns true only if the currently logged in user has the catalog_admin role and in no other case?",
    "options": [
      "A. g_user.hasRole('catalog_admin')",
      "B. g_user.hasRoleExactly('catalog_admin')",
      "C. g_user.hasRoleOnly('catalog_admin')",
      "D. g_user.hasRoleFromList('catalog_admin')"
    ],
    "correctAnswers": [
      "B. g_user.hasRoleExactly('catalog_admin')"
    ],
    "multipleChoice": false
  },
  {
    "id": 20,
    "text": "There is a basic strategy when creating a Utils Script Include. Identify the step that does not belong.",
    "options": [
      "A. Identify the table",
      "B. Script the function(s)",
      "C. Create a class",
      "D. Create a prototype object from the new class"
    ],
    "correctAnswers": [
      "A. Identify the table"
    ],
    "multipleChoice": false
  },
  {
    "id": 21,
    "text": "Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control? (Choose two.)",
    "options": [
      "A. source_control",
      "B. source_control_admin",
      "C. admin",
      "D. git_admin"
    ],
    "correctAnswers": [
      "A. source_control",
      "C. admin"
    ],
    "multipleChoice": true
  },
  {
    "id": 22,
    "text": "When configuring the content of an Email Notification, which syntax should be used to reference the properties of an event triggering the Notification?",
    "options": [
      "A. ${event.<property name>}",
      "B. ${current.<property name>}",
      "C. ${<property name>.getDisplayValue()}",
      "D. ${gs.<property name>}"
    ],
    "correctAnswers": [
      "A. ${event.<property name>}"
    ],
    "multipleChoice": false
  },
  {
    "id": 23,
    "text": "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
    "options": [
      "A. Any user with the protected_edit role can see and edit the Script Include",
      "B. The Protection policy option can only be enabled by a user with the admin role",
      "C. The Protection Policy is applied only if the glide.app.apply_protection system property value is true",
      "D. The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"
    ],
    "correctAnswers": [
      "D. The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"
    ],
    "multipleChoice": false
  },
  {
    "id": 24,
    "text": "Which one of the following is true for GlideUser (g_user) methods?",
    "options": [
      "A. Can be used in Client Scripts and UI Policies only",
      "B. Can be used in Business Rules only",
      "C. Can be used in Client Scripts, UI Policies, and UI Actions",
      "D. Can be used in Business Rules, and Scripts Includes"
    ],
    "correctAnswers": [
      "C. Can be used in Client Scripts, UI Policies, and UI Actions"
    ],
    "multipleChoice": false
  },
  {
    "id": 25,
    "text": "When configuring a module, what does the Override application menu roles configuration option do?",
    "options": [
      "A. Users with the module role but without access to the application menu access the module",
      "B. Self-Service users can access the module even though they do not have roles",
      "C. Admin is given access to the module even if Access Controls would ordinarily prevent access",
      "D. Users with access to the application menu can see the module even if they don't have the module role"
    ],
    "correctAnswers": [
      "A. Users with the module role but without access to the application menu access the module"
    ],
    "multipleChoice": false
  },
  {
    "id": 26,
    "text": "Which platform feature can be used to determine the relationships between field in an Import Set table to field in an existing ServiceNow table?",
    "options": [
      "A. Business Service Management Map",
      "B. Data Sources",
      "C. Transform Map",
      "D. CI Relationship Builder"
    ],
    "correctAnswers": [
      "C. Transform Map"
    ],
    "multipleChoice": false
  },
  {
    "id": 27,
    "text": "When configuring a REST Message, the Endpoint is:",
    "options": [
      "A. The commands to the REST script to stop execution",
      "B. The URI of the data to be accessed, queried, or modified",
      "C. Information about the format of the returned data",
      "D. The response from the provider indicating there is no data to send back"
    ],
    "correctAnswers": [
      "B. The URI of the data to be accessed, queried, or modified"
    ],
    "multipleChoice": false
  },
  {
    "id": 28,
    "text": "When evaluating Access Controls, ServiceNow searches and evaluates:",
    "options": [
      "A. Only for matches on the current table",
      "B. Only for matches on the current field",
      "C. From the most specific match to the most generic match",
      "D. From the most generic match to the most specific match"
    ],
    "correctAnswers": [
      "C. From the most specific match to the most generic match"
    ],
    "multipleChoice": false
  },
  {
    "id": 29,
    "text": "In a Business Rule, which one of the following returns true if the currently logged in user has the admin role?",
    "options": [
      "A. g_form.hasRoleExactly('admin')",
      "B. gs.hasRole('admin')",
      "C. g_form.hasRole('admin')",
      "D. gs.hasRoleExactly('admin')"
    ],
    "correctAnswers": [
      "B. gs.hasRole('admin')"
    ],
    "multipleChoice": false
  },
  {
    "id": 30,
    "text": "From the list below, identify one reason an application might NOT be a good fit with ServiceNow. The application:",
    "options": [
      "A. Needs workflow to manage processes",
      "B. Requires as-is use of low-level programming libraries",
      "C. Requires reporting capabilities",
      "D. Uses forms extensively to interact with data"
    ],
    "correctAnswers": [
      "B. Requires as-is use of low-level programming libraries"
    ],
    "multipleChoice": false
  },
  {
    "id": 31,
    "text": "Identify the incorrect statement about Delegated Development in ServiceNow.",
    "options": [
      "A. Administrators can grant non-admin users the ability to develop global applications.",
      "B. Administrators can specify which application file types the developer can access.",
      "C. Administrators can grant the developer access to script fields.",
      "D. Administrators can grant the developer access to security records."
    ],
    "correctAnswers": [
      "A. Administrators can grant non-admin users the ability to develop global applications."
    ],
    "multipleChoice": false
  },
  {
    "id": 32,
    "text": "One of the uses of the ServiceNow REST API Explorer is:",
    "options": [
      "A. Practice using REST to interact with public data providers",
      "B. Find resources on the web for learning about REST",
      "C. Convert SOAP Message functions to REST methods",
      "D. Create sample code for sending REST requests to ServiceNow"
    ],
    "correctAnswers": [
      "D. Create sample code for sending REST requests to ServiceNow"
    ],
    "multipleChoice": false
  },
  {
    "id": 33,
    "text": "Which one of the following is true regarding Application Scope?",
    "options": [
      "A. All applications are automatically part of the Global scope",
      "B. Applications downloaded from 3rd party ServiceNow application developers cannot have naming conflicts",
      "C. Any developer can edit any application",
      "D. Developers can choose the prefix for a scope's namespace"
    ],
    "correctAnswers": [
      "B. Applications downloaded from 3rd party ServiceNow application developers cannot have naming conflicts"
    ],
    "multipleChoice": false
  },
  {
    "id": 34,
    "text": "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
    "options": [
      "A. The table and its data are not accessible using web services",
      "B. Any Business Rule can read, write, delete, and update from the table",
      "C. Only artifacts in the table's application can read from the table",
      "D. All application scopes can read from the table"
    ],
    "correctAnswers": [
      "D. All application scopes can read from the table"
    ],
    "multipleChoice": false
  },
  {
    "id": 35,
    "text": "Which one of the following is NOT a purpose of application scoping?",
    "options": [
      "A. Provide a relationship between application artifacts",
      "B. Provide a way of tracking the user who developed an application",
      "C. Provide a namespace (prefix and scope name) to prevent cross application name collisions",
      "D. Provide controls for how scripts from another scope can alter tables in a scoped application"
    ],
    "correctAnswers": [
      "B. Provide a way of tracking the user who developed an application"
    ],
    "multipleChoice": false
  },
  {
    "id": 36,
    "text": "It is best practice to define the business requirements and the process(es) an application will manage as part of the application development plan. What are some of the considerations to document as part of the business process?",
    "options": [
      "A. Business problem, data input/output, users/stakeholders, and process steps",
      "B. Business problem, data input/output, project schedule, and process steps",
      "C. Business problem, data input/output, users/stakeholders, and database capacity",
      "D. Business problem, users/stakeholders, available licenses, and database capacity"
    ],
    "correctAnswers": [
      "A. Business problem, data input/output, users/stakeholders, and process steps"
    ],
    "multipleChoice": false
  },
  {
    "id": 37,
    "text": "Which of the following statements does NOT apply when extending an existing table?",
    "options": [
      "A. The parent table's Access Controls are evaluated when determining access to the new table's records and fields",
      "B. The new table inherits the functionality built into the parent table",
      "C. The new table inherits all of the fields from the parent table",
      "D. You must script and configure all required behaviors"
    ],
    "correctAnswers": [
      "D. You must script and configure all required behaviors"
    ],
    "multipleChoice": false
  },
  {
    "id": 38,
    "text": "Which of the following CANNOT be debugged using the Field Watcher?",
    "options": [
      "A. Business Rules",
      "B. Script Includes",
      "C. Client Scripts",
      "D. Access Controls"
    ],
    "correctAnswers": [
      "B. Script Includes"
    ],
    "multipleChoice": false
  },
  {
    "id": 39,
    "text": "Which objects can be used in Inbound Action scripts?",
    "options": [
      "A. current and previous",
      "B. current and email",
      "C. current and event",
      "D. current and producer"
    ],
    "correctAnswers": [
      "B. current and email"
    ],
    "multipleChoice": false
  },
  {
    "id": 40,
    "text": "Which one of the following is part of the client-side scripting API?",
    "options": [
      "A. workflow.scratchpad",
      "B. GlideUser object (g_user)",
      "C. current and previous objects",
      "D. GlideSystem object (gs)"
    ],
    "correctAnswers": [
      "B. GlideUser object (g_user)"
    ],
    "multipleChoice": false
  },
  {
    "id": 41,
    "text": "Application developers configure ServiceNow using industry standard JavaScript to:",
    "options": [
      "A. Enable the right-click to edit the context menus on applications in the navigator",
      "B. Extend and add functionality",
      "C. Customize the organization's company logo and banner text",
      "D. Configure the outgoing email display name"
    ],
    "correctAnswers": [
      "B. Extend and add functionality"
    ],
    "multipleChoice": false
  },
  {
    "id": 42,
    "text": "How many applications menus can an application have?",
    "options": [
      "A. 3, one for an application's user modules, one for an application's administrator modules, and one for the ServiceNow administrator's modules",
      "B. As many as the application design requires",
      "C. 2, one for an application's user modules and one for an application's administrator modules",
      "D. 1, which is used for all application modules"
    ],
    "correctAnswers": [
      "B. As many as the application design requires"
    ],
    "multipleChoice": false
  },
  {
    "id": 43,
    "text": "The source control operation used to store local changes on an instance for later application is called a(n) <blank>.",
    "options": [
      "A. Branch",
      "B. Tag",
      "C. Stash",
      "D. Update set"
    ],
    "correctAnswers": [
      "C. Stash"
    ],
    "multipleChoice": false
  },
  {
    "id": 44,
    "text": "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
    "options": [
      "A. producer.field_name",
      "B. producer.variablename",
      "C. current.variable_name",
      "D. current.field_name"
    ],
    "correctAnswers": [
      "B. producer.variablename"
    ],
    "multipleChoice": false
  },
  {
    "id": 45,
    "text": "Which of the following methods prints a message on a blue background to the top of the current form by default?",
    "options": [
      "A. g_form.addInfoMsg()",
      "B. g_form.addInfoMessage()",
      "C. g_form.showFieldMessage()",
      "D. g_form.showFieldMsg()"
    ],
    "correctAnswers": [
      "B. g_form.addInfoMessage()"
    ],
    "multipleChoice": false
  },
  {
    "id": 46,
    "text": "A scoped application containing Flow Designer content dedicated to a particular application is called a(n):",
    "options": [
      "A. Spoke",
      "B. Bundle",
      "C. Action",
      "D. Flow"
    ],
    "correctAnswers": [
      "A. Spoke"
    ],
    "multipleChoice": false
  },
  {
    "id": 47,
    "text": "What is a Module?",
    "options": [
      "A. The functionality within an application menu such as opening a page in the content frame or a separate tab or window",
      "B. A group of menus, or pages, providing related information and functionality to end-users",
      "C. A way of helping users quickly access information and services by filtering the items in the Application Navigator",
      "D. A web-based way of providing software to end-users"
    ],
    "correctAnswers": [
      "A. The functionality within an application menu such as opening a page in the content frame or a separate tab or window"
    ],
    "multipleChoice": false
  },
  {
    "id": 48,
    "text": "Which source control operation is available from BOTH Studio and the Git Repository?",
    "options": [
      "A. Create Branch",
      "B. Apply Remote Changes",
      "C. Stash Local Changes",
      "D. Edit Repository Configurations"
    ],
    "correctAnswers": [
      "A. Create Branch"
    ],
    "multipleChoice": false
  },
  {
    "id": 49,
    "text": "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
    "options": [
      "A. Password",
      "B. URL",
      "C. User name",
      "D. Application name"
    ],
    "correctAnswers": [
      "D. Application name"
    ],
    "multipleChoice": false
  },
  {
    "id": 50,
    "text": "Which Report Type(s) can be created by right-clicking on a column header in a table's list?",
    "options": [
      "A. Bar Chart, Pie Chart, Histogram, and Line",
      "B. Bar Chart",
      "C. Bar Chart, Pie Chart, and Histogram",
      "D. Bar Chart and Pie Chart"
    ],
    "correctAnswers": [
      "D. Bar Chart and Pie Chart"
    ],
    "multipleChoice": false
  },
  {
    "id": 51,
    "text": "Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?",
    "options": [
      "A. gs.log()",
      "B. gs.error()",
      "C. gs.warn()",
      "D. gs.debug()"
    ],
    "correctAnswers": [
      "A. gs.log()"
    ],
    "multipleChoice": false
  },
  {
    "id": 52,
    "text": "If the Create module field is selected when creating a table, what is the new module's default behavior?",
    "options": [
      "A. Open an empty form so new records can be created",
      "B. Open a link to a wiki article with instructions on how to customize the behavior of the new module",
      "C. Display an empty homepage for the application",
      "D. Display a list of all records from the table"
    ],
    "correctAnswers": [
      "D. Display a list of all records from the table"
    ],
    "multipleChoice": false
  },
  {
    "id": 53,
    "text": "How must Application Access be configured to prevent all other private application scopes from creating configuration records on an application's data tables?",
    "options": [
      "A. You must create Access Controls to prevent all other application scopes from creating configuration records on an application's data tables rather than using Application Access",
      "B. Set the Accessible from field value to All application scopes and de-select the Can create option",
      "C. Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option",
      "D. Set the Accessible from field value to This application scope only"
    ],
    "correctAnswers": [
      "D. Set the Accessible from field value to This application scope only"
    ],
    "multipleChoice": false
  },
  {
    "id": 54,
    "text": "What are some of the benefits of extending an existing table such as the Task table when creating a new application? a) You can repurpose existing fields by simply changing the label. b) Use existing fields with no modifications. c) Existing logic from the parent table will be automatically applied to the new table. d) All of the parent table records are copied to the new table.",
    "options": [
      "A. a, b, c, and d",
      "B. a and b",
      "C. b and c",
      "D. a, b, and c"
    ],
    "correctAnswers": [
      "D. a, b, and c"
    ],
    "multipleChoice": false
  },
  {
    "id": 55,
    "text": "When configuring an Access Control which has no condition or script, which one of the following statements is NOT true?",
    "options": [
      "A. table.* will grant access to every field in a record",
      "B. table.None will grant access to every record on the table",
      "C. table.field will grant access to a specific field in a record",
      "D. table.id will grant access to a specific record on the table"
    ],
    "correctAnswers": [
      "D. table.id will grant access to a specific record on the table"
    ],
    "multipleChoice": false
  },
  {
    "id": 56,
    "text": "Which of the following methods are useful in Access Control scripts?",
    "options": [
      "A. g_user.hasRole() and current.isNewRecord()",
      "B. gs.hasRole() and current.isNewRecord()",
      "C. g_user.hasRole() and current.isNew()",
      "D. gs.hasRole() and current.isNew()"
    ],
    "correctAnswers": [
      "B. gs.hasRole() and current.isNewRecord()"
    ],
    "multipleChoice": false
  },
  {
    "id": 57,
    "text": "Which one of the following client-side scripts apply to Record Producers?",
    "options": [
      "A. Catalog Client Scripts and Catalog UI Policies",
      "B. UI Scripts and UI Actions",
      "C. UI Scripts and Record Producer Scripts",
      "D. Client Scripts and UI Policies"
    ],
    "correctAnswers": [
      "A. Catalog Client Scripts and Catalog UI Policies"
    ],
    "multipleChoice": false
  },
  {
    "id": 58,
    "text": "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
    "options": [
      "A. Publisher",
      "B. Specialist",
      "C. Provider",
      "D. Consumer"
    ],
    "correctAnswers": [
      "D. Consumer"
    ],
    "multipleChoice": false
  },
  {
    "id": 59,
    "text": "Which one of the following is the fastest way to create and configure a Record Producer?",
    "options": [
      "A. Create a Catalog Category, open the category, and select the Add New Record Producer button",
      "B. Use the Record Producer module then add and configure all variables manually",
      "C. Open the table in the Table records and select the Add to Service Catalog Related Link",
      "D. Open the table's form, right-click on the form header, and select the Create Record Producer menu item"
    ],
    "correctAnswers": [
      "C. Open the table in the Table records and select the Add to Service Catalog Related Link"
    ],
    "multipleChoice": false
  },
  {
    "id": 60,
    "text": "Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?",
    "options": [
      "A. GlideRecord and current",
      "B. GlideUser and GlideRecord",
      "C. GlideSystem and GlideRecord",
      "D. GlideSystem and current"
    ],
    "correctAnswers": [
      "C. GlideSystem and GlideRecord"
    ],
    "multipleChoice": false
  },
  {
    "id": 61,
    "text": "Can inherited fields be deleted from a table?",
    "options": [
      "A. Yes, select the red X in the left-most column in the table definition",
      "B. Yes, but only if they are text fields",
      "C. Yes, but only if there has never been any saved field data",
      "D. No, inherited fields cannot be deleted from a child table"
    ],
    "correctAnswers": [
      "D. No, inherited fields cannot be deleted from a child table"
    ],
    "multipleChoice": false
  },
  {
    "id": 62,
    "text": "What is the purpose of the Application Picker?",
    "options": [
      "A. Select an application to run",
      "B. Select an application as a favorite in the Application Navigator",
      "C. Choose an application to edit and set the Application Scope",
      "D. Choose an application to download and install"
    ],
    "correctAnswers": [
      "C. Choose an application to edit and set the Application Scope"
    ],
    "multipleChoice": false
  },
  {
    "id": 63,
    "text": "What are Application Files in a ServiceNow application?",
    "options": [
      "A. An XML export of an application's table records",
      "B. CSV files containing data imported into an application",
      "C. ServiceNow artifacts comprising an application",
      "D. XML exports of an application's Update Set"
    ],
    "correctAnswers": [
      "C. ServiceNow artifacts comprising an application"
    ],
    "multipleChoice": false
  },
  {
    "id": 64,
    "text": "Which one of the following is NOT true for Modules?",
    "options": [
      "A. Modules open content pages",
      "B. Access to Modules is controlled with roles",
      "C. Every Module must be part of an Application Menu",
      "D. Every Module must be associated with a table"
    ],
    "correctAnswers": [
      "D. Every Module must be associated with a table"
    ],
    "multipleChoice": false
  }    
    ];

    export default CAD1
