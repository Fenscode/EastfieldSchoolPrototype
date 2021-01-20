jQuery("#simulation")
  .on("click", ".s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cb9cbd55-c2e1-41a7-b92e-7e00baff1dd7",
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_14 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_13 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a83f56ce-8e52-4b6b-86a5-dc59dbbe9f5a",
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
  .on("pageload", ".s-1a00ea6e-81b2-4a51-acd8-f9fb760d2825 .pageload", function(event, data) {
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
    } else if(jFirer.is("#s-Line_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 1000,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_2" ],
                    "effect": {
                      "type": "fade",
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
    }
  });