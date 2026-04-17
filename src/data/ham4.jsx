const HAM4 = [
  {
  "id": 1,
  "text": "Which is NOT considered an asset?",
  "options": [
    "Websites",
    "Switches",
    "Routers",
    "Buildings",
    "Software entitlements"
  ],
  "correctAnswers": [
    "Websites"
  ],
  "multipleChoice": false
},
{
  "id": 2,
  "text": "What are model records?",
  "options": [
    "Models are specific versions or various configurations of an asset",
    "Models are any computer, device, software or service in the CMDB",
    "Models directly associate configuration item (CI) classes with asset classes",
    "Models are anything capable of being owned or controlled to produce economic value"
  ],
  "correctAnswers": [
    "Models are specific versions or various configurations of an asset"
  ],
  "multipleChoice": false
},
{
  "id": 3,
  "text": "Which of the following are functions of the model category? (Choose two.)",
  "options": [
    "Model categories group consumables in the Product Catalog",
    "Model categories determine when to create assets from configuration items (Cls)",
    "Model categories group related assets in the Service Catalog",
    "Model categories provide the link between configuration management and asset management",
    "Model categories provide the link between procurement management and asset management"
  ],
  "correctAnswers": [
    "Model categories determine when to create assets from configuration items (Cls)",
    "Model categories provide the link between configuration management and asset management"
  ],
  "multipleChoice": true
},
{
  "id": 4,
  "text": "When does hardware normalization run by default?",
  "options": [
    "On an hourly basis",
    "On a daily basis",
    "Every 12 hours",
    "Upon saving"
  ],
  "correctAnswers": [
    "On a daily basis"
  ],
  "multipleChoice": false
},
{
  "id": 5,
  "text": "For a model to be fully normalized, what must be added to the model record?",
  "options": [
    "Version",
    "Owner",
    "Manufacturer",
    "Model number"
  ],
  "correctAnswers": [
    "Model number"
  ],
  "multipleChoice": false
},
  {
  "id": 6,
  "text": "Which elements are provided by the hardware asset management content service? (Choose three.)",
  "options": [
    "Manufacturer lifecycle dates",
    "Cost",
    "Product warranty",
    "Manufacturer",
    "Model name",
    "Compatibles"
  ],
  "correctAnswers": [
    "Manufacturer lifecycle dates",
    "Manufacturer",
    "Model name"
  ],
  "multipleChoice": true
},
{
  "id": 7,
  "text": "What hardware asset attribute should you track that is NOT part of a configuration item (CI)?",
  "options": [
    "IP address",
    "CPU",
    "Cost",
    "Operating system",
    "Memory"
  ],
  "correctAnswers": [
    "Cost"
  ],
  "multipleChoice": false
},
{
  "id": 8,
  "text": "Under which condition does the Now Platform NOT create an asset automatically?",
  "options": [
    "Configuration normalization",
    "Enforced CI verification",
    "Data synching",
    "Data justification",
    "Model characterization"
  ],
  "correctAnswers": [
    "Enforced CI verification"
  ],
  "multipleChoice": false
},
{
  "id": 9,
  "text": "Which three attributes from a hardware model record are used for setting the normalized display name during hardware model normalization?",
  "options": [
    "Name, Manufacturer, Model category",
    "Asset tracking unit, Manufacturer, Model number",
    "Name, Manufacturer, Model number",
    "Name, Asset tracking unit, Model number",
    "Asset tracking unit, Manufacturer, Model category"
  ],
  "correctAnswers": [
    "Name, Manufacturer, Model number"
  ],
  "multipleChoice": false
},
{
  "id": 10,
  "text": "Which key attribute in the model record does hardware model normalization use to normalize inconsistent manufactures and product names?",
  "options": [
    "Asset tag",
    "Display name",
    "Model category",
    "Model number",
    "Asset tracking unit"
  ],
  "correctAnswers": [
    "Model number"
  ],
  "multipleChoice": false
},
{
  "id": 11,
  "text": "What plugin offers consistent, good, clean data for the company names of vendors or manufactures?",
  "options": [
    "Hardware Model Normalization (com.sn_hwnorm)",
    "Service Catalog Scoped API (com.glideapp.servicecatalog.scoped.api)",
    "Outbound Tracking (com.glide.outbound_tracking)",
    "Normalization Data Services Client (com.glide.data_services_canonicalization.client)"
  ],
  "correctAnswers": [
    "Hardware Model Normalization (com.sn_hwnorm)"
  ],
  "multipleChoice": false
},
{
  "id": 12,
  "text": "Hardware models may not be fully normalized until updated content is downloaded from the Hardware Model Normalization Content Service. How do you determine if the content has been downloaded?",
  "options": [
    "Determine if the business rule, Create a Hardware Normalization Download, has been triggered yet or not",
    "Review the Last updated date of the Central Data Service Download Status jobs on the Normalization and Content Service dashboard",
    "Review the Hardware Model Content Service Download section on the Model Management tab of the Hardware Asset dashboard",
    "Query the scheduled job reports to determine if the Hardware Normalization Content Library Download job has completed yet"
  ],
  "correctAnswers": [
    "Review the Hardware Model Content Service Download section on the Model Management tab of the Hardware Asset dashboard"
  ],
  "multipleChoice": false
},
{
  "id": 13,
  "text": "A user’s broken laptop is replaced via an incident. Upon completion, the Incident Management application triggers the swap/replace asset task. Which fields are automatically updated in the associated asset record? (Choose three.)",
  "options": [
    "Software allocations",
    "Maintenance contracts",
    "Depreciation values",
    "Related CI record",
    "Disposal information"
  ],
  "correctAnswers": [
    "Software allocations",
    "Maintenance contracts",
    "Related CI record"
  ],
  "multipleChoice": true
},
{
  "id": 14,
  "text": "What types of inventory audits are supported with the Hardware Asset Management (HAM) application? (Choose two.)",
  "options": [
    "Stockroom audit",
    "Vendor audit",
    "Location audit",
    "Discovery audit"
  ],
  "correctAnswers": [
    "Stockroom audit",
    "Location audit"
  ],
  "multipleChoice": true
},
{
  "id": 15,
  "text": "Which of the following are valid contract states? (Choose three.)",
  "options": [
    "Draft",
    "Active",
    "In use",
    "New",
    "Expired"
  ],
  "correctAnswers": [
    "Draft",
    "Active",
    "Expired"
  ],
  "multipleChoice": true
},
{
  "id": 16,
  "text": "Stockroom C has seven Bluetooth keyboards with a total value of $630. The asset manager procures two more of the same model keyboards for $360 and adds them to Stockroom C. When one of these keyboards is consumed, what is the value of the consumed Bluetooth keyboard?",
  "options": [
    "110",
    "180",
    "63",
    "90"
  ],
  "correctAnswers": [
    "110"
  ],
  "multipleChoice": false
},
{
  "id": 17,
  "text": "Which applications are required to perform a blind audit of your asset inventory?",
  "options": [
    "Hardware Asset Management (HAM) and ServiceNow My Assets mobile app",
    "Hardware Asset Management (HAM) and Software Asset Management (SAM)",
    "ITSM Asset Management and ServiceNow My Assets mobile app",
    "ITSM Asset Management and ServiceNow Agent mobile app",
    "Hardware Asset Management (HAM) and ServiceNow Agent mobile app"
  ],
  "correctAnswers": [
    "Hardware Asset Management (HAM) and ServiceNow Agent mobile app"
  ],
  "multipleChoice": false
},
{
  "id": 18,
  "text": "Within the asset audit form, where would you find the list of all assets that were found at the stockroom or warehouse that is being audited?",
  "options": [
    "Identified assets",
    "Scanned assets",
    "Expected assets",
    "Labelled assets",
    "Inventoried assets"
  ],
  "correctAnswers": [
    "Scanned assets"
  ],
  "multipleChoice": false
},
  {
  "id": 19,
  "text": "What is the purpose of stock rules? (Choose two.)",
  "options": [
    "To automatically transfer assets when a low quantity threshold is detected in a stockroom",
    "To track stock orders from a vendor",
    "To send notifications when a low quantity threshold is detected in a stockroom",
    "To track stock movement between stockrooms",
    "To send notifications when a stock shipment arrives at a stockroom"
  ],
  "correctAnswers": [
    "To automatically transfer assets when a low quantity threshold is detected in a stockroom",
    "To send notifications when a low quantity threshold is detected in a stockroom"
  ],
  "multipleChoice": true
},
{
  "id": 20,
  "text": "Which of an organization’s assets are managed using stockrooms?",
  "options": [
    "All available stock, consumable or not",
    "Just consumable assets",
    "All hardware and software assets",
    "All disposable assets"
  ],
  "correctAnswers": [
    "All available stock, consumable or not"
  ],
  "multipleChoice": false
},
{
  "id": 21,
  "text": "An event runs each night to send reminders to contract administrators about contract expiration dates (e.g., so they can renew or renegotiate the contract). By default, when does the contract administrator receive these notifications? (Choose four.)",
  "options": [
    "10 days before",
    "1 week before",
    "60 days before",
    "Day of expiration",
    "90 days before",
    "30 days before"
  ],
  "correctAnswers": [
    "60 days before",
    "Day of expiration",
    "90 days before",
    "30 days before"
  ],
  "multipleChoice": true
},
{
  "id": 22,
  "text": "Which of the following are valid contract states during a contract’s lifecycle? (Choose four.)",
  "options": [
    "Draft",
    "Canceled",
    "Renewed",
    "Extended",
    "Active",
    "Renegotiated",
    "Expired"
  ],
  "correctAnswers": [
    "Draft",
    "Canceled",
    "Active",
    "Expired"
  ],
  "multipleChoice": true
},
{
  "id": 23,
  "text": "What are the key steps for importing asset data? (Choose three.)",
  "options": [
    "Merge transform maps",
    "Run transform map",
    "Update transform map",
    "Create transform map",
    "Load data",
    "Consolidate data"
  ],
  "correctAnswers": [
    "Run transform map",
    "Create transform map",
    "Load data"
  ],
  "multipleChoice": true
},
{
  "id": 24,
  "text": "What must exist before a consumable can be consumed? (Choose three.)",
  "options": [
    "A stock order record",
    "A model record",
    "A transfer order record",
    "A model category record",
    "A consumable record"
  ],
  "correctAnswers": [
    "A model record",
    "A model category record",
    "A consumable record"
  ],
  "multipleChoice": true
},
{
  "id": 25,
  "text": "When using the HAM application, what happens when you create a new transfer order line on a transfer order?",
  "options": [
    "The asset(s) listed in the transfer order line are automatically transferred to the new stockroom",
    "The transfer order line is automatically placed in a state of Ready for fulfilment",
    "A transfer order line task is automatically created to move the transfer order line from one stage to another",
    "A transfer order line task is automatically created to validate enough stock exists",
    "The asset(s) listed in the transfer order line are automatically readied for shipment"
  ],
  "correctAnswers": [
    "A transfer order line task is automatically created to move the transfer order line from one stage to another"
  ],
  "multipleChoice": false
},
{
  "id": 26,
  "text": "Which ServiceNow Mobile app provides end users visibility to their assigned hardware and consumable assets?",
  "options": [
    "Mobile Asset App",
    "Mobile App",
    "Mobile ITAM App",
    "Mobile Agent App"
  ],
  "correctAnswers": [
    "Mobile App"
  ],
  "multipleChoice": false
},
{
  "id": 27,
  "text": "Select the three main components of the data certification process. (Choose three.)",
  "options": [
    "Certify the certification",
    "Assign the certification tasks",
    "Create the certification filter",
    "Create the certification schedule",
    "Run the certification"
  ],
  "correctAnswers": [
    "Create the certification filter",
    "Create the certification schedule",
    "Run the certification"
  ],
  "multipleChoice": true
},
{
  "id": 28,
  "text": "From where can you publish catalog items? (Choose two.)",
  "options": [
    "From the model category",
    "From an asset record",
    "From a user record",
    "From a vendor item",
    "From a model"
  ],
  "correctAnswers": [
    "From a vendor item",
    "From a model"
  ],
  "multipleChoice": true
},
{
  "id": 29,
  "text": "Publishing an item to the Service Catalog can be done by using the “Publish to Hardware Catalog” related link in:",
  "options": [
    "Product Catalog",
    "Inventory Catalog",
    "Asset Catalog",
    "Supplier Catalog"
  ],
  "correctAnswers": [
    "Product Catalog"
  ],
  "multipleChoice": false
},
{
  "id": 30,
  "text": "An asset is manually created from a purchase order before it has been shipped by the supplier. By default, the state of the asset is set to:",
  "options": [
    "On order",
    "In use",
    "Awaiting delivery",
    "Pending transfer"
  ],
  "correctAnswers": [
    "On order"
  ],
  "multipleChoice": false
},
{
  "id": 31,
  "text": "How often are the tabs in the Hardware Asset dashboard updated?",
  "options": [
    "Daily based on scheduled job",
    "Hourly",
    "In real time",
    "Every 15 minutes"
  ],
  "correctAnswers": [
    "In real time"
  ],
  "multipleChoice": false
},
{
  "id": 32,
  "text": "What minimum role is required in order to use the Hardware Asset dashboard?",
  "options": [
    "asset",
    "asset_manager",
    "ham_user",
    "ham_admin",
    "inventory_admin"
  ],
  "correctAnswers": [
    "asset"
  ],
  "multipleChoice": false
},
{
  "id": 33,
  "text": "What information would you find on the Inventory tab of the Hardware Asset dashboard? (Choose three.)",
  "options": [
    "New hardware assets found by audits",
    "Hardware models up for end of life",
    "Hardware nearing end of warranty",
    "Active stock rules",
    "Open asset audits",
    "Requests that require sourcing"
  ],
  "correctAnswers": [
    "New hardware assets found by audits",
    "Active stock rules",
    "Open asset audits"
  ],
  "multipleChoice": true
},
{
  "id": 34,
  "text": "Which mobile app can users leverage to create assets, perform inventory audits, and receive assets?",
  "options": [
    "Now Agent Mobile App",
    "Now Procurement App",
    "Now Mobile App",
    "Now Onboarding App"
  ],
  "correctAnswers": [
    "Now Agent Mobile App"
  ],
  "multipleChoice": false
},
  {
  "id": 35,
  "text": "Several of your models are listed as Match Not Found on the Model Management tab of the Hardware Asset dashboard. What are the potential causes of this? (Choose three.)",
  "options": [
    "The hardware model content has not yet been downloaded from the Content Service",
    "Normalization could not match any of the three key fields in the hardware model form with a rule in the Content Service",
    "Your hardware model form contains a good model number, but a badly formatted model name",
    "You have opted out of the ServiceNow Content Service",
    "A normalization rule for the hardware model does not exist in the Content Service"
  ],
  "correctAnswers": [
    "The hardware model content has not yet been downloaded from the Content Service",
    "Your hardware model form contains a good model number, but a badly formatted model name",
    "You have opted out of the ServiceNow Content Service"
  ],
  "multipleChoice": true
},
{
  "id": 36,
  "text": "What original costs are involved in purchasing an asset and putting it into use? (Choose three.)",
  "options": [
    "Lease",
    "Delivery",
    "Spare parts",
    "Maintenance",
    "Storage"
  ],
  "correctAnswers": [
    "Lease",
    "Delivery",
    "Storage"
  ],
  "multipleChoice": true
},
{
  "id": 37,
  "text": "A scheduled job runs nightly to determine if any rate cards need to be applied to generate expense lines. What is the name of the scheduled job?",
  "options": [
    "Process CM Costs",
    "Process Rate Cards",
    "Process FM Costs",
    "Process Expense Lines"
  ],
  "correctAnswers": [
    "Process FM Costs"
  ],
  "multipleChoice": false
},
{
  "id": 38,
  "text": "What is included in the total cost of ownership? (Choose two.)",
  "options": [
    "Delivery cost",
    "Original cost",
    "Depreciation expense",
    "Operational expense"
  ],
  "correctAnswers": [
    "Original cost",
    "Operational expense"
  ],
  "multipleChoice": true
},
{
  "id": 39,
  "text": "By default, what Quick links are available on the Hardware asset overview view? (Choose three.)",
  "options": [
    "Transfer orders",
    "Assets eligible for refresh by model category",
    "Asset requests",
    "Model normalization",
    "Asset count by model category",
    "Asset count by lifecycle state"
  ],
  "correctAnswers": [
    "Transfer orders",
    "Asset requests",
    "Model normalization"
  ],
  "multipleChoice": true
},
{
  "id": 40,
  "text": "What is tracked throughout the life of an asset? (Choose three.)",
  "options": [
    "Financial data",
    "Contractual data",
    "Lifecycle data",
    "Configuration data",
    "Hardware data"
  ],
  "correctAnswers": [
    "Financial data",
    "Contractual data",
    "Lifecycle data"
  ],
  "multipleChoice": true
},
{
  "id": 41,
  "text": "Which of the following are components of the ServiceNow asset lifecycle? (Choose three.)",
  "options": [
    "Discard",
    "Order",
    "Procure",
    "Request",
    "Install",
    "Receive"
  ],
  "correctAnswers": [
    "Procure",
    "Request",
    "Receive"
  ],
  "multipleChoice": true
},
{
  "id": 42,
  "text": "What are the five valid phases of the Now Create methodology?",
  "options": [
    "Review, prepare, create, validate, recap",
    "Initiate, plan, execute, deliver, close",
    "Create, recap, execute, deliver, review",
    "Initiate, plan, execute, review, close"
  ],
  "correctAnswers": [
    "Initiate, plan, execute, deliver, close"
  ],
  "multipleChoice": false
},
{
  "id": 43,
  "text": "What are types of assets? (Choose four.)",
  "options": [
    "Model",
    "Software entitlement",
    "Hardware",
    "Consumable",
    "Stockroom",
    "Facility"
  ],
  "correctAnswers": [],
  "multipleChoice": true
},
{
  "id": 44,
  "text": "What are the Normalization statuses? (Choose six.)",
  "options": [
    "Manufacturer Normalized",
    "Match Not Found",
    "Partially Normalized",
    "Normalized",
    "Manually Normalized",
    "Version Normalized",
    "New",
    "Found"
  ],
  "correctAnswers": [
    "Manufacturer Normalized",
    "Match Not Found",
    "Partially Normalized",
    "Normalized",
    "Manually Normalized",
    "New"
  ],
  "multipleChoice": true
},
{
  "id": 45,
  "text": "An asset record tracks which data that is NOT part of configuration management? (Choose three.)",
  "options": [
    "Lifecycle data",
    "Contractual data",
    "Financial data",
    "Logical data",
    "Operational data"
  ],
  "correctAnswers": [
    "Lifecycle data",
    "Contractual data",
    "Financial data"
  ],
  "multipleChoice": true
},
{
  "id": 46,
  "text": "When selected on the model category form, what feature prevents the automatic creation of an asset?",
  "options": [
    "Enforce Asset Creation",
    "Enforce Asset Verification",
    "Enforce Asset Validation",
    "Enforce CI Validation",
    "Enforce CI Verification"
  ],
  "correctAnswers": [
    "Enforce CI Verification"
  ],
  "multipleChoice": false
},
  {
  "id": 47,
  "text": "When opted-in to the Hardware Asset Management Content Service, how often is updated content downloaded to the customer instance from ServiceNow?",
  "options": [
    "Monthly",
    "Weekly",
    "Daily",
    "Quarterly"
  ],
  "correctAnswers": [
    "Weekly"
  ],
  "multipleChoice": false
},
{
  "id": 48,
  "text": "As part of the hardware model normalization process, the Content Library automatically populates your inventory with what non-discoverable asset metadata?",
  "options": [
    "Manufacturer comparables",
    "Manufacturer part number",
    "Manufacturer lifecycle dates",
    "Manufacturer price"
  ],
  "correctAnswers": [
    "Manufacturer lifecycle dates"
  ],
  "multipleChoice": false
},
{
  "id": 49,
  "text": "What role is required to use the Hardware Model Normalization Overview dashboard?",
  "options": [
    "ham_normalization",
    "ham_user",
    "ham_admin",
    "asset_manager",
    "asset"
  ],
  "correctAnswers": [
    "asset"
  ],
  "multipleChoice": false
},
{
  "id": 50,
  "text": "For what asset actions are asset tasks provided? (Choose three.)",
  "options": [
    "Provision",
    "Retire",
    "Update/Repair",
    "Swap",
    "Assign/Allocate"
  ],
  "correctAnswers": [
    "Retire",
    "Update/Repair",
    "Swap"
  ],
  "multipleChoice": true
},
{
  "id": 51,
  "text": "What happens to the consumable's asset record after it has been consumed?",
  "options": [
    "The record is marked inactive but remains in the system",
    "The record state is set to In use",
    "The record remains in the system for reporting purposes only",
    "The record is removed from the system"
  ],
  "correctAnswers": [
    "The record remains in the system for reporting purposes only"
  ],
  "multipleChoice": false
},
{
  "id": 52,
  "text": "A contract can be cancelled when the State is what?",
  "options": [
    "Expired",
    "Active",
    "Inactive",
    "Rejected"
  ],
  "correctAnswers": [
    "Active"
  ],
  "multipleChoice": false
},
{
  "id": 53,
  "text": "During an inventory audit, what happens if you accidentally scan the same asset twice?",
  "options": [
    "The first scan is imported",
    "Both records are imported",
    "HAM automatically removes duplicates",
    "The most recent scan is imported"
  ],
  "correctAnswers": [
    "HAM automatically removes duplicates"
  ],
  "multipleChoice": false
},
{
  "id": 54,
  "text": "What requirements must be met in order for a consumable asset to be consumed? (Choose three.)",
  "options": [
    "Quantity > 0",
    "State is In stock or Pending Delivery",
    "Substate is pre-allocated",
    "Substate is Available",
    "Quantity > stockroom threshold",
    "State is In stock"
  ],
  "correctAnswers": [
    "Quantity > 0",
    "Substate is Available",
    "State is In stock"
  ],
  "multipleChoice": true
},
{
  "id": 55,
  "text": "When should you retire an IT asset?",
  "options": [
    "At any point it is recommended by the HAM-defined asset policy",
    "At any point that it is recommended by your company-defined policies and procedures",
    "At any point it is recommended by the HAM-defined asset disposal procedure",
    "When the Hardware Content Service Lifecycle data reports the asset is nearing end-of-service",
    "When the Hardware Content Service Lifecycle data reports the asset is nearing end-of-life"
  ],
  "correctAnswers": [
    "At any point that it is recommended by your company-defined policies and procedures"
  ],
  "multipleChoice": false
},
  {
  "id": 56,
  "text": "Classes are represented as tables in the ServiceNow database. Which is the base asset class?",
  "options": [
    "cmdb_asset",
    "alm_hardware",
    "alm_asset",
    "cmdb_hardware"
  ],
  "correctAnswers": [
    "alm_asset"
  ],
  "multipleChoice": false
},
{
  "id": 57,
  "text": "Which view displays metrics to the user to indicate when they are due for a refresh based on the scheduled retirement of their assets?",
  "options": [
    "Homepage",
    "Home",
    "Overview",
    "My Assets"
  ],
  "correctAnswers": [
    "My Assets"
  ],
  "multipleChoice": false
},
{
  "id": 58,
  "text": "When sourcing a requested item from a supplier using the catalog task form to create a purchase order, the catalog item must be available in:",
  "options": [
    "Supplier Catalog",
    "Product Catalog",
    "Inventory Catalog",
    "Vendor Catalog"
  ],
  "correctAnswers": [
    "Vendor Catalog"
  ],
  "multipleChoice": false
},
{
  "id": 59,
  "text": "What information would you find on the Procurement tab of the Hardware Asset dashboard? (Choose two.)",
  "options": [
    "Hardware nearing end of warranty",
    "Hardware model normalization status",
    "Hardware expenditure by vendor",
    "Hardware models up for end of life",
    "New hardware assets found by audits",
    "Requests that require sourcing"
  ],
  "correctAnswers": [
    "Hardware expenditure by vendor",
    "Requests that require sourcing"
  ],
  "multipleChoice": true
},
{
  "id": 60,
  "text": "Since trustworthy data is key to good asset management practices, where would you look to determine the number of days until next Content Service download will occur?",
  "options": [
    "Asset > Administration",
    "Asset > Overview",
    "Asset Hardware Model Normalization > Content Service Setup",
    "Asset > Asset Audits > Asset Audits",
    "Asset > Hardware Asset Dashboard"
  ],
  "correctAnswers": [
    "Asset > Hardware Asset Dashboard"
  ],
  "multipleChoice": false
},
{
  "id": 61,
  "text": "Which mobile app can users leverage to view the assets assigned to them and create incidents to report issues with their devices?",
  "options": [
    "Now Agent Mobile app",
    "Now Onboarding app",
    "Now Mobile app",
    "Now My Assets app"
  ],
  "correctAnswers": [
    "Now Mobile app"
  ],
  "multipleChoice": false
},
{
  "id": 62,
  "text": "When creating a stock rule that replenishes from a vender, what is primary requirement for the warehouse stockroom? (Choose two.)",
  "options": [
    "The stockroom manager must have a valid email address",
    "The stockroom must have an assigned manager",
    "The stockroom must have an assignment group",
    "The stockroom manager must have a valid mobile phone",
    "The stockroom manager must have a valid time zone"
  ],
  "correctAnswers": [
    "The stockroom manager must have a valid email address",
    "The stockroom must have an assigned manager"
  ],
  "multipleChoice": true
},
{
  "id": 63,
  "text": "Which tab on the Hardware Asset Dashboard enables tracking asset models with missing purchase details?",
  "options": [
    "Asset Heath",
    "Procurement",
    "Model Management",
    "Inventory",
    "End of Lite"
  ],
  "correctAnswers": [
    "Asset Heath"
  ],
  "multipleChoice": false
},
{
  "id": 64,
  "text": "To utilize the contract rate cards features, which plugin is required to be activated?",
  "options": [
    "Financial Management",
    "Contract Management",
    "Rate Management",
    "Cost Management"
  ],
  "correctAnswers": [
    "Cost Management"
  ],
  "multipleChoice": false
},
{
  "id": 65,
  "text": "Which of the following are considered original costs as opposed to operational expenses? (Choose three.)",
  "options": [
    "Warranty costs",
    "Purchase price or lease cost",
    "Delivery costs",
    "Resource costs for support",
    "Replacement parts",
    "Maintenance agreements"
  ],
  "correctAnswers": [
    "Warranty costs",
    "Purchase price or lease cost",
    "Delivery costs"
  ],
  "multipleChoice": true
},
{
  "id": 66,
  "text": "After installing the Hardware Asset Management (HAM) plugin, how do you update it when new versions become available?",
  "options": [
    "The HI portal team automatically updates as new versions become available",
    "On your instance, filter on application updates, then click Update",
    "On your instance, filter on application updates, then request an update from HI",
    "Run scheduled job, HAM Check for Updates, and request an update",
    "Check the HI portal for updates and request an update"
  ],
  "correctAnswers": [
    "On your instance, filter on application updates, then click Update"
  ],
  "multipleChoice": false
},
{
  "id": 67,
  "text": "Baseline ITSM Asset Management provides which features? (Choose three.)",
  "options": [
    "Mobile My Assets",
    "Hardware Model Normalization",
    "Asset Inventory Audit",
    "Hardware Asset Dashboard",
    "Hardware Manufacturer Lifecycle Dates",
    "Stockrooms",
    "Mobile Asset Receiving"
  ],
  "correctAnswers": [
    "Mobile My Assets",
    "Stockrooms",
    "Mobile Asset Receiving"
  ],
  "multipleChoice": true
},
  ]; 
export default HAM4;
