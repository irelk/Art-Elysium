(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splash Screen",
    "e296fa03-fbeb-464f-ab0d-d1055902c003": "Sign Up",
    "79fa7dde-960f-4f16-90ae-4f668c8b2821": "Sign Up Confirm",
    "c15c6e7e-d331-4036-adca-acc3f279172f": "Main Screen",
    "2d5b59f4-4457-4a71-9550-c72848de6c6c": "Info Screen",
    "d7516728-67a9-4a1f-9cfe-584cbbec4090": "Discover",
    "bda30b86-0a7e-41e0-a9fe-abe300d223b2": "Forum",
    "6ebd8df2-2e45-4c65-8471-c581d6dc3665": "Login",
    "5fdf928d-5d68-4b59-aa74-792cb0117bc3": "Main Screen Nav",
    "b2a7e749-9a7b-4951-b8ce-104363b413a6": "Main Screen User",
    "52833637-c424-4044-b2d2-e09a3deac949": "Profile Screen",
    "240460bc-4dd2-4993-9c37-649930ad1016": "Carousel",
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