const CSDMII = [
    {
        id: 1,
        text: "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used. The Data Owner knows the best option is to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
        options: [
            "CMBD 360/Multisource is a platform product that can be used immediately.",
            "ITOM Discovery needs to be purchased to take advantage of the multisource IRE Rules.",
            "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."
        ],
        correctAnswers: ["The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."],
        multipleChoice: false
    },
    {
        id: 2,
        text: "Data Center Manager is working with the CMDB Cl Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table ([cmdb.ci_app_server]) and the Application table ([cmdb_ci_appl])?",
        options: [
            "Many-to-one",
            "Many-to-many",
            "One-to-many",
            "One-to-one"
        ],
        correctAnswers: ["Many-to-many"],
        multipleChoice: false
    },
    {
        id: 3,
        text: "CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
        options: [
            "Use the CSDM Data Foundations Dashboard",
            "Use the default configured CMDB Health Dashboard",
            "Start the ServiceNow Health Scan"
        ],
        correctAnswers: ["Use the CSDM Data Foundations Dashboard"],
        multipleChoice: false
    },
    {
        id: 4,
        text: "What is the difference between Data Certification and Attestation policies when managing a CI?",
        options: [
            "Attestation can be scheduled, while Data Certification cannot be scheduled.",
            "Attestation requires correcting specific attributes of a Cl, while Data Certification tracks acknowledgement the Cl still exists.",
            "Attestation tracks acknowledgement the Cl still exists, while Data Certification requires validating specific attributes of a Cl.",
            "Attestation can be assigned to a Group or an individual, while Data Certification can only be assigned to an individual."
        ],
        correctAnswers: ["Attestation tracks acknowledgement the Cl still exists, while Data Certification requires validating specific attributes of a Cl."],
        multipleChoice: false
    },
    {
        id: 5,
        text: "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure upgrade requests. Which role is involved in initiating the request and defining requirements?",
        options: [
            "Enterprise Architect",
            "Application Service Owners",
            "Technology Service Owners"
        ],
        correctAnswers: ["Technology Service Owners"],
        multipleChoice: false
    },
    {
        id: 6,
        text: "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
        options: [
            "Allows for additional stratification of technical team's support structure along the lines of OLAs and commitments",
            "Improves the implementation velocity of APM Foundation for future business application rationalization",
            "Enables impact assessments for incident, problem, and change on Business Services"
        ],
        correctAnswers: ["Enables impact assessments for incident, problem, and change on Business Services"],
        multipleChoice: false
    },
    {
        id: 7,
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
        id: 8,
        text: "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on an Incident form is automatically populated after a Cl is selected that references an appropriate support group?",
        options: [
            "Assignment Group",
            "Support Group",
            "Approval Group",
            "Managed by Group",
            "Change Group"
        ],
        correctAnswers: ["Assignment Group"],
        multipleChoice: false
    },
    {
        id: 9,
        text: "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
        options: [
            "ALL",
            "Child",
            "Added",
            "Derived"
        ],
        correctAnswers: ["Added"],
        multipleChoice: false
    },
    {
        id: 10,
        text: "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard for the Server class which consists of a total of 60,000 servers in the CMDB. « For the Duplicate metric, it shows Healthy Cls/Evaluated as 59,000/60,000. « For the Orphan metric, it shows Healthy Cls/Evaluated as 45,000/50,000. Which configuration explains the difference in the scope of Server Cls (60,000 vs. 50,000) evaluated between the two metrics?",
        options: [
            "The Orphan metric has a CMDB Group configured for the Server class.",
            "The Duplicate metric has a Health Inclusion rule configured for the Server class.",
            "The Orphan metric has a Health Inclusion rule configured for the Server class.",
            "The Duplicate metric has a CMDB Group configured for the Server class."
        ],
        correctAnswers: ["The Orphan metric has a Health Inclusion rule configured for the Server class."],
        multipleChoice: false
    },
    {
        id: 11,
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
        id: 12,
        text: "‘A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action does the Administrator take in Data Manager?",
        options: [
            "Create a business rule",
            "Create a scheduled job",
            "Create an archive policy"
        ],
        correctAnswers: ["Create an archive policy"],
        multipleChoice: false
    },
    {
        id: 13,
        text: "A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
        options: [
            "The upgrade stops and reports an error.",
            "A skipped change is created and no change is made to the script transform definition.",
            "The Service Graph Connector upgrade refuses to start."
        ],
        correctAnswers: ["A skipped change is created and no change is made to the script transform definition."],
        multipleChoice: false
    },
    {
        id: 14,
        text: "With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which are available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' wizard?",
        options: [
            "Most Reported",
            "Last Created",
            "Last Updated",
            "Smallest Value"
        ],
        correctAnswers: ["Most Reported", "Last Updated"],
        multipleChoice: true
    },
    {
        id: 15,
        text: "Configuration Management needs to ensure data quality for all Cls in the CMDB. What areas of data quality for Cls are in the CMDB Health Dashboard?",
        options: [
            "Downgraded Cls",
            "Duplicate Cls",
            "Missing Cls",
            "Stale Cls",
            "Upgraded Cls"
        ],
        correctAnswers: ["Duplicate Cls", "Stale Cls"],
        multipleChoice: true
    },
    {
        id: 16,
        text: "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
        options: [
            "The de-duplication dashboard on the CMDB workspace",
            "My Tasks in the Application Navigator",
            "The de-duplication task module"
        ],
        correctAnswers: ["The de-duplication dashboard on the CMDB workspace"],
        multipleChoice: false
    },
    {
        id: 17,
        text: "An Asset Manager wants to ensure that Asset records and Cl records are kept synchronized automatically. How does the Manager do this?",
        options: [
            "Ensure that the business rule to update Asset fields on change on the Cl table is active",
            "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
            "Ensure that the business rule to update Cl fields on change on the asset table is active",
            "Ensure one-to-one physical mapping between Asset and Cl"
        ],
        correctAnswers: [
            "Ensure that the business rule to update Asset fields on change on the Cl table is active",
            "Ensure that the business rule to update Cl fields on change on the asset table is active"
        ],
        multipleChoice: true
    },
    {
        id: 18,
        text: "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware Cls. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all Cls?",
        options: [
            "Use the CMDB Reconciliation Engine to update the attributes",
            "Use a scheduled data import to update the attributes from an external source",
            "Create a new Cl class specifically for non-discoverable attributes"
        ],
        correctAnswers: ["Use a scheduled data import to update the attributes from an external source"],
        multipleChoice: false
    },
    {
        id: 19,
        text: "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service mapping be used as part of Change Management?",
        options: [
            "To understand the business impact of Cls",
            "To understand the physical location of Cls",
            "To identify which devices will go offline first"
        ],
        correctAnswers: ["To understand the business impact of Cls"],
        multipleChoice: false
    },
    {
        id: 20,
        text: "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic Cl Groups to better maintain group alignment for the member CI. Which Groups are synced to Cls from the offering that has a relationship to a Dynamic Cl Group?",
        options: [
            "Approval Group",
            "Managed by Group",
            "Support Group",
            "Owned by Group"
        ],
        correctAnswers: ["Managed by Group", "Support Group"],
        multipleChoice: true
    },
    {
        id: 21,
        text: "A Configuration Management Process Owner is preparing solution options for presentation to the technical governance board for ingesting custom Cls to the CMDB. The solution needs to align with best practice, minimize the cost of future work (technical deb) and ensure compliance with future upgrades. Which solutions accomplish this?",
        options: [
            "Repurposing a base Cl class and rename attributes, as required",
            "Extending an existing Asset class table to accommodate the custom Cl class attributes",
            "Extending an existing Cl class table to accommodate the custom Cl class attributes",
            "Installing or upgrading the 'CMDB Cl Class Models' store application to find a suitable existing CI class accommodating any new attributes"
        ],
        correctAnswers: [
            "Extending an existing Cl class table to accommodate the custom Cl class attributes",
            "Installing or upgrading the 'CMDB Cl Class Models' store application to find a suitable existing CI class accommodating any new attributes"
        ],
        multipleChoice: true
    },
    {
        id: 22,
        text: "A CMDB Administrator wants only the Cls of Principal Classes to appear in Cl reference fields, for example the Cl reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
        options: [
            "CMDB Data Manager",
            "Cl Class Manager",
            "System Properties",
            "CMDB Workspace"
        ],
        correctAnswers: ["Cl Class Manager"],
        multipleChoice: false
    },
    {
        id: 23,
        text: "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom Cl class?",
        options: [
            "data_classification_admin and personalize_dictionary",
            "cmdb_inst_admin and personalize_form",
            "itil_admin and personalize_form",
            "sn_cmdb_admin and personalize_dictionary"
        ],
        correctAnswers: ["sn_cmdb_admin and personalize_dictionary"],
        multipleChoice: false
    },
    {
        id: 24,
        text: "User endpoint devices are imported into the CMDB and populate the ‘Assigned to’ [assigned_to] field on the Computer [cmdb_ci_computer] CI. The Asset team puts in a request for the Configuration Analysts to populate the ‘Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
        options: [
            "Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the asset based on insert or update in the computer class 'Assigned to' field",
            "Use the Asset-Cl Field Mapping module to create a new rule to replicate the ‘Assigned to' value between the asset and associated CI",
            "Hide the ‘Assigned to' field on the asset record and create a new field that dot walks to the related CI to get the ‘Assigned to' value."
        ],
        correctAnswers: ["Use the Asset-Cl Field Mapping module to create a new rule to replicate the ‘Assigned to' value between the asset and associated CI"],
        multipleChoice: false
    },
    {
        id: 25,
        text: "What is the relationship between an application and a server?",
        options: [
            "Application > Runs on::Runs > Server",
            "Application > Runs::Runs On > Server",
            "Application > Used by::Uses > Server",
            "Application > Uses::Used by > Server"
        ],
        correctAnswers: ["Application > Runs on::Runs > Server"],
        multipleChoice: false
    },
    {
        id: 26,
        text: "The CMDB Configuration Manager is using the Cl Class Manager to manage the group ownership of Cl classes and needs to leverage the ownership value specified in the Cl Class Manager. When configuring a CMDB Data Manager policy, which group reference field should be set?",
        options: [
            "Managed By Group",
            "Approval Group",
            "Support Group",
            "Change Group"
        ],
        correctAnswers: ["Managed By Group"],
        multipleChoice: false
    },
    {
        id: 27,
        text: "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
        options: [
            "Technical Service Offerings, Dynamic Cl Groups, CMDB Groups",
            "Certification Filter, Certification Template, Audit",
            "Stale, Orphan, Duplicate",
            "Certification Policies, Data Filters, Scheduled Jobs"
        ],
        correctAnswers: ["Certification Filter, Certification Template, Audit"],
        multipleChoice: false
    },
    {
        id: 28,
        text: "A healthcare provider faces a critical incident affecting its patient management system, The provider needs to determine the users impacted to migrate disruption effectively. Which CSDM-related data should they leverage?",
        options: [
            "Affected CI [task_ci] related list.",
            "Service offerings by department or Location.",
            "incident history of similar Cis",
            "application service environment attribute"
        ],
        correctAnswers: ["Affected CI [task_ci] related list."],
        multipleChoice: false
    },
    {
        id: 29,
        text: "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
        options: [
            "Automates the enforcement of relationship rules between CIs in the CMDB.",
            "Encrypts archived records for enhanced security.",
            "Automates the archival and deletion of records based on retention policies."
        ],
        correctAnswers: ["Automates the enforcement of relationship rules between CIs in the CMDB."],
        multipleChoice: false
    },
    {
        id: 30,
        text: "A CMDB Administrator wants to run the Services Have Owners identified playbook to remediate the issues shown in the CMDB Data Foundations Dashboard. Which remediation plays would be used?",
        options: [
            "Fixed Data",
            "Govern data",
            "Report data",
            "Analyze data"
        ],
        correctAnswers: ["Fixed Data", "Govern data"],
        multipleChoice: true
    },
    {
        id: 31,
        text: "A Platform Data Owner wants to improve data quality with a few reconciliation rules across the five discovery sources that are being used The Data Owner knows the best option to include CMDB 360/Multisource CMDB to manage and monitor discovery sources, but the company currently does not have a license for ITOM Discovery that is required for CMDB 360/Multisource CMDB. What can the Data Owner do in this case?",
        options: [
            "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled.",
            "CMBD 360/Multisource is a platform product that can be used immediately.",
            "ITOM Discovery needs t be purchased to take advantage of the multisource IRE Rues."
        ],
        correctAnswers: ["The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled."],
        multipleChoice: false
    },
    {
        id: 32,
        text: "Which ServiceNow solutions automatically create relationships between Cl Applications that are part of an Application Service?",
        options: [
            "Event Management",
            "Data Manager",
            "Discovery",
            "IntegrationHub ETL",
            "Service Mapping"
        ],
        correctAnswers: ["Discovery", "Service Mapping"],
        multipleChoice: true
    },
    {
        id: 33,
        text: "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attributes assigned to a class in CI Class Manager. Which is the recommended field to be used for a policy task assignment?",
        options: [
            "Change group",
            "Approval group",
            "Managed by group",
            "Support group"
        ],
        correctAnswers: ["Managed by group"],
        multipleChoice: false
    },
    {
        id: 34,
        text: "A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. Wrich CSDM Domain does this align with?",
        options: [
            "Service Delivery",
            "Service Consumption (Sell/Consume)",
            "Build and Integration (Build)",
            "Design and Planning (Design)"
        ],
        correctAnswers: ["Service Consumption (Sell/Consume)"],
        multipleChoice: false
    },
    {
        id: 35,
        text: "An IT group has a requirement to upgrade all the Windows servers. There is a Dynamic CI Group containing all the Windows servers. What happens to the Dynamic CI Group when it is referenced from the Configuration Item field on a Change form?",
        options: [
            "It displays all related Cls in the Impacted Services related list.",
            "It displays all related Cls in the Affected Cls related list.",
            "It calculates impact against the Dynamic Cl Group."
        ],
        correctAnswers: ["It displays all related Cls in the Affected Cls related list."],
        multipleChoice: false
    },
    {
        id: 36,
        text: "A CMDB Administrator is working in the CI Class Manager on the Basic Info tab. How can the class be set as a Principal Class?",
        options: [
            "Click the Principal Class Ul Action button",
            "Check the Principal Class check box",
            "Select 'Yes' from the Principal Class choice list"
        ],
        correctAnswers: ["Check the Principal Class check box"],
        multipleChoice: false
    },
    {
        id: 37,
        text: "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
        options: [
            "CMDB Data Manager",
            "CMDB Workspace",
            "Reconciliation Rules",
            "CMDB 360/Multisource CMDB"
        ],
        correctAnswers: ["CMDB 360/Multisource CMDB"],
        multipleChoice: false
    },
    {
        id: 38,
        text: "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace can they locate these de-duplication tasks?",
        options: [
            "Important actions tile under the Home tab",
            "Total status tile under the My Work tab.",
            "CMDB feature adoption tile under the Insights tab."
        ],
        correctAnswers: ["Important actions tile under the Home tab"],
        multipleChoice: false
    },
    {
        id: 39,
        text: "A company wants to track regulatory compliance. ServiceNow has an artifact type called an information object as part of the CSDM Framework. What is the purpose of an information object?",
        options: [
            "It describes data in general on a group of Configuration Items.",
            "It describes the logical data to the Business Applications.",
            "It describes data exchanged between an API interface and an Application."
        ],
        correctAnswers: ["It describes the logical data to the Business Applications."],
        multipleChoice: false
    },
    {
        id: 40,
        text: "An Asset Manager wants to ensure that Asset records and Cl records are kept synchronized automatically. How does the Manager do this?",
        options: [
            "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
            "Ensure that the business rule to update Asset fields on change on the Cl table is active",
            "Ensure that the business rule to update Cl fields on change on the asset table is active",
            "Ensure one-to-one physical mapping between Asset and Cl"
        ],
        correctAnswers: [
            "Ensure that the business rule to update Asset fields on change on the Cl table is active",
            "Ensure that the business rule to update Cl fields on change on the asset table is active"
        ],
        multipleChoice: true
    },
    {
        id: 41,
        text: "A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM sell/consume domain?",
        options: [
            "Business Capability, Information Object, Business Application",
            "Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)",
            "Business Service Offering, Business Service"
        ],
        correctAnswers: ["Business Service Offering, Business Service"],
        multipleChoice: false
    },
    {
        id: 42,
        text: "The CMDB Administrator has been asked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
        options: [
            "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of Cls.",
            "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management",
            "Relying on automated discovery tools to maintain and update CMDB records",
            "Establishing clear governance and continuously monitoring CMDB health"
        ],
        correctAnswers: ["Establishing clear governance and continuously monitoring CMDB health"],
        multipleChoice: false
    },
    {
        id: 43,
        text: "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
        options: [
            "Configuration File Name",
            "Port",
            "Version",
            "Configuration File Path",
            "Class"
        ],
        correctAnswers: ["Configuration File Path"],
        multipleChoice: false
    },
    {
        id: 44,
        text: "A CMDB Data Owner has requested better insights on the different data sources that make up the CMDB data set. The Platform Owner knows that the new Service Graph Connector Central plugin is just what is needed. After installing the plugin, what workspace will have the new Service Graph Connector Central lab available?",
        options: [
            "CMDB Workspace",
            "Service Graph Connector Workspace",
            "Discovery Admin Workspace"
        ],
        correctAnswers: ["Service Graph Connector Workspace"],
        multipleChoice: false
    },
    {
        id: 45,
        text: "Which are CMDB Data Manager end of life policy types?",
        options: [
            "Archive",
            "Decommission",
            "Retire",
            "Lost",
            "Disposed"
        ],
        correctAnswers: ["Archive", "Retire"],
        multipleChoice: true
    },
    {
        id: 46,
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
        id: 47,
        text: "A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise?",
        options: [
            "Business Relationship Manager",
            "Enterprise Architect",
            "Application Owner",
            "Application Service Owner"
        ],
        correctAnswers: ["Enterprise Architect", "Application Owner"],
        multipleChoice: true
    },
    {
        id: 48,
        text: "The ITSM Menager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated Cls. What CSDM stage would this be completed in?",
        options: [
            "Run",
            "Walk",
            "Foundation",
            "Fly",
            "Crawl"
        ],
        correctAnswers: ["Walk"],
        multipleChoice: false
    },
    {
        id: 49,
        text: "A Configuration Manager responsible for a specific region wants to use the CMDB Heath Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by Cl Class. How can the Configuration Manager get a score for regionally relevant Cls?",
        options: [
            "Customize the CMDB Health Dashboard scheduled jobs o group the results by region",
            "On the CMDB health settings, activate the option, Group scores by region",
            "Create CMDB groups with type, health, by region"
        ],
        correctAnswers: ["Create CMDB groups with type, health, by region"],
        multipleChoice: false
    },
    {
        id: 50,
        text: "A Configuration Manager is implementing end to end service modeling and wants to get help on status and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
        options: [
            "CMDB Workspace",
            "CMDB Data Foundation Dashboard",
            "Service Mapping Data Foundation Dashboard",
            "CSDM Data Foundation Dashboard"
        ],
        correctAnswers: ["CSDM Data Foundation Dashboard"],
        multipleChoice: false
    },
    {
        id: 51,
        text: "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with Cls in the CMDB?",
        options: [
            "CMDB Audit Business Rule",
            "CMDB Workspace",
            "Data Quality Scheduled Job",
            "Data Quality Business Rule"
        ],
        correctAnswers: ["CMDB Workspace"],
        multipleChoice: false
    },
    {
        id: 52,
        text: "A CMDB Administrator wants to start utilizing the CMDB Health Dashboard and its Key Performance Indicators. What does the Administrator do to start using the dashboard?",
        options: [
            "Activate the dashboard system property",
            "Activate the dashboard scheduled jobs",
            "Nothing. the dashboard is activated by default",
            "Download the dashboard from the ServiceNow store"
        ],
        correctAnswers: ["Activate the dashboard scheduled jobs"],
        multipleChoice: false
    },
    {
        id: 53,
        text: "A CMDB Cl Class Owner responsible for the Windows Servers needs to manage the Windows Server class. Which Cl Class Manager feature will help the CI Class Owner streamline this task?",
        options: [
            "Cl Favorites",
            "Pinned Classes",
            "Search Cl Classes"
        ],
        correctAnswers: ["Pinned Classes"],
        multipleChoice: false
    },
    {
        id: 54,
        text: "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third-party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator?",
        options: [
            "Observability",
            "Cloud",
            "DevOps",
            "Workflow Automation"
        ],
        correctAnswers: ["Observability", "Cloud"],
        multipleChoice: true
    },
    {
        id: 55,
        text: "The CMDB Administrator group seeks to filter specific Cl classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management. Which feature can the group utilize to achieve this goal?",
        options: [
            "Reconciliation Rules",
            "Identification Rules",
            "Health Inclusion Rules",
            "Data Refresh Rules"
        ],
        correctAnswers: ["Health Inclusion Rules"],
        multipleChoice: false
    },
    {
        id: 56,
        text: "A CMDB team has noticed that some hardware Cls are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
        options: [
            "CI Class Manager",
            "CMDB Data Foundation Playbook",
            "Service Graph Connectors"
        ],
        correctAnswers: ["CMDB Data Foundation Playbook"],
        multipleChoice: false
    },
    {
        id: 57,
        text: "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
        options: [
            "Saved queries window on the CMDB 360 tab",
            "Saved queries window on the Insights tab",
            "Coverage window on the CMDB 360 tab",
            "CMDB Query Builder"
        ],
        correctAnswers: ["Saved queries window on the CMDB 360 tab"],
        multipleChoice: false
    },
    {
        id: 58,
        text: "A Configuration Management team wants to confirm that all servers in the CMDB are correctly associated with their location. ‘Which CMDB Data Manager policy type does the team create?",
        options: [
            "Certification",
            "Retire",
            "Delete",
            "Archive",
            "Attestation"
        ],
        correctAnswers: ["Certification"],
        multipleChoice: false
    },
    {
        id: 59,
        text: "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
        options: [
            "CMDB Workspace",
            "CMDB Cl Class Manager",
            "CMDB Health Dashboard",
            "CMDB Data Manager"
        ],
        correctAnswers: ["CMDB Cl Class Manager"],
        multipleChoice: false
    },
    {
        id: 60,
        text: "Using CI Class Manager, the Tomcat identification rule has the following criterion attributes configured: • Class • Install Directory Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
        options: [
            "Allow fallback to parent's rules",
            "Applies to",
            "Independent",
            "Criterion attributes"
        ],
        correctAnswers: ["Allow fallback to parent's rules"],
        multipleChoice: false
    },
    {
        id: 61,
        text: "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
        options: [
            "My Tasks in the Application Navigator",
            "The de-duplication dashboard on the CMDB workspace",
            "The de-duplication task module"
        ],
        correctAnswers: ["The de-duplication dashboard on the CMDB workspace"],
        multipleChoice: false
    },
    {
        id: 62,
        text: "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate?",
        options: [
            "Application Service",
            "Business Application",
            "Service Portfolio",
            "Service Offering"
        ],
        correctAnswers: ["Application Service", "Service Offering"],
        multipleChoice: true
    },
    {
        id: 63,
        text: "User endpoint devices are imported into the CMDB and populate the ‘Assigned to'[assigned_to] field on the computer [cmdb_ci_computer] Cl. The Asset team puts in a request for the Configuration Analysts to populate the ‘Assigned to' field on the related Asset. What action does a Configuration Analyst take to achieve this in an automated way?",
        options: [
            "Hide the ‘Assigned to' field on the asset record and create a new field that dot walks to the related Cl to get the 'Assigned to' value.",
            "Configure a business rule on the computer table to use a script to populate the ‘Assigned to' field on the asset based on insert or update in the computer class ‘Assigned to' field.",
            "Use the Asset-Cl Field Mapping module to create a new rule to replicate the ‘Assigned to' value between the asset and associated CI."
        ],
        correctAnswers: ["Use the Asset-Cl Field Mapping module to create a new rule to replicate the ‘Assigned to' value between the asset and associated CI."],
        multipleChoice: false
    },
    {
        id: 64,
        text: "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. ‘Which table can be modified?",
        options: [
            "Life Cycle Stages [life_cycle_stage]",
            "Life Cycle Stage Status [life_cycle_stage_status]",
            "Life Cycle Controls [life_cycle_control]",
            "Life Cycle Mapping [life_cycle_mapping]"
        ],
        correctAnswers: ["Life Cycle Mapping [life_cycle_mapping]"],
        multipleChoice: false
    },
    {
        id: 65,
        text: "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
        options: [
            "Missing - Stolen",
            "End of Life - Retired",
            "In any lifecycle state",
            "Inventory - Available"
        ],
        correctAnswers: ["End of Life - Retired"],
        multipleChoice: false
    },
    {
        id: 66,
        text: "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates, for hardware Cls. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all Cls?",
        options: [
            "Use a scheduled data import to update the attributes from an external source",
            "Create a new Cl class specifically for non-discoverable attributes",
            "Use the CMDB Reconciliation Engine to update the attributes"
        ],
        correctAnswers: ["Use a scheduled data import to update the attributes from an external source"],
        multipleChoice: false
    },
    {
        id: 67,
        text: "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage low. What is the recommended process from the associated playbook to correct this issue?",
        options: [
            "Use the Duplicate C| Remediator to merge the duplicate location records",
            "Review both locations, update Cls with the correct location and delete the duplicate location",
            "Keep both locations as either can be used as a valid alternate location",
            "Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation"
        ],
        correctAnswers: ["Review both locations, update Cls with the correct location and delete the duplicate location"],
        multipleChoice: false
    },
    {
        id: 68,
        text: "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However, each discovery source categorizes the same Cls differently, leading to duplicate records and inconsistencies across the system. As a result, the CMDB team is struggling with data accuracy and standardization. What actions does the CMDB team take to resolve the issue?",
        options: [
            "Use Cl Class Manager to establish standardized Cl classes and attributes across all discovery sources",
            "Create a custom script to manually adjust incoming data before storing it in the CMDB",
            "Allow each discovery source to define its own Cl class, even f it results in inconsistencies",
            "Implement and use identification and reconciliation rules to avoid duplicates and standardize Cl classification"
        ],
        correctAnswers: [
            "Use Cl Class Manager to establish standardized Cl classes and attributes across all discovery sources",
            "Implement and use identification and reconciliation rules to avoid duplicates and standardize Cl classification"
        ],
        multipleChoice: true
    },
    {
        id: 69,
        text: "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
        options: [
            "It is a free application on the ServiceNow Store.",
            "It is a free application on the ServiceNow Innovation Lab.",
            "It is a paid application on the ServiceNow Store.",
            "It is active by default."
        ],
        correctAnswers: ["It is a free application on the ServiceNow Store."],
        multipleChoice: false
    },
    {
        id: 70,
        text: "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
        options: [
            "CMDB Workspace > Management tab",
            "CMDB Workspace > My Work tab",
            "CMDB Health Dashboard > Duplicate CIs tab",
            "CMDB Health Dashboard > Audit tab"
        ],
        correctAnswers: ["CMDB Workspace > My Work tab"],
        multipleChoice: false
    },
    {
        id: 71,
        text: "A Configuration Manager working in the CMDB Workspace wants to see how Cls are connected to each other. Which tool can be used?",
        options: [
            "Relationship Map",
            "Business Service Map",
            "Unified Map"
        ],
        correctAnswers: ["Unified Map"],
        multipleChoice: false
    },
    {
        id: 72,
        text: "A Configuration Manager is reviewing the life cycle of Cls to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
        options: [
            "Life cycle choice list",
            "Life cycle mappings",
            "Life cycle properties"
        ],
        correctAnswers: ["Life cycle mappings"],
        multipleChoice: false
    },
    {
        id: 73,
        text: "A CMDB Administrator notices that Cls do not have a support group. How can the support group be automatically populated and maintained on the Cl record?",
        options: [
            "Technology Management Service Offering (Technical Service Offering)",
            "Dynamic Cl group",
            "Technology Management Service (Technical Service)",
            "CI Class Manager"
        ],
        correctAnswers: ["Technology Management Service Offering (Technical Service Offering)"],
        multipleChoice: false
    },
    {
        id: 74,
        text: "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
        options: [
            "Retire, Archive, Attestation, Certification, and Delete",
            "Archive and Delete",
            "Delete, Attestation, Retire, and Certification",
            "Attestation, Retire, and Certification"
        ],
        correctAnswers: ["Retire, Archive, Attestation, Certification, and Delete"],
        multipleChoice: false
    },
    {
        id: 75,
        text: "A Manager needs information on how to correctly establish relationships between Infrastructure Cls, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. Which CSDM domain would provide this information?",
        options: [
            "Service Consumption (Sell / Consume)",
            "Foundation",
            "Design and Planning (Design)",
            "Build and Integration (Build)",
            "Service Delivery (Manage Technical Services)"
        ],
        correctAnswers: ["Service Delivery (Manage Technical Services)"],
        multipleChoice: false
    },
    {
        id: 76,
        text: "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
        options: [
            "Business Criticality in the Service Offering",
            "Assignment Group on the Cl record",
            "Service classification in the Technical Service",
            "Affected Cls in the Incident record"
        ],
        correctAnswers: ["Business Criticality in the Service Offering"],
        multipleChoice: false
    },
    {
        id: 77,
        text: "The Change Management team in an organization wants to implement a Change across multiple Cls at the same time. Which field on the Change Request form needs to be populated with a dynamic CI group?",
        options: [
            "Configuration item",
            "Business Service",
            "Service Offering"
        ],
        correctAnswers: ["Configuration item"],
        multipleChoice: false
    },
    {
        id: 78,
        text: "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use to change the icon for the class?",
        options: [
            "Cl List",
            "Attributes",
            "Basic Info",
            "Suggested Relationships"
        ],
        correctAnswers: ["Basic Info"],
        multipleChoice: false
    },
    {
        id: 79,
        text: "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard. For the Duplicate metric in the Server class, it shows Healthy Cls/Evaluated as 59,000/60,000. What does this indicate about the scope of server records calculated under this metric?",
        options: [
            "60,000 server records are in scope for this metric",
            "59,000 Linux and 60,000 Windows servers records are in scope for this metric",
            "59000 server records are in scope for this metric",
            "1,000 server records are in scope for this metric"
        ],
        correctAnswers: ["60,000 server records are in scope for this metric"],
        multipleChoice: false
    },
    {
        id: 80,
        text: "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
        options: [
            "Delete",
            "Archive",
            "Certification",
            "Retire"
        ],
        correctAnswers: ["Archive"],
        multipleChoice: false
    },
    {
        id: 81,
        text: "The Application Portfolio Management team is asking for help modeling platforms as Business Applications. How would this be mapped in CSDM using the ServiceNow Platform in the Incident and Change applications?",
        options: [
            "ServiceNow Platform, Incident, and Change would all be web based Architecture type. A Depends On relationship would be created between ServiceNow Platform and Incident and Change.",
            "ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications and have a reference to ServiceNow Platform.",
            "ServiceNow Platform, Incident, and Change would all be web based Architecture type. Incident and Change would have a reference to ServiceNow Platform.",
            "ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications. Then a Depends On relationship would be created between ServiceNow Platform and Incident and Change."
        ],
        correctAnswers: ["ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications and have a reference to ServiceNow Platform."],
        multipleChoice: false
    },
    {
        id: 82,
        text: "What is the relationship between an application and a server?",
        options: [
            "Application > Runs on::Runs > Server",
            "Application > Runs::Runs On > Server",
            "Application > Uses::Used by > Server",
            "Application > Used by::Uses > Server"
        ],
        correctAnswers: ["Application > Runs on::Runs > Server"],
        multipleChoice: false
    },
    {
        id: 83,
        text: "A CMDB Administrator needs to prevent duplicate Cl creation from import sets that load data into the CMDB from vendor shipment files containing CI information. How can the Administrator do this?",
        options: [
            "Set the coalesce on two mappings within the transform map",
            "Set the system property to utilize the IRE within transform maps",
            "Use the CMDB TransformUtil APl in the transform script",
            "Create comparison rules in the IRE"
        ],
        correctAnswers: ["Use the CMDB TransformUtil APl in the transform script"],
        multipleChoice: false
    },
    {
        id: 84,
        text: "A CMDB Administrator is using the Duplicate Cl Remediator to address a de-duplication task. On the first tab of the wizard, the Main Cl is selected. Which attributes are used to identify the Main CI?",
        options: [
            "Oldest Created",
            "Least Related Items",
            "Most Related Items",
            "Newest Created"
        ],
        correctAnswers: ["Oldest Created", "Most Related Items"],
        multipleChoice: true
    },
    {
        id: 85,
        text: "An organization is updating the CMDB to include new asset types like IoT devices. Relevant CI classes need to be added and outdated ones need to be removed from the Principal Class filter to ensure accurate display in ITSM processes. Which roles are needed to add or remove classes?",
        options: [
            "sn_csdm_admin",
            "personalize_dictionary",
            "cmdb_query_builder",
            "sn_cmdb_admin"
        ],
        correctAnswers: ["personalize_dictionary", "sn_cmdb_admin"],
        multipleChoice: true
    },
    {
        id: 86,
        text: "How is the CMDB aligned to business processes?",
        options: [
            "Provides a centralized view of configuration items and their relationships",
            "Enables the CFO/CIO to track software licenses",
            "Enhances decision-making and operational efficiency across the organization",
            "Extends service delivery management to all enterprise departments"
        ],
        correctAnswers: [
            "Provides a centralized view of configuration items and their relationships",
            "Enhances decision-making and operational efficiency across the organization"
        ],
        multipleChoice: true
    },
    {
        id: 87,
        text: "A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining Cls and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
        options: [
            "SCCM Service Graph Connector",
            "SCCM Usage Metering Spoke",
            "Import set using JOBC data source connection to SCCM using transform maps",
            "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)"
        ],
        correctAnswers: ["SCCM Service Graph Connector"],
        multipleChoice: false
    },
    {
        id: 88,
        text: "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing of CMDB data. What insights are gained from CMDB 360 queries?",
        options: [
            "Gaps in attribute data from different data sources",
            "Unique Cls created from different data sources",
            "Different attribute values from different data sources",
            "Orphan Cls created from different data sources",
            "Duplicate configuration items from different data sources"
        ],
        correctAnswers: [
            "Gaps in attribute data from different data sources",
            "Different attribute values from different data sources"
        ],
        multipleChoice: true
    },
    {
        id: 89,
        text: "An organization is using CMDB Query Builder to find all application services with a database that has incidents and all infrastructure in those application services. Which steps does the organization take to build this query?",
        options: [
            "Use a CMDB Query to include application services and their related infrastructure",
            "Use a Service Mapping Query to find all incidents related to the database",
            "Add a non-CMDB table to the query",
            "Use a Service Mapping Query o include non-CMDB tables like the Incident table"
        ],
        correctAnswers: [
            "Use a CMDB Query to include application services and their related infrastructure",
            "Add a non-CMDB table to the query"
        ],
        multipleChoice: true
    },
    {
        id: 90,
        text: "A CMDB Administrator is leveraging Cl data as part of an Integrated Risk Management implementation and the Entity Scoping process. The Administrator wants to leverage the CSDM Data Foundations Dashboard playbooks under the Run tab. Which CSDM relationships are leveraged using the CSDM playbooks?",
        options: [
            "Locations that have established parent records",
            "Business Applications that have their relationships to Information Objects",
            "Logical Cls that have relationships with Information Objects",
            "Business Applications that have relationships to Application Services"
        ],
        correctAnswers: [
            "Logical Cls that have relationships with Information Objects",
            "Business Applications that have relationships to Application Services"
        ],
        multipleChoice: true
    },
    {
        id: 91,
        text: "Where can an administrator perform Natural Language Queries (NLQ)?",
        options: [
            "CMDB Data Manager",
            "CI Class Manager",
            "CMDB Workspace",
            "CMDB Health Dashboard"
        ],
        correctAnswers: [],
        multipleChoice: false
    },
    {
        id: 92,
        text: "A Configuration Manager needs to ingest third-party Cls into the CMDB. Which method minimizes the risk of technical debt?",
        options: [
            "Import Sets and Transform Maps",
            "Table API",
            "Service Graph Connector",
            "Vendor-provided integration"
        ],
        correctAnswers: ["Service Graph Connector"],
        multipleChoice: false
    },
    {
        id: 93,
        text: "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics. Which actions can the CMDB Administrator take to improve the CMDB Health?",
        options: [
            "Remove non-operational and retired Cls",
            "Use the Remediation Playbooks linked beside each metric",
            "Focus on metric(s) with Critical and High priorities.",
            "Adjust the metrics using exclusion rules to improve the scores"
        ],
        correctAnswers: [
            "Use the Remediation Playbooks linked beside each metric",
            "Adjust the metrics using exclusion rules to improve the scores"
        ],
        multipleChoice: true
    },
    {
        id: 94,
        text: "When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the IRE?",
        options: [
            "onStart",
            "onAfter",
            "onComplete",
            "onBefore"
        ],
        correctAnswers: ["onBefore"],
        multipleChoice: false
    },
    {
        id: 95,
        text: "What ensures data volume in the CMDB is manageable?",
        options: [
            "Scheduled Jobs",
            "Business rules",
            "Archive Policies."
        ],
        correctAnswers: ["Archive Policies."],
        multipleChoice: false
    },
    {
        id: 96,
        text: "Which are business values of CMDB?",
        options: [
            "Strengthening operational resiliency",
            "Automating maintenance for C relationships",
            "Collecting and managing financial data",
            "Streamlining incident and changs management"
        ],
        correctAnswers: [
            "Strengthening operational resiliency",
            "Streamlining incident and changs management"
        ],
        multipleChoice: true
    },
    {
        id: 97,
        text: "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
        options: [
            "Content controls",
            "Tool box",
            "Contextual side panel",
            "Map"
        ],
        correctAnswers: ["Contextual side panel"],
        multipleChoice: false
    },
];
export default CSDMII;
