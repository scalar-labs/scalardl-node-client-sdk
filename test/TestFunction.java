package com.org1.function;

import com.scalar.ledger.database.MutableDatabase;
import com.scalar.ledger.udf.Function;
import java.util.Optional;
import javax.json.JsonObject;
import com.scalar.database.api.Put;
import com.scalar.database.io.TextValue;
import com.scalar.database.io.Key;

public class TestFunction extends Function {
  @Override
  public void invoke(MutableDatabase database, JsonObject contractArgument,
      Optional<JsonObject> functionArgument) {
      throw new RuntimeException("hello world");
  }
}
