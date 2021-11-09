import React from "react";
import "./styles.css";
import RJSForm from "@rjsf/material-ui";
import BS4Form from "@rjsf/bootstrap-4";
import MyFieldTemplate from "./my-field-template";
import ArrayFieldTemplate from "./array-field-template";
import ArrayNoPaperFieldTemplate from "./array-no-paper-template";

export default function App() {
  var schema = {
    type: "object",
    properties: {
      ArrayWithCustomWidget: {
        type: "array",
        items: {
          type: "string"
        }
      },
      Array: {
        type: "array",
        items: {
          type: "string"
        }
      }
    }
  };

  var uiSchema = {
    ArrayWithCustomWidget: {
      items: {
        "ui:field": "MyLabel"
      }
    }
  };

  return (
    <div className="App">
      <div className="form-wrap">
        <h3>Without Fix</h3>
        <div>Buttons wrap and are very big</div>
        <RJSForm
          schema={schema}
          uiSchema={uiSchema}
          fields={{ MyLabel: MyFieldTemplate }}
        >
          {/* Disable the form built-in buttons */}
          <div />
        </RJSForm>
      </div>
    </div>
  );
}
