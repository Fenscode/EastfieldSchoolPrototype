(function(window, undefined) {
  var dictionary = {
    "aedc4fea-c69f-4ee0-be0f-82f6b898c109": "Subjects",
    "e405fedd-7575-4c14-8101-27e95d885168": "Teacher_Registration",
    "cc8657b7-dc67-47e9-a666-d6084eec2375": "Event-TimeTable2-Teacher",
    "044c4743-dd1d-48af-8b38-561827dd56de": "Video Streaming",
    "24de9b87-d985-40bb-a710-0ac329d0726f": "Login",
    "bd0a651b-6331-4daa-b981-9c6bd220cd8d": "Student_Registration",
    "c6153d36-3aa3-4231-8ce3-a21bf604e004": "Assignment",
    "fe24c5ba-54bf-4685-99ea-a0e1e50f7acb": "Assignment-Subject",
    "358c3cdd-5e4b-423f-b5d5-2cb6064d24f0": "Parents-Students-Chat",
    "54ca2b7b-a5ec-473d-8c32-fb64d26a242a": "Chat",
    "d16fb7c4-1cdc-4ac8-a8a5-68e7e3c89c9d": "Study Materials",
    "1a00ea6e-81b2-4a51-acd8-f9fb760d2825": "Subject_Desc",
    "a83f56ce-8e52-4b6b-86a5-dc59dbbe9f5a": "Quiz",
    "b8f28b0f-4963-477b-86e8-cd16221c7398": "Chat_Msg",
    "fc48c72b-6a02-4d90-aa4b-f2c310b2ca26": "Course Selection",
    "45494372-1da3-4b71-9e1a-8732b0a34056": "Parent_Main Screen",
    "d9245ac7-d63e-4452-a66d-72e661018874": "User Type Selection",
    "4a88ae89-c0ee-48ed-833c-e06fb17a6204": "Event-TimeTable2",
    "3bb85455-c016-47b3-b5b6-b1d9c64c4372": "Event-TimeTable-Teacher",
    "1de86006-cddb-4ea1-8bd3-cdcbcade628c": "Event-TimeTable_3",
    "003e4683-a7dc-4105-816e-45bd0010e350": "Teachers-Chat",
    "a5d67e6b-1b0d-4a14-a134-171e5b155410": "Parent_Registration",
    "f7a2f4ea-64b6-4084-bf2d-2cef9bfb2e0a": "Marks",
    "49b72cfa-8504-4a6b-ac3b-a4aa7b585604": "Parent_New_Main Screen",
    "494c0514-7701-47ab-be06-f3c1730f4e43": "Class_List",
    "06837aa9-16ab-40e6-8116-e02eb039e84d": "Event-TimeTable",
    "37e70432-00fb-404b-9639-5ef12ed20321": "Teacher_Main Screen",
    "5e6527c7-e5ad-41e5-9c2a-90fe4814525c": "Student_Profile",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash",
    "cb9cbd55-c2e1-41a7-b92e-7e00baff1dd7": "Student_Main Screen",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);