const CSDM3 = [
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
}
];

export default CSDM3;
