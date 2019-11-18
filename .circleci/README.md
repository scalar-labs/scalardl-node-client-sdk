## CircleCI Project Maintenance Guideline

### 1. Environment Variables

Set environment variables on CircleCi by following [this guide](https://circleci.com/blog/new-on-circleci-import-project-environment-variables/).
The CircleCi environment variables used in this project are:

In the [Context](https://circleci.com/gh/organizations/scalar-labs/settings#contexts). Current context name is `scalar`.
<pre>
    <b>$DOCKERHUB_USERNAME</b>
    <b>$DOCKERHUB_PASSWORD</b>
</pre>
In the [Environment Variables](https://circleci.com/blog/new-on-circleci-import-project-environment-variables/)
<pre>
    <b>$SCHEMA_CONTENT</b>
</pre>

### 2. Trigger CircleCi integration test
To trigger the integration test on CircleCi, name your branch in accordance with the following regex :
<pre>
    <b>/feature\/.*/</b>
</pre>

[Here](https://github.com/scalarindetail/scalardl-node-client-sdk/blob/feature/integration_test/.circleci/config.yml) is the configuration file.
