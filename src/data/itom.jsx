const ITOM = [
    {
        "questions": [
            {
                "id": 1,
                "text": "Based on this image, which of the following statements are true? (Choose three.)",
                "options": [
                    "Attributes from two tables populate a table with the same name as a ServiceNow CMDB table.",
                    "This operation is more than likely a part of a step on a pattern set to Application Pattern Type.",
                    "If a value is unmatched, it is still merged into the Target Table.",
                    "For this operation to run, there must be some data in the process.executablePath variable.",
                    "This is a horizontal pattern of type 'infrastructure.'"
                ],
                "correctAnswers": [
                    "Attributes from two tables populate a table with the same name as a ServiceNow CMDB table.",
                    "This operation is more than likely a part of a step on a pattern set to Application Pattern Type.",
                    "For this operation to run, there must be some data in the process.executablePath variable."
                ],
                "multipleChoice": true
            },
            {
                "id": 2,
                "text": "Based on the following images, which choice best describes what occurs if Discovery sets the name attribute of a discovered Windows Server CI to 'Windows1' and then Altiris discovery runs detecting 'Windows2' for the name attribute on the same CI?",
                "options": [
                    "The name of the CI stays 'Windows1'.",
                    "The name of the CI changes to 'Windows2'.",
                    "The name of the CI does not populate with either discovery.",
                    "The CI is not discovered because Discovery is not listed in either image."
                ],
                "correctAnswers": [
                    "The name of the CI stays 'Windows1'."
                ],
                "multipleChoice": false
            },
            {
                "id": 3,
                "text": "For the Parse Variable pattern operation, what is required to have two different parsing methods to populate variables?",
                "options": [
                    "Two different Debug Mode sessions.",
                    "A tabular and a scalar variable.",
                    "Two different steps.",
                    "Two different Define Parsing selections on the same step."
                ],
                "correctAnswers": [
                    "Two different steps."
                ],
                "multipleChoice": false
            },
            {
                "id": 4,
                "text": "Which best describes Discovery schedule of type Configuration Item?",
                "options": [
                    "Verifies Configuration Item data from the scanned IP ranges against the data in the CMDB.",
                    "Creates only a list of discovered IPs in both IPv4 and IPv6 formats.",
                    "Collects complete information from the scanned IP ranges and sends it to the CMDB.",
                    "Directly populates records in the assets table."
                ],
                "correctAnswers": [
                    "Collects complete information from the scanned IP ranges and sends it to the CMDB."
                ],
                "multipleChoice": false
            },
            {
                "id": 5,
                "text": "When installing a MID Server on a Windows platform, which right must be associated when creating a Service Account?",
                "options": [
                    "Root",
                    "Domain Admin",
                    "MID Server User Role",
                    "Log on as service"
                ],
                "correctAnswers": [
                    "Log on as service"
                ],
                "multipleChoice": false
            },
            {
                "id": 6,
                "text": "Which of the below choices are needed for Quick Discovery? (Choose two.)",
                "options": [
                    "MID Server",
                    "Discovery Schedule",
                    "PID",
                    "Target IP"
                ],
                "correctAnswers": [
                    "MID Server",
                    "Target IP"
                ],
                "multipleChoice": true
            },
            {
                "id": 7,
                "text": "In order to use Debug from the Pattern Designer, you must have what?",
                "options": [
                    "a proxy server",
                    "a discoverable CI",
                    "the admin role",
                    "Service Mapping installed"
                ],
                "correctAnswers": [
                    "a discoverable CI"
                ],
                "multipleChoice": false
            },
            {
                "id": 8,
                "text": "A discovery runs against a Windows Server returning the following attribute values for the first time: name = WindowsSN1 serial_number = 12321. A subsequent discovery runs against a different Windows Server returning the following attribute values: name = WindowsSN2 serial_number = 12321. With only base system CI Identifiers configured, which of the following is true?",
                "options": [
                    "A Windows Server CI is created, then updated with WindowsSN2 as the name.",
                    "Two Windows Server CIs are created, with WindowsSN1 AND WindowsSN2 for names.",
                    "Two Windows Server CIs are created, without serial_number values.",
                    "A Windows Server CI is created, then updated with WindowsSN1 as the name."
                ],
                "correctAnswers": [
                    "A Windows Server CI is created, then updated with WindowsSN2 as the name."
                ],
                "multipleChoice": false
            },
            {
                "id": 9,
                "text": "Which choice represents the three best ways of extending Discovery?",
                "options": [
                    "Orchestration, Classifiers, Discovery Patterns",
                    "Fingerprinting, Classifiers, Discovery Patterns",
                    "Orchestration, Classifiers, Probes & Sensors",
                    "Classifiers, Probes & Sensors, Discovery Patterns",
                    "Classifiers, Fingerprinting, Probes & Sensors"
                ],
                "correctAnswers": [
                    "Classifiers, Probes & Sensors, Discovery Patterns"
                ],
                "multipleChoice": false
            },
            {
                "id": 10,
                "text": "SNMP Credentials require which of the following?",
                "options": [
                    "write community strings",
                    "usernames",
                    "read community strings",
                    "port 135 access"
                ],
                "correctAnswers": [
                    "read community strings"
                ],
                "multipleChoice": false
            },
            {
                "id": 11,
                "text": "Which choice will populate the Location field for a discovered CI?",
                "options": [
                    "Location field for a Discovery Schedule",
                    "Location field for a parent CI Type",
                    "Location field for a Port Probe",
                    "Location report from the Discovery Dashboard"
                ],
                "correctAnswers": [
                    "Location field for a Discovery Schedule"
                ],
                "multipleChoice": false
            },
            {
                "id": 12,
                "text": "What role is needed by the MID Server's user account to interact with a ServiceNow instance?",
                "options": [
                    "mid_server",
                    "discovery_admin",
                    "sm_mid",
                    "mid_discovery"
                ],
                "correctAnswers": [
                    "mid_server"
                ],
                "multipleChoice": false
            },
            {
                "id": 13,
                "text": "Which operation is used to change from the default credentials to any other appropriate credentials in a horizontal pattern?",
                "options": [
                    "Change credentials",
                    "Change user",
                    "Alternate credentials",
                    "Alternate user"
                ],
                "correctAnswers": [
                    "Change user"
                ],
                "multipleChoice": false
            },
            {
                "id": 14,
                "text": "After navigating to an Automation Error Messages list from Discovery > Home, how are the options on the right navigation pane categorized? (Choose two.)",
                "options": [
                    "SELECT ALL",
                    "SELECT ONE",
                    "ACTION ON SELECTED",
                    "ACTION ON ALL"
                ],
                "correctAnswers": [
                    "ACTION ON SELECTED",
                    "ACTION ON ALL"
                ],
                "multipleChoice": true
            },
            {
                "id": 15,
                "text": "Which of the following can be used in the Debug Identification Section in Debug Mode for an infrastructure pattern? (Choose two.)",
                "options": [
                    "IP",
                    "AWS Endpoint",
                    "PID",
                    "Host Name"
                ],
                "correctAnswers": [
                    "IP",
                    "Host Name"
                ],
                "multipleChoice": true
            },
            {
                "id": 16,
                "text": "With multiple CI data sources, which choice is the best for determining which source can update a CI attribute?",
                "options": [
                    "Business Rules",
                    "Data Certification",
                    "Transform Maps",
                    "Reconciliation Rules"
                ],
                "correctAnswers": [
                    "Reconciliation Rules"
                ],
                "multipleChoice": false
            },
            {
                "id": 17,
                "text": "One method for deleting specific CIs not discovered in 30 days is:",
                "options": [
                    "Scheduled Job",
                    "UI Policy",
                    "Service Mapping",
                    "Data Policy"
                ],
                "correctAnswers": [
                    "Scheduled Job"
                ],
                "multipleChoice": false
            },
            {
                "id": 18,
                "text": "Which of the following choices must be installed on a MID Server to run Credential-less Discovery?",
                "options": [
                    "Credential-less Extension",
                    "Nmap",
                    "Advanced IP Scanner",
                    "Defender"
                ],
                "correctAnswers": [
                    "Nmap"
                ],
                "multipleChoice": false
            },
            {
                "id": 19,
                "text": "A network device has both an SSH port and an SNMP port open. Discovery tries the SSH probe first and it fails. This triggers the SNMP probe, which succeeds. Discovery uses SNMP first the next time it probes the same network device. Which choice describes why?",
                "options": [
                    "Discovery treats it as the Preferred Protocol",
                    "The Preferred Port was set",
                    "It learned that SSH does not respond",
                    "The device only responds to SNMP."
                ],
                "correctAnswers": [
                    "It learned that SSH does not respond"
                ],
                "multipleChoice": false
            },
            {
                "id": 20,
                "text": "To discover Linux-based CIs within a network, which MID Server extension is required?",
                "options": [
                    "SSH",
                    "SNMP",
                    "WMI",
                    "RPC"
                ],
                "correctAnswers": [
                    "SSH"
                ],
                "multipleChoice": false
            },
            {
                "id": 21,
                "text": "When is the Extension section in a horizontal pattern executed?",
                "options": [
                    "As part of the post sensor processing script",
                    "After the Identification sections",
                    "As part of the port scan",
                    "Before the Identification sections"
                ],
                "correctAnswers": [
                    "After the Identification sections"
                ],
                "multipleChoice": false
            },
            {
                "id": 22,
                "text": "For CMDB Health, relationships can be which of the following choices? (Choose three.)",
                "options": [
                    "Duplicate",
                    "Stale",
                    "Orphan",
                    "Required",
                    "Recommended"
                ],
                "correctAnswers": [
                    "Duplicate",
                    "Stale",
                    "Orphan"
                ],
                "multipleChoice": true
            },
            {
                "id": 23,
                "text": "Which of the choices provides active discovery errors with a help link for each error?",
                "options": [
                    "Discovery Dashboard",
                    "IP Address Failure Report",
                    "Discovery Schedule",
                    "MID Server Dashboard"
                ],
                "correctAnswers": [
                    "Discovery Dashboard"
                ],
                "multipleChoice": false
            },
            {
                "id": 24,
                "text": "What related list on a classifier dictates which Horizontal Pattern probe is launched?",
                "options": [
                    "Discovery Log",
                    "Classification Criteria",
                    "Pattern probes",
                    "Triggers probes"
                ],
                "correctAnswers": [
                    "Triggers probes"
                ],
                "multipleChoice": false
            },
            {
                "id": 25,
                "text": "Which of the following does the ECC Queue provide? (Choose two.)",
                "options": [
                    "Login credentials for the MID Server host.",
                    "The actual XML payload that is sent to or from an instance.",
                    "A connected flow of probe and sensor activity.",
                    "The process responsible for defining, analyzing, planning, measuring, and improving all aspects of the availability of IT services."
                ],
                "correctAnswers": [
                    "The actual XML payload that is sent to or from an instance.",
                    "A connected flow of probe and sensor activity."
                ],
                "multipleChoice": true
            },
            {
                "id": 26,
                "text": "Which of the following choices are only used for the Application Pattern Type? (Choose two.)",
                "options": [
                    "Run Order",
                    "Identification Section",
                    "CI Type",
                    "Operating System"
                ],
                "correctAnswers": [
                    "Run Order",
                    "Operating System"
                ],
                "multipleChoice": true
            },
            {
                "id": 27,
                "text": "By default, which of the following are automatically available as variables for horizontal discovery patterns? (Choose two.)",
                "options": [
                    "infrastructure_system",
                    "The CI Type on the Discovery Pattern form",
                    "windows_cmdb_ci",
                    "computer_system"
                ],
                "correctAnswers": [
                    "The CI Type on the Discovery Pattern form",
                    "computer_system"
                ],
                "multipleChoice": true
            },
            {
                "id": 28,
                "text": "Which choices are necessary to launch any pattern? (Choose two.)",
                "options": [
                    "CI Classification",
                    "CI Serial Number Attribute",
                    "Data Certification",
                    "CI Type"
                ],
                "correctAnswers": [
                    "CI Classification",
                    "CI Type"
                ],
                "multipleChoice": true
            },
            {
                "id": 29,
                "text": "Which of the below choices are horizontal pattern types? (Choose two.)",
                "options": [
                    "Hardware",
                    "Software",
                    "Infrastructure",
                    "Application"
                ],
                "correctAnswers": [
                    "Infrastructure",
                    "Application"
                ],
                "multipleChoice": true
            },
            {
                "id": 30,
                "text": "What does the MID Server need to collect vCenter events?",
                "options": [
                    "vCenter Event Collector extension",
                    "MID SNMP Trap Listener extension",
                    "Firewall",
                    "vCenter probes"
                ],
                "correctAnswers": [
                    "vCenter Event Collector extension"
                ],
                "multipleChoice": false
            },
            {
                "id": 31,
                "text": "A Discovery Schedule contains a /24 subnet IP Range and a Shazzam batch size of 5000. How many times will a Shazzam probe be launched during discovery?",
                "options": [
                    "1",
                    "2",
                    "5000",
                    "254"
                ],
                "correctAnswers": [
                    "1"
                ],
                "multipleChoice": false
            },
            {
                "id": 32,
                "text": "Which method is used by Discovery to determine if a Host IP is active or alive?",
                "options": [
                    "Port Scan",
                    "Traceroute",
                    "Ping",
                    "Classification"
                ],
                "correctAnswers": [
                    "Port Scan"
                ],
                "multipleChoice": false
            },
            {
                "id": 33,
                "text": "Discovery finds and maps dependencies for the following types of storage devices. (Choose three.)",
                "options": [
                    "Direct-attached storage (DAS)",
                    "Network-attached storage (NAS)",
                    "Storage area network (SAN)",
                    "Multiple area network (MAN)",
                    "Redundant Array of Independent Disks (RAID)"
                ],
                "correctAnswers": [
                    "Direct-attached storage (DAS)",
                    "Network-attached storage (NAS)",
                    "Storage area network (SAN)"
                ],
                "multipleChoice": true
            },
            {
                "id": 34,
                "text": "Which choice allows the following functionality to occur? If this value is set to 1000 and a discovery must scan 10,000 IP addresses using a single MID Server, it creates 10 Shazzam probes with each probe scanning 1000 IP addresses.",
                "options": [
                    "MID Server Clusters",
                    "MID Server selection method",
                    "Shazzam Batch Size",
                    "Behaviors"
                ],
                "correctAnswers": [
                    "Shazzam Batch Size"
                ],
                "multipleChoice": false
            },
            {
                "id": 35,
                "text": "Which choice best describes how to use a Behavior for discovery?",
                "options": [
                    "The MID Server selection method on a Discovery Schedule.",
                    "The Behavior drop-down menu on a Discovery IP Range.",
                    "The Behavior drop-down menu on a Discovery Status.",
                    "The Behavior checkbox on a CI."
                ],
                "correctAnswers": [
                    "The MID Server selection method on a Discovery Schedule."
                ],
                "multipleChoice": false
            },
            {
                "id": 36,
                "text": "Which of the following pattern operations query targets? (Choose two.)",
                "options": [
                    "WMI Query",
                    "Merge Table",
                    "Get Process",
                    "Parse Variable"
                ],
                "correctAnswers": [
                    "WMI Query",
                    "Get Process"
                ],
                "multipleChoice": true
            },
            {
                "id": 37,
                "text": "File-based Discovery is triggered during the __________.",
                "options": [
                    "Classify Phase",
                    "Scan Phase",
                    "Exploration Phase",
                    "Pattern Phase",
                    "Identification Phase"
                ],
                "correctAnswers": [
                    "Exploration Phase"
                ],
                "multipleChoice": false
            },
            {
                "id": 38,
                "text": "Given a custom column named u_custom_column on table cmdb_ci_linux_server, which variable syntax should be used to populate the column in a horizontal discovery pattern using the Set Parameter Value operation?",
                "options": [
                    "$user_var_custom_column",
                    "$cmdb_ci_linux_server.u_custom_column.INSERT",
                    "$u_custom_column[1].cmdb_ci_linux_server",
                    "$cmdb_ci_linux_server[*].u_custom_column"
                ],
                "correctAnswers": [
                    "$cmdb_ci_linux_server[*].u_custom_column"
                ],
                "multipleChoice": false
            },
            {
                "id": 39,
                "text": "What entry point type must a horizontal pattern have to execute from a process classifier?",
                "options": [
                    "A subnet entry point type.",
                    "HTTP(S) entry point type if the pattern is running on a web server application.",
                    "TCP entry point type or ALL entry point type.",
                    "It does not matter, it is triggered for all entry point types."
                ],
                "correctAnswers": [
                    "TCP entry point type or ALL entry point type."
                ],
                "multipleChoice": false
            },
            {
                "id": 40,
                "text": "Which metrics comprise the Completeness KPI for CMDB Health? (Choose two.)",
                "options": [
                    "Required",
                    "Recommended",
                    "Audit",
                    "Overall"
                ],
                "correctAnswers": [
                    "Required",
                    "Recommended"
                ],
                "multipleChoice": true
            },
            {
                "id": 41,
                "text": "Which of the following choices explain differences between Service Mapping and Discovery? (Choose two.)",
                "options": [
                    "Discovery requires agent installation to find hardware devices, Service Mapping requires agents for software.",
                    "Discovery finds applications and devices on your network, Service Mapping monitors those devices.",
                    "Discovery utilizes IP address ranges for initial discovery, Service Mapping uses entry points.",
                    "Discovery addresses inventory-related use-cases, while Service Mapping allows for the creation of accurate maps of application service topologies."
                ],
                "correctAnswers": [
                    "Discovery utilizes IP address ranges for initial discovery, Service Mapping uses entry points.",
                    "Discovery addresses inventory-related use-cases, while Service Mapping allows for the creation of accurate maps of application service topologies."
                ],
                "multipleChoice": true
            },
            {
                "id": 42,
                "text": "What are the two main options within a Parse File operation?",
                "options": [
                    "Discover Now and Quick Discovery",
                    "Select Operating System and Method",
                    "Select File and Define Parsing",
                    "Match and Select File"
                ],
                "correctAnswers": [
                    "Select File and Define Parsing"
                ],
                "multipleChoice": true
            },
            {
                "id": 43,
                "text": "Based on the following image, which of the following choices is also true about London Linux Servers?",
                "options": [
                    "It is a CMDB Group with Dashboard Group type.",
                    "It is a CMDB Group with Health Group type.",
                    "It is a Datacenter Group in London.",
                    "It is a CMDB Group with Default Group type."
                ],
                "correctAnswers": [
                    "It is a CMDB Group with Health Group type."
                ],
                "multipleChoice": false
            },
            {
                "id": 44,
                "text": "For the Set Parameter Value operation, which of the following is used in the syntax to declare a constant, unchanging Value?",
                "options": [
                    "Hash tag",
                    "Brackets",
                    "Quotes",
                    "Dollar sign"
                ],
                "correctAnswers": [
                    "Quotes"
                ],
                "multipleChoice": false
            },
            {
                "id": 45,
                "text": "From an SNMP Query pattern operation, which of the choices are valid Variable Types? (Choose two.)",
                "options": [
                    "Test",
                    "Table",
                    "Scalar",
                    "CI Type"
                ],
                "correctAnswers": [
                    "Table",
                    "Scalar"
                ],
                "multipleChoice": true
            },
            {
                "id": 46,
                "text": "Which choice best describes what happens when, by default, duplicate CIs are detected during identification and reconciliation?",
                "options": [
                    "A notification is sent to the CI owner.",
                    "An associated identification rule is created automatically.",
                    "Each set of duplicate CIs is added to a de-duplication task.",
                    "The next discovery is stopped for the CI that is duplicated."
                ],
                "correctAnswers": [
                    "Each set of duplicate CIs is added to a de-duplication task."
                ],
                "multipleChoice": false
            },
            {
                "id": 47,
                "text": "Which choice best describes a horizontal discovery pattern?",
                "options": [
                    "Steps that execute operations",
                    "Credential depot",
                    "Port scanning tool",
                    "Classifiers that execute probes"
                ],
                "correctAnswers": [
                    "Steps that execute operations"
                ],
                "multipleChoice": false
            },
            {
                "id": 48,
                "text": "A config file for an application has the following three lines: \nLine 1: app build 1.2.3.4 version 5.14 \nLine 2: installation_dir=c:\\opt\\bin \nLine 3: build_type=Server.\nWhich methods below will extract the build and version numbers from these lines using a horizontal discovery pattern? (Choose two.)",
                "options": [
                    "Get Process operation with correct Port",
                    "Find Matching URL operation with Target Variable",
                    "Parse File operation with Delimited Text parsing strategy",
                    "Parse File operation with Regular Expression parsing strategy"
                ],
                "correctAnswers": [
                    "Parse File operation with Delimited Text parsing strategy",
                    "Parse File operation with Regular Expression parsing strategy"
                ],
                "multipleChoice": true
            },
            {
                "id": 49,
                "text": "The following shows part of the Windows OS - Servers pattern in Pattern Designer: \nWhich of the steps above use(s) a shared library?",
                "options": [
                    "Step 26",
                    "Neither step",
                    "Step 25",
                    "Both steps"
                ],
                "correctAnswers": [
                    "Step 25"
                ],
                "multipleChoice": false
            },
            {
                "id": 50,
                "text": "Which of the following is required for a MID Server to have access to automatically stay up-to-date with instance versions?",
                "options": [
                    "install.service-now.com",
                    "docs.servicenow.com",
                    "developer.service-now.com",
                    "service-now.com"
                ],
                "correctAnswers": [
                    "install.service-now.com"
                ],
                "multipleChoice": false
            },
            {
                "id": 51,
                "text": "When designing steps with operations requiring variables, it is best practice to do what?",
                "options": [
                    "hard core variables",
                    "always use scalar variables",
                    "query targets for variables",
                    "design for a static environment"
                ],
                "correctAnswers": [
                    "query targets for variables"
                ],
                "multipleChoice": false
            },
            {
                "id": 52,
                "text": "For what is File Based Discovery used?",
                "options": [
                    "To discover the checksum of a file and store it to track for changes",
                    "To discover the contents of flat files such as configuration files",
                    "To discover that file names conform to a defined naming standard",
                    "To discover file paths to recognize the signature of installed software"
                ],
                "correctAnswers": [
                    "To discover the contents of flat files such as configuration files"
                ],
                "multipleChoice": false
            },
            {
                "id": 53,
                "text": "Which of the following properties define the maximum overall size for the returned payload that comes from patterns?",
                "options": [
                    "cmdb.properties.payload_max_size",
                    "glide.discovery.payload_max",
                    "mid.discovery.max_payload_size",
                    "mid.discovery.max_pattern_payload_size"
                ],
                "correctAnswers": [
                    "mid.discovery.max_pattern_payload_size"
                ],
                "multipleChoice": false
            },
            {
                "id": 54,
                "text": "Based on this image, which of the following choices is true?",
                "options": [
                    "This is from a WMI query operation step.",
                    "There is a scalar variable labeled ‘1’.",
                    "This Value cannot be used in a pattern step.",
                    "There is a tabular variable named ‘name_details’."
                ],
                "correctAnswers": [
                    "There is a tabular variable named ‘name_details’."
                ],
                "multipleChoice": false
            },
            {
                "id": 55,
                "text": "Using the SNMP Query operation on a pattern for a custom device query, it is best practice to do what?",
                "options": [
                    "Modify the default MIB information",
                    "Enable SSH as a secondary protocol",
                    "Use live devices in production",
                    "Use the publish manufacturer’s device MIB"
                ],
                "correctAnswers": [
                    "Use the publish manufacturer’s device MIB"
                ],
                "multipleChoice": false
            },
            {
                "id": 56,
                "text": "After running Discovery and viewing the ECC Queue tab, what are some of the displayed default fields? (Choose three.)",
                "options": [
                    "Details",
                    "Topic",
                    "Pattern log link",
                    "CMDB CI",
                    "Queue",
                    "Source",
                    "Discovery schedule name"
                ],
                "correctAnswers": [
                    "Topic",
                    "Queue",
                    "Source"
                ],
                "multipleChoice": true
            },
            {
                "id": 57,
                "text": "Hardware Models can have a one-to-many relationship with the following: (Choose three.)",
                "options": [
                    "Assets",
                    "Manufacturer",
                    "Configuration Items",
                    "Product owner",
                    "Model Categories"
                ],
                "correctAnswers": [
                    "Manufacturer",
                    "Configuration Items",
                    "Model Categories"
                ],
                "multipleChoice": true
            },
            {
                "id": 58,
                "text": "Which choice best represents how to modify the functionality shown in this image?",
                "options": [
                    "From a Classifier",
                    "From a Discovery Pattern",
                    "From the MID Server",
                    "From a Probe"
                ],
                "correctAnswers": [
                    "From a Discovery Pattern"
                ],
                "multipleChoice": false
            },
            {
                "id": 59,
                "text": "What is the recommended method of consolidating duplicate CIs?",
                "options": [
                    "Duplicate CI Remediator",
                    "Event CI Remediation",
                    "Ignore Duplicate CI",
                    "Manual CI Remediation"
                ],
                "correctAnswers": [
                    "Duplicate CI Remediator"
                ],
                "multipleChoice": false
            },
            {
                "id": 60,
                "text": "During the Discovery process, what determines if an Asset record is created?",
                "options": [
                    "CMDB",
                    "Model Category",
                    "Model Product",
                    "ECC Queue",
                    "Configuration Item"
                ],
                "correctAnswers": [
                    "Model Category"
                ],
                "multipleChoice": false
            },
            {
                "id": 61,
                "text": "What pattern operation allows the transfer of a file from the MID Server to a target?",
                "options": [
                    "Parse file",
                    "Create Connection",
                    "Put file",
                    "Manage Attachments"
                ],
                "correctAnswers": [
                    "Put file"
                ],
                "multipleChoice": false
            },
            {
                "id": 62,
                "text": "On the ECC Queue, sensor records have a Queue value of ___________ and probe records have a Queue value of ___________.",
                "options": [
                    "input, output",
                    "started, ready",
                    "ready, started",
                    "output, input"
                ],
                "correctAnswers": [
                    "output, input"
                ],
                "multipleChoice": false
            },
            {
                "id": 63,
                "text": "In Discovery, what table associates an IP address and a credential?",
                "options": [
                    "Credential Affinity",
                    "Service Affinity",
                    "Service CI Association",
                    "Tags"
                ],
                "correctAnswers": [
                    "Credential Affinity"
                ],
                "multipleChoice": false
            },
            {
                "id": 64,
                "text": "What missing attribute would cause an event to have a state of Error?",
                "options": [
                    "Metric Name",
                    "Source",
                    "Classification",
                    "Node",
                    "Severity"
                ],
                "correctAnswers": [
                    "Severity"
                ],
                "multipleChoice": false
            },
            {
                "id": 65,
                "text": "In general, Discovery can provide which of the following kinds of application relationships? (Choose two.)",
                "options": [
                    "tcp to udp",
                    "application to application",
                    "mid server to target",
                    "host to application"
                ],
                "correctAnswers": [
                    "application to application",
                    "host to application"
                ],
                "multipleChoice": true
            },
            {
                "id": 66,
                "text": "Which of the following must be configured to allow a MID Server to access servers using WinRM? (Choose two.)",
                "options": [
                    "JEA Properties set to True",
                    "MID Servers must be configured as a trusted source with DNS",
                    "MID Servers need to be added to the WinRM Group policy on the Servers",
                    "MID Server Parameters Add WinRM"
                ],
                "correctAnswers": [
                    "MID Servers need to be added to the WinRM Group policy on the Servers",
                    "MID Server Parameters Add WinRM"
                ],
                "multipleChoice": true
            },
            {
                "id": 67,
                "text": "For a pattern operation, which of the below choices could be a valid replacement for <_>? (Choose three.) $IfTable<_>.InstanceID",
                "options": [
                    "[3]",
                    "[X]",
                    "[&]",
                    "[.]",
                    "[*]",
                    "[]"
                ],
                "correctAnswers": [
                    "[3]",
                    "[*]",
                    "[]"
                ],
                "multipleChoice": true
            },
            {
                "id": 68,
                "text": "Which of the below choices are the most probable results of the following image? (Choose three.)",
                "options": [
                    "A. A tabular variable named ‘WMI Query’",
                    "B. A scalar variable named ‘MaximumWorkingSetSize’",
                    "C. A scalar variable named ‘PageFaults’",
                    "D. A scalar variable named ‘PeakVirtualSize’",
                    "E. A tabular variable named ‘more_process_info’",
                    "F. A tabular variable named ‘Win32_Process’"
                ],
                "correctAnswers": [
                    "B. A scalar variable named ‘MaximumWorkingSetSize’",
                    "C. A scalar variable named ‘PageFaults’",
                    "E. A tabular variable named ‘more_process_info’"
                ],
                "multipleChoice": true
            },
            {
                "id": 69,
                "text": "What is found on the far-right section of the Pattern Designer for horizontal patterns? (Choose two.)",
                "options": [
                    "A. CI Attributes",
                    "B. Operations",
                    "C. Temporary Variables",
                    "D. CMDB Dashboard"
                ],
                "correctAnswers": [
                    "A. CI Attributes",
                    "C. Temporary Variables"
                ],
                "multipleChoice": true
            },
            {
                "id": 70,
                "text": "Which of the choices below best represent key capabilities of a ServiceNow ITOM Enterprise solution? (Choose two.)",
                "options": [
                    "A. Create an Engaging User Experience",
                    "B. Build New Apps Fast",
                    "C. Manage Hybrid Clouds",
                    "D. Proactively Eliminate Service Outages"
                ],
                "correctAnswers": [
                    "C. Manage Hybrid Clouds",
                    "D. Proactively Eliminate Service Outages"
                ],
                "multipleChoice": true
            },
            {
                "id": 71,
                "text": "Which choices best describe what is necessary to create a custom horizontal pattern to discover an operating system that is not discovered by the base installation patterns? (Choose two.)",
                "options": [
                    "A. Select a CI Type",
                    "B. Define Process Strategy",
                    "C. Select Infrastructure Pattern Type",
                    "D. Select Application Pattern Type"
                ],
                "correctAnswers": [
                    "A. Select a CI Type",
                    "C. Select Infrastructure Pattern Type"
                ],
                "multipleChoice": true
            },
            {
                "id": 72,
                "text": "Which of the following best describes the relationship between the Tomcat [cmdb_ci_app_server_tomcat] table and the Application Server [cdmb_ci_app_server] table? (Choose two.)",
                "options": [
                    "A. Tomcat does not extend the Application Server table",
                    "B. Tomcat table extends the Application Server table",
                    "C. Tomcat table is a child of the Application Server table",
                    "D. Tomcat table is a parent of the Application Server table"
                ],
                "correctAnswers": [
                    "B. Tomcat table extends the Application Server table",
                    "C. Tomcat table is a child of the Application Server table"
                ],
                "multipleChoice": true
            },
            {
                "id": 73,
                "text": "In a discovery pattern, which types are available with CI Attributes in the Pattern Designer? (Choose two.)",
                "options": [
                    "A. Global CI types",
                    "B. Main pattern CI type",
                    "C. Related CI types",
                    "D. All CI types"
                ],
                "correctAnswers": [
                    "B. Main pattern CI type",
                    "C. Related CI types"
                ],
                "multipleChoice": true
            },
            {
                "id": 74,
                "text": "Which of the below choices are benefits of Tracked Configuration Files? (Choose two.)",
                "options": [
                    "A. Content version comparison",
                    "B. Files tracked as CIs",
                    "C. Unwanted files removed from target",
                    "D. No credentials needed"
                ],
                "correctAnswers": [
                    "A. Content version comparison",
                    "B. Files tracked as CIs"
                ],
                "multipleChoice": true
            },
            {
                "id": 75,
                "text": "Which choice best describes a Functionality Definition?",
                "options": [
                    "A. Defines what CI identifiers to use.",
                    "B. Defines the IP addresses to discover.",
                    "C. Defines what Behavior to use from a Discovery Schedule.",
                    "D. Defines what protocols to detect from within a Behavior."
                ],
                "correctAnswers": [
                    "D. Defines what protocols to detect from within a Behavior."
                ],
                "multipleChoice": false
            },
            {
                "id": 76,
                "text": "As a first step in horizontal discovery, which of the following is where the Shazzam probe is placed in a request?",
                "options": [
                    "A. Target",
                    "B. Pattern Log",
                    "C. ECC queue",
                    "D. Discovery Log"
                ],
                "correctAnswers": [
                    "C. ECC queue"
                ],
                "multipleChoice": false
            },
            {
                "id": 77,
                "text": "Which of the choices have a higher chance of leading to lost data during CI reclassification? (Choose two.)",
                "options": [
                    "A. Switching",
                    "B. Identifying",
                    "C. Downgrading",
                    "D. Upgrading"
                ],
                "correctAnswers": [
                    "A. Switching",
                    "C. Downgrading"
                ],
                "multipleChoice": true
            },
            {
                "id": 78,
                "text": "Which of the below choices are kinds of variables used in discovery patterns? (Choose three.)",
                "options": [
                    "A. CI attributes",
                    "B. Prefix",
                    "C. Temporary",
                    "D. Fixed",
                    "E. Global"
                ],
                "correctAnswers": [
                    "A. CI attributes",
                    "C. Temporary",
                    "E. Global"
                ],
                "multipleChoice": true
            },
            {
                "id": 79,
                "text": "Which of the following choices may be global variables for steps in horizontal discovery patterns? (Choose two.)",
                "options": [
                    "A. system",
                    "B. computer_system",
                    "C. process",
                    "D. baseline"
                ],
                "correctAnswers": [
                    "B. computer_system",
                    "D. baseline"
                ],
                "multipleChoice": true
            },
            {
                "id": 80,
                "text": "Which ECC Queue message contains the XML payload returned from the MID Server?",
                "options": [
                    "A. Ready",
                    "B. Output",
                    "C. Pending",
                    "D. Input"
                ],
                "correctAnswers": [
                    "D. Input"
                ],
                "multipleChoice": false
            },
            {
                "id": 81,
                "text": "Which of the following executes the osquery commands on agents to gather attribute details from a CI?",
                "options": [
                    "A. Agent Collector",
                    "B. Agent listener",
                    "C. ACC for Discovery",
                    "D. Check Definitions",
                    "E. Policies"
                ],
                "correctAnswers": [
                    "D. Check Definitions"
                ],
                "multipleChoice": false
            },
            {
                "id": 82,
                "text": "What is the advantage of Discovery Range Sets?",
                "options": [
                    "A. Range Sets are the only way to have more than one IP Range defined within a Discovery Schedule.",
                    "B. Range Sets show the number of IPs in a subnet.",
                    "C. All the necessary Range Sets are installed in the base installation of Discovery.",
                    "D. Range Sets provide flexibility in management and identification of known networks for simplicity of administration."
                ],
                "correctAnswers": [
                    "D. Range Sets provide flexibility in management and identification of known networks for simplicity of administration."
                ],
                "multipleChoice": false
            },
            {
                "id": 83,
                "text": "From Pattern Designer, which horizontal pattern type is the image below showing?",
                "options": [
                    "A. Application",
                    "B. Computer System",
                    "C. Infrastructure",
                    "D. Service Mapping"
                ],
                "correctAnswers": [
                    "A. Application"
                ],
                "multipleChoice": false
            },
            {
                "id": 84,
                "text": "Which of the following fields are editable from a Merge Table pattern operation? (Choose three.)",
                "options": [
                    "A. Target Table",
                    "B. Second Table",
                    "C. Primary Table",
                    "D. First Table"
                ],
                "correctAnswers": [
                    "A. Target Table",
                    "B. Second Table",
                    "D. First Table"
                ],
                "multipleChoice": true
            },
            {
                "id": 85,
                "text": "While discovering a new SNMP network device, which choice could cause the error 'Active, couldn’t classify' to occur on a Discovery Status?",
                "options": [
                    "A. A firewall blocking the communication between the MID Server and the target device.",
                    "B. SNMP credentials are incorrect.",
                    "C. SNMP only behavior is not configured.",
                    "D. An SNMP Classification must be updated or created for the new device."
                ],
                "correctAnswers": [
                    "D. An SNMP Classification must be updated or created for the new device."
                ],
                "multipleChoice": false
            },
            {
                "id": 86,
                "text": "The deletion strategy is set to ‘Mark as absent’ for related Disk CIs discovered via the Linux Server pattern. If a related Disk CI is discovered during the Linux Server discovery and then the same related Disk CI is not found the next time the Linux Server is discovered, the following will happen:",
                "options": [
                    "A. The Disk Status CI (install_status) is set to Absent.",
                    "B. The Disk CI Operational Status (operational_status) is set to Non-Operational.",
                    "C. The Linux Server CI Operational Status (operational_status) is set to Non-Operational.",
                    "D. The Linux Server CI Status (install_status) is set to Absent."
                ],
                "correctAnswers": [
                    "A. The Disk Status CI (install_status) is set to Absent."
                ],
                "multipleChoice": false
            },
            {
                "id": 87,
                "text": "What would you see in the Discovery pattern log that you would not see in the ECC Queue?",
                "options": [
                    "A. Success or failure of the individual pattern steps",
                    "B. Payload of CI attributes and relationships",
                    "C. Shazzam probe payload",
                    "D. Relationships created"
                ],
                "correctAnswers": [
                    "A. Success or failure of the individual pattern steps"
                ],
                "multipleChoice": false
            },
            {
                "id": 88,
                "text": "What do most Discovery properties start with?",
                "options": [
                    "A. discovery.prop",
                    "B. disco.release",
                    "C. glide.itom",
                    "D. glide.discovery"
                ],
                "correctAnswers": [
                    "D. glide.discovery"
                ],
                "multipleChoice": false
            },
            {
                "id": 89,
                "text": "What is the default thread count for a MID Server?",
                "options": [
                    "A. 5",
                    "B. 1",
                    "C. 50",
                    "D. 25"
                ],
                "correctAnswers": [
                    "D. 25"
                ],
                "multipleChoice": false
            },
            {
                "id": 91,
                "text": "What is the recommended method for excluding specific software from discovery on Windows and Unix Servers?",
                "options": [
                    "A. Pattern Modification",
                    "B. Probe Modification",
                    "C. Configuration Console",
                    "D. Discovery Properties"
                ],
                "correctAnswers": [
                    "C. Configuration Console"
                ],
                "multipleChoice": false
            },
            {
                "id": 92,
                "text": "Which of the choices best describes a tabular variable in a discovery pattern?",
                "options": [
                    "A. A single column",
                    "B. A single string",
                    "C. Each cell is a CI attribute",
                    "D. Each cell is a scalar variable"
                ],
                "correctAnswers": [
                    "D. Each cell is a scalar variable"
                ],
                "multipleChoice": false
            },
            {
                "id": 93,
                "text": "When configuring the MID Server Service Settings, which of the following is not a valid MID Server name?",
                "options": [
                    "A. my_mid_server1",
                    "B. mid_server1",
                    "C. mid.server1",
                    "D. midserver1"
                ],
                "correctAnswers": [
                    "C. mid.server1"
                ],
                "multipleChoice": false
            },
            {
                "id": 94,
                "text": "Which one of the following is not used in a horizontal discovery pattern?",
                "options": [
                    "A. Variables",
                    "B. Connectivity section",
                    "C. Operations",
                    "D. Identification section"
                ],
                "correctAnswers": [
                    "B. Connectivity section"
                ],
                "multipleChoice": false
            },
            {
                "id": 95,
                "text": "During the Port Scan phase what could the Warning level error 'No results returned from probe.' mean?",
                "options": [
                    "A. Process Classifier incorrectly configured",
                    "B. Logical or physical firewall preventing connectivity",
                    "C. Wrong credentials",
                    "D. Incorrect Datasource Precedence"
                ],
                "correctAnswers": [
                    "B. Logical or physical firewall preventing connectivity"
                ],
                "multipleChoice": false
            },
            {
                "id": 96,
                "text": "Which of the choices are types of temporary variables in a discovery pattern? (Choose two.)",
                "options": [
                    "A. SQL statement",
                    "B. Tabular/Table",
                    "C. Command",
                    "D. Scalar/List"
                ],
                "correctAnswers": [
                    "B. Tabular/Table",
                    "D. Scalar/List"
                ],
                "multipleChoice": true
            },
            {
                "id": 97,
                "text": "What operation is shown in this image?",
                "options": [
                    "A. Put File",
                    "B. Parse Variable",
                    "C. Transform Table",
                    "D. Union Table"
                ],
                "correctAnswers": [
                    "C. Transform Table"
                ],
                "multipleChoice": false
            },
            {
                "id": 98,
                "text": "Which of the following describes the recommended permission level for credentials to discover Windows Servers?",
                "options": [
                    "A. A standard domain user with read access",
                    "B. A domain user with local administrator access",
                    "C. A user with root access across the domain",
                    "D. A domain administrator with sudo access"
                ],
                "correctAnswers": [
                    "B. A domain user with local administrator access"
                ],
                "multipleChoice": false
            },
            {
                "id": 100,
                "text": "Which of the following related lists can assist with troubleshooting discovery from a discovery status? (Choose three.)",
                "options": [
                    "A. ECC Queue",
                    "B. Devices",
                    "C. Running Processes",
                    "D. Discovery Log"
                ],
                "correctAnswers": [
                    "A. ECC Queue",
                    "B. Devices",
                    "D. Discovery Log"
                ],
                "multipleChoice": true
            },
            {
                "id": 101,
                "text": "Which of the following are contained in an extension section of a discovery pattern?",
                "options": [
                    "A. Shared libraries",
                    "B. Connection sections",
                    "C. Identification sections",
                    "D. Network libraries"
                ],
                "correctAnswers": [
                    "A. Shared libraries"
                ],
                "multipleChoice": false
            },
            {
                "id": 102,
                "text": "Which of the below choices are possible options under ACTION ON ALL in the Recommended Actions pane for an Automated Error Messages list within Discovery > Home? (Choose two.)",
                "options": [
                    "A. Ping IP Addresses",
                    "B. Retry Discovery",
                    "C. View instructions",
                    "D. Make Ranges"
                ],
                "correctAnswers": [
                    "B. Retry Discovery",
                    "C. View instructions"
                ],
                "multipleChoice": true
            },
            {
                "id": 105,
                "text": "For a Parse Variable operation, when using the Delimited Text parsing strategy, which options are available in a step? (Choose two.)",
                "options": [
                    "A. Positions",
                    "B. Use SNMP Browser",
                    "C. Delimiters",
                    "D. Merge Criteria"
                ],
                "correctAnswers": [
                    "A. Positions",
                    "C. Delimiters"
                ],
                "multipleChoice": true
            },
            {
                "id": 106,
                "text": "How do you create relationships between CIs in a horizontal pattern?",
                "options": [
                    "A. Relationships are created automatically for each successful connection section.",
                    "B. By using the Create Connections operation.",
                    "C. By using the Create Relation/Reference operation.",
                    "D. Relationships cannot be created via patterns."
                ],
                "correctAnswers": [
                    "C. By using the Create Relation/Reference operation."
                ],
                "multipleChoice": false
            },
            {
                "id": 107,
                "text": "Which of the following is NOT a valid result of a relationship in Discovery?",
                "options": [
                    "A. A CI attribute is linked to another CI",
                    "B. A relationship is created between tables",
                    "C. A relationship between two CIs is established",
                    "D. A CI with an external reference is updated"
                ],
                "correctAnswers": [
                    "D. A CI with an external reference is updated"
                ],
                "multipleChoice": false
            },
            {
                "id": 108,
                "text": "Which of the following can be created in the Pattern Designer to match unique attributes during the identification phase? (Choose two.)",
                "options": [
                    "A. Classifiers",
                    "B. Properties",
                    "C. Identifiers",
                    "D. Patterns"
                ],
                "correctAnswers": [
                    "A. Classifiers",
                    "C. Identifiers"
                ],
                "multipleChoice": true
            },
            {
                "id": 109,
                "text": "Which of the following best describes what may also be required when increasing the max number of threads for a MID Server?",
                "options": [
                    "A. Updating the acl rules for the CMDB tables in ServiceNow",
                    "B. Increase the amount of disk space on the MID Server host",
                    "C. Increasing the memory allocated to the MID Server app.",
                    "D. Increase the MID Server max payload size"
                ],
                "correctAnswers": [
                    "C. Increasing the memory allocated to the MID Server app."
                ],
                "multipleChoice": false
            },
            {
                "id": 110,
                "text": "Which part of Agent Client Collector must be configured to run osquery commands on a CI?",
                "options": [
                    "A. ACC Websocket Endpoint",
                    "B. Credential-less Discovery",
                    "C. Check",
                    "D. Infrastructure Patterns",
                    "E. Policies"
                ],
                "correctAnswers": [
                    "E. Policies"
                ],
                "multipleChoice": false
            },
            {
                "id": 113,
                "text": "What are three ways of extending Discovery?",
                "options": [
                    "A. Classifiers, Fingerprinting, Probes & Sensors",
                    "B. Flow Designer, Classifiers, Probes & Sensors",
                    "C. Classifiers, Probes & Sensors, Discovery Patterns",
                    "D. Fingerprinting, Classifiers, Discovery Pattern"
                ],
                "correctAnswers": [
                    "C. Classifiers, Probes & Sensors, Discovery Patterns"
                ],
                "multipleChoice": true
            }
        ]
    },

];
export default ITOM;
