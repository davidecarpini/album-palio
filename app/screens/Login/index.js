import PropTypes from "prop-types";
import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Input from "atoms/Input";
import Button from "atoms/Button";
import { observer, inject } from "mobx-react/native";
import Form from "cells/Form";
import { printErrorGraphql } from "utility";
import withLoader from "withLoader";
import { graphql, Mutation } from "react-apollo";
import gql from "graphql-tag";

import language from "language";

const LOGIN = gql`
  mutation login($phone: String!, $password: String!) {
    login(phone: $phone, password: $passwordd) {
      token
      display_name
      first_name
      last_name
      phone
    }
  }
`;

@inject("user")
@observer
class Login extends React.Component {
  render() {
    return (
      <Mutation
        mutation={LOGIN}
        onCompleted={response => {
          if (
            response.login.token &&
            response.login.display_name &&
            response.login.first_name &&
            response.login.last_name &&
            response.login.phone &&
            this.props.user
          ) {
            this.props.user.setToken(response.login.token);
            this.props.user.setDisplayName(response.login.display_name);
            this.props.user.setFirstName(response.login.first_name);
            this.props.user.setLastName(response.login.last_name);
            this.props.user.setPhone(response.login.phone);
          } else {
            alert("Attenzione, c'è stato un errore durante la login");
          }
        }}
        onError={response => {
          printErrorGraphql(response);
        }}
      >
        {login => (
          <Form format={"fields"}>
            <Input
              key={"phone"}
              leftIcon={{ type: "font-awesome", name: "user" }}
              role={"input"}
              hint={language.get("phone")}
            />
            <Input
              key={"password"}
              leftIcon={{ type: "font-awesome", name: "lock" }}
              role={"input"}
              hint={"Password"}
            />
            <Button
              key={"submit"}
              role={"submit"}
              title={"Login"}
              onSubmit={form => {
                const { phone, password } = form;
                login({
                  variables: { phone, password }
                });
              }}
            />
          </Form>
        )}
      </Mutation>
    );
  }
}

Login.propTypes = {};

export default graphql(
  gql`
    query Login {
      viewer {
        user {
          id
          firstName
          lastName
        }
      }
    }
  `
)(withLoader(Login));
