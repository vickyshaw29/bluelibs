import {
    generateProject,
    app,
    collection,
    field,
    relation,
    shortcuts,
    sharedModel,
    GeneratorKind,
    faker,
  } from "../utils";
  
  export const Post = collection({
    id: "Posts",
    representedBy: "title",
    behaviors: {
      softdeletable: true,
    },
    fields: [
      shortcuts.field.softdeletable(),
      ...shortcuts.fields.timestampable(),
      field({
        id: "title",
        type: field.types.STRING,
      }),
      field({
        id: "body",
        type: field.types.STRING,
      }),
    ],
    relations: [...shortcuts.relations.blameable()],
  });
  