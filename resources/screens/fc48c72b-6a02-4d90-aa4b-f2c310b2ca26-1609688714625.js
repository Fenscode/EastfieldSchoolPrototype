jQuery("#simulation")
  .on("click", ".s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/24de9b87-d985-40bb-a710-0ac329d0726f",
                    "transition": {
                      "type": "slideright",
                      "duration": 500
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
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_1 span": {
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
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_2 span": {
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_3 span": {
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
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_4 span": {
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_5 span": {
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
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_6 span": {
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
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_7": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_7 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_7 span": {
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_8": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_8 span": {
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
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_9": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_9 span": {
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
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_10 span": {
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
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_11 span": {
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
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_12 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_12 span": {
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
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_13 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_13 span": {
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
    } else if(jFirer.is("#s-Rectangle_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_14 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_14 span": {
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
    } else if(jFirer.is("#s-Rectangle_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_15 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#673FB4"
                      }
                    }
                  },{
                    "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_15 span": {
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
    }
  })
  .on("click", ".s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_1")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_1": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_1 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_1 span": {
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
    } else if(jFirer.is("#s-Rectangle_2")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_2": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_2 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_2 span": {
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
    } else if(jFirer.is("#s-Rectangle_3")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_3": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_3 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_3 span": {
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
    } else if(jFirer.is("#s-Rectangle_4")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_4": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_4 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_4 span": {
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
    } else if(jFirer.is("#s-Rectangle_5")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_5": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_5 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_5 span": {
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
    } else if(jFirer.is("#s-Rectangle_6")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_6": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_6 span": {
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
    } else if(jFirer.is("#s-Rectangle_7")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_7": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_7 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_7 span": {
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
    } else if(jFirer.is("#s-Rectangle_8")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_8": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_8 span": {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_9": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_9 span": {
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
    } else if(jFirer.is("#s-Rectangle_10")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_10": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_10 span": {
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
    } else if(jFirer.is("#s-Rectangle_11")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_11": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_11 span": {
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
    } else if(jFirer.is("#s-Rectangle_12")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_12": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_12 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_12 span": {
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
    } else if(jFirer.is("#s-Rectangle_13")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_13": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_13 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_13 span": {
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
    } else if(jFirer.is("#s-Rectangle_14")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_14": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_14 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_14 span": {
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
    } else if(jFirer.is("#s-Rectangle_15")) {
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
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_15": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_15 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#FFFFFF"
                        }
                      }
                    },{
                      "#s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 #s-Rectangle_15 span": {
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
  .on("pageload", ".s-fc48c72b-6a02-4d90-aa4b-f2c310b2ca26 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_4" ],
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