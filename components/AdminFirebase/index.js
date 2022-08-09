import * as React from "react";
import { ArtistList, ArtistShow, ArtistCreate, ArtistEdit } from "./artists";
import {
  ConditionsList,
  ConditionsShow,
  ConditionsCreate,
  ConditionsEdit,
} from "./conditions";
import { PiecesList, PiecesShow, PiecesCreate, PiecesEdit } from "./pieces";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from "react-admin-firebase";

import { credentials as config } from "../../utils/firebase";

const options = {
  logging: true,
};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="artists"
          list={ArtistList}
          show={ArtistShow}
          create={ArtistCreate}
          edit={ArtistEdit}
        />
        <Resource
          name="conditions"
          list={ConditionsList}
          show={ConditionsShow}
          create={ConditionsCreate}
          edit={ConditionsEdit}
        />
        <Resource
          name="pieces"
          list={PiecesList}
          show={PiecesShow}
          create={PiecesCreate}
          edit={PiecesEdit}
        />
      </Admin>
    );
  }
}

export default App;
