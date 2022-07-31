import * as React from "react";

import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ReferenceArrayInput,
  SelectArrayInput
} from "react-admin";

const PiecesFilter = props =>
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>;

export const PiecesList = props =>
  <List
    {...props}
    filters={<PiecesFilter />}
    sort={{field: "name", order: "ASC"}}
  >
    <Datagrid>
      <TextField source="name" />
      <TextField source="slug" />
      <ReferenceArrayField label="Artist" reference="artists" source="artists">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>;

export const PiecesShow = props =>
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <TextField source="slug" />
      <ReferenceArrayField label="Artist" reference="artists" source="artists">
        <SingleFieldList>
          <TextField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>;

export const PiecesCreate = props =>
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextField source="slug" />
      <ReferenceArrayInput
        source="artists"
        reference="artists"
        helperText="Artist"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>;

export const PiecesEdit = props =>
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" options={{disabled: true}} />
      <TextField source="slug" options={{disabled: true}} />
      <ReferenceArrayInput
        source="artists"
        reference="artists"
        helperText="Artist"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>;
