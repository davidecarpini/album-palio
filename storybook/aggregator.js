import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Center from "templates/Center";

// atoms
import Button from "atoms/Button/story.js";
import Input from "atoms/Input/story.js";

// cells
import Form from "cells/Form/story.js";

// templates
import Grid from "templates/Grid/story.js";

//screens
import Login from "screens/Login/story.js";

const list = [Button, Input, Form, Grid, Login];

export default list.map(({ id, props, Component, path, desc, auto }) => {
  return storiesOf(path, module)
    .addDecorator(getStory => getStory())
    .add(id, () => (auto ? <Component {...props} /> : Component));
});
