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
      "Banner Most Voted"
    ],
    "correctAnswers": ["Banner Most Voted"],
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
    "text": "Which phase of the incident response lifecycle includes creating and validating alerts?",
    "options": ["Preparation", "Containment, Eradication, Recovery", "Detection & Analysis", "Auditing & Logging", "Post-mortem"],
    "correctAnswers": ["Detection & Analysis"],
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
    "options": ["Access Control List", "Knowledge Tags", "Security Rules", "Knowledge Permissions"],
    "correctAnswers": ["Security Rules"],
    "multipleChoice": false
  },
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
    "options": ["Read and Write Access", "Permissions", "User Roles", "Content Management"],
    "correctAnswers": ["Read and Write Access"],
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






];

export default CSA;