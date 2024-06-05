export const DeleteConfigCollaborator = {
  tags: ["Collaborator"],
  summary: "Delete collaborator by ID",
  description: "This route allows the admin to delete a collaborator",
  produces: ["application/json"],
  operationId: "deleteCollaboratorByID",
  security: [
    {
      authorization: []
    }
  ],
  parameters: [
    {
      name: "id",
      in: "query",
      description: "Collaborator ID",
      required: true,
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
      description: "Employee ID was not provided",
      error: "Bad Request"
    },
    "404": {
      description: "We were unable to locate the employee",
      error: "Not Found"
    },
    "401": {
      description: "Token was not provided",
      error: "Unauthorized"
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
