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
  ArrayField,
  UrlField,
  FunctionField,
  SimpleList,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  ReferenceArrayInput,
  SelectArrayInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

function ConditionsFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );
}

export function ConditionsList(props) {
  return (
    <List
      {...props}
      filters={<ConditionsFilter />}
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
        <ReferenceArrayField label="Pieces" reference="pieces" source="pieces">
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

export function ConditionsShow(props) {
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
        <ReferenceArrayField label="Pieces" reference="pieces" source="pieces">
          <SingleFieldList>
            <TextField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <TextField source="description" />
        <FunctionField
          source="source"
          label="Source"
          render={(record) => (
            <a href={record.source.link}>{record.source.name}</a>
          )}
        />
        ;
        <ArrayField source="symptoms" label="Symptoms">
          <SimpleList
            primaryText={(record) => <a href={record.link}>{record.name}</a>}
          />
        </ArrayField>
        <UrlField source="wiki" />
      </SimpleShowLayout>
    </Show>
  );
}

export function ConditionsCreate(props) {
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
          source="pieces"
          reference="pieces"
          helperText="Pieces"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <TextInput source="description" />
        <div label="Source">
          <TextInput source="source.link" helperText="Source link" />
          <TextInput source="source.name" helperText="Source name" />
        </div>
        <ArrayInput source="symptoms" helperText="Condition symptoms?">
          <SimpleFormIterator>
            <TextInput
              source="link"
              helperText="Link to the conditions reference"
            />
            <TextInput source="name" helperText="Name of the condition" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="wiki" />
      </SimpleForm>
    </Create>
  );
}

export function ConditionsEdit(props) {
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
          source="pieces"
          reference="pieces"
          helperText="Pieces"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <TextInput source="description" />
        <div label="Source">
          <TextInput source="source.link" helperText="Source link" />
          <TextInput source="source.name" helperText="Source name" />
        </div>
        <ArrayInput source="symptoms" helperText="Condition symptoms?">
          <SimpleFormIterator>
            <TextInput
              source="link"
              helperText="Link to the conditions reference"
            />
            <TextInput source="name" helperText="Name of the condition" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput source="wiki" />
      </SimpleForm>
    </Edit>
  );
}
