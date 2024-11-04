const HRSD=[{
    "id": 2,
    "text": "An HR Admin without the System Admin role can do what? (Choose three.)",
    "options": [
        "Grant roles to users or groups",
        "Modify the HR Administration > Properties",
        "Reset user passwords",
        "Create HR Criteria",
        "Configure business rules",
        "Add users to groups"
    ],
    "correctAnswers": [
        "Modify the HR Administration > Properties",
        "Create HR Criteria",
        "Add users to groups"
    ],
    "multipleChoice": true
},
{
    "id": 3,
    "text": "After the HR Admin [sn_hr_core.admin] role has been removed from the Admin role, how may a user with only the Admin role add members to HR groups?",
    "options": [
        "The Admin must elevate their role to security_admin to add members to HR groups.",
        "The Admin follows the same process as with any group membership change.",
        "The Admin can no longer add members to HR groups.",
        "The Admin must impersonate an HR Admin to add members to HR groups."
    ],
    "correctAnswers": [
        "The Admin can no longer add members to HR groups."
    ],
    "multipleChoice": false
}
,{
    "id": 4,
    "text": "In the Create Bulk Cases module, which Filter by options are available in the dropdown? (Choose four.)",
    "options": [
        "Document Template",
        "Upload File",
        "HR Service Template",
        "User Criteria",
        "HR Template",
        "HR Profiles",
        "HR Criteria"
    ],
    "correctAnswers": [
        "Upload File",
        "User Criteria",
        "HR Profiles",
        "HR Criteria"
    ],
    "multipleChoice": true
}
,{
    "id": 5,
    "text": "If you have both Admin and HR Admin roles and wanted to configure an Access Control for the Employee Relations Cases table, what must first be done?",
    "options": [
        "Add the Delegated Developer role to your User record",
        "From the User dropdown in the banner, elevate your role to security_admin",
        "Manually add the security_admin role to your User record",
        "Nothing would need to be done"
    ],
    "correctAnswers": [
        "From the User dropdown in the banner, elevate your role to security_admin"
    ],
    "multipleChoice": false
}
,{
    "id": 6,
    "text": "What type of information does the HR Profile contain?",
    "options": [
        "Personal employee data",
        "Group membership and role information",
        "User login and department information",
        "A user's password"
    ],
    "correctAnswers": [
        "Personal employee data"
    ],
    "multipleChoice": false
}
,{
    "id": 7,
    "text": "How many User Criteria Records may be applied to a single KB or KB Article?",
    "options": [
        "Only two",
        "Only three",
        "Unlimited"
    ],
    "correctAnswers": [
        "Unlimited"
    ],
    "multipleChoice": false
}
,{
    "id": 8,
    "text": "In the base ServiceNow instance, how are User Criteria used?",
    "options": [
        "To control which users can access the HR Case application",
        "To control what a user sees in the information and suggested reading widgets",
        "To control read and write access to Knowledge bases and articles",
        "To control which users can access the HR Service Portal"
    ],
    "correctAnswers": [
        "To control read and write access to Knowledge bases and articles"
    ],
    "multipleChoice": false
}
,{
    "id": 9,
    "text": "Which of the following are true for an HR application as it relates to the User [sys_user] Table and the HR Profile [sn_hr_core.profile] Table?",
    "options": [
        "Both are required.",
        "Only HR Profile table is required in HR.",
        "Neither are required.",
        "Only the User table is required in HR."
    ],
    "correctAnswers": [
        "Both are required."
    ],
    "multipleChoice": false
}
,{
    "id": 10,
    "text": "In the base instance, what determines the conditions a Case must meet before it can be assigned to an agent?",
    "options": [
        "Matching Rules",
        "Client Rules",
        "ACLs",
        "Escalation Rules"
    ],
    "correctAnswers": [
        "Matching Rules"
    ],
    "multipleChoice": false
}
,{
    "id": 11,
    "text": "What role is required, at a minimum, to view confidential HR Profile data?",
    "options": [
        "HR Admin [sn_hr_core.admin]",
        "HR Basic [sn_hr_core.basic]",
        "LE Admin [sn_hr_le.admin]",
        "HR Manager [sn_hr_core.manager]"
    ],
    "correctAnswers": [
        "HR Basic [sn_hr_core.basic]"
    ],
    "multipleChoice": false
}
,{
    "id": 12,
    "text": "What types of HR Document templates may be created in ServiceNow? (Choose two.)",
    "options": [
        "Document Templates",
        "Word document templates",
        "PDF document templates",
        "Text document templates"
    ],
    "correctAnswers": [
        "Document Templates",
        "PDF document templates"
    ],
    "multipleChoice": true
},
{
    "id": 13,
    "text": "What are the advantages of removing the HR Admin role from the system Admin role after the HR Implementation tasks have been completed? (Choose two.)",
    "options": [
        "This ensures that HR has control over further HR configurations.",
        "The HR Admin role should remain a part of the system Admin role.",
        "This ensures that confidential HR data is only accessible to users with an HR role.",
        "It is not necessary because the system Admin always has access to all HR data."
    ],
    "correctAnswers": [
        "This ensures that HR has control over further HR configurations.",
        "This ensures that confidential HR data is only accessible to users with an HR role."
    ],
    "multipleChoice": true
}
,{
    "id": 14,
    "text": "What does ServiceNow now call the HR application?",
    "options": [
        "HRDS - HR Deliver Service",
        "HRSM - HR Service Management",
        "HRMS - HR Management System",
        "HRSD - HR Service Delivery"
    ],
    "correctAnswers": [
        "HRSD - HR Service Delivery"
    ],
    "multipleChoice": false
}
,{
    "id": 15,
    "text": "What defines an employee's access to the HR Service Portal / Employee Service Center?",
    "options": [
        "Group membership",
        "User Criteria",
        "HR Criteria",
        "Client Roles"
    ],
    "correctAnswers": [
        "Client Roles"
    ],
    "multipleChoice": false
}
,{
    "id": 16,
    "text": "What kind of records do HR Requests create?",
    "options": [
        "HR Incidents",
        "HR Files",
        "HR Problems",
        "HR Cases"
    ],
    "correctAnswers": [
        "HR Cases"
    ],
    "multipleChoice": false
}
,{
    "id": 17,
    "text": "In the HR Guided Setup Module, why are some tasks locked in the Task view?",
    "options": [
        "They require an elevated role to access.",
        "They are deprecated tasks that should not be completed.",
        "They require other tasks to be completed first.",
        "They require a plugin to be activated first."
    ],
    "correctAnswers": [
        "They require a plugin to be activated first."
    ],
    "multipleChoice": false
}
,{
    "id": 18,
    "text": "Which of the following are examples of HR application scopes? (Choose four.)",
    "options": [
        "Human Resources: COE",
        "Human Resources: Core",
        "Human Resources: Knowledge",
        "Human Resources: Integrations",
        "Human Resources: Lifecycle Events",
        "Human Resources: Global",
        "Human Resources: Service Portal"
    ],
    "correctAnswers": [
        "Human Resources: Core",
        "Human Resources: Integrations",
        "Human Resources: Lifecycle Events",
        "Human Resources: Knowledge"
    ],
    "multipleChoice": true
}
,{
    "id": 19,
    "text": "How can an HR Administrator or Content writer limit which employees will see content on the Employee Service Center?",
    "options": [
        "All employees will see the same information",
        "Client roles automatically limit what is visible to employees",
        "Using User Criteria",
        "Using HR Criteria"
    ],
    "correctAnswers": [
        "Using HR Criteria"
    ],
    "multipleChoice": false
}
,{
    "id": 20,
    "text": "If the Audience field has been configured on a Lifecycle Event Activity, what will the system do if the subject person does not meet the criteria for that Activity?",
    "options": [
        "The activity must be manually closed by the HR professional",
        "The Lifecycle Event will be canceled",
        "The activity must be manually closed by the Subject person",
        "The activity will be skipped"
    ],
    "correctAnswers": [
        "The activity will be skipped"
    ],
    "multipleChoice": false
}
,{
    "id": 21,
    "text": "The ServiceNow SIM (Success Implementation Methodology) methodology is based around what generic methodologies?",
    "options": [
        "Waterfall and Rapid Application Development (RAD)",
        "Agile and Waterfall",
        "Prince",
        "Scrum and XP"
    ],
    "correctAnswers": [
        "Agile and Waterfall"
    ],
    "multipleChoice": false
}
,{
    "id": 21,
    "text": "If an HR Service needs to be accessible to employees on the Employee Service Center, what field must be completed on the HR Service?",
    "options": [
        "Checklist",
        "Fulfiller Instructions",
        "Lifecycle Event type",
        "Record Producer"
    ],
    "correctAnswers": [
        "Record Producer"
    ],
    "multipleChoice": false
}
,{
    "id": 22,
    "text": "HR Profiles may be created for multiple employees using conditions and criteria in which module?",
    "options": [
        "Create Human Resources Profile",
        "Create new Case",
        "Generate HR Profiles",
        "Bulk Cases"
    ],
    "correctAnswers": [
        "Generate HR Profiles"
    ],
    "multipleChoice": false
}
,{
    "id": 23,
    "text": "User authentication and Instance restriction are examples of what type of security?",
    "options": [
        "Physical Security",
        "Roles and Groups",
        "Contextual Security",
        "Platform Access"
    ],
    "correctAnswers": [
        "Platform Access"
    ],
    "multipleChoice": false
}
,{
    "id": 24,
    "text": "If the HR Service does not have any Case options specified, HR Documents must be manually generated for the HR Case. In this situation, who is able to generate an HR document for the Case?",
    "options": [
        "Any HR professional",
        "Only an HR Admin",
        "Only an HR Manager",
        "Only the assigned to person"
    ],
    "correctAnswers": [
        "Only the assigned to person"
    ],
    "multipleChoice": false
}
,{
    "id": 25,
    "text": "When does the HR Template populate information on the HR Case form?",
    "options": [
        "When the Opened for person is selected",
        "When the Assignment group is selected.",
        "When the HR Case Type is selected.",
        "When the HR service is selected on the HR Case Creation form."
    ],
    "correctAnswers": [
        "When the HR service is selected on the HR Case Creation form."
    ],
    "multipleChoice": false
}
,{
    "id": 26,
    "text": "The HR Profile table is used to track information for what Employment types? (Choose three.)",
    "options": [
        "Other",
        "Potential Employee",
        "Full Time Employee",
        "Temporary Employee",
        "Spouse",
        "Contractor"
    ],
    "correctAnswers": [
        "Full Time Employee",
        "Temporary Employee",
        "Contractor"
    ],
    "multipleChoice": true
}
,{
    "id": 27,
    "text": "If the HRSD application is scoped, why can the System Administrator initially access all HR applications after the plugin has been installed?",
    "options": [
        "When the HR plugins are installed, the necessary HR roles are added to the Admin role.",
        "The roles were manually granted by a ServiceNow security user.",
        "The Admin will always have access to all HR tables and data.",
        "The roles were manually granted by an HR Admin."
    ],
    "correctAnswers": [
        "When the HR plugins are installed, the necessary HR roles are added to the Admin role."
    ],
    "multipleChoice": false
}
,{
    "id": 28,
    "text": "Scenario: You have an existing ITSM customer who is now implementing HR Enterprise. In UAT, they discovered that they get an error message about a Read operation from the HR scope to the Global scope being denied. You have verified that each Script Include was written correctly. What else must be done to allow the Script Includes to work in the HR application?",
    "options": [
        "The Status of the associated record on the Application Restricted Caller Access list must be set to Denied.",
        "You must create a custom ACL to allow the script includes to work.",
        "The Status of the associated record on the Application Restricted Caller Access list must be set to Allowed.",
        "You must change Scope for the script includes to work."
    ],
    "correctAnswers": [
        "The Status of the associated record on the Application Restricted Caller Access list must be set to Allowed."
    ],
    "multipleChoice": false
}
,{
    "id": 29,
    "text": "In the HR Guided Setup Module, the Configuration View displays which of the following for a Category? (Choose three.)",
    "options": [
        "Properties",
        "Gauges",
        "Dashboards",
        "Lists",
        "Overviews",
        "Forms"
    ],
    "correctAnswers": [
        "Properties",
        "Lists",
        "Forms"
    ],
    "multipleChoice": true
}
,{
    "id": 30,
    "text": "What method needs to be invoked from MatchingRuleProcessor class?",
    "options": [
        "processAndGetCandidates",
        "processAndGetUsers",
        "processAndGelList",
        "processAndGetArray"
    ],
    "correctAnswers": [
        "processAndGetCandidates"
    ],
    "multipleChoice": false
}
,{
    "id": 31,
    "text": "If an HR Service will only be used internally by HR professionals, what is the minimum configuration needed?",
    "options": [
        "HR Service and HR Template.",
        "HR Service, HR Template, and Record Producer.",
        "HR Service.",
        "HR Service, HR Template, Record Producer, and Lifecycle event type."
    ],
    "correctAnswers": [
        "HR Service."
    ],
    "multipleChoice": false
}
,{
    "id": 32,
    "text": "The Knowledge bases searched for the Knowledge results section on an HR Case are determined by what?",
    "options": [
        "Contextual Search configuration",
        "HR Service configuration",
        "HR Criteria configuration",
        "Knowledge Management configuration"
    ],
    "correctAnswers": [
        "Contextual Search configuration"
    ],
    "multipleChoice": false
}
,{
    "id": 33,
    "text": "When gathering requirements for HR Services, it is best to begin by defining the Service then working upwards, categorizing in progressively more detail. What are the basic categories used?",
    "options": [
        "HR Service, Topic Detail, COE.",
        "HR Service, Topic Category, Activity Category, Activities, COE.",
        "HR Service, Topic Category, COE.",
        "HR Service, Topic Detail, Topic Category, COE."
    ],
    "correctAnswers": [
        "HR Service, Topic Detail, Topic Category, COE."
    ],
    "multipleChoice": false
}
,{
    "id": 34,
    "text": "If a knowledge base and its articles have no user criteria selected, a user without a role can do what?",
    "options": [
        "read and contribute articles",
        "read articles, but not contribute",
        "can neither read nor contribute articles",
        "contribute, but not read articles"
    ],
    "correctAnswers": [
        "read articles, but not contribute"
    ],
    "multipleChoice": false
}
,{
    "id": 35,
    "text": "How does ServiceNow know which HR Template to use on an HR Case?",
    "options": [
        "The HR Template is referenced on the HR Service record.",
        "The HR Template is referenced on the record producer form.",
        "Each COE has a specific HR Template.",
        "The HR Template is selected directly on the Catalog item."
    ],
    "correctAnswers": [
        "The HR Template is referenced on the HR Service record."
    ],
    "multipleChoice": false
}
,{
    "id": 36,
    "text": "What are the key differentiators between an HR Profile record and a User record? (Choose three.)",
    "options": [
        "The HR Profile stores the employee's assigned delegates.",
        "The HR Profile includes group membership information.",
        "The HR Profile includes employee organizational information like Colleagues.",
        "The HR Profile stores login credential information.",
        "The HR Profile may include employee marital status.",
        "The HR Profile is intended to store confidential employee data that is pertinent for HR."
    ],
    "correctAnswers": [
        "The HR Profile includes employee organizational information like Colleagues.",
        "The HR Profile may include employee marital status.",
        "The HR Profile is intended to store confidential employee data that is pertinent for HR."
    ],
    "multipleChoice": true
}
,{
    "id": 37,
    "text": "If a customer has a huge employee population, complex organizational structures, and requires custom integrations and language translations, what level of configuration complexity would their project be considered?",
    "options": [
        "Drastic",
        "Low",
        "Major",
        "Nominal"
    ],
    "correctAnswers": [
        "Drastic"
    ],
    "multipleChoice": false
}
,{
    "id": 38,
    "text": "When an employee completes a questionnaire on an Employee Form, on which table does the system store their answers?",
    "options": [
        "Form [sys_ui_form]",
        "Metric Result [asmt_metric_result]",
        "Question Answer [question_answer]",
        "HR Case [sn_hr_core_case]"
    ],
    "correctAnswers": [
        "Metric Result [asmt_metric_result]"
    ],
    "multipleChoice": false
}
,{
    "id": 39,
    "text": "With the I18N: Knowledge Management Internationalization Plugin v2 enabled, how are translated Knowledge articles associated with each other so that the user is presented with the article in the selected language?",
    "options": [
        "Article Versions related list",
        "Knowledge feedback related list",
        "Affected Products related list",
        "Translated Versions related list"
    ],
    "correctAnswers": [
        "Translated Versions related list"
    ],
    "multipleChoice": false
}
,{
    "id": 40,
    "text": "When creating a PDF Document Template, where does the list of Document Revisions come from?",
    "options": [
        "From Managed Documents",
        "From Document Templates",
        "From Knowledge Articles",
        "From System Documents"
    ],
    "correctAnswers": [
        "From Managed Documents"
    ],
    "multipleChoice": false
}
,{
    "id": 41,
    "text": "Only users with which role, at a minimum, may view the confidential data on the HR Profiles table?",
    "options": [
        "Profile Writer [sn_hr_core.profile_writer]",
        "Profile Reader [sn_hr_core.profile_reader]",
        "HR Case Writer [sn_hr_le.case_writer]",
        "HR Case Reader [sn_hr_le.case_reader]"
    ],
    "correctAnswers": [
        "Profile Reader [sn_hr_core.profile_reader]"
    ],
    "multipleChoice": false
}
,{
    "id": 42,
    "text": "What determines if a user can view a Knowledge article?",
    "options": [
        "Can/Cannot Read User Criteria",
        "Can/Cannot Contribute User Criteria",
        "HR Criteria",
        "ACL Rules"
    ],
    "correctAnswers": [
        "Can/Cannot Read User Criteria"
    ],
    "multipleChoice": false
}
,{
    "id": 43,
    "text": "What do Client Roles define?",
    "options": [
        "Groups for the customer's clients.",
        "Roles that come into force if user uses a browser client.",
        "Named roles (e.g., VP of Operations, SVP Sales) for a customer's clients.",
        "Access for new hires, employees, alumni, contingent, and contract workers."
    ],
    "correctAnswers": [
        "Access for new hires, employees, alumni, contingent, and contract workers."
    ],
    "multipleChoice": false
}
,{
    "id": 44,
    "text": "When a Guided Setup task is marked as complete, how can it be reopened?",
    "options": [
        "Closed tasks cannot be reopened",
        "Click the Mark as Incomplete button",
        "Submit a request in HI",
        "Restart the Guided Setup entirely"
    ],
    "correctAnswers": [
        "Click the Mark as Incomplete button"
    ],
    "multipleChoice": false
}
,{
    "id": 45,
    "text": "When creating a PDF Document template, the Document revision field must be completed. How does the system determine which documents are available to be selected for this field?",
    "options": [
        "You must be a member of the Owning Group for the Managed Document",
        "All Documents are visible",
        "Your group memberships and the Document owner field on the Managed Document record",
        "You must have created the Managed Document record"
    ],
    "correctAnswers": [
        "Your group memberships and the Document owner field on the Managed Document record"
    ],
    "multipleChoice": false
}
,{
    "id": 46,
    "text": "What is used to create a link on an HR Case form that accesses information outside the application?",
    "options": [
        "HR Service",
        "Link Generator",
        "Restricted Caller Access",
        "COE Configuration"
    ],
    "correctAnswers": [
        "Link Generator"
    ],
    "multipleChoice": false
}
,{
    "id": 47,
    "text": "When configuring a PDF Document Template, how does the system map form fields to ServiceNow fields?",
    "options": [
        "The Document field type on the PDF Template Mappings record",
        "The Preview value field on the PDF Template Mappings record",
        "The Mapping field on the PDF Template Mappings record",
        "The Document field on the PDF Template Mappings record"
    ],
    "correctAnswers": [
        "The Mapping field on the PDF Template Mappings record"
    ],
    "multipleChoice": false
}
,{
    "id": 48,
    "text": "If the Match All field is checked on a User Criteria record, the user:",
    "options": [
        "Must satisfy at least one of the criteria to meet the conditions.",
        "Must satisfy at least some of the criteria to meet the conditions.",
        "Must satisfy a majority percentage of the criteria to meet the conditions.",
        "Must satisfy all of the selected criteria to meet the conditions."
    ],
    "correctAnswers": [
        "Must satisfy all of the selected criteria to meet the conditions."
    ],
    "multipleChoice": false
}
,{
    "id": 49,
    "text": "If a new HR Knowledge base is created, how can it be included in the Knowledge results section on the HR Case form?",
    "options": [
        "Add it to the HR Template",
        "Add it to the HR Service configuration",
        "All Knowledge bases are searched by default",
        "Add it to the Contextual Search configuration"
    ],
    "correctAnswers": [
        "Add it to the Contextual Search configuration"
    ],
    "multipleChoice": false
}
,{
    "id": 50,
    "text": "How is the HR template associated with an HR service?",
    "options": [
        "On the HR service record",
        "On the Lifecycle Event Activity Set",
        "On the HR template record",
        "On the HR case"
    ],
    "correctAnswers": [
        "On the HR service record"
    ],
    "multipleChoice": false
}
,{
    "id": 51,
    "text": "Where does the HR Administrator define which HR Profile fields can be edited in the ServiceNow instance?",
    "options": [
        "HR Profile > Setup",
        "HR Administration > Properties",
        "HR Administration > Setup",
        "HR Profiles > Properties"
    ],
    "correctAnswers": [
        "HR Administration > Properties"
    ],
    "multipleChoice": false
}
,{
    "id": 52,
    "text": "The Enterprise Service Management Integrations framework contains common components to be used for integrating HR applications with third-party systems. Which capability does the Enterprise Service Management Integrations framework leverage to communicate with external instances and third-party systems?",
    "options": [
        "Integration designer",
        "Flow designer",
        "Design Hub",
        "Mobile designer"
    ],
    "correctAnswers": [
        "Flow designer"
    ],
    "multipleChoice": false
}
,{
    "id": 53,
    "text": "Who can generate the PDF document on an active HR Case?",
    "options": [
        "Only the Assigned to person",
        "Only the Subject Person's manager",
        "Only an HR manager",
        "Only the employee"
    ],
    "correctAnswers": [
        "Only the Assigned to person"
    ],
    "multipleChoice": false
}
,{
    "id": 54,
    "text": "What role is required to access the modules in the HR Integrations application?",
    "options": [
        "HR Lifecycle Event Case Writer [ssn_hr_le.case_writer]",
        "HR Core Profile Reader [sn_hr_core.profile_reader]",
        "Admin [admin]",
        "HR Integrations Admin [sn_hr_integrations.admin]"
    ],
    "correctAnswers": [
        "HR Integrations Admin [sn_hr_integrations.admin]"
    ],
    "multipleChoice": false
}
,{
    "id": 55,
    "text": "In the base ServiceNow platform, the Human Resources General Knowledge base has Can Contribute User Criteria set to Users with the [sn_hr_core.kb_write] role. If a Knowledge article in the Human Resources General Knowledge base has no Can Contribute User Criteria set, what is the minimum role a user would need to edit the article?",
    "options": [
        "HR Admin [sn_hr_core.admin]",
        "HR Basic [sn_hr_core.basic]",
        "KB Reader [sn_hr_core.kb_reader]",
        "KB Writer [sn_hr_core.kb_writer]"
    ],
    "correctAnswers": [
        "KB Writer [sn_hr_core.kb_writer]"
    ],
    "multipleChoice": false
}
,{
    "id": 56,
    "text": "In which module can the HR admin manage the HR email address for incoming HR requests?",
    "options": [
        "HR Administration > Email Administration",
        "System Properties > Email Setup",
        "System Properties > Email Properties",
        "HR Administration > Properties"
    ],
    "correctAnswers": [
        "HR Administration > Properties"
    ],
    "multipleChoice": false
}
,{
    "id": 57,
    "text": "In the base ServiceNow configuration, when are HR Cases created after a Bulk HR case request is submitted?",
    "options": [
        "Twice per day using a scheduled job",
        "Every 6 hours using a scheduled job",
        "Once a day using a scheduled job",
        "Immediately"
    ],
    "correctAnswers": [
        "Immediately"
    ],
    "multipleChoice": false
}
,{
    "id": 61,
    "text": "An employee in Chicago submits a request using the Employee Service Center. The HR Case template associated with the HR Service defines the Skills needed, but not an Assignment Group. Using base platform functionality, which of the following is the first step the system takes to assign the Case?",
    "options": [
      "An Assignment Rule creates a list of possible assignees",
      "A Matching Rule assigns the Case to a group",
      "The Case must be manually assigned",
      "An Assignment Rule assigns the Case to a group"
    ],
    "correctAnswers": [
      "An Assignment Rule assigns the Case to a group"
    ],
    "multipleChoice": false
  },
  {
    "id": 62,
    "text": "Which of the following are predefined Dashboards that are installed with HR Case Management? (Choose three.)",
    "options": [
      "Manager Dashboard",
      "Overview",
      "Workforce Administration Dashboard",
      "Onboarding Dashboard",
      "Employee Relations Cases Dashboard",
      "HR Case Dashboard"
    ],
    "correctAnswers": [
      "Manager Dashboard",
      "Overview",
      "HR Case Dashboard"
    ],
    "multipleChoice": true
  },
  {
    "id": 63,
    "text": "ServiceNow has identified 3 maturity levels for an HR customer. What are they?",
    "options": [
      "Managed Interactions, Self-Reliance, Smart Services",
      "Managed Interactions, Self-Help, Advanced Services",
      "No automation, Self-reliance, Smart Services",
      "Managed Interactions, Self-Reliance, Automated Services"
    ],
    "correctAnswers": [
      "Managed Interactions, Self-Reliance, Smart Services"
    ],
    "multipleChoice": false
  },
  {
    "id": 64,
    "text": "When using the Generate HR Profiles module to create HR Profiles, what field must be completed to ensure the employees are granted the appropriate Client Role?",
    "options": [
      "Employment type",
      "Profile type",
      "Employee type",
      "User type"
    ],
    "correctAnswers": [
      "Employment type"
    ],
    "multipleChoice": false
  },
  {
    "id": 65,
    "text": "What does the employee utilize when submitting a self-service request to the HR Organization?",
    "options": [
      "HR Catalog",
      "HR Skills",
      "HR Template",
      "HR Profile"
    ],
    "correctAnswers": [
      "HR Catalog"
    ],
    "multipleChoice": false
  },
  {
    "id": 66,
    "text": "What is the primary purpose of HR Topic Categories?",
    "options": [
      "They group common HR Services.",
      "They group common HR templates.",
      "They group common HR employees.",
      "They group common HR Catalog Items."
    ],
    "correctAnswers": [
      "They group common HR Services."
    ],
    "multipleChoice": false
  },
  {
    "id": 67,
    "text": "What are the benefits of the HR application being scoped? (Choose three.)",
    "options": [
      "Provides an additional layer of control over HR data.",
      "Allows HR Admins to configure the HR application.",
      "HR department has more autonomy to manage all aspects of HRSD.",
      "Allows the System Administrator complete control.",
      "HR department has full control of the global application."
    ],
    "correctAnswers": [
      "Provides an additional layer of control over HR data.",
      "Allows HR Admins to configure the HR application.",
      "HR department has more autonomy to manage all aspects of HRSD."
    ],
    "multipleChoice": true
  },
  {
    "id": 68,
    "text": "On the HR Case form, some HR Services have associated Response templates. What determines which HR Services have Response Templates?",
    "options": [
      "The HR Criteria on the HR Service",
      "The HR Criteria on the Response Template record",
      "The table and conditions on the Response Template record",
      "The User Criteria on the HR Service"
    ],
    "correctAnswers": [
      "The table and conditions on the Response Template record"
    ],
    "multipleChoice": false
  },
  {
    "id": 69,
    "text": "What is the preferred method of parsing in the Transform/Compose step of an event rule?",
    "options": [
      "Python",
      "Regex",
      "sed/awk",
      "JavaScript"
    ],
    "correctAnswers": [
      "Regex"
    ],
    "multipleChoice": false
  },
  {
    "id": 70,
    "text": "Which module provides a user-friendly interface for creating new HR Skills and assigning HR skills to members of the HR department?",
    "options": [
      "Skills Routing",
      "Skills Management",
      "Manage HR Skills",
      "Skills Definition"
    ],
    "correctAnswers": [
      "Manage HR Skills"
    ],
    "multipleChoice": false
  },
  {
    "id": 71,
    "text": "Which HR Role is typically granted to all HR Support staff, at a minimum?",
    "options": [
      "HR Admin [sn_hr_core.admin]",
      "HR Basic [sn_hr_core.basic]",
      "HR KB Writer [sn_hr_core.kb_writer]",
      "Document Management User [document_management_user]"
    ],
    "correctAnswers": [
      "HR Basic [sn_hr_core.basic]"
    ],
    "multipleChoice": false
  },
  {
    "id": 72,
    "text": "A user with only the HR Admin [sn_hr_core.admin] role can save and modify which copies of existing reports?",
    "options": [
      "All",
      "Global",
      "Group",
      "Personal"
    ],
    "correctAnswers": [
      "All"
    ],
    "multipleChoice": false
  },
  {
    "id": 73,
    "text": "What is the difference between a configuration and a customization?",
    "options": [
      "Configuration uses complex JavaScript while Customization involves field name changes and new buttons.",
      "There is no difference between Configuration and Customization.",
      "Customization uses the built-in tools in the platform while Configuration involves code changes.",
      "Configuration uses the built-in tools in the platform while Customization involves code changes."
    ],
    "correctAnswers": [
      "Configuration uses the built-in tools in the platform while Customization involves code changes."
    ],
    "multipleChoice": false
  },
  {
    "id": 74,
    "text": "The HR Case [sn_hr_core_case] table is an extension of what?",
    "options": [
      "Incident table",
      "Case table",
      "Task table",
      "Lifecycle Events table"
    ],
    "correctAnswers": [
      "Task table"
    ],
    "multipleChoice": false
  },
  {
    "id": 75,
    "text": "What role is required to assign scoped HR roles?",
    "options": [
      "HR Admin [sn_hr_core.admin]",
      "HR Manager [sn_hr_core.manager]",
      "LE Admin [sn_hr_le.admin]",
      "HR Basic [sn_hr_core.basic]"
    ],
    "correctAnswers": [
      "HR Admin [sn_hr_core.admin]"
    ],
    "multipleChoice": false
  },
  {
    "id": 76,
    "text": "The customer you are implementing has purchased HR Service Delivery Enterprise which includes Enterprise Onboarding and Transitions. Which plugin must be activated to utilize Enterprise Onboarding and Transitions?",
    "options": [
      "Human Resources Scoped App: Lifecycle Events [com.sn_hr_lifecycle_events]",
      "Employee Document Management [com.sn_employee_document_management]",
      "Human Resources Scoped App: Core [com.sn_hr_core]",
      "Employee Service Center [com.sn_hr_service_portal]"
    ],
    "correctAnswers": [
      "Human Resources Scoped App: Lifecycle Events [com.sn_hr_lifecycle_events]"
    ],
    "multipleChoice": false
  },
  {
    "id": 77,
    "text": "The customer you will be implementing for wants to utilize Now Mobile. What is the minimum HR SKU they may purchase that includes Now Mobile?",
    "options": [
      "HR Service Delivery Professional",
      "Now Mobile is a standalone solution",
      "HR Service Delivery Enterprise",
      "HR Service Delivery Standard"
    ],
    "correctAnswers": [
      "HR Service Delivery Professional"
    ],
    "multipleChoice": false
  },
  {
    "id": 78,
    "text": "If the HR Admin [sn_hr_core.admin] needs to develop within the HR application but cannot have the system Admin role, what additional role should be granted?",
    "options": [
      "HR Basic [sn_hr_core.basic]",
      "Scoped Developer [sn_hr_core.developer]",
      "Delegated Developer [delegated_developer]",
      "HR Manager [sn_hr_core.manager]"
    ],
    "correctAnswers": [
      "Delegated Developer [delegated_developer]"
    ],
    "multipleChoice": false
  },
  {
    "id": 79,
    "text": "When a Document Template is created from an HR Case, the name of the person who created the document is added to the name of the attachment. Why?",
    "options": [
      "It indicates who should sign the document",
      "It indicates who generated the document",
      "It indicates the Opened for user",
      "It indicates who the document is about"
    ],
    "correctAnswers": [
      "It indicates who generated the document"
    ],
    "multipleChoice": false
  },
  {
    "id": 80,
    "text": "Security tags can be applied to which of the following record types? (Choose three.)",
    "options": [
      "Incidents",
      "Problems",
      "Indicators and observables",
      "Response Tasks",
      "Security Incidents",
      "Change Orders",
      "CMDB Ci records"
    ],
    "correctAnswers": [
      "Indicators and observables",
      "Response Tasks",
      "Security Incidents"
    ],
    "multipleChoice": true
  },
    {
      "id": 81,
      "text": "Which field on the HR Service record defines which HR Catalog Item is associated with the Service?",
      "options": [
        "COE",
        "Topic Detail",
        "Template",
        "Record Producer"
      ],
      "correctAnswers": [
        "Record Producer"
      ],
      "multipleChoice": false
    },
    {
      "id": 82,
      "text": "What must be updated or loaded into the Customer's instance before importing the stories?",
      "options": [
        "Backlog",
        "Epics",
        "Products",
        "Groups"
      ],
      "correctAnswers": [
        "Products"
      ],
      "multipleChoice": false
    },
    {
      "id": 83,
      "text": "When the Lifecycle Events application is installed, the LE Admin role is granted to which role?",
      "options": [
        "HR Admin [sn_hr_core.admin]",
        "It is not added to other roles",
        "HR Basic [sn_hr_core.basic]",
        "HR Manager [sn_hr_core.manager]"
      ],
      "correctAnswers": [
        "HR Admin [sn_hr_core.admin]"
      ],
      "multipleChoice": false
    },
    {
      "id": 84,
      "text": "Which of the following applications is installed with the Human Resources Scoped App: Core plugin?",
      "options": [
        "Employee Service Center",
        "Employee Document Management",
        "Lifecycle Events",
        "HR Case Management"
      ],
      "correctAnswers": [
        "HR Case Management"
      ],
      "multipleChoice": false
    },
    {
      "id": 85,
      "text": "If you had little coding experience and were tasked with adding new pages to the customer's Employee Service Center, which Service Portal Configuration option would be best to complete the task?",
      "options": [
        "Page Editor",
        "Designer",
        "Widget Editor",
        "Branding Editor"
      ],
      "correctAnswers": [
        "Designer"
      ],
      "multipleChoice": false
    },
    {
      "id": 86,
      "text": "What provides a graphical interface to create survey categories, questions, configure the details, and publish the survey?",
      "options": [
        "Survey Designer",
        "Survey Workflow",
        "Survey Developer",
        "Survey Portal"
      ],
      "correctAnswers": [
        "Survey Designer"
      ],
      "multipleChoice": false
    },
    {
      "id": 87,
      "text": "HR Administrators can configure a personal copy of the HR Case Dashboard using which of the following buttons? (Choose two.)",
      "options": [
        "Change Layout",
        "Delete Content",
        "Modify Layout",
        "Add Content",
        "Add Layout"
      ],
      "correctAnswers": [
        "Change Layout",
        "Add Content"
      ],
      "multipleChoice": true
    },
    {
      "id": 88,
      "text": "What determines when the HR Chat queue is available?",
      "options": [
        "Schedule field on the HR Profile",
        "Schedule field on the User record",
        "HR Chat is always available",
        "Schedule field on the Queues record"
      ],
      "correctAnswers": [
        "Schedule field on the Queues record"
      ],
      "multipleChoice": false
    },
    {
      "id": 89,
      "text": "What should you consider before helping customers automate different processes?",
      "options": [
        "Customer's willingness to change",
        "Understand expected benefits",
        "Understand internal processes",
        "Understand baseline workflow"
      ],
      "correctAnswers": [
        "Understand expected benefits"
      ],
      "multipleChoice": false
    },
    {
      "id": 90,
      "text": "If the HR Administrator group has been tasked with collecting Performance Analytics data, what additional role should be granted to the group?",
      "options": [
        "Performance Analytics Data Collector [pa_data_collector]",
        "Performance Analytics Administrator [pa_admin]",
        "Performance Analytics Threshold Admin [pa_threshold_admin]",
        "System Administrator [admin]"
      ],
      "correctAnswers": [
        "Performance Analytics Data Collector [pa_data_collector]"
      ],
      "multipleChoice": false
    },
    {
      "id": 91,
      "text": "If the HR Administrator has only been given the HR Admin [sn_hr_core.admin] role, what additional role is necessary for them to configure all aspects of the Employee Document Management application?",
      "options": [
        "Employee Document Management Writer[sn_hr_ef.document_writer]",
        "Employee Document Management Reader[sn_hr_ef.document_reader]",
        "EF Admin [sn_hr_ef.admin] role",
        "No additional roles are needed"
      ],
      "correctAnswers": [
        "EF Admin [sn_hr_ef.admin] role"
      ],
      "multipleChoice": false
    },
    {
      "id": 92,
      "text": "If both the Knowledge Base and the KB article have no \"Can Read\" User Criteria, what role is required to read the article?",
      "options": [
        "HR Basic [sn_hr_core.basic]",
        "HR Manager [sn_hr_core.manager]",
        "No role is needed",
        "HR Admin [sn_hr_core.admin]"
      ],
      "correctAnswers": [
        "No role is needed"
      ],
      "multipleChoice": false
    },
    {
      "id": 93,
      "text": "Using the base HRSD configuration with no integrations, when the subject person electronically signs an HR document or PDF document, the signature is saved as what?",
      "options": [
        "a digital signature",
        "a picture of the signature that is added to the document",
        "a digital key",
        "a digital certificate"
      ],
      "correctAnswers": [
        "a picture of the signature that is added to the document"
      ],
      "multipleChoice": false
    },
    {
      "id": 94,
      "text": "If you select Data Type Numeric Scale on the Assessment Metric (Survey Question) form there is a Scale definition field made visible. What does it mean to select High for the Scale definition?",
      "options": [
        "It means a high score is bad",
        "It means a high score is good",
        "There is no option for Scale definition",
        "There is no option for High"
      ],
      "correctAnswers": [
        "It means a high score is good"
      ],
      "multipleChoice": false
    },
    {
      "id": 95,
      "text": "In which Application Scope is the Lifecycle Events table contained?",
      "options": [
        "Human Resources: Core",
        "Human Resources: Lifecycle Events",
        "Human Resources: Integrations",
        "Human Resources: Service Portal"
      ],
      "correctAnswers": [
        "Human Resources: Lifecycle Events"
      ],
      "multipleChoice": false
    },
    {
      "id": 96,
      "text": "What settings define and track cross-scope access to applications?",
      "options": [
        "Access Controls",
        "Restricted Caller Access",
        "Access Restrictions",
        "Business Rules"
      ],
      "correctAnswers": [
        "Restricted Caller Access"
      ],
      "multipleChoice": false
    },
    {
      "id": 97,
      "text": "What determines which Knowledge bases, Knowledge articles, and Service Catalog Items an employee can view?",
      "options": [
        "Filters",
        "User Groups",
        "HR Criteria",
        "User Criteria"
      ],
      "correctAnswers": [
        "User Criteria"
      ],
      "multipleChoice": false
    },
    {
      "id": 98,
      "text": "The Template field referenced on the HR Service record is used to do what?",
      "options": [
        "Populate fields on the HR Case record",
        "Filter who can access the HR Service",
        "Create pre-configured responses HR professionals can use",
        "Make the HR Service accessible on the Employee Service Center"
      ],
      "correctAnswers": [
        "Populate fields on the HR Case record"
      ],
      "multipleChoice": false
    },
    {
      "id": 99,
      "text": "When is the Record producer field needed on the HR Service record?",
      "options": [
        "When the HR professional will be creating Cases on behalf of the employee",
        "When you want the employee to request the HR Service from the Employee Service Center",
        "It is always a required field",
        "There is no Record producer held on the HR Service record"
      ],
      "correctAnswers": [
        "When you want the employee to request the HR Service from the Employee Service Center"
      ],
      "multipleChoice": false
    },
    {
      "id": 100,
      "text": "What are the major HR Service Catalog components? (Choose four.)",
      "options": [
        "HR Template",
        "Assignment Group",
        "HR Catalog Item",
        "Matching Rule",
        "Record Producer",
        "HR Service",
        "HR Profile"
      ],
      "correctAnswers": [
        "HR Template",
        "HR Catalog Item",
        "Record Producer",
        "HR Service"
      ],
      "multipleChoice": true
    },
    {
      "id": 101,
      "text": "How can HR Tasks be marked as optional?",
      "options": [
        "Set Optional to True on the HR Task Template",
        "Set Optional to True on the HR Task form",
        "Select the Optional box on the HR Case form",
        "No way to mark HR Tasks as optional"
      ],
      "correctAnswers": [
        "Set Optional to True on the HR Task Template"
      ],
      "multipleChoice": false
    }
  ,{
    "id": 102,
    "text": "Which of the following is the key factor in determining the implementation timeline?",
    "options": [
      "Configuration complexity",
      "Types of integrations",
      "Customer location",
      "Customer business type"
    ],
    "correctAnswers": [
      "Configuration complexity"
    ],
    "multipleChoice": false
  },
  {
    "id": 103,
    "text": "Beginning with the Orlando release, which module allows HR Administrators to define which groups may access the various COEs or HR Services without needing to edit or create new ACL records?",
    "options": [
      "COE Properties",
      "COE ACL Configuration",
      "Access Policies",
      "COE Policy groups"
    ],
    "correctAnswers": [
      "COE ACL Configuration"
    ],
    "multipleChoice": false
  },
  {
    "id": 104,
    "text": "A customer using Lifecycle Events Enterprise has documented a large offboarding Lifecycle Event that includes many steps. Many of the steps, including approvals, must be completed in a specific order. Which of these is the best method to use to ensure the activities are triggered in the appropriate order?",
    "options": [
      "Create a new lifecycle event for each of the dependent items",
      "Create separate trigger conditions for each of the dependent activities",
      "Create activity containers for the dependent items",
      "Create separate activity sets for each of the dependent activities"
    ],
    "correctAnswers": [
      "Create activity containers for the dependent items"
    ],
    "multipleChoice": false
  },
  {
    "id": 105,
    "text": "What kinds of records can be created using HR Service Activities? (Choose two.)",
    "options": [
      "Workflows",
      "Approvals",
      "HR Templates",
      "Tasks"
    ],
    "correctAnswers": [
      "Approvals",
      "Tasks"
    ],
    "multipleChoice": true
  },
  {
    "id": 106,
    "text": "Which HR Integrations module is used to document the URL, basic integration properties, and inbound and outbound username and password information for a third-party application?",
    "options": [
      "HR Integration Service",
      "HR Schema Mapping",
      "Sources",
      "HR Webservices"
    ],
    "correctAnswers": [
      "Sources"
    ],
    "multipleChoice": false
  },
  {
    "id": 107,
    "text": "How can a PDF document on an active HR case be generated? (Choose two.)",
    "options": [
      "Autogenerated by system configuration",
      "By the Subject Person's manager",
      "By the employee",
      "By the Assigned to person"
    ],
    "correctAnswers": [
      "By the Subject Person's manager",
      "By the Assigned to person"
    ],
    "multipleChoice": true
  },
  {
    "id": 108,
    "text": "After configuration on a Lifecycle Event is complete, what additional configuration is needed to initiate the LE process for an employee?",
    "options": [
      "None. The LE will automatically trigger based on its configuration",
      "An Event is needed to initiate the LE process",
      "A Scheduled Job is needed to initiate the LE process",
      "An HR Service is needed to initiate the LE process"
    ],
    "correctAnswers": [
      "An HR Service is needed to initiate the LE process"
    ],
    "multipleChoice": false
  },
  {
    "id": 109,
    "text": "In Employee Document Management, which of the following statements is true for legal holds?",
    "options": [
      "Legal Holds are permanent and cannot be removed",
      "Legal Holds may be placed on a group of HR profiles",
      "Legal Holds may be placed on either a Document Type or an individual employee's HR Profile",
      "Legal Holds may be manually placed on individual employee documents"
    ],
    "correctAnswers": [
      "Legal Holds may be placed on either a Document Type or an individual employee's HR Profile"
    ],
    "multipleChoice": false
  },
  {
    "id": 110,
    "text": "Each HR service created in _______ has a corresponding transform map job.",
    "options": [
      "HR Transform Maps",
      "HR Integration Service",
      "HR Service Mapping",
      "HR Schema Mapping"
    ],
    "correctAnswers": [
      "HR Integration Service"
    ],
    "multipleChoice": false
  },
  {
    "id": 111,
    "text": "If the Workflow editor is utilized for a Lifecycle Event, how does the system know when a task or approval should be triggered?",
    "options": [
      "Activities are manually triggered",
      "The activity set trigger condition determines when it is triggered",
      "Activities are automatically triggered on specific dates",
      "The Activity trigger condition determines when it is triggered"
    ],
    "correctAnswers": [
      "The activity set trigger condition determines when it is triggered"
    ],
    "multipleChoice": false
  },
  {
    "id": 112,
    "text": "What Primary Security aspects are focused on for the HR application? (Choose three.)",
    "options": [
      "Password Security",
      "ACL Security",
      "Contextual Security",
      "Physical Security",
      "Roles and Groups",
      "Platform Access"
    ],
    "correctAnswers": [
      "Contextual Security",
      "Roles and Groups",
      "Platform Access"
    ],
    "multipleChoice": true
  },
  {
    "id": 113,
    "text": "A customer using Lifecycle Events Enterprise has configured their onboarding process. Now, management has tasked the HR Admin with creating a way to back out onboarding work in case the new employee decides not to join the company. Which of these is the best method to use to reverse work already performed as part of this Lifecycle Event?",
    "options": [
      "Check the 'allow blackout' box on each of the activities",
      "Configure a new Lifecycle Event with the necessary activities",
      "Configure the rescind activity set with the necessary activities",
      "Check the 'allow blackout' box on each of the activity sets"
    ],
    "correctAnswers": [
      "Configure the rescind activity set with the necessary activities"
    ],
    "multipleChoice": false
  },
  {
    "id": 114,
    "text": "What happens when you assign an Entity Type to a Control Objective?",
    "options": [
      "An assessment is automatically generated to test each Entity listed in the Entity Type",
      "A policy is created automatically for every Entity listed in the Entity Type",
      "A control is automatically generated for every Entity listed in the Entity Type",
      "The Entity Type presents a compliance score and controls tied to it"
    ],
    "correctAnswers": [
      "A control is automatically generated for every Entity listed in the Entity Type"
    ],
    "multipleChoice": false
  },
  {
    "id": 115,
    "text": "If an HR Document must be manually generated for an HR Case, who is able to generate the document from the Case record?",
    "options": [
      "Only an HR Admin can generate Documents from a Case",
      "Any HR professional can generate the Document, even if they are not assigned to the Case",
      "Only the assigned to person can manually generate Documents from a Case",
      "Only the Manager of the assignment group can generate the Document"
    ],
    "correctAnswers": [
      "Only the assigned to person can manually generate Documents from a Case"
    ],
    "multipleChoice": false
  },
  {
    "id": 116,
    "text": "What role is required at a minimum, to access the Lifecycle Events Cases View Dashboard?",
    "options": [
      "HR Basic [sn_hr_core basic]",
      "HR Case Reader [sn_hr_le.case_reader]",
      "LE Admin [sn_hr_le.admin]",
      "HR Admin [sn_hr_core.admin]"
    ],
    "correctAnswers": [
      "HR Case Reader [sn_hr_le.case_reader]"
    ],
    "multipleChoice": false
  },
  {
    "id": 117,
    "text": "Using the Lifecycle Event Enterprise application, tasks may only be assigned to... (Choose the most appropriate answer.)",
    "options": [
      "Only users with a Client Role",
      "Only users with an HR role",
      "HR Case Workers. Employees, users in other groups",
      "Only users with the Manager role"
    ],
    "correctAnswers": [
      "HR Case Workers. Employees, users in other groups"
    ],
    "multipleChoice": false
  },
  {
    "id": 118,
    "text": "What identifies data from HRSD to push to a third-party HR application?",
    "options": [
      "HR Inbound Schema Mapping",
      "HR Outbound Schema Mapping",
      "HR Webservices",
      "HR Service Mapping"
    ],
    "correctAnswers": [
      "HR Outbound Schema Mapping"
    ],
    "multipleChoice": false
  },
  {
    "id": 119,
    "text": "When configuring the Onboarding Lifecycle Event, the HR Admin did not select an Audience for the 'Select a Desk' task. If a remote employee is being onboarded. how does the system handle this task?",
    "options": [
      "The Lifecycle Event rescind process will be triggered",
      "The activity will be skipped",
      "The Lifecycle Event will be canceled",
      "The activity will be triggered and must be completed manually"
    ],
    "correctAnswers": [
      "The activity will be skipped"
    ],
    "multipleChoice": false
  },{
    "id": 120,
    "text": "When configuring a record on the COE ACL Configuration module how can you apply the conditions to all HR services for the COE?",
    "options": [
      "Add a filter condition for each HR service",
      "Select the Applies to all services box",
      "Write a new ACL record for each HR service",
      "Select each HR service using the Services list"
    ],
    "correctAnswers": [
      "Select the Applies to all services box"
    ],
    "multipleChoice": false
  },
  {
    "id": 121,
    "text": "If you have both Admin [admin] and HR Admin [sn_hr_core.admin] roles and want to configure an Access Control Rule for the HR Payroll table, which of the following must first be done?",
    "options": [
      "Manually add the Delegated Developer role to your User record",
      "Manually add the security_admin role to your User record",
      "From the User dropdown in the banner, elevate your role to delegated_developer",
      "From the User dropdown in the banner, elevate your role to security_admin"
    ],
    "correctAnswers": [
      "From the User dropdown in the banner, elevate your role to security_admin"
    ],
    "multipleChoice": false
  },
  {
    "id": 122,
    "text": "Scenario: Alex is a member of the HR Tier 1 group which grants him the HR Basic [sn_hr_core.basic] role. He is going to be out of the office for a few days and wants to use granular delegation to allow his friend Amy to complete his tasks. Amy is not yet a member of any HR groups, but hopes to transfer into HR one day. Will granular delegation work for this purpose?",
    "options": [
      "Yes. Granular delegation will automatically grant the necessary roles",
      "Yes. Granular delegation will automatically add Amy to the HR Tier 1 group where she will inherit the role.",
      "Partially. Granular delegation will allow Amy access to the HR Tasks, but not to the HR Case itself.",
      "No. Granular delegation does not change a delegate's access to records."
    ],
    "correctAnswers": [
      "No. Granular delegation does not change a delegate's access to records."
    ],
    "multipleChoice": false
  },
  {
    "id": 123,
    "text": "Lifecycle Events includes an activity set that can be used to cancel and revert work done in a lifecycle event case. What is this process called?",
    "options": [
      "Reverse",
      "Cancel",
      "Repeal",
      "Rescind"
    ],
    "correctAnswers": [
      "Rescind"
    ],
    "multipleChoice": false
  },
  {
    "id": 124,
    "text": "When configuring a Lifecycle Event, which of the following is used to define the relationships between fields in various tables?",
    "options": [
      "Trigger conditions",
      "LE Properties",
      "Activity Field Mapping",
      "HR Templates"
    ],
    "correctAnswers": [
      "Activity Field Mapping"
    ],
    "multipleChoice": false
  },
  {
    "id": 125,
    "text": "What are key relationships between Change and Release Management? (Choose three.)",
    "options": [
      "Release management application is required, to use the Change management application",
      "Change includes planning and approvals; Release includes building, testing and execution of changes",
      "A Release can contain one or more Changes",
      "A Change can contain one or more Releases",
      "Change management provides governance, which includes Release management"
    ],
    "correctAnswers": [
      "Change includes planning and approvals; Release includes building, testing and execution of changes",
      "A Release can contain one or more Changes",
      "Change management provides governance, which includes Release management"
    ],
    "multipleChoice": true
  },
  {
    "id": 126,
    "text": "What is the purpose of Journey designer?",
    "options": [
      "It tracks the progress of Lifecycle Events and onboarding cases using the dashboards.",
      "It creates templates for plan and to-do tasks that managers, employees, and mentors can access.",
      "It manages the dependencies of activities within an activity set.",
      "It combines Lifecycle Event cases and Journey Accelerator action plans."
    ],
    "correctAnswers": [
      "It combines Lifecycle Event cases and Journey Accelerator action plans."
    ],
    "multipleChoice": false
  },
  {
    "id": 127,
    "text": "What are the functions of a journey template owner? (Choose three.)",
    "options": [
      "Manage the order and flow of the journey stages and tasks",
      "Create task templates for their audience in a simple, user-friendly experience",
      "Add owners and approvers to journey configurations",
      "Change only the task templates that they own",
      "Maintain oversight of journey templates and approval flows"
    ],
    "correctAnswers": [
      "Create task templates for their audience in a simple, user-friendly experience",
      "Add owners and approvers to journey configurations",
      "Change only the task templates that they own"
    ],
    "multipleChoice": true
  },
  {
    "id": 128,
    "text": "What variable type is included to configure the HTML document template?",
    "options": [
      "Customized Variable",
      "Label Variable",
      "Multi Row Variable",
      "Masked Variable"
    ],
    "correctAnswers": [
      "Customized Variable"
    ],
    "multipleChoice": false
  },
  {
    "id": 129,
    "text": "Which plugin is recommended when upgrading from the global version of HR to the scoped version?",
    "options": [
      "Human Resources Scoped App: Employee Relations [com.sn_hr_employee_relations]",
      "Human Resources Scoped App: Data Migration [com.sn_hr_migration]",
      "Human Resources Scoped App: Lifecycle Events [com.sn_hr_lifecycle_events]",
      "Human Resources Scoped App: Integrations [com.sn_hr_integrations]"
    ],
    "correctAnswers": [
      "Human Resources Scoped App: Data Migration [com.sn_hr_migration]"
    ],
    "multipleChoice": false
  },
  {
    "id": 130,
    "text": "Which portal allows employees to submit ethical violation complaints?",
    "options": [
      "Lifecycle Events",
      "HR Performance Analytics",
      "Employee Center",
      "HR Integrations"
    ],
    "correctAnswers": [
      "Employee Center"
    ],
    "multipleChoice": false
  },
  {
    "id": 131,
    "text": "Which application delivers employees an omni-channel learning experience to enable timely access to the correct learning?",
    "options": [
      "Document Templates",
      "Manager Hub",
      "Employee Relations",
      "Learning Posts"
    ],
    "correctAnswers": [
      "Learning Posts"
    ],
    "multipleChoice": false
  },
  {
    "id": 132,
    "text": "Which content delivery feature will allow a user to deliver messages to employees and invite them to a meeting where survey results will be shared?",
    "options": [
      "Campaigns",
      "Journey Accelerator",
      "Scheduling",
      "Listening Posts"
    ],
    "correctAnswers": [
      "Campaigns"
    ],
    "multipleChoice": false
  },
  {
    "id": 133,
    "text": "With the I18N: Knowledge Management Internationalization Plugin v2 enabled, how are translated Knowledge articles associated with each other so that the user is presented with the article in the selected language?",
    "options": [
      "Article Versions related list",
      "Translated Versions related list",
      "Localization list",
      "Dynamic translations list"
    ],
    "correctAnswers": [
      "Translated Versions related list"
    ],
    "multipleChoice": false
  },
  {
    "id": 134,
    "text": "What happens when a cross-scope attempt is executed?",
    "options": [
      "The record is automatically added to the Restricted Caller Access Privileges table",
      "The record is automatically set to caller tracking",
      "The Read record status is set to requested before the system will allow the script to run",
      "The record status is automatically set to allowed"
    ],
    "correctAnswers": [
      "The record is automatically added to the Restricted Caller Access Privileges table"
    ],
    "multipleChoice": false
  },
  {
    "id": 135,
    "text": "What are the configurations for the activity set that is triggered by a date field to not trigger if the date field is empty?",
    "options": [
      "All activity sets must trigger",
      "Enable Rescind link",
      "Add a script to the activity set definition",
      "Select the ignore empty date box."
    ],
    "correctAnswers": [
      "Select the ignore empty date box."
    ],
    "multipleChoice": false
  },
  {
    "id": 136,
    "text": "What does the template field referenced on the HR Service record do?",
    "options": [
      "Populate fields on a Journey task",
      "Populate responses for HR agents",
      "Populate fields on the HR Profile",
      "Populate fields on the HR Case record"
    ],
    "correctAnswers": [
      "Populate fields on the HR Case record"
    ],
    "multipleChoice": false
  },
  {
    "id": 137,
    "text": "Which application is used to send prompts to managers and employees in their flow of work?",
    "options": [
      "HR Performance Analytics",
      "Proactive Prompts",
      "Lifecycle Events",
      "HR integrations"
    ],
    "correctAnswers": [
      "Proactive Prompts"
    ],
    "multipleChoice": false
  },
  {
    "id": 138,
    "text": "When using Agent workspace for Case Management, how can the maximum default size of 30MB for an Employee Document be changed?",
    "options": [
      "Using the maximum file upload size in megabytes Security policy",
      "Using the file upload size system property",
      "Using the maximum file upload size in megabytes field in the Employee Document Properties",
      "Using the maximum file upload size business rule"
    ],
    "correctAnswers": [
      "Using the file upload size system property"
    ],
    "multipleChoice": false
  }
    
]
export default HRSD