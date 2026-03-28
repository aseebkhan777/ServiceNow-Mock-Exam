const CSDM3 = [
{
  id: 1,
  text: "A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM sell/consume domain?",
  options: [
    "Business Service Offering, Business Service",
    "Business Capability, Information Object, Business Application",
    "Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)"
  ],
  correctAnswers: [
    "Business Service Offering, Business Service"
  ],
  multipleChoice: false
},
{
  id: 2,
  text: "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
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
  id: 3,
  text: "A CMDB Data Owner has requested better insights on the different data sources that make up the CMDB data set. After installing the Service Graph Connector Central plugin, which workspace will have the new Service Graph Connector Central tab available?",
  options: [
    "Service Graph Connector Workspace",
    "CMDB Workspace",
    "Discovery Admin Workspace"
  ],
  correctAnswers: [
    "CMDB Workspace"
  ],
  multipleChoice: false
},
{
  id: 4,
  text: "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should be created?",
  options: [
    "Certification",
    "Delete",
    "Retire",
    "Archive"
  ],
  correctAnswers: [
    "Archive"
  ],
  multipleChoice: false
},
{
  id: 5,
  text: "A CMDB Administrator is asked to clean up CMDB duplicates. What is the preferred way to manage this task?",
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
  id: 6,
  text: "A Business Relationship Manager wants to implement Service Portfolio Management (SPM) to present offerings to business consumers. Which CSDM domain does this align with?",
  options: [
    "Build and Integration (Build)",
    "Service Consumption (Sell/Consume)",
    "Design and Planning (Design)",
    "Service Delivery"
  ],
  correctAnswers: [
    "Service Consumption (Sell/Consume)"
  ],
  multipleChoice: false
},
{
  id: 7,
  text: "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map. Which work area allows this?",
  options: [
    "Tool box",
    "Map",
    "Contextual side panel",
    "Content controls"
  ],
  correctAnswers: [
    "Contextual side panel"
  ],
  multipleChoice: false
},
{
  id: 8,
  text: "Which are CMDB Data Manager end of life policy types?",
  options: [
    "Retire",
    "Lost",
    "Decommission",
    "Disposed",
    "Archive"
  ],
  correctAnswers: [
    "Retire",
    "Archive"
  ],
  multipleChoice: true
},
{
  id: 9,
  text: "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are the benefits of using this application?",
  options: [
    "Has a framework to create custom metrics for the CMDB",
    "Checks that important data is valid and properly configured",
    "Provides playbooks to assist in the remediation of potential risks",
    "Uses automation to remediate potential risks"
  ],
  correctAnswers: [
    "Checks that important data is valid and properly configured",
    "Uses automation to remediate potential risks"
  ],
  multipleChoice: true
},
{
  id: 10,
  text: "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected?",
  options: [
    "End of Life – Retired",
    "Missing - Stolen",
    "Inventory - Available",
    "In any lifecycle state"
  ],
  correctAnswers: [
    "End of Life – Retired"
  ],
  multipleChoice: false
},
{
  id: 11,
  text: "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries. What insights are gained from CMDB 360 queries?",
  options: [
    "Unique CIs created from different data sources",
    "Gaps in attribute data from different data sources",
    "Different attribute values from different data sources",
    "Orphan CIs created from different data sources",
    "Duplicate configuration items from different data sources"
  ],
  correctAnswers: [
    "Gaps in attribute data from different data sources",
    "Different attribute values from different data sources"
  ],
  multipleChoice: true
},
{
  id: 12,
  text: "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested via the Identification and Reconciliation Engine (IRE). Where can they locate these tasks in CMDB Workspace?",
  options: [
    "Total status tile under the My Work tab",
    "CMDB feature adoption tile under the Insights tab",
    "Important actions tile under the Home tab"
  ],
  correctAnswers: [
    "Important actions tile under the Home tab"
  ],
  multipleChoice: false
},
{
  id: 13,
  text: "An organization needs to maintain non-discoverable attributes such as warranty expiration dates for hardware CIs. What method ensures accurate maintenance?",
  options: [
    "Use a scheduled data import to update the attributes from an external source",
    "Create a new CI class specifically for non-discoverable attributes",
    "Use the CMDB Reconciliation Engine to update the attributes"
  ],
  correctAnswers: [
    "Use a scheduled data import to update the attributes from an external source"
  ],
  multipleChoice: false
},
{
  id: 14,
  text: "A Manager needs guidance on establishing relationships between Infrastructure CIs, Technical Service Offerings, and Application Services within the CMDB. Which CSDM domain provides this information?",
  options: [
    "Build and Integration (Build)",
    "Foundation",
    "Design and Planning (Design)",
    "Service Consumption (Sell / Consume)",
    "Service Delivery (Manage Technical Services)"
  ],
  correctAnswers: [
    "Service Delivery (Manage Technical Services)"
  ],
  multipleChoice: false
},
{
  id: 15,
  text: "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics. Which actions can the CMDB Administrator take to improve the CMDB Health?",
  options: [
    "Use the Remediation Playbooks linked beside each metric",
    "Focus on metrics with Critical and High priorities",
    "Remove non-operational and retired CIs",
    "Adjust the metrics using exclusion rules to improve scores"
  ],
  correctAnswers: [
    "Use the Remediation Playbooks linked beside each metric",
    "Focus on metrics with Critical and High priorities"
  ],
  multipleChoice: true
},
{
  id: 16,
  text: "A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining Cls and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
  options: [
    "Import set using JDBC data source connection to SCCM using transform maps",
    "SCCM Usage Metering Spoke",
    "SCCM Service Graph Connector",
    "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
  ],
  correctAnswers: [
    "SCCM Service Graph Connector"
  ],
  multipleChoice: false
},
{
  id: 17,
  text: "An organization is updating the CMDB to include new asset types like loT devices. Relevant CI classes need to be added and outdated ones need to be removed from the Principal Class filter to ensure accurate display in ITSM processes. Which roles are needed to add or remove classes?",
  options: [
    "cmdb_query_builder",
    "personalize_dictionary",
    "sn_csdm_admin",
    "sn_cmdb_admin"
  ],
  correctAnswers: [
    "personalize_dictionary",
    "sn_cmdb_admin"
  ],
  multipleChoice: true
},
{
  id: 18,
  text: "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type does the team create?",
  options: [
    "Retire",
    "Delete",
    "Attestation",
    "Certification",
    "Archive"
  ],
  correctAnswers: [
    "Certification"
  ],
  multipleChoice: false
},
{
  id: 19,
  text: "An Asset Manager wants to ensure Asset and CI records remain synchronized automatically. How does the Manager do this?",
  options: [
    "Ensure one-to-one physical mapping between Asset and CI",
    "Ensure that the business rule to update Asset fields on change on the CI table is active",
    "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
    "Ensure that the business rule to update CI fields on change on the asset table is active"
  ],
  correctAnswers: [
    "Ensure that the business rule to update Asset fields on change on the CI table is actives",
    "Ensure that the business rule to update CI fields on change on the asset table is active"
  ],
  multipleChoice: true
},
{
  id: 20,
  text: "User endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the 'Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
  options: [
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
    "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
    "Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
  ],
  correctAnswers: [
    "Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
  ],
  multipleChoice: false
},
{
  id: 21,
  text: "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
  options: [
    "Assignment Group on the CI",
    "Affected CIs in the Incident record",
    "Service classification in the Technical Service",
    "Business Criticality in the Service Offering"
  ],
  correctAnswers: [
    "Business Criticality in the Service Offering"
  ],
  multipleChoice: false
},
{
  id: 22,
  text: "The Change Management team in an organization wants to implement a Change across multiple Cls at the same time. Which field on the Change Request form needs to be populated with a dynamic CI group?",
  options: [
    "Configuration Item",
    "Business Service",
    "Service Offering"
  ],
  correctAnswers: [
    "Configuration Item"
  ],
  multipleChoice: false
},
{
  id: 23,
  text: "A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM framework. What is the purpose of an information object?",
  options: [
    "It describes data in general on a group of Configuration Items.",
    "It describes the logical data to the Business Applications.",
    "It describes data exchanged between an API interface and an Application."
  ],
  correctAnswers: [
    "It describes the logical data to the Business Applications."
  ],
  multipleChoice: false
},
{
  id: 24,
  text: "Where can an administrator perform Natural Language Queries (NLQ)?",
  options: [
    "CMDB Data Manager",
    "CI Class Manager",
    "CMDB Workspace",
    "CMDB Health Dashboard"
  ],
  correctAnswers: [
    "CMDB Workspace"
  ],
  multipleChoice: false
},
{
  id: 25,
  text: "Two new Cl records are imported into the hardware class of the CMDB: Cl1: The name of this Cl record matches the name of an existing Cl record in the CMDB. CI2: The IP address of this Cl record matches the IP address of an existing Cl record in the CMDB. Which is correct based on the identification rule and the imported CI records?",
  options: [
    "Cl1 will be updated with matching record and CI2 will be inserted as new record.",
    "Cl1 and CI2 both will be inserted as new records."
  ],
  correctAnswers: [
    "Cl1 will be updated with matching record and CI2 will be inserted as new record."
  ],
  multipleChoice: false
},
{
  id: 26,
  text: "A CMDB Administrator is working in the CI Class Manager on the Basic Info tab. How can the class be set as a Principal Class?",
  options: [
    "Click the Principal Class UI Action button",
    "Check the Principal Class check box",
    "Select 'Yes' from the Principal Class choice list"
  ],
  correctAnswers: [
    "Check the Principal Class check box"
  ],
  multipleChoice: false
},
{
  id: 27,
  text: "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
  options: [
    "CMDB Data Foundation Dashboard",
    "CMDB Workspace",
    "CSDM Data Foundation Dashboard",
    "Service Mapping Data Foundation Dashboard"
  ],
  correctAnswers: [
    "CSDM Data Foundation Dashboard"
  ],
  multipleChoice: false
},
{
  id: 28,
  text: "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate?",
  options: [
    "Business Application",
    "Service Offering",
    "Application Service",
    "Service Portfolio"
  ],
  correctAnswers: [
    "Service Offering",
    "Application Service"
  ],
  multipleChoice: true
},
{
  id: 29,
  text: "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
  options: [
    "Configuration File Name",
    "Configuration File Path",
    "Class",
    "Version",
    "Port"
  ],
  correctAnswers: [
    "Configuration File Path"
  ],
  multipleChoice: false
},
{
  id: 30,
  text: "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
  options: [
    "CMDB Query Builder",
    "Coverage window on the CMDB 360 tab",
    "Saved queries window on the CMDB 360 tab",
    "Saved queries window on the Insights tab"
  ],
  correctAnswers: [
    "Saved queries window on the CMDB 360 tab"
  ],
  multipleChoice: false
},
{
  id: 31,
  text: "A CMDB CI Class Owner responsible for the Windows Servers needs to manage the Windows Server class. Which CI Class Manager feature will help the CI Class Owner streamline this task?",
  options: [
    "Search CI Classes",
    "Pinned Classes",
    "CI Favorites"
  ],
  correctAnswers: [
    "Pinned Classes"
  ],
  multipleChoice: false
},
{
  id: 32,
  text: "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
  options: [
    "Life Cycle Stages [life_cycle_stage]",
    "Life Cycle Controls [life_cycle_control]",
    "Life Cycle Stage Status [life_cycle_stage_status]",
    "Life Cycle Mapping [life_cycle_mapping]"
  ],
  correctAnswers: [
    "Life Cycle Mapping [life_cycle_mapping]"
  ],
  multipleChoice: false
},
{
  id: 33,
  text: "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
  options: [
    "Life Cycle Stages [life_cycle_stage]",
    "Life Cycle Controls [life_cycle_control]",
    "Life Cycle Stage Status [life_cycle_stage_status]",
    "Life Cycle Mapping [life_cycle_mapping]"
  ],
  correctAnswers: [
    "Life Cycle Mapping [life_cycle_mapping]"
  ],
  multipleChoice: false
},
{
  id: 34,
  text: "A CMDB Administrator needs to prevent duplicate CI creation from import sets that load data into the CMDB from vendor shipment files containing CI information. How can the Administrator do this?",
  options: [
    "Create comparison rules in the IRE",
    "Use the CMDBTransformUtil API in the transform script",
    "Set the system property to utilize the IRE within transform maps",
    "Set the coalesce on two mappings within the transform map"
  ],
  correctAnswers: [
    "Set the coalesce on two mappings within the transform map"
  ],
  multipleChoice: false
},
{
  id: 35,
  text: "A CMDB Administrator notices that Cls do not have a support group. How can the support group be automatically populated and maintained on the Cl record?",
  options: [
    "Dynamic Cl group",
    "Technology Management Service (Technical Service)",
    "CI Class Manager",
    "Technology Management Service Offering (Technical Service Offering)"
  ],
  correctAnswers: [
    "Technology Management Service (Technical Service)"
  ],
  multipleChoice: false
},
{
  id: 36,
  text: "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
  options: [
    "CMDB Health Dashboard > Duplicate Cls tab",
    "CMDB Workspace > My Work tab",
    "CMDB Workspace > Management tab",
    "CMDB Health Dashboard > Audit tab"
  ],
  correctAnswers: [
    "CMDB Workspace > My Work tab"
  ],
  multipleChoice: false
},
{
  id: 37,
  text: "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However, each discovery source categorizes the same Cls differently, leading to duplicate records and inconsistencies across the system. As a result, the CMDB team is struggling with data accuracy and standardization.  What actions does the CMDB team take to resolve the issue?",
  options: [
    "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
    "Allow each discovery source to define its own CI class, even if it results in inconsistencies",
    "Implement and use identification and reconciliation rules to avoid duplicates and standardize Cl classification",
    "Create a custom script to manually adjust incoming data before storing it in the CMDB"
  ],
  correctAnswers: [
    "Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
    "Implement and use identification and reconciliation rules to avoid duplicates and standardize Cl classification"
  ],
  multipleChoice: true
},
{
  id: 38,
  text: "A Configuration Manager working in the CMDB Workspace wants to see how Cls are connected to each other. Which tool can be used?",
  options: [
    "Relationship Map",
    "Unified Map",
    "Business Service Map"
  ],
  correctAnswers: [
    "Relationship Map"
  ],
  multipleChoice: false
},
{
  id: 39,
  text: "A CMDB team has noticed that some hardware Cls are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps.  Which accomplishes this task?",
  options: [
    "CMDB Data Foundation Playbook",
    "CI Class Manager",
    "Service Graph Connectors"
  ],
  correctAnswers: [
    "CMDB Data Foundation Playbook"
  ],
  multipleChoice: false
},
{
  id: 40,
  text: "A ServiceNow Administrator wants to implement Service Graph Connectors to provide ntegrations to many third-party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator?",
  options: [
    "Workflow Automation",
    "Cloud",
    "DevOps",
    "Observability"
  ],
  correctAnswers: [
    "Cloud",
    "Observability"
  ],
  multipleChoice: true
},
{
  id: 41,
  text: "Using CI Class Manager, the Tomcat identification rule has the following criterion attributes configured: · Class . Install Directory Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
  options: [
    "Applies to",
    "Independent",
    "Allow fallback to parent's rules",
    "Criterion attributes"
  ],
  correctAnswers: [
    "Allow fallback to parent's rules"
  ],
  multipleChoice: false
},
{
  id: 42,
  text: "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
  options: [
    "CMDB Health Dashboard",
    "CMDB Workspace",
    "CMDB CI Class Manager",
    "CMDB Data Manager"
  ],
  correctAnswers: [
    "CMDB CI Class Manager"
  ],
  multipleChoice: false
},
{
  id: 43,
  text: "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
  options: [
    "Establishing clear governance and continuously monitoring CMDB health",
    "Relying on automated discovery tools to maintain and update CMDB records",
    "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of Cls",
    "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
  ],
  correctAnswers: [
    "Establishing clear governance and continuously monitoring CMDB health"
  ],
  multipleChoice: false
},
{
  id: 44,
  text: "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in CI Class Manager. Which is the recommended field to be used for a policy task assignment?",
  options: [
    "Approval group",
    "Managed by group",
    "Change group",
    "Support group"
  ],
  correctAnswers: [
    "Managed by group"
  ],
  multipleChoice: false
},
{
  id: 45,
  text: "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use to change the icon for the class?",
  options: [
    "Basic Info",
    "Suggested Relationships",
    "C.CI List",
    "Attributes"
  ],
  correctAnswers: [
    "Basic Info"
  ],
  multipleChoice: false
},
{
  id: 46,
  text: "An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services. Which steps does the organization take to build this query?",
  options: [
    "Add a non-CMDB table to the query",
    "Use a Service Mapping Query to include non-CMDB tables like the Incident table",
    "Use a Service Mapping Query to find all incidents related to the database",
    "Use a CMDB Query to include application services and their related infrastructure"
  ],
  correctAnswers: [
    "Use a Service Mapping Query to find all incidents related to the database",
    "Use a CMDB Query to include application services and their related infrastructure"
  ],
  multipleChoice: true
},
{
  id: 47,
  text: "A CMDB Administrator has installed a Service Graph Connector (SGC), and then made customizations to the mappings. Which is a consequence of this action?",
  options: [
    "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC.",
    "The customization will prevent the SGC from executing without an approval record attached to the affected mapping record.",
    "Fields populated by a customization will have a special tag associated with them in the CMDB."
  ],
  correctAnswers: [
    "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC."
  ],
  multipleChoice: false
},
{
  id: 48,
  text: "Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service?",
  options: [
    "IntegrationHub ETL",
    "Service Mapping",
    "Data Manager",
    "Event Management",
    "Discovery"
  ],
  correctAnswers: [
    "Service Mapping",
    "Discovery"
  ],
  multipleChoice: true
},
{
  id: 49,
  text: "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by CI Class. How can the Configuration Manager get a score for regionally relevant Cls?",
  options: [
    "Create CMDB groups with type, health, by region",
    "Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
    "On the CMDB health settings, activate the option, Group scores by region"
  ],
  correctAnswers: [
    "Create CMDB groups with type, health, by region"
  ],
  multipleChoice: false
},
{
  id: 50,
  text: "The CMDB Administrator group seeks to filter specific CI classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management. Which feature can the group utilize to achieve this goal?",
  options: [
    "Health Inclusion Rules",
    "Data Refresh Rules",
    "Reconciliation Rules",
    "Identification Rules"
  ],
  correctAnswers: [
    "Health Inclusion Rules"
  ],
  multipleChoice: false
},
{
  id: 51,
  text: "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
  options: [
    "Retire, Archive, Attestation, Certification, and Delete",
    "Archive and Delete",
    "Delete, Attestation, Retire, and Certification",
    "Attestation, Retire, and Certification"
  ],
  correctAnswers: [
    "Retire, Archive, Attestation, Certification, and Delete"
  ],
  multipleChoice: false
},
{
  id: 52,
  text: "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
  options: [
    "Reconciliation Rules",
    "CMDB Workspace",
    "CMDB Data Manager",
    "CMDB 360/Multisource CMDB"
  ],
  correctAnswers: [
    "CMDB 360/Multisource CMDB"
  ],
  multipleChoice: false
},
{
  id: 53,
  text: "How is the CMDB aligned to business processes?",
  options: [
    "Extends service delivery management to all enterprise departments",
    "Enhances decision-making and operational efficiency across the organization",
    "Enables the CFO/CIO to track software licenses",
    "Provides a centralized view of configuration items and their relationships"
  ],
  correctAnswers: [
    "Enhances decision-making and operational efficiency across the organization",
    "Provides a centralized view of configuration items and their relationships"
  ],
  multipleChoice: true
},
{
  id: 54,
  text: "A Configuration Manager needs to ingest third-party Cls into the CMDB. Which method minimizes the risk of technical debt?",
  options: [
    "Table API",
    "Vendor-provided integration",
    "Service Graph Connector",
    "Import Sets and Transform Maps"
  ],
  correctAnswers: [
    "Service Graph Connector"
  ],
  multipleChoice: false
},
{
  id: 55,
  text: "What is the relationship between an application and a server?",
  options: [
    "Application > Runs on :: Runs > Server",
    "Application > Uses :: Used by > Server",
    "Application > Used by :: Uses > Server",
    "Application > Runs :: Runs On > Server"
  ],
  correctAnswers: [
    "Application > Runs :: Runs On > Server"
  ],
  multipleChoice: false
},
{
  id: 56,
  text: "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with Cls in the CMDB?",
  options: [
    "Data Quality Business Rule",
    "CMDB Workspace",
    "Data Quality Scheduled Job",
    "CMDB Audit Business Rule"
  ],
  correctAnswers: [
    "Data Quality Scheduled Job"
  ],
  multipleChoice: false
},
{
  id: 57,
  text: "The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated Cls. What CSDM stage would this be completed in?",
  options: [
    "Crawl",
    "Run",
    "Fly",
    "Walk",
    "Foundation"
  ],
  correctAnswers: [
    "Run"
  ],
  multipleChoice: false
},
{
  id: 58,
  text: "A Configuration Manager is reviewing the life cycle of Cls to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
  options: [
    "Life cycle properties",
    "Life cycle choice list",
    "Life cycle mappings"
  ],
  correctAnswers: [
    "Life cycle mappings"
  ],
  multipleChoice: false
},
{
  id: 59,
  text: "A CMDB Administrator is using the Duplicate CI Remediator to address a de-duplication task. On the first tab of the wizard, the Main Cl is selected. Which attributes are used to identify the Main CI?",
  options: [
    "Oldest Created",
    "Newest Created",
    "Least Related Items",
    "Most Related Items"
  ],
  correctAnswers: [
    "Oldest Created",
    "Most Related Items"
  ],
  multipleChoice: true
},
{
  id: 60,
  text: "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
  options: [
    "It is a free application on the ServiceNow Innovation Lab.",
    "It is a paid application on the ServiceNow Store.",
    "It is a free application on the ServiceNow Store.",
    "It is active by default."
  ],
  correctAnswers: [
    "It is a free application on the ServiceNow Store."
  ],
  multipleChoice: false
},
];

export default CSDM3;
