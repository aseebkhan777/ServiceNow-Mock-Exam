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


];

export default CSA;