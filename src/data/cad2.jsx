const CAD2 = [
 
    {
      id: 61,
      text: "Can inherited fields be deleted from a table?",
      options: [
        "Yes, select the red X in the left-most column in the table definition",
        "Yes, but only if they are text fields",
        "Yes, but only if there has never been any saved field data",
        "No, inherited fields cannot be deleted from a child table"
      ],
      correctAnswers: ["No, inherited fields cannot be deleted from a child table"],
      multipleChoice: false
    },
    {
      id: 62,
      text: "What is the purpose of the Application Picker?",
      options: [
        "Select an application to run",
        "Select an application as a favorite in the Application Navigator",
        "Choose an application to edit and set the Application Scope",
        "Choose an application to download and install"
      ],
      correctAnswers: ["Choose an application to edit and set the Application Scope"],
      multipleChoice: false
    },
    {
      id: 63,
      text: "What are Application Files in a ServiceNow application?",
      options: [
        "An XML export of an application's table records",
        "CSV files containing data imported into an application",
        "ServiceNow artifacts comprising an application",
        "XML exports of an application's Update Set"
      ],
      correctAnswers: ["ServiceNow artifacts comprising an application"],
      multipleChoice: false
    },
    {
      id: 64,
      text: "Which one of the following is NOT true for Modules?",
      options: [
        "Modules open content pages",
        "Access to Modules is controlled with roles",
        "Every Module must be part of an Application Menu",
        "Every Module must be associated with a table"
      ],
      correctAnswers: ["Every Module must be associated with a table"],
      multipleChoice: false
    },
    {
      id: 65,
      text: "Which one of the following is true for the Application Picker?",
      options: [
        "All custom application scope and the Global scope appear in the Application Picker",
        "All applications in ServiceNow, including baseline applications like Incident, appear in the Application Picker",
        "Only custom applications appear in the Application Picker",
        "Only downloaded applications appear in the Application Picker"
      ],
      correctAnswers: ["All custom application scope and the Global scope appear in the Application Picker"],
      multipleChoice: false
    },
    {
      id: 66,
      text: "When creating an application through the Guided Application Creator, which of the following is a user experience option?",
      options: [
        "Portal",
        "Mobile",
        "Self-service",
        "Workspace"
      ],
      correctAnswers: ["Mobile"],
      multipleChoice: false
    },
    {
      id: 67,
      text: "When writing a Client Script to provide feedback targeted at a specific field, which method should be used?",
      options: [
        "g_form.showInfoMessage()",
        "g_form.showFieldMsg()",
        "g_form.addInfoMessage()",
        "g_form.addFieldMsg()"
      ],
      correctAnswers: ["g_form.showFieldMsg()"],
      multipleChoice: false
    },
    {
      id: 68,
      text: "Which actions can a Business Rule take without scripting?",
      options: [
        "Set field values and write to the system log",
        "Set field values and generate an event",
        "Set field values and add message",
        "Set field values and query the database"
      ],
      correctAnswers: ["Set field values and add message"],
      multipleChoice: false
    },
    {
      id: 69,
      text: "Which server-side object provides methods for working with dates when writing a script in a privately scoped application?",
      options: [
        "GlideDateTime",
        "GlideRecord",
        "GlideSystem",
        "current"
      ],
      correctAnswers: ["GlideDateTime"],
      multipleChoice: false
    },
    {
      id: 70,
      text: "Application developers can specify which ServiceNow page a user sees after submitting a new record using the Record Producer UI. How is the page specified?",
      options: [
        "Create an application property to store the URL",
        "Configure the page in the Module that opens the Record Producer UI",
        "Write an after Business Rule script for the Record Producer's table: window.redirect = \"<URL>\";",
        "Write a script in the Record Producer's Script field: producer.redirect = \"<URL>\";"
      ],
      correctAnswers: ["Write a script in the Record Producer's Script field: producer.redirect = \"<URL>\";"],
      multipleChoice: false
    },
    {
      id: 71,
      text: "Identify characteristic(s) of a Record Producer. (Choose three.)",
      options: [
        "All records created using this strategy are inserted into the Requested Item [sc_req_item] table.",
        "Each field prompts the user with a question rather than a field label.",
        "They must be scripted.",
        "You can script behaviors of fields in the user interface.",
        "Graphics can be included on the user interface."
      ],
      correctAnswers: ["Each field prompts the user with a question rather than a field label.", "You can script behaviors of fields in the user interface.", "Graphics can be included on the user interface."],
      multipleChoice: true
    },
    {
      id: 72,
      text: "Which server-side API debug log method is available for scoped applications?",
      options: [
        "gs.log()",
        "gs.info()",
        "gs.debuglog()",
        "gs.print()"
      ],
      correctAnswers: ["gs.info()"],
      multipleChoice: false
    },
    {
      id: 73,
      text: "When crafting a scoped application that contains flow actions, what is the application called?",
      options: [
        "Bundle",
        "Row",
        "Action",
        "Spoke"
      ],
      correctAnswers: ["Spoke"],
      multipleChoice: false
    },
    {
      id: 74,
      text: "What is the best UX format to use for lists and forms?",
      options: [
        "Forms",
        "Lists",
        "Standard",
        "Classic"
      ],
      correctAnswers: ["Classic"],
      multipleChoice: false
    },
    {
      id: 75,
      text: "When creating a table in a privately-scoped application, which four Access Controls are created for the table?",
      options: [
        "Insert, Delete, Query, Write",
        "Create, Delete, Read, Write",
        "Create, Delete, Read, Update",
        "Insert, Delete, Query, Update"
      ],
      correctAnswers: ["Create, Delete, Read, Write"],
      multipleChoice: false
    },
    {
      id: 76,
      text: "Which one of the following is true for this script fragment? g_user.hasRole('x_my_app_user');",
      options: [
        "There is no g_user.hasRole() method",
        "The method returns false only if the currently logged in user has the x_my_app_user role",
        "The method returns true only if the currently logged in user has the x_my_app_user role",
        "The method returns true if the currently logged in user has the x_my_app_user role or the admin role"
      ],
      correctAnswers: ["The method returns true if the currently logged in user has the x_my_app_user role or the admin role"],
      multipleChoice: false
    },
    {
      id: 77,
      text: "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
      options: [
        "Select Data Source, Schedule Transform",
        "Load Data, Create Transform Map, Run Transform",
        "Define Data Source, Select Transform Map, Run Transform",
        "Select Import Set, Select Transform Map, Run Transform"
      ],
      correctAnswers: ["Load Data, Create Transform Map, Run Transform"],
      multipleChoice: false
    },
    {
      id: 78,
      text: "Which of the following statements must evaluate to true for a user to pass an Access Control? (Choose three.)",
      options: [
        "The user has one of the roles specified in the Required roles related list.",
        "Scripts configured in the Access Control must evaluate to true.",
        "Other matching Access Controls for the records evaluate to true.",
        "Conditions configured in the Access Control must evaluate to true.",
        "The user must be granted access through a business rule."
      ],
      correctAnswers: ["The user has one of the roles specified in the Required roles related list.", "Scripts configured in the Access Control must evaluate to true.", "Conditions configured in the Access Control must evaluate to true."],
      multipleChoice: true
    },
    {
      id: 79,
      text: "What is a workflow context?",
      options: [
        "The table for which a workflow is defined plus any conditions such as 'Active is true'",
        "It is generated from a workflow version, executes activities, and follows transitions",
        "The business reason or process for which a workflow is designed",
        "It is a checked-out workflow which is being edited"
      ],
      correctAnswers: ["It is generated from a workflow version, executes activities, and follows transitions"],
      multipleChoice: false
    },
    {
      id: 80,
      text: "Which one of the following is a benefit of creating an Application Properties page for each application you develop?",
      options: [
        "Application Properties allow a developer to override the application properties inherited from ServiceNow",
        "An Application Properties page is a good landing page for an application",
        "Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts",
        "Application users know to go to the Application Properties page to change the appearance of an application"
      ],
      correctAnswers: ["Application Properties allow a developer or admin to make changes to an application's behavior without modifying application artifacts"],
      multipleChoice: false
    },
    {
      id: 81,
      text: "Which one of the following is NOT an example of when an application might use a Scheduled Script Execution (Scheduled Job)?",
      options: [
        "The application needs to send weekly email reminders to requestors for all records on a table",
        "The application needs to run a clean-up script on the last day of every month",
        "The application needs to query the database every day to look for unassigned records",
        "The application needs to run a client-side script at the same time every day"
      ],
      correctAnswers: ["The application needs to run a client-side script at the same time every day"],
      multipleChoice: false
    },
  
    {
      id: 82,
      text: "Which one of the following objects CANNOT be used in a Script Action script?",
      options: [
        "previous",
        "GlideRecord",
        "event",
        "current"
      ],
      correctAnswers: ["previous"],
      multipleChoice: false
    },
    // Fixed: Removed erroneous array opening bracket
    {
      id: 83,
      text: "How does ServiceNow match inbound email to existing records?",
      options: [
        "Watermark",
        "Record link",
        "Subject line",
        "sys_id"
      ],
      correctAnswers: ["Watermark"],
      multipleChoice: false
    },
    {
      id: 84,
      text: "When debugging Email Notifications, what must you check on a user record? (Choose three.)",
      options: [
        "Active must be true.",
        "The First name and Last name fields must have values.",
        "The value in the Notification field must be set to enabled.",
        "The user must not be locked out.",
        "The Email field must have a value."
      ],
      correctAnswers: ["Active must be true.", "The value in the Notification field must be set to enabled.", "The Email field must have a value."],
      multipleChoice: true
    },
    {
      id: 85,
      text: "What are web services?",
      options: [
        "Methods used to create and maintain UI Pages",
        "Methods used to allow applications to connect to other software applications over a network",
        "Methods used to discover a wide variety of systems and applications",
        "They provide a customer-facing view of available service and product offerings provided by departments within the organization"
      ],
      correctAnswers: ["Methods used to allow applications to connect to other software applications over a network"],
      multipleChoice: false
    },
    {
      id: 86,
      text: "What do you need to do before you can use an Application-based trigger in your flow?",
      options: [
        "Activate application trigger spoke",
        "Activate trigger security rules",
        "Activate application spoke, and plug-ins as needed",
        "Assign Application trigger role [sn_app_trigger_write] to SME",
        "Activate application plugins only"
      ],
      correctAnswers: ["Activate application spoke, and plug-ins as needed"],
      multipleChoice: false
    },
    {
      id: 87,
      text: "You are developing the MyApp application that has a table, Table A. When the MyApp application is installed on an instance, you want Table A's records to be installed as part of the application. Table A's records will be installed when:",
      options: [
        "Table A is active and extends the Task table",
        "Table A's records are added to the application record using the Create Application Files context menu item",
        "Table A has an automatic number counter for new records",
        "Table A is not included in the System Clone > Exclude Tables list"
      ],
      correctAnswers: ["Table A's records are added to the application record using the Create Application Files context menu item"],
      multipleChoice: false
    },
    {
      id: 88,
      text: "How can an application link to a repository behind a firewall?",
      options: [
        "This option is not supported.",
        "Link an application to source control through a MID Server.",
        "Link an application to source control through an access token.",
        "Link an application to source control with multi-factor authentication."
      ],
      correctAnswers: ["Link an application to source control through a MID Server."],
      multipleChoice: false
    },
    {
      id: 89,
      text: "What is the ServiceNow store?",
      options: [
        "Downloadable content ServiceNow script archive",
        "Alternate name for the ServiceNow Developer Share site",
        "The source for ServiceNow Community created developer content",
        "Marketplace for free and paid certified ServiceNow applications and integrations"
      ],
      correctAnswers: ["Marketplace for free and paid certified ServiceNow applications and integrations"],
      multipleChoice: false
    },
    {
      id: 90,
      text: "Tables that extend a table do what?",
      options: [
        "Automatically update the application scope",
        "Do not inherit the parent’s fields",
        "Sometimes inherit the parent’s fields",
        "Inherit the parent’s fields"
      ],
      correctAnswers: ["Inherit the parent’s fields"],
      multipleChoice: false
    },
    {
      id: 91,
      text: "When creating an application through the Guided Application Creator, which of the following is NOT an option for creating a table?",
      options: [
        "Create table from template",
        "Create table from scratch",
        "Extend a table",
        "Upload spreadsheet"
      ],
      correctAnswers: ["Create table from template"],
      multipleChoice: false
    },
    {
      id: 92,
      text: "Server-side scripts manage what?",
      options: [
        "Database and backend",
        "Playbook access",
        "User access",
        "Forms and Fields"
      ],
      correctAnswers: ["Database and backend"],
      multipleChoice: false
    },
    {
      id: 93,
      text: "What intuitive development interface guides users through the initial application development process?",
      options: [
        "Guided Tour Designer",
        "Guided Application Creator",
        "ServiceNow Studio",
        "Flow Designer"
      ],
      correctAnswers: ["Guided Application Creator"],
      multipleChoice: false
    },
    {
      id: 94,
      text: "What are some benefits of developing private, scoped applications? (Choose two.)",
      options: [
        "To avoid using a code repository like GitHub or GitLab",
        "To reduce risk at code collisions",
        "To enable installation and uninstallation of an application",
        "To replicate ServiceNow functions a private scope"
      ],
      correctAnswers: ["To reduce risk at code collisions", "To enable installation and uninstallation of an application"],
      multipleChoice: true
    },
    {
      id: 95,
      text: "What plugin enables the Guided Application Creator?",
      options: [
        "com.glide.sn-guided-app-creator",
        "com.glide.service_creator",
        "com.glide.snc.apps_creator",
        "com.snc.apps_creator_template"
      ],
      correctAnswers: ["com.glide.sn-guided-app-creator"],
      multipleChoice: false
    },
    {
      id: 96,
      text: "Which of the following can be an external data source for a ServiceNow application?",
      options: [
        "Microsoft Excel File",
        "Data provided by a public web service using SOAP or REST",
        "CSV file",
        "All of the above"
      ],
      correctAnswers: ["All of the above"],
      multipleChoice: false
    },
    {
      id: 97,
      text: "Which one of the following is true for the Application Picker and Application Scope?",
      options: [
        "Global is a reserved application which does not appear in the Application Picker",
        "Selecting an application from the Application Picker does not set the Application Scope",
        "Selecting an application from the Application Picker sets the Application Scope",
        "Selecting Global in the Application Picker sets the Application Scope to Incident"
      ],
      correctAnswers: ["Selecting an application from the Application Picker sets the Application Scope"],
      multipleChoice: false
    },
    {
      id: 98,
      text: "Which of the following is an available feature in Studio? (Choose two.)",
      options: [
        "Push to update set",
        "Merge branches",
        "Search code",
        "Push to external source control"
      ],
      correctAnswers: ["Search code", "Push to external source control"],
      multipleChoice: true
    },
    {
      id: 99,
      text: "The Task table is an example of which of the following? (Choose two.)",
      options: [
        "Parent class",
        "Legacy class",
        "Child class",
        "Base class"
      ],
      correctAnswers: ["Parent class", "Base class"],
      multipleChoice: true
    },
    {
      id: 100,
      text: "Which of the following is true about deleting fields from a table?",
      options: [
        "Table records are deleted when a field is deleted",
        "User-defined non-inherited fields can be deleted",
        "Any field on a table can be deleted",
        "Inherited fields can be deleted"
      ],
      correctAnswers: ["User-defined non-inherited fields can be deleted"],
      multipleChoice: false
    },
    {
      id: 101,
      text: "Why would you build a custom app? (Choose two.)",
      options: [
        "To avoid using a code repository like GitHub or GitLab",
        "To replace ServiceNow base tables",
        "To fulfill a specific use case on internal processes",
        "To create a custom integration for a 3rd party system"
      ],
      correctAnswers: ["To fulfill a specific use case on internal processes", "To create a custom integration for a 3rd party system"],
      multipleChoice: true
    },
    {
      id: 102,
      text: "What are three ServiceNow table creation methods? (Choose three.)",
      options: [
        "Using legacy Workflows",
        "Upload and turn a spreadsheet into a custom table",
        "Using Flow Designer",
        "Use the Now Experience Table Creator",
        "Extend a table",
        "Create a custom table"
      ],
      correctAnswers: ["Upload and turn a spreadsheet into a custom table", "Extend a table", "Create a custom table"],
      multipleChoice: true
    },
  {
     id: 103,
     text: "What is the Event Registry?",
     options: [
       "A Workflow which is launched every time an Event is generated; used to debug Events",
       "The Event Log which lists all Events that have been generated",
       "The method used in server side scripts to generate Events and pass parameters",
       "A table containing a record for every Event known to the ServiceNow system which allows ServiceNow to react when Events are generated"
     ],
     correctAnswers: ["A table containing a record for every Event known to the ServiceNow system which allows ServiceNow to react when Events are generated"],
     multipleChoice: false
  },
  {
     id: 104,
     text: "Identify the ways an application can respond to an Event generated by the gs.eventQueue() method: (Choose two.)",
     options: [
       "Client Script",
       "Email Notification",
       "Scheduled Script Execution (Scheduled Job)",
       "Script Action",
       "UI Policy"
     ],
     correctAnswers: ["Email Notification", "Script Action"],
     multipleChoice: true
  },
  {
     id: 105,
     text: "Is it possible to change an application’s scope?",
     options: [
       "No, it’s not possible",
       "Yes, it’s possible",
       "Yes, but only from global scope to private scope",
       "Yes, but only from private scope to global scope"
     ],
     correctAnswers: ["No, it’s not possible"],
     multipleChoice: false
  },
  {
     id: 106,
     text: "Which of the following is true about g_scratchpad? (Choose two.)",
     options: [
       "Used to push information from the server to the client",
       "Does not exist on the mobile platform",
       "Has constructors and methods",
       "Has default properties passed by client-side scripts"
     ],
     correctAnswers: ["Used to push information from the server to the client", "Does not exist on the mobile platform"],
     multipleChoice: true
  },
  {
     id: 107,
     text: "When debugging Email Notifications, what must you check on a user record? (Choose two.)",
     options: [
       "Active must be true.",
       "The Email field must have a valid value.",
       "The user must not be locked out.",
       "The First name and Last name fields must have values.",
       "Delegation must be enabled."
     ],
     correctAnswers: ["Active must be true.", "The Email field must have a valid value."],
     multipleChoice: true
  },
  {
     id: 108,
     text: "When crafting a scoped application that contains flow actions, what is the application called?",
     options: [
       "Action",
       "Spoke",
       "Bundle",
       "Flow"
     ],
     correctAnswers: ["Spoke"],
     multipleChoice: false
  },
  {
     id: 109,
     text: "Which are reasons an application could be developed on the ServiceNow platform? (Choose three.)",
     options: [
       "It needs workflow to manage processes.",
       "It requires reporting capabilities.",
       "It uses forms extensively to interact with data.",
       "It requires low-level programming libraries.",
       "It uses multimedia features."
     ],
     correctAnswers: ["It needs workflow to manage processes.", "It requires reporting capabilities.", "It uses forms extensively to interact with data."],
     multipleChoice: true
  },
  {
     id: 110,
     text: "What is required to link a ServiceNow application to a Git repository? (Choose three.)",
     options: [
       "URI",
       "ACL",
       "Application name",
       "Password",
       "User name",
       "URL"
     ],
     correctAnswers: ["URL", "Password", "User name"],
     multipleChoice: true
  },
  {
     id: 111,
     text: "What data types of Flow Designer variables are supported to store record data and complex data? (Choose three.)",
     options: [
       "Label data type",
       "Integer",
       "Array.Reference",
       "Choice",
       "String"
     ],
     correctAnswers: ["Integer", "Choice", "String"],
     multipleChoice: true
  },
  {
     id: 112,
     text: "What are the features of Flow Designer? (Choose three.)",
     options: [
       "Add stages to a flow.",
       "Call a flow from another flow or subflow.",
       "Test a flow using the 'Run as' feature.",
       "Support Java Scripting code to test conditions that trigger the flow.",
       "Run a flow from a Catalog item.",
       "Perform form field data validation at client side."
     ],
     correctAnswers: ["Add stages to a flow.", "Test a flow using the 'Run as' feature.", "Run a flow from a Catalog item."],
     multipleChoice: true
  },
  {
     id: 113,
     text: "What are the benefits of storing the majority of an Application’s server-side script logic in a Script Include?",
     options: [
       "This makes execution faster.",
       "Only run when called from a script.",
       "The script logic can be hidden when the Application is installed from the ServiceNow Store.",
       "For some changes to application logic there is only one place to make edits."
     ],
     correctAnswers: ["The script logic can be hidden when the Application is installed from the ServiceNow Store.", "Only run when called from a script.", "For some changes to application logic there is only one place to make edits."],
     multipleChoice: true
  },
  {
     id: 114,
     text: "Which of the following is NOT a Flow Designer feature?",
     options: [
       "Run a flow from a Catalog item",
       "Call a flow from another flow or subflow",
       "Add stages to a flow",
       "Test a flow using the “Run as” feature"
     ],
     correctAnswers: ["Call a flow from another flow or subflow"],
     multipleChoice: false
  },
  {
     id: 115,
     text: "What is the purpose of the coalesce field when importing data?",
     options: [
       "If a match is not found, the existing record is updated",
       "To determine if a record matches an existing record or is a new record",
       "To identify and merge duplicate records",
       "When a match is found, a new record is inserted"
     ],
     correctAnswers: ["To determine if a record matches an existing record or is a new record"],
     multipleChoice: false
  },
  {
     id: 116,
     text: "If you create a SOAP Message what syntax indicates a variable to pass when the function is called?",
     options: [
       "current.variable_name",
       "${variable_name}",
       "< variable_name >.do?WSDL",
       "< variable_name >"
     ],
     correctAnswers: ["${variable_name}"],
     multipleChoice: false
  },
  {
     id: 117,
     text: "Which of the following is NOT a way to install an application on a ServiceNow instance?",
     options: [
       "Install an application from the Application Repository",
       "Select the Copy button on the application record",
       "Download and install an application from the ServiceNow Share web site",
       "Download and install a third-party application from the ServiceNow Store"
     ],
     correctAnswers: ["Select the Copy button on the application record"],
     multipleChoice: false
  },
  {
     id: 118,
     text: "Using Custom UI test step in Automated Test Framework, which of the following is NOT a testable page component?",
     options: [
       "Buttons",
       "UI controls",
       "UI pages",
       "Form field values"
     ],
     correctAnswers: ["Form field values"],
     multipleChoice: false
  },
  {
     id: 119,
     text: "Which module is used to access the knowledge bases which are available to you?",
     options: [
       "Knowledge > Home",
       "Self Service > Knowledge",
       "Knowledge > All",
       "Knowledge > Knowledge Bases",
       "Knowledge > Overview"
     ],
     correctAnswers: ["Self Service > Knowledge"],
     multipleChoice: false
  },
  {
     id: 120,
     text: "Flow Designer supports variable data types to store record data and complex data. Which of the following are supported variable data types? (Choose three.)",
     options: [
       "Choice data type",
       "Array.Reference data type",
       "Integer data type",
       "Freedom data type",
       "Array.Boolean data type",
       "Label data type"
     ],
     correctAnswers: ["Choice data type", "Integer data type", "Array.Boolean data type"],
     multipleChoice: true
  },
];
  export default CAD2;