## Setting up CircleCI for Scalar DL Node/Web client SDK

### 1.0. Environment Variables

Set environment variables on CircleCi by following [this guide](https://circleci.com/blog/new-on-circleci-import-project-environment-variables/).
Please set environment variables in CircleCi as follows.

1.1 Set the environment variables in the [Context](https://circleci.com/gh/organizations/scalar-labs/settings#contexts) with the name `scalar`.
<pre>
    <b>$DOCKERHUB_USERNAME</b>
    <b>$DOCKERHUB_PASSWORD</b>
</pre>
Make sure your DockerHub account has been added by Scalar so that you have the permission to pull scalar-dl image.

1.2 Set the [Environment Variables](https://circleci.com/blog/new-on-circleci-import-project-environment-variables/) in the project. Click `Add Variable` instead of `Import Variable(s)`.
<pre>
    <b>$SCHEMA_CONTENT</b>
</pre>
[SCHEMA_CONTENT](https://github.com/scalar-labs/scalardl-node-client-sdk/blob/e119dd687c1c0ed5ee3a3b3d8a945aea70176011/.circleci/config.yml#L55) will be the schema commands that will be executed by `cqlsh`. Here is a [sample schema](https://github.com/pmcfadin/killrvideo-sample-schema/blob/master/killrvideo-schema.cql). Make sure the content of `$SCHEMA_CONTENT` has the following criteria :

- [Comment](https://docs.datastax.com/en/dse/6.0/cql/cql/examples/comments-table.html) free.
- Contains no newline, it can be obtained by using `cat sample_schema.cql  |  tr -d '\n'`

### 2. Trigger integration test
To trigger the integration test on CircleCi, name your branch in accordance with the following regex :
<pre>
    <b>/feature\/.*/</b>
</pre>

[Here](https://github.com/scalarindetail/scalardl-node-client-sdk/blob/feature/integration_test/.circleci/config.yml) is the configuration file.
