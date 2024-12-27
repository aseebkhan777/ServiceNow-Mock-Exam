const CSA = [
  {
    "id": 1,
    "text": "A Service Catalog may include which of the following components?",
    "options": ["Order Guides, Exchange Rates, Calendars", "Order Guides, Catalog Items, and Interceptors", "Catalog Items, Asset Contracts, Task Surveys", "Record Producers, Order Guides, and Catalog Items  "],
    "correctAnswers": ["Record Producers, Order Guides, and Catalog Items"],
    "multipleChoice": false
  },

  {
    "id": 2, "text": "Which one of the following statements applies to a set of fields when they are coalesced during an import?",
    "options": ["If a match is found using the coalesce fields, the existing record is updated with the information being imported  ", "If a match is not found using the coalesce fields, the system does not create a Transform Map", "If a match is found using the coalesce fields, the system creates a new record", "If a match is not found using the coalesce fields, the existing record is updated with the information being imported"],
    "correctAnswers": ["If a match is found using the coalesce fields, the existing record is updated with the information being imported"],
    "multipleChoice": false
  },

  {
    "id": 3, "text": "As it relates to ServiceNow reporting, which of the following statements describes what a metric can do?",
    "options": ["A metric is a report gauge used on homepages to display real-time data", "A metric is a time measurement used to report the effectiveness of workflows and SLAs", "A metric is used to measure and evaluate the effectiveness of IT service management processes  ", "A metric is a comparative measurement used to report the effectiveness of flows and SLAs."],
    "correctAnswers": ["A metric is used to measure and evaluate the effectiveness of IT service management processes"],
    "multipleChoice": false
  },

  {
    "id": 4, "text": "The display sequence is controlled in a Service Catalog Item using which of the following?",
    "options": ["The Default Value field in the Catalog Item form", "The Sequence field in the Catalog Item form", "The Order field in the Variable form  ", "The Choice field in the Variable form"],
    "correctAnswers": ["The Order field in the Variable form"],
    "multipleChoice": false
  },

  {
    "id": 5, "text": "Reports can be created from which different places in the platform? (Choose two.)",
    "options": ["List column heading  ", "Metrics module", "Statistics module", "View / Run module  "],
    "correctAnswers": ["List column heading", "View / Run module"],
    "multipleChoice": true
  },

  {
    "id": 6, "text": "Knowledge Base Search results can be sorted by which of the following? (Choose three.)",
    "options": ["Most recent update  ", "Popularity", "Relevancy  ", "Manager assignment", "Number of views  "],
    "correctAnswers": ["Most recent update", "Relevancy", "Number of views"],
    "multipleChoice": true
  },

  {
    "id": 7, "text": "What is the path an Administrator could take to view the fulfillment stage task list for an order placed by a user?",
    "options": ["RITM (Number)>REQ (Number)>PROCUREMENT (Number)", "REQ (Number)>RITM (Number)>PROCUREMENT (Number)", "REQ (Number)>RITM (Number)>TASK (Number)  ", "FULFILLMENT (Number)>RITM (Number)>TASK (Number)"],
    "correctAnswers": ["REQ (Number)>RITM (Number)>TASK (Number)"],
    "multipleChoice": false
  },

  {
    "id": 8, "text": "Which term refers to application menus and modules which you may want to access quickly and often?",
    "options": ["Breadcrumb", "Favorite  ", "Tag", "Bookmark"],
    "correctAnswers": ["Favorite"],
    "multipleChoice": false
  },

  {
    "id": 9, "text": "What is generated from the Service Catalog once a user places an order for an item or service?",
    "options": ["A change request", "An Order Guide", "A request  ", "An SLA"],
    "correctAnswers": ["A request"],
    "multipleChoice": false
  },

  {
    "id": 10, "text": "From the User menu, which actions can a user select? (Choose three.)",
    "options": ["Send Notifications", "Log Out ServiceNow  ", "Elevate Roles  ", "Impersonate Users  ", "Order from Service Catalog", "Approve Records"],
    "correctAnswers": ["Log Out ServiceNow", "Elevate Roles", "Impersonate Users"],
    "multipleChoice": true
  },

  {
    "id": 11, "text": "Buttons, form links, and context menu items are all examples of what type of functionality?",
    "options": ["Business Rule", "UI Action  ", "Client Script", "UI Policy"],
    "correctAnswers": ["UI Action"],
    "multipleChoice": false
  },

  {
    "id": 12, "text": "Which of the following is true of Service Catalog Items in relation to the Service Catalog?",
    "options": ["They run behind the scenes.", "They are the building blocks.  ", "They are optional.", "They provide options."],
    "correctAnswers": ["They are the building blocks."],
    "multipleChoice": false
  },

  {
    "id": 13, "text": "Table Access Control rules are processed in the following order:",
    "options": ["any table name (wildcard), parent table name, table name", "table name, parent table name, any table name (wildcard)  ", "parent table name, table name, any table name (wildcard)", "any table name (wildcard), table name, parent table name"],
    "correctAnswers": ["table name, parent table name, any table name (wildcard)"],
    "multipleChoice": false
  },

  {
    "id": 14, "text": "What is the platform name for the User table?",
    "options": ["u_users", "sys_users", "x_users", "sys_user  "],
    "correctAnswers": ["sys_user"],
    "multipleChoice": false
  },

  {
    "id": 15, "text": "A REQ number in the Service Catalog represents",
    "options": ["the order number.  ", "the stage.", "the task to complete.", "the individual item in the order."],
    "correctAnswers": ["the order number."],
    "multipleChoice": false
  },

  {
    "id": 16, "text": "Which would NOT appear in the History section of the Application Navigator?",
    "options": ["Records", "UI Pages  ", "Lists", "Forms"],
    "correctAnswers": ["UI Pages"],
    "multipleChoice": false
  },

  {
    "id": 17, "text": "Which one of the following statements is a recommendation from ServiceNow about Update Sets?",
    "options": ["Avoid using the Default Update set as an Update Set for moving customizations from instance to instance  ", "Before moving customizations from instance to instance with Update Sets, ensure that both instances are different versions", "Use the Baseline Update Set to store the contents of items after they are changed the first time", "Once an Update Set is closed as ‘Complete’, change it back to ‘In Progress’ until it is applied to another instance"],
    "correctAnswers": ["Avoid using the Default Update set as an Update Set for moving customizations from instance to instance"],
    "multipleChoice": false
  },

  {
    "id": 18, "text": "Which of the following is used to initiate a flow?",
    "options": ["A Trigger  ", "Core Action", "A spoke", "An Event"],
    "correctAnswers": ["A Trigger"],
    "multipleChoice": false
  },

  {
    "id": 19, "text": "For Administrators creating new Service Catalog items, what is a characteristic they should know about Service Catalog variables?",
    "options": ["Service Catalog variables can only be used in Record Producers", "Service Catalog variables can only be used in Order Guides", "Service Catalog variables cannot affect the order price", "Service Catalog variables are global by default  "],
    "correctAnswers": ["Service Catalog variables are global by default"],
    "multipleChoice": false
  },

  {
    "id": 20, "text": "Which one of the following statements is true about Column Context Menus?",
    "options": ["It displays actions such as creating quick reports, configuring the list, and exporting data  ", "It displays actions related to filtering options, assigning tags, and search", "It displays actions related to viewing and filtering the entire list", "It displays actions such as view form, view related task, and add relationship"],
    "correctAnswers": ["It displays actions such as creating quick reports, configuring the list, and exporting data"],
    "multipleChoice": false
  },
  {
    "id": 22, "text": "When using the Load Data and Transform Map process, what is the Mapping Assist used for?",
    "options": ["Mapping fields using the Import Log", "Mapping fields using Transform History", "Mapping fields using an SLA", "Mapping fields using a Field Map  "],
    "correctAnswers": ["Mapping fields using a Field Map"],
    "multipleChoice": false
  },

  {
    "id": 23, "text": "Which one of the following statements describes the contents of the Configuration Management Database (CMDB)?",
    "options": ["The CMDB contains data about tangible and intangible business assets  ", "The CMDB contains the Business Rules that direct the intangible, configurable assets used by a company", "The CMDB archives all Service Management PaaS equipment metadata and usage statistics", "The CMDB contains ITIL process data pertaining to configuration items"],
    "correctAnswers": ["The CMDB contains data about tangible and intangible business assets"],
    "multipleChoice": false
  },

  {
    "id": 24, "text": "In what order should filter elements be specified?",
    "options": ["Field, Operator, then Value  ", "Field, Operator, then Condition", "Operator, Condition, then Value", "Value, Operator, then Field"],
    "correctAnswers": ["Field, Operator, then Value"],
    "multipleChoice": false
  },

  {
    "id": 25, "text": "Which statement is true about business rules?",
    "options": ["A business rule must run before a database action occurs", "A business rule can be a piece of Javascript  ", "A business rule must not run before a database action occurs", "A business rule monitors fields on a form"],
    "correctAnswers": ["A business rule can be a piece of Javascript"],
    "multipleChoice": false
  },

  {
    "id": 26, "text": "Which of the following are a type of client scripts supported in ServiceNow? (Choose four.)",
    "options": ["onSubmit  ", "onUpdate", "onCellEdit  ", "onLoad  ", "onEdit", "onChange  ", "onSave"],
    "correctAnswers": ["onSubmit", "onCellEdit", "onLoad", "onChange"],
    "multipleChoice": true
  },

  {
    "id": 27, "text": "Which type of tables may be extended by other tables, but do not extend another table?",
    "options": ["Base Tables  ", "Core Tables", "Extended Tables", "Custom Tables"],
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
    "options": ["Connect Chat  ", "Now Messenger", "User Presence", "Comments"],
    "correctAnswers": ["Connect Chat"],
    "multipleChoice": false
  },

  {
    "id": 30, "text": "Which of the following concepts are associated with the ServiceNow CMDB? (Choose four.)",
    "options": ["Service Processes  ", "User Permissions", "Tables and Fields  ", "A Database  ", "The Dependency View  "],
    "correctAnswers": ["Service Processes", "Tables and Fields", "A Database", "The Dependency View"],
    "multipleChoice": true
  },

  {
    "id": 31, "text": "What is a formatter? Select one of the following.",
    "options": ["A formatter allows you to configure applications on your instance", "A formatter is a form element used to display information that is not a field in the record  ", "A formatter allows you to populate fields automatically", "A formatter is a set of conditions applied to a table to help find and work with data"],
    "correctAnswers": ["A formatter is a form element used to display information that is not a field in the record"],
    "multipleChoice": false
  },

  {
    "id": 32, "text": "When searching using the App Navigator search field, what can be returned? (Choose four.)",
    "options": ["Names of Applications and Modules  ", "Names of Modules  ", "Names of Applications  ", "Favorites  ", "History Records", "Titles of Dashboard Gauges"],
    "correctAnswers": ["Names of Applications and Modules", "Names of Modules", "Names of Applications", "Favorites"],
    "multipleChoice": true
  },

  {
    "id": 33, "text": "Which technique is used to get information from a series of referenced fields from different tables?",
    "options": ["Table-Walking", "Sys_ID Pulling", "Dot-Walking  ", "Record-Hopping"],
    "correctAnswers": ["Dot-Walking"],
    "multipleChoice": false
  },

  {
    "id": 34, "text": "What is a schema map?",
    "options": ["A schema map enables administrators to define records from specific tables as trouble sources for Configuration Items", "A schema map graphically organizes the visual task boards for the CMDB", "A schema map graphically displays the Configuration Items that support a business service", "A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema  "],
    "correctAnswers": ["A schema map displays the details of tables and their relationships in a visual manner, allowing administrators to view and easily access different parts of the database schema"],
    "multipleChoice": false
  },

  {
    "id": 35, "text": "Which one of the following statements best describes the purpose of an Update Set?",
    "options": ["An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems  ", "By default, an Update Set includes customizations, Business Rules, and homepages", "An Update Set is a group of customizations that is moved from Production to Development", "By default, the changes included in an Update Set are visible only in the instance to which they are applied"],
    "correctAnswers": ["An Update Set allows administrators to group a series of changes into a named set and then move this set as a unit to other systems"],
    "multipleChoice": false
  },

  {
    "id": 36, "text": "Which of the following can be customized through the Basic Configuration UI 16 module? (Choose three.)",
    "options": ["Banner Image  ", "Record Number Format", "Browser Tab Title  ", "System Date Format  ", "Form Header Size"],
    "correctAnswers": ["Banner Image", "Browser Tab Title", "System Date Format"],
    "multipleChoice": true
  },

  {
    "id": 37, "text": "Which of the following statements is true regarding import sets?",
    "options": ["An import set can be used to move data between ServiceNow instances  ", "An import set can only be used to import data into ServiceNow from external systems", "An import set can be used to create records from data that exists within the same instance", "An import set can only be used to import data into ServiceNow from external systems"],
    "correctAnswers": ["An import set can be used to move data between ServiceNow instances"],
    "multipleChoice": false
  },

  {
    "id": 38, "text": "What is a catalog client script?",
    "options": ["A catalog client script controls the flow of data between the Service Catalog and other ServiceNow applications", "A catalog client script executes client-side logic related to Service Catalog item variables  ", "A catalog client script is used for workflow management", "A catalog client script modifies the data from an order guide"],
    "correctAnswers": ["A catalog client script executes client-side logic related to Service Catalog item variables"],
    "multipleChoice": false
  },

  {
    "id": 39, "text": "Which feature allows users to personalize the interface by changing colors and themes?",
    "options": ["Theme Customization  ", "User Preferences", "UI Theme Editor", "Color Palette Customization"],
    "correctAnswers": ["Theme Customization"],
    "multipleChoice": false
  },

  {
    "id": 40,
    "text": "Which of the following is a true statement about record producers?",
    "options": ["Record Producers allow users to create records in ServiceNow through the Service Catalog  ", "Record Producers are always linked to a specific catalog item", "Record Producers only work with incidents", "Record Producers allow users to create records in the Incident form only"],
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
    "correctAnswers": ["A"],
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
    "text": "Audits should be robustly designed to reflect best practice, appropriate resources, and tested protocols and standards. They should also use what type of auditors?",
    "options": [
      "Auditors working in the interest of the cloud customer",
      "Independent auditors",
      "Certified by CSA",
      "Auditors working in the interest of the cloud provider",
      "None of the above"
    ],
    "correctAnswers": ["Independent auditors"],
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
    "correctAnswers": ["Apply filter, right click on column header, select Create Report"],
    "multipleChoice": false
  },


];

export default CSA;