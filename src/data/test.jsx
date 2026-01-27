const TEST = [
    {
        id: 1,
        text: "What is the primary table for Incidents?",
        options: ["incident", "task", "sys_user", "cmdb_ci"],
        correctAnswers: ["incident"],
        multipleChoice: false
    },
    {
        id: 2,
        text: "Which of the following are valid field types in ServiceNow? (Select 3)",
        options: ["String", "Integer", "Boolean", "Flux Capacitor"],
        correctAnswers: ["String", "Integer", "Boolean"],
        multipleChoice: true
    },
    {
        id: 3,
        text: "True or False: Business Rules run on the client side.",
        options: ["True", "False"],
        correctAnswers: ["False"],
        multipleChoice: false
    },
    {
        id: 4,
        text: "What is the parent table for Incident, Problem, and Change?",
        options: ["cmdb_ci", "sys_user", "task", "core_company"],
        correctAnswers: ["task"],
        multipleChoice: false
    },
    {
        id: 5,
        text: "Which module is used to create new users?",
        options: ["Users", "Groups", "Roles", "ACLs"],
        correctAnswers: ["Users"],
        multipleChoice: false
    }
];

export default TEST;
