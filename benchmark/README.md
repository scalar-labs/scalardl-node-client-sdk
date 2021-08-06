Smallbank is a simple application used for benchmark.

## Requirement
Before running smallbank, we need a Scalar DL network and configure correctly in `client.properties.json`.
The default `client.properties.json` file points to a local Scalar DL network.

## Step

### Install dependencies
```
npm install
```

### Register certificate and constracts
```
./create_contracts_smallbank
```

### Create accounts
```
./smallbank-loader --num-accounts <number of accounts to create> --num-concurrencies <number of concurrencies to run>
```

### Run benchmark
```
./smallbank-bench --num-accounts <number of accounts as the target> --num-concurrencies <number of concurrencies to run> --duration <duration, in seconds>
```

```
./smallbank-bench -h
```

For more details.
