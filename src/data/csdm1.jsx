const CSDM1 = [
{
  id: 1,
  text: "Which CSDM domain are business applications, information objects, and capabilities part of?",
  options: [
    "Service Delivery",
    "Service Consumption",
    "Design & Planning",
    "Build & Integration"
  ],
  correctAnswers: ["Design & Planning"],
  multipleChoice: false
},
{
  id: 2,
  text: "Which of the following are operational Configuration Items (CIs) that can be selected and populated in the Configuration item field on an Incident or Change Request record?",
  options: [
    "Application Service",
    "Installed Software",
    "Dynamic CI Group",
    "Business Application"
  ],
  correctAnswers: ["Application Service", "Installed Software"],
  multipleChoice: true
},
{
  id: 3,
  text: "Business Services, Technology Management Services, Business Service Offerings, and Technology Management Offerings can be created using forms and lists or in a more streamlined manner using which of the following?",
  options: [
    "Application Service Wizard",
    "Service Mapping",
    "CMDB Workspace",
    "Service Builder",
    "CI Class Manager"
  ],
  correctAnswers: ["Service Builder"],
  multipleChoice: false
},
{
  id: 4,
  text: "Which ServiceNow feature is a built-in visualization and reporting tool that helps organizations assess and improve their implementation of the Common Service Data Model (CSDM) based on ServiceNow suggested good practices?",
  options: [
    "CSDM Data Foundations Dashboard",
    "Application Service Wizard",
    "Service Builder",
    "CMDB Health Dashboard",
    "CI Class Manager"
  ],
  correctAnswers: ["CSDM Data Foundations Dashboard"],
  multipleChoice: false
},
{
  id: 5,
  text: "In ServiceNow, which of the following are potential consequences of not aligning with the Common Service Data Model (CSDM)?",
  options: [
    "Increased technical debt",
    "Incompatibility with future ServiceNow products",
    "Inability to install ServiceNow store applications",
    "Potential loss of data"
  ],
  correctAnswers: ["Increased technical debt", "Incompatibility with future ServiceNow products"],
  multipleChoice: true
},
{
  id: 6,
  text: "From which of the following can the Managed by group be configured and synchronized to the underlying group or class of Configuration items (CIs)?",
  options: [
    "Business Services",
    "Business Service Offerings",
    "CI Class Manager",
    "Technology Management Services",
    "Technology Management Offerings"
  ],
  correctAnswers: ["Business Services", "Technology Management Services"],
  multipleChoice: true
},
{
  id: 7,
  text: "Which feature can be used to relate an application service/service instance with a technology management offering, business service offering, and/or a business application?",
  options: [
    "IntegrationHub ETL",
    "Application Service Wizard",
    "CMDB Workspace",
    "Service Builder",
    "CI Class Manager"
  ],
  correctAnswers: ["Application Service Wizard"],
  multipleChoice: false
},
{
  id: 8,
  text: "What are the 3 pillars to focus on to achieve a successful data foundation?",
  options: [
    "Correctness",
    "Insight",
    "Compliance",
    "Completeness",
    "Ingest",
    "Govern"
  ],
  correctAnswers: ["Correctness", "Compliance", "Completeness"],
  multipleChoice: true
},
{
  id: 9,
  text: "Which CSDM domain is an enterprise architect involved in?",
  options: [
    "Build & Integration",
    "Design & Planning",
    "Service Consumption",
    "Service Delivery",
    "Ideation & Strategy"
  ],
  correctAnswers: ["Design & Planning"],
  multipleChoice: false
},
{
  id: 10,
  text: "Aligning to the Common Service Data Model (CSDM) allows for auto population of the assignment group field on new incident and change request records. Which of the following are true when creating a new Incident or Change Request in ServiceNow?",
  options: [
    "Approval group on the selected CI auto-populates the assignment group field on the change request form.",
    "Managed by group on the selected CI auto-populates the assignment group field on the incident form.",
    "Change group on the selected CI auto-populates the assignment group field on the change request form.",
    "Support group on the selected CI auto-populates the assignment group field on the incident form."
  ],
  correctAnswers: [
    "Change group on the selected CI auto-populates the assignment group field on the change request form.",
    "Support group on the selected CI auto-populates the assignment group field on the incident form."
  ],
  multipleChoice: true
},
{
  id: 11,
  text: "Which is a service instance type that is a logical representation of a deployed application stack and its dependencies?",
  options: [
    "Business Application [cmdb_ci_business_app]",
    "Application [cmdb_ci_appl]",
    "Technology Management Service [cmdb_ci_service_technical]",
    "Application Service [cmdb_ci_service_auto]"
  ],
  correctAnswers: ["Application Service [cmdb_ci_service_auto]"],
  multipleChoice: false
},
{
  id: 12,
  text: "Which CSDM domain represents deployed service instances and their related, discoverable, components?",
  options: [
    "Ideation & Strategy",
    "Service Delivery",
    "Build & Integration",
    "Design & Planning",
    "Service Consumption"
  ],
  correctAnswers: ["Service Delivery"],
  multipleChoice: false
},
{
  id: 13,
  text: "Which of the following provides a unified workspace that allows owners to holistically view and collectively manage their portfolios, services, offerings, and products through the full lifecycle?",
  options: [
    "Service Operations Workspace",
    "Service Builder",
    "CMDB Workspace",
    "Digital Portfolio Management",
    "CI Class Manager"
  ],
  correctAnswers: ["Digital Portfolio Management"],
  multipleChoice: false
},
{
  id: 14,
  text: "Which field(s) does CSDM recommend to use to manage the life cycle of a Configuration item (CI)?",
  options: [
    "Operational status",
    "Hardware status",
    "Install status",
    "Life cycle stage and stage status"
  ],
  correctAnswers: ["Life cycle stage and stage status"],
  multipleChoice: false
},
{
  id: 15,
  text: "Which CSDM domain is Customer Service Management part of?",
  options: [
    "Ideation & Strategy",
    "Build & Integration",
    "Design & Planning",
    "Service Delivery",
    "Service Consumption"
  ],
  correctAnswers: ["Service Consumption"],
  multipleChoice: false
},
{
  id: 16,
  text: "A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed. Which governance management tool will accomplish this?",
  options: [
    "CI Class Manager",
    "CMDB and CSDM Data Foundations Dashboard",
    "CMDB Health Dashboard",
    "CMDB Data Manager",
    "De-duplication Templates"
  ],
  correctAnswers: ["CMDB Data Manager"],
  multipleChoice: false
},
{
  id: 17,
  text: "What types of policies can be created within CMDB Data Manager? Choose 2 options",
  options: [
    "De-duplication",
    "Archive",
    "Reconciliation",
    "Retire"
  ],
  correctAnswers: ["De-duplication", "Archive"],
  multipleChoice: true
},
{
  id: 18,
  text: "A CMDB Administrator wants to educate the team on the various actions that can be performed within the CMDB Workspace. Choose 2 options. What actions can be initiated from the CMDB Workspace?",
  options: [
    "Execute ServiceNow Discovery",
    "Create a CMDB Data Manager certification policy",
    "Remediate duplicate Cl records",
    "Create a new CMDB class"
  ],
  correctAnswers: [
    "Execute ServiceNow Discovery",
    "Remediate duplicate Cl records"
  ],
  multipleChoice: true
},
{
  id: 19,
  text: "A CMDB Administrator changes the query for the SCCM Service Graph Connector. What is the impact of this change?",
  options: [
    "The Data Source for the SCCM Service Graph Connector will be marked as Inactive.",
    "Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured.",
    "Any updates for the SCCM Service Graph Connector will be skipped during the upgrade."
  ],
  correctAnswers: [
    "Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured."
  ],
  multipleChoice: false
},
{
  id: 20,
  text: "Using existing baseline Data Manager policies, what condition must a Cl meet before it can be archived or deleted?",
  options: [
    "Be marked as inactive",
    "Be marked as critical",
    "Be retired and in end of life",
    "Be fully operational and in use"
  ],
  correctAnswers: ["Be retired and in end of life"],
  multipleChoice: false
},
{
  id: 21,
  text: "A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices. Which tab in the CSDM Data Foundations Dashboard provides this information?",
  options: [
    "Run",
    "Foundation",
    "Crawl",
    "Walk",
    "Fly"
  ],
  correctAnswers: ["Foundation"],
  multipleChoice: false
},
{
  id: 22,
  text: "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
  options: [
    "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated Cl",
    "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value."
  ],
  correctAnswers: [
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated Cl"
  ],
  multipleChoice: false
},
{
  id: 23,
  text: "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
  options: [
    "My Tasks in the Application Navigator",
    "The de-duplication task module",
    "The de-duplication dashboard on the CMDB workspace"
  ],
  correctAnswers: [
    "The de-duplication dashboard on the CMDB workspace"
  ],
  multipleChoice: false
},
{
  id: 24,
  text: "A CMDB Administrator wants to ensure all short-lived Cls that have not been discovered in the past week are removed. After retiring the CI records, which recommended action does the CMDB Administrator take?",
  options: [
    "Create a delete policy",
    "Create a scheduled job",
    "Create a business rule"
  ],
  correctAnswers: ["Create a delete policy"],
  multipleChoice: false
},
{
  id: 25,
  text: "A CMDB Administrator group aims to establish a process for receiving task notifications when the Support Group or Managed By Group flelds are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
  options: [
    "Technical Service Offerings and Dynamic Cl groups",
    "CMDB Workspace and Scheduled Jobs",
    "Dynamic Cl groups and CMDB groups",
    "CI Class Manager and Health Preferences"
  ],
  correctAnswers: [
    "CI Class Manager and Health Preferences"
  ],
  multipleChoice: false
},
{
  id: 26,
  text: "What is the value of using the CMDB in security operations?",
  options: [
    "Allows security team to assess and remediate an incident",
    "Enables audits and attestations across Cls",
    "Auto-resolves a vulnerability",
    "Identifies the IT infrastructure with a vulnerability"
  ],
  correctAnswers: [
    "Allows security team to assess and remediate an incident",
    "Identifies the IT infrastructure with a vulnerability"
  ],
  multipleChoice: true
},
{
  id: 27,
  text: "A CMDB Administrator needs to set a Cl Class as a Principal Class. Which CI Class Manager tab would need to be accessed?",
  options: [
    "Health > Attributes",
    "Class Info > Basic Info",
    "Class Info > Attributes"
  ],
  correctAnswers: ["Class Info > Basic Info"],
  multipleChoice: false
},
{
  id: 28,
  text: "An organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekly. However, due to an integration issue, the high-priority data source stops updating the records. Which configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
  options: [
    "Data Refresh Rules",
    "Health Inclusion Rules",
    "Identification Rules",
    "Reconciliation Rules"
  ],
  correctAnswers: ["Data Refresh Rules"],
  multipleChoice: false
},
{
  id: 29,
  text: "A CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard - Correctness Scorecard. What is the default duration of this metric?",
  options: [
    "24 hours",
    "30 days",
    "7 days",
    "60 days"
  ],
  correctAnswers: ["30 days"],
  multipleChoice: false
},
{
  id: 30,
  text: "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. How will these improvements enhance the change management process?",
  options: [
    "Automatically schedules and deploys changes without human review or approval",
    "Provides insight into the potential impact of the change",
    "Ensures that no changes result in service downtime, regardless of planning or execution",
    "Enables auto population of the assignment group field to dynamically route changes"
  ],
  correctAnswers: [
    "Provides insight into the potential impact of the change",
    "Enables auto population of the assignment group field to dynamically route changes"
  ],
  multipleChoice: true
},
  {
  id: 31,
  text: "A CMDB Administrator has a report in ServiceNow that lists all CMDB Services that do not have an owner and wants to use a ServiceNow Playbook. What Governance process play can prevent this from recurring?",
  options: [
    "Make the field Managed by mandatory on all Cls",
    "Make the field Owned by mandatory",
    "Set a default value on the Service Owner field so that is never empty"
  ],
  correctAnswers: ["Make the field Owned by mandatory"],
  multipleChoice: false
},
{
  id: 32,
  text: "A CMDB Administrator is creating technical documentation for stakeholders, which includes a list of attributes, Identification and Reconciliation Engine (IRE) rules, and suggested relationships for several classes. Which central location does the CMDB Administrator use to collect this information?",
  options: [
    "CI Class Manager",
    "CMDB Data Manager",
    "Cl Identifiers",
    "CMDB Workspace"
  ],
  correctAnswers: ["CI Class Manager"],
  multipleChoice: false
},
{
  id: 33,
  text: "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
  options: [
    "CMDB Query Builder",
    "Coverage window on the CMDB 360 tab",
    "Saved queries window on the CMDB 360 tab",
    "Saved queries window on the Insights tab"
  ],
  correctAnswers: ["Saved queries window on the CMDB 360 tab"],
  multipleChoice: false
},
{
  id: 34,
  text: "A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager. . Table: Server [cmdb_cl_server] . Filter: Operating System | contains | Server OR Operating System | contains | Linux Which operating systems are affected by this policy?",
  options: [
    "AIX",
    "Windows Server 2022 Datacenter",
    "Linux CentOS",
    "Windows 2019 Datacenter"
  ],
  correctAnswers: [
    "Windows Server 2022 Datacenter",
    "Linux CentOS"
  ],
  multipleChoice: true
},
{
  id: 35,
  text: "A Configuration Manager needs to restrict the number of classes available in a Configuration Item reference field on an incident form. How does the Manager set Principal Classes?",
  options: [
    "By using the Principal Class check box on the CI Class Manager's 'Attributes' tab for a Class",
    "By using the Principal Class check box on the CMDB Workspace",
    "By using the Principal Class attribute on the CI",
    "By using the Principal Class check box on the CI Class Manager's'Basic Info' tab for a Class"
  ],
  correctAnswers: [
    "By using the Principal Class check box on the CI Class Manager's'Basic Info' tab for a Class"
  ],
  multipleChoice: false
},
{
  id: 36,
  text: "A CMDB Administrator is comparing the Unified Map to the Service Mapping map. What are additional capabilities of the Unified Map?",
  options: [
    "Visibility to an application and the host it is installed on",
    "Number of levels displayed on a map can be modified",
    "Map nodes can be filtered based on user preferences",
    "Map can be zoomed in and out"
  ],
  correctAnswers: [
    "Number of levels displayed on a map can be modified",
    "Map nodes can be filtered based on user preferences"
  ],
  multipleChoice: true
},
{
  id: 37,
  text: "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'?",
  options: [
    "Managed By Group",
    "Support Group",
    "Assignment Group",
    "Owned by Group"
  ],
  correctAnswers: [
    "Managed By Group",
    "Support Group"
  ],
  multipleChoice: true
},
{
  id: 38,
  text: "A CMDB Administrator aims to utilize CSDM life cycle field mappings to better align with CSDM best practices. What is the next step to take after selecting the Enable Life Cycle Sync button?",
  options: [
    "Fix the incorrect values in the Life Cycle Stage to match legacy values",
    "Activate the CSDM Life Cycle field mappings",
    "Resolve any incomplete field mappings identified in the Discrepancy Report"
  ],
  correctAnswers: [
    "Resolve any incomplete field mappings identified in the Discrepancy Report"
  ],
  multipleChoice: false
},
{
  id: 39,
  text: "The Configuration Management team finds value in the reports from CMDB 360/Multisource CMDB and wants to use it for all CI data. Which must be true in order for CMDB 360/Multisource CMDB to be able to report on and analyze that data?",
  options: [
    "ServiceNow Discovery must be used to populate the CI data.",
    "Reconciliation rules with priorities must be configured.",
    "The Cl data must go through the IRE.",
    "The Cl data must be from an authorized Service Graph Connector."
  ],
  correctAnswers: [
    "The Cl data must go through the IRE."
  ],
  multipleChoice: false
},
  {
  id: 40,
  text: "A CMDB Administrator wants to ensure that only relevant Cls from managed classes will be shown on Incident, Problem, and Change records. Which checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
  options: [
    "Principal Class",
    "Independent",
    "Extensible",
    "Main Record"
  ],
  correctAnswers: ["Principal Class"],
  multipleChoice: false
},
{
  id: 41,
  text: "Where can an administrator perform Natural Language Queries (NLQ)?",
  options: [
    "CMDB Health Dashboard",
    "CMDB Workspace",
    "CMDB Data Manager",
    "CI Class Manager"
  ],
  correctAnswers: ["CMDB Workspace"],
  multipleChoice: false
},
{
  id: 42,
  text: "A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). Which process occurred?",
  options: [
    "Class Switch",
    "Class Change",
    "Class Upgrade",
    "Class Downgrade"
  ],
  correctAnswers: ["Class Switch"],
  multipleChoice: false
},
{
  id: 43,
  text: "How do CMDB management tools and features within the CMDB governance pillar help organizations manage Cls and improve service delivery?",
  options: [
    "Assist integration choices",
    "Gain visibility and control",
    "Enhanced Service Management operations",
    "Reduced hardware costs"
  ],
  correctAnswers: [
    "Gain visibility and control",
    "Enhanced Service Management operations"
  ],
  multipleChoice: true
},
{
  id: 44,
  text: "A Configuration Manager wants to manage manually maintained data attributes of Cls.. Which group values are automatically synchronized on Cls using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups?",
  options: [
    "Change group",
    "CMDB group",
    "Approval group",
    "Support group"
  ],
  correctAnswers: [
    "Change group",
    "Support group"
  ],
  multipleChoice: true
},
{
  id: 45,
  text: "A CSDM Data Manager needs metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. Which tab in the CSDM Data Foundation Dashboard provides this information?",
  options: [
    "Crawl",
    "Walk",
    "Fly",
    "Run"
  ],
  correctAnswers: ["Walk"],
  multipleChoice: false
},
{
  id: 46,
  text: "A CMDB Administrator is tasked with managing the CMDB and needs to define a new CI class to track a new type of equipment that has not been seen before. Which action adds a new CI class and ensures it integrates properly with the existing CMDB structure?",
  options: [
    "Use Service Catalog to define the new CI class, as the CI Class Manager is only for service-related records and not for hardware Cls",
    "Create a new Cl class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
    "Edit an existing Cl class under CI Class Manager and add new fields specific to the new equipment type",
    "Use the CI Class Manager to create a new CI class but avoid setting up any inheritance, as CI classes should be independent of one another to maintain clarity"
  ],
  correctAnswers: [
    "Create a new Cl class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class"
  ],
  multipleChoice: false
},
{
  id: 47,
  text: "What are the characteristics or functions of ServiceNow IntegrationHub ETL?",
  options: [
    "Integrates third-party data into the CMDB or into non-CMDB tables",
    "Performs discovery data collection and updates the CMDB",
    "Uses the IRE to process and integrate data",
    "Imports Microsoft SCCM/Intune data into the CMDB"
  ],
  correctAnswers: [
    "Integrates third-party data into the CMDB or into non-CMDB tables",
    "Uses the IRE to process and integrate data"
  ],
  multipleChoice: true
},
{
  id: 48,
  text: "A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB. Which ingestion method brings the fastest time to value?",
  options: [
    "Import Sets",
    "Agent Client Collector",
    "Service Graph Connectors",
    "IntegrationHub ETL"
  ],
  correctAnswers: ["Service Graph Connectors"],
  multipleChoice: false
},
{
  id: 49,
  text: "A CMDB Administrator would like to minimize stale Cls in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
  options: [
    "Completeness",
    "Correctness",
    "Compliance"
  ],
  correctAnswers: ["Correctness"],
  multipleChoice: false
},
  {
  id: 50,
  text: "Two new Cl records are imported into the hardware class of the CMDB: Cl1: The name of this CI record matches the name of an existing CI record in the CMDB. CI2: The IP address of this Cl record matches the IP address of an existing Cl record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
  options: [
    "Cl1 and CI2 both will be updated with matching records.",
    "Cl1 will be updated with matching record and CI2 will be inserted as new record.",
    "Cl1 will be inserted as new record and CI2 will be updated with matching record.",
    "Cl1 and CI2 both will be inserted as new records."
  ],
  correctAnswers: [
    "Cl1 will be updated with matching record and CI2 will be inserted as new record."
  ],
  multipleChoice: false
},
{
  id: 51,
  text: "A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook. Which types of documentation can they expect to be provided in a playbook?",
  options: [
    "Problem Analysis",
    "Root Cause",
    "Problem Overview",
    "Automated Remediations"
  ],
  correctAnswers: [
    "Problem Analysis",
    "Problem Overview"
  ],
  multipleChoice: true
},
{
  id: 52,
  text: "A CMDB Administrator knows that the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality. What is a benefit of this dashboard?",
  options: [
    "Provides the ability to configure health-related metrics",
    "Provides key health-related metrics to make decisions",
    "Provides the ability to resolve certification policy tasks"
  ],
  correctAnswers: [
    "Provides key health-related metrics to make decisions"
  ],
  multipleChoice: false
},
{
  id: 53,
  text: "A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality. Why would the Manager use CMDB 360/Multisource CMDB?",
  options: [
    "To identify Cl attributes from multiple data sources",
    "To ingest data from multiple data sources using Service Graph Connector(s)",
    "To ingest data from multiple data sources using Import Set(s)",
    "To populate the CMDB from multiple data sources"
  ],
  correctAnswers: [
    "To identify Cl attributes from multiple data sources"
  ],
  multipleChoice: false
},
{
  id: 54,
  text: "The Configuration Management team wants to confirm that all servers in the CMDB actually exist in the data center. Which CMDB Data Manager policy type would the team create?",
  options: [
    "Attestation",
    "Delete",
    "Retire",
    "Archive",
    "Certification"
  ],
  correctAnswers: [
    "Attestation"
  ],
  multipleChoice: false
},
{
  id: 55,
  text: "A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk. How does the Administrator achieve this?",
  options: [
    "Configure and run a custom de-duplication background script",
    "Create and run a de-duplication template",
    "Create de-duplication tasks manually and remediate each",
    "Utilize the Duplicate CI Remediator Wizard"
  ],
  correctAnswers: [
    "Create and run a de-duplication template"
  ],
  multipleChoice: false
},
{
  id: 56,
  text: "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
  options: [
    "Important actions tile under the Home tab",
    "Total status tile under the My Work tab",
    "CMDB feature adoption tile under the Insights tab"
  ],
  correctAnswers: [
    "Important actions tile under the Home tab"
  ],
  multipleChoice: false
},
{
  id: 57,
  text: "A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. Which system property must be enabled?",
  options: [
    "glide.identification_engine.multisource_enabled",
    "glide.identification_engine.multisource.query.max.limit",
    "glide.identification_engine.multisource_cmdb_ci_enabled",
    "glide.identification_engine.multisource_non_cmdb_ci_enabled"
  ],
  correctAnswers: [
    "glide.identification_engine.multisource_enabled"
  ],
  multipleChoice: false
},
{
  id: 58,
  text: "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
  options: [
    "Life Cycle Stages [life_cycle_stage]",
    "Life Cycle Mapping [life_cycle_mapping]",
    "Life Cycle Controls [life_cycle_control]",
    "Life Cycle Stage Status [life_cycle_stage_status]"
  ],
  correctAnswers: [
    "Life Cycle Mapping [life_cycle_mapping]"
  ],
  multipleChoice: false
},
{
  id: 59,
  text: "A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field to field mappings for the import. Which feature will show that information?",
  options: [
    "Integration Hub",
    "CMDB Integrations Dashboard",
    "IntegrationHub ETL"
  ],
  correctAnswers: [
    "IntegrationHub ETL"
  ],
  multipleChoice: false
},
{
  id: 60,
  text: "A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits to support the decision to leverage this feature?",
  options: [
    "Offers insight into the downstream impacts of poorly performing metrics",
    "Offers remediation templates to improve poorly performing metrics",
    "Offers remediation options to address and improve poorly performing metrics",
    "Offers automated scripts to resolve poorly performing metrics"
  ],
  correctAnswers: [
    "Offers remediation templates to improve poorly performing metrics",
    "Offers remediation options to address and improve poorly performing metrics"
  ],
  multipleChoice: true
},
{
  id: 61,
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
  id: 62,
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
  id: 63,
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
  id: 64,
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
  id: 65,
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
  id: 66,
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
  id: 67,
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
  id: 68,
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
  id: 69,
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
  id: 70,
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
  id: 71,
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
  id: 72,
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
  id: 73,
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
  id: 74,
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
  id: 75,
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
  id: 76,
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
  id: 77,
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
  id: 78,
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
  id: 79,
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
  id: 80,
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
  id: 81,
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
  id: 82,
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
];



export default CSDM1;
