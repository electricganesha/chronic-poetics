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
  SimpleList,
  ArrayInput,
  SimpleFormIterator,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

function ArtistFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  );
}

export function ArtistList(props) {
  return (
    <List
      {...props}
      filters={<ArtistFilter />}
      sort={{ field: "name", order: "ASC" }}
    >
      <Datagrid>
        <TextField source="name" />
        <TextField source="slug" />
        <ReferenceArrayField
          label="Conditions"
          reference="conditions"
          source="conditions"
        >
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <ReferenceArrayField label="Pieces" reference="pieces" source="pieces">
          <SingleFieldList>
            <>
              <TextField source="name" />
              ;&nbsp;
            </>
          </SingleFieldList>
        </ReferenceArrayField>
        <ShowButton label="" />
        <EditButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  );
}

export function ArtistShow(props) {
  return (
    <Show {...props} title="Artist Details Page">
      <SimpleShowLayout label="Artist Details">
        <TextField source="name" />
        <TextField source="slug" />
        <TextField source="photo" />
        <TextField source="photoCredit" />
        <TextField source="bio" />
        <TextField source="website" />
        <TextField source="instagram" />
        <TextField
          source="importance"
          label="How important is participation in the arts for you or your charge?"
        />
        <TextField
          source="barrier"
          label="What is the biggest barrier you face when it comes to attending an art event? (check all that apply)"
        />
        <ArrayField
          source="issues"
          label="What issues prevent you from taking part in arts activities?"
        >
          <SimpleList primaryText={(record) => record} />
        </ArrayField>
        <ArrayField
          source="encourage"
          label="What three things might encourage you to take part in arts activities more often?"
        >
          <SimpleList primaryText={(record) => record} />
        </ArrayField>
        <TextField
          source="support"
          label="What support is most important to you in your work as an artist?"
        />
        <TextField
          source="advice"
          label="What advice would you give to any arts organisation planning to develop  activities and events for creative people like yourself?"
        />
        <TextField
          source="personal"
          label="What do you personally do to make art accessible to yourself?"
        />
        <ReferenceArrayField
          label="Conditions"
          reference="conditions"
          source="conditions"
        >
          <SingleFieldList>
            <TextField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <TextField
          source="experience"
          label="Tell us about your day-to-day experience of the condition"
        />
        <ArrayField source="symptoms" label="What symptoms do you experience?">
          <SimpleList
            primaryText={(record) => <a href={record.link}>{record.name}</a>}
          />
        </ArrayField>
        <TextField
          source="description"
          label="How do you describe your condition to people who don’t know you"
        />
        <TextField
          source="oneThing"
          label="What's the one thing you want the designer to know about your condition and/or work? "
        />
        <ReferenceArrayField label="Pieces" reference="pieces" source="pieces">
          <SingleFieldList>
            <TextField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
      </SimpleShowLayout>
    </Show>
  );
}

export function ArtistCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" helperText="Artist's name" />
        <TextInput
          source="slug"
          helperText="represents the url for the artist - e.g. for the name John Doe the slug would be john-doe in kebab case - must be unique"
        />
        <TextInput
          source="photo"
          helperText="URL for the artist photo - keep it centralised in Cloudinary"
        />
        <TextInput source="photoCredit" helperText="Photographer Credit" />
        <TextInput source="bio" helperText="Biography (50 words max)" />
        <TextInput source="website" helperText="Artist Website" />
        <TextInput source="instagram" helperText="Artist Instagram" />
        <TextInput
          source="importance"
          helperText="How important is participation in the arts for you or your charge?"
        />
        <TextInput
          source="barrier"
          helperText="What is the biggest barrier you face when it comes to attending an art event? (check all that apply)"
        />
        <ArrayInput
          source="issues"
          helperText="What issues prevent you from taking part in arts activities?"
        >
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput
          source="encourage"
          helperText="What three things might encourage you to take part in arts activities more often?"
        >
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput
          source="support"
          helperText="What support is most important to you in your work as an artist?"
        />
        <TextInput
          source="advice"
          helperText="What advice would you give to any arts organisation planning to develop  activities and events for creative people like yourself?"
        />
        <TextInput
          source="personal"
          helperText="What do you personally do to make art accessible to yourself?"
        />
        <TextInput
          source="support"
          helperText="What support is most important to you in your work as an artist?"
        />
        <ReferenceArrayInput
          source="conditions"
          reference="conditions"
          helperText="What is the name of your condition?"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <TextInput
          source="experience"
          helperText="Tell us about your day-to-day experience of the condition"
        />
        <ArrayInput
          source="symptoms"
          helperText="What symptoms do you experience?"
        >
          <SimpleFormIterator>
            <TextInput
              source="link"
              helperText="Link to the conditions reference"
            />
            <TextInput source="name" helperText="Name of the condition" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput
          source="description"
          helperText="How do you describe your condition to people who don’t know you"
        />
        <TextInput
          source="oneThing"
          helperText="What's the one thing you want the designer to know about your condition and/or work?"
        />
        <ReferenceArrayInput
          source="pieces"
          reference="pieces"
          helperText="The artists work"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
}

export function ArtistEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput
          source="name"
          helperText="Artist's name"
          options={{ disabled: true }}
        />
        <TextInput
          source="slug"
          helperText="represents the url for the artist - e.g. for the name John Doe the slug would be john-doe in kebab case - must be unique"
          options={{ disabled: true }}
        />
        <TextInput
          source="photo"
          helperText="URL for the artist photo - keep it centralised in Cloudinary"
        />
        <TextInput source="photoCredit" helperText="Photographer Credit" />
        <TextInput source="bio" helperText="Biography (50 words max)" />
        <TextInput source="website" helperText="Artist Website" />
        <TextInput source="instagram" helperText="Artist Instagram" />
        <TextInput
          source="importance"
          helperText="How important is participation in the arts for you or your charge?"
        />
        <TextInput
          source="barrier"
          helperText="What is the biggest barrier you face when it comes to attending an art event? (check all that apply)"
        />
        <ArrayInput
          source="issues"
          helperText="What issues prevent you from taking part in arts activities?"
        >
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput
          source="encourage"
          helperText="What three things might encourage you to take part in arts activities more often?"
        >
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput
          source="support"
          helperText="What support is most important to you in your work as an artist?"
        />
        <TextInput
          source="advice"
          helperText="What advice would you give to any arts organisation planning to develop  activities and events for creative people like yourself?"
        />
        <TextInput
          source="personal"
          helperText="What do you personally do to make art accessible to yourself?"
        />
        <TextInput
          source="support"
          helperText="What support is most important to you in your work as an artist?"
        />
        <ReferenceArrayInput
          source="conditions"
          reference="conditions"
          helperText="What is the name of your condition?"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
        <TextInput
          source="experience"
          helperText="Tell us about your day-to-day experience of the condition"
        />
        <ArrayInput
          source="symptoms"
          helperText="What symptoms do you experience?"
        >
          <SimpleFormIterator>
            <TextInput
              source="link"
              helperText="Link to the conditions reference"
            />
            <TextInput source="name" helperText="Name of the condition" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput
          source="description"
          helperText="How do you describe your condition to people who don’t know you"
        />
        <TextInput
          source="oneThing"
          helperText="What's the one thing you want the designer to know about your condition and/or work?"
        />
        <ReferenceArrayInput
          source="pieces"
          reference="pieces"
          helperText="The artists work"
        >
          <SelectArrayInput optionText="name" />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
}
