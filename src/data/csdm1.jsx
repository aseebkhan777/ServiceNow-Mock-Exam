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
}
];


export default CSDM1;
