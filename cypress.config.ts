import { defineConfig } from "cypress";
import webpack from "@cypress/webpack-preprocessor";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";

export async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});


// import { defineConfig } from "cypress";
// import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
// import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

// export default defineConfig({
//   e2e: {
//     specPattern: "**/*.feature",
//     async setupNodeEvents(
//       on: Cypress.PluginEvents,
//       config: Cypress.PluginConfigOptions
//     ): Promise<Cypress.PluginConfigOptions> {
//       // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//       await addCucumberPreprocessorPlugin(on, config);

//       on(
//         "file:preprocessor",
//         createBundler({
//           plugins: [createEsbuildPlugin(config)],
//         })
//       );

//       // Make sure to return the config object as it might have been modified by the plugin.
//       return config;
//     },
//   },
// });

// import { defineConfig } from "cypress";

// export default defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
