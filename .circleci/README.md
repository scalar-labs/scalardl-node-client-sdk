## Setting up CircleCI for Scalar DL Node/Web client SDK

### Environment Variables

Set environment variables on CircleCi by following [this guide](https://circleci.com/blog/new-on-circleci-import-project-environment-variables/).
Please set environment variables in CircleCi as follows.

Set the environment variables in the [Context](https://circleci.com/gh/organizations/scalar-labs/settings#contexts) with the name `scalar`.
<pre>
    <b>$GHCR_USERNAME</b>
    <b>$GHCR_PAT</b>
</pre>

[Here](https://github.com/scalarindetail/scalardl-node-client-sdk/blob/feature/integration_test/.circleci/config.yml) is the configuration file.