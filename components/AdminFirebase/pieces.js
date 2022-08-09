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
  SelectArrayInput,
  ArrayField,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

function PiecesFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );
}

export function PiecesList(props) {
  return (
    <List
      {...props}
      filters={<PiecesFilter />}
      sort={{ field: "name", order: "ASC" }}
    >
      <Datagrid>
        <TextField source="name" />
        <TextField source="slug" />
        <ReferenceArrayField
          label="Artist"
          reference="artists"
          source="artists"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceArrayField
          label="Conditions"
          reference="conditions"
          source="conditions"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <ShowButton label="" />
        <EditButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  );
}

export function PiecesShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" />
        <TextField source="slug" />
        <ReferenceArrayField
          label="Artist"
          reference="artists"
          source="artists"
        >
          <SingleFieldList>
            <TextField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceArrayField
          label="Conditions"
          reference="conditions"
          source="conditions"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
      </SimpleShowLayout>
    </Show>
  );
}

export function PiecesCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="slug" />
        <ReferenceArrayInput
          source="artists"
          reference="artists"
          helperText="Artist"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="conditions"
          reference="conditions"
          helperText="Conditions"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <TextInput source="typeOfWork" />
        <ArrayInput source="work" helperText="List of works">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}

export function PiecesEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" options={{ disabled: true }} />
        <TextInput source="slug" options={{ disabled: true }} />
        <ReferenceArrayInput
          source="artists"
          reference="artists"
          helperText="Artist"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="conditions"
          reference="conditions"
          helperText="Conditions"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <TextInput source="typeOfWork" />
        <ArrayInput source="work" helperText="List of works">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
}
