const CSA = [
  {
    "id": 1,
    "text": "A Service Catalog may include which of the following components?",
    "options": ["Order Guides, Exchange Rates, Calendars", "Order Guides, Catalog Items, and Interceptors", "Catalog Items, Asset Contracts, Task Surveys", "Record Producers, Order Guides, and Catalog Items"],
    "correctAnswers": ["Record Producers, Order Guides, and Catalog Items"],
    "multipleChoice": false
  },

  {
    "id": 2, "text": "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
    "options": ["If a match is found using the coalesce fields, the existing record is updated with the information being imported", "If a match is not found using the coalesce fields, the system does not create a Transform Map", "If a match is found using the coalesce fields, the system creates a new record", "If a match is not found using the coalesce fields, the existing record is updated with the information being imported"],
    "correctAnswers": ["If a match is found using the coalesce fields, the existing record is updated with the information being imported"],
    "multipleChoice": false
  },

  {
    "id": 3, "text": "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
    "options": ["A metric is a report gauge used on homepages to display real-time data", "A metric is a time measurement used to report the effectiveness of workflows and SLAs", "A metric is used to measure and evaluate the effectiveness of IT service management processes", "A metric is a comparative measurement used to report the effectiveness of flows and SLAs."],
    "correctAnswers": ["A metric is used to measure and evaluate the effectiveness of IT service management processes"],
    "multipleChoice": false
  },

  {
    "id": 4, "text": "The display sequence is controlled in a Service Catalog Item using which of the following?",
    "options": ["The Default Value field in the Catalog Item form", "The Sequence field in the Catalog Item form", "The Order field in the Variable form", "The Choice field in the Variable form"],
    "correctAnswers": ["The Order field in the Variable form"],
    "multipleChoice": false
  },

  {
    "id": 5, "text": "Reports can be created from which different places in the platform? (Choose two.)",
    "options": ["List column heading", "Metrics module", "Statistics module", "View / Run module"],
    "correctAnswers": ["List column heading", "View / Run module"],
    "multipleChoice": true
  },

  {
    "id": 6, "text": "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
    "options": ["Most recent update", "Popularity", "Relevancy", "Manager assignment", "Number of views"],
    "correctAnswers": ["Most recent update", "Relevancy", "Number of views"],
    "multipleChoice": true
  },

  {
    "id": 7, "text": "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
    "options": ["RITM (Number)>REQ (Number)>PROCUREMENT (Number)", "REQ (Number)>RITM (Number)>PROCUREMENT (Number)", "REQ (Number)>RITM (Number)>TASK (Number)", "FULFILLMENT (Number)>RITM (Number)>TASK (Number)"],
    "correctAnswers": ["REQ (Number)>RITM (Number)>TASK (Number)"],
    "multipleChoice": false
  },

  {
    "id": 8, "text": "Which term refers to application menus and modules which you may want to access quickly and often?",
    "options": ["Breadcrumb", "Favorite", "Tag", "Bookmark"],
    "correctAnswers": ["Favorite"],
    "multipleChoice": false
  },

  {
    "id": 9, "text": "What is generated from the Service Catalog once a user places an order for an item or service?",
    "options": ["A change request", "An Order Guide", "A request", "An SLA"],
    "correctAnswers": ["A request"],
    "multipleChoice": false
  },

  {
    "id": 10, "text": "From the User menu, which actions can a user select? (Choose three.)",
    "options": ["Send Notifications", "Log Out ServiceNow", "Elevate Roles", "Impersonate Users", "Order from Service Catalog", "Approve Records"],
    "correctAnswers": ["Log Out ServiceNow", "Elevate Roles", "Impersonate Users"],
    "multipleChoice": true
  },

  {
    "id": 11, "text": "Buttons, form links, and context menu items are all examples of what type of functionality?",
    "options": ["Business Rule", "UI Action", "Client Script", "UI Policy"],
    "correctAnswers": ["UI Action"],
    "multipleChoice": false
  },

  {
    "id": 12, "text": "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
    "options": ["They run behind the scenes.", "They are the building blocks.", "They are optional.", "They provide options."],
    "correctAnswers": ["They are the building blocks."],
    "multipleChoice": false
  },

  {
    "id": 13, "text": "Table Access Control rules are processed in the following order:",
    "options": ["any table name (wildcard), parent table name, table name", "table name, parent table name, any table name (wildcard)", "parent table name, table name, any table name (wildcard)", "any table name (wildcard), table name, parent table name"],
    "correctAnswers": ["table name, parent table name, any table name (wildcard)"],
    "multipleChoice": false
  },

  {
    "id": 14, "text": "What is the platform name for the User table?",
    "options": ["u_users", "sys_users", "x_users", "sys_user"],
    "correctAnswers": ["sys_user"],
    "multipleChoice": false
  },

  {
    "id": 15, "text": "A REQ number in the Service Catalog represents",
    "options": ["the order number.", "the stage.", "the task to complete.", "the individual item in the order."],
    "correctAnswers": ["the order number."],
    "multipleChoice": false
  },

  {
    "id": 16, "text": "Which would NOT appear in the History section of the Application Navigator?",
    "options": ["Records", "UI Pages", "Lists", "Forms"],
    "correctAnswers": ["UI Pages"],
    "multipleChoice": false
  },

  {
    "id": 17, "text": "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
    "options": ["Avoid using the Default Update set as an Update Set for moving customizations from instance to instance", "Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions", "Use the Baseline Update Set to store the contents of items after they are changed the first time", "Once an Update Set is closed as ‘Complete’, change it back to ‘In Progress’ until it is applied to another instance"],
    "correctAnswers": ["Avoid using the Default Update set as an Update Set for moving customizations from instance to instance"],
    "multipleChoice": false
  },

  {
    "id": 18, "text": "Which of the following is used to initiate a flow?",
    "options": ["A Trigger", "Core Action", "A spoke", "An Event"],
    "correctAnswers": ["A Trigger"],
    "multipleChoice": false
  },

  {
    "id": 19, "text": "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
    "options": ["Service Catalog variables can only be used in Record Producers", "Service Catalog variables can only be used in Order Guides", "Service Catalog variables cannot affect the order price", "Service Catalog variables are global by default"],
    "correctAnswers": ["Service Catalog variables are global by default"],
    "multipleChoice": false
  },

  {
    "id": 20, "text": "Which one of the following statements is true about Column Context Menus?",
    "options": ["It displays actions such as creating quick reports, configuring the list, and exporting data", "It displays actions related to filtering options, assigning tags, and search", "It displays actions related to viewing and filtering the entire list", "It displays actions such as view form, view related task, and add relationship"],
    "correctAnswers": ["It displays actions such as creating quick reports, configuring the list, and exporting data"],
    "multipleChoice": false
  },
  {
    "id": 22, "text": "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
    "options": ["Mapping fields using the Import Log", "Mapping fields using Transform History", "Mapping fields using an SLA", "Mapping fields using a Field Map"],
    "correctAnswers": ["Mapping fields using a Field Map"],
    "multipleChoice": false
  },

  {
    "id": 23, "text": "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
    "options": ["The CMDB contains data about tangible and intangible business assets", "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company", "The CMDB archives all Service Management PaaS equipment metadata and usage statistics", "The CMDB contains ITIL process data pertaining to configuration items"],
    "correctAnswers": ["The CMDB contains data about tangible and intangible business assets"],
    "multipleChoice": false
  },

  {
    "id": 24, "text": "In what order should filter elements be specified?",
    "options": ["Field, Operator, then Value", "Field, Operator, then Condition", "Operator, Condition, then Value", "Value, Operator, then Field"],
    "correctAnswers": ["Field, Operator, then Value"],
    "multipleChoice": false
  },

  {
    "id": 25, "text": "Which statement is true about business rules?",
    "options": ["A business rule must run before a database action occurs", "A business rule can be a piece of Javascript", "A business rule must not run before a database action occurs", "A business rule monitors fields on a form"],
    "correctAnswers": ["A business rule can be a piece of Javascript"],
    "multipleChoice": false
  },

  {
    "id": 26, "text": "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
    "options": ["onSubmit", "onUpdate", "onCellEdit", "onLoad", "onEdit", "onChange", "onSave"],
    "correctAnswers": ["onSubmit", "onCellEdit", "onLoad", "onChange"],
    "multipleChoice": true
  },

  {
    "id": 27, "text": "Which type of tables may be extended by other tables, but do not extend another table?",
    "options": ["Base Tables", "Core Tables", "Extended Tables", "Custom Tables"],
    "correctAnswers": ["Base Tables"],
    "multipleChoice": false
  },

  {
    "id": 28, "text": "Which of the following statement describes the purpose of an Order Guide?",
    "options": ["Order Guides restrict the number of items in an order to only one item per request", "Order Guide provide a list of guidelines for Administrators on how to set up item variables", "Order Guide provide the ability to order multiple, related items as one request  ", "Order Guides take the user directly to the checkout without prompting for information"],
    "correctAnswers": ["Order Guide provide the ability to order multiple, related items as one request"],
    "multipleChoice": false
  },

  {
    "id": 29, "text": "Which tool is used to have conversations with logged-in users in real-time?",
    "options": ["Connect Chat", "Now Messenger", "User Presence", "Comments"],
    "correctAnswers": ["Connect Chat"],
    "multipleChoice": false
  },

  {
    "id": 30, "text": "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
    "options": ["Service Processes", "User Permissions", "Tables and Fields", "A Database", "The Dependency View"],
    "correctAnswers": ["Service Processes", "Tables and Fields", "A Database", "The Dependency View"],
    "multipleChoice": true
  },

  {
    "id": 31, "text": "What is a formatter? Select one of the following.",
    "options": ["A formatter allows you to configure applications on your instance", "A formatter is a form element used to display information that is not a field in the record", "A formatter allows you to populate fields automatically", "A formatter is a set of conditions applied to a table to help find and work with data"],
    "correctAnswers": ["A formatter is a form element used to display information that is not a field in the record"],
    "multipleChoice": false
  },

  {
    "id": 32, "text": "When searching using the App Navigator search field, what can be returned? (Choose four.)",
    "options": ["Names of Applications and Modules", "Names of Modules", "Names of Applications", "Favorites", "History Records", "Titles of Dashboard Gauges"],
    "correctAnswers": ["Names of Applications and Modules", "Names of Modules", "Names of Applications", "Favorites"],
    "multipleChoice": true
  },

  {
    "id": 33, "text": "Which technique is used to get information from a series of referenced fields from different tables?",
    "options": ["Table-Walking", "Sys_ID Pulling", "Dot-Walking", "Record-Hopping"],
    "correctAnswers": ["Dot-Walking"],
    "multipleChoice": false
  },

  {
    "id": 34, "text": "What is a schema map?",
    "options": ["A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items", "A schema map graphically organizes the visual task boards for the CMDB", "A schema map graphically displays the Configuration Items that support a business service", "A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"],
    "correctAnswers": ["A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"],
    "multipleChoice": false
  },

  {
    "id": 35, "text": "Which one of the following statements best describes the purpose of an Update Set?",
    "options": ["An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems", "By default, an Update Set includes customizations, Business Rules, and homepages", "An Update Set is a group of customizations that is moved from Production to Development", "By default, the changes included in an Update Set are visible only in the instance to which they are applied"],
    "correctAnswers": ["An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems"],
    "multipleChoice": false
  },

  {
    "id": 36, "text": "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
    "options": ["Banner Image", "Record Number Format", "Browser Tab Title", "System Date Format", "Form Header Size"],
    "correctAnswers": ["Banner Image", "Browser Tab Title", "System Date Format"],
    "multipleChoice": true
  },

  {
    "id": 37, "text": "Which of the following statements is true regarding import sets?",
    "options": ["An import set can be used to move data between ServiceNow instances", "An import set can only be used to import data into ServiceNow from external systems", "An import set can be used to create records from data that exists within the same instance", "An import set can only be used to import data into ServiceNow from external systems"],
    "correctAnswers": ["An import set can be used to move data between ServiceNow instances"],
    "multipleChoice": false
  },

  {
    "id": 38,
    "text": "What information does the System Dictionary contain?",
    "options": [
        "The human-readable labels and language settings",
        "The definition for each table and column",
        "The information on how tables relate to each other",
        "The language dictionary used for spell checking"
    ],
    "correctAnswers": ["The definition for each table and column"],
    "multipleChoice": false
},

  {
    "id": 39,
    "text": "When working on a form, what is the difference between Insert and Update operations?",
    "options": [
        "Insert creates a new record and Update saves changes, both remain on the form",
        "Insert creates a new record and Update saves changes, both exit the form",
        "Insert saves changes and exits the form, Update saves changes and remains on the form",
        "Insert saves changes and remains on the form, Update saves changes and exits the form"
    ],
    "correctAnswers": ["Insert creates a new record and Update saves changes, both exit the form"],
    "multipleChoice": false
},

  {
    "id": 40,
    "text": "Which of the following is a true statement about record producers?",
    "options": ["Record Producers allow users to create records in ServiceNow through the Service Catalog", "Record Producers are always linked to a specific catalog item", "Record Producers only work with incidents", "Record Producers allow users to create records in the Incident form only"],
    "correctAnswers": ["Record Producers allow users to create records in ServiceNow through the Service Catalog"],
    "multipleChoice": false
  },

  {
    "id": 41,
    "text": "What is a Dictionary Override?",
    "options": [
      "A Dictionary Override is an incoming customer update in an Update Set which applies to the same objects as a newer local customer update",
      "A Dictionary Override is the addition, modification, or removal of anything that could have an effect on IT services",
      "A Dictionary Override is a task within a flow that requests an action before the flow can continue",
      "A Dictionary Override sets field properties in extended tables"
    ],
    "correctAnswers": ["A Dictionary Override sets field properties in extended tables"],
    "multipleChoice": false
  },

  {
    "id": 42,
    "text": "Which group of permissions is used to control Application and Module access?",
    "options": [
      "Access Control Rules",
      "UI Policies",
      "Roles",
      "Assignment Rules"
    ],
    "correctAnswers": ["Roles"],
    "multipleChoice": false
  },

  {
    "id": 43,
    "text": "What is a Record Producer?",
    "options": [
      "A Record Producer is a type of Catalog Item that is used for Requests, not Services",
      "A Record Producer creates user records",
      "A Record Producer is a type of Catalog Item that provides easy ordering by bundling requests",
      "A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog"
    ],
    "correctAnswers": ["A Record Producer is a type of a Catalog Item that allows users to create task-based records from the Service Catalog"],
    "multipleChoice": false
  },

  {
    "id": 44,
    "text": "Create Incident, Password Reset, and Report outage: what do these services in the Service Catalog have in common?",
    "options": [
      "They direct the user to a record producer",
      "They direct the user to a catalog property",
      "They direct the user to a catalog UI policy",
      "They direct the user to a catalog client script"
    ],
    "correctAnswers": ["They direct the user to a record producer"],
    "multipleChoice": false
  },

  {
    "id": 45,
    "text": "What is the Import Set Table?",
    "options": [
      "A table where data will be placed, post-transformation",
      "A table that determines relationships",
      "A staging area for imported records",
      "A repository for Update Set information"
    ],
    "correctAnswers": ["A staging area for imported records"],
    "multipleChoice": false
  },

  {
    "id": 46,
    "text": "What is a characteristic of importing data into ServiceNow?",
    "options": [
      "An existing Transform Map can be used one time on the same import set",
      "Coalesce fields are used only after running Transform",
      "Any user can manage and set up import sets",
      "An existing Transform Map can be used multiple times on the same import set"
    ],
    "correctAnswers": ["An existing Transform Map can be used multiple times on the same import set"],
    "multipleChoice": false
  },

  {
    "id": 47,
    "text": "What module in the Service Catalog application does an Administrator access to begin creating a new item?",
    "options": [
      "Maintain Categories",
      "Maintain Items",
      "Content Items",
      "Items"
    ],
    "correctAnswers": ["Maintain Items"],
    "multipleChoice": false
  },

  {
    "id": 48,
    "text": "Which of the following allows a user to edit field values in a list without opening the form?",
    "options": [
      "Data Editor",
      "Edit Menu",
      "List Editor",
      "Form Designer"
    ],
    "correctAnswers": ["List Editor"],
    "multipleChoice": false
  },

  {
    "id": 49,
    "text": "Which three Variable Types can be added to a Service Catalog Item?",
    "options": [
      "True/False, Multiple Choice, and Ordered",
      "True/False, Checkbox, and Number List",
      "Number List, Single Line Text, and Reference",
      "Multiple Choice, Select Box, and Checkbox"
    ],
    "correctAnswers": ["Multiple Choice, Select Box, and Checkbox"],
    "multipleChoice": false
  },

  {
    "id": 50,
    "text": "How are Workflows moved between instances?",
    "options": [
      "Workflows are moved using Update Sets",
      "Workflows are moved using Transform Maps",
      "Workflows are moved using Application Sets",
      "Workflows cannot be moved between instances"
    ],
    "correctAnswers": ["Workflows are moved using Update Sets"],
    "multipleChoice": false
  },

  {
    "id": 51,
    "text": "The baseline Service Catalog homepage contains links to which of the following components?",
    "options": [
      "Record Producers, Order Guides, and Catalog Items",
      "Order Guides, Item Variables, and flows",
      "Order Guides, Catalog Items, and flows",
      "Record Producers, Order Guides, and Item Variables"
    ],
    "correctAnswers": ["Record Producers, Order Guides, and Catalog Items"],
    "multipleChoice": false
  },

  {
    "id": 52,
    "text": "Which of the following statements is true when a new table is created by extending another table?",
    "options": [
      "The new table archives the parent table and assumes its roles in the database",
      "The new table inherits all of the Business Rules, Client Scripts, and UI Policies of the parent table, but none of the existing fields",
      "The new table inherits all of the fields of the parent table and can also contain new fields unique to itself",
      "The new table inherits all of the fields, but does not inherit Access Control rules, Client Scripts, and UI Policies of the parent table"
    ],
    "correctAnswers": ["The new table inherits all of the fields of the parent table and can also contain new fields unique to itself"],
    "multipleChoice": false
  },

  {
    "id": 53,
    "text": "Where can Admins check which release is running on a ServiceNow instance?",
    "options": [
      "Memory Stats module",
      "Stats module",
      "System.upgraded table",
      "Transactions log"
    ],
    "correctAnswers": ["Stats module"],
    "multipleChoice": false
  },

  {
    "id": 54,
    "text": "A knowledge article must be which of the following states to display to a user?",
    "options": [
      "Published",
      "Drafted",
      "Retired",
      "Reviewed"
    ],
    "correctAnswers": ["Published"],
    "multipleChoice": false
  },

  {
    "id": 55,
    "text": "What is the name of the conversational bot platform that provides assistance to help users obtain information, make decisions, and perform common tasks?",
    "options": [
      "Answer Agent",
      "live Feed",
      "Virtual Agent",
      "Connect Chat"
    ],
    "correctAnswers": ["Virtual Agent"],
    "multipleChoice": false
  },

  {
    "id": 56,
    "text": "What is the purpose of a Related List?",
    "options": [
      "To create a one-to-many relationship",
      "To dot-walk to a core table",
      "To present related fields",
      "To present related records"
    ],
    "correctAnswers": ["To present related records"],
    "multipleChoice": false
  },

  {
    "id": 57,
    "text": "Which one of the following statements describes the purpose of a Service Catalog flow?",
    "options": [
      "A Service Catalog flow generates three basic components: item variable types, tasks, and approvals",
      "Although a Service Catalog flow cannot send notifications, the flow drives complex fulfillment processes",
      "A Service Catalog flow is used to drive complex fulfillment processes and sends notifications to defined users or groups",
      "A Service Catalog flow generates three basic components: item variable types, tasks, and notifications"
    ],
    "correctAnswers": ["A Service Catalog flow is used to drive complex fulfillment processes and sends notifications to defined users or groups"],
    "multipleChoice": false
  },

  {
    "id": 58,
    "text": "Which term best describes something that is created, has worked performed upon it, and is eventually moved to a state of closed?",
    "options": [
      "report",
      "flow",
      "event",
      "task"
    ],
    "correctAnswers": ["task"],
    "multipleChoice": false
  },

  {
    "id": 59,
    "text": "Which are valid ServiceNow User Authentication Methods? (Choose three.)",
    "options": [
      "XML feed",
      "Local database",
      "LDAP",
      "SSO",
      "FTP authentication"
    ],
    "correctAnswers": ["Local database", "LDAP", "SSO"],
    "multipleChoice": true
  },

  {
    "id": 60,
    "text": "Access Control rules may be defined with which of the following permission requirements? (Choose three.)",
    "options": [
      "Roles",
      "Conditional Expressions",
      "Assignment Rules",
      "Scripts",
      "User Criteria",
      "Groups"
    ],
    "correctAnswers": ["Roles", "Conditional Expressions", "Scripts"],
    "multipleChoice": true
  },

  {
    "id": 61,
    "text": "Which section of the ServiceNow UI allows you to perform a global search?",
    "options": [
      "Application Navigator",
      "Banner frame",
      "List pane",
      "Content frame"
    ],
    "correctAnswers": ["Banner frame"],
    "multipleChoice": false
  },

  {
    "id": 62,
    "text": "How do you make a list filter available to everyone?",
    "options": [
      "Make active, assign a name, and save",
      "Assign a group, set visibility, and save",
      "Assign a name, set visibility, and save",
      "Make active, set visibility, and save"
    ],
    "correctAnswers": ["Assign a name, set visibility, and save"],
    "multipleChoice": false
  },

  {
    "id": 63,
    "text": "What would NOT appear in the Application Navigator if 'service' is typed into the filter field?",
    "options": [
      "Configuration > Business Services",
      "Self-Service > Knowledge",
      "Service Portal > Widgets",
      "Incident > Assigned to me"
    ],
    "correctAnswers": ["Incident > Assigned to me"],
    "multipleChoice": false
  },

  {
    "id": 64,
    "text": "Which of the following is used to categorize, flag, and locate records?",
    "options": [
      "Search",
      "Favorites",
      "Tags",
      "Bookmarks"
    ],
    "correctAnswers": ["Tags"],
    "multipleChoice": false
  },

  {
    "id": 65,
    "text": "Which tool should be used to populate commonly used fields in a form?",
    "options": [
      "Template",
      "Reference Qualifier",
      "Formatter",
      "Assignment Rule"
    ],
    "correctAnswers": ["Template"],
    "multipleChoice": false
  },

  {
    "id": 66,
    "text": "How is a group defined in ServiceNow?",
    "options": [
      "A group is one record stored in the Group Type [sys_user_group_type] table",
      "A group is one record stored in the Group [sys_user_group] table",
      "A group defines a set of users that share the same location",
      "A group defines a set of users that share the same job title"
    ],
    "correctAnswers": ["A group is one record stored in the Group [sys_user_group] table"],
    "multipleChoice": false
  },

  {
    "id": 67,
    "text": "What is a role in ServiceNow?",
    "options": [
      "A role is one record in the Role [user_sys_role] table",
      "A role is a set of modules for a particular application",
      "A role is one record in the Role [sys_user_role] table",
      "A role is a persona used in Live Feed Chat"
    ],
    "correctAnswers": ["A role is one record in the Role [sys_user_role] table"],
    "multipleChoice": false
  },

  {
    "id": 68,
    "text": "What is a Notification?",
    "options": [
      "A new Knowledge article created by a Business Rule",
      "A tool for alerting users that events that concern them have occurred",
      "A message through Connect related to a Change Request",
      "An email file attachment"
    ],
    "correctAnswers": ["A tool for alerting users that events that concern them have occurred"],
    "multipleChoice": false
  },

  {
    "id": 69,
    "text": "Which one of the following is NOT a type of Visual Task Board?",
    "options": [
      "Flexible",
      "Freeform",
      "Feature",
      "Guided boards"
    ],
    "correctAnswers": ["Feature"],
    "multipleChoice": false
  },

  {
    "id": 70,
    "text": "What is (are) best practice(s) regarding users/groups/roles? (Choose two.)",
    "options": [
      "You should never assign roles to groups.",
      "You should assign roles to users.",
      "You should add users to groups.",
      "You should assign roles to groups."
    ],
    "correctAnswers": ["You should add users to groups.", "You should assign roles to groups."],
    "multipleChoice": true
  },

  {
    "id": 71,
    "text": "What are two ways to generate an Event? (Choose two.)",
    "options": [
      "Business Rule",
      "Workflow",
      "Log entry",
      "Knowledge article publication"
    ],
    "correctAnswers": ["Business Rule", "Workflow"],
    "multipleChoice": true
  },

  {
    "id": 72,
    "text": "Which core table in the ServiceNow platform provides a series of standard fields used on each of the tables that extend it, such as the Incident [incident] and Problem [problem] tables?",
    "options": [
      "Task [task]",
      "Assignment [assignment]",
      "Service [service]",
      "Workflow [workflow]"
    ],
    "correctAnswers": ["Task [task]"],
    "multipleChoice": false
  },

  {
    "id": 73,
    "text": "Which of the following statements describes how data is organized in a table?",
    "options": [
      "A column is a field in the database and a record is one user",
      "A column is one field and a record is one row",
      "A column is one field and a record is one column",
      "A column contains data from one user and a record is one set of fields"
    ],
    "correctAnswers": ["A column is one field and a record is one row"],
    "multipleChoice": false
  },
  {
    "id": 74,
    "text": "What is a sys_id?",
    "options": [
      "Unique 32-character identifier that is assigned to every record",
      "A client-side Business Rule",
      "A server-side Business Rule",
      "Unique 64-character identifier that is assigned to every record"
    ],
    "correctAnswers": ["Unique 32-character identifier that is assigned to every record"],
    "multipleChoice": false
  },

  {
    "id": 75,
    "text": "When creating a global custom table named `abc`, what is the table name that is automatically assigned by the platform?",
    "options": [
      "snc_abc",
      "abc",
      "u_abc",
      "sys_abc"
    ],
    "correctAnswers": ["u_abc"],
    "multipleChoice": false
  },

  {
    "id": 76,
    "text": "Access Control rules may provide access security for which of the following database objects?",
    "options": [
      "For a specific role, group, or user",
      "For a specific row, column, or table",
      "For specific groups",
      "For a specific CMDB Configuration item"
    ],
    "correctAnswers": ["For a specific row, column, or table"],
    "multipleChoice": false
  },

  {
    "id": 77,
    "text": "What is the primary application used to load data into ServiceNow?",
    "options": [
      "Service Level Management",
      "Configuration",
      "System Import Sets",
      "System Update Sets"
    ],
    "correctAnswers": ["System Import Sets"],
    "multipleChoice": false
  },

  {
    "id": 78,
    "text": "Which of the following steps can be used to import new data into ServiceNow from a spreadsheet?",
    "options": [
      "Select Data Source, Schedule Transform",
      "Load Data, Create Transform Map, Run Transform",
      "Define Data Source, Select Transform Map, Run Transform",
      "Select Import Set, Select Transform Map, Run Transform"
    ],
    "correctAnswers": ["Load Data, Create Transform Map, Run Transform"],
    "multipleChoice": false
  },

  {
    "id": 79,
    "text": "Which tool is used for creating dependencies between configuration items in the CMDB?",
    "options": [
      "CI Relationship Editor",
      "CMDB Builder",
      "CI Service Manager",
      "Cl Class Manager"
    ],
    "correctAnswers": ["CI Relationship Editor"],
    "multipleChoice": false
  },

  {
    "id": 80,
    "text": "What is the difference between a UI Policy and Data Policy?",
    "options": [
      "Data Policies run when data is entered through the form, by an Import Set, or by web services, while UI Policies are set only by web services",
      "Data Policies can be converted into UI Policies, but UI Policies cannot be converted into Data Policies",
      "Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form interactions",
      "Data Policies run only after UI Policies run successfully"
    ],
    "correctAnswers": ["Data Policies run regardless of how data is entered into ServiceNow, while UI Policies are used for form interactions"],
    "multipleChoice": false
  },

  {
    "id": 81,
    "text": "Which one of the following is an accurate list of changes that are captured in an Update Set?",
    "options": [
        "Changes made to: tables, forms, schedules, and client scripts",
        "Changes made to: tables, forms, Business Rules, and data records",
        "Changes made to: tables, forms, groups, and configuration items (CIs)",
        "Changes made to: table, forms, views, and fields"
    ],
    "correctAnswers": ["Changes made to: table, forms, views, and fields"],
    "multipleChoice": false
},


  {
    "id": 82,
    "text": "What are the steps to retrieve an Update Set?",
    "options": [
      "Verify Update Set is Complete, Retrieve, Preview, Apply",
      "Verify Update Set is Complete, Test Connection, Apply",
      "Verify Update Set is Complete, Test Connection, Commit",
      "Verify Update Set is Complete, Retrieve, Preview, Commit"
    ],
    "correctAnswers": ["Verify Update Set is Complete, Retrieve, Preview, Commit"],
    "multipleChoice": false
  },

  {
    "id": 83,
    "text": "IntegrationHub enables execution of third-party APIs as a part of a flow. These integrations are referred to as",
    "options": [
      "an action",
      "a spoke",
      "a connection",
      "an integration step"
    ],
    "correctAnswers": ["a spoke"],
    "multipleChoice": false
  },

  {
    "id": 84,
    "text": "Which of the following protects applications by identifying and restricting access to available files and data?",
    "options": [
      "Application Configuration",
      "Verbose Log",
      "Access Control Rules",
      "Application Scope"
    ],
    "correctAnswers": ["Application Scope"],
    "multipleChoice": false
  },

  {
    "id": 85,
    "text": "Which one statement correctly describes Access Control rule evaluation?",
    "options": [
      "Table access rules are evaluated from the general to the specific",
      "If more than one rule applies to a record, the older rule is evaluated first",
      "If a row level rule and a field level rule exist, both rules must be true before an operation is allowed",
      "The role with the most permissions evaluates the rules first."
    ],
    "correctAnswers": ["If a row level rule and a field level rule exist, both rules must be true before an operation is allowed"],
    "multipleChoice": false
  },

  {
    "id": 86,
    "text": "ServiceNow contains a resource which provides the following:\n✑ A standard and shared set of service related definitions across ServiceNow products and platform that will enable and support true service level reporting.\n✑ A CMDB framework across our products and platform that will enable and support multiple configuration strategies.\nWhat resource do these statements describe?",
    "options": [
      "Common Services Data Model (CSDM)",
      "Information Technology Service Management (ITSM)",
      "Configuration Management Database (CMDB)",
      "Information Technology Infrastructure Library (ITIL)"
    ],
    "correctAnswers": ["Common Services Data Model (CSDM)"],
    "multipleChoice": false
  },

  {
    "id": 87,
    "text": "An IT manager is responsible for the Network and Hardware assignment groups, each group contains 5 team members. These team members are working on many tasks, but the manager cannot see any tasks on the Service Desk > My Groups Work list. What could explain this?",
    "options": [
      "The Service Desk > My Groups Work list shows active work tasks that are not yet assigned.",
      "The manager does not have the itil role.",
      "The manager is not a member of the Service Desk group.",
      "The manager is not a member of the Network and Hardware groups.",
      "The Assignment Group manager field is empty."
    ],
    "correctAnswers": ["The manager is not a member of the Network and Hardware groups."],
    "multipleChoice": false
  },

  {
    "id": 88,
    "text": "What do you need to do before you can use an Application-based trigger in your flow?",
    "options": [
      "Activate application trigger spoke",
      "Activate trigger security rules",
      "Activate application spoke, and plug-ins as needed",
      "Assign Application trigger role [sn_app_trigger_write] to SME",
      "Activate application plugins only"
    ],
    "correctAnswers": ["Activate application spoke, and plug-ins as needed"],
    "multipleChoice": false
  },

  {
    "id": 89,
    "text": "The ServiceNow platform includes which types of interfaces? (Choose three.)",
    "options": [
      "Now Mobile Apps",
      "Agent Control Center",
      "Back Office Dashboard",
      "Service Portals",
      "Now Platform User Interfaces",
      "Field Service Taskboard"
    ],
    "correctAnswers": ["Now Mobile Apps", "Service Portals", "Now Platform User Interfaces"],
    "multipleChoice": true
  },

  {
    "id": 90,
    "text": "Which of the following are not included in an Update Set, by default? (Choose four.)",
    "options": [
      "Homepages",
      "Data",
      "Published Workflows",
      "Business Rules",
      "Schedules",
      "Database changes",
      "Related Lists",
      "Report Definitions",
      "Scheduled Jobs",
      "Client Scripts",
      "Views"
    ],
    "correctAnswers": ["Homepages", "Data", "Schedules", "Scheduled Jobs"],
    "multipleChoice": true
  },

  {
    "id": 91,
    "text": "You are showing your customer a new form that you have created for their new application. They would like to add a field to the form. Where could you do that? (Choose two.)",
    "options": [
      "Select Fields and Columns module",
      "Right click on form header, select Configure > Form Layout",
      "Click on context menu, select Configure > Form Designer",
      "Select Field Class Manager module"
    ],
    "correctAnswers": ["Right click on form header, select Configure > Form Layout", "Click on context menu, select Configure > Form Designer"],
    "multipleChoice": true
  },

  {
    "id": 92,
    "text": "Which ServiceNow resource is a framework that ensures the data your ServiceNow application requires maps correctly to the appropriate CMDB tables?",
    "options": [
      "Common Service Data Model (CSDM)",
      "Service Mapping Utility (SMU)",
      "Service Schema Map (SSM)",
      "CMDB Class Manager (CMDBCM)",
      "CI Class Manager (CICM)"
    ],
    "correctAnswers": ["Common Service Data Model (CSDM)"],
    "multipleChoice": false
  },

  {
    "id": 93,
    "text": "What do you activate when you want to add applications or functionality within your development instance?",
    "options": [
      "App Package",
      "Updated Pack",
      "Patch",
      "Plugin",
      "App Updated Set"
    ],
    "correctAnswers": ["Plugin"],
    "multipleChoice": false
  },

  {
    "id": 94,
    "text": "What field contains a record's 32-character, unique identifier?",
    "options": [
      "sn_rec_id",
      "rec_id",
      "u_id",
      "sys_id",
      "sn_gu_id",
      "sn_sys_id",
      "id"
    ],
    "correctAnswers": ["sys_id"],
    "multipleChoice": false
  },

  {
    "id": 95,
    "text": "Your company is giving all first line workers a special T-shirt as a recognition for their hard work. Management team wants a way for employees to order the T-shirt, with the ability to specify the preferred size and color. How would you ensure that only first line workers (non-managers) can submit the order?",
    "options": [
      "Create Record Producer and use the Available For list to specify First Line [sn_first_line] role",
      "Create Catalog Item and use the Not Available list to specify the Manager Group",
      "Create Catalog Item and use the Available For list to specify ITIL [itil] role",
      "Create Order Guide and use the User Criteria list to specify First Line [sn_first_line] role"
    ],
    "correctAnswers": ["Create Catalog Item and use the Not Available list to specify the Manager Group"],
    "multipleChoice": false
  },

  {
    "id": 96,
    "text": "What is used frequently to move customizations from one instance to another?",
    "options": [
      "Update Sets",
      "Code Sets",
      "Update Packs",
      "Configuration Logs",
      "Remote Sets",
      "Local Sets",
      "Code Packs"
    ],
    "correctAnswers": ["Update Sets"],
    "multipleChoice": false
  },

  {
    "id": 97,
    "text": "In the Software-as-a-service relationship, who is responsible for the majority of the security?",
    "options": [
      "Application Consumer",
      "Database Manager",
      "Application Developer",
      "Cloud Provider",
      "Web Application CISO"
    ],
    "correctAnswers": ["Cloud Provider"],
    "multipleChoice": false
  },

  {
    "id": 98,
    "text": "What needs to be specified, when creating a Business Rule? (Choose four.)",
    "options": [
      "UI action",
      "Table",
      "Fields to update",
      "Who can run",
      "Script to run",
      "Application scope",
      "Update set",
      "Timing",
      "Condition to evaluate"
    ],
    "correctAnswers": ["Table", "Script to run", "Timing", "Condition to evaluate"],
    "multipleChoice": true
  },

  {
    "id": 99,
    "text": "What feature can track the amount of time that a task has been open, to ensure that tasks are completed within an allotted time?",
    "options": [
      "Task Escalation Clock",
      "Service Level Agreements",
      "Inactivity Monitor",
      "Response Time Clock",
      "Business Time Remaining"
    ],
    "correctAnswers": ["Service Level Agreements"],
    "multipleChoice": false
  },

  {
    "id": 100,
    "text": "What is a quick way to create a report from a list view?",
    "options": [
      "Click on filter breadcrumb, drag and drop on the Report > Create New module",
      "Click Funnel, define filter conditions, click Create Report",
      "Click Context Menu, select Create Report",
      "Apply filter, right click on column header, select Bar Chart",
      "Apply filter, right click on column header, select Create Report"
    ],
    "correctAnswers": ["Apply filter, right click on column header, select Bar Chart"],
    "multipleChoice": false
  },
  {
    "id": 101,
    "text": "What import utility do you use when the field names on the import set match the name of the fields on the Target table?",
    "options": [
      "Schema Mapping",
      "Automatic Mapping",
      "Mapping Assist",
      "Mapping Dashboard"
    ],
    "correctAnswers": ["Automatic Mapping"],
    "multipleChoice": false
  },
  {
    "id": 102,
    "text": "As an IT employee, what interface would you use if you wanted to browse internal IT documentation, like troubleshooting scripts and FAQs?",
    "options": [
      "Knowledge",
      "ServiceNow Wiki",
      "Knowledge Now",
      "SharePoint",
      "Stack Overflow"
    ],
    "correctAnswers": ["Knowledge"],
    "multipleChoice": false
  },
  {
    "id": 103,
    "text": "A new Service Desk employee in Latin America complains that the create dates and times are incorrect on their Incident list. What would you suggest to fix this issue?",
    "options": [
      "Have them clear their cache.",
      "Have them use the gear icon to set the employee's time zone.",
      "Recommend they use Chrome, instead of Explorer.",
      "Use the system properties to correct the instance's time zone.",
      "Have them correct the time zone on their computer."
    ],
    "correctAnswers": ["Have them use the gear icon to set the employee's time zone."],
    "multipleChoice": false
  },
  {
    "id": 104,
    "text": "What are three security modules often used by the System Administrator? (Choose three.)",
    "options": [
      "System Properties > Security",
      "Utilities > Migrate Security",
      "System Security > Security",
      "Self-Service > My Access",
      "System Security > Access Control (ACL)",
      "Password Management > Security Questions",
      "System Security > High Security Settings"
    ],
    "correctAnswers": ["System Properties > Security", "System Security > Access Control (ACL)", "System Security > High Security Settings"],
    "multipleChoice": true
  },
  {
    "id": 105,
    "text": "When testing a catalog item, having a manager approval flow, which of these best practices would you follow? (Choose three.)",
    "options": [
      "Make sure the latest flows are activated.",
      "Use the instance Incognito setting to quickly toggle between requester and approver.",
      "Impersonate the requester to ensure the form works.",
      "Make sure the requester's user record has a manager specified.",
      "Create and select your Testing Update Set, before starting the test cases.",
      "Use your Admin account, so you can approve the items quickly."
    ],
    "correctAnswers": ["Make sure the latest flows are activated.", "Impersonate the requester to ensure the form works.", "Make sure the requester's user record has a manager specified."],
    "multipleChoice": true
  },
  {
    "id": 106,
    "text": "What is a no-code approach to control the mandatory or read-only state of a form field?",
    "options": [
      "UI Action",
      "Client Script",
      "UI Script",
      "UI Rule",
      "UI Policy"
    ],
    "correctAnswers": ["UI Policy"],
    "multipleChoice": false
  },
  {
    "id": 107,
    "text": "When moving multiple update sets at one time, what might you do to facilitate the move?",
    "options": [
      "Batch",
      "Verify",
      "Test",
      "Preview"
    ],
    "correctAnswers": ["Batch"],
    "multipleChoice": false
  },
  {
    "id": 108,
    "text": "What is specified in an Access Control rule?",
    "options": [
      "Groups, Conditional Expressions and Workflows",
      "Table Schema, CRUD, and User Authentication",
      "Object and Operation being secured; Permissions required to access the object",
      "security_admin"
    ],
    "correctAnswers": ["Object and Operation being secured; Permissions required to access the object"],
    "multipleChoice": false
  },
  {
    "id": 109,
    "text": "Which icon would you double-click, to expand and collapse the list of all Applications and Modules?",
    "options": [
      "Star",
      "Clock",
      "Application",
      "Funnel"
    ],
    "correctAnswers": ["Application"],
    "multipleChoice": false
  },
  {
    "id": 110,
    "text": "What do you call any component that needs to be managed in order to deliver services?",
    "options": [
      "CSDM Items",
      "CMDB",
      "Configuration item",
      "Service Offerings",
      "Asset"
    ],
    "correctAnswers": ["Configuration item"],
    "multipleChoice": false
  },
  {
    "id": 111,
    "text": "A new service catalog item is being developed, but should only be visible to managers inside the HR Department. What method would you use to fulfill this requirement?",
    "options": [
      "Specify the Dept_Mgr role on the catalog content block",
      "Add the Department Manager group to the catalog item's user criteria",
      "Add the Department Manager group to the catalog item's ACL",
      "Only publish the item in the HR service catalog",
      "Use a Dept_Mgr ACL on the HR service catalog"
    ],
    "correctAnswers": ["Add the Department Manager group to the catalog item's user criteria"],
    "multipleChoice": false
  },
  {
    "id": 112,
    "text": "A user wants to create a set of filter conditions, where they want to show records which satisfy two conditions: Incidents where the state is Closed and Incidents where Assignment Group is Network. After clicking the Funnel icon, what should the user do?",
    "options": [
      "Define the first condition; click AND button; define second condition; click Run",
      "Define the first condition; click AND button; define second condition; press enter",
      "Define the first condition; click OR button; define second condition; press enter",
      "Define the first condition; click > icon on breadcrumb, define second condition; click Run",
      "Define the first condition; click AND button; define second condition; click Run"
    ],
    "correctAnswers": ["Define the first condition; click AND button; define second condition; click Run"],
    "multipleChoice": false
  },
  {
    "id": 113,
    "text": "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that is specific to the Incident table and the Major Incident field?",
    "options": [
      "Incident.Major_Incident",
      "incident=>major_incident",
      "incident<=>major_incident",
      "incident||major_incident",
      "incident.major_incident"
    ],
    "correctAnswers": ["incident.major_incident"],
    "multipleChoice": false
  },
  {
    "id": 114,
    "text": "Two departments (HR Onboarding and Facilities) have come to you, asking for a way for employees to request event room set up services. The requirements are the same for the form and the task routing to the Facilities' assignment group. What do you do, to support these requirements?",
    "options": [
      "Create one Catalog Item for HR Event Room Set Up and one for Facilities Event Room Set Up; then publish each to the appropriate Catalog.",
      "Create one Catalog Item for Event Room Set Up; then publish to both Catalogs.",
      "Create one Catalog Item for Event Room Set Up; then publish to the Parent Catalog, which is accessible to both HR and Facilities.",
      "Create one Catalog Item for Event Room Set Up; then use ACLs to control access."
    ],
    "correctAnswers": ["Create one Catalog Item for Event Room Set Up; then publish to both Catalogs."],
    "multipleChoice": false
  },
  {
    "id": 115,
    "text": "After finishing your work on High Security Settings, what do you do to return to normal admin security levels?",
    "options": [
      "Select Normal role",
      "Log out and back in",
      "Use System Administration > Normal Security module",
      "Select Global Update Set",
      "End Impersonation"
    ],
    "correctAnswers": ["Log out and back in"],
    "multipleChoice": false
  },
  {
    "id": 116,
    "text": "What type of field allows you to look up values from one other table?",
    "options": [
      "Reference",
      "Verity",
      "Options",
      "Selections",
      "Dot walk",
      "Lookup"
    ],
    "correctAnswers": ["Reference"],
    "multipleChoice": false
  },
  {
    "id": 117,
    "text": "Which module would you use to create a new automation of business logic such as approvals, tasks, and notifications?",
    "options": [
      "Process Automation > Flow Designer",
      "Process Automation > Flow Administration",
      "Process Automation > Workflow Editor",
      "Process Automation > Process Flow",
      "Process Automation > Active Flows"
    ],
    "correctAnswers": ["Process Automation > Flow Designer"],
    "multipleChoice": false
  },
  {
    "id": 118,
    "text": "A department manager asks an analyst to build some reports. Where do you recommend the analyst start?",
    "options": [
      "Report Dashboard > Create New",
      "Reports > Getting Started",
      "Performance Analytics > Reports",
      "Self-Service > Reports",
      "Reports > Create New"
    ],
    "correctAnswers": ["Reports > Create New"],
    "multipleChoice": false
  },
  {
    "id": 119,
    "text": "What are the steps for applying an update set to an instance?",
    "options": [
      "Retrieve, Preview, Commit",
      "Specify, Transform, Apply",
      "Retrieve, Assess, Apply",
      "Get, Test, Push",
      "Pull, Review, Push"
    ],
    "correctAnswers": ["Retrieve, Preview, Commit"],
    "multipleChoice": false
  },
  {
    "id": 120,
    "text": "When importing spreadsheet data into ServiceNow, in which step does the data get written to the receiving table?",
    "options": [
      "Run Transform",
      "Run Import",
      "Import Dataset",
      "Execute Transform",
      "Schedule Transform"
    ],
    "correctAnswers": ["Run Transform"],
    "multipleChoice": false
  },
  {
    "id": 121,
    "text": "What would you do, on a list, if you wanted to show the records in groups, based on the column category? (Choose two.)",
    "options": [
      "On list Context Menu, select Group By > Category",
      "On the Filter Menu, select Group By > Category",
      "Click Group On icon, select Category",
      "On Navigator Filter, type tablename.group.category and press enter",
      "On the Category column title, click Context menu > Group By Category"
    ],
    "correctAnswers": ["On the Category column title, click Context menu > Group By Category", "On list Context Menu, select Group By > Category"],
    "multipleChoice": true
  },
  {
    "id": 122,
    "text": "Which collaboration tool is available from the banner, using the bubble icon?",
    "options": [
      "Now Messenger",
      "Agent Chat",
      "Connect Chat",
      "Collaborate Now",
      "Live Feed"
    ],
    "correctAnswers": ["Connect Chat"],
    "multipleChoice": false
  },
  {
    "id": 123,
    "text": "On the knowledge base record, which tab would you use to define which users are not able to write articles to the knowledge base?",
    "options": [
      "Can Contribute",
      "Cannot Author",
      "Cannot Contribute",
      "Cannot Write",
      "Read Only"
    ],
    "correctAnswers": ["Cannot Contribute"],
    "multipleChoice": false
  },
  {
    "id": 124,
    "text": "Which features allow you to update multiple records at one time? (Choose two.)",
    "options": [
      "List Editor",
      "Field Update Action",
      "Bulk Record Update",
      "Data Remediation Dashboard",
      "Update Selected Action"
    ],
    "correctAnswers": ["List Editor", "Update Selected Action"],
    "multipleChoice": true
  },
  {
    "id": 125,
    "text": "Categories in the knowledge base, by default, can be created and edited by which knowledge workers? (Choose two.)",
    "options": [
      "Knowledge Authors",
      "Knowledge Contributors",
      "Knowledge Controller",
      "Knowledge Managers",
      "Knowledge Category Managers",
      "Knowledge Submitters",
      "Knowledge Owners",
      "Knowledge Taxonomy Owner"
    ],
    "correctAnswers": ["Knowledge Managers", "Knowledge Contributors"],
    "multipleChoice": true
  },
  {
    "id": 126,
    "text": "Which collaboration tool opens a sidebar and allows you to create new conversations with other ServiceNow users?",
    "options": [
      "Skype Now",
      "Collaborate Now",
      "Agent Messenger",
      "Agent Chat",
      "Connect Chat"
    ],
    "correctAnswers": ["Connect Chat"],
    "multipleChoice": false
  },
  {
    "id": 127,
    "text": "What module would you use if you wanted to view a list of all of the fields on the Incident table? (Choose two.)",
    "options": [
      "Tables & Columns",
      "Dictionary",
      "Data Class Manager",
      "Dictionary Dashboard",
      "Database View",
      "Schema"
    ],
    "correctAnswers": ["Tables & Columns", "Dictionary"],
    "multipleChoice": true
  },
  {
    "id": 128,
    "text": "What component causes a flow to run after a record has been created or updated?",
    "options": [
      "Date-based trigger",
      "On-change trigger",
      "Record-based trigger",
      "Application-based trigger",
      "Updated-date trigger"
    ],
    "correctAnswers": ["Record-based trigger"],
    "multipleChoice": false
  },
  {
    "id": 129,
    "text": "What type of field is Boolean and appears as a check box?",
    "options": [
      "Yes/No",
      "True/False",
      "On/Off",
      "Binary",
      "0/1"
    ],
    "correctAnswers": ["True/False"],
    "multipleChoice": false
  },
  {
    "id": 130,
    "text": "Which module is used to access the knowledge bases which are available to you?",
    "options": [
      "Knowledge > Home",
      "Self Service > Knowledge",
      "Knowledge > All",
      "Knowledge > Knowledge Bases",
      "Knowledge > Overview"
    ],
    "correctAnswers": ["Self Service > Knowledge"],
    "multipleChoice": false
  },
  {
    "id": 131,
    "text": "A customer requests the following data quality measures be added:\n✑ Incident numbers should be read only, on all lists and forms, for all users.\n✑ Short Description field should be mandatory, on all records, across all applications, on Insert.\nWhich type of policy would you use to meet this requirement?",
    "options": [
      "Data Quality Policy",
      "Dictionary Design Policy",
      "UI Data Policy",
      "UI Policy",
      "Field Criteria Policy",
      "Data Policy"
    ],
    "correctAnswers": ["Data Policy"],
    "multipleChoice": false
  },
  {
    "id": 132,
    "text": "What type of user (persona) has clearly defined paths and workflows in the platform and have one or more roles (ie itil and approver_user)?",
    "options": [
      "Workflow User",
      "Request Fulfiller",
      "ITSM User",
      "Approving Manager",
      "Service Desk User",
      "Process User"
    ],
    "correctAnswers": ["Process User"],
    "multipleChoice": false
  },
  {
    "id": 133,
    "text": "Which module would you use to customize your instances banner image, text and colors?",
    "options": [
      "System UI > UI Pages > Branding",
      "Service Portal > Portals > Branding",
      "System Properties > Basic Configuration UI16",
      "System Properties > Branding",
      "Homepage Admin > Pages > Branding"
    ],
    "correctAnswers": ["System Properties > Basic Configuration UI16"],
    "multipleChoice": false
  },
  {
    "id": 134,
    "text": "Which database provides a logical model of your company infrastructure by identifying, controlling, maintaining and verifying CIs that exist?",
    "options": [
      "IMDB",
      "ITSM",
      "CSDM",
      "CMDB",
      "LDAP"
    ],
    "correctAnswers": ["CMDB"],
    "multipleChoice": false
  },
  {
    "id": 135,
    "text": "Which module is used as the first step for importing data?",
    "options": [
      "Coalesce Data",
      "Transform Data",
      "Import Data",
      "Load Data"
    ],
    "correctAnswers": ["Load Data"],
    "multipleChoice": false
  },
  {
    "id": 136,
    "text": "When you need to orchestrate business processes across services with little technical user knowledge, which utility would you use?",
    "options": [
      "Flow Manager",
      "Flow Designer",
      "Flow Editor",
      "Workflow Editor",
      "Workflow Designer"
    ],
    "correctAnswers": ["Flow Designer"],
    "multipleChoice": false
  },
  {
    "id": 137,
    "text": "When a user reports that they are not able to see modules on the application navigator, what can you do, to see what modules are visible to them?",
    "options": [
      "Look up their password, so you can login with their account",
      "Initiate a Connect Chat session",
      "Install the Bomgar plug-in",
      "Impersonate the user",
      "Launch a NowChat window"
    ],
    "correctAnswers": ["Impersonate the user"],
    "multipleChoice": false
  },
  {
    "id": 138,
    "text": "What is a key difference between Reporting and Performance Analytics?",
    "options": [
      "Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run.",
      "Performance Analytics can show trends; Reports cannot.",
      "Reports can be run on a scheduled basis; Performance Analytics cannot.",
      "Performance Analytics data can be published to Dashboards; Reports cannot.",
      "Performance Analytics shows KPIs; Reporting does not."
    ],
    "correctAnswers": ["Performance Analytics contains snapshots of data taken over time; Reporting shows only the data as it is, at the moment the report is run."],
    "multipleChoice": false
  },
  {
    "id": 139,
    "text": "While showing a customer their incident form, they ask to change the Priority values to display their internal terminology P1, P2, P3, P4. They want it to be consistent across all Tasks. How would you do that?\nRight click on Priority and select what?",
    "options": [
      "Configure Lists",
      "Show Options",
      "Configure Task",
      "Show Choices",
      "Show Choice List",
      "Configure Options"
    ],
    "correctAnswers": ["Show Choice List"],
    "multipleChoice": false
  },
  {
    "id": 140,
    "text": "Your customer would like to create a new template to notify users who are affected by network outages at their site. Which module would you use to create a new notification?",
    "options": [
      "System Notification > Email > Notifications",
      "Administration > Notification Overview",
      "System Properties > Email > Settings",
      "User Preferences > Email > Notifications",
      "Click Gear > Notifications > New"
    ],
    "correctAnswers": ["System Notification > Email > Notifications"],
    "multipleChoice": false
  },
  {
    "id": 141,
    "text": "When designing a flow, how do you reference data from a record, in that flow?",
    "options": [
      "Drag the table icon onto the flow definition",
      "Use the condition builder to specify the desired values",
      "Specify the source table on the data pill related list",
      "Drag the data pill onto the flow definition",
      "Add the table reference using the slush bucket"
    ],
    "correctAnswers": ["Drag the data pill onto the flow definition"],
    "multipleChoice": false
  },
  {
    "id": 142,
    "text": "On the Reports page, what sections allow you to see which reports are visible to different audiences? (Choose four.)",
    "options": [
      "Group",
      "Department",
      "My reports",
      "Team",
      "Dashboards",
      "Global",
      "Admin",
      "Analytics",
      "All",
      "Company"
    ],
    "correctAnswers": ["Group", "My reports", "Global", "All"],
    "multipleChoice": true
  },
  {
    "id": 143,
    "text": "Which tool is used to define relationships between fields in an import set table and a target table?",
    "options": [
      "Transform Schema",
      "Schema Map",
      "Dictionary Map",
      "Transform Map",
      "Field Transformer",
      "Import Designer"
    ],
    "correctAnswers": ["Transform Map"],
    "multipleChoice": false
  },
  {
    "id": 144,
    "text": "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
    "options": [
      "Agent Workspace",
      "Chat bot",
      "Virtual Agent",
      "Knowledge Chat",
      "Now Support"
    ],
    "correctAnswers": ["Virtual Agent"],
    "multipleChoice": false
  },
  {
    "id": 145,
    "text": "Which feature allows you to automate business logic for a particular application or process such as approvals, tasks notifications, and record operations?",
    "options": [
      "Flows",
      "Action Sequences",
      "Action Sets",
      "Task Flows",
      "Flow Diagrams"
    ],
    "correctAnswers": ["Flows"],
    "multipleChoice": false
  },
  {
    "id": 146,
    "text": "From a form, what would you click to add additional fields to the form? (Choose two.)",
    "options": [
      "Context Menu > Form > Layout",
      "Context Menu > Configure > Form Layout",
      "Context Menu > Configure > Form Design",
      "Right click on header > Add > Field",
      "Context Menu > Form > Designer",
      "Right click on header > Configure > UX Dashboard"
    ],
    "correctAnswers": ["Context Menu > Configure > Form Layout", "Context Menu > Configure > Form Design"],
    "multipleChoice": true
  },
  {
    "id": 147,
    "text": "What is the name of the table relationship, where two or more tables are related in a bi-directional relationship, so that the related records are visible from both tables in a related list?",
    "options": [
      "Database View",
      "Many to Many",
      "One to Many",
      "Extended"
    ],
    "correctAnswers": ["Many to Many"],
    "multipleChoice": false
  },
  {
    "id": 148,
    "text": "On a Form header, what is the three bar icon called?",
    "options": [
      "Pancake icon",
      "Additional Actions or Context Menu",
      "Hamburger icon",
      "Cake icon"
    ],
    "correctAnswers": ["Additional Actions or Context Menu"],
    "multipleChoice": false
  },
  {
    "id": 149,
    "text": "Group records are stored in which table?",
    "options": [
      "Group [sn_user_group]",
      "Group [sys_user_group]",
      "Group [s_sys_group]",
      "Group [u_sys_group]"
    ],
    "correctAnswers": ["Group [sys_user_group]"],
    "multipleChoice": false
  },
  {
    "id": 150,
    "text": "What function do you use to add buttons, links, and context menu items on forms and lists?",
    "options": [
      "UI Policies",
      "UI Settings",
      "UI Actions",
      "UI Config"
    ],
    "correctAnswers": ["UI Actions"],
    "multipleChoice": false
  },
  {
    "id": 151,
    "text": "On a Business Rule, the When setting determines at what point the rule executes. What are the options for specifying that timing?",
    "options": [
      "Before, After, Async, Display",
      "Prior to, Synchronous, on Update",
      "Insert, Update, Delete, Query",
      "Before, Synchronous, Scheduled Job, View"
    ],
    "correctAnswers": ["Before, After, Async, Display"],
    "multipleChoice": false
  },
  {
    "id": 152,
    "text": "What are different types of Data Sources, which may be imported into ServiceNow? (Choose four.)",
    "options": [
      "Local Sources (i.e. XML, CSV, Excel)",
      "Implementation Spoke",
      "DataHub",
      "JDBC Connection",
      "Network Server",
      "LDAP Connection"
    ],
    "correctAnswers": ["Local Sources (i.e. XML, CSV, Excel)", "JDBC Connection", "Network Server", "LDAP Connection"],
    "multipleChoice": true
  },
  {
    "id": 153,
    "text": "What are the components that make up a filter condition? (Choose three.)",
    "options": [
      "Operator",
      "Match Criteria",
      "Value",
      "Column",
      "Field"
    ],
    "correctAnswers": ["Operator", "Value", "Field"],
    "multipleChoice": true
  },
  {
    "id": 154,
    "text": "When impersonating a user for testing purposes, what is the best way to return the instance, logged in with your user account?",
    "options": [
      "Turn your computer off and on again",
      "Clear browser cache",
      "End Impersonation",
      "Log out and back in"
    ],
    "correctAnswers": ["End Impersonation"],
    "multipleChoice": false
  },
  {
    "id": 155,
    "text": "What controls the publishing and retiring process for knowledge articles?",
    "options": [
      "Approval Policies",
      "Approval Definitions",
      "Workflow Designer",
      "Workflows",
      "State Lifecycle"
    ],
    "correctAnswers": ["Workflows"],
    "multipleChoice": false
  },
  {
    "id": 156,
    "text": "What type of query allows you to filter list data using normal words, instead of the condition builder?",
    "options": [
      "Natural Language Query",
      "Alexa Query",
      "Machine Learning Query",
      "Predictive Intelligence Query",
      "Auto-suggest Query"
    ],
    "correctAnswers": ["Natural Language Query"],
    "multipleChoice": false
  },
  {
    "id": 157,
    "text": "Tables may have a One to Many relationships. From the Service Catalog, what are examples of tables having a one to many relationships? (Choose three.)",
    "options": [
      "One Approval can have many Requests",
      "One Request can have many Requested Items",
      "One Requested Item can have many Approvals",
      "One Requested Item can have many Catalog Tasks",
      "One Cart can have many Requests"
    ],
    "correctAnswers": ["One Request can have many Requested Items", "One Requested Item can have many Approvals", "One Requested Item can have many Catalog Tasks"],
    "multipleChoice": true
  },
  {
    "id": 158,
    "text": "On a filter condition, which component is always a choice list?",
    "options": [
      "Operator",
      "Filter Criteria",
      "Operation",
      "Match Criteria"
    ],
    "correctAnswers": ["Operator"],
    "multipleChoice": false
  },
  {
    "id": 159,
    "text": "A Role is defined as what?",
    "options": [
      "A collection of permissions",
      "A set of user access policies",
      "A Persona in a workflow",
      "A set of access control rules"
    ],
    "correctAnswers": ["A collection of permissions"],
    "multipleChoice": false
  },
  {
    "id": 160,
    "text": "A user is complaining that they are seeing a blank page, when they click Create New, from your custom Inventory application. You have confirmed that they can see the Inventory application, and the Create New module on the application navigator. What could be the cause of this issue?",
    "options": [
      "Create New module has a broken link",
      "Known intermittent issue with UI15",
      "User should be using Chrome instead of Explorer for their browser",
      "User has read role, but not the write role on the Inventory table",
      "User session has timed out"
    ],
    "correctAnswers": ["User has read role, but not the write role on the Inventory table"],
    "multipleChoice": false
  },
  {
    "id": 161,
    "text": "What resource can you use to view details of the tables and configuration items (CIs) associated with a particular use case?",
    "options": [
      "Scenario Dashboard",
      "CI Use Case Modeler",
      "CMDB Use Case Modeler",
      "Common Service Data Model (CSDM) product view"
    ],
    "correctAnswers": ["Common Service Data Model (CSDM) product view"],
    "multipleChoice": false
  },
  {
    "id": 162,
    "text": "A manager wants to view a snapshot of month-end Sales performance data, as compared to Sales targets. In addition, the manager wants to be able to see those monthly numbers trended over time, and forecasted into the future. What capability do you suggest for this manager?",
    "options": [
      "Scheduled Reports, a custom snapshot table, and a Trend report",
      "Scheduled Reports and Excel",
      "Scheduled Reports, a custom snapshot table, and a Projection report",
      "Performance Analytics",
      "Key Performance Indicators"
    ],
    "correctAnswers": ["Performance Analytics"],
    "multipleChoice": false
  },
  {
    "id": 163,
    "text": "What are advantages of using Flow Designer? (Choose three.)",
    "options": [
      "Supports advanced developers",
      "Enables complicated scripting",
      "Reduces technical debt",
      "Less manual scripting",
      "Smooth integration with 3rd party systems"
    ],
    "correctAnswers": ["Reduces technical debt", "Less manual scripting", "Smooth integration with 3rd party systems"],
    "multipleChoice": true
  },
  {
    "id": 164,
    "text": "Your customer requires that they be able to monitor which users are performing impersonations in their instance. What would you do to meet that requirement?",
    "options": [
      "Add the role Log Write [sn_log_write] to the Impersonator Group",
      "Create user update set for impersonation tracking",
      "Activate the glide.sys.log_impersonation prop",
      "From User icon, select Elevate Roles",
      "On the Impersonator role record, right click and select Create Log"
    ],
    "correctAnswers": ["Activate the glide.sys.log_impersonation prop"],
    "multipleChoice": false
  },
  {
    "id": 165,
    "text": "When a flow runs an action, it generates a runtime value, which stays the same for the duration of the flow. What is the name of this runtime value?",
    "options": [
      "Trigger runtime value",
      "Sequence runtime value",
      "Starting runtime value",
      "Data pill runtime value",
      "Input runtime value"
    ],
    "correctAnswers": ["Data pill runtime value"],
    "multipleChoice": false
  },
  {
    "id": 166,
    "text": "The wait time for end users is based on the round-trip between the client and the server. What activities are included in the round-trips?",
    "options": [
      "Request + Response",
      "Save + Update",
      "Write + Read",
      "Submit + Query",
      "Insert + Verify"
    ],
    "correctAnswers": ["Request + Response"],
    "multipleChoice": false
  },
  {
    "id": 167,
    "text": "When importing data, what happens to imported rows, if no coalesce field is specified?",
    "options": [
      "All rows are rejected from the import, as coalesce field is required.",
      "All rows are treated as new records. No existing records are updated.",
      "Duplicate rows are rejected from the import.",
      "All rows are treated as new records, but errors will be flagged in the import log."
    ],
    "correctAnswers": ["All rows are treated as new records. No existing records are updated."],
    "multipleChoice": false
  },
  {
    "id": 168,
    "text": "What is the most common role that has access to almost all platform features, functions, and data?",
    "options": [
      "Security Admin [security_admin]",
      "Sys Admin [sys_admin]",
      "Admin [sn_admin]",
      "System Administrator [admin]",
      "Base Admin [base_admin]"
    ],
    "correctAnswers": ["System Administrator [admin]"],
    "multipleChoice": false
  },
  {
    "id": 169,
    "text": "What feature do you use to specify which users are able to access a Service Catalog Item?",
    "options": [
      "Can Read Role",
      "Catalog User Role",
      "Can Order Tab",
      "User Criteria"
    ],
    "correctAnswers": ["User Criteria"],
    "multipleChoice": false
  },
  {
    "id": 170,
    "text": "Which component of a table contains a piece of data for one record?",
    "options": [
      "Factor",
      "Field",
      "Datapoint",
      "Element",
      "Item"
    ],
    "correctAnswers": ["Field"],
    "multipleChoice": false
  },
  {
    "id": 171,
    "text": "What type of field has a drop down list, from which you can pick from pre-defined options?",
    "options": [
      "Choice",
      "Picker",
      "Drop down",
      "Option"
    ],
    "correctAnswers": ["Choice"],
    "multipleChoice": false
  },
  {
    "id": 172,
    "text": "User records are stored in which table?",
    "options": [
      "User [sys_user]",
      "User [sn_user]",
      "User [u_sys_user]",
      "User [s_user]"
    ],
    "correctAnswers": ["User [sys_user]"],
    "multipleChoice": false
  },
  {
    "id": 173,
    "text": "What ServiceNow feature can be triggered by events, and is used to inform users about activities or updates in ServiceNow?",
    "options": [
      "Notifications",
      "Alerts",
      "Texts",
      "Events",
      "Emails"
    ],
    "correctAnswers": ["Notifications"],
    "multipleChoice": false
  },
  {
    "id": 174,
    "text": "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    "options": [
      "Agent Assist",
      "Virtual Agent",
      "Now Messenger",
      "Connect Agent"
    ],
    "correctAnswers": ["Virtual Agent"],
    "multipleChoice": false
  },
  {
    "id": 175,
    "text": "Which role can manage multiple knowledge bases?",
    "options": [
      "knowledge_base_admin",
      "kb_admin",
      "sn_kb_admin",
      "knowledge_admin"
    ],
    "correctAnswers": ["knowledge_admin"],
    "multipleChoice": false
  },
  {
    "id": 176,
    "text": "Which statement correctly describes the differences between a Client Script and a Business Rule?",
    "options": [
      "A Client Script executes before a record is loaded and a Business Rule executes after a record is loaded",
      "A Client Script executes on the server and a Business Rule executes on the client",
      "A Client Script executes on the client and a Business Rule executes on the server",
      "A Client Script executes before a record is loaded and a Business Rule executes after a record is updated"
    ],
    "correctAnswers": ["A Client Script executes on the client and a Business Rule executes on the server"],
    "multipleChoice": false
  },
  {
    "id": 177,
    "text": "What are benefits of assigning work tasks to a group, rather than to an individual? (Choose four.)",
    "options": [
      "Group members can choose their tasks from My Groups Work",
      "Groups can assign tasks to users based on on-call schedules",
      "Site support members can pick tasks, based on Location",
      "Groups can assign tasks to users based on skills",
      "Group members can avoid tasks, which are nearing SLA breach",
      "Groups can assign tasks to users based on availability"
    ],
    "correctAnswers": ["Group members can choose their tasks from My Groups Work", "Groups can assign tasks to users based on on-call schedules", "Groups can assign tasks to users based on skills", "Groups can assign tasks to users based on availability"],
    "multipleChoice": true
  },
  {
    "id": 178,
    "text": "What ServiceNow feature allows you to include data from a secondary related table on a report?",
    "options": [
      "SQL",
      "Dot Walking",
      "Outer Join",
      "Joins"
    ],
    "correctAnswers": ["Dot Walking"],
    "multipleChoice": false
  },
  {
    "id": 179,
    "text": "What attributes can you manage, using System Properties > Basic Configuration UI16? (Choose five.)",
    "options": [
      "Browser tab title",
      "Module text color",
      "Preferred browser",
      "Base theme",
      "Font style",
      "Animation style",
      "Header background color",
      "Banner Image"
    ],
    "correctAnswers": ["Browser tab title", "Module text color", "Base theme", "Header background color", "Banner Image"],
    "multipleChoice": true
  },
  {
    "id": 180,
    "text": "Which field (or fields) is used as a unique key during imports?",
    "options": [
      "Match Fields",
      "Coalesce Fields",
      "Key Fields",
      "Sys IDs"
    ],
    "correctAnswers": ["Coalesce Fields"],
    "multipleChoice": false
  },
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
  {
    "id": 241,
    "text": "On a form, which type of field has this icon which can be clicked, to see a preview of the associated record?",
    "options": ["List Choice", "Lookup field", "Reference field", "Choice List"],
    "correctAnswers": ["Reference field"],
    "multipleChoice": false
  },
  {
    "id": 242,
    "text": "While on an Incident record, how would you add a Tag for 'Special Handling' to the record?",
    "options": ["Click the Add Tag button and enter Special Handling", "Select the Tag icon in the header and add the Tag", "Use the Context Menu, select Add Tag", "Create a New Tag option"],
    "correctAnswers": ["Select the Tag icon in the header and add the Tag"],
    "multipleChoice": false
  },
{
    "id": 243,
    "text": "What feature allows you to limit who is able to contribute or read knowledge within a knowledge base?",
    "options": ["Roles", "Groups", "User Criteria", "Categories"],
    "correctAnswers": ["User Criteria"],
    "multipleChoice": false
}
,
  {
    "id": 244,
    "text": "What are advantages of using Flow Designer?",
    "options": ["The homepage must be shared manually after moving", "The homepage layout will not appear on target instance", "The dashboard cannot be copied; it must be recreated", "Data sources are automatically migrated with the homepage"],
    "correctAnswers": ["The homepage must be shared manually after moving"],
    "multipleChoice": false
  },
  {
    "id": 245,
    "text": "What is the platform name for the Group table?",
    "options": ["User Groups", "Configuration Items", "Sys User Group", "Application Group"],
    "correctAnswers": ["Sys User Group"],
    "multipleChoice": false
  },
  {
    "id": 246,
    "text": "Many actions are included with flow designer, what are some frequently used core actions? (Choose four.)",
    "options": ["Record Create", "Create or update record", "Task Create", "HTTP Request", "Data Transformation"],
    "correctAnswers": ["Create or update record", "Task Create", "HTTP Request", "Data Transformation"],
    "multipleChoice": true
  },
  {
    "id": 247,
    "text": "What role enables someone to authorize a request, with no other permissions on the platform?",
    "options": ["Requester", "Approver", "ITIL", "Request Manager"],
    "correctAnswers": ["Approver"],
    "multipleChoice": false
  },
  {
    "id": 248,
    "text": "On the knowledge base record, which tab would you use to define which users are not able to write articles to the knowledge base?",
    "options": ["Can Contribute", "Cannot Author", "Can Read", "Can Write", "Can Author"],
    "correctAnswers": ["Can Contribute"],
    "multipleChoice": false
  },
  {
    "id": 249,
    "text": "What types of entities can receive task assignments, in ServiceNow? (Choose two.)",
    "options": ["Users", "Groups", "Teams", "Roles"],
    "correctAnswers": ["Users", "Groups"],
    "multipleChoice": true
  },
  {
    "id": 250,
    "text": "The Report Designer contains different sections for configuring your report. Which section is used to adjust the look of your report, including colors, titles and legend layout?",
    "options": ["Data", "Group by", "Configure", "Style"],
    "correctAnswers": ["Style"],
    "multipleChoice": false
  },
  {
    "id": 251,
    "text": "How would you distinguish between a Base Class table and a Parent Class table?",
    "options": ["Extended tables are always extended from Parent tables. Extended tables are usually extended from Base tables.", "Extended tables can be extended from Parent tables or Base tables; but they cannot be extended from both.", "Base Class tables always have tables extended from them. Parent tables do not have tables extended from them.", "Base Class table is not extended from another table, Parent class tables may be extended from another table."],
    "correctAnswers": ["Base Class table is not extended from another table, Parent class tables may be extended from another table."],
    "multipleChoice": false
  },
  {
    "id": 252,
    "text": "When a custom table is created, which access control rules are automatically created?",
    "options": ["create", "delete", "execute", "update", "read", "write"],
    "correctAnswers": ["create", "delete", "read", "write"],
    "multipleChoice": true
  },
  {
    "id": 253,
    "text": "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
    "options": ["Magnifier", "Q mark", "Gear", "Chat bubbles"],
    "correctAnswers": ["Gear"],
    "multipleChoice": false
  },
  {
    "id": 254,
    "text": "Which banner icon do you use to change your personal system settings, like your instance color scheme?",
    "options": ["Magnifier", "Q mark", "Gear", "Chat bubbles"],
    "correctAnswers": ["Gear"],
    "multipleChoice": false
  },
  {
    "id": 255,
    "text": "When building an extended table from a base table, which fields do you need to create?",
    "options": ["The fields that are not in the base table.", "The mandatory fields for the base table.", "The fields that are specific to the extended table.", "The reference fields for the base table."],
    "correctAnswers": ["The fields that are not in the base table.", "The fields that are specific to the extended table."],
    "multipleChoice": true
  },
  {
    "id": 256,
    "text": "While showing a customer their Incident form, they ask to change the Priority field title to display their internal terminology PValue. How would you do that?",
    "options": ["Right click on Priority and select Configure Label", "Right click on Priority and select Configure Dictionary", "Right click on Priority and select Configure Display Settings", "Right click on Priority and select Configure Column"],
    "correctAnswers": ["Right click on Priority and select Configure Label", "Right click on Priority and select Configure Dictionary"],
    "multipleChoice": true
  },
  {
    "id": 257,
    "text": "As administrator, what must you do to access features of High Security Settings?",
    "options": ["Impersonate Security Admin", "Select Elevate Roles", "Add security_admin role to your user account", "Use System Administration > Elevate Roles module"],
    "correctAnswers": ["Select Elevate Roles"],
    "multipleChoice": false
  },
  {
    "id": 258,
    "text": "What section on the notes tab, shows the history of the work documented on the record?",
    "options": ["Audit Log", "Timeline", "Journal", "Diary", "Activity"],
    "correctAnswers": ["Activity"],
    "multipleChoice": false
  },
  {
    "id": 259,
    "text": "How would you navigate to the Schema map for a table?",
    "options": ["System Definition > Tables; Select Table; Go to Related links and click Show Schema Map", "System Dictionary > Show Schema Map; Select Table", "System Definition > Show Schema Map; Select Table", "System Definition > Dictionary; Select Table; Go to Related links and click Show Schema Map"],
    "correctAnswers": ["System Definition > Tables; Select Table; Go to Related links and click Show Schema Map"],
    "multipleChoice": false
  },
  {
    "id": 260,
    "text": "Which is the base table of the configuration management database hierarchy?",
    "options": ["cmdb_ci", "cmdb", "cmdb_rel_ci", "ucmdb"],
    "correctAnswers": ["cmdb"],
    "multipleChoice": false
  },
  {
    "id": 261,
    "text": "Which best describes a field in a ServiceNow table?",
    "options": [
      "A field is a table row.",
      "A field is an item that appears in a menu list.",
      "A field is a table cell that stores data.",
      "A field is a record in a table."
    ],
    "correctAnswers": ["A field is a table cell that stores data."],
    "multipleChoice": false
  },
  {
    "id": 262,
    "text": "What are examples of UI Actions relating to forms? (Choose three.)",
    "options": [
      "Form Columns",
      "Form View",
      "Form Buttons",
      "Form Context Menu",
      "Form Links"
    ],
    "correctAnswers": ["Form Buttons", "Form Context Menu", "Form Links"],
    "multipleChoice": true
  },
  {
    "id": 263,
    "text": "Here is an example of the criteria set for a knowledge base:\n• Companies: ACME North America\n• Departments: HR\n• Groups: ACME Managers\n• Match All: Yes\nIn this example, what users would have access to this knowledge base?",
    "options": [
      "Members of the ACME Manager group, who are also members of HR Department and part of ACME North America",
      "Employees of ACME North America, who are members of HR Department or the ACME Managers group",
      "Users which are members of either ACME North America, or HR Department, or ACME Managers group",
      "Members of the ACME Managers group, and HR department, regardless of geography"
    ],
    "correctAnswers": ["Members of the ACME Manager group, who are also members of HR Department and part of ACME North America"],
    "multipleChoice": false
  },
  {
    "id": 264,
    "text": "In Flow Designer, where is the data from an action stored so it can be used in subsequent actions in the flow?",
    "options": [
      "Data Pill",
      "Data Element",
      "Data Trigger",
      "Field Value",
      "Field Icon"
    ],
    "correctAnswers": ["Data Pill"],
    "multipleChoice": false
  },
  {
    "id": 265,
    "text": "A customer has asked for the following updates to a form:\n• Make Resolution code Mandatory, when state is changed to Resolved\n• Hide Major Incident check box, unless logged in user has Major Incident Manager role\nWhat type of rule(s) would you use to implement this requirement?",
    "options": [
      "Form Constraint",
      "UI Design",
      "Field Limiter",
      "UI Policy",
      "Dictionary Design"
    ],
    "correctAnswers": ["UI Policy"],
    "multipleChoice": false
  },
  {
    "id": 266,
    "text": "What setting allows users to view a Knowledge Base article even if they are not logged in?",
    "options": [
      "The Public setting",
      "The View All setting",
      "The ESS role",
      "The Allow All role"
    ],
    "correctAnswers": ["The Public setting"],
    "multipleChoice": false
  },
  {
    "id": 267,
    "text": "When adding a related list to a form, you choose the related list from the list collector. What is an example of a related list you might see on the list collector? (Choose three.)",
    "options": [
      "Problem==Parent",
      "HR Case->Parent",
      "Catalog Task->Parent",
      "Outage->Task number",
      "Release Phase==Parent"
    ],
    "correctAnswers": ["HR Case->Parent", "Catalog Task->Parent", "Outage->Task number"],
    "multipleChoice": true
  },
  {
    "id": 268,
    "text": "How is the ServiceNow platform set up so that Administrators can easily configure their instances to send an email at the end of an upgrade?",
    "options": [
      "Administrators can update the email notification named \"System Upgraded\" in the System Logs module by adding the appropriate User to receive it.",
      "Administrators can update the email notification named \"System Upgraded\" in the Notifications module by adding the appropriate User to receive it.",
      "Administrators can write a Client Script to send out an email to the Administrator when an Update is complete.",
      "Administrators can write a Business Rule to send out an email to the Administrator when an Update is complete."
    ],
    "correctAnswers": ["Administrators can update the email notification named \"System Upgraded\" in the Notifications module by adding the appropriate User to receive it."],
    "multipleChoice": false
  },
  {
    "id": 269,
    "text": "A customer wants to be able to identify and track components of their infrastructure that support their eCommerce service. What ServiceNow products could support this requirement? (Choose three.)",
    "options": [
      "Asset Management",
      "Discovery",
      "Configuration Management (CMDB)",
      "Service Mapping",
      "Performance Analytics"
    ],
    "correctAnswers": ["Discovery", "Configuration Management (CMDB)", "Service Mapping"],
    "multipleChoice": true
  },
  {
    "id": 270,
    "text": "For your implementation, the following tables are extended from each other:\n• Incident table is extended from Task table.\n• Super Incident table is extended from Incident table.\nIn this situation, which table(s) are Parent, Child and Base tables? (Choose five.)",
    "options": [
      "Super Incident table is a Parent table",
      "Incident table is a Child table",
      "Super Incident table is a Base table",
      "Incident table is a Base table",
      "Task table is a Child table",
      "Incident table is a Parent table",
      "Super Incident table is a Child table",
      "Task table is a Parent table",
      "Task table is a Base table"
    ],
    "correctAnswers": ["Incident table is a Child table", "Incident table is a Parent table", "Super Incident table is a Child table", "Task table is a Parent table", "Task table is a Base table"],
    "multipleChoice": true
  },
  {
    "id": 271,
    "text": "What capability allows users to create dashboards with widgets to visualize data over time in order to identify areas of improvement?",
    "options": [
      "Scheduled Reports",
      "Performance Analytics",
      "Analytics Reports",
      "Reporting"
    ],
    "correctAnswers": ["Performance Analytics"],
    "multipleChoice": false
  },
  {
    "id": 272,
    "text": "Which type of ServiceNow script runs on the web browser?",
    "options": [
      "Server script",
      "Database script",
      "Client script",
      "Local script"
    ],
    "correctAnswers": ["Client script"],
    "multipleChoice": false
  },
  {
    "id": 273,
    "text": "When selecting the Target table for an import, which tables can you select? (Choose three.)",
    "options": [
      "Tables outside of ServiceNow",
      "Tables within the global scope",
      "Related tables, using Dot Walk",
      "Tables which allow write access to other applications",
      "Tables within the existing application scope"
    ],
    "correctAnswers": ["Tables within the global scope", "Tables which allow write access to other applications", "Tables within the existing application scope"],
    "multipleChoice": true
  },
  {
    "id": 274,
    "text": "On Access Control Definitions, what are ways you can set the permissions on a Table? (Choose three.)",
    "options": [
      "Conditional Expressions",
      "Roles",
      "CRUD",
      "Script that sets the answer variable to true or false",
      "Groups"
    ],
    "correctAnswers": ["Conditional Expressions", "Roles", "Script that sets the answer variable to true or false"],
    "multipleChoice": true
  },
  {
    "id": 275,
    "text": "What tool is used to import data from various data sources, and map that data into ServiceNow tables?",
    "options": [
      "Transform Set",
      "Data Pack",
      "Update Set",
      "Import Set"
    ],
    "correctAnswers": ["Import Set"],
    "multipleChoice": false
  },
  {
    "id": 276,
    "text": "When you set a policy that is applied to all data entered into the platform (UI, Import Sets, or Web Services), where does this policy run by default?",
    "options": [
      "Client",
      "Network",
      "Browser",
      "Server"
    ],
    "correctAnswers": ["Server"],
    "multipleChoice": false
  },
  {
    "id": 277,
    "text": "On what part of the ServiceNow instance, would you find the option to Impersonate User?",
    "options": [
      "User Menu",
      "Content Frame",
      "Application Navigator",
      "Module"
    ],
    "correctAnswers": ["User Menu"],
    "multipleChoice": false
  },
  {
    "id": 278,
    "text": "How would you describe the relationship between the Incident and Task table?",
    "options": [
      "Incident table has a one to many relationship with the Task table",
      "Incident table is extended from Task table",
      "Incident table is related to the Task table via the INC number",
      "Incident table has a many to many relationship with the Task table",
      "Incident table is a database view of the Task table"
    ],
    "correctAnswers": ["Incident table is extended from Task table"],
    "multipleChoice": false
  },
  {
    "id": 279,
    "text": "Which flow components allow you to specify when a flow should be run?",
    "options": [
      "Trigger and Condition Pill",
      "Condition and Table",
      "Trigger Criteria and Clock",
      "Trigger and Condition",
      "Scope and Trigger Condition"
    ],
    "correctAnswers": ["Trigger and Condition"],
    "multipleChoice": false
  },
  {
    "id": 280,
    "text": "Which feature helps to automatically allocate a critical, high-priority, service request to the appropriate assignment group or team member?",
    "options": [
      "Assignment Rule",
      "User Policy",
      "Predictive Intelligence",
      "UI Policy"
    ],
    "correctAnswers": ["Assignment Rule"],
    "multipleChoice": false
  },
  {
    "id": 281,
    "text": "The Report Designer contains different sections for configuring your report. Which section is used to specify the name of the report, and the table or data source for the report?",
    "options": [
      "Type",
      "Properties",
      "Configure",
      "Sources",
      "Data"
    ],
    "correctAnswers": ["Data"],
    "multipleChoice": false
  },
  {
    "id": 282,
    "text": "You are editing a new incident record and would like the 'Save' button to be located on the Form header. Which action would need to be taken for that button to appear?",
    "options": [
      "Context Menu > Form Design > add the 'Save' button.",
      "All > System Properties > UI Properties > Turn on the 'glide.ui.advanced' property.",
      "All > System Properties > UI Properties > Turn on the 'Save' button.",
      "Context Menu > Form Layout > add the 'Save' button."
    ],
    "correctAnswers": ["All > System Properties > UI Properties > Turn on the 'Save' button."],
    "multipleChoice": false
  },
  {
    "id": 283,
    "text": "Which feature ensures data consistency while importing data using import sets and web services?",
    "options": [
      "UI Policy",
      "Data Policy",
      "Business Rule",
      "Client Script",
      "CSDM"
    ],
    "correctAnswers": ["Data Policy"],
    "multipleChoice": false
  },
  {
    "id": 284,
    "text": "When using Flow Designer, what is the Flow Execution initiated by?",
    "options": [
      "A flow logic",
      "An existing subflow",
      "An execution data pill",
      "A trigger"
    ],
    "correctAnswers": ["A trigger"],
    "multipleChoice": false
  },
  {
    "id": 285,
    "text": "What is the name of the string that displays filter criteria?",
    "options": [
      "Breadcrumb",
      "Choice",
      "Menu",
      "Topic"
    ],
    "correctAnswers": ["Breadcrumb"],
    "multipleChoice": false
  },
  {
    "id": 286,
    "text": "Which system property is added and set to true in order to see impersonation events in the System Log?",
    "options": [
      "glide.sys.all_impersonation",
      "glide.user_setting",
      "glide.impersonation_setting",
      "glide.sys.log_impersonation",
      "glide.sys.admin_login"
    ],
    "correctAnswers": ["glide.sys.log_impersonation"],
    "multipleChoice": false
  },
  {
    "id": 287,
    "text": "What process allows users to create, categorize, review, approve and browse important information in a centralized location that is shared by the entire organization?",
    "options": [
      "Self Service Management",
      "Knowledge Management",
      "Business Information Management",
      "Information Portal Management",
      "Knowledge-Centered Management"
    ],
    "correctAnswers": ["Knowledge Management"],
    "multipleChoice": false
  },
  {
    "id": 288,
    "text": "A colleague wants to rearrange the columns on their My Work List. Once the user has navigated to the list, where should they navigate to select and arrange the columns?",
    "options": [
      "Right click on any column header, Context Menu > Configure > List Layout",
      "Click List Context Menu > Configure > List Layout",
      "Click List Context Menu > Personalize List",
      "Click Personalize List"
    ],
    "correctAnswers": ["Click Personalize List"],
    "multipleChoice": false
  },
  {
    "id": 289,
    "text": "You are looking at a list of Active Incidents. You want to exclude Incidents with the state of Resolved. How might you do that?",
    "options": [
      "On Search, select State, type not Resolved, press enter",
      "On State column title, right-click, select Filter Out > Resolved",
      "On the list of records, locate and right-click on the Resolved value, select Filter Out",
      "On the list of records, locate and right-click on the Resolved value, select Exclude",
      "Click Funnel icon, click AND, Select Resolved, is Not, State, click Run"
    ],
    "correctAnswers": ["On the list of records, locate and right-click on the Resolved value, select Filter Out"],
    "multipleChoice": false
  },
  {
    "id": 290,
    "text": "Roles can inherit permissions from other roles. Which role inherits all of the permissions of the catalog role, and the user_criteria_admin role, plus has permissions to create Items and Services?",
    "options": [
      "Sys Admin [sys_admin]",
      "Catalog Admin [catalog_admin]",
      "Catalog Author [sn_catalog_write]",
      "Item Admin [sn_item_admin]"
    ],
    "correctAnswers": ["Catalog Admin [catalog_admin]"],
    "multipleChoice": false
  },

  {
    "id": 291,
    "text": "What component of the ServiceNow infrastructure defines every table and field in the system?",
    "options": [
      "Schema",
      "Field Map",
      "Table Class Manager",
      "Dictionary",
      "Data Atlas"
    ],
    "correctAnswers": ["Dictionary"],
    "multipleChoice": false
  },
  {
    "id": 292,
    "text": "Which data consistency settings can be achieved using UI Policy? (Choose three.)",
    "options": [
      "Setting fields to accept the data in an expected format",
      "Setting fields to accept the data with ‘n’ number of characters",
      "Setting fields hidden",
      "Settings fields read-only",
      "Setting fields mandatory"
    ],
    "correctAnswers": ["Setting fields hidden", "Settings fields read-only", "Setting fields mandatory"],
    "multipleChoice": true
  },
  {
    "id": 293,
    "text": "A customer wants to use a client script to validate things on a form in order to make sure the submission makes sense. What type of client script would you recommend to meet this requirement?",
    "options": [
      "onSubmit()",
      "onSubmission()",
      "onUpdate()",
      "onLoad()"
    ],
    "correctAnswers": ["onSubmit()"],
    "multipleChoice": false
  },
  {
    "id": 294,
    "text": "An order from the Service Catalog has been placed. Two records in the Platform are created as a result. Which two records are associated with this newly ordered item? (Choose two.)",
    "options": [
      "A record of sc_req_item table",
      "A record of sc_task",
      "An incident record",
      "A change record",
      "A problem record"
    ],
    "correctAnswers": ["A record of sc_req_item table", "A record of sc_task"],
    "multipleChoice": true
  },
  {
    "id": 295,
    "text": "What action will allow you to personalize layouts of columns in a list?",
    "options": [
      "Context Menu > View > Personalize",
      "Click Gear Icon > Personalize window options > Select the appropriate columns",
      "Select the column to be personalized and right at the header > Choose the options to personalize",
      "Select the column to be personalized > Click Edit icon (Pencil) > Choose the options to personalize"
    ],
    "correctAnswers": ["Click Gear Icon > Personalize window options > Select the appropriate columns"],
    "multipleChoice": false
  },
  {
    "id": 296,
    "text": "An order for new office equipment has been placed through the Service Catalog. How would you view the lists of requests after the orders have been placed?",
    "options": [
      "All > Tables and Columns > Tasks",
      "In the Navigation Filter, type 'requests.list' and press the Enter key",
      "All > Service Catalog > Requests",
      "All > Service Catalog > Open Records > Items"
    ],
    "correctAnswers": ["All > Service Catalog > Open Records > Items"],
    "multipleChoice": false
  },
  {
    "id": 297,
    "text": "Which path would you take to access the table configuration page from a form?",
    "options": [
      "The Form Context menu > View > Show Table",
      "The Form Context menu > View > Table",
      "The Form Context menu > Configure > Dictionary",
      "The Form Context menu > Configure > Table"
    ],
    "correctAnswers": ["The Form Context menu > Configure > Table"],
    "multipleChoice": false
  },
  {
    "id": 298,
    "text": "Which admin role is required to make changes to High Security Settings?",
    "options": [
      "high_sec_admin",
      "sn_acl_admin",
      "admin",
      "security_admin"
    ],
    "correctAnswers": ["security_admin"],
    "multipleChoice": false
  },
  {
    "id": 299,
    "text": "What is the most common role that has access to almost all platform features, functions, and data?",
    "options": [
      "Super User [sn_super_user]",
      "Security Admin [security_admin]",
      "System Administrator [admin]",
      "Base Admin [base_admin]",
      "System Manager [sys_manager]"
    ],
    "correctAnswers": ["System Administrator [admin]"],
    "multipleChoice": false
  },
  {
    "id": 300,
    "text": "When moving multiple update sets at one time, what might you do to facilitate the move?",
    "options": [
      "Preview",
      "Batch",
      "List",
      "Map"
    ],
    "correctAnswers": ["Batch"],
    "multipleChoice": false
  },
  {
    "id": 301,
    "text": "What do you click when you have made modifications to your report, and you want to see the results without saving?",
    "options": [
      "Preview",
      "Test",
      "Run",
      "Try It",
      "Execute"
    ],
    "correctAnswers": ["Run"],
    "multipleChoice": false
  },
  {
    "id": 302,
    "text": "Which framework can automatically populate values for the Priority and Category fields based on the Short description field value?",
    "options": [
      "Predictive Intelligence",
      "Assignment Rule",
      "CSDM",
      "Action",
      "UI Policy"
    ],
    "correctAnswers": ["Predictive Intelligence"],
    "multipleChoice": false
  },
  {
    "id": 303,
    "text": "Which testing framework is used to test ServiceNow Applications?",
    "options": [
      "Test Driven Framework (TDF)",
      "Junit",
      "Selenium",
      "Automated Test Framework (ATF)"
    ],
    "correctAnswers": ["Automated Test Framework (ATF)"],
    "multipleChoice": false
  },
  {
    "id": 304,
    "text": "Which allows the creation of a task-based record from Service Catalog?",
    "options": [
      "Assignment Rule",
      "Flow Designer",
      "UI Builder",
      "Record Producers"
    ],
    "correctAnswers": ["Record Producers"],
    "multipleChoice": false
  },
  {
    "id": 305,
    "text": "What module do you use to access the reports that are available to you?",
    "options": [
      "Self-Service > My Reports",
      "Self-Service > My Dashboards",
      "Reports > View / Run",
      "Reports > Homepage",
      "Reports > Overview"
    ],
    "correctAnswers": ["Reports > View / Run"],
    "multipleChoice": false
  },
  {
    "id": 306,
    "text": "Security rules are defined to restrict the permissions of users from viewing and interacting with data. What are these security rules called?",
    "options": [
      "CRUD Rules",
      "Access Control Rules",
      "Role Assignment Rules",
      "Scripted User Rules",
      "User Authentication Rules"
    ],
    "correctAnswers": ["Access Control Rules"],
    "multipleChoice": false
  },
  {
    "id": 307,
    "text": "A new employee joins the IT department and needs to perform work assigned to Network and Hardware groups. How would you set up their access? (Choose three.)",
    "options": [
      "Add User Account to Hardware group",
      "Add User Account to IT Knowledgebase",
      "Create User Account",
      "Add User Account to itil group",
      "Add User Account to Network group",
      "Add User Account to ACL"
    ],
    "correctAnswers": ["Add User Account to Hardware group", "Create User Account", "Add User Account to Network group"],
    "multipleChoice": true
  },
  {
    "id": 308,
    "text": "The customer has asked that you change the default layout of the Task list. They would like these columns, in this order: Number, Task Type, Parent, Short Description, Assignment Group, Assignee, Updated. After navigating to the list, where would you click, to meet this requirement?",
    "options": [
      "Click List Context Menu > Personalize List",
      "Click List Context Menu > Configure > Columns",
      "Right click List Gear icon > Configure > Columns",
      "Right click on any column header, Context Menu > Configure > List Layout"
    ],
    "correctAnswers": ["Right click on any column header, Context Menu > Configure > List Layout"],
    "multipleChoice": false
  },
  {
    "id": 309,
    "text": "Which ServiceNow capability allows you to provide knowledge articles, via a conversational messaging interface?",
    "options": [
      "Agent Assist",
      "Virtual Agent",
      "Now Messenger",
      "Instance Chat"
    ],
    "correctAnswers": ["Virtual Agent"],
    "multipleChoice": false
  },
  {
    "id": 310,
    "text": "On the Form header, which element allows you to access form templates?",
    "options": [
      "Stamp",
      "More Options (...)",
      "Pages",
      "Paperclip"
    ],
    "correctAnswers": ["More Options (...)"],
    "multipleChoice": false
  },
  {
    "id": 311,
    "text": "What is the definition of a group?",
    "options": [
      "A collection of subject matter experts",
      "A department",
      "An escalation pod",
      "A collection of users",
      "A collection of tasks"
    ],
    "correctAnswers": ["A collection of users"],
    "multipleChoice": false
  },
  {
    "id": 312,
    "text": "Which ServiceNow utility provides a modern interactive graphical interface to visualize configuration items and their relationships?",
    "options": [
      "Flow Design",
      "CI Class Map",
      "Dependency View",
      "Business Service Map"
    ],
    "correctAnswers": ["Dependency View"],
    "multipleChoice": false
  },
  {
    "id": 313,
    "text": "What icon do you use to change the label on a Favorite?",
    "options": [
      "Star",
      "Clock",
      "Triangle",
      "Pencil"
    ],
    "correctAnswers": ["Pencil"],
    "multipleChoice": false
  },
  {
    "id": 314,
    "text": "Which tool is used to define relationships between fields in an import set table and a target table?",
    "options": [
      "Schema Map",
      "Field Transformer",
      "Transform Map",
      "Transform Schema"
    ],
    "correctAnswers": ["Transform Map"],
    "multipleChoice": false
  },
  {
    "id": 315,
    "text": "When moving a homepage or dashboard between instances, what must you remember?",
    "options": [
      "Download both as PDF and XML files",
      "They cannot be moved via update set",
      "The Platform will automatically add them to the update set",
      "Manually add them to the update set"
    ],
    "correctAnswers": ["Manually add them to the update set"],
    "multipleChoice": false
  },
  {
    "id": 316,
    "text": "Which allows the creation of a task-based record from Service Catalog?",
    "options": [
      "Record Producers",
      "UI Builder",
      "Assignment Rule",
      "UI Actions",
      "Flow Designer"
    ],
    "correctAnswers": ["Record Producers"],
    "multipleChoice": false
  },
  {
    "id": 317,
    "text": "On the knowledge base record, which tab would you use to define which users are able to write articles to the knowledge base?",
    "options": [
      "Can Contribute",
      "Cannot Author",
      "Can Read",
      "Can Write",
      "Can Author"
    ],
    "correctAnswers": ["Can Contribute"],
    "multipleChoice": false
  },
  {
    "id": 318,
    "text": "Which type of scripts run in the browser?",
    "options": [
      "UI Policies",
      "Script Include Scripts",
      "Access Control Scripts",
      "Business Rule Scripts"
    ],
    "correctAnswers": ["UI Policies"],
    "multipleChoice": false
  },
  {
    "id": 319,
    "text": "What enables you to trace the connection from an infrastructure item, like a Server, to the Services that are dependent on that Server?",
    "options": [
      "Automapping Utility",
      "Relationships",
      "Service Tracer",
      "Transform Map"
    ],
    "correctAnswers": ["Relationships"],
    "multipleChoice": false
  },
  {
    "id": 320,
    "text": "What section on a task record is used to see the most recent updates made to a record?",
    "options": [
      "Timeline",
      "Related List",
      "Activity Stream",
      "Audit Log"
    ],
    "correctAnswers": ["Activity Stream"],
    "multipleChoice": false
  },

  {
    "id": 321,
    "text": "While using the CMDB, what do you call the component that needs to be managed in order to deliver services?",
    "options": [
      "Configuration Item",
      "Asset",
      "Catalog Items",
      "Data Plow",
      "Service Offerings"
    ],
    "correctAnswers": ["Configuration Item"],
    "multipleChoice": false
  },
  {
    "id": 322,
    "text": "What is the first step in the process to import spreadsheet data into ServiceNow?",
    "options": [
      "Select Import Set",
      "Run Data Scrubber",
      "Define Data Source",
      "Create Import Set",
      "Set Coalesce"
    ],
    "correctAnswers": ["Define Data Source"],
    "multipleChoice": false
  },
  {
    "id": 323,
    "text": "What are the steps for importing data using an import set?",
    "options": [
      "Create Import Set; Create transform map; Transform data; Clean up import table",
      "Create a Transform Map, Load Data, Transform Data, Run Transform Map Script",
      "Identify source; Import transform map; Run transformer; Verify import",
      "Select source file; Run AutoMap; Transform data; Clean up target table"
    ],
    "correctAnswers": ["Create Import Set; Create transform map; Transform data; Clean up import table"],
    "multipleChoice": false
  },
  {
    "id": 324,
    "text": "If users would like to locate and assign a task to themselves in the Platform, what action could they perform from the list view to make the assignment? (Choose two.)",
    "options": [
      "Select the record using the check box, then select the Person icon",
      "Select the record using the check box then select the Assign To Me UI action on the List Header",
      "Double click on the Assigned to value, type the name of the user, and select the green check",
      "Right click on the Task number and select the Assign to me option in the menu",
      "Select the Task number, and select the Assign to me UI action on the form"
    ],
    "correctAnswers": ["Double click on the Assigned to value, type the name of the user, and select the green check", "Right click on the Task number and select the Assign to me option in the menu"],
    "multipleChoice": true
  },
  {
    "id": 325,
    "text": "What module enables an administrator to define destinations for imported data on any ServiceNow table?",
    "options": [
      "Load Data",
      "Field Transform",
      "Schema Map",
      "Transform Map"
    ],
    "correctAnswers": ["Transform Map"],
    "multipleChoice": false
  },
  {
    "id": 326,
    "text": "Which ServiceNow capability provides assistance to help users obtain information, make decisions, and perform common work tasks via a messaging interface?",
    "options": [
      "Now Support",
      "ServiceNow Messenger",
      "Agent Workspace",
      "Virtual Agent",
      "Knowledge Chat"
    ],
    "correctAnswers": ["Virtual Agent"],
    "multipleChoice": false
  },
  {
    "id": 328,
    "text": "When importing data from a spreadsheet, which step defines where the incoming data columns will be written in the receiving table?",
    "options": [
      "Select Data Source",
      "Schedule Transform",
      "Load Data",
      "Create Transform Map",
      "Field Alignment"
    ],
    "correctAnswers": ["Create Transform Map"],
    "multipleChoice": false
  },
  {
    "id": 329,
    "text": "On a form header, what icon would you click to access Template features?",
    "options": [
      "Context Menu",
      "Paper clip",
      "Stamp",
      "More options (...)"
    ],
    "correctAnswers": ["More options (...)"],
    "multipleChoice": false
  },
  {
    "id": 330,
    "text": "Access Control rules are applied to a specific table, like the Incident table. What is the object name for a rule that applies to the entire Incident table (all rows and fields)?",
    "options": [
      "incident.*",
      "incident.all",
      "incident.!",
      "incident.None"
    ],
    "correctAnswers": ["incident.None"],
    "multipleChoice": false
  },
  {
    "id": 331,
    "text": "On a list, what does each row show?",
    "options": [
      "A filter",
      "A record",
      "A table",
      "A field"
    ],
    "correctAnswers": ["A record"],
    "multipleChoice": false
  },
  {
    "id": 332,
    "text": "Which action enables personalization in a form for the admin role, only?",
    "options": [
      "Navigate to sys_form_properties.list and set the property glide.ui.enable_personalize_form.admin to true.",
      "Navigate to Context Menu > Configure > Form Layout and select ‘Enable Personalization’ and Enter the ‘admin’ role.",
      "Navigate to Context Menu > Configure > Table and add the role ‘Admin’ in the ‘Available User’ list box.",
      "Navigate to sys_properties.list find the property glide.ui.personalize_form.role and set the Value to admin."
    ],
    "correctAnswers": ["Navigate to sys_properties.list find the property glide.ui.personalize_form.role and set the Value to admin."],
    "multipleChoice": false
  },
  {
    "id": 333,
    "text": "Which element is used to track items not saved with a field, in a record?",
    "options": [
      "Sidebar",
      "List Editor",
      "Activity formatter",
      "Dictionary"
    ],
    "correctAnswers": ["Activity formatter"],
    "multipleChoice": false
  },
  {
    "id": 334,
    "text": "What does ServiceNow recommend as a best practice regarding data imports?",
    "options": [
      "Adjust your Transform maps, after the data is loaded into the target table.",
      "Use extremely large Import Sets, instead of multiple large Import Sets.",
      "Create a new Import set table for each new data load.",
      "Plan time before your import to remove obsolete or inaccurate data.",
      "Monitor data quality and clean imported data, using the Data Scrub Workspace."
    ],
    "correctAnswers": ["Plan time before your import to remove obsolete or inaccurate data."],
    "multipleChoice": false
  },
  {
    "id": 336,
    "text": "If a user is on an Incident form and is alerted when they change the value of the Priority field, which type of script executes in the Platform?",
    "options": [
      "A server script",
      "A client script",
      "A fix script",
      "A business rule"
    ],
    "correctAnswers": ["A client script"],
    "multipleChoice": false
  },
  {
    "id": 338,
    "text": "The testing team needs to be able to perform activities in the test instance, as though they are a member of the Service Desk group. What role would they need to be able to switch between user accounts, without logging out and back in?",
    "options": [
      "service_desk",
      "impersonator",
      "admin",
      "incognito"
    ],
    "correctAnswers": ["impersonator"],
    "multipleChoice": false
  },
  {
    "id": 339,
    "text": "What are the benefits of building flows using Flow Designer? (Choose three.)",
    "options": [
      "Provides IDE for complicated scripting",
      "Provides built-in libraries /API for complex coding",
      "Automatically populates SLA records",
      "Provides natural-language descriptions of flow logic",
      "Supports No-Code application development",
      "Supports easy integration with 3rd party systems"
    ],
    "correctAnswers": ["Provides natural-language descriptions of flow logic", "Supports No-Code application development", "Supports easy integration with 3rd party systems"],
    "multipleChoice": true
  },
  {
    "id": 340,
    "text": "Which helps to visualize configuration items and their relationships?",
    "options": [
      "Tables",
      "Schema Map",
      "Flow Design",
      "Transform Map",
      "Dependency View"
    ],
    "correctAnswers": ["Dependency View"],
    "multipleChoice": false
  },
  {
    "id": 341,
    "text": "Which tables are children of the Task table and come with the base system? (Choose three.)",
    "options": [
      "Config",
      "Problem",
      "Dictionary",
      "cmdb",
      "Incident",
      "Change Request"
    ],
    "correctAnswers": ["Problem", "Incident", "Change Request"],
    "multipleChoice": true
  },
  {
    "id": 342,
    "text": "Which role(s) are required to impersonate a user? (Choose two.)",
    "options": [
      "security_admin",
      "sys_admin",
      "impersonator",
      "sys_user",
      "admin"
    ],
    "correctAnswers": ["impersonator", "admin"],
    "multipleChoice": true
  },
  {
    "id": 343,
    "text": "Which set of steps is used to import spreadsheet data into a ServiceNow table?",
    "options": [
      "Select Data Source, Schedule Transform",
      "Load Data, Create Transform Map, Run Transform",
      "Define Data Source, Select Transform Map, Run Transform",
      "Select Import Set, Select Transform Map, Run Transform"
    ],
    "correctAnswers": ["Load Data, Create Transform Map, Run Transform"],
    "multipleChoice": false
  },
  {
    "id": 345,
    "text": "An administrator creates “customer_table_admin” and “customer_table_user” roles for the newly created 'Customer Table'. Which ACL rule would grant access to all rows and all fields to both the customer_table_admin and customer_table_user roles?",
    "options": [
      "customer.none",
      "customer.all",
      "customer.field",
      "customer.*"
    ],
    "correctAnswers": ["customer.none"],
    "multipleChoice": false
  },
  {
    "id": 346,
    "text": "Which tables are available by default in a ServiceNow instance? (Choose three.)",
    "options": [
      "User",
      "Issue",
      "Incident",
      "Project",
      "Task",
      "Item"
    ],
    "correctAnswers": ["User", "Incident", "Task"],
    "multipleChoice": true
  },
  {
    "id": 347,
    "text": "In a Knowledge Base record, where can an administrator find the User Criteria for who can read the articles?",
    "options": [
      "From the Accessible to tab",
      "From the Available to tab",
      "From the Can Access tab",
      "From the Can Read tab"
    ],
    "correctAnswers": ["From the Can Read tab"],
    "multipleChoice": false
  },
  {
    "id": 348,
    "text": "What action helps to see which modules are visible to a user?",
    "options": [
      "Install the Bomgar plug-in",
      "Initiate a Connect Chat session",
      "Launch a NowChat window",
      "Impersonate the user"
    ],
    "correctAnswers": ["Impersonate the user"],
    "multipleChoice": false
  },
  {
    "id": 349,
    "text": "What are the different Notification methods that can be used to alert users when events that concern them have occurred? (Choose three.)",
    "options": [
      "Meeting Invitation",
      "Email",
      "Browser Pop ups",
      "Messenger",
      "SMS"
    ],
    "correctAnswers": ["Email","Meeting Invitation", "SMS"],
    "multipleChoice": true
  },
  {
    "id": 351,
    "text": "After finishing your work on High Security Settings, what is a possible way to return to normal admin security levels?",
    "options": [
      "Select Global Update Set",
      "Log out and back in",
      "End Impersonation",
      "Select Normal role",
      "Use System Administration > Normal Security module"
    ],
    "correctAnswers": ["Log out and back in"],
    "multipleChoice": false
  },
  {
    "id": 352,
    "text": "Which feature can be used to give users the choice to easily populate the most-used fields for a specific table?",
    "options": [
      "Tags",
      "Formatter",
      "Template",
      "Reference type fields"
    ],
    "correctAnswers": ["Template"],
    "multipleChoice": false
  },
  {
    "id": 354,
    "text": "Which module in the Service Catalog application is used to create a new catalog item?",
    "options": [
      "Configuration Items",
      "Maintain Items",
      "Content Items",
      "Catalog Items"
    ],
    "correctAnswers": ["Maintain Items"],
    "multipleChoice": false
  },
  {
    "id": 355,
    "text": "What helps to define the structure of a catalog item form that is displayed to the customer?",
    "options": [
      "Variables",
      "Catalog Description",
      "Catalog Definition",
      "Order Guides"
    ],
    "correctAnswers": ["Variables"],
    "multipleChoice": false
  },
  {
    "id": 356,
    "text": "Which displays the list of activities, or history, on a form?",
    "options": [
      "Formatter",
      "Dictionary",
      "Sidebar",
      "History Menu"
    ],
    "correctAnswers": ["Formatter"],
    "multipleChoice": false
  },
  {
    "id": 357,
    "text": "Where should an administrator navigate to add the 'Save' button in the form header?",
    "options": [
      "Context Menu > Form Design",
      "All > System Properties > UI Action Settings",
      "All > System Properties > UI Properties",
      "Context Menu > Form Layout"
    ],
    "correctAnswers": ["All > System Properties > UI Properties"],
    "multipleChoice": false
  },
  {
    "id": 358,
    "text": "What are the options that can be set to determine when a Business Rule executes? (Choose four.)",
    "options": [
      "Async",
      "Load",
      "Change",
      "Display",
      "After",
      "Before",
      "Submit",
      "Click"
    ],
    "correctAnswers": ["Async", "Display", "After", "Before"],
    "multipleChoice": true
  },


];

export default CSA;