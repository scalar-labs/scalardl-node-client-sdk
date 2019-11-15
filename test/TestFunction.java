package com.org1.function;

import com.datastax.driver.core.Session;
import com.org1.function.repository.KeyspaceRepository;
import com.scalar.ledger.database.MutableDatabase;
import com.scalar.ledger.exception.ContractContextException;
import com.scalar.ledger.udf.Function;
import java.util.Optional;
import javax.json.JsonObject;

public class TestFunction extends Function {

  private KeyspaceRepository schemaRepository;
  private Session session;

  public void connectCassandra() {
    CassandraConnector client = new CassandraConnector();
    client.connect("127.0.0.1", 9042);
    this.session = client.getSession();
    schemaRepository = new KeyspaceRepository(session);
  }

  @Override
  public void invoke(MutableDatabase mutableDatabase, JsonObject contractArgument,
      Optional<JsonObject> functionArgument) {
    connectCassandra();

    if (!functionArgument.isPresent()) {
      throw new ContractContextException("please set provide a function argument");
    }
    String contractArgumentA = contractArgument.getString("a");
    String functionId = functionArgument.get().getString("function_id");
    session.execute(
        "INSERT INTO scalar.asset (id,argument) VALUES('" + functionId + "', '" + contractArgumentA
            + "');");
  }
}
