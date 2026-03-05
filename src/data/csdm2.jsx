const CSDM2 = [

{
  id: 1,
  text: "Which of the following statements is true for the Form Designer? a) To add a field to the form layout, drag the field from the Fields tab to the desired destination on the form. b) To create a new field on a form's table, drag the appropriate data type from the Field Types tab to the form and then configure the new field. c) To remove a field from the form layout, hover over the field to enable the Action buttons, and select the Delete (X) button. d) To add a section to the form layout, drag it from the Field Types tab to the desired destination on the form.",
  options: [
    "a, b, c, and d",
    "b, c, and d",
    "a, b, and d",
    "a, b, and c"
  ],
  correctAnswers: ["a, b, and c"],
  multipleChoice: false
},
{
  id: 2,
  text: "Which of the following are configured in an Email Notification? a) Who will receive the notification. b) What content will be in the notification. c) When to send the notification. d) How to send the notification.",
  options: [
    "a, b and c",
    "a, b, and d",
    "b, c and d",
    "a, c and d"
  ],
  correctAnswers: ["a, b and c"],
  multipleChoice: false
},
{
  id: 3,
  text: "To see what scripts, reports, and other application artifacts will be in a published application:",
  options: [
    "Enter the name of the Application in the Global search field",
    "Open the list of Update Sets for the instance",
    "Examine the Application Files Related List in the application to be published",
    "Open the artifact records individually to verify the value in the Application field"
  ],
  correctAnswers: ["Examine the Application Files Related List in the application to be published"],
  multipleChoice: false
},
   {
    "id": 4,
    "text": "Which one of the following is NOT a debugging strategy for client-side scripts?",
    "options": [
      "g_form.addInfoMessage()",
      "Field Watcher",
      "jslog()",
      "gs.log()"
    ],
    "correctAnswers": ["gs.log()"],
    "multipleChoice": false
  },
  {
    "id": 5,
    "text": "Which Application Access configuration field(s) are NOT available if the Can read configuration field is NOT selected?",
    "options": [
      "All access to this table via web services",
      "Can create, Can update, and Can delete",
      "Can read does not affect the availability of other Application Access fields",
      "Allow configuration"
    ],
    "correctAnswers": ["Can create, Can update, and Can delete"],
    "multipleChoice": false
  },
  {
    "id": 6,
    "text": "Which of the following is NOT a trigger type in Flow Designer?",
    "options": [
      "Outbound Email",
      "Application",
      "Record",
      "Schedule"
    ],
    "correctAnswers": ["Outbound Email"],
    "multipleChoice": false
  },
  {
    "id": 7,
    "text": "When creating new application files in a scoped application, cross scope access is turned on by default in which of the following?",
    "options": [
      "REST messages",
      "Table",
      "Script Include",
      "Workflow"
    ],
    "correctAnswers": ["Table"],
    "multipleChoice": false
  }   
];

    export default CSDM2;
