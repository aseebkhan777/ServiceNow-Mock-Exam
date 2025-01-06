const CSA4 = [
    {
        "id": 181,
        "text": "You are asked to create an option in the Service Catalog, which will allow a user to click 'Get Help' and describe the issue they are having. These forms should create incident records, which are automatically routed to the Service Desk. Which method would you use?",
        "options": [
            "Create Record Producer",
            "Create Catalog Item",
            "Create Order Guide",
            "Create Content Item"
        ],
        "correctAnswers": ["Create Record Producer"],
        "multipleChoice": false
    },
    {
        "id": 182,
        "text": "What is the result of the order in which access controls are evaluated?",
        "options": [
            "Ensures user has access to the fields in a table, before considering their access to the table",
            "Ensures user can get to work as quickly as possible",
            "Ensures user has access to the application, before evaluating access to a module within the application",
            "Ensures user has access to a table, before evaluating access to a field in the table"
        ],
        "correctAnswers": ["Ensures user has access to a table, before evaluating access to a field in the table"],
        "multipleChoice": false
    },
    {
        "id": 183,
        "text": "Which tool graphically displays an infrastructure view for a configuration item (CI) and its relationship with other CIs?",
        "options": [
            "Schema Map",
            "Dependency View",
            "Dependency Map",
            "Database View"
        ],
        "correctAnswers": ["Dependency View"],
        "multipleChoice": false
    },
    {
        "id": 184,
        "text": "What are examples of Core tables in the ServiceNow platform?",
        "options": [
            "Configuration, Connect, Chat",
            "Team, Party, Awards",
            "User, Task, Incident",
            "Work, Caller, Timecard"
        ],
        "correctAnswers": ["User, Task, Incident"],
        "multipleChoice": false
    },
    {
        "id": 185,
        "text": "Which tab on the knowledge base record would you use to identify the sets of users who are able to read articles in that knowledge base?",
        "options": [
            "Access List",
            "Can Access",
            "Accessible to",
            "Can Read"
        ],
        "correctAnswers": ["Can Read"],
        "multipleChoice": false
    },
    {
        "id": 186,
        "text": "What are the main components of the Form Design interface? (Choose three.)",
        "options": [
            "Field Layout",
            "Page Header",
            "Field Navigator",
            "Field Picker",
            "Form Layout"
        ],
        "correctAnswers": ["Page Header", "Field Navigator", "Form Layout"],
        "multipleChoice": true
    },
    {
        "id": 187,
        "text": "What is used to determine user access to knowledge bases or a knowledge article?",
        "options": [
            "sn_kb_read, sn_article_read",
            "Privacy Settings",
            "Read Access Flag",
            "User Criteria"
        ],
        "correctAnswers": ["User Criteria"],
        "multipleChoice": false
    },
    {
        "id": 188,
        "text": "What are the three key tables in an enterprise CMDB? (Choose three.)",
        "options": [
            "cmdb",
            "sn_cmdb_bak",
            "cmdb_rel_ci",
            "sn_cmdb",
            "cmdb_ci"
        ],
        "correctAnswers": ["cmdb", "cmdb_rel_ci", "cmdb_ci"],
        "multipleChoice": true
    },
    {
        "id": 189,
        "text": "What is the best practice related to using the Default Update Set for moving customizations between instances?",
        "options": [
            "Merge Default update sets before moving between instances",
            "Submit Default update set to application repository",
            "Application Navigator",
            "Banner"
        ],
        "correctAnswers": ["Banner"],
        "multipleChoice": false
    },
    {
        "id": 190,
        "text": "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
        "options": [
            "Module",
            "Content Frame",
            "Application Navigator",
            "Banner"
        ],
        "correctAnswers": ["Banner"],
        "multipleChoice": false
    },

    {
        "id": 191,
        "text": "Which application is used primarily to load data into ServiceNow?",
        "options": [
            "Import Hub",
            "System Import Sets",
            "Data Import Configuration",
            "Import Management"
        ],
        "correctAnswers": ["System Import Sets"],
        "multipleChoice": false
    },
    {
        "id": 192,
        "text": "If a knowledge base has no access details specified, what users are able to read articles in that knowledge base?",
        "options": [
            "itil users",
            "Any user with an article's permalink",
            "Any active user",
            "No users",
            "Users with kb_user role"
        ],
        "correctAnswers": ["Any active user"],
        "multipleChoice": false
    },
    {
        "id": 193,
        "text": "How would you define an Access Control, to allow a user with the itil role to have permission to create incident records?",
        "options": [
            "Name: incident.None; Operation: create; Role: itil",
            "Name: incident.Any; Operation: write; Permission: itil",
            "Name: incident:*; Permission: write; Role: itil",
            "Name: incident.None; Permission: create; Role: itil",
            "Name: incident:*; Operation: write; Permission: itil"
        ],
        "correctAnswers": ["Name: incident.None; Operation: create; Role: itil"],
        "multipleChoice": false
    },
    {
        "id": 194,
        "text": "What Service Catalog feature do you use to organize items into logical groups?",
        "options": [
            "Categories",
            "Variable Sets",
            "Sections",
            "Catalog items"
        ],
        "correctAnswers": ["Categories"],
        "multipleChoice": false
    },
    {
        "id": 195,
        "text": "When creating a new notification, what must you define? (Choose three.)",
        "options": [
            "The associated knowledge base",
            "Settings for handling inactive user accounts",
            "Under what conditions is the notification sent",
            "Who receives the notification",
            "What the content of the notification"
        ],
        "correctAnswers": ["Under what conditions is the notification sent", "Who receives the notification", "What the content of the notification"],
        "multipleChoice": true
    },
    {
        "id": 196,
        "text": "The ServiceNow platform supports a wide variety of plug-and-play applications. You can choose from the included workflows or build your own workflow: Which of these workflows are included in the platform? (Choose three.)",
        "options": [
            "Federal Workflows",
            "Customer Workflows",
            "Infrastructure Workflows",
            "Manufacturing Workflows",
            "Employee Workflows",
            "IT Workflows"
        ],
        "correctAnswers": ["Customer Workflows", "Employee Workflows", "IT Workflows"],
        "multipleChoice": true
    },
    {
        "id": 197,
        "text": "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
        "options": [
            "The Assignment Group manager field is empty.",
            "The manager does not have the itil role.",
            "The manager is not a member of the Service Desk group.",
            "The manager is not a member of the Network and Hardware groups"
        ],
        "correctAnswers": ["The manager is not a member of the Network and Hardware groups"],
        "multipleChoice": false
    },
    {
        "id": 198,
        "text": "You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?",
        "options": [
            "Approval Chains",
            "Flows",
            "Approver Delegates",
            "Parent-Child Approvers",
            "Approval Criteria"
        ],
        "correctAnswers": ["Flows"],
        "multipleChoice": false
    },
    {
        "id": 199,
        "text": "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationships?",
        "options": [
            "Dependency View",
            "CI Class Map",
            "Business Service Map",
            "CSDM Schema"
        ],
        "correctAnswers": ["Dependency View"],
        "multipleChoice": false
    },
    {
        "id": 200,
        "text": "What is the definition of a group?",
        "options": [
            "A collection of subject matter experts",
            "A team of users",
            "An escalation pod",
            "A collection of users",
            "A department"
        ],
        "correctAnswers": ["A collection of users"],
        "multipleChoice": false
    },


    {
        "id": 201,
        "text": "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
        "options": ["Group", "Department", "My reports", "Team", "Global", "All"],
        "correctAnswers": ["Group", "My reports", "Global", "All"],
        "multipleChoice": true
    },
    {
        "id": 202,
        "text": "On a filter condition, there is an element, which is based on the table, the user access rights, and columns on the table. What is this element called?",
        "options": ["Label", "Column", "Data Element", "Field", "Attribute"],
        "correctAnswers": ["Field"],
        "multipleChoice": false
    },
    {
        "id": 203,
        "text": "You have been asked to create a way for users to order a new iPhone, but only if they get two levels of approval. The approvers and users should be automatically notified at each approval level. What feature would you use to manage the approvals and notifications?",
        "options": ["Approval Chains", "Flows", "Approver Delegates", "Parent-Child Approvers", "Approval Criteria"],
        "correctAnswers": ["Flows"],
        "multipleChoice": false
    },
    {
        "id": 204,
        "text": "Groups are stored in what table?",
        "options": ["User Group [user_groups]", "Groups [sys_user_groups]", "Group [sn_sys_user_group]", "Group [sys_user_group]", "User Groups [sn_user_groups]"],
        "correctAnswers": ["Group [sys_user_group]"],
        "multipleChoice": false
    },
    {
        "id": 205,
        "text": "When managing tags, you can adjust who is able to see it. What are the visibility options? (Choose three.)",
        "options": ["Groups and Users", "Me", "Roles and Permissions", "Everyone", "Admins"],
        "correctAnswers": ["Groups and Users", "Me", "Everyone"],
        "multipleChoice": true
    },
    {
        "id": 206,
        "text": "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
        "options": ["Field Transform", "Schema Map", "Transform Map", "Import Map"],
        "correctAnswers": ["Transform Map"],
        "multipleChoice": false
    },
    {
        "id": 207,
        "text": "On the Form header, which icon do you use to access form templates?",
        "options": ["Stamp", "Pages", "More Options (...)", "Paperclip"],
        "correctAnswers": ["More Options (...)"],
        "multipleChoice": false
    },
    {
        "id": 208,
        "text": "When using the Data Pill Picker, use which keys to dot-walk to fields in other tables?",
        "options": ["Plus, Minus", "Ctrl <, Ctrl >", "Arrows", "Ctrl C, Ctrl V", "Shift F4, Shift F5"],
        "correctAnswers": ["Arrows"],
        "multipleChoice": false
    },
    {
        "id": 209,
        "text": "In what order are Access Controls evaluated?",
        "options": ["Field-level - most specific to most general; then Table-level - most specific to most general", "Field-level - most general to most specific; then Row-level - most specific to most general", "Table-level - most specific to most general; then Field-level - most specific to most general", "Table-level - most specific to most general, then Row-level - most specific to most general"],
        "correctAnswers": ["Table-level - most specific to most general; then Field-level - most specific to most general"],
        "multipleChoice": false
    },
    {
        "id": 210,
        "text": "What instance resource allows you to access guided tours, information about actions, and instructions on how to use inputs and outputs in your flow?",
        "options": ["Docs", "Community", "Help Panel (Q mark icon)", "Wiki"],
        "correctAnswers": ["Help Panel (Q mark icon)"],
        "multipleChoice": false
    },
    {
        "id": 211,
        "text": "The Report Designer contains different sections for configuring your report. Which section is used to specify grouping and calculations to be run against the data?",
        "options": ["Style", "Group by", "Configure", "Format", "Data"],
        "correctAnswers": ["Configure"],
        "multipleChoice": false
    },
    {
        "id": 212,
        "text": "What icon do you use to change the icon and color on a Favorite?",
        "options": ["Clock", "Pencil", "Triangle", "Star"],
        "correctAnswers": ["Pencil"],
        "multipleChoice": false
    },
    {
        "id": 213,
        "text": "You have heard about a new application released by ServiceNow. You want to try it out, to see if it might be useful for your company's ServiceNow implementation. What would be the best way to get hands-on experience with the new application?",
        "options": ["Search the wiki for the sales demo request form", "Check the latest release notes at docs.servicenow.com", "Activate the application plugin, on your personal dev instance", "Activate the application plugin, on your company's production instance"],
        "correctAnswers": ["Activate the application plugin, on your personal dev instance"],
        "multipleChoice": false
    },
    {
        "id": 214,
        "text": "When looking at a long list of records, you want to quickly filter, to show only those which have Category of Hardware. How might you do that?",
        "options": ["On the Category column header, right click and select Show > Hardware", "Right click on magnifier, type Hardware and click enter", "On the list, locate and right click on the value Hardware, select Show Matching", "On Breadcrumb, click > icon, type Hardware and click enter", "Click Funnel icon, type Hardware and click enter"],
        "correctAnswers": ["On the list, locate and right click on the value Hardware, select Show Matching"],
        "multipleChoice": false
    },
    {
        "id": 215,
        "text": "When looking at a long list of records, you want to quickly filter, to show only those which have Short Description containing email. How might you do that?",
        "options": ["Click List Magnifier to expand column search, on Short Description, type email, click enter", "On Search box, select text, type email, click enter", "Click List Magnifier to expand column search, on Short Description, type *email, click enter", "Click List Magnifier to expand column search, on Short Description, type %email, click enter"],
        "correctAnswers": ["Click List Magnifier to expand column search, on Short Description, type *email, click enter"],
        "multipleChoice": false
    },


    {
        "id": 216,
        "text": "When importing spreadsheet data into ServiceNow, what is the first step in the process?",
        "options": ["Run Data Scrubber", "Set Coalesce", "Select Import Set", "Load Data", "Define Data Source"],
        "correctAnswers": ["Load Data"],
        "multipleChoice": false
    },
    {
        "id": 217,
        "text": "Tables may be set up with Many to Many relationships. What is a classic example of a scenario where the tables would have many to many relationships?",
        "options": ["Vendors can sell multiple products; and products can be sold by multiple vendors.", "A Task can trigger many Workflows; and a Workflow can trigger many Tasks.", "Requests can contain many Items; and Items can be any item from the catalog.", "A Configuration Item can belong to multiple Classes, and Classes can contain multiple Configuration Items."],
        "correctAnswers": ["Vendors can sell multiple products; and products can be sold by multiple vendors."],
        "multipleChoice": false
    },
    {
        "id": 218,
        "text": "What section on a task record would you use to see the most recent update made to a record?",
        "options": ["Audit Log", "Timeline", "Activity", "Journal"],
        "correctAnswers": ["Activity"],
        "multipleChoice": false
    },
    {
        "id": 219,
        "text": "The Employee On-boarding team has asked for a way for managers to order computers, monitors, business cards, and cell phones for new employees. How would you proceed to meet this requirement?",
        "options": ["Create Requested Item", "Create Record Producer", "Create On-boarding Bot", "Create Order Guide"],
        "correctAnswers": ["Create Order Guide"],
        "multipleChoice": false
    },
    {
        "id": 220,
        "text": "On the CI Dependency View, what enables you to trace from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
        "options": ["Automapping Utility", "Relationships", "Service Tracer", "Transform Map"],
        "correctAnswers": ["Relationships"],
        "multipleChoice": false
    },
    {
        "id": 221,
        "text": "From a related list, what would a user click to personalize the layout of the columns?",
        "options": ["Gear", "Context Menu", "Pencil", "Magnifier"],
        "correctAnswers": ["Gear"],
        "multipleChoice": false
    },
    {
        "id": 222,
        "text": "What is the language used for scripting in ServiceNow?",
        "options": ["C++", "JavaScript", "PHP", "Python"],
        "correctAnswers": ["JavaScript"],
        "multipleChoice": false
    },
    {
        "id": 223,
        "text": "What are examples of UI Actions, relating to Lists? (Choose four.)",
        "options": ["List Links", "List Choices", "List Buttons", "List Override", "List Context Menu", "List Control"],
        "correctAnswers": ["List Links", "List Choices", "List Buttons", "List Context Menu"],
        "multipleChoice": true
    },
    {
        "id": 224,
        "text": "A Service Catalog project will involve building 80 catalog items. For each of the catalog items, the following fields will be mandatory on the forms: \n• Requested for \n• Requested by \n• Approving manager \n• Delivery instructions \nAll of the other variables will be specific to the individual catalog item. What features would you use when designing the catalog item form?",
        "options": ["Create a Variable Set Template, then apply to all of the catalog items.", "Create one Variable Set for the four variables, then add that variable set to each of the 80 catalog items.", "Create a Record Producer that contains the four fields; then add to the record producer related list on the Catalog Items.", "Create a Flow Designer Action, with Variable Set Data Pill, then apply flow to all of the 80 catalog items.", "Create an Order Guide, which includes all variables; then copy and hide variables as needed."],
        "correctAnswers": ["Create one Variable Set for the four variables, then add that variable set to each of the 80 catalog items."],
        "multipleChoice": false
    },
    {
        "id": 225,
        "text": "A task worker asks how they can monitor any updates occurring to records assigned to him, like responses from customers. What do you suggest?",
        "options": ["On My Work list, select the Activity Stream icon to show a frame with live updates", "Click on the eyeglass icon to expand the Monitor frame", "Open an Agent workspace tab for each record he wants to monitor", "Select Service Desk > My Work Dashboard"],
        "correctAnswers": ["On My Work list, select the Activity Stream icon to show a frame with live updates"],
        "multipleChoice": false
    },
    {
        "id": 226,
        "text": "What access does a user need to be able to import articles to a knowledge base?",
        "options": ["sn_knowledge_import", "sn_knowledge_contribute", "Can contribute", "Can import"],
        "correctAnswers": ["Can contribute"],
        "multipleChoice": false
    },
    {
        "id": 227,
        "text": "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
        "options": ["Schedule Transform", "Field Matching", "Select Data Source", "Create Transform Map", "Load Data"],
        "correctAnswers": ["Create Transform Map"],
        "multipleChoice": false
    },
    {
        "id": 228,
        "text": "To apply a UI Policy to all views, which field should be set to true in its definition record?",
        "options": ["Global", "Reverse if false", "On load", "Inherit"],
        "correctAnswers": ["Global"],
        "multipleChoice": false
    },
    {
        "id": 229,
        "text": "What are the steps for importing data using an import set?",
        "options": ["Select source file; Run automap; Transform data; Clean up target table", "Identity source; Import transform map; Run transformer, Verify import", "Setup LDAP; Test map; Create update set; Run import; Apply update set", "Load the data; Create transform map; Transform data; Clean up import table"],
        "correctAnswers": ["Load the data; Create transform map; Transform data; Clean up import table"],
        "multipleChoice": false
    },
    {
        "id": 230,
        "text": "Which type of scripts run in the browser?",
        "options": ["Script Include Scripts", "Access Control Scripts", "Business Rule Scripts", "UI Policies and Client Scripts"],
        "correctAnswers": ["UI Policies and Client Scripts"],
        "multipleChoice": false
    },


    {
        "id": 231,
        "text": "Which modules can you use to create a new table? (Choose two.)",
        "options": ["Dictionary", "Schema Map", "Tables", "Tables & Columns"],
        "correctAnswers": ["Tables", "Tables & Columns"],
        "multipleChoice": true
    },
    {
        "id": 232,
        "text": "Which one of the following describes the primary operations performed against tables in the ServiceNow platform?",
        "options": ["Create, Read, Upload, Delete", "Capture, Rate, Write, Develop", "Create, Rate, Update, Delete", "Create, Read, Write, Delete"],
        "correctAnswers": ["Create, Read, Write, Delete"],
        "multipleChoice": false
    },
    {
        "id": 233,
        "text": "How is a user defined in ServiceNow?",
        "options": ["A user is a record stored in the Profile [sys_user_profile] table", "A user is a record stored in the User [sys_user] table", "A user is a record stored in the User Preference [sys_user_preference] table", "A user is a field in the LDAP integration"],
        "correctAnswers": ["A user is a record stored in the User [sys_user] table"],
        "multipleChoice": false
    },
    {
        "id": 234,
        "text": "Which ServiceNow utility gives a Service Desk agent the ability to trace from a Service having an issue, to see which CIs supporting that service have active issues?",
        "options": ["CI Dependency View", "Event Management Homepage", "Service Dashboard", "CI Health Dashboard"],
        "correctAnswers": ["CI Dependency View"],
        "multipleChoice": false
    },
    {
        "id": 235,
        "text": "Which feature enables business process owners to organize Flow Designer content into unified and digitized cross-enterprise processes via a digitized task board interface?",
        "options": ["Flow Designer", "Workflow Editor", "Process Workflow Designer", "Process Automation Designer"],
        "correctAnswers": ["Process Automation Designer"],
        "multipleChoice": false
    },
    {
        "id": 236,
        "text": "An IT user calls the service desk because they need to work on task records. All they can see is Self Service on their homepage when they login to the ServiceNow instance. What issue could explain this? (Choose two.)",
        "options": ["Their user account does not have itil role", "Their user account was not approved by their manager", "Their user account is not logged in properly", "Their user account failed LDAP authentication", "Their user account does not belong to any groups, which contain the itil role"],
        "correctAnswers": ["Their user account does not have itil role", "Their user account does not belong to any groups, which contain the itil role"],
        "multipleChoice": true
    },
    {
        "id": 237,
        "text": "On a related list, which buttons are commonly used for managing the records on the list? (Choose three.)",
        "options": ["Add", "Edit", "Publish", "Manage", "New"],
        "correctAnswers": ["Add", "Edit", "New"],
        "multipleChoice": true
    },
    {
        "id": 238,
        "text": "A customer requests the following data quality measures be added:\n• Incident numbers should be read only, on all lists and forms, for all users.\n• Short Description field should be mandatory, on all records, across all applications, on Insert.\nWhich type of policy would you use to meet this requirement?",
        "options": ["Data Quality Policy", "Dictionary Design Policy", "Data Policy", "Field Criteria Policy"],
        "correctAnswers": ["Data Policy"],
        "multipleChoice": false
    },
    {
        "id": 239,
        "text": "On what part of the ServiceNow instance, would you find the option to access applications, like Incident Management?",
        "options": ["Application Navigator", "Service Desk Homepage", "Self Service Module", "Favorites"],
        "correctAnswers": ["Application Navigator"],
        "multipleChoice": false
    },
    {
        "id": 240,
        "text": "What catalog tool would you use to create a catalog item or record producer?",
        "options": ["Catalog Builder", "Workflow Designer", "Catalog Designer", "Catalog Formatter"],
        "correctAnswers": ["Catalog Builder"],
        "multipleChoice": false
    },
];

export default CSA4;