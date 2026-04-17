const HAM3 = [
{
  "id": 1,
  "text": "What information would you track for a configuration item (CI) versus an asset? (Choose two.)",
  "options": [
    "Financial",
    "Lifecycle",
    "Contractual",
    "Operational",
    "Relationship"
  ],
  "correctAnswers": [
    "Operational",
    "Relationship"
  ],
  "multipleChoice": true
},
{
  "id": 2,
  "text": "A component is considered an IT asset vs. a configuration item (CI) when you want to do which of the following? (Choose three.)",
  "options": [
    "Manage its procurement, maintenance, or retirement",
    "Track its operational information",
    "Track its monetary value or costs",
    "Manage its associated license, warranty, or lease contracts",
    "Know its relationships to other assets in the CMDB"
  ],
  "correctAnswers": [
    "Manage its procurement, maintenance, or retirement",
    "Track its monetary value or costs",
    "Manage its associated license, warranty, or lease contracts"
  ],
  "multipleChoice": true
},
{
  "id": 3,
  "text": "Which of the following are considered assets? (Choose three.)",
  "options": [
    "Facilities",
    "Contracts",
    "Hardware",
    "Software entitlements",
    "Software distributions"
  ],
  "correctAnswers": [
    "Facilities",
    "Hardware",
    "Software entitlements"
  ],
  "multipleChoice": true
},
{
  "id": 4,
  "text": "What is the default display name for an asset?",
  "options": [
    "An automatically generated combination of serial number and model category",
    "An automatically generated combination of asset tag and model",
    "An automatically generated combination of serial number and model",
    "An automatically generated combination of asset tag and model category"
  ],
  "correctAnswers": [
    "An automatically generated combination of asset tag and model"
  ],
  "multipleChoice": false
},
{
  "id": 5,
  "text": "What is the default state of a newly created asset?",
  "options": [
    "In use",
    "Consumed",
    "On order",
    "In stock"
  ],
  "correctAnswers": [
    "In use"
  ],
  "multipleChoice": false
},
{
  "id": 6,
  "text": "What is the impact of a customer opting out of the ServiceNow Content Service for specific models?",
  "options": [
    "Unrecognized data doesn't get sent to the ServiceNow Content Service and the customer doesn't receive Content Library updates",
    "Unrecognized data doesn't get sent to the ServiceNow Content Service",
    "Unrecognized data is sent to the ServiceNow Content Service, but is now encrypted",
    "Customer doesn't receive Content Library updates"
  ],
  "correctAnswers": [
    "Unrecognized data doesn't get sent to the ServiceNow Content Service"
  ],
  "multipleChoice": false
},
{
  "id": 7,
  "text": "What fields does the ServiceNow Content Service normalize or enrich? (Choose four.)",
  "options": [
    "Lifecycle",
    "Device type",
    "Manufacturer",
    "Memory",
    "Asset tag",
    "Hardware model"
  ],
  "correctAnswers": [
    "Lifecycle",
    "Device type",
    "Manufacturer",
    "Hardware model"
  ],
  "multipleChoice": true
},
{
  "id": 8,
  "text": "What is the process of restructuring data to maintain consistency?",
  "options": [
    "Integration",
    "Normalization",
    "Discovery",
    "Service Mapping"
  ],
  "correctAnswers": [
    "Normalization"
  ],
  "multipleChoice": false
},
{
  "id": 9,
  "text": "What are ways to measure trustworthy data? (Choose four.)",
  "options": [
    "Sustainability",
    "Plausibility",
    "Credibility",
    "Dependability",
    "Transferability",
    "Reliability"
  ],
  "correctAnswers": [
    "Credibility",
    "Dependability",
    "Transferability",
    "Reliability"
  ],
  "multipleChoice": true
},
{
  "id": 10,
  "text": "Any normalization that has occurred on a model can be reverted by using this feature.",
  "options": [
    "Normalizations cannot be reverted",
    "Rollback Normalization Business Rule",
    "Undo Normalization Scheduled Job",
    "Revert Normalization UI Action"
  ],
  "correctAnswers": [
    "Revert Normalization UI Action"
  ],
  "multipleChoice": false
},
{
  "id": 11,
  "text": "Which of these tables are installed with Hardware Model Normalization? (Choose three.)",
  "options": [
    "Device Type",
    "Hardware Manufacturer",
    "Hardware Normalize Key",
    "Hardware Model Library",
    "Device Name"
  ],
  "correctAnswers": [
    "Device Type",
    "Hardware Manufacturer",
    "Hardware Model Library"
  ],
  "multipleChoice": true
},
{
  "id": 12,
  "text": "To perform hardware model normalization, which three fields from the hardware model record are used to set the normalized display name?",
  "options": [
    "Name, Asset tracking unit, Model number",
    "Name, Manufacturer, Model number",
    "Asset tracking unit, Manufacturer, Model category",
    "Asset tracking unit, Manufacturer, Model number",
    "Name, Device type, Model category"
  ],
  "correctAnswers": [
    "Name, Manufacturer, Model number"
  ],
  "multipleChoice": false
},
{
  "id": 13,
  "text": "What is the global standard for product recognition used during hardware model normalization?",
  "options": [
    "IAPSO",
    "UPC",
    "UNSPSC",
    "ECCMA",
    "NIGP"
  ],
  "correctAnswers": [
    "UNSPSC"
  ],
  "multipleChoice": false
},
{
  "id": 14,
  "text": "During hardware model normalization, a hardware asset is set to a normalization status of, \"Partially Normalized\". What is the most likely cause?",
  "options": [
    "The model name is missing from the hardware model record.",
    "The model number is missing from the hardware model record.",
    "The model product is missing from the hardware model record.",
    "The model manufacturer is missing from the hardware model record."
  ],
  "correctAnswers": [
    "The model number is missing from the hardware model record."
  ],
  "multipleChoice": false
},
{
  "id": 15,
  "text": "What information should be tracked in an asset record? (Choose two.)",
  "options": [
    "Physical resources",
    "Financial information",
    "Operational details",
    "Contractual information",
    "Logical relationships"
  ],
  "correctAnswers": [
    "Financial information",
    "Contractual information"
  ],
  "multipleChoice": true
},
{
  "id": 16,
  "text": "Once the content update adds hardware lifecycle data to your instance, can it be deleted?",
  "options": [
    "Yes, it can",
    "No, it cannot unless the lifecycle stage is EOL",
    "No, it cannot",
    "Yes, it can be deleted or deactivated"
  ],
  "correctAnswers": [
    "No, it cannot"
  ],
  "multipleChoice": false
},
{
  "id": 17,
  "text": "What feature does the Hardware Asset Management (HAM) application use to fully normalize hardware models?",
  "options": [
    "Transform mappings",
    "Mapping assist",
    "Normalization transformation",
    "Normalization mappings",
    "Transform normalization"
  ],
  "correctAnswers": [
    "Normalization mappings"
  ],
  "multipleChoice": false
},
{
  "id": 18,
  "text": "During normalization, what is the most common cause for hardware models to generate a status of Match Not Found?",
  "options": [
    "Missing transform map",
    "Plugin issues",
    "Invalid transform map",
    "Missing data"
  ],
  "correctAnswers": [
    "Missing data"
  ],
  "multipleChoice": false
},
{
  "id": 19,
  "text": "Which values does the \"Asset tracking strategy\" field provide to affect individual models? (Choose three.)",
  "options": [
    "Create consumable asset",
    "Don't create assets",
    "Merge CI",
    "Leave to category",
    "Create assets"
  ],
  "correctAnswers": [
    "Create consumable asset",
    "Don't create assets",
    "Leave to category"
  ],
  "multipleChoice": true
},
{
  "id": 20,
  "text": "When activating Hardware Asset Management (HAM) in an instance already running Field Service Management (FSM), how do you configure asset tasks for existing incident, change, and work order flows?",
  "options": [
    "No configuration is required: asset tasks automatically activate behind the scenes",
    "Activate HAM, then run scheduled job \"Asset - Create FSM asset tasks\" to insert the asset tasks",
    "Activate HAM and then re-run the scheduled FSM jobs",
    "Stop the scheduled FSM jobs, activate HAM, then restart the scheduled FSM jobs"
  ],
  "correctAnswers": [
    "No configuration is required: asset tasks automatically activate behind the scenes"
  ],
  "multipleChoice": false
},
{
  "id": 21,
  "text": "When a hardware asset is retired (e.g., a server), what happens to any existing software allocations on that asset?",
  "options": [
    "The software allocations remain with the hardware asset and need to be reclaimed manually.",
    "The software allocations are automatically returned back into inventory.",
    "The software allocations are removed from the asset, but not returned to inventory.",
    "The behavior is controlled by the configurable system property glide.ham.retire_reclaim_sw().",
    "The behavior is controlled by the configurable system property glide.ham.retire_sw()."
  ],
  "correctAnswers": [
    "The software allocations are removed from the asset, but not returned to inventory."
  ],
  "multipleChoice": false
},
{
  "id": 22,
  "text": "With regard to Contract Management notifications, what is the most important contract dale to be aware of?",
  "options": [
    "Extend date",
    "Renew date",
    "Expire date",
    "Start date"
  ],
  "correctAnswers": [
    "Expire date"
  ],
  "multipleChoice": false
},
{
  "id": 23,
  "text": "Inventory audit results provide easy visibility into the reconciliation of scanned assets to the existing inventory. What audit statuses are displayed as part of the results? (Choose four.)",
  "options": [
    "Scanned",
    "Not found",
    "New",
    "Scanned and not expected",
    "Scanned and expected",
    "Expected and not found"
  ],
  "correctAnswers": [
    "New",
    "Scanned and not expected",
    "Scanned and expected",
    "Expected and not found"
  ],
  "multipleChoice": true
},
{
  "id": 24,
  "text": "How can you automate the replenishment of stock levels?",
  "options": [
    "Transfer Rules",
    "Transfer Orders",
    "Stock Filters",
    "Stock Rules"
  ],
  "correctAnswers": [
    "Stock Rules"
  ],
  "multipleChoice": false
},
{
  "id": 25,
  "text": "What are baseline asset states? (Choose three.)",
  "options": [
    "In Stock",
    "Consumed",
    "Retired",
    "Duplicate",
    "Exported"
  ],
  "correctAnswers": [
    "In Stock",
    "Consumed",
    "Retired"
  ],
  "multipleChoice": true
},
{
  "id": 26,
  "text": "What field must an agent complete when resolving an incident in order for the HAM asset tasks to automatically update all configuration item (CI) and asset records associated to the Incident?",
  "options": [
    "Asset and CI Action",
    "Asset-CI Task Action",
    "Asset Task Action",
    "Asset Action"
  ],
  "correctAnswers": [
    "Asset Action"
  ],
  "multipleChoice": false
},
{
  "id": 27,
  "text": "Which mobile app allows the user to conduct an inventory audit?",
  "options": [
    "ServiceNow Agent mobile app",
    "Mobile My Inventory",
    "Mobile Hardware Asset Management",
    "Mobile My Assets",
    "ServiceNow Inventory mobile app"
  ],
  "correctAnswers": [
    "ServiceNow Agent mobile app"
  ],
  "multipleChoice": false
},
{
  "id": 28,
  "text": "When running an asset audit, you receive the result of 10 \"Scanned and expected\" assets. What does this mean?",
  "options": [
    "You expected 10 assets in your inventory and scanned 10 assets during your audit, but none of them are on your expected inventory list.",
    "You expected 10 assets in your inventory and scanned these 10 assets during your audit.",
    "You expected 10 assets during your audit inventory and scanned 10 assets, but none of them have a record in your ServiceNow instance.",
    "You scanned 10 assets in your inventory, but none of them were on your expected inventory list."
  ],
  "correctAnswers": [
    "You expected 10 assets in your inventory and scanned these 10 assets during your audit."
  ],
  "multipleChoice": false
},
{
  "id": 29,
  "text": "During an audit, when is the Expected Assets list populated in the asset audit form?",
  "options": [
    "When the nightly scheduled job runs",
    "When scanning completes",
    "When scanning begins",
    "Pre-populated by the asset manager before audit",
    "When the asset manager Submits the results"
  ],
  "correctAnswers": [
    "When scanning begins"
  ],
  "multipleChoice": false
},
{
  "id": 30,
  "text": "Which of the following are valid substates of the Retired state? (Choose four.)",
  "options": [
    "Disposed",
    "Donated",
    "Vendor Credit",
    "Destroyed",
    "Pending Disposal",
    "Sold"
  ],
  "correctAnswers": [
    "Disposed",
    "Donated",
    "Vendor Credit",
    "Sold"
  ],
  "multipleChoice": true
},
{
  "id": 31,
  "text": "When a stock manager receives a new delivery of consumables, what happens if all the following fields match another record in the stockroom?",
  "options": [
    "The stock manager must create a separate model record if the cost per item is more/less",
    "The data is automatically merged to create a blended quantity and cost",
    "The data is automatically created in a new record if the cost per item is more/less",
    "The stock manager must merge the consumable records to create a blended quantity and cost"
  ],
  "correctAnswers": [
    "The data is automatically merged to create a blended quantity and cost"
  ],
  "multipleChoice": false
},
{
  "id": 32,
  "text": "How does an end user determine what consumables they have consumed?",
  "options": [
    "Navigate to Self-Service > My Consumables",
    "Navigate to Self-Service > My Assets",
    "Navigate to Asset > Hardware Asset Dashboard",
    "Navigate to Self-Service > My Hardware Asset Dashboard"
  ],
  "correctAnswers": [
    "Navigate to Self-Service > My Assets"
  ],
  "multipleChoice": false
},
{
  "id": 33,
  "text": "When using transfer orders to move multiple assets from a single stockroom to another, how should each asset be listed?",
  "options": [
    "Each asset should be listed as a transfer order line on the transfer order",
    "Each asset should be listed in a transfer order task on the transfer order",
    "Each asset should be listed as a transfer order line on the transfer order task",
    "Each asset should be listed in an individual transfer order"
  ],
  "correctAnswers": [
    "Each asset should be listed as a transfer order line on the transfer order"
  ],
  "multipleChoice": false
},
{
  "id": 34,
  "text": "What happens to the associated assets when you cancel a transfer order line on a transfer order?",
  "options": [
    "The asset(s) on the order line are released, but their state remains Pre-allocated",
    "The asset(s) on the order line are released and they can be attached to another transfer order",
    "All assets on the transfer order are released, but their state remains Pre-allocated",
    "A transfer order line cannot be cancelled once it is in a state of Ready for fulfillment",
    "All assets on the transfer order are released and they can be attached to another transfer order"
  ],
  "correctAnswers": [
    "The asset(s) on the order line are released and they can be attached to another transfer order"
  ],
  "multipleChoice": false
},
{
  "id": 35,
  "text": "When transferring non-consumable assets between stockrooms, how must they be transferred?",
  "options": [
    "In sets of two items",
    "No more than 10% of the source stockroom's inventory",
    "As a single entity with a quantity of one",
    "In groups of ten items"
  ],
  "correctAnswers": [
    "As a single entity with a quantity of one"
  ],
  "multipleChoice": false
},
{
  "id": 36,
  "text": "When disposing of an IT asset through a vendor, what documentation should be attached to the retired asset's record as proof of adherence to environmental, regulatory, and legal requirements?",
  "options": [
    "Certificate of discharge",
    "Certificate of decommission",
    "Certificate of destruction",
    "Certificate of disposal",
    "Certificate of retirement"
  ],
  "correctAnswers": [
    "Certificate of disposal"
  ],
  "multipleChoice": false
},
{
  "id": 37,
  "text": "You may adjust a contract when it is in which of the following states? (Choose two.)",
  "options": [
    "Active",
    "Extended",
    "Canceled",
    "Expired",
    "Renewed"
  ],
  "correctAnswers": [
    "Active",
    "Expired"
  ],
  "multipleChoice": true
},
{
  "id": 38,
  "text": "Which catalogs support the request and procurement process? (Choose three.)",
  "options": [
    "Product Catalog",
    "Vendor Catalog",
    "Asset Catalog",
    "Service Catalog",
    "Procurement Catalog"
  ],
  "correctAnswers": [
    "Product Catalog",
    "Vendor Catalog",
    "Service Catalog"
  ],
  "multipleChoice": true
},
{
  "id": 39,
  "text": "What are the three types of catalogs in ServiceNow? (Choose three.)",
  "options": [
    "Product Catalog",
    "Consumable Catalog",
    "Asset Catalog",
    "Vendor Catalog",
    "Service Catalog"
  ],
  "correctAnswers": [
    "Product Catalog",
    "Vendor Catalog",
    "Service Catalog"
  ],
  "multipleChoice": true
},
{
  "id": 40,
  "text": "The Stock Rule Runner scheduled job replenishes stock in a stockroom__________.",
  "options": [
    "When stock is less than the threshold specified in the stock rule",
    "By creating a purchase orders to restock from other stockrooms",
    "By creating transfer orders to restock from other stockrooms",
    "By notifying the stockroom manager of new transfer orders"
  ],
  "correctAnswers": [
    "When stock is less than the threshold specified in the stock rule"
  ],
  "multipleChoice": false
},
{
  "id": 41,
  "text": "When creating a list report that groups all assets by product model, which table is used?",
  "options": [
    "alm_asset",
    "alm_model",
    "alm_model_category",
    "alm_hardware"
  ],
  "correctAnswers": [
    "alm_asset"
  ],
  "multipleChoice": false
},
{
  "id": 42,
  "text": "Assets can be scanned and created in ServiceNow via the Agent mobile application in which scenarios? (Choose two.)",
  "options": [
    "Create a single asset via barcode scan",
    "Receive one or multiple assets from a purchase order",
    "Create multiple assets listed on a contract PDF scan",
    "Create a single asset via Name search"
  ],
  "correctAnswers": [
    "Create a single asset via barcode scan",
    "Create multiple assets listed on a contract PDF scan"
  ],
  "multipleChoice": true
},
{
  "id": 43,
  "text": "When viewing the Model Management tab of the Hardware Asset dashboard, you see that several models are reported as Match Not Found. What are potential causes of this? (Choose three.)",
  "options": [
    "You have opted out of the Content Service",
    "The content is not available from the Content Service",
    "Your model form contains a good Model number, but a bad model Name",
    "Something on your model form may be badly formatted",
    "The content has not been downloaded from the Content Service"
  ],
  "correctAnswers": [
    "The content is not available from the Content Service",
    "Something on your model form may be badly formatted",
    "The content has not been downloaded from the Content Service"
  ],
  "multipleChoice": true
},
{
  "id": 44,
  "text": "Which of the following are components of the asset request structure? (Choose three.)",
  "options": [
    "Procurement orders",
    "Transfer orders",
    "Stock order tasks",
    "Purchase orders",
    "Catalog tasks"
  ],
  "correctAnswers": [
    "Transfer orders",
    "Purchase orders",
    "Catalog tasks"
  ],
  "multipleChoice": true
},
{
  "id": 45,
  "text": "What is the primary goal of the Inventory tab of the Hardware Asset Management dashboard?",
  "options": [
    "Help the asset manager generate reports",
    "Show the value from maintaining inventory",
    "Help the stock manager process transfer orders",
    "Show the value from bulk purchasing",
    "Help the asset manager process purchase orders"
  ],
  "correctAnswers": [
    "Show the value from maintaining inventory"
  ],
  "multipleChoice": false
},
{
  "id": 46,
  "text": "What do certification filters define?",
  "options": [
    "The percentage of tasks required for the certification to be considered complete",
    "When the certification is performed",
    "The assets to be certified",
    "What fields are displayed for certification"
  ],
  "correctAnswers": [
    "The assets to be certified"
  ],
  "multipleChoice": false
},
{
  "id": 47,
  "text": "Which features are part of the ServiceNow Mobile App? (Choose two.)",
  "options": [
    "Provides end users visibility to their assigned hardware",
    "Enables reclamation of mobile devices",
    "Provides users visibility to their disposed consumables",
    "Enables end users to log incidents for their assigned assets"
  ],
  "correctAnswers": [
    "Provides end users visibility to their assigned hardware",
    "Enables end users to log incidents for their assigned assets"
  ],
  "multipleChoice": true
},
{
  "id": 48,
  "text": "What information would you find on the End of Life tab of the Hardware Asset dashboard? (Choose two.)",
  "options": [
    "Hardware asset disposal status",
    "New hardware assets found by audits",
    "Hardware assets disposed (YTD)"
  ],
  "correctAnswers": [
    "Hardware asset disposal status",
    "Hardware assets disposed (YTD)"
  ],
  "multipleChoice": true
},
{
  "id": 49,
  "text": "What are some examples of operational expenses of managing an asset throughout its lifecycle? (Choose two.)",
  "options": [
    "Replacement parts",
    "Storage costs",
    "Maintenance agreements",
    "Warranty costs"
  ],
  "correctAnswers": [
    "Replacement parts",
    "Maintenance agreements"
  ],
  "multipleChoice": true
},
{
  "id": 50,
  "text": "What is the name of the scheduled job that generates expense lines based on rate cards?",
  "options": [
    "Process Daily Costs",
    "Process FM Costs",
    "Process Daily Allocations",
    "Process Expense Allocations"
  ],
  "correctAnswers": [
    "Process FM Costs"
  ],
  "multipleChoice": false
},
{
  "id": 51,
  "text": "How do you calculate residual value?",
  "options": [
    "Subtract the amortized value from the cost of the asset",
    "Subtract storage and lease cost from the cost of the asset",
    "Subtract the depreciation from the cost of the asset",
    "Subtract the salvage value from the cost of the asset"
  ],
  "correctAnswers": [
    "Subtract the depreciation from the cost of the asset"
  ],
  "multipleChoice": false
},
{
  "id": 52,
  "text": "Configuration items (CIs) track what type of information? (Choose two.)",
  "options": [
    "Financial",
    "Operational",
    "Lifecycle",
    "Contractual",
    "Relationship"
  ],
  "correctAnswers": [
    "Operational",
    "Relationship"
  ],
  "multipleChoice": true
},
{
  "id": 53,
  "text": "When does an asset’s lifecycle begin?",
  "options": [
    "When an asset request is fulfilled",
    "Upon the asset deployment",
    "When the asset is procured",
    "Upon the asset’s request"
  ],
  "correctAnswers": [
    "Upon the asset’s request"
  ],
  "multipleChoice": false
},
{
  "id": 54,
  "text": "What are the goals of IT asset management (ITAM)? (Choose four.)",
  "options": [
    "Optimize cost",
    "Provide decision support",
    "Improve productivity",
    "Provide financial reporting",
    "Improve operational usage",
    "Track logical relationships"
  ],
  "correctAnswers": [
    "Optimize cost",
    "Provide decision support",
    "Improve productivity",
    "Provide financial reporting"
  ],
  "multipleChoice": true
},
{
  "id": 55,
  "text": "A given collection of methodologies, assets, and templates within Now Create is referred to as what?",
  "options": [
    "Now Create pack",
    "Project pack",
    "Success pack",
    "Methodology pack",
    "Asset pack"
  ],
  "correctAnswers": [
    "Success pack"
  ],
  "multipleChoice": false
},
{
  "id": 56,
  "text": "To access the full spectrum of asset management functionality, which inactive plugins should be installed? (Choose five.)",
  "options": [
    "Discovery",
    "Cost Management",
    "Procurement",
    "Hardware Asset Management",
    "Data Certification",
    "Service Mapping",
    "Managed Documents"
  ],
  "correctAnswers": [
    "Cost Management",
    "Procurement",
    "Hardware Asset Management",
    "Data Certification",
    "Managed Documents"
  ],
  "multipleChoice": true
},
{
  "id": 57,
  "text": "What are the four tiers of Capability Blueprint?",
  "options": [
    "Trustworthy Data, Lifecycle Management, Process Integration, Strategic Conformance",
    "Trustworthy Data, Practical Management, Process Integration, Business Alignment",
    "Trustworthy Data, Practical Management, Operational Integration, Strategic Conformance",
    "Trustworthy Data, Lifecycle Management, Operational integration, Business Alignment"
  ],
  "correctAnswers": [
    "Trustworthy Data, Practical Management, Operational Integration, Strategic Conformance"
  ],
  "multipleChoice": false
},
{
  "id": 58,
  "text": "What core table requires migration when extending ITSM Asset Management with Hardware Asset Management?",
  "options": [
    "cmdb_model_category",
    "alm_hardware",
    "No migration is required",
    "alm_asset"
  ],
  "correctAnswers": [
    "No migration is required"
  ],
  "multipleChoice": false
},
{
  "id": 59,
  "text": "How could you quickly determine if you had the Hardware Asset Management (HAM) plugin installed on your instance?",
  "options": [
    "Check for the Hardware Assets module in the application navigator",
    "Check for the Hardware Asset Dashboard module in the application navigator",
    "Check for the Asset application in the application navigator",
    "Check for the Hardware Asset Management application in the application navigator"
  ],
  "correctAnswers": [
    "Check for the Hardware Asset Dashboard module in the application navigator"
  ],
  "multipleChoice": false
},
{
  "id": 60,
  "text": "A component is considered an IT asset when you want to: (Choose three.)",
  "options": [
    "Manage its procurement",
    "Know its relationships to a business service",
    "Track its operational information",
    "Track its incurred costs",
    "Manage its maintenance contracts"
  ],
  "correctAnswers": [
    "Manage its procurement",
    "Track its incurred costs",
    "Manage its maintenance contracts"
  ],
  "multipleChoice": true
},
]; 
export default HAM3;
