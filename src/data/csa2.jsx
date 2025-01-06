const CSA2 = [

 

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
];

export default CSA2;