import React from "react";
import "./styles.css";
import RJSForm from "@rjsf/material-ui";
import BS4Form from "@rjsf/bootstrap-4";
import MyFieldTemplate from "./my-field-template";
import ArrayFieldTemplate from "./array-field-template";
import ArrayNoPaperFieldTemplate from "./array-no-paper-template";
import axios from "axios";
import PageIndicator from "../PageIndicator/PageIndicator";
import Navbar from "../Navbar/Navbar"
export default function App() {
  var formData = {};

  var schema = {
    "definitions": {
      "Thing": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "default": "Default name"
          }
        }
      }
    },
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "title":"Name"
      },
      "start_time": {
        "type": "string",
        "format":"date",
        "title":"Start Time"
      },
      "end_time": {
        "type": "string",
        "format":"date",
        "title":"End Time"
      },
      "Score": {
        "type": "integer",
        
        "title":"Score"
      },
      "no_of_questions": {
        "type": "integer",
        "title":"Number of Questions"
      },
      "duration": {
        "type": "integer",
        "title":"Duration"
      },
      "course_id": {
        "type": "string",
        "title":"Course ID"
      },
      "Class_id": {
        "type": "string",
        "title":"Class ID"
      },
      "Topic": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
              
              "questions": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "sno": {
                        "type": "integer"
                      },
                      "question": {
                        "type": "string"
                      },
                      "type": {
                        "type": "string"
                      },
                      "time": {
                        "type": "integer"
                      },
                      "if_correct": {
                        "type": "integer"
                      },
                      "if_incorrect": {
                        "type": "integer"
                      },
                      "answer": {
                        "type": "string"
                      },
                      "option": {
                        "type": "array",
                        "items": [
                          {
                            "type": "object",
                            "properties": {
                              "option1": {
                                "type": "string"
                              },
                              "isCorrect": {
                                "type": "boolean"
                              }
                            }
                            
                          },
                          {
                            "type": "object",
                            "properties": {
                              "option2": {
                                "type": "string"
                              },
                              "isCorrect": {
                                "type": "boolean"
                              }
                            }
                            
                          },
                          {
                            "type": "object",
                            "properties": {
                              "option3": {
                                "type": "string"
                              },
                              "isCorrect": {
                                "type": "boolean"
                              }
                            }
                            
                          },
                          {
                            "type": "object",
                            "properties": {
                              "option4": {
                                "type": "string"
                              },
                              "isCorrect": {
                                "type": "boolean"
                              }
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            }
        }
      
  }}};

  var uiSchema = {
    "Topic": {
      "items": {
        "ui:emptyValue": ""
      }
    }
  };
  const handleSubmit=(formData)=>{
    console.log(formData.formData);
    axios.post('http://localhost:4000/questionupload', formData.formData)
    .then(response => console.log(response.data))
  }
  return (
    <div className="App">
      <Navbar/>
          <div className = "Status">
            <h1 className = "StatusText">Upload Test</h1>
          </div>
      <div className="form-wrap">
        <RJSForm
        className="formdataupload"
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onSubmit={handleSubmit}
          fields={{ MyLabel: MyFieldTemplate }}
        >
          
          
        </RJSForm>
      </div>
      
    </div>
  );
}
