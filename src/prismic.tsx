import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "sandbox-rio";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5aZ3F5MEJFQUFDUUFKb3oy.DGFbAO-_ve-_ve-_ve-_vXjvv73vv73vv70O77-9fRzvv70X77-9SFBRS33vv73vv73vv73vv73vv73vv70gIA",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "projeto-em-andamento",
      path: "/",
    },
  ],
});
