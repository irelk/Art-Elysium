jQuery("#simulation")
  .on("click", ".s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#4B96EC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#4B96EC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#4B96EC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#4B96EC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#4B96EC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-raised_Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#2274E1",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_5": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#2274E1",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#4B96EC",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_5": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-bda30b86-0a7e-41e0-a9fe-abe300d223b2 #s-raised_Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#4B96EC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b2a7e749-9a7b-4951-b8ce-104363b413a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Toolbar-Title")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b2a7e749-9a7b-4951-b8ce-104363b413a6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });