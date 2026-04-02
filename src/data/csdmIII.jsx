const CSDMIII = [
  {
    "id": 1,
    "text": "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries. What insights are gained from CMDB 360 queries? (Choose 2)",
    "options": [
      "A. Unique CIs created from different data sources",
      "B. Gaps in attribute data from different data sources",
      "C. Different attribute values from different data sources",
      "D. Orphan CIs created from different data sources",
      "E. Duplicate configuration items from different data sources"
    ],
    "correctAnswers": [
      "B. Gaps in attribute data from different data sources",
      "C. Different attribute values from different data sources"
    ],
    "multipleChoice": true
  },
  {
    "id": 2,
    "text": "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
    "options": [
      "A. Total status tile under the My Work tab",
      "B. CMDB feature adoption tile under the Insights tab",
      "C. Important actions tile under the Home tab"
    ],
    "correctAnswers": [
      "C. Important actions tile under the Home tab"
    ],
    "multipleChoice": false
  },
  {
    "id": 3,
    "text": "An organization needs to maintain non-discoverable attributes such as warranty expiration dates for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    "options": [
      "A. Use a scheduled data import to update the attributes from an external source",
      "B. Create a new CI class specifically for non-discoverable attributes",
      "C. Use the CMDB Reconciliation Engine to update the attributes"
    ],
    "correctAnswers": [
      "A. Use a scheduled data import to update the attributes from an external source"
    ],
    "multipleChoice": false
  },
  {
    "id": 4,
    "text": "A Manager needs information on how to correctly establish relationships between Infrastructure CIs, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. Which CSDM domain would provide this information?",
    "options": [
      "A. Build and Integration (Build)",
      "B. Foundation",
      "C. Design and Planning (Design)",
      "D. Service Consumption (Sell / Consume)",
      "E. Service Delivery (Manage Technical Services)"
    ],
    "correctAnswers": [
      "E. Service Delivery (Manage Technical Services)"
    ],
    "multipleChoice": false
  },
  {
    "id": 5,
    "text": "A CMDB Administrator uses the CMDB Data Foundations Dashboard and sees low scores for several metrics. Which actions can the CMDB Administrator take to improve the CMDB Health? (Choose 2)",
    "options": [
      "A. Use the Remediation Playbooks linked beside each metric",
      "B. Focus on metric(s) with Critical and High priorities",
      "C. Remove non-operational and retired CIs",
      "D. Adjust the metrics using exclusion rules to improve the scores"
    ],
    "correctAnswers": [
      "A. Use the Remediation Playbooks linked beside each metric",
      "B. Focus on metric(s) with Critical and High priorities"
    ],
    "multipleChoice": true
  },
  {
    "id": 6,
    "text": "A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining CIs and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
    "options": [
      "A. Import set using JDBC data source connection to SCCM using transform maps",
      "B. SCCM Usage Metering Spoke",
      "C. SCCM Service Graph Connector",
      "D. IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
    ],
    "correctAnswers": [
      "C. SCCM Service Graph Connector"
    ],
    "multipleChoice": false
  },
  {
    "id": 7,
    "text": "An organization is updating the CMDB to include new asset types like IoT devices. Relevant CI classes need to be added and outdated ones removed from the Principal Class filter. Which roles are needed to add or remove classes? (Choose 2)",
    "options": [
      "A. cmdb_query_builder",
      "B. personalize_dictionary",
      "C. sn_csdm_admin",
      "D. sn_cmdb_admin"
    ],
    "correctAnswers": [
      "B. personalize_dictionary",
      "D. sn_cmdb_admin"
    ],
    "multipleChoice": true
  },
  {
    "id": 8,
    "text": "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. Which CMDB Data Manager policy type does the team create?",
    "options": [
      "A. Retire",
      "B. Delete",
      "C. Attestation",
      "D. Certification",
      "E. Archive"
    ],
    "correctAnswers": [
      "D. Certification"
    ],
    "multipleChoice": false
  },
  {
    "id": 9,
    "text": "The Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule of 'most reported' for the Disk Space (GB) field. Data sources: Ivanti=75, ServiceNow=75, LANDesk=50, Altiris=80. Which value would be added to the CMDB?",
    "options": [
      "A. 80",
      "B. 75",
      "C. 50"
    ],
    "correctAnswers": [
      "B. 75"
    ],
    "multipleChoice": false
  },
  {
    "id": 10,
    "text": "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this? (Choose 2)",
    "options": [
      "A. Ensure one-to-one physical mapping between Asset and CI",
      "B. Ensure that the business rule to update Asset fields on change on the CI table is active",
      "C. Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "D. Ensure that the business rule to update CI fields on change on the asset table is active"
    ],
    "correctAnswers": [
      "B. Ensure that the business rule to update Asset fields on change on the CI table is active",
      "D. Ensure that the business rule to update CI fields on change on the asset table is active"
    ],
    "multipleChoice": true
  },
   {
    "id": 11,
    "text": "A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM sell/consume domain?",
    "options": [
      "A. Business Service Offering, Business Service",
      "B. Business Capability, Information Object, Business Application",
      "C. Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)"
    ],
    "correctAnswers": [
      "A. Business Service Offering, Business Service"
    ],
    "multipleChoice": false
  },
  {
    "id": 12,
    "text": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      "A. Completeness",
      "B. Correctness",
      "C. Compliance"
    ],
    "correctAnswers": [
      "B. Correctness"
    ],
    "multipleChoice": false
  },
  {
    "id": 13,
    "text": "After installing the Service Graph Connector Central plugin, what workspace will have the new Service Graph Connector Central tab available?",
    "options": [
      "A. Service Graph Connector Workspace",
      "B. CMDB Workspace",
      "C. Discovery Admin Workspace"
    ],
    "correctAnswers": [
      "B. CMDB Workspace"
    ],
    "multipleChoice": false
  },
  {
    "id": 14,
    "text": "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
    "options": [
      "A. Certification",
      "B. Delete",
      "C. Retire",
      "D. Archive"
    ],
    "correctAnswers": [
      "D. Archive"
    ],
    "multipleChoice": false
  },
  {
    "id": 15,
    "text": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "A. My Tasks in the Application Navigator",
      "B. The de-duplication task module",
      "C. The de-duplication dashboard on the CMDB workspace"
    ],
    "correctAnswers": [
      "C. The de-duplication dashboard on the CMDB workspace"
    ],
    "multipleChoice": false
  },
  {
    "id": 16,
    "text": "A Business Relationship Manager wants to implement Service Portfolio Management (SPM) and present offerings to business consumers. Which CSDM Domain does this align with?",
    "options": [
      "A. Build and Integration (Build)",
      "B. Service Consumption (Sell/Consume)",
      "C. Design and Planning (Design)",
      "D. Service Delivery"
    ],
    "correctAnswers": [
      "B. Service Consumption (Sell/Consume)"
    ],
    "multipleChoice": false
  },
  {
    "id": 17,
    "text": "A Service Owner needs to view related items such as Active Incidents and Planned Changes directly on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
    "options": [
      "A. Tool box",
      "B. Map",
      "C. Contextual side panel",
      "D. Content controls"
    ],
    "correctAnswers": [
      "C. Contextual side panel"
    ],
    "multipleChoice": false
  },
  {
    "id": 18,
    "text": "Which are CMDB Data Manager end of life policy types? (Choose 2)",
    "options": [
      "A. Retire",
      "B. Lost",
      "C. Decommission",
      "D. Disposed",
      "E. Archive"
    ],
    "correctAnswers": [
      "A. Retire",
      "E. Archive"
    ],
    "multipleChoice": true
  },
  {
    "id": 19,
    "text": "A CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are benefits of using this application? (Choose 2)",
    "options": [
      "A. Has a framework to create custom metrics for the CMDB",
      "B. Checks that important data is valid and properly configured",
      "C. Provides playbooks to assist in the remediation of potential risks",
      "D. Uses automation to remediate potential risks"
    ],
    "correctAnswers": [
      "B. Checks that important data is valid and properly configured",
      "D. Uses automation to remediate potential risks"
    ],
    "multipleChoice": true
  },
  {
    "id": 20,
    "text": "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
    "options": [
      "A. End of Life - Retired",
      "B. Missing - Stolen",
      "C. Inventory - Available",
      "D. In any lifecycle state"
    ],
    "correctAnswers": [
      "A. End of Life - Retired"
    ],
    "multipleChoice": false
  },
   {
    "id": 21,
    "text": "User endpoint devices are imported into the CMDB and populate the 'Assigned to' field on the Computer CI. The Asset team wants this field also populated on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      "A. Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI",
      "B. Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset",
      "C. Hide the 'Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the 'Assigned to' value"
    ],
    "correctAnswers": [
      "A. Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
    ],
    "multipleChoice": false
  },
  {
    "id": 22,
    "text": "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
    "options": [
      "A. Assignment Group on the CI record",
      "B. Affected CIs in the Incident record",
      "C. Service classification in the Technical Service",
      "D. Business Criticality in the Service Offering"
    ],
    "correctAnswers": [
      "D. Business Criticality in the Service Offering"
    ],
    "multipleChoice": false
  },
  {
    "id": 23,
    "text": "The Change Management team wants to implement a Change across multiple CIs at the same time. Which field on the Change Request form needs to be populated with a dynamic CI group?",
    "options": [
      "A. Configuration Item",
      "B. Business Service",
      "C. Service Offering"
    ],
    "correctAnswers": [
      "A. Configuration Item"
    ],
    "multipleChoice": false
  },
  {
    "id": 24,
    "text": "A company wants to track regulatory compliance. What is the purpose of an 'information object' in the CSDM framework?",
    "options": [
      "A. It describes data in general on a group of Configuration Items.",
      "B. It describes the logical data to the Business Applications.",
      "C. It describes data exchanged between an API interface and an Application."
    ],
    "correctAnswers": [
      "B. It describes the logical data to the Business Applications."
    ],
    "multipleChoice": false
  },
  {
    "id": 25,
    "text": "Where can an administrator perform Natural Language Queries (NLQ)?",
    "options": [
      "A. CMDB Data Manager",
      "B. CI Class Manager",
      "C. CMDB Workspace",
      "D. CMDB Health Dashboard"
    ],
    "correctAnswers": [
      "C. CMDB Workspace"
    ],
    "multipleChoice": false
  },
  {
    "id": 26,
    "text": "Identification rule: Serial Number/serial_number,serial_number_type (P100); Hardware/serial_number (P200); Hardware/name (P300); Network Adapter/mac_address,name (P400). CI1 matches name of existing CI. CI2 matches IP address of existing CI. Which is correct?",
    "options": [
      "A. CI1 will be updated with matching record and CI2 will be inserted as new record.",
      "B. CI1 and CI2 both will be inserted as new records."
    ],
    "correctAnswers": [
      "A. CI1 will be updated with matching record and CI2 will be inserted as new record."
    ],
    "multipleChoice": false
  },
  {
    "id": 27,
    "text": "A CMDB Administrator is working in the CI Class Manager on the Basic Info tab. How can the class be set as a Principal Class?",
    "options": [
      "A. Click the Principal Class UI Action button",
      "B. Check the Principal Class check box",
      "C. Select 'Yes' from the Principal Class choice list"
    ],
    "correctAnswers": [
      "B. Check the Principal Class check box"
    ],
    "multipleChoice": false
  },
  {
    "id": 28,
    "text": "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
    "options": [
      "A. CMDB Data Foundation Dashboard",
      "B. CMDB Workspace",
      "C. CSDM Data Foundation Dashboard",
      "D. Service Mapping Data Foundation Dashboard"
    ],
    "correctAnswers": [
      "C. CSDM Data Foundation Dashboard"
    ],
    "multipleChoice": false
  },
  {
    "id": 29,
    "text": "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate? (Choose 2)",
    "options": [
      "A. Business Application",
      "B. Service Offering",
      "C. Application Service",
      "D. Service Portfolio"
    ],
    "correctAnswers": [
      "B. Service Offering",
      "C. Application Service"
    ],
    "multipleChoice": true
  },
  {
    "id": 30,
    "text": "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
    "options": [
      "A. Configuration File Name",
      "B. Configuration File Path",
      "C. Class",
      "D. Version",
      "E. Port"
    ],
    "correctAnswers": [
      "B. Configuration File Path"
    ],
    "multipleChoice": false
  },
  {
    "id": 31,
    "text": "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      "A. CMDB Query Builder",
      "B. Coverage window on the CMDB 360 tab",
      "C. Saved queries window on the CMDB 360 tab",
      "D. Saved queries window on the Insights tab"
    ],
    "correctAnswers": [
      "C. Saved queries window on the CMDB 360 tab"
    ],
    "multipleChoice": false
  },
  {
    "id": 32,
    "text": "A CMDB CI Class Owner responsible for Windows Servers needs to manage the Windows Server class frequently. Which CI Class Manager feature will help the CI Class Owner streamline this task?",
    "options": [
      "A. Search CI Classes",
      "B. Pinned Classes",
      "C. CI Favorites"
    ],
    "correctAnswers": [
      "B. Pinned Classes"
    ],
    "multipleChoice": false
  },
  {
    "id": 33,
    "text": "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    "options": [
      "A. Life Cycle Stages [life_cycle_stage]",
      "B. Life Cycle Controls [life_cycle_control]",
      "C. Life Cycle Stage Status [life_cycle_stage_status]",
      "D. Life Cycle Mapping [life_cycle_mapping]"
    ],
    "correctAnswers": [
      "D. Life Cycle Mapping [life_cycle_mapping]"
    ],
    "multipleChoice": false
  },
  {
    "id": 34,
    "text": "A CMDB Administrator needs to prevent duplicate CI creation from import sets that load data from vendor shipment files containing CI information. How can the Administrator do this?",
    "options": [
      "A. Create comparison rules in the IRE",
      "B. Use the CMDBTransformUtil API in the transform script",
      "C. Set the system property to utilize the IRE within transform maps",
      "D. Set the coalesce on two mappings within the transform map"
    ],
    "correctAnswers": [
      "D. Set the coalesce on two mappings within the transform map"
    ],
    "multipleChoice": false
  },
  {
    "id": 35,
    "text": "A CMDB Administrator notices that CIs do not have a support group. How can the support group be automatically populated and maintained on the CI record?",
    "options": [
      "A. Dynamic CI group",
      "B. Technology Management Service (Technical Service)",
      "C. CI Class Manager",
      "D. Technology Management Service Offering (Technical Service Offering)"
    ],
    "correctAnswers": [
      "B. Technology Management Service (Technical Service)"
    ],
    "multipleChoice": false
  },
  {
    "id": 36,
    "text": "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    "options": [
      "A. CMDB Health Dashboard > Duplicate CIs tab",
      "B. CMDB Workspace > My Work tab",
      "C. CMDB Workspace > Management tab",
      "D. CMDB Health Dashboard > Audit tab"
    ],
    "correctAnswers": [
      "B. CMDB Workspace > My Work tab"
    ],
    "multipleChoice": false
  },
  {
    "id": 37,
    "text": "A global enterprise integrates data from multiple discovery sources (ServiceNow Discovery, SCCM, AWS, manual uploads). Each source categorizes CIs differently, causing duplicates and inconsistencies. What actions does the CMDB team take? (Choose 2)",
    "options": [
      "A. Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "B. Allow each discovery source to define its own CI class, even if it results in inconsistencies",
      "C. Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification ",
      "D. Create a custom script to manually adjust incoming data before storing it in the CMDB"
    ],
    "correctAnswers": [
      "A. Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "C. Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification "
    ],
    "multipleChoice": true
  },
  {
    "id": 38,
    "text": "A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected to each other. Which tool can be used?",
    "options": [
      "A. Relationship Map",
      "B. Unified Map",
      "C. Business Service Map"
    ],
    "correctAnswers": [
      "A. Relationship Map"
    ],
    "multipleChoice": false
  },
  {
    "id": 39,
    "text": "A CMDB team has noticed that some hardware CIs are missing serial number information. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
    "options": [
      "A. CMDB Data Foundation Playbook",
      "B. CI Class Manager",
      "C. Service Graph Connectors"
    ],
    "correctAnswers": [
      "A. CMDB Data Foundation Playbook"
    ],
    "multipleChoice": false
  },
  {
    "id": 40,
    "text": "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions. Which categories of connectors are available? (Choose 2)",
    "options": [
      "A. Workflow Automation",
      "B. Cloud",
      "C. DevOps",
      "D. Observability"
    ],
    "correctAnswers": [
      "B. Cloud",
      "D. Observability"
    ],
    "multipleChoice": true
  },
  {
    "id": 41,
    "text": "The Tomcat identification rule has criterion attributes: Class and Install Directory. Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat rule?",
    "options": [
      "A. Applies to",
      "B. Independent",
      "C. Allow fallback to parent's rules",
      "D. Criterion attributes"
    ],
    "correctAnswers": [
      "C. Allow fallback to parent's rules"
    ],
    "multipleChoice": false
  },
  {
    "id": 42,
    "text": "A Configuration Management team needs to prevent duplicate server records. Server records are identified when processed via the IRE using the configured identification rules. Where would these rules be configured?",
    "options": [
      "A. CMDB Health Dashboard",
      "B. CMDB Workspace",
      "C. CMDB CI Class Manager",
      "D. CMDB Data Manager"
    ],
    "correctAnswers": [
      "C. CMDB CI Class Manager"
    ],
    "multipleChoice": false
  },
  {
    "id": 43,
    "text": "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": [
      "A. Establishing clear governance and continuously monitoring CMDB health",
      "B. Relying on automated discovery tools to maintain and update CMDB records",
      "C. Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
      "D. Allowing IT teams to modify CMDB records as needed to promote flexibility in data management"
    ],
    "correctAnswers": [
      "A. Establishing clear governance and continuously monitoring CMDB health"
    ],
    "multipleChoice": false
  },
  {
    "id": 44,
    "text": "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in CI Class Manager. Which is the recommended field to be used for a policy task assignment?",
    "options": [
      "A. Approval group",
      "B. Managed by group",
      "C. Change group",
      "D. Support group"
    ],
    "correctAnswers": [
      "B. Managed by group"
    ],
    "multipleChoice": false
  },
  {
    "id": 45,
    "text": "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use to change the icon for the class?",
    "options": [
      "A. Basic Info",
      "B. Suggested Relationships",
      "C. CI List",
      "D. Attributes"
    ],
    "correctAnswers": [
      "A. Basic Info"
    ],
    "multipleChoice": false
  },
  {
    "id": 46,
    "text": "An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services. Which steps does the organization take to build this query? (Choose 2)",
    "options": [
      "A. Add a non-CMDB table to the query",
      "B. Use a Service Mapping Query to include non-CMDB tables like the Incident table",
      "C. Use a Service Mapping Query to find all incidents related to the database ",
      "D. Use a CMDB Query to include application services and their related infrastructure"
    ],
    "correctAnswers": [
      "C. Use a Service Mapping Query to find all incidents related to the database ",
      "D. Use a CMDB Query to include application services and their related infrastructure"
    ],
    "multipleChoice": true
  },
  {
    "id": 47,
    "text": "A CMDB Administrator has installed a Service Graph Connector (SGC) and then made customizations to the mappings. Which is a consequence of this action?",
    "options": [
      "A. The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC.",
      "B. The customization will prevent the SGC from executing without an approval record attached to the affected mapping record.",
      "C. Fields populated by a customization will have a special tag associated with them in the CMDB."
    ],
    "correctAnswers": [
      "A. The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC."
    ],
    "multipleChoice": false
  },
  {
    "id": 48,
    "text": "Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service? (Choose 2)",
    "options": [
      "A. IntegrationHub ETL",
      "B. Service Mapping",
      "C. Data Manager",
      "D. Event Management",
      "E. Discovery"
    ],
    "correctAnswers": [
      "B. Service Mapping",
      "E. Discovery"
    ],
    "multipleChoice": true
  },
  {
    "id": 49,
    "text": "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to get a score for regionally relevant CIs. The Configuration Manager only sees overall score grouped by CI Class. How can they get a regional score?",
    "options": [
      "A. Create CMDB groups with type, health, by region",
      "B. Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
      "C. On the CMDB health settings, activate the option, Group scores by region"
    ],
    "correctAnswers": [
      "A. Create CMDB groups with type, health, by region"
    ],
    "multipleChoice": false
  },
  {
    "id": 50,
    "text": "The CMDB Administrator group seeks to filter specific CI classes that display on the CMDB Health Dashboard, excluding items that are not ready for management. Which feature can the group utilize to achieve this goal?",
    "options": [
      "A. Health Inclusion Rules",
      "B. Data Refresh Rules",
      "C. Reconciliation Rules",
      "D. Identification Rules"
    ],
    "correctAnswers": [
      "A. Health Inclusion Rules"
    ],
    "multipleChoice": false
  },
   {
    "id": 51,
    "text": "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    "options": [
      "A. Retire, Archive, Attestation, Certification, and Delete",
      "B. Archive and Delete",
      "C. Delete, Attestation, Retire, and Certification",
      "D. Attestation, Retire, and Certification"
    ],
    "correctAnswers": [
      "A. Retire, Archive, Attestation, Certification, and Delete"
    ],
    "multipleChoice": false
  },
  {
    "id": 52,
    "text": "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    "options": [
      "A. Reconciliation Rules",
      "B. CMDB Workspace",
      "C. CMDB Data Manager",
      "D. CMDB 360/Multisource CMDB"
    ],
    "correctAnswers": [
      "D. CMDB 360/Multisource CMDB"
    ],
    "multipleChoice": false
  },
  {
    "id": 53,
    "text": "How is the CMDB aligned to business processes? (Choose 2)",
    "options": [
      "A. Extends service delivery management to all enterprise departments",
      "B. Enhances decision-making and operational efficiency across the organization",
      "C. Enables the CFO/CIO to track software licenses",
      "D. Provides a centralized view of configuration items and their relationships"
    ],
    "correctAnswers": [
      "B. Enhances decision-making and operational efficiency across the organization",
      "D. Provides a centralized view of configuration items and their relationships"
    ],
    "multipleChoice": true
  },
  {
    "id": 54,
    "text": "A Configuration Manager needs to ingest third-party CIs into the CMDB. Which method minimizes the risk of technical debt?",
    "options": [
      "A. Table API",
      "B. Vendor-provided integration",
      "C. Service Graph Connector",
      "D. Import Sets and Transform Maps"
    ],
    "correctAnswers": [
      "C. Service Graph Connector"
    ],
    "multipleChoice": false
  },
  {
    "id": 55,
    "text": "What is the relationship between an application and a server?",
    "options": [
      "A. Application > Runs on::Runs > Server",
      "B. Application > Uses::Used by > Server",
      "C. Application > Used by::Uses > Server",
      "D. Application > Runs::Runs On > Server"
    ],
    "correctAnswers": [
      "D. Application > Runs::Runs On > Server"
    ],
    "multipleChoice": false
  },
  {
    "id": 56,
    "text": "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    "options": [
      "A. Data Quality Business Rule",
      "B. CMDB Workspace",
      "C. Data Quality Scheduled Job",
      "D. CMDB Audit Business Rule"
    ],
    "correctAnswers": [
      "C. Data Quality Scheduled Job"
    ],
    "multipleChoice": false
  },
  {
    "id": 57,
    "text": "The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs. What CSDM stage would this be completed in?",
    "options": [
      "A. Crawl",
      "B. Run",
      "C. Fly",
      "D. Walk",
      "E. Foundation"
    ],
    "correctAnswers": [
      "B. Run"
    ],
    "multipleChoice": false
  },
  {
    "id": 58,
    "text": "A Configuration Manager is reviewing the life cycle of CIs including legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
    "options": [
      "A. Life cycle properties",
      "B. Life cycle choice list",
      "C. Life cycle mappings"
    ],
    "correctAnswers": [
      "C. Life cycle mappings"
    ],
    "multipleChoice": false
  },
  {
    "id": 59,
    "text": "A CMDB Administrator is using the Duplicate CI Remediator. On the first tab of the wizard, the Main CI is selected. Which attributes are used to identify the Main CI? (Choose 2)",
    "options": [
      "A. Oldest Created",
      "B. Newest Created",
      "C. Least Related Items",
      "D. Most Related Items"
    ],
    "correctAnswers": [
      "A. Oldest Created",
      "D. Most Related Items"
    ],
    "multipleChoice": true
  },
  {
    "id": 60,
    "text": "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    "options": [
      "A. It is a free application on the ServiceNow Innovation Lab.",
      "B. It is a paid application on the ServiceNow Store.",
      "C. It is a free application on the ServiceNow Store.",
      "D. It is active by default"
    ],
    "correctAnswers": [
      "C. It is a free application on the ServiceNow Store."
    ],
    "multipleChoice": false
  },
  {
    "id": 61,
    "text": "A CMDB Administrator notices the Unique Locations Result percentage is low on the CMDB Data Foundations Dashboard. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      "A. Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "B. Keep both locations as either can be used as a valid alternate location",
      "C. Review both locations, update CIs with the correct location and delete the duplicate location",
      "D. Use the Duplicate CI Remediator to merge the duplicate location records"
    ],
    "correctAnswers": [
      "C. Review both locations, update CIs with the correct location and delete the duplicate location"
    ],
    "multipleChoice": false
  },
  {
    "id": 62,
    "text": "A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise? (Choose 2)",
    "options": [
      "A. Application Service Owner",
      "B. Application Owner",
      "C. Enterprise Architect",
      "D. Business Relationship Manage"
    ],
    "correctAnswers": [
      "B. Application Owner",
      "C. Enterprise Architect"
    ],
    "multipleChoice": true
  },
];

export default CSDMIII;
