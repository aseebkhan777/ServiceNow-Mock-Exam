const CSDM2 = [
{
  id: 1,
  text: "From the Get Well Playbook 'Handle CMDB tables begin with u_cmdb_ci', what are upstream causes of having custom tables in the CMDB?",
  options: [
    "No review process in creation of CI classes",
    "Highly skilled ServiceNow developers",
    "Requests from stakeholders",
    "No governance process for CMDB customization"
  ],
  correctAnswers: [
    "No review process in creation of CI classes",
    "No governance process for CMDB customization"
  ],
  multipleChoice: true
},
{
  id: 2,
  text: "Which are valid Data Manager policy types?",
  options: [
    "Retirement",
    "Attestation",
    "Archiving",
    "Deletion",
    "De-duplication",
    "Certification"
  ],
  correctAnswers: [
    "Retirement",
    "Attestation",
    "Archiving",
    "Deletion",
    "Certification"
  ],
  multipleChoice: true
},
{
  id: 3,
  text: "Cloud Dimensions is reviewing the metrics provided by their CMDB Correctness Scorecard. The Duplicate metric for the Server class displays Healthy CIs/Evaluated 700/800. Which statement is true?",
  options: [
    "800 server records are duplicates in the CMDB",
    "700 server records are duplicates in the CMDB",
    "100 server records are duplicates in the CMDB",
    "700 Linux and 800 Windows server records are duplicates in the CMDB"
  ],
  correctAnswers: ["100 server records are duplicates in the CMDB"],
  multipleChoice: false
},
{
  id: 4,
  text: "You have 10 servers in a CMDB group. Server 1 fails non-duplicate, Server 2 fails non-orphan, Server 3 fails non-stale. Remaining servers pass all metrics. What is the overall Correctness score?",
  options: [
    "10%",
    "90%",
    "30%",
    "70%"
  ],
  correctAnswers: ["70%"],
  multipleChoice: false
},
{
  id: 5,
  text: "Intelligent Search uses which of the following languages?",
  options: [
    "JSON",
    "NLQ",
    "SQL",
    "MySQL"
  ],
  correctAnswers: ["NLQ"],
  multipleChoice: false
},
{
  id: 6,
  text: "The business rule responsible for synchronizing group attributes from a technical service offering to the underlying CIs within a dynamic CI group synchronizes which attributes?",
  options: [
    "Support Group",
    "Managed by Group",
    "Owned by Group",
    "Assignment Group (Change Group)",
    "Used by Group",
    "Service Desk Group"
  ],
  correctAnswers: [
    "Support Group",
    "Managed by Group",
    "Assignment Group (Change Group)"
  ],
  multipleChoice: true
},
{
  id: 7,
  text: "Which of the following are used when configuring a Desired State audit?",
  options: [
    "Certification Filters",
    "Duplicates",
    "Policies",
    "Certification Templates",
    "Audit",
    "Recommended Fields"
  ],
  correctAnswers: [
    "Policies",
    "Audit",
    "Recommended Fields"
  ],
  multipleChoice: true
},
{
  id: 8,
  text: "Now Assist for CMDB - Automated Duplicate CI Management leverages which of the following?",
  options: [
    "CMDB Workspace",
    "Duplicate CI Remediator",
    "De-Duplication Templates",
    "CMDB Health Dashboard"
  ],
  correctAnswers: ["De-Duplication Templates"],
  multipleChoice: false
},
{
  id: 9,
  text: "From the Get Well Playbook usage guidelines for location records, which are recommended practices?",
  options: [
    "Come from multiple sources",
    "Non-hierarchical",
    "Hierarchical",
    "Unique",
    "Clear to end users",
    "Parent field populated occasionally"
  ],
  correctAnswers: [
    "Hierarchical",
    "Unique",
    "Clear to end users"
  ],
  multipleChoice: true
},
{
  id: 10,
  text: "Which foundational data can be managed through a Technical Management Offering and automatically synchronized with the underlying CIs?",
  options: [
    "Change group, Managed by group, and Approval group",
    "Change group, Managed by group, and Support group",
    "Owned by, Managed by, Assigned to",
    "Owned by, Managed by, Supported by"
  ],
  correctAnswers: [
    "Change group, Managed by group, and Support group"
  ],
  multipleChoice: false
},
{
  id: 11,
  text: "You have 10 servers in a CMDB group. Server 1 and 2 fail non-duplicate. Server 3 fails non-stale. Server 4 fails non-orphan. Remaining servers pass. What is the Correctness score for the non-duplicate metric?",
  options: [
    "20%",
    "80%",
    "60%",
    "90%"
  ],
  correctAnswers: ["80%"],
  multipleChoice: false
},
{
  id: 12,
  text: "What are the three pillars for successful foundational data in a ServiceNow CMDB?",
  options: [
    "Insight",
    "Completeness",
    "Ingest",
    "Govern",
    "Correctness",
    "Compliance"
  ],
  correctAnswers: [
    "Correctness",
    "Completeness",
    "Compliance"
  ],
  multipleChoice: true
},
{
  id: 13,
  text: "Which audit types are used in the calculation for the Compliance Scorecard results?",
  options: [
    "Scripted Audit",
    "Desired State",
    "Compliance Architecture",
    "Compliance"
  ],
  correctAnswers: [
    "Scripted Audit",
    "Desired State"
  ],
  multipleChoice: true
},
{
  id: 14,
  text: "From the Get Well Playbook 'Technical Service Offerings with Support Group or Change Group Populated', Assignment group was updated to what name?",
  options: [
    "Managed by",
    "Support group",
    "Change group",
    "Owned by"
  ],
  correctAnswers: ["Support group"],
  multipleChoice: false
},
{
  id: 15,
  text: "Which types of data are collected after implementing ServiceNow Discovery?",
  options: [
    "Managed by Group",
    "MAC Address",
    "RAM",
    "Operating System",
    "Support Group"
  ],
  correctAnswers: [
    "MAC Address",
    "RAM",
    "Operating System"
  ],
  multipleChoice: true
},
{
  id: 16,
  text: "Which pillar for successful foundational data focuses on reporting and metrics?",
  options: [
    "Correctness",
    "Ingest",
    "Compliance",
    "Insight",
    "Completeness",
    "Govern"
  ],
  correctAnswers: ["Insight"],
  multipleChoice: false
},
{
  id: 17,
  text: "To determine the extent to which CIs managed collectively under service offerings are properly structured, which tab contains the metric 'Dynamic CI Groups with CMDB Group'?",
  options: [
    "Run",
    "Fly",
    "Crawl",
    "Walk"
  ],
  correctAnswers: ["Walk"],
  multipleChoice: false
},
{
  id: 18,
  text: "To assist incident and change routing, which CI fields map to the incident and change assignment group fields?",
  options: [
    "Support Group",
    "Change Group",
    "Operational Group",
    "Assignment Group",
    "Managed By Group"
  ],
  correctAnswers: [
    "Support Group",
    "Change Group"
  ],
  multipleChoice: true
},
{
  id: 19,
  text: "Which tab in the CMDB Data Foundations Dashboard provides visibility into the metric 'Hardware CIs with Serial Numbers'?",
  options: [
    "Crawl",
    "Best Practices",
    "Data Management Practices",
    "Run"
  ],
  correctAnswers: ["Best Practices"],
  multipleChoice: false
},
{
  id: 20,
  text: "The Staleness metric calculation is based on which field?",
  options: [
    "First Discovered <first_discovered>",
    "Most recent discovery <last_discovered>",
    "Updated <sys_updated_on>",
    "Discovery Source <discovery_source>",
    "Created <sys_created_on>"
  ],
  correctAnswers: ["Updated <sys_updated_on>"],
  multipleChoice: false
},
{
  id: 21,
  text: "A CMDB Administrator needs insights into how their CMDB is configured according to ServiceNow recommended practice. Which should be used?",
  options: [
    "CMDB Data Foundation Dashboard",
    "CMDB Workspace",
    "CMDB Health Dashboard",
    "CMDB Data Manager"
  ],
  correctAnswers: ["CMDB Data Foundation Dashboard"],
  multipleChoice: false
},
{
  id: 22,
  text: "A customer wants to model their business applications and would like to capture different types of data that includes Personally Identifiable Information (PII) data. Based on these requirements, which CMDB class needs to be leveraged to achieve this?",
  options: [
    "Business Capability",
    "API Component",
    "Information Object",
    "Data Classification"
  ],
  correctAnswers: ["Information Object"],
  multipleChoice: false
},
{
  id: 23,
  text: "A CMDB Administrator needs to create a new CI class for the Internet of Things (loT) Sensor in ServiceNow. What are the recommended practices for this specific activity?",
  options: [
    "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
    "Modify an existing class",
    "Add a new class under an appropriate parent class",
    "Delete an unused class, and replace it with the new one"
  ],
  correctAnswers: [
    "Install or update the CMDB CI Class Models store application, and verify the class does not already exist",
    "Add a new class under an appropriate parent class"
  ],
  multipleChoice: true
},
{
  id: 24,
  text: "A CMDB Data Manager needs to access the ServiceNow platform to create, publish, and manage policies that automate and govern CI lifecycle operations, ensuring the CMDB remains healthy and efficient. Where can the Data Manager do this?",
  options: [
    "CMDB Workspace CMDB 360 tab",
    "Service Operations Workspace",
    "CI Class Manager",
    "CMDB Workspace Management tab"
  ],
  correctAnswers: ["CMDB Workspace Management tab"],
  multipleChoice: false
},
{
  id: 25,
  text: "What ensures data volume in the CMDB is manageable?",
  options: [
    "Scheduled Jobs",
    "Business Rules",
    "Archive Policies"
  ],
  correctAnswers: ["Archive Policies"],
  multipleChoice: false
},
{
  id: 26,
  text: "Which are business values of CMDB?",
  options: [
    "Collecting and managing financial data",
    "Streamlining incident and change management",
    "Strengthening operational resiliency",
    "Automating maintenance for Cl relationships"
  ],
  correctAnswers: [
    "Streamlining incident and change management",
    "Strengthening operational resiliency"
  ],
  multipleChoice: true
},
{
  id: 27,
  text: "Which ServiceNow solution creates automatic relationships?",
  options: [
    "Discovery",
    "Workflow Studio",
    "Service Mapping",
    "IntegrationHub ETL"
  ],
  correctAnswers: [
    "Discovery",
    "Service Mapping"
  ],
  multipleChoice: true
},
{
  id: 28,
  text: "When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the IRE?",
  options: [
    "onComplete",
    "onBefore",
    "onStart",
    "onAfter"
  ],
  correctAnswers: ["onAfter"],
  multipleChoice: false
},
{
  id: 29,
  text: "A service owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the service owner from the filter panel?",
  options: [
    "Discovery source",
    "Managed by group",
    "Business criticality",
    "CI type"
  ],
  correctAnswers: [
    "Discovery source",
    "CI type"
  ],
  multipleChoice: true
},
{
  id: 30,
  text: "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
  options: [
    "Life Cycle Mapping [life_cycle_mapping]",
    "Life Cycle Stages [life_cycle_stage]",
    "Life Cycle Controls [life_cycle_control]",
    "Life Cycle Stage Status [life_cycle_stage_status]"
  ],
  correctAnswers: [
    "Life Cycle Mapping [life_cycle_mapping]"
  ],
  multipleChoice: false
},
{
  id: 31,
  text: "In a company there is a need to understand the CSDM maturity level needed. Different stakeholders listed a number of use cases that they expect over time. Which use case requires information objects?",
  options: [
    "The Asset Management team wants to understand the asset life cycle compliancy in a Business Application context.",
    "The SecOps team wants to understand the operational risk in the Business Application context.",
    "The Business Service Management team wants to understand the operational impact for their consumer parties.",
    "The Event Operations team wants to automate their events into incident for operational actions.",
    "The Customer Service team wants to onboard pro-active case management."
  ],
  correctAnswers: [
    "The SecOps team wants to understand the operational risk in the Business Application context."
  ],
  multipleChoice: false
},
{
  id: 32,
  text: "A customer wants recently imported server records to be automatically reclassified into more specific CMDB classes after being discovered using ServiceNow Discovery. During the discovery process, if existing Server [cmdb_ci_server] records are reclassified into the Linux [cmdb_ci_linux_server] and Windows Server [cmdb_ci_win_server] classes, which reclassification operation occurred?",
  options: [
    "Class Switch",
    "Class Downgrade",
    "Class Upgrade"
  ],
  correctAnswers: ["Class Upgrade"],
  multipleChoice: false
},
{
  id: 33,
  text: "A CMDB Administrator is reviewing the health of the CMDB and notices a large percentage of the Hardware Cls are missing serial numbers. The Administrator is concerned this may cause duplicate Cls and would like to resolve the issue in a timely manner. What structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue?",
  options: [
    "CSDM Now Create Playbooks",
    "CMDB Data Foundations Dashboard Playbooks",
    "CMDB Health Dashboard Playbooks",
    "CSDM Data Foundations Dashboard Playbooks"
  ],
  correctAnswers: [
    "CMDB Health Dashboard Playbooks"
  ],
  multipleChoice: false
},
{
  id: 34,
  text: "Platform Owner is collaborating with stakeholders in the manufacturing industry to align their Cls with the CSDM 5 framework. They need to map production line monitoring systems to the appropriate CSDM domain. Which CSDM 5 domain does the Platform Owner use?",
  options: [
    "Service Delivery (Manage Technical)",
    "Foundation",
    "Build and Integration (Build)",
    "Service Consumption (Sell/Consume)",
    "Design and Planning (Design)"
  ],
  correctAnswers: [
    "Service Delivery (Manage Technical)"
  ],
  multipleChoice: false
},
{
  id: 35,
  text: "The Configuration Manager is preparing the justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard?",
  options: [
    "It provides actionable insights to improve data quality and completeness.",
    "It enables monitoring and tracking of CMDB health over time.",
    "It automates the approval process for change management.",
    "It helps detect and eliminate duplicate records in the CMDB."
  ],
  correctAnswers: [
    "It provides actionable insights to improve data quality and completeness.",
    "It enables monitoring and tracking of CMDB health over time."
  ],
  multipleChoice: true
},
{
  id: 36,
  text: "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
  options: [
    "Use the Duplicate CI Remediator to merge the duplicate location records",
    "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
    "Review both locations, update Cls with the correct location and delete the duplicate location",
    "Keep both locations as either can be used as a valid alternate location"
  ],
  correctAnswers: [
    "Review both locations, update Cls with the correct location and delete the duplicate location"
  ],
  multipleChoice: false
},
{
  id: 37,
  text: "A Configuration Manager is planning the implementation of the CMDB. Which is the prescribed CSDM rollout order?",
  options: [
    "Initiate, Plan, Execute, Deliver, Close",
    "Architecture, Business, Technical, Governance",
    "Foundation, Crawl, Walk, Run, Fly",
    "Initial, Developing, Defined, Managed"
  ],
  correctAnswers: [
    "Foundation, Crawl, Walk, Run, Fly"
  ],
  multipleChoice: false
},
{
  id: 38,
  text: "A CMDB Administrator needs to import external data into the CMDB. As the CMDB Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed. What is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API?",
  options: [
    "Import Sets and Transform Maps",
    "IntegrationHub ETL",
    "Table API (REST API or SOAP API)"
  ],
  correctAnswers: [
    "IntegrationHub ETL"
  ],
  multipleChoice: false
},
{
  id: 39,
  text: "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
  options: [
    "Automates the enforcement of relationship rules between Cls in the CMDB",
    "Automates the archival and deletion of records based on retention policies",
    "Encrypts archived records for enhanced security"
  ],
  correctAnswers: [
    "Automates the enforcement of relationship rules between Cls in the CMDB"
  ],
  multipleChoice: false
},
  {
  id: 40,
  text: "Which are true?",
  options: [
    "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM.",
    "Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server [cmdb_ci_win_server] table.",
    "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table.",
    "Data collected with a discovery source of SCCM can update any record in the Windows Server [cmdb_ci_win_server] table because it has the highest priority number."
  ],
  correctAnswers: [
    "Data collected with a discovery source of ServiceNow can insert new records into the Windows Server [cmdb_ci_win_server] table, but cannot update records created by Altiris or SCCM.",
    "Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server [cmdb_ci_win_server] table."
  ],
  multipleChoice: true
},
{
  id: 41,
  text: "A CMDB Manager wants to improve data quality using the CMDB Health Dashboard. What needs to happen to generate CMDB health scores?",
  options: [
    "The scheduled jobs for the CMDB Health Dashboard must be activated",
    "Nothing, CMDB health scores are calculated by default",
    "The plugin, CMDB health calculation, needs to be installed"
  ],
  correctAnswers: [
    "The scheduled jobs for the CMDB Health Dashboard must be activated"
  ],
  multipleChoice: false
},
{
  id: 42,
  text: "A CMDB Administrator has been tasked with gathering information for a presentation to leadership. The Administrator needs to provide Duplicate CI, Orphan Cl and Stale Cl metrics. Which scorecard provides this information on the CMDB Health Dashboard?",
  options: [
    "Correctness",
    "Compliance",
    "Completeness"
  ],
  correctAnswers: [
    "Correctness"
  ],
  multipleChoice: false
},
{
  id: 43,
  text: "A CMDB Administrator wants to run the Services Have Owners Identified playbook to remediate the issues shown in the CMDB Data Foundations Dashboard. Which remediation plays would be used?",
  options: [
    "Govern Data",
    "Report Data",
    "Fix Data"
  ],
  correctAnswers: [
    "Govern Data",
    "Fix Data"
  ],
  multipleChoice: true
},
{
  id: 44,
  text: "Two new Cl records are imported into the hardware class of the CMDB: Cl1: The name of this Cl record matches the name of an existing Cl record in the CMDB. CI2: The IP address of this Cl record matches the IP address of an existing CI record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
  options: [
    "CI1 will be inserted as new record and CI2 will be updated with matching record.",
    "CI1 will be updated with matching record and CI2 will be inserted as new record.",
    "Cl1 and CI2 both will be updated with matching records.",
    "CI1 and CI2 both will be inserted as new records."
  ],
  correctAnswers: [
    "CI1 will be updated with matching record and CI2 will be inserted as new record."
  ],
  multipleChoice: false
},
{
  id: 45,
  text: "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
  options: [
    "Saved queries window on the Insights tab",
    "CMDB Query Builder",
    "Saved queries window on the CMDB 360 tab",
    "Coverage window on the CMDB 360 tab"
  ],
  correctAnswers: [
    "Saved queries window on the CMDB 360 tab"
  ],
  multipleChoice: false
},
{
  id: 46,
  text: "A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this?",
  options: [
    "Percentage of Custom Status Values for CI Life Cycle Stages",
    "Named Product Models without Product Owners",
    "Locations without a Parent Location",
    "Application Services with Business Application Relationships"
  ],
  correctAnswers: [
    "Application Services with Business Application Relationships"
  ],
  multipleChoice: false
},
{
  id: 47,
  text: "Yesterday, an Apache Web Server Cl was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
  options: [
    "A new Apache Web Server Cl is created.",
    "The Apache Web Server Cl will be reclassified as a Web Server CI.",
    "The existing Apache Web Server Cl will be reconciled and its version will be updated.",
    "A duplication error will occur."
  ],
  correctAnswers: [
    "The existing Apache Web Server Cl will be reconciled and its version will be updated."
  ],
  multipleChoice: false
},
{
  id: 48,
  text: "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a Cl is selected. The Configuration Management team is working to ensure that the Change Group field is populated for all managed Cls. As a result, which base system field on the incident form will be automatically populated after selecting a CI?",
  options: [
    "Change group",
    "Assignment group",
    "Managed by group",
    "Approval group"
  ],
  correctAnswers: [
    "Assignment group"
  ],
  multipleChoice: false
},
{
  id: 49,
  text: "CMDB class owners are receiving tasks under the 'My Work' tab in the CMDB Workspace. Which CMDB management tool is generating these tasks?",
  options: [
    "CMDB Health Dashboard",
    "De-duplication templates",
    "CMDB Data Manager"
  ],
  correctAnswers: [
    "CMDB Data Manager"
  ],
  multipleChoice: false
},
{
  id: 50,
  text: "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the Cl record?",
  options: [
    "Compliance",
    "Audit",
    "Attestation",
    "Certification"
  ],
  correctAnswers: [
    "Certification"
  ],
  multipleChoice: false
},
{
  id: 51,
  text: "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)?",
  options: [
    "Network devices in the DMZ",
    "Devices in secure environments",
    "Servers in the data center",
    "Devices that intermittently connect to the network"
  ],
  correctAnswers: [
    "Devices in secure environments",
    "Devices that intermittently connect to the network"
  ],
  multipleChoice: true
},
{
  id: 52,
  text: "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of class attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of class attributes?",
  options: [
    "Configure data refresh rules with a specific time period",
    "Assign a priority to each data source in the reconciliation rules",
    "Manually run the data source updates in the correct order",
    "Assign a run order to each data source in the identification rules"
  ],
  correctAnswers: [
    "Assign a priority to each data source in the reconciliation rules"
  ],
  multipleChoice: false
},
{
  id: 53,
  text: "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of Cls. Which policy type should be used to accomplish this goal?",
  options: [
    "Delete",
    "Attestation",
    "Certification",
    "Retire"
  ],
  correctAnswers: [
    "Attestation"
  ],
  multipleChoice: false
},
  {
  id: 54,
  text: "A CMDB Administrator wants to create a CMDB query to find all databases located in Seattle that are connected to application services. They also want to include incidents related to those databases. Which actions does the company take to build this query?",
  options: [
    "Add a filter to the database node for location = Seattle",
    "Add to the canvas the Incident table from the Non-CMDB Tables list",
    "Set the relationship level to 'Up to 2nd level relationships'",
    "Add property columns to the application service node"
  ],
  correctAnswers: [
    "Add a filter to the database node for location = Seattle",
    "Add to the canvas the Incident table from the Non-CMDB Tables list"
  ],
  multipleChoice: true
},
{
  id: 55,
  text: "A CMDB Administrator identifies duplicate Cls. One was created by a manual import, and the other one was created by automated discovery. The discovered Cl has the latest IP address, while the manually imported Cl has an accurate relationship to a critical business application. How does the Administrator use the Duplicate CI Remediator to resolve this issue?",
  options: [
    "Merge the two Cls automatically, retaining all attributes from the discovered CI",
    "Retain the discovered Cl, and delete the manually imported CI",
    "Retain the discovered CI, but merge the relationship from the manually imported CI",
    "Retain the manually imported Cl, and delete the discovered CI"
  ],
  correctAnswers: [
    "Retain the discovered CI, but merge the relationship from the manually imported CI"
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
  text: "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM?",
  options: [
    "Determine the root cause of the change issue",
    "Identify blackout windows for the change",
    "Understand the impact of the change on services",
    "Route the change dynamically"
  ],
  correctAnswers: [
    "Understand the impact of the change on services",
    "Route the change dynamically"
  ],
  multipleChoice: true
},
{
  id: 58,
  text: "A development team is working on a project and an application will be deployed to many servers. There will be several security requirements that must be checked to adhere to lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CSDM does the development team look to store the information that will be used to satisfy the audits?",
  options: [
    "Customer Service Offerings and Databases",
    "Business Applications and Information Objects",
    "Technology Management Service Offerings (Technical Service Offerings) and Dynamic CI Groups"
  ],
  correctAnswers: [
    "Business Applications and Information Objects"
  ],
  multipleChoice: false
},
{
  id: 59,
  text: "A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundation Dashboard. Which benefits support the decision to continually monitor the results on this dashboard?",
  options: [
    "Provides metrics for Cls Processed by the IRE",
    "Reports on all orphan Cls in the CMDB",
    "Provides metrics on active Cls updated in the last 90 days",
    "Provides a list of all Cls that failed health audits"
  ],
  correctAnswers: [
    "Provides metrics for Cls Processed by the IRE",
    "Provides metrics on active Cls updated in the last 90 days"
  ],
  multipleChoice: true
},
{
  id: 60,
  text: "A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
  options: [
    "CI Class Manager",
    "CMDB Workspace",
    "CMDB Data Manager"
  ],
  correctAnswers: [
    "CMDB Workspace"
  ],
  multipleChoice: false
},
{
  id: 61,
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
  id: 62,
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
  id: 63,
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
  id: 65,
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
  id: 66,
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
  id: 67,
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
  id: 68,
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
  id: 69,
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
  id: 70,
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
  id: 71,
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
  id: 72,
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
  id: 73,
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
  id: 74,
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
  id: 75,
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
  id: 76,
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
  id: 77,
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
  id: 78,
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
  id: 79,
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
  id: 80,
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
  id: 81,
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
  id: 82,
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
  id: 83,
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
  id: 84,
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
  id: 85,
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
  id: 86,
  text: "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of CI classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
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
  id: 87,
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
}
];

export default CSDM2;
