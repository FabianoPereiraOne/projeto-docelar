export const PatchConfigCollaborators = {
  tags: ["Collaborators"],
  summary: "Update collaborator",
  description: "This route allows the admin to update a collaborator",
  produces: ["application/json"],
  operationId: "updateCollaborator",
  security: [
    {
      authorization: []
    }
  ],
  parameters: [
    {
      name: "body",
      in: "body",
      required: true,
      description: "Enter the data for update",
      schema: {
        type: "object",
        properties: {
          name: {
            type: "string",
            example: "Lucas Silva"
          },
          phone: {
            type: "string",
            example: "+00 00 00000000"
          },
          type: {
            type: "string",
            example: "USER"
          },
          statusAccount: {
            type: "boolean"
          }
        }
      }
    },
    {
      name: "password",
      in: "header",
      required: false,
      description: "Enter the password for update",
      type: "string"
    },
    {
      name: "id",
      in: "query",
      required: true,
      description: "Enter the ID collaborator",
      type: "string"
    }
  ],
  responses: {
    "200": {
      description: "OK",
      schema: {
        $ref: "#/definitions/Collaborator"
      }
    },
    "400": {
      description:
        "querystring must have required property 'id' \nbody/property must match pattern",
      error: "Bad Request"
    },
    "401": {
      description: "Collaborator not authorized for this operation",
      error: "Unauthorized"
    },
    "403": {
      description: "Token was not provided",
      error: "Forbidden"
    },
    "404": {
      description: "We were unable to locate the collaborator",
      error: "Not Found"
    },
    "422": {
      description: "This token is not valid",
      error: "Unprocessable Entity"
    },
    "500": {
      description:
        "Something unexpected happened during processing on the server",
      error: "Internal Server Error"
    }
  }
}
