const CSDM4 = [
{
  id: 1,
  text: "A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. CI Class Manager: -Managed by Group = Enterprise IT Services Technical Service Offering: -Managed by Group = Windows Support -Change Group = Change Management Team What would be the Managed By Group for Cls from this class based on the configured values?",
  options: [
    "Enterprise IT Services",
    "Change Management Team",
    "Windows Support"
  ],
  correctAnswers: [
    "Windows Support"
  ],
  multipleChoice: false
},
{
  id: 2,
  text: "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
  options: [
    "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
    "Review both locations, update Cls with the correct location and delete the duplicate location",
    "Keep both locations as either can be used as a valid alternate location",
    "Use the Duplicate CI Remediator to merge the duplicate location records"
  ],
  correctAnswers: [
    "Review both locations, update Cls with the correct location and delete the duplicate location"
  ],
  multipleChoice: false
},
{
  id: 3,
  text: "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
  options: [
    "Ensure that the business rule to update Asset fields on change on the CI table is active",
    "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
    "Ensure that the business rule to update CI fields on change on the asset table is active",
    "Ensure one-to-one physical mapping between Asset and CI"
  ],
  correctAnswers: [
    "Ensure that the business rule to update Asset fields on change on the CI table is active",
    "Ensure that the business rule to update CI fields on change on the asset table is active"
  ],
  multipleChoice: true
},
{
  id: 4,
  text: "A Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Change Request form is automatically populated after a Cl is selected that references an appropriate change group?",
  options: [
    "Managed by Group",
    "Change Group",
    "Assignment Group",
    "Support Group",
    "Assigned to"
  ],
  correctAnswers: [
    "Assignment Group"
  ],
  multipleChoice: false
},
{
  id: 5,
  text: "A Windows administration team wants a grouping of Cls using CMDB groups. Which methods can be used?",
  options: [
    "Tag-based queries",
    "Encoded queries",
    "Scripted queries",
    "Saved queries"
  ],
  correctAnswers: [
    "Tag-based queries",
    "Encoded queries"
  ],
  multipleChoice: true
},
{
  id: 6,
  text: "A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class. How are these rules utilized by the IRE?",
  options: [
    "To narrow the scope of Cls included in the identification process",
    "To reduce the data ingested into the CMDB",
    "To reconcile specific attributes based on data sources"
  ],
  correctAnswers: [
    "To narrow the scope of Cls included in the identification process"
  ],
  multipleChoice: false
},
{
  id: 7,
  text: "A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. Which action does CSDM recommend to meet this goal?",
  options: [
    "Work with the Database administration team to classify the data on each database that holds patient information, and then use Relationships to map that back to the Business Application.",
    "Create fields on the Business Application record to mark the Business Application as containing patient information, and then ask the Business Application owner to mark the application as having patient information or not.",
    "Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner."
  ],
  correctAnswers: [
    "Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner."
  ],
  multipleChoice: false
},
  {
  id: 8,
  text: "A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?",
  options: [
    "Promotion",
    "Verification",
    "Attestation",
    "Certification"
  ],
  correctAnswers: ["Attestation"],
  multipleChoice: false
},
{
  id: 9,
  text: "A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB tables to prevent technical debt. Which is the starting prefix for all custom CMDB tables?",
  options: [
    "cmdb_ci",
    "u_cmdb_ci",
    "u_ci_cmdb",
    "ci_cmdb"
  ],
  correctAnswers: ["u_cmdb_ci"],
  multipleChoice: false
},
{
  id: 10,
  text: "ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. What are key advantages it provides to Event Management?",
  options: [
    "Mapped services provide visibility to users consuming the service",
    "Binding of alerts to specific Cls",
    "Correlation of alerts to knowledge base articles",
    "Mapped services provide visibility to the business impact of an alert"
  ],
  correctAnswers: [
    "Binding of alerts to specific Cls"
  ],
  multipleChoice: false
},
{
  id: 11,
  text: "A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class?",
  options: [
    "API Integrations",
    "IRE Application",
    "CI Class Manager",
    "Cl Identifiers module"
  ],
  correctAnswers: [
    "CI Class Manager",
    "Cl Identifiers module"
  ],
  multipleChoice: true
},
{
  id: 12,
  text: "A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans. What CSDM domain should the inventory management team map the catalog item to?",
  options: [
    "Design and Planning (Design)",
    "Build and Integration (Build)",
    "Service Delivery (Manage Technical Service)",
    "Foundation",
    "Service Consumption (Sell/Consume)"
  ],
  correctAnswers: ["Service Consumption (Sell/Consume)"],
  multipleChoice: false
},
{
  id: 13,
  text: "An Enterprise Architect of a financial services company is working across the enterprise and wants to track their capabilities. Which CSDM 5 domain is used?",
  options: [
    "Foundation",
    "Build and Integration (Build)",
    "Design and Planning (Design)",
    "Service Consumption (Sell/Consume)",
    "Service Delivery (Manage Technical)"
  ],
  correctAnswers: ["Design and Planning (Design)"],
  multipleChoice: false
},
{
  id: 14,
  text: "The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. Which field is used to calculate the duration of this metric?",
  options: [
    "Last modified on (last_modified)",
    "Created (sys_created_on)",
    "Updated (sys_updated_on)",
    "First discovered (first_discovered)",
    "Most recent discovery (last_discovery)"
  ],
  correctAnswers: ["Most recent discovery (last_discovery)"],
  multipleChoice: false
},
{
  id: 15,
  text: "A CMDB Architect intends to populate the CMDB using the CSDM guidance. Which key stakeholders from the organization should be involved in decisions regarding population of the CMDB using the CSDM Crawl Stage?",
  options: [
    "Business Service Manager, Technology Service Owner",
    "Application Owner, Application Service Owner",
    "Customer Service Manager, Infrastructure Manager"
  ],
  correctAnswers: [
    "Business Service Manager, Technology Service Owner"
  ],
  multipleChoice: false
},
{
  id: 16,
  text: "A CMDB Administrator has taken over management of a ServiceNow instance and has determined there are multiple deficiencies in the CMDB. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks. How can Playbooks assist the Administrator in resolving these issues?",
  options: [
    "Playbooks can automatically track common CMDB issues and output metrics.",
    "Playbooks can be installed in the instance to automatically fix issues.",
    "Playbooks can help analyze and fix issues."
  ],
  correctAnswers: [
    "Playbooks can help analyze and fix issues."
  ],
  multipleChoice: false
},
{
  id: 17,
  text: "What is the relationship between an application and a server?",
  options: [
    "Application > Uses :: Used by > Server",
    "Application > Runs :: Runs On > Server",
    "Application > Runs on :: Runs > Server",
    "Application > Used by :: Uses > Server"
  ],
  correctAnswers: [
    "Application > Runs :: Runs On > Server"
  ],
  multipleChoice: false
},
{
  id: 18,
  text: "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware Cls. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all Cls?",
  options: [
    "Create a new CI class specifically for non-discoverable attributes",
    "Use the CMDB Reconciliation Engine to update the attributes",
    "Use a scheduled data import to update the attributes from an external source"
  ],
  correctAnswers: [
    "Use a scheduled data import to update the attributes from an external source"
  ],
  multipleChoice: false
},
{
  id: 19,
  text: "A Service Desk Manager wants to leverage the Unified Map to find active incidents or problems for a selected CI. Which panel will give the manager visibility and details?",
  options: [
    "Overview",
    "Application services",
    "Related items",
    "Attributes"
  ],
  correctAnswers: ["Related items"],
  multipleChoice: false
},
{
  id: 20,
  text: "A Service Portfolio Manager wants to know what Application Services their Business Service Offerings depend on. What stage of CSDM would map this relationship?",
  options: [
    "Fly",
    "Crawl",
    "Foundation",
    "Run",
    "Walk"
  ],
  correctAnswers: ["Walk"],
  multipleChoice: false
},
{
  id: 21,
  text: "A CMDB Administrator needs to track which Cls and CI classes are missing key data. Which CMDB Health Dashboard scorecard supports tracking this requirement?",
  options: [
    "Compliance",
    "Correctness",
    "Completeness"
  ],
  correctAnswers: ["Completeness"],
  multipleChoice: false
},
{
  id: 22,
  text: "During a CMDB implementation, a team member is tasked with ensuring the accuracy and completeness of Cl data. This person is also responsible for maintaining data quality and resolving discrepancies. Which role is responsible for these tasks?",
  options: [
    "Service Owner",
    "CMDB Architect",
    "Configuration Manager",
    "IT Asset Manager"
  ],
  correctAnswers: ["Configuration Manager"],
  multipleChoice: false
},
{
  id: 23,
  text: "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
  options: [
    "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
    "Keep both locations as either can be used as a valid alternate location",
    "Review both locations, update Cls with the correct location and delete the duplicate location",
    "Use the Duplicate CI Remediator to merge the duplicate location records"
  ],
  correctAnswers: [
    "Review both locations, update Cls with the correct location and delete the duplicate location"
  ],
  multipleChoice: false
},
{
  id: 24,
  text: "A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise?",
  options: [
    "Application Service Owner",
    "Application Owner",
    "Enterprise Architect",
    "Business Relationship Manager"
  ],
  correctAnswers: [
    "Enterprise Architect"
  ],
  multipleChoice: false
},
{
  id: 25,
  text: "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
  options: [
    "CMBD 360/Multisource is a platform product that can be used immediately.",
    "ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules.",
    "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."
  ],
  correctAnswers: [
    "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."
  ],
  multipleChoice: false
},
{
  id: 26,
  text: "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb_ci_app_server]) and the Application table ([cmdb_ci_appl])?",
  options: [
    "Many-to-one",
    "Many-to-many",
    "One-to-many",
    "One-to-one"
  ],
  correctAnswers: [
    "Many-to-many"
  ],
  multipleChoice: false
},
{
  id: 27,
  text: "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
  options: [
    "Use the CSDM Data Foundations Dashboard",
    "Use the default configured CMDB Health Dashboard",
    "Start the ServiceNow Health Scan"
  ],
  correctAnswers: [
    "Use the CSDM Data Foundations Dashboard"
  ],
  multipleChoice: false
},
{
  id: 64,
  text: "What is the difference between Data Certification and Attestation policies when managing a CI?",
  options: [
    "Attestation can be scheduled, while Data Certification cannot be scheduled.",
    "Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the Cl still exists.",
    "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI.",
    "Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual."
  ],
  correctAnswers: [
    "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI."
  ],
  multipleChoice: false
},
{
  id: 28,
  text: "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
  options: [
    "Enterprise Architect",
    "Application Service Owners",
    "Technology Service Owners"
  ],
  correctAnswers: [
    "Technology Service Owners"
  ],
  multipleChoice: false
},
{
  id: 29,
  text: "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
  options: [
    "Allows for additional stratification of Technical team's support structure along the lines of OLAs and commitments",
    "Improves the implementation velocity of APM Foundation for future business application rationalization",
    "Enables impact assessments for incident, problem, and change on Business Services"
  ],
  correctAnswers: [
    "Enables impact assessments for incident, problem, and change on Business Services"
  ],
  multipleChoice: false
},
{
  id: 30,
  text: "A CMDB Administrator would like to minimize stale Cls in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
  options: [
    "Completeness",
    "Correctness",
    "Compliance"
  ],
  correctAnswers: [
    "Correctness"
  ],
  multipleChoice: false
},
{
  id: 31,
  text: "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on a Incident form is automatically populated after a Cl is selected that references an appropriate support group?",
  options: [
    "Assignment Group",
    "Support Group",
    "Approval Group",
    "Managed by Group",
    "Change Group"
  ],
  correctAnswers: [
    "Assignment Group"
  ],
  multipleChoice: false
},
  {
  id: 32,
  text: "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
  options: [
    "AlI",
    "Child",
    "Added",
    "Derived"
  ],
  correctAnswers: ["Added"],
  multipleChoice: false
},
{
  id: 33
  text: "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class which consists of a total of 60,000 servers in the CMDB. . For the Duplicate metric, it shows Healthy Cls/Evaluated as 59,000/60,000. . For the Orphan metric, it shows Healthy Cls/Evaluated as 45,000/50,000. Which configuration explains the difference in the scope of Server Cls (60,000 vs. 50,000) evaluated between the two metrics?",
  options: [
    "The Orphan metric has a CMDB Group configured for the Server class.",
    "The Duplicate metric has a Health Inclusion rule configured for the Server class.",
    "The Orphan metric has a Health Inclusion rule configured for the Server class.",
    "The Duplicate metric has a CMDB Group configured for the Server class."
  ],
  correctAnswers: [
    "The Orphan metric has a Health Inclusion rule configured for the Server class."
  ],
  multipleChoice: false
},
{
  id: 34,
  text: "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to determine the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
  options: [
    "Service Offerings by Department or Location",
    "Affected Cl [task_ci] related list",
    "Application Service environment attribute",
    "Incident history of similar Cls"
  ],
  correctAnswers: ["Affected Cl [task_ci] related list"],
  multipleChoice: false
},
{
  id: 35,
  text: "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
  options: [
    "Create a business rule",
    "Create a scheduled job",
    "Create an archive policy"
  ],
  correctAnswers: ["Create an archive policy"],
  multipleChoice: false
},
{
  id: 36,
  text: "The CMDB Administrator has set-up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field. Given the above data in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI?",
  options: [
    "2.048 MB",
    "4.096 MB",
    "8.192 MB"
  ],
  correctAnswers: ["8.192 MB"],
  multipleChoice: false
},
{
  id: 37,
  text: "A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
  options: [
    "The upgrade stops and reports an error.",
    "A skipped change is created and no change is made to the script transform definition.",
    "The Service Graph Connector upgrade refuses to start."
  ],
  correctAnswers: [
    "A skipped change is created and no change is made to the script transform definition."
  ],
  multipleChoice: false
},
{
  id: 38,
  text: "With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard?",
  options: [
    "Most Reported",
    "Last Created",
    "Last Updated",
    "Smallest Value"
  ],
  correctAnswers: [
    "Most Reported",
    "Last Updated"
  ],
  multipleChoice: true
},
{
  id: 39,
  text: "Configuration Management needs to ensure data quality for all Cls in the CMDB. What areas of data quality for Cls are in the CMDB Health Dashboard?",
  options: [
    "Downgraded Cls",
    "Duplicate Cls",
    "Missing Cls",
    "Stale Cls",
    "Upgraded Cls"
  ],
  correctAnswers: [
    "Duplicate Cls",
    "Stale Cls"
  ],
  multipleChoice: true
},
{
  id: 40,
  text: "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
  options: [
    "The de-duplication dashboard on the CMDB workspace",
    "My Tasks in the Application Navigator",
    "The de-duplication task module"
  ],
  correctAnswers: [
    "The de-duplication dashboard on the CMDB workspace"
  ],
  multipleChoice: false
},
{
  id: 41,
  text: "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this?",
  options: [
    "Ensure that the business rule to update Asset fields on change on the CI table is active",
    "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
    "Ensure that the business rule to update CI fields on change on the asset table is active",
    "Ensure one-to-one physical mapping between Asset and CI"
  ],
  correctAnswers: [
    "Ensure that the business rule to update Asset fields on change on the CI table is active",
    "Ensure that the business rule to update CI fields on change on the asset table is active"
  ],
  multipleChoice: true
},
{
  id: 42,
  text: "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware Cls. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all Cls?",
  options: [
    "Use the CMDB Reconciliation Engine to update the attributes",
    "Use a scheduled data import to update the attributes from an external source",
    "Create a new CI class specifically for non-discoverable attributes"
  ],
  correctAnswers: [
    "Use a scheduled data import to update the attributes from an external source"
  ],
  multipleChoice: false
},
{
  id: 43,
  text: "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
  options: [
    "To understand the business impact of Cls",
    "To understand the physical location of Cls",
    "To identify which devices will go offline first"
  ],
  correctAnswers: [
    "To understand the business impact of Cls"
  ],
  multipleChoice: false
},
{
  id: 44,
  text: "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to Cls from the offering that has a relationship to a Dynamic CI Group?",
  options: [
    "Approval Group",
    "Managed by Group",
    "Support Group",
    "Owned by Group"
  ],
  correctAnswers: [
    "Support Group",
    "Owned by Group"
  ],
  multipleChoice: true
},
{
  id: 45,
  text: "A Configuration Management Process Owner is preparing solution options for presentation to the technical governance board for ingesting custom Cls to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical debt) and ensure compliance with future upgrades. Which solutions accomplish this?",
  options: [
    "Repurposing a base CI class and rename attributes, as required",
    "Extending an existing Asset class table to accommodate the custom CI class attributes",
    "Extending an existing Cl class table to accommodate the custom CI class attributes",
    "Installing or upgrading the 'CMDB CI Class Models' store application to find a suitable existing CI class accommodating any new attributes"
  ],
  correctAnswers: [
    "Extending an existing Cl class table to accommodate the custom CI class attributes",
    "Installing or upgrading the 'CMDB CI Class Models' store application to find a suitable existing CI class accommodating any new attributes"
  ],
  multipleChoice: true
},
{
  id: 46,
  text: "A CMDB Administrator wants only the Cls of Principal Classes to appear in CI reference fields, for example the Cl reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
  options: [
    "CMDB Data Manager",
    "CI Class Manager",
    "System Properties",
    "CMDB Workspace"
  ],
  correctAnswers: [
    "CI Class Manager"
  ],
  multipleChoice: false
},
{
  id: 47,
  text: "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
  options: [
    "data_classification_admin and personalize_dictionary",
    "cmdb_inst_admin and personalize_form",
    "itil_admin and personalize_form",
    "sn_cmdb_admin and personalize_dictionary"
  ],
  correctAnswers: [
    "sn_cmdb_admin and personalize_dictionary"
  ],
  multipleChoice: false
},
{
  id: 48,
  text: "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
  options: [
    "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
    "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
  ],
  correctAnswers: [
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
  ],
  multipleChoice: false
},
{
  id: 49,
  text: "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy. Which group reference field should be set?",
  options: [
    "Managed By Group",
    "Approval Group",
    "Support Group",
    "Change Group"
  ],
  correctAnswers: [
    "Managed By Group"
  ],
  multipleChoice: false
},
{
  id: 50,
  text: "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
  options: [
    "Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
    "Certification Filter, Certification Template, Audit",
    "Stale, Orphan, Duplicate",
    "Certification Policies, Data Filters, Scheduled Jobs"
  ],
  correctAnswers: [
    "Certification Policies, Data Filters, Scheduled Jobs"
  ],
  multipleChoice: false
},
];

export default CSDM4;
