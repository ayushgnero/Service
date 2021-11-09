import React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const MyFieldTemplate = (props) => {
  var style = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  };

  return <div style={style}>{props.formData}</div>;
};

export default MyFieldTemplate;
