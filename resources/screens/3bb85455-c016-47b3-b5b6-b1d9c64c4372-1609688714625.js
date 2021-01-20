jQuery("#simulation")
  .on("click", ".s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc8657b7-dc67-47e9-a666-d6084eec2375"
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1a00ea6e-81b2-4a51-acd8-f9fb760d2825",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_8 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bd0a651b-6331-4daa-b981-9c6bd220cd8d",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1a00ea6e-81b2-4a51-acd8-f9fb760d2825",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_9 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bd0a651b-6331-4daa-b981-9c6bd220cd8d",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
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
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/358c3cdd-5e4b-423f-b5d5-2cb6064d24f0",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
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
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/37e70432-00fb-404b-9639-5ef12ed20321",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
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
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1a00ea6e-81b2-4a51-acd8-f9fb760d2825",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
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
  })
  .on("click", ".s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_8")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_8": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_8 span": {
                        "attributes": {
                          "color": "#673FB4"
                        }
                      }
                    } ],
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Rectangle_9")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_9": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 #s-Rectangle_9 span": {
                        "attributes": {
                          "color": "#673FB4"
                        }
                      }
                    } ],
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
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-3bb85455-c016-47b3-b5b6-b1d9c64c4372 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_1" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
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