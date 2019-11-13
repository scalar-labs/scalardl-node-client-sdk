## CircleCI Project Maintenance Guideline

### 1. Environment Variables

Set environment variable on CircleCi by following [this guide](https://circleci.com/blog/new-on-circleci-import-project-environment-variables/).
Then you can use it like so :-

**$ENV_VAR**  - Represents the CircleCI environment variable

In your CircleCI configuration files.
<pre>
    - image: scalarlabs/scalar-ledger:1.3.1
     auth:
       username: <b>$DOCKERHUB_USERNAME</b>
       password: <b>$DOCKERHUB_PASSWORD</b>
</pre>

We can also use it to store the content of a certain configuration file as well.

The content of the secret files will be stored as a CircleCI environment variable, multiline configuration content will have to be parsed into a single string. For example:
```
{
      "name": "@scalar-labs/ist-web-client-sdk",
      "description": "Web SDK for Information Banking Solution Template",
      "author": "Scalar, Inc.",
      "dependencies": {
        "axios": "0.19.0",
      }
}
```

The raw content above has to be formatted as :-
```
{\n      \"name\": \"@scalar-labs/ist-web-client-sdk\",\n      \"description\": \"Web SDK for Information Banking Solution Template\",\n      \"author\": \"Scalar, Inc.\",\n      \"dependencies\": {\n        \"axios\": \"0.19.0\",\n      }\n}
```

**Beware**: If environment variable is favoured when for keeping the schema file, then we would need to update the environment variable to reflect the latest schema file. But keep in mind that, it always depends on the command input required format.
