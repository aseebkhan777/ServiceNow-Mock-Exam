const questions = [
  {
    "id": 1,
    "text": "Which of the following checks to see if the assessable record exists for the demand and creates an assessable record if none exists?",
    "options": [
      "Validate Assessment Metrics for Demand",
      "Auto Business Rule for Assessments",
      "Update Demand State",
      "Create OnDemand Assessment"
    ],
    "correctAnswers": [
      "Auto Business Rule for Assessments"
    ],
    "multipleChoice": false
  },
  
  {
    "id": 2,
    "text": "Projects and which other artifact can be linked to either a program, a portfolio, both, or neither.",
    "options": [
      "Demands",
      "Test Cases",
      "Resources",
      "Stories"
    ],
    "correctAnswers": [
      "Demands"
    ],
    "multipleChoice": false
  },
  {
    "id": 3,
    "text": "If Scenario Planning for PPM is installed, a portfolio manager can access the Portfolio Planning Workbench by navigating to which of the\nfollowing? (Choose two.)",
    "options": [
      "Project module",
      "Program Workbench",
      "Portfolio Planning related link",
      "Portfolio Planning Workbench module"
    ],
    "correctAnswers": [
      "Portfolio Planning related link",
      "Portfolio Planning Workbench module"
    ],
    "multipleChoice": true
  },
  {
    "id": 4,
    "text": "When creating a resource plan within a demand, how are the default dates on a resource plan determined?",
    "options": [
      "From demand start date and due date",
      "Resource plan(s) cannot be created from demand",
      "Using demand created date",
      "From portfolio date"
    ],
    "correctAnswers": [
      "From demand start date and due date"
    ],
    "multipleChoice": false
  },
  {
    "id": 5,
    "text": "A customer requires five (5) teamspaces to support different departments. What should you do?",
    "options": [
      "Enable the teamspace property.",
      "Contact the Account Representative to activate the teamspaces.",
      "Activate via each teamspace plugin.",
      "Use UI Policies and Business Rules to enable teamspaces."
    ],
    "correctAnswers": [
      "Activate via each teamspace plugin."
    ],
    "multipleChoice": false
  },
  {
    "id": 6,
    "text": "When setting-up a program, planned ROI% is calculated based on: (Choose two.)",
    "options": [
      "Values in the NPV field.",
      "Values in the Planned cost field.",
      "Values in the Planned return field.",
      "Values in the Budgeted cost field."
    ],
    "correctAnswers": [
      "Values in the Planned cost field.",
      "Values in the Planned return field."
    ],
    "multipleChoice": true
  },
  {
    "id": 7,
    "text": "Which plugin provides a layer of artificial intelligence that empowers features and capabilities across applications to provide better work\nexperiences?",
    "options": [
      "Strategic Spend Tracking for PPM [sn_ppm_sst]",
      "Scenario Planning for PPM [sn_pw_scenario]",
      "Predictive Intelligence for PPM [com.snc.ppm_ml]",
      "PPM Standard [com.snc.financial_planning_pmo]"
    ],
    "correctAnswers": [
      "Predictive Intelligence for PPM [com.snc.ppm_ml]"
    ],
    "multipleChoice": false
  },
  {
    "id": 8,
    "text": "To use the Time Sheet dashboard, what plugin must be installed?",
    "options": [
      "Common ITSM Service Portal Application Components (com.snc.app_common.service_portal)",
      "Employee Service Center (com.sn_hr_service_portal)",
      "Knowledge Management \u2013 Service Portal (com.snc.knowledge_serviceportal)",
      "Performance Analytics \u2013 Content Pack \u2013 PPM Standard plugin (com.snc.pa.pmo_dashboards)"
    ],
    "correctAnswers": [
      "Performance Analytics \u2013 Content Pack \u2013 PPM Standard plugin (com.snc.pa.pmo_dashboards)"
    ],
    "multipleChoice": false
  },
  {
    "id": 9,
    "text": "Where do you define \u2018Roles\u2019 requested via resource plans?",
    "options": [
      "Resource roles under resource management.",
      "No need to define it differently, they are same are system roles",
      "Under skill management modules",
      "Roles under system security"
    ],
    "correctAnswers": [
      "Resource roles under resource management."
    ],
    "multipleChoice": false
  },
  {
    "id": 10,
    "text": "Plugins may be added to the base platform in one of the following ways: (Choose three.)",
    "options": [
      "Activated by an admin (not by default).",
      "Activated by an it_portfolio_manager.",
      "Requested from ServiceNow.",
      "Activated by default in the base ServiceNow system.",
      "Activated by an it_pps_admin."
    ],
    "correctAnswers": [
      "Activated by an admin (not by default).",
      "Requested from ServiceNow.",
      "Activated by default in the base ServiceNow system."
    ],
    "multipleChoice": true
  },
  {
    "id": 11,
    "text": "What does the project status report allow project managers to do? (Choose two.)",
    "options": [
      "View the project Gantt chart",
      "View the WBS",
      "Show historical trend of project KPI\u2019s",
      "Print as a PDF attachment"
    ],
    "correctAnswers": [
      "Show historical trend of project KPI\u2019s",
      "Print as a PDF attachment"
    ],
    "multipleChoice": true
  },
  {
    "id": 12,
    "text": "How does a project manager request a change to a resource plan in the requested state?",
    "options": [
      "Use notes on resource plan.",
      "Email resource user.",
      "Request change on resource plan",
      "Email resource manager"
    ],
    "correctAnswers": [
      "Request change on resource plan"
    ],
    "multipleChoice": false
  },
  {
    "id": 13,
    "text": "In which table can you find cost information for a specific fiscal period?",
    "options": [
      "cost_plan",
      "expense_line",
      "cost_plan_breakdown",
      "pm_project"
    ],
    "correctAnswers": [
      "cost_plan_breakdown"
    ],
    "multipleChoice": false
  },
  {
    "id": 14,
    "text": "What is the default schedule for a project?",
    "options": [
      "8-hour workday (from 8 to 12 and 1 to 5).",
      "8-hour workday (from 9 to 12 and 1 to 6).",
      "9-hour workday (from 8 to 12 and from 1 to 5).",
      "8-hour workday (from 9 to 5)."
    ],
    "correctAnswers": [
      "8-hour workday (from 8 to 12 and 1 to 5)."
    ],
    "multipleChoice": false
  },
  {
    "id": 15,
    "text": "The PPM Standard plugin enables an it_project_manager to perform the following activities: (Choose three.)",
    "options": [
      "Determine overall project cost requirements",
      "Configure cost type definition",
      "Define target for the portfolio",
      "Establish resource requirements and track costs", 
      "Track actual amount spent compared to an approved budget."
    ],
    "correctAnswers": [
      "Determine overall project cost requirements",
      "Establish resource requirements and track costs.",
      "Track actual amount spent compared to an approved budget."
    ],
    "multipleChoice": true
  },
  {
    "id": 16,
    "text": "When a time card is approved, the actual time is stored in which two tables? (Choose two.)",
    "options": [
      "Project Time table",
      "Resource Allocation Daily table",
      "Resource Event table",
      "Resource Aggregate tables (Daily, Weekly, and Monthly)"
    ],
    "correctAnswers": [
      "Resource Allocation Daily table",
      "Resource Aggregate tables (Daily, Weekly, and Monthly)"
    ],
    "multipleChoice": true
  },
  {
    "id": 17,
    "text": "Which of the following roles can access the project administration application?",
    "options": [
      "it_project_user.",
      "it_pps_admin.",
      "it_project_manager.",
      "timecard_admin."
    ],
    "correctAnswers": [
      "it_pps_admin."
    ],
    "multipleChoice": false
  },
  {
    "id": 18,
    "text": "The Project Portfolio Management application supports domain separation at this level:",
    "options": [
      "Level 3 \u2013 Tenant self-managed configuration",
      "Level 1 \u2013 Tenant data management",
      "Level 2 \u2013 Tenant process management",
      "Data only"
    ],
    "correctAnswers": [
      "Level 1 \u2013 Tenant data management"
    ],
    "multipleChoice": false
  },
  {
    "id": 19,
    "text": "The hourly rate is derived from the resource rate on the resource plan, if this option is selected.",
    "options": [
      "Rate override",
      "Labor rate card",
      "Rate model",
      "Planned cost"
    ],
    "correctAnswers": [
      "Rate override"
    ],
    "multipleChoice": false
  },
  {
    "id": 20,
    "text": "Which role can configure the parameters of the demand workbench that is provided with the base system?",
    "options": [
      "All roles.",
      "it_project_manager",
      "it_pps_admin.",
      "business_stakeholder."
    ],
    "correctAnswers": [
      "it_pps_admin."
    ],
    "multipleChoice": false
  },
  {
    "id": 21,
    "text": "Depending on the execution type selected for a particular project, one of these dashboards will also be available:",
    "options": [
      "Timecard Dashboard",
      "User Manager Dashboard",
      "Project Summary \u2013 Waterfall Dashboard",
      "PMO Dashboard"
    ],
    "correctAnswers": [
      "Project Summary \u2013 Waterfall Dashboard"
    ],
    "multipleChoice": false
  },
  {
    "id": 22,
    "text": "In order to submit an idea, what application would a user access?",
    "options": [
      "Demand",
      "Project",
      "Idea Portal",
      "Change"
    ],
    "correctAnswers": [
      "Idea Portal"
    ],
    "multipleChoice": false
  },
  {
    "id": 23,
    "text": "Which \u2018Member Preference\u2019 automatically finds the most available resource(s) from the group and allocates to a plan using the allocation action?",
    "options": [
      "All members.",
      "Specific member.",
      "Any member and specific member.",
      "Any member."
    ],
    "correctAnswers": [
      "Any member."
    ],
    "multipleChoice": false
  },
  {
    "id": 24,
    "text": "An it_pps_admin user is able to update: (Choose two.)",
    "options": [
      "Budget Periods.",
      "Client Scripts.",
      "Business Rules.",
      "Portfolio Targets."
    ],
    "correctAnswers": [
      "Budget Periods.",
      "Portfolio Targets."
    ],
    "multipleChoice": true
  },
  {
    "id": 25,
    "text": "What role can configure an idea module, map idea categories to the idea module, and add navigation for the Idea Portal?",
    "options": [
      "Idea admin [idea_admin]",
      "Project manager [it_project_manager]",
      "Idea manager [idea_manager]",
      "Demand manager [it_demand_manager]"
    ],
    "correctAnswers": [
      "Idea admin [idea_admin]"
    ],
    "multipleChoice": false
  },
  {
    "id": 26,
    "text": "Which roles can view reports on resource utilization and availability? (Choose two.)",
    "options": [
      "it_project_portfolio_user",
      "pps_resource",
      "resource_manager",
      "resource_user"
    ],
    "correctAnswers": [
      "resource_manager",
      "resource_user"
    ],
    "multipleChoice": true
  },
  {
    "id": 27,
    "text": "What role can create or modify a rate model?",
    "options": [
      "it_pps_admin.",
      "time_card_admin.",
      "push_admin.",
      "release_admin."
    ],
    "correctAnswers": [
      "it_pps_admin."
    ],
    "multipleChoice": false
  },
  {
    "id": 28,
    "text": "To set up a group for selection in a resource plan, the group record needs to include which role?",
    "options": [
      "resource_manager",
      "itil",
      "it_project_user",
      "pps_resource"
    ],
    "correctAnswers": [
      "pps_resource"
    ],
    "multipleChoice": false
  },
  {
    "id": 29,
    "text": "When can a user choose from multiple rate types for their work, while logging a time card?",
    "options": [
      "Only if the capability is enabled in the Project Preferences",
      "Only if this capability is enabled in the Project Record",
      "Only one (1) rate type can apply",
      "Only if the capability is enabled in the Time Sheet Policies"
    ],
    "correctAnswers": [
      "Only if the capability is enabled in the Time Sheet Policies"
    ],
    "multipleChoice": false
  },
  {
    "id": 30,
    "text": "What is the difference between confirm and allocate actions?",
    "options": [
      "They function the same way.",
      "Confirm action creates hard allocation and allocate action creates soft allocation.",
      "Confirm action creates soft allocation and allocate action creates hard allocation.",
      "Allocate action is always followed by confirm action."
    ],
    "correctAnswers": [
      "Confirm action creates soft allocation and allocate action creates hard allocation."
    ],
    "multipleChoice": false
  },
  {
    "id": 31,
    "text": "If a user creates a new demand from the demand workbench, what state will the system save the record in?",
    "options": [
      "approved",
      "open",
      "draft",
      "qualified"
    ],
    "correctAnswers": [
      "qualified"
    ],
    "multipleChoice": false
  },
  {
    "id": 32,
    "text": "In order for a business unit to have its own Idea Portal to retrieve data, what must be configured first?",
    "options": [
      "A business unit cannot have its own its own Idea Portal",
      "Idea Portal URL",
      "Idea categories",
      "Idea module"
    ],
    "correctAnswers": [
      "Idea module"
    ],
    "multipleChoice": false
  },
  {
    "id": 33,
    "text": "What needs to be configured if a customer wants to change the attributes copied when using copy project or copy partial project?",
    "options": [
      "The copy project client script.",
      "com.snc.project.copy.",
      "com.snc.project.copy.additional_attributes.",
      "The copy project UI action"
    ],
    "correctAnswers": [
      "com.snc.project.copy.additional_attributes."
    ],
    "multipleChoice": false
  },
  {
    "id": 34,
    "text": "When entering time worked into a time sheet, which feature is recommended to group different types of work (e.g., standard hours and overtime)?",
    "options": [
      "Rate type",
      "Bill rate",
      "Category",
      "Rate model"
    ],
    "correctAnswers": [
      "Rate type"
    ],
    "multipleChoice": false
  },
  {
    "id": 35,
    "text": "What system role is needed to manage programs?",
    "options": [
      "it_project_manager",
      "it_portfolio_manager_admin",
      "it_program_manager",
      "it_program_manager_admin"
    ],
    "correctAnswers": [
      "it_program_manager"
    ],
    "multipleChoice": false
  },
  {
    "id": 36,
    "text": "Who can submit Ideas?",
    "options": [
      "Any user.",
      "Any IT user.",
      "Any demand user.",
      "Any ITIL user."
    ],
    "correctAnswers": [
      "Any user."
    ],
    "multipleChoice": false
  },
  {
    "id": 37,
    "text": "Where can a user export project data in either a MPP, XML or CSV format?",
    "options": [
      "Demand Form",
      "Related lists",
      "Project Workbench",
      "Planning Console"
    ],
    "correctAnswers": [
      "Planning Console"
    ],
    "multipleChoice": false
  },
  {
    "id": 38,
    "text": "Which of the following are true regarding how the My Project Space (Project Workspace) handles dynamic content? (Choose two.)",
    "options": [
      "If the project state is On Hold, actual start date and actual end date are displayed.",
      "If the project state is Pending or Open, planned start date and planned end date are displayed.",
      "If the project state is Draft, actual start date and actual end date are displayed.",
      "If the project state is Work in Progress, actual start date and planned end date are displayed."
    ],
    "correctAnswers": [
      "If the project state is Pending or Open, planned start date and planned end date are displayed.",
      "If the project state is Work in Progress, actual start date and planned end date are displayed."
    ],
    "multipleChoice": true
  },
  {
    "id": 39,
    "text": "Which of the following states appear in the process flow indicator at the top of the Demand form by default? (Choose three.)",
    "options": [
      "Draft",
      "Approved",
      "Updated",
      "Screening",
      "Deferred"
    ],
    "correctAnswers": [
      "Draft",
      "Approved",
      "Screening",
    ],
    "multipleChoice": true
  },
  {
    "id": 40,
    "text": "Where are CAPEX and OPEX targets set for each fiscal year?",
    "options": [
      "Demand Workbench",
      "Cost Plans",
      "Portfolio Target",
      "Program Workbench"
    ],
    "correctAnswers": [
      "Portfolio Target"
    ],
    "multipleChoice": false
  },
  {
    "id": 41,
    "text": "Which plugin activates the ideas module to gather and evaluate ideas efficiently, and quickly identify ideas for implementation?",
    "options": [
      "Resource Management",
      "Test Management 2.0",
      "Ideation with PPM",
      "Agile Development 2.0"
    ],
    "correctAnswers": [
      "Ideation with PPM"
    ],
    "multipleChoice": false
  },
  {
    "id": 42,
    "text": "In what way would you restrict the assigned to field on a project task to only allow users with resource allocations to be assigned?",
    "options": [
      "Create an Access Control List (ACL) rule.",
      "On the project record under the preferences tab select the \u201cDerive assignee list from resource plan\u201d preference.",
      "The system automatically does this and can only be disabled by an admin.",
      "Create a reference qualifier on the \u2018assigned to\u2019 field."
    ],
    "correctAnswers": [
      "On the project record under the preferences tab select the \u201cDerive assignee list from resource plan\u201d preference."
    ],
    "multipleChoice": false
  },
  {
    "id": 43,
    "text": "At a minimum, which role is required to view the summary of a project in the Details tab of Project Workspace?",
    "options": [
      "it_project_manager",
      "itil",
      "it_project_user",
      "it_portfolio_manager"
    ],
    "correctAnswers": [
      "it_project_user"
    ],
    "multipleChoice": false
  },
  {
    "id": 44,
    "text": "What is the demand workbench used for? (Choose two.)",
    "options": [
      "Displaying submitted demands to stakeholders.",
      "Comparing demands with portfolios.",
      "Comparing and prioritizing demands against other demands.",
      "Approving demands."
    ],
    "correctAnswers": [
      "Displaying submitted demands to stakeholders.",
      "Comparing and prioritizing demands against other demands."
    ],
    "multipleChoice": true
  },
  {
    "id": 45,
    "text": "What applications are shared across teamspaces?",
    "options": [
      "Project Financials, Agile, Test.",
      "Resource, Project Financials, Agile",
      "Resource, Agile, Test",
      "Agile, Test only."
    ],
    "correctAnswers": [
      "Resource, Agile, Test"
    ],
    "multipleChoice": false
  },
  {
    "id": 46,
    "text": "A project expense line is a cost associated with a specific source. Examples of specific sources could include: (Choose three.)",
    "options": [
      "User.",
      "Configuration Item (CI).",
      "Project.",
      "Demand.",
      "Fixed Asset."
    ],
    "correctAnswers": [
      "User.",
      "Configuration Item (CI).",
      "Fixed Asset."
    ],
    "multipleChoice": true
  },
  {
    "id": 47,
    "text": "Which roles can modify agile properties? (Choose two.)",
    "options": [
      "it_pps_admin.",
      "product_owner.",
      "admin.",
      "scrum_master."
    ],
    "correctAnswers": [
      "it_pps_admin.",
      "admin."
    ],
    "multipleChoice": true
  },
  {
    "id": 48,
    "text": "In the base system, what is the default number of cards that can be displayed in the project workspace?",
    "options": [
      "200",
      "10",
      "1500",
      "1"
    ],
    "correctAnswers": [
      "200"
    ],
    "multipleChoice": false
  },
  {
    "id": 49,
    "text": "Demand managers can enhance a demand request by adding the following: (Choose three.)",
    "options": [
      "Requirements",
      "Change Requests",
      "Problems",
      "Decisions.",
      "Stakeholders"
    ],
    "correctAnswers": [
      "Requirements",
      "Decisions,",
      "Stakeholders"
    ],
    "multipleChoice": true
  },
  {
    "id": 50,
    "text": "This should be updated by an it_pps_admin, so that the stakeholder list will automatically populate when a user creates a demand or project.",
    "options": [
      "Project form.",
      "Stakeholder registry.",
      "Demand form.",
      "Application registry."
    ],
    "correctAnswers": [
      "Stakeholder registry."
    ],
    "multipleChoice": false
  },
  {
    "id": 51,
    "text": "What happens to the expense line after it is processed?",
    "options": [
      "The actual cost is recorded at the portfolio level.",
      "Nothing significant results.",
      "The cost plan closes.",
      "The actual amount incurred becomes part of the cost plan."
    ],
    "correctAnswers": [
      "The actual amount incurred becomes part of the cost plan."
    ],
    "multipleChoice": false
  },
  {
    "id": 52,
    "text": "A pps_admin role can configure the parameters that are displayed on a project card. The parameters displayed on a project card are derived from\nthe records in what table?",
    "options": [
      "CMDB Health Scorecard [cmdb_health_scorecard_group].",
      "PM Home Page Card [pm_home_page_card].",
      "Project Time Card Exception [project_time_category].",
      "Theme [scrum_theme]."
    ],
    "correctAnswers": [
      "PM Home Page Card [pm_home_page_card]."
    ],
    "multipleChoice": false
  },
  {
    "id": 53,
    "text": "What creates calendar entries on a user\u2019s individual calendar? (Choose two.)",
    "options": [
      "Approved resource plan.",
      "Allocated resource plan.",
      "Confirmed resource plan.",
      "Planned resource plan."
    ],
    "correctAnswers": [
      "Confirmed resource plan.",
      "Planned resource plan."
    ],
    "multipleChoice": true
  },
  {
    "id": 54,
    "text": "If the Agile Development 2.0 plugin is activated, an idea can be converted into which of the following task types? (Choose three.)",
    "options": [
      "Story",
      "SAFe epic",
      "Epic",
      "SAFe feature.",
      "Project"
    ],
    "correctAnswers": [
      "Story",
      "Epic"
    ],
    "multipleChoice": true
  },
  {
    "id": 55,
    "text": "The RIDAC workflow can be modified by using which feature?",
    "options": [
      "Project Form",
      "Service Catalog",
      "Idea Portal",
      "Flow Designer"
    ],
    "correctAnswers": [
      "Flow Designer"
    ],
    "multipleChoice": false
  },
  {
    "id": 56,
    "text": "An it_project_manager can request resources by which of the following: (Choose two.)",
    "options": [
      "Hours.",
      "Person Days.",
      "Month.",
      "Day."
    ],
    "correctAnswers": [
      "Hours.",
      "Person Days."
    ],
    "multipleChoice": true
  },
  {
    "id": 57,
    "text": "Which of these tools allow you pinpoint over-allocated resources by viewing their negative availability values? (Choose two.)",
    "options": [
      "Project Workbench",
      "Resource Plan Logs",
      "Resource Allocation Workbench",
      "Resource Reports"
    ],
    "correctAnswers": [
      "Resource Allocation Workbench",
      "Resource Reports"
    ],
    "multipleChoice": true
  },
  {
    "id": 58,
    "text": "How is a resource group\u2019s capacity derived for resource planning?",
    "options": [
      "Aggregate capacity of all its members.",
      "Stored in Resource_Aggregate_Daily table.",
      "Stored with Group Record.",
      "Stored in Resource_Allocation_Daily table."
    ],
    "correctAnswers": [
      "Aggregate capacity of all its members."
    ],
    "multipleChoice": false
  },
  {
    "id": 59,
    "text": "The information displayed on Project Workspace is setup in which table?",
    "options": [
      "vtb_card",
      "pm_project",
      "pm_home_page_card",
      "vtb_card_history"
    ],
    "correctAnswers": [
      "pm_home_page_card"
    ],
    "multipleChoice": false
  },
  {
    "id": 60,
    "text": "Which capability allows users to view variances in a project\u2019s schedule?",
    "options": [
      "Move project",
      "Project Status Report",
      "Compare scheduled baselines",
      "Machine-learning algorithms"
    ],
    "correctAnswers": [
      "Compare scheduled baselines"
    ],
    "multipleChoice": false
  },
  {
    "id": 61,
    "text": "What role can configure the default columns in the project planning console? (Choose two.)",
    "options": [
      "admin",
      "it_project_manager",
      "it_console_admin",
      "it_pps_admin"
    ],
    "correctAnswers": [
      "admin"
    ],
    "multipleChoice": false
  },
  {
    "id": 62,
    "text": "Which table stores daily capacity of a user?",
    "options": [
      "Resource_Aggregate_Daily.",
      "Resource_Allocation_Daily.",
      "User Profile.",
      "Resource_Event."
    ],
    "correctAnswers": [
      "Resource_Aggregate_Daily."
    ],
    "multipleChoice": false
  },
  {
    "id": 63,
    "text": "Users with what role can be considered for resource planning?",
    "options": [
      "it_user.",
      "pps_resource.",
      "it_project_user.",
      "it_pps_user."
    ],
    "correctAnswers": [
      "pps_resource."
    ],
    "multipleChoice": false
  },
  {
    "id": 64,
    "text": "What features are not included in a teamspace application but can be added in teamspace settings? (Choose two.)",
    "options": [
      "Workbench configuration.",
      "Idea.",
      "Project.",
      "Demand Assessments."
    ],
    "correctAnswers": [
      "Workbench configuration.",
      "Demand Assessments."
    ],
    "multipleChoice": true
  },
  {
    "id": 65,
    "text": "Is resource capacity derived from FTE or schedules?",
    "options": [
      "Only FTE.",
      "Both.",
      "Only Schedules.",
      "Neither."
    ],
    "correctAnswers": [
      "Only Schedules."
    ],
    "multipleChoice": false
  },
  {
    "id": 66,
    "text": "How is the Resource Management application activated?",
    "options": [
      "Installed with PPM Standard plugin",
      "Installed as part of Release Management plugin",
      "Installed as part of adding users",
      "Installed automatically as part of new system"
    ],
    "correctAnswers": [
      "Installed with PPM Standard plugin"
    ],
    "multipleChoice": false
  },
  {
    "id": 67,
    "text": "Can an it_project_manager convert a task to a milestone?",
    "options": [
      "Yes, it must be manually done from the project record.",
      "Yes, from the planning console right-click a task and select convert to milestone.",
      "No, the task must be deleted and re-created.",
      "No, this can only be done by an admin."
    ],
    "correctAnswers": [
      "Yes, from the planning console right-click a task and select convert to milestone."
    ],
    "multipleChoice": false
  },
  {
    "id": 68,
    "text": "Which field on the Idea Module form displays the unique identifier for the module, that is used as a parameter in the Idea Portal URL to direct\nusers?",
    "options": [
      "Module ID",
      "Category Limit",
      "Module Name",
      "Idea Table"
    ],
    "correctAnswers": [
      "Module ID"
    ],
    "multipleChoice": false
  },
  {
    "id": 69,
    "text": "Which users have access the project administration application? (Choose two.)",
    "options": [
      "it_portfolio_manager",
      "it_pps_admin",
      "it_project_manager",
      "admin"
    ],
    "correctAnswers": [
      "it_pps_admin",
      "admin"
    ],
    "multipleChoice": true
  },
  {
    "id": 70,
    "text": "The Business Unit field on a Project or displays values from a specific table. What type of field is this?",
    "options": [
      "Reference.",
      "Conditions.",
      "Journal.",
      "List."
    ],
    "correctAnswers": [
      "Reference."
    ],
    "multipleChoice": false
  },
  {
    "id": 71,
    "text": "If an it_project_manager does not want to equally distribute hours across the resource plan time frame, what allocation spread should be used?",
    "options": [
      "Front Load.",
      "Back Load.",
      "Any.",
      "Even."
    ],
    "correctAnswers": [
      "Front Load."
    ],
    "multipleChoice": false
  },
  {
    "id": 72,
    "text": "Using the Request type field on a resource plan, which options can be used to request a resource? (Choose three.)",
    "options": [
      "Month",
      "Hours",
      "FTE",
      "Person Days.",
      "Day"
    ],
    "correctAnswers": [
      "Hours",
      "FTE",
      "Person Days.",
    ],
    "multipleChoice": true
  },
  {
    "id": 73,
    "text": "What are the possible breakdown types of a cost plan breakdown? (Choose four.)",
    "options": [
      "Demand",
      "Requirement",
      "Project",
      "Task",
      "Portfolio",
      "Program"
    ],
    "correctAnswers": [
      "Demand",
      "Project",
      "Portfolio",
      "Program"
    ],
    "multipleChoice": true
  },
  {
    "id": 74,
    "text": "Where is planned cost calculated from when requesting resources from a group and when resource role is specified?",
    "options": [
      "The task rate cards.",
      "The distribution costs.",
      "The hourly rate of the specified role.",
      "The CI rate cards."
    ],
    "correctAnswers": [
      "The hourly rate of the specified role."
    ],
    "multipleChoice": false
  },
  {
    "id": 75,
    "text": "What is a Program?",
    "options": [
      "A group of related projects and program activities.",
      "A group of related projects, ideas, demands, and task activities.",
      "A group of related projects, demands, and program activities.",
      "A group of related projects."
    ],
    "correctAnswers": [
      "A group of related projects, demands, and program activities."
    ],
    "multipleChoice": false
  },
  {
    "id": 76,
    "text": "If you want the project planned start date to remain the same despite the start date of the earliest task, what property would you disable?",
    "options": [
      "Roll up project start date from tasks [com.snc.project.rollup_project_start_date].",
      "Max date span into future or past from the current date for the project/project task [com.snc.project.task.check_date_span_years].",
      "Retain start on constraint on tasks after adding relations [com.snc.project.allow_start_on_relations].",
      "Max duration allowed for a project/project task [com.snc.project.task.max_task_duration]."
    ],
    "correctAnswers": [
      "Roll up project start date from tasks [com.snc.project.rollup_project_start_date]."
    ],
    "multipleChoice": false
  },
  {
    "id": 77,
    "text": "Which is the minimum role that has access to the Project Administration > Settings > Preferences-Project module?",
    "options": [
      "it_project_manager",
      "it_pps_admin",
      "sys_admin",
      "it_program_manager"
    ],
    "correctAnswers": [
      "it_pps_admin"
    ],
    "multipleChoice": false
  },
  {
    "id": 78,
    "text": "When creating a project from demand, what related records are moved and copied upon Project Creation?",
    "options": [
      "Resource Plan and Cost Plan.",
      "Resource Plan and Change Requests.",
      "Cost Plan and Assessment.",
      "Idea and Demand."
    ],
    "correctAnswers": [
      "Resource Plan and Cost Plan."
    ],
    "multipleChoice": false
  },
  {
    "id": 79,
    "text": "How many WBS levels can be shown on the planning console?",
    "options": [
      "One.",
      "Two.",
      "Three.",
      "No Limit."
    ],
    "correctAnswers": [
      "No Limit."
    ],
    "multipleChoice": false
  },
  {
    "id": 80,
    "text": "What is a data copy of the current project\u2019s task, schedule, or structure that can be used for comparison reporting later?",
    "options": [
      "Accrual",
      "Forecast",
      "Commitment",
      "Baseline"
    ],
    "correctAnswers": [
      "Baseline"
    ],
    "multipleChoice": false
  },
  {
    "id": 81,
    "text": "A checklist item record provides a name and what other element?",
    "options": [
      "Status field.",
      "Complete field.",
      "Percent complete field.",
      "Short description field."
    ],
    "correctAnswers": [
      "Complete field."
    ],
    "multipleChoice": false
  },
  {
    "id": 82,
    "text": "The project property to update actual effort from time card is controlled at what level?",
    "options": [
      "Application Level (Global).",
      "Program Level.",
      "Project Level.",
      "Portfolio Level."
    ],
    "correctAnswers": [
      "Project Level."
    ],
    "multipleChoice": false
  },
  {
    "id": 83,
    "text": "What is a resource event?",
    "options": [
      "An external event.",
      "An event scheduled by a project manager.",
      "A block of time that a resource spends on a task.",
      "A non-scheduled activity impacting capacity."
    ],
    "correctAnswers": [
      "A block of time that a resource spends on a task."
    ],
    "multipleChoice": false
  },
  {
    "id": 84,
    "text": "What happens to resource allocations with actual hours after a resource plan is cancelled?",
    "options": [
      "The allocated hours remain until the project is closed.",
      "The allocated hours become zero and the actual hours are retained.",
      "A resource plan with actual hours cannot be canceled.",
      "They are automatically moved to the next resource plan in the project."
    ],
    "correctAnswers": [
      "The allocated hours become zero and the actual hours are retained."
    ],
    "multipleChoice": false
  },
  {
    "id": 85,
    "text": "A program is a container for the following except for:",
    "options": [
      "Program tasks",
      "Issues",
      "Cost plans",
      "Portfolios"
    ],
    "correctAnswers": [
      "Portfolios"
    ],
    "multipleChoice": false
  },
  {
    "id": 86,
    "text": "Which related lists should primarily be used to capture financial data in a project? (Choose two.)",
    "options": [
      "Cost Plans",
      "Risks",
      "Programs",
      "Monetary Benefit Plans"
    ],
    "correctAnswers": [
      "Cost Plans",
      "Monetary Benefit Plans"
    ],
    "multipleChoice": true
  },
  {
    "id": 87,
    "text": "Use this table to configure the parameters displayed on a project card on the My Projects Space page of the Project Workspace.",
    "options": [
      "pm_toplevel_project",
      "project_template_config",
      "pm_project",
      "pm_home_page_config"
    ],
    "correctAnswers": [
      "pm_home_page_config"
    ],
    "multipleChoice": false
  },
  {
    "id": 88,
    "text": "Which statement defines the Project Workspace?",
    "options": [
      "A central location to view of all projects in a portfolio to prioritize work",
      "A central location for creating and managing projects",
      "A central location for viewing and assessing business demands",
      "A central location transform the navigation of lists and forms into an interactive graphical experience"
    ],
    "correctAnswers": [
      "A central location for creating and managing projects"
    ],
    "multipleChoice": false
  },
  {
    "id": 89,
    "text": "A user\u2019s availability is calculated as:",
    "options": [
      "Allocated time",
      "Capacity minus allocation",
      "Allocated hours divided by the total capacity",
      "Sum of allocated and confirmed hours, divided by the total capacity"
    ],
    "correctAnswers": [
      "Capacity minus allocation"
    ],
    "multipleChoice": false
  },
  {
    "id": 90,
    "text": "A project expense line is cost associated with a specific source, except for:",
    "options": [
      "Resource.",
      "Fixed Assets.",
      "Software.",
      "Program."
    ],
    "correctAnswers": [
      "Program."
    ],
    "multipleChoice": false
  },
  {
    "id": 91,
    "text": "Which of the following can be used to calculate planned cost when creating a resource plan? (Choose two.)",
    "options": [
      "Default rate",
      "Rate card",
      "Demand rate",
      "Project rate"
    ],
    "correctAnswers": [
      "Default rate",
      "Rate card"
    ],
    "multipleChoice": true
  },
  {
    "id": 92,
    "text": "If a project manager is responsible for approving time sheets or submitting time cards on behalf of team members, they should be given what\nrole?",
    "options": [
      "form_admin.",
      "approval_admin.",
      "timecard_admin.",
      "activity_admin."
    ],
    "correctAnswers": [
      "timecard_admin."
    ],
    "multipleChoice": false
  },
  {
    "id": 93,
    "text": "Which property controls the changes in cost and resource plans with respect to the change in the start date of a demand or project?",
    "options": [
      "\u2018Change Resource Plan, Cost Plan and Benefit Plan Start Date with Demand or Project Start Date Change\u2019.",
      "\u2018Enable altering of planned date for task in WIP/Closed\u2019.",
      "\u2018Rollup project start date from tasks\u2019.",
      "\u2018Calculate ROI percentage based on a project\u2019s estimated cost and its net value\u2019."
    ],
    "correctAnswers": [
      "\u2018Change Resource Plan, Cost Plan and Benefit Plan Start Date with Demand or Project Start Date Change\u2019."
    ],
    "multipleChoice": false
  },
  {
    "id": 94,
    "text": "If the \u2018Move project for WIP projects\u2019 property is enabled, project tasks associated with the project are also moved, except for tasks in which of\nthe following states? (Choose two.)",
    "options": [
      "Pending",
      "Closed",
      "Work in Progress",
      "Open"
    ],
    "correctAnswers": [
      "Closed",
      "Work in Progress"
    ],
    "multipleChoice": true
  },
  {
    "id": 95,
    "text": "Expenses and costs for a particular demand should be estimated before screening. When preparing the financials of a demand, what determines\nthe present value of future cash flows?",
    "options": [
      "Financial Return.",
      "Planned ROI.",
      "Internal Rate of Return %.",
      "Discount Rate %."
    ],
    "correctAnswers": [
      "Discount Rate %."
    ],
    "multipleChoice": false
  },
  {
    "id": 96,
    "text": "Idea [im_idea_core] is directly extended from which table?",
    "options": [
      "Project",
      "It is not extended from any table.",
      "Idea Modules",
      "Task"
    ],
    "correctAnswers": [
      "Task"
    ],
    "multipleChoice": false
  },
  {
    "id": 97,
    "text": "The Defect and Enhancement type choices on a demand form are available only when which plugin is installed?",
    "options": [
      "Agile Development 2.0",
      "Ideation with PPM",
      "Test Management 2.0",
      "Investment Funding for PPM"
    ],
    "correctAnswers": [
      "Agile Development 2.0"
    ],
    "multipleChoice": false
  },
  {
    "id": 98,
    "text": "The color band at the top of the project card in Project Workspace displays what project attribute?",
    "options": [
      "Issues",
      "Risk",
      "Status",
      "State"
    ],
    "correctAnswers": [
      "Status"
    ],
    "multipleChoice": false
  },
  {
    "id": 99,
    "text": "Topic 1\n\nAs an administrator, what can you use to customize the PPM Mobile application?",
    "options": [
      "Mobile Studio",
      "Self-Service",
      "ATF Suites",
      "Service Catalog"
    ],
    "correctAnswers": [
      "Mobile Studio"
    ],
    "multipleChoice": false
  },
  {
    "id": 100,
    "text": "Demand assessments are triggered as soon as the demand enters what state?",
    "options": [
      "Submitted.",
      "Approved.",
      "Screening.",
      "Qualified"
    ],
    "correctAnswers": [
      "Screening."
    ],
    "multipleChoice": false
  },
  {
    "id": 101,
    "text": "Which demand category would a demand manager select, if they need to create an enhancement?",
    "options": [
      "Change",
      "Strategic",
      "Defect",
      "Operational"
    ],
    "correctAnswers": [
      "Strategic"
    ],
    "multipleChoice": false
  },
  {
    "id": 102,
    "text": "On the demand form, what does the Discount Rate impact?",
    "options": [
      "Internal Rate of Return %.",
      "ROI.",
      "Financial Benefit.",
      "Net Present Value (NPV)."
    ],
    "correctAnswers": [
      "Net Present Value (NPV)."
    ],
    "multipleChoice": false
  },
  {
    "id": 103,
    "text": "As a demand manager, you can view an artifact from a demand. What artifacts are part of a demand?",
    "options": [
      "Incidents, Problems, Change.",
      "Decision, Risk, Requirements.",
      "Project, Defect, Requests.",
      "Stories, Vulnerability Tasks, Enhancements."
    ],
    "correctAnswers": [
      "Project, Defect, Requests."
    ],
    "multipleChoice": false
  },
  {
    "id": 104,
    "text": "As an it_pps_admin, what can you use to detect corrupt data in a project, such as tasks with invalid parents or cyclic relations in a project?",
    "options": [
      "Project Diagnostics.",
      "System Diagnostics.",
      "Edge Encryption Diagnostics.",
      "Analytics Diagnostics."
    ],
    "correctAnswers": [
      "Project Diagnostics."
    ],
    "multipleChoice": false
  },
  {
    "id": 105,
    "text": "In which scenario would using the Copy Project action NOT result in a new project record being created?",
    "options": [
      "When copying an existing project",
      "When copying a new project",
      "When copying sub-projects",
      "When copying partial projects"
    ],
    "correctAnswers": [
      "When copying partial projects"
    ],
    "multipleChoice": false
  },
  {
    "id": 106,
    "text": "When copying a source project to a target project, what fields are copied by default? (Choose three.)",
    "options": [
      "Number.",
      "Duration fields.",
      "Short description.",
      "Planned dates.",
      "State."
    ],
    "correctAnswers": [
      "Duration fields.",
      "Short description.",
      "Planned dates."
    ],
    "multipleChoice": true
  },
  {
    "id": 107,
    "text": "The Project management application supports two types of external dependencies. What are they? (Choose two.)",
    "options": [
      "Hard Dependency.",
      "Milestone Dependency.",
      "Soft Dependency.",
      "Task Dependency.\nE. Change Dependency."
    ],
    "correctAnswers": [
      "Hard Dependency.",
      "Soft Dependency."
    ],
    "multipleChoice": true
  },
  {
    "id": 108,
    "text": "In order to map custom fields from Microsoft Project to ServiceNow when importing a project, you must first:",
    "options": [
      "Configure the Project form",
      "Export the project to XML format",
      "Import your project",
      "Create custom fields in your ServiceNow instance"
    ],
    "correctAnswers": [
      "Create custom fields in your ServiceNow instance"
    ],
    "multipleChoice": false
  },
  {
    "id": 109,
    "text": "What is the formula for Committed Utilization?",
    "options": [
      "Allocated Hours/Capacity",
      "(Allocated Hours + Confirmed Hours)/Capacity",
      "Confirmed Hours/Capacity",
      "Assigned Hours/Capacity"
    ],
    "correctAnswers": [
      "Allocated Hours/Capacity"
    ],
    "multipleChoice": false
  },
  {
    "id": 110,
    "text": "How many days is the default sprint length if the length cannot be calculated from the sprint?",
    "options": [
      "12",
      "14",
      "16",
      "18"
    ],
    "correctAnswers": [
      "14"
    ],
    "multipleChoice": false
  },
  {
    "id": 111,
    "text": "What role is required to view the Details tab of a project in Project Workspace?",
    "options": [
      "it_project_manager",
      "it_project",
      "it_project_user",
      "it_project_workspace_user"
    ],
    "correctAnswers": [
      "it_project_user"
    ],
    "multipleChoice": false
  },
  {
    "id": 112,
    "text": "Risks and issues submitted in which forms will be included in the Program record? (Choose three.)",
    "options": [
      "project",
      "idea",
      "demand",
      "program",
      "portfolio"
    ],
    "correctAnswers": [
      "project",
      "demand",
      "program",
    ],
    "multipleChoice": true
  },
  {
    "id": 113,
    "text": "The Program Management application provides the following capabilities to the program manager (Choose three.)",
    "options": [
      "Create tasks specific to the program.",
      "Track program costs.",
      "Create a program by adding related projects and demands",
      "Create releases for sprints.",
      "Manage ideas specific to the program"
    ],
    "correctAnswers": [
      "Create tasks specific to the program.",
      "Track program costs.",
      "Create a program by adding related projects and demands"
    ],
    "multipleChoice": true
  },
  {
    "id": 114,
    "text": "Which feature provides a central location for portfolio managers to create and track the roadmap for project and demand execution?",
    "options": [
      "Program Workbench",
      "Portfolio Workbench",
      "Project Workspace",
      "Demand Workbench"
    ],
    "correctAnswers": [
      "Portfolio Workbench"
    ],
    "multipleChoice": false
  },
  {
    "id": 115,
    "text": "Why is it recommended to keep the value of the property 'com.snc.project.task.max_task_duration' to 2600 or under?",
    "options": [
      "Best practices states projects should be no longer than 5 years.",
      "The system is unable to handle more than 2600 tasks.",
      "To avoid application memory issues.",
      "Because projects longer than 2600 days will no longer load."
    ],
    "correctAnswers": [
      "To avoid application memory issues."
    ],
    "multipleChoice": false
  },
  {
    "id": 116,
    "text": "Which role can create a project status report in the Project Workspace?",
    "options": [
      "itil",
      "it_demand_manager",
      "it_project_manager",
      "it_project_user"
    ],
    "correctAnswers": [
      "it_project_manager"
    ],
    "multipleChoice": false
  },
  {
    "id": 117,
    "text": "When creating a program, which of the following cannot be part of multiple programs? (Choose two.)",
    "options": [
      "Tasks",
      "Project",
      "Demand",
      "Portfolio"
    ],
    "correctAnswers": [
      "Project",
      "Demand"
    ],
    "multipleChoice": true
  },
  {
    "id": 118,
    "text": "Winch role allows you to allocate a resource?",
    "options": [
      "resource_user",
      "it_project_user",
      "business_stakertolder",
      "resource_manager"
    ],
    "correctAnswers": [
      "resource_manager"
    ],
    "multipleChoice": false
  },
  {
    "id": 119,
    "text": "Why would a program manager create a program? (Choose two.)",
    "options": [
      "To manage related demands",
      "To define the number of sprints",
      "To manage related protects",
      "To manage portfolios"
    ],
    "correctAnswers": [
      "To manage related demands",
      "To manage related protects"
    ],
    "multipleChoice": true
  },
  {
    "id": 120,
    "text": "Which role in Protect Portfolio Management contains both the resource_user and it_demand manager roles?",
    "options": [
      "it_project_manager",
      "scrum_master",
      "itil",
      "timeline_admin"
    ],
    "correctAnswers": [
      "it_project_manager"
    ],
    "multipleChoice": false
  },
  {
    "id": 121,
    "text": "In order to allocate an operational resource plan from the Resource Allocation Workbench, which property must be enabled?",
    "options": [
      "com.snc.project.move_project.wip",
      "com.snc.resource_management.create_and_manage_operational_resource_plans_from_raw",
      "com.snc.resource_management.percentage_allocation_normal",
      "com.snc.resource_management.calendar_show_soft_allocations"
    ],
    "correctAnswers": [
      "com.snc.resource_management.create_and_manage_operational_resource_plans_from_raw"
    ],
    "multipleChoice": false
  },
  {
    "id": 122,
    "text": "The basics of Demand Management include (Choose two.)",
    "options": [
      "Identify stakeholders",
      "Create assessment categories",
      "Evaluate and quality tasks",
      "Create ideas"
    ],
    "correctAnswers": [
      "Identify stakeholders",
      "Create assessment categories"
    ],
    "multipleChoice": true
  },
  {
    "id": 123,
    "text": "At which point in the Demand Management lifecycle do assessments get sent to stakeholders?",
    "options": [
      "Screening",
      "Creation",
      "Planning",
      "Assessment"
    ],
    "correctAnswers": [
      "Screening"
    ],
    "multipleChoice": false
  },
  {
    "id": 124,
    "text": "When working with demands, which field must be set to \u201cYes\u201d in order for a user to receive an assessment?",
    "options": [
      "Approver",
      "Assessment recipient",
      "Influence",
      "Level of Interest"
    ],
    "correctAnswers": [
      "Assessment recipient"
    ],
    "multipleChoice": false
  },
  {
    "id": 125,
    "text": "Where is the normalization process used?",
    "options": [
      "Demand Approval",
      "Assessment scoring",
      "Risk records",
      "Cost Plan updates"
    ],
    "correctAnswers": [
      "Assessment scoring"
    ],
    "multipleChoice": false
  },
  {
    "id": 126,
    "text": "The selections from the Category and Type fields determine the artifact that can be created from a demand. The artifacts can be (Choose three.)",
    "options": [
      "enhancement",
      "defect",
      "change",
      "resource",
      "task"
    ],
    "correctAnswers": [
      "enhancement",
      "defect",
      "change"
    ],
    "multipleChoice": true
  },
  {
    "id": 127,
    "text": "In the default system, when working with demands, what two assessment metrics are supported when taking an assessment survey? (Choose\ntwo.)",
    "options": [
      "Strategic Alignment",
      "Risk",
      "Size",
      "Cost"
    ],
    "correctAnswers": [
      "Strategic Alignment",
      "Risk"
    ],
    "multipleChoice": true
  },
  {
    "id": 128,
    "text": "The colors and quadrant labels used in the central location for viewing and assessing business demands?",
    "options": [
      "Workbench Config - Demand",
      "Demand Roadmap",
      "Demand - Config",
      "System Properties"
    ],
    "correctAnswers": [
      "Workbench Config - Demand"
    ],
    "multipleChoice": false
  },
  {
    "id": 129,
    "text": "Under the Preferences tab on the Demand form, you have the option to (Choose two.)",
    "options": [
      "Add a financial benefit",
      "Close a demand on closure of a project",
      "Close a demand on creation of a project",
      "Add a risk score"
    ],
    "correctAnswers": [
      "Close a demand on closure of a project",
      "Close a demand on creation of a project"
    ],
    "multipleChoice": true
  },
  {
    "id": 130,
    "text": "When a demand is converted to a project, the following fields retain the start and due date (Choose two.)",
    "options": [
      "Approved start date",
      "Actual start date",
      "Approved end date",
      "Actual end date"
    ],
    "correctAnswers": [
      "Approved start date",
      "Approved end date"
    ],
    "multipleChoice": true
  },
  {
    "id": 131,
    "text": "Which roles can add stakeholders to a Portfolio? (Choose two.)",
    "options": [
      "it_project_user",
      "it_demand_manager",
      "it_pps_admin",
      "it_demand_user"
    ],
    "correctAnswers": [
      "it_demand_manager",
      "it_pps_admin"
    ],
    "multipleChoice": true
  },
  {
    "id": 132,
    "text": "When Agile Development 2.0 and Test Management 2.0 plugins are activated, the project manager can create and edit which of the following\nphase types depending on execution type? (Choose two.)",
    "options": [
      "Test",
      "Agile",
      "List",
      "VTB"
    ],
    "correctAnswers": [
      "Test",
      "Agile"
    ],
    "multipleChoice": true
  },
  {
    "id": 133,
    "text": "The combination of the user and the assigned portfolio must be unique when adding a user to which registry?",
    "options": [
      "UX Page Registry",
      "Event Registry",
      "Application Registry",
      "Stakeholder Registry"
    ],
    "correctAnswers": [
      "Stakeholder Registry"
    ],
    "multipleChoice": false
  },
  {
    "id": 134,
    "text": "How can the planned start date on a WIP/Closed task be changed?",
    "options": [
      "By setting the property \u2013 'Enable firing of Business Rules on save from Planning Console'",
      "By setting the property \u2013 'Enable alter of planned date with Actual for Manual Project'",
      "By setting the property \u2013 'Enable altering of planned date(s) for task in WIP/Closed'",
      "By setting the property \u2013 'Enable project cost rollup'"
    ],
    "correctAnswers": [
      "By setting the property \u2013 'Enable altering of planned date(s) for task in WIP/Closed'"
    ],
    "multipleChoice": false
  },
  {
    "id": 135,
    "text": "Project score is calculated based on the individual scores of the following attributes (Choose two.)",
    "options": [
      "Alignment Score",
      "Risk Score",
      "Strategy Score",
      "Value Score"
    ],
    "correctAnswers": [
      "Risk Score",
      "Value Score"
    ],
    "multipleChoice": true
  },
  {
    "id": 136,
    "text": "The Project Management application enables users to create parent-child relationships between tasks and dependencies, such as finish-to-start\nand finish-to-finish, between tasks. How many relationships can exist between two tasks?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswers": [
      "One"
    ],
    "multipleChoice": false
  },
  {
    "id": 137,
    "text": "Which of the following defines a parent-child relationship? (Choose two.)",
    "options": [
      "Parent-child task relationships do not have any effect on task time constraints",
      "A parent-child relationship is not saved as a record in any table",
      "A parent-child task must finish before another begins",
      "Any number of child tasks can be nested under a parent task with or without any dependencies"
    ],
    "correctAnswers": [
      "A parent-child relationship is not saved as a record in any table",
      "Any number of child tasks can be nested under a parent task with or without any dependencies"
    ],
    "multipleChoice": true
  },
  {
    "id": 138,
    "text": "What can a time card admin or a project manager create to define specific activities in a project?",
    "options": [
      "Policies",
      "Time Sheets",
      "Subcategories",
      "Time Cards"
    ],
    "correctAnswers": [
      "Subcategories"
    ],
    "multipleChoice": false
  },
  {
    "id": 139,
    "text": "Who can access a project when it is imported into a teamspace from Microsoft Project into ServiceNow?",
    "options": [
      "Only project users",
      "A project cannot be imported into a teamspace",
      "Only users who can access the teamspace",
      "All users"
    ],
    "correctAnswers": [
      "Only users who can access the teamspace"
    ],
    "multipleChoice": false
  },
  {
    "id": 140,
    "text": "The overall health of a program rolls up from the latest status report of each project in the program. The status is indicated by which colors?\n(Choose three.)",
    "options": [
      "Orange",
      "Yellow",
      "Green",
      "Red"
    ],
    "correctAnswers": [
      "Yellow",
      "Green",
      "Red"
    ],
    "multipleChoice": true
  },
  {
    "id": 141,
    "text": "The PPM Strategic Spend Trading-Generate Strategy/Goal Allocation Breakdowns for Projects and Demands scheduled job is installed, when\nwhich of the following is activated?",
    "options": [
      "Predictive Intelligence for Innovation Management",
      "PPM Standard",
      "Strategic Spend Tracking for PPM",
      "Scenario Planning for PPM"
    ],
    "correctAnswers": [
      "Strategic Spend Tracking for PPM"
    ],
    "multipleChoice": false
  },
  {
    "id": 142,
    "text": "Each teamspace has its own (Choose two.)",
    "options": [
      "Project table",
      "Resource table",
      "Demand table",
      "Problem table"
    ],
    "correctAnswers": [
      "Project table",
      "Demand table"
    ],
    "multipleChoice": true
  },
  {
    "id": 143,
    "text": "During the allocation process, when named resources are allocated to a plan, where is resource cost derived from?",
    "options": [
      "Labor rate card for the user",
      "Labor rate card for the fiscal period",
      "Cost specified on the resource allocation",
      "Cost specified on user record"
    ],
    "correctAnswers": [
      "Labor rate card for the user"
    ],
    "multipleChoice": false
  },
  {
    "id": 144,
    "text": "What is the formula for Forecasted Utilization?",
    "options": [
      "Allocated Hours/Capacity",
      "(Allocated Hours + Confirmed Hours)/Capacity",
      "Confirmed Hours/Capacity",
      "Assigned Hours/Capacity"
    ],
    "correctAnswers": [
      "(Allocated Hours + Confirmed Hours)/Capacity"
    ],
    "multipleChoice": false
  },
  {
    "id": 145,
    "text": "What are the allocation types available on a resource plan? (Choose three.)",
    "options": [
      "Weekly",
      "Yearly",
      "Monthly",
      "Plan Duration",
      "Daily"
    ],
    "correctAnswers": [
      "Weekly",
      "Monthly",
      "Plan Duration",
    ],
    "multipleChoice": true
  },
  {
    "id": 146,
    "text": "Resource plan costs are divided into (Choose three.)",
    "options": [
      "Planned Cost",
      "Forecast Cost",
      "Allocated Cost",
      "Expense Cost",
      "Actual Cost"
    ],
    "correctAnswers": [
      "Planned Cost",
      "Allocated Cost"
    ],
    "multipleChoice": true
  },
  {
    "id": 147,
    "text": "On a resource plan, when the attribute for \"Derive assignee list from resource plan\" is set to true, in what state must the plan be to allow a\nresource to be added to the assignee field?",
    "options": [
      "Confirmed",
      "Requested",
      "Allocated",
      "Planning"
    ],
    "correctAnswers": [
      "Allocated"
    ],
    "multipleChoice": false
  },
  {
    "id": 148,
    "text": "When a user's schedule changes, what action needs to be taken to update their existing data?",
    "options": [
      "No action needed",
      "Update project plans",
      "Update calendar manually to reflect the changed capacity",
      "Update capacity via 'Update Resource Capacity'"
    ],
    "correctAnswers": [
      "Update capacity via 'Update Resource Capacity'"
    ],
    "multipleChoice": false
  },
  {
    "id": 149,
    "text": "If a resource plan is not associated manually to a time card, then a resource plan is auto-associated. The auto-association is done based on which\nof the following in the time card?",
    "options": [
      "task",
      "hard allocation",
      "soft allocation",
      "resource type"
    ],
    "correctAnswers": [
      "task"
    ],
    "multipleChoice": false
  },
  {
    "id": 150,
    "text": "Actuals on a resource plan are updated by what activity?",
    "options": [
      "User submits time card",
      "Project manager enters actuals",
      "Resource plan is approved",
      "Time card is approved"
    ],
    "correctAnswers": [
      "Time card is approved"
    ],
    "multipleChoice": false
  },
  {
    "id": 151,
    "text": "What must a resource plan contain if a resource plan is associated with a time card?",
    "options": [
      "Soft allocation bookings.",
      "Front load allocation spread.",
      "Hard allocation bookings.",
      "Even allocation spread."
    ],
    "correctAnswers": [
      "Hard allocation bookings."
    ],
    "multipleChoice": false
  },
  {
    "id": 152,
    "text": "What are the offset types in Benefit Plans?",
    "options": [
      "Rate Card",
      "Start Date and End Date",
      "Risk",
      "Cost"
    ],
    "correctAnswers": [
      "Start Date and End Date"
    ],
    "multipleChoice": false
  },
  {
    "id": 153,
    "text": "Which field, referenced from the cost plan, determines if a cost plan is Capex or Opex?",
    "options": [
      "Resource category (resource_category)",
      "Currency type (currency_type)",
      "Cost type (resource_type)",
      "Resource plan (resource_plan)"
    ],
    "correctAnswers": [
      "Cost type (resource_type)"
    ],
    "multipleChoice": false
  },
  {
    "id": 154,
    "text": "You can forecast future costs of projects based on (Choose two.)",
    "options": [
      "Actual cost incurred",
      "Changes in project such as project requirements",
      "Incident cost",
      "Paired instances"
    ],
    "correctAnswers": [
      "Actual cost incurred",
      "Changes in project such as project requirements"
    ],
    "multipleChoice": true
  },
  {
    "id": 155,
    "text": "To integrate Investment Funding with PPM, what plugin must be activated?",
    "options": [
      "Investment Funding for PPM [com.snc.investment_planning_pmo]",
      "Investment Funding [com.snc.investment_planning]",
      "Financial Planning [com.snc.financial_planning]",
      "Rate Model [com.snc.rate_model]"
    ],
    "correctAnswers": [
      "Investment Funding for PPM [com.snc.investment_planning_pmo]"
    ],
    "multipleChoice": false
  },
  {
    "id": 156,
    "text": "A customer needs to know what activity type is associated to time entries in the project so that they can capitalize build tasks. What is the best\nmethod to do this?",
    "options": [
      "Leverage project time categories to classify the time.",
      "Create a capital protect task flag.",
      "Put all capital project tasks in one phase and report from those tasks.",
      "Create an incident."
    ],
    "correctAnswers": [
      "Leverage project time categories to classify the time."
    ],
    "multipleChoice": false
  },
  {
    "id": 157,
    "text": "Which of the following is the default schedule for the Project Management application?",
    "options": [
      "Repeats every week on weekdays Monday through Friday from 8:00am to noon and 1:00-5:00pm",
      "Repeats every week on weekdays Monday through Friday",
      "Repeats every week on weekdays Monday through Friday. Includes the child schedule U.S. Holidays",
      "Repeats every week on weekdays Monday through Friday from 9:00am to 5:00pm"
    ],
    "correctAnswers": [
      "Repeats every week on weekdays Monday through Friday from 8:00am to noon and 1:00-5:00pm"
    ],
    "multipleChoice": false
  },
  {
    "id": 158,
    "text": "Demand managers can enhance a demand request by adding the following: (Choose three.)",
    "options": [
      "Requirements",
      "Tasks",
      "Expense lines",
      "Decisions",
      "Stakeholders"
    ],
    "correctAnswers": [
      "Requirements",
      "Tasks",
      "Stakeholders"
    ],
    "multipleChoice": true
  },
  {
    "id": 159,
    "text": "To provide more meaningful information to senior management, you can view the FTE value under which of the following reports?",
    "options": [
      "Resource Aggregate Reports",
      "Functional Currency",
      "Allocation Details",
      "Committed Utilization"
    ],
    "correctAnswers": [
      "Allocation Details"
    ],
    "multipleChoice": false
  },
  {
    "id": 160,
    "text": "Which option should be used if you want to select the resource rate on the resource plan?",
    "options": [
      "Rate override",
      "Labor rate card",
      "Rate model",
      "Planned cost"
    ],
    "correctAnswers": [
      "Rate override"
    ],
    "multipleChoice": false
  },
  {
    "id": 161,
    "text": "Which of the following tasks can be performed when innovation Management is integrated with Universal Request? (Choose two.)",
    "options": [
      "Transfer an idea to another department",
      "Create a project from a universal request",
      "Send a universal request to a demand manager for review",
      "Create an idea from a universal request"
    ],
    "correctAnswers": [
      "Transfer an idea to another department",
      "Create an idea from a universal request"
    ],
    "multipleChoice": true
  },
  {
    "id": 162,
    "text": "The RIDAC workflow can be modified by using which recommended feature?",
    "options": [
      "Service Catalog",
      "Project Form",
      "Flow Designer",
      "Workflow Editor"
    ],
    "correctAnswers": [
      "Flow Designer"
    ],
    "multipleChoice": false
  },
  {
    "id": 163,
    "text": "A project status report can be viewed from which of the following areas? (Choose four.)",
    "options": [
      "Program record",
      "Project workspace",
      "Project status form",
      "Planning console",
      "Project record",
      "Portfolio workbench"
    ],
    "correctAnswers": [
      "Project workspace",
      "Project status form"
    ],
    "multipleChoice": true
  },
  {
    "id": 164,
    "text": "Which role is required to define custom schedules?",
    "options": [
      "resource_manager",
      "pps_resource",
      "system admin",
      "resource_user"
    ],
    "correctAnswers": [
      "system admin"
    ],
    "multipleChoice": false
  },
  {
    "id": 165,
    "text": "As an administrator, what can you use to customize the PPM Mobile application?",
    "options": [
      "Mobile Studio",
      "Now Platform App Engine",
      "Now Mobile App",
      "Service Catalog"
    ],
    "correctAnswers": [
      "Mobile Studio"
    ],
    "multipleChoice": false
  },
  {
    "id": 166,
    "text": "What are the three default project template configuration records available in the Template Config module? (Choose three.)",
    "options": [
      "Project subtask",
      "Project task",
      "Portfolio task",
      "Project",
      "Program task",
      "Task",
      "Project template"
    ],
    "correctAnswers": [
      "Project subtask",
      "Project task",
      "Project"
    ],
    "multipleChoice": true
  },
  {
    "id": 167,
    "text": "If a sub-project and parent project have different project currencies, this property should be set to true for cost roll-ups.",
    "options": [
      "com.snc.project.multicurrency.rollup_if_different",
      "com.snc.project.rollup_project_start_date",
      "com.snc.project.copy.additional_attributes",
      "com.snc.project.calculate.roi"
    ],
    "correctAnswers": [
      "com.snc.project.multicurrency.rollup_if_different"
    ],
    "multipleChoice": false
  },
  {
    "id": 168,
    "text": "Can an it_project_manager convert a task to a milestone?",
    "options": [
      "Yes, if the task is assigned to the project manager.",
      "Yes, by right-clicking on the task in the Planning Console.",
      "No, the PPS admin role is also required.",
      "No, this can only be done by a system admin."
    ],
    "correctAnswers": [
      "Yes, by right-clicking on the task in the Planning Console."
    ],
    "multipleChoice": false
  },
  {
    "id": 169,
    "text": "Transition, Mobilize, Prepare and Conduct are included in which stage of the Now Create methodology?",
    "options": [
      "Transition",
      "Close",
      "Initiate",
      "Prepare"
    ],
    "correctAnswers": [
      "Prepare"
    ],
    "multipleChoice": false
  }
  ];
  // Add more questions as needed
 
export default questions;
