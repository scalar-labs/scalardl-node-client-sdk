package com.org1.function;

import com.scalar.database.api.Put;
import com.scalar.database.io.Key;
import com.scalar.database.io.TextValue;
import com.scalar.ledger.database.MutableDatabase;
import com.scalar.ledger.udf.Function;
import java.util.Optional;
import javax.json.JsonObject;

public class TestFunction extends Function {

  @Override
  public void invoke(MutableDatabase database, JsonObject contractArgument,
      Optional<JsonObject> functionArgument) {
    String mockedId = contractArgument.getString("asset_id");
    Put put = (new Put(new Key(new TextValue("column_a", mockedId)))).forNamespace("foo")
        .forTable("bar");
    database.put(put);
  }
}
