const CAD1 = [

    {
      id: 1,
      text: "Which one of the following is NOT a purpose of application scoping?",
      options: [
        "Provide a relationship between application artifacts",
        "Provide a way of tracking the user who developed an application",
        "Provide a namespace (prefix and scope name) to prevent cross application name collisions",
        "Provide controls for how scripts from another scope can alter tables in a scoped application"
      ],
       correctAnswers: ["Provide a way of tracking the user who developed an application"],
      multipleChoice: false
    },
    {
      id: 2,
      text: "Which one of the following is the baseline behavior of a table in a privately-scoped application?",
      options: [
        "The table and its data are not accessible using web services",
        "Any Business Rule can read, write, delete, and update from the table",
        "Only artifacts in the table's application can read from the table",
        "All application scopes can read from the table"
      ],
       correctAnswers: ["All application scopes can read from the table"],
      multipleChoice: false
    },
    {
      id: 3,
      text: "Which one of the following is true regarding Application Scope?",
      options: [
        "All applications are automatically part of the Global scope",
        "Applications downloaded from third-party ServiceNow application developers cannot have naming conflicts",
        "Any developer can edit any application",
        "Developers can choose the prefix for a scope's namespace"
      ],
       correctAnswers: ["Applications downloaded from third-party ServiceNow application developers cannot have naming conflicts"],
      multipleChoice: false
    },
    {
      id: 4,
      text: "One of the uses of the ServiceNow REST API Explorer is:",
      options: [
        "Practice using REST to interact with public data providers",
        "Find resources on the web for learning about REST",
        "Convert SOAP Message functions to REST methods",
        "Create sample code for sending REST requests to ServiceNow"
      ],
       correctAnswers: ["Create sample code for sending REST requests to ServiceNow"],
      multipleChoice: false
    },
    {
      id: 5,
      text: "Identify the incorrect statement about Delegated Development in ServiceNow.",
      options: [
        "Administrators can grant non-admin users the ability to develop global applications.",
        "Administrators can specify which application file types the developer can access.",
        "Administrators can grant the developer access to script fields.",
        "Administrators can grant the developer access to security records"
      ],
       correctAnswers: ["Administrators can grant non-admin users the ability to develop global applications."],
      multipleChoice: false
    },
    {
      id: 6,
      text: "From the list below, identify one reason an application might NOT be a good fit with ServiceNow. The application:",
      options: [
        "Needs workflow to manage processes",
        "Requires as-is use of low-level programming libraries",
        "Requires reporting capabilities",
        "Uses forms extensively to interact with data"
      ],
       correctAnswers: ["Requires as-is use of low-level programming libraries"],
      multipleChoice: false
    },
    {
      id: 7,
      text: "In a Business Rule, which one of the following returns true if the currently logged in user has the admin role?",
      options: [
        "g_form.hasRoleExactly('admin')",
        "gs.hasRole('admin')",
        "g_form.hasRole('admin')",
        "gs.hasRoleExactly('admin')"
      ],
       correctAnswers: ["gs.hasRole('admin')"],
      multipleChoice: false
    },
    {
      id: 8,
      text: "When evaluating Access Controls, ServiceNow searches and evaluates:",
      options: [
        "Only for matches on the current table",
        "Only for matches on the current field",
        "From the most specific match to the most generic match",
        "From the most generic match to the most specific match"
      ],
       correctAnswers: ["From the most specific match to the most generic match"],
      multipleChoice: false
    },
    {
      id: 9,
      text: "When configuring a REST Message, the Endpoint is:",
      options: [
        "The commands to the REST script to stop execution",
        "The URI of the data to be accessed, queried, or modified",
        "Information about the format of the returned data",
        "The response from the provider indicating there is no data to send back"
      ],
       correctAnswers: ["The URI of the data to be accessed, queried, or modified"],
      multipleChoice: false
    },
    {
      id: 10,
      text: "Which platform feature can be used to determine the relationships between fields in an Import Set table to fields in an existing ServiceNow table?",
      options: [
        "Business Service Management Map",
        "Data Sources",
        "Transform Map",
        "CI Relationship Builder"
      ],
       correctAnswers: ["Transform Map"],
      multipleChoice: false
    },
    {
      id: 11,
      text: "When configuring a module, what does the Override application menu roles configuration option do?",
      options: [
        "Users with the module role but without access to the application menu access the module",
        "Self-Service users can access the module even though they do not have roles",
        "Admin is given access to the module even if Access Controls would ordinarily prevent access",
        "Users with access to the application menu can see the module even if they don't have the module role"
      ],
       correctAnswers: ["Users with the module role but without access to the application menu access the module"],
      multipleChoice: false
    },
    {
      id: 12,
      text: "Which one of the following is true for GlideUser (g_user) methods?",
      options: [
        "Can be used in Client Scripts and UI Policies only",
        "Can be used in Business Rules only",
        "Can be used in Client Scripts, UI Policies, and UI Actions",
        "Can be used in Business Rules, and Scripts Includes"
      ],
       correctAnswers: ["Can be used in Client Scripts, UI Policies, and UI Actions"],
      multipleChoice: false
    },
    {
      id: 13,
      text: "Which one of the following is true for a Script Include with a Protection Policy value of Protected?",
      options: [
        "Any user with the protected_edit role can see and edit the Script Include",
        "The Protection policy option can only be enabled by a user with the admin role",
        "The Protection Policy is applied only if the glide.app.apply_protection system property value is true",
        "The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"
      ],
       correctAnswers: ["The Protection Policy is applied only if the application is downloaded from the ServiceNow App Store"],
      multipleChoice: false
    },
    {
      id: 14,
      text: "When configuring the content of an Email Notification, which syntax should be used to reference the properties of an event triggering the Notification?",
      options: [
        "${event.<property name>}",
        "${current.<property name>}",
        "${<property name>.getDisplayValue()}",
        "${gs.<property name>}"
      ],
       correctAnswers: ["${event.<property name>}"],
      multipleChoice: false
    },
    {
      id: 15,
      text: "Which roles grant access to source control repository operations such as importing applications from source control, or linking an application to source control? (Choose two.)",
      options: [
        "source_control",
        "source_control_admin",
        "admin",
        "git_admin"
      ],
       correctAnswers: ["source_control", "admin"],
      multipleChoice: true
    },
    {
      id: 16,
      text: "There is a basic strategy when creating a Utils Script Include. Identify the step that does not belong.",
      options: [
        "Identify the table",
        "Script the function(s)",
        "Create a class",
        "Create a prototype object from the new class"
      ],
       correctAnswers: ["Identify the table"],
      multipleChoice: false
    },
    {
      id: 17,
      text: "Which method call returns true only if the currently logged in user has the catalog_admin role and in no other case?",
      options: [
        "g_user.hasRole('catalog_admin')",
        "g_user.hasRoleExactly('catalog_admin')",
        "g_user.hasRoleOnly('catalog_admin')",
        "g_user.hasRoleFromList('catalog_admin')"
      ],
       correctAnswers: ["g_user.hasRoleExactly('catalog_admin')"],
      multipleChoice: false
    },
    {
      id: 18,
      text: "This type of JavaScript function is known as:",
      options: [
        "Constructor",
        "Scoped",
        "Anonymous",
        "Self-invoking"
      ],
       correctAnswers: ["Self-invoking"],
      multipleChoice: false
    },
  

    {
      id: 19,
      text: "When working in the Form Designer, configuring the label of a field in a child table changes the label on which table(s)?",
      options: [
        "base table",
        "child table",
        "parent table",
        "all tables"
      ],
       correctAnswers: ["child table"],
      multipleChoice: false
    },
    {
      id: 20,
      text: "Which one of the following is true for a table with the 'Allow configuration' Application Access option selected?",
      options: [
        "Only the in scope application's scripts can create Business Rules for the table",
        "Any user with the application's user role can modify the application's scripts",
        "Out of scope applications can create Business Rules for the table",
        "Out of scope applications can add new tables to the scoped application"
      ],
       correctAnswers: ["Out of scope applications can create Business Rules for the table"],
      multipleChoice: false
    },
    {
      id: 21,
      text: "Modules must have a Link type. Which one of the following is a list of Link types?",
      options: [
        "List of Records, Separator, Catalog Type, Roles",
        "Assessment, List of Records, Separator, Timeline Page",
        "List of Records, Content Page, Order, URL (from arguments:)",
        "Assessment, List of Records, Content Page, Role"
      ],
       correctAnswers: ["Assessment, List of Records, Separator, Timeline Page"],
      multipleChoice: false
    },
    {
      id: 22,
      text: "Which of the following are true for reports in ServiceNow? (Choose three.)",
      options: [
        "Any user can see any report shared with them.",
        "Can be a graphical representation of data.",
        "All users can generate reports on any table.",
        "Can be run on demand by authorized users.",
        "Can be scheduled to be run and distributed by email."
      ],
       correctAnswers: [
        "Can be a graphical representation of data.",
        "Can be run on demand by authorized users.",
        "Can be scheduled to be run and distributed by email."
      ],
      multipleChoice: true
    },
    {
      id: 23,
      text: "Which of the following is NOT supported by Flow Designer?",
      options: [
        "Call a subflow from a flow",
        "Test a flow with rollback",
        "Use Delegated Developer",
        "Run a flow from a MetricBase Trigger"
      ],
       correctAnswers: ["Test a flow with rollback"],
      multipleChoice: false
    },
    {
      id: 24,
      text: "Which one of the following is NOT a UI Action type?",
      options: [
        "List choice",
        "Form button",
        "List banner button",
        "Form choice"
      ],
       correctAnswers: ["Form choice"],
      multipleChoice: false
    },
    {
      id: 25,
      text: "Which of the following features are available to Global applications? (Choose two.)",
      options: [
        "Automated Test Framework",
        "Source Control",
        "Delegated Development",
        "Flow Designer"
      ],
       correctAnswers: [
        "Automated Test Framework",
        "Flow Designer"
      ],
      multipleChoice: true
    },
    {
      id: 26,
      text: "Which of the following objects does a Display Business Rule NOT have access to?",
      options: [
        "previous",
        "GlideSystem",
        "g_scratchpad",
        "current"
      ],
       correctAnswers: ["previous"],
      multipleChoice: false
    },
    {
      id: 27,
      text: "In an Email Notification, which one of the following is NOT true for the Weight field?",
      options: [
        "Only Notifications with the highest weight for the same record and recipients are sent",
        "A Weight value of zero means that no email should be sent",
        "The Weight value defaults to zero",
        "A Weight value of zero means the Notification is always sent when the Notification's When to send criteria is met"
      ],
       correctAnswers: ["A Weight value of zero means that no email should be sent"],
      multipleChoice: false
    },
    {
      id: 28,
      text: "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
      options: [
        "REST messages",
        "Table",
        "Script Include",
        "Workflow"
      ],
       correctAnswers: ["Table"],
      multipleChoice: false
    },
    {
      id: 29,
      text: "Which of the following is NOT a trigger type in Flow Designer?",
      options: [
        "Outbound Email",
        "Application",
        "Record",
        "Schedule"
      ],
       correctAnswers: ["Outbound Email"],
      multipleChoice: false
    },
    {
      id: 30,
      text: "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
      options: [
        "All access to this table via web services",
        "Can create, Can update, and Can delete",
        "Can read does not affect the availability of other Application Access fields",
        "Allow configuration"
      ],
       correctAnswers: ["Can create, Can update, and Can delete"],
      multipleChoice: false
    },
    {
      id: 31,
      text: "Which one of the following is NOT a debugging strategy for client-side scripts?",
      options: [
        "g_form.addInfoMessage()",
        "Field Watcher",
        "jslog()",
        "gs.log()"
      ],
       correctAnswers: ["gs.log()"],
      multipleChoice: false
    },
    {
      id: 32,
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
      id: 33,
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
      id: 34,
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
      id: 35,
      text: "Which of the following statements does NOT apply when extending an existing table?",
      options: [
        "The parent table's Access Controls are evaluated when determining access to the new table's records and fields",
        "The new table inherits the functionality built into the parent table",
        "The new table inherits all of the fields from the parent table",
        "You must script and configure all required behaviours"
      ],
       correctAnswers: ["You must script and configure all required behaviours"],
      multipleChoice: false
    },
    {
      id: 36,
      text: "Which of the following CANNOT be debugged using the Field Watcher?",
      options: [
        "Business Rules",
        "Script Includes",
        "Client Scripts",
        "Access Controls"
      ],
       correctAnswers: ["Script Includes"],
      multipleChoice: false
    },
    {
      id: 37,
      text: "Which objects can be used in Inbound Action scripts?",
      options: [
        "current and previous",
        "current and email",
        "current and event",
        "current and producer"
      ],
       correctAnswers: ["current and email"],
      multipleChoice: false
    },
    {
      id: 38,
      text: "Which one of the following is part of the client-side scripting API?",
      options: [
        "workflow.scratchpad",
        "GlideUser object (g_user)",
        "current and previous objects",
        "GlideSystem object (gs)"
      ],
       correctAnswers: ["GlideUser object (g_user)"],
      multipleChoice: false
    },
    {
      id: 39,
      text: "Application developers configure ServiceNow using industry standard JavaScript to:",
      options: [
        "Enable the right-click to edit the context menus on applications in the navigator",
        "Extend and add functionality",
        "Customize the organization's company logo and banner text",
        "Configure the outgoing email display name"
      ],
       correctAnswers: ["Extend and add functionality"],
      multipleChoice: false
    },
    {
      id: 40,
      text: "How many application menus can an application have?",
      options: [
        "3, one for an application's user modules, one for an application's administrator modules, and one for the ServiceNow administrator's modules",
        "As many as the application design requires",
        "2, one for an application's user modules and one for an application's administrator modules",
        "1, which is used for all application modules"
      ],
       correctAnswers: ["As many as the application design requires"],
      multipleChoice: false
    },
    {
      id: 41,
      text: "The source control operation used to store local changes on an instance for later application is called a(n):",
      options: [
        "Branch",
        "Tag",
        "Stash",
        "Update set"
      ],
       correctAnswers: ["Stash"],
      multipleChoice: false
    },
    {
      id: 42,
      text: "What syntax is used in a Record Producer script to access values from Record Producer form fields?",
      options: [
        "producer.field_name",
        "producer.variablename",
        "current.variable_name",
        "current.field_name"
      ],
       correctAnswers: ["producer.variablename"],
      multipleChoice: true
    },
    {
      id: 43,
      text: "Which of the following methods prints a message on a blue background to the top of the current form by default?",
      options: [
        "g_form.addInfoMsg()",
        "g_form.addInfoMessage()",
        "g_form.showFieldMessage()",
        "g_form.showFieldMsg()"
      ],
       correctAnswers: ["g_form.addInfoMessage()"],
      multipleChoice: false
    },
    {
      id: 44,
      text: "A scoped application containing Flow Designer content dedicated to a particular application is called a(n):",
      options: [
        "Spoke",
        "Bundle",
        "Action",
        "Flow"
      ],
       correctAnswers: ["Spoke"],
      multipleChoice: false
    },
    {
      id: 45,
      text: "What is a Module?",
      options: [
        "The functionality within an application menu such as opening a page in the content frame or a separate tab or window",
        "A group of menus, or pages, providing related information and functionality to end-users",
        "A way of helping users quickly access information and services by filtering the items in the Application Navigator",
        "A web-based way of providing software to end-users"
      ],
       correctAnswers: [
        "The functionality within an application menu such as opening a page in the content frame or a separate tab or window"
      ],
      multipleChoice: false
    },
    {
      id: 46,
      text: "Which source control operation is available from BOTH Studio and the Git Repository?",
      options: [
        "Create Branch",
        "Apply Remote Changes",
        "Stash Local Changes",
        "Edit Repository Configurations"
      ],
       correctAnswers: ["Create Branch"],
      multipleChoice: false
    },
    {
      id: 47,
      text: "Which one of the following is NOT required to link a ServiceNow application to a Git repository?",
      options: [
        "Password",
        "URL",
        "User name",
        "Application name"
      ],
       correctAnswers: ["Application name"],
      multipleChoice: false
    },
    {
      id: 48,
      text: "Which Report Type(s) can be created by right-clicking on a column header in a table's list?",
      options: [
        "Bar Chart, Pie Chart, Histogram, and Line",
        "Bar Chart",
        "Bar Chart, Pie Chart, and Histogram",
        "Bar Chart and Pie Chart"
      ],
       correctAnswers: ["Bar Chart and Pie Chart"],
      multipleChoice: false
    },
  
      {
        id: 49,
        text: "Which one of the following is NOT a method used for logging messages in a server-side script for a privately-scoped application?",
        options: [
          "gs.log()",
          "gs.error()",
          "gs.warn()",
          "gs.debug()"
        ],
        correctAnswers: ["gs.log()"],
        multipleChoice: false
      },
      {
        id: 50,
        text: "If the Create module field is selected when creating a table, what is the new module's default behavior?",
        options: [
          "Open an empty form so new records can be created",
          "Open a link to a wiki article with instructions on how to customize the behavior of the new module",
          "Display an empty homepage for the application",
          "Display a list of all records from the table"
        ],
        correctAnswers: ["Display a list of all records from the table"],
        multipleChoice: false
      },
      {
        id: 51,
        text: "How must Application Access be configured to prevent all other private application scopes from creating configuration records on an application's data tables?",
        options: [
          "You must create Access Controls to prevent all other application scopes from creating configuration records on an application's data tables rather than using Application Access",
          "Set the Accessible from field value to All application scopes and de-select the Can create option",
          "Set the Accessible from field value to This application scope only and de-select the Allow access to this table via web services option",
          "Set the Accessible from field value to This application scope only"
        ],
        correctAnswers: ["Set the Accessible from field value to This application scope only"],
        multipleChoice: false
      },
      {
        id: 52,
        text: "What are some of the benefits of extending an existing table such as the Task table when creating a new application? a) You can repurpose existing fields by simply changing the label. b) Use existing fields with no modifications. c) Existing logic from the parent table will be automatically applied to the new table. d) All of the parent table records are copied to the new table.",
        options: [
          "a, b, c, and d",
          "a and b",
          "b and c",
          "a, b, and c"
        ],
        correctAnswers: ["a, b, and c"],
        multipleChoice: false
      },
      {
        id: 53,
        text: "Which of the following methods are useful in Access Control scripts?",
        options: [
          "g_user.hasRole() and current.isNewRecord()",
          "gs.hasRole() and current.isNewRecord()",
          "g_user.hasRole() and current.isNew()",
          "gs.hasRole() and current.isNew()"
        ],
        correctAnswers: ["gs.hasRole() and current.isNewRecord()"],
        multipleChoice: false
      },
      {
        id: 54,
        text: "When a ServiceNow instance requests information from a web service, ServiceNow is the web service:",
        options: [
          "Publisher",
          "Specialist",
          "Provider",
          "Consumer"
        ],
        correctAnswers: ["Consumer"],
        multipleChoice: false
      },
      {
        id: 55,
        text: "A graphical view of relationships among tables is a:",
        options: [
          "Schema map",
          "Dependency view",
          "Graphical User Interface",
          "Map source report"
        ],
        correctAnswers: ["Schema map"],
        multipleChoice: false
      },
      {
        id: 56,
        text: "Which one of the following is the fastest way to create and configure a Record Producer?",
        options: [
          "Create a Catalog Category, open the category, and select the Add New Record Producer button",
          "Use the Record Producer module then add and configure all variables manually",
          "Open the table in the Table records and select the Add to Service Catalog Related Link",
          "Open the table's form, right-click on the form header, and select the Create Record Producer menu item"
        ],
        correctAnswers: ["Open the table in the Table records and select the Add to Service Catalog Related Link"],
        multipleChoice: false
      },
      {
        id: 57,
        text: "Which objects can you use in a Scheduled Script Execution (Scheduled Job) script?",
        options: [
          "GlideRecord and current",
          "GlideUser and GlideRecord",
          "GlideSystem and GlideRecord",
          "GlideSystem and current"
        ],
        correctAnswers: ["GlideSystem and GlideRecord"],
        multipleChoice: false
      },

    ];

    export default CAD1
