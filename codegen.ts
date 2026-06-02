import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphql.anilist.co",
  documents: ["app/**/*.{ts,tsx}", "!app/lib/anilist/generated.ts"],
  ignoreNoDocuments: true,
  generates: {
    "app/lib/anilist/generated.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        avoidOptionals: false,
        immutableTypes: true,
        skipTypename: false,
        enumsAsTypes: true,
        strictScalars: true,
        scalars: {
          Json: "Record<string, unknown>",
          CountryCode: "string",
          FuzzyDateInt: "number",
        },
      },
    },
  },
};

export default config;
