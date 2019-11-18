package com.org1.function;

import com.scalar.ledger.database.MutableDatabase;
import com.scalar.ledger.exception.ContractContextException;
import com.scalar.ledger.udf.Function;
import java.util.Optional;
import javax.json.Json;
import javax.json.JsonObject;

public class TestFunction extends Function {

  @Override
  public void invoke(MutableDatabase database, JsonObject contractArgument,
      Optional<JsonObject> functionArgument) {

    if (!functionArgument.isPresent()) {
      throw new ContractContextException("please set a function argument");
    }

    String assetId = contractArgument.getString("asset_id");
    String foo = functionArgument.get().getString("foo");
    int state = contractArgument.getInt("state");

    JsonObject jsonObject = Json.createObjectBuilder().add("asset_id", assetId).add("state", state)
        .add("foo", foo).build();
    throw new RuntimeException(jsonObject.toString());
  }
}
