module.exports = {
  swagger: "2.0",
  info: {
    description:
      "Esta API es para la creacion de lista de favoritos del `Asesstment Back top-v22`",
    version: "1.0.0",
    title: "API FAVS - ASSESTMENT",
    contact: {
      email: "apiteam@swagger.io",
    },
  },
  server: {
    url: "http://localhost:8080",
  },
  tags: [
    {
      name: "List",
      description: "Este endpoint maneja la creacion de lista de favoritos.",
    },
    {
      name: "User",
      description: "Endpoint encargado de la creacion y login de usuarios",
    },
  ],
  paths: {
    "/favs": {
      get: {
        tags: ["List"],
        summary: "Recupera lista de favoritos de un usuario",
        produces: ["application/json"],
        parameters: [
          {
            name: "Authentication",
            in: "header",
            description: "Token de autorización.",
            required: true,
            schema: {
              type: "string",
              example:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWI2NWQ1YjZkMGFmYmU0YWU1YzhjZSIsImlhdCI6MTY1NDM1MTMxNywiZXhwIjoxNjU0NDM3NzE3fQ.pG0El3BK-m3AZcKH77H9rT7pQ4F5HnQa7uvGhSWuFJY",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/FavsList",
            },
          },
        },
      },
      post: {
        tags: ["List"],
        summary: "Crear lista de favoritos",
        produces: ["application/json"],
        parameters: [
          {
            name: "Authentication",
            in: "header",
            description: "Token de autorización.",
            required: true,
            schema: {
              type: "string",
              example:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWI2NWQ1YjZkMGFmYmU0YWU1YzhjZSIsImlhdCI6MTY1NDM1MTMxNywiZXhwIjoxNjU0NDM3NzE3fQ.pG0El3BK-m3AZcKH77H9rT7pQ4F5HnQa7uvGhSWuFJY",
            },
          },
          {
            name: "body",
            in: "body",
            description: "Lista de favorito a ingresar",
            required: true,
            schema: {
              $ref: "#/definitions/ListPost",
            },
          },
        ],
        responses: {
          200: {
            description: "Lista de favoritos Creada.",
            schema: { $ref: "#/definitions/ListItem" },
          },
          400: {
            description: "Error",
          },
        },
      },
    },
    "/favs/:listId": {
      get: {
        tags: ["List"],
        summary: "Recupera una lista de favorito de el usuario",
        produces: ["application/json"],
        parameters: [
          {
            name: "Label id",
            in: "path",
            description: "Id de la lista a consultar",
            required: true,
            schema: {
              type: "string",
              example: "62b1ed905b65dd9e2ed3e3f9",
            },
          },
          {
            name: "Authentication",
            in: "header",
            description: "Token de autorización.",
            required: true,
            schema: {
              type: "string",
              example:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWI2NWQ1YjZkMGFmYmU0YWU1YzhjZSIsImlhdCI6MTY1NDM1MTMxNywiZXhwIjoxNjU0NDM3NzE3fQ.pG0El3BK-m3AZcKH77H9rT7pQ4F5HnQa7uvGhSWuFJY",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/ListItem",
            },
          },
          403: {
            description: "unauthorized user",
          },
          400: {
            description: "Error",
          },
        },
      },
      delete: {
        tags: ["List"],
        summary: "Recupera una lista de favorito de el usuario",
        produces: ["application/json"],
        parameters: [
          {
            name: "Label id",
            in: "path",
            description: "Id de la lista a consultar",
            required: true,
            schema: {
              type: "string",
              example: "62b1ed905b65dd9e2ed3e3f9",
            },
          },
          {
            name: "Authentication",
            in: "header",
            description: "Token de autorización.",
            required: true,
            schema: {
              type: "string",
              example:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWI2NWQ1YjZkMGFmYmU0YWU1YzhjZSIsImlhdCI6MTY1NDM1MTMxNywiZXhwIjoxNjU0NDM3NzE3fQ.pG0El3BK-m3AZcKH77H9rT7pQ4F5HnQa7uvGhSWuFJY",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/ListItem",
            },
          },
          403: {
            description: "unauthorized user",
          },
          404: {
            description: "List not found",
          },
          400: {
            description: "Error",
          },
        },
      },
      put: {
        tags: ["List"],
        summary: "Recupera una lista de favorito de el usuario",
        produces: ["application/json"],
        parameters: [
          {
            name: "Label id",
            in: "path",
            description: "Id de la lista a consultar",
            required: true,
            schema: {
              type: "string",
              example: "62b1ed905b65dd9e2ed3e3f9",
            },
          },
          {
            name: "Authentication",
            in: "header",
            description: "Token de autorización.",
            required: true,
            schema: {
              type: "string",
              example:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWI2NWQ1YjZkMGFmYmU0YWU1YzhjZSIsImlhdCI6MTY1NDM1MTMxNywiZXhwIjoxNjU0NDM3NzE3fQ.pG0El3BK-m3AZcKH77H9rT7pQ4F5HnQa7uvGhSWuFJY",
            },
          },
          {
            name: "body",
            in: "body",
            description: "Lista de favorito a ingresar",
            required: true,
            schema: {
              $ref: "#/definitions/FavsItem",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/ListItem",
            },
          },
          403: {
            description: "unauthorized user",
          },
          404: {
            description: "List not found",
          },
          400: {
            description: "Error",
          },
        },
      },
    },

    "/auth/local/signup": {
      post: {
        tags: ["user"],
        summary: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "body",
            in: "body",
            description: "Informacion de usuario a registrar",
            required: true,
            schema: {
              $ref: "#/definitions/userPost",
            },
          },
        ],
        responses: {
          200: {
            description: "User created",
            schema: { $ref: "#/definitions/userCreated" },
          },
          400: {
            description: "Error",
          },
          403: {
            description: "Contraseñas no coinciden",
          },
        },
      },
    },
    "/auth/local/login": {
      post: {
        tags: ["user"],
        summary: "",
        produces: ["application/json"],
        parameters: [
          {
            name: "body",
            in: "body",
            description: "Informacion de usuario a registrar",
            required: true,
            schema: {
              $ref: "#/definitions/userLogin",
            },
          },
        ],
        responses: {
          200: {
            description: "User Login",
            schema: { $ref: "#/definitions/userloginsuccesfull" },
          },
          400: {
            description: "Error",
          },
        },
      },
    },
  },
  definitions: {
    FavsList: {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Lists found",
        },
        lists: {
          type: "array",
          items: {
            $ref: "#/definitions/ListItem",
          },
        },
      },
    },
    ListItem: {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "629b82eb8fe398f547c03c24",
        },
        name: {
          type: "string",
          example: "Lista de favoritos",
        },
        userId: {
          type: "string",
          example: "62ac7cbabfee0359b95de4b6",
        },
        favs: {
          type: "array",
          items: {
            $ref: "#/definitions/FavsItem",
          },
        },
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updateAt: {
          type: "string",
          format: "date-time",
        },
      },
    },
    FavsItem: {
      type: "object",
      properties: {
        title: {
          type: "string",
          example: "Musica favoria",
        },
        description: {
          type: "string",
          example: "Cancion de linkin park",
        },
        link: {
          type: "string",
          example: "Http...",
        },
      },
    },
    ListPost: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Nombre de la lista de favoritos",
        },
        fav: {
          type: "array",
          items: {
            $ref: "#/definitions/FavsItem",
          },
        },
      },
    },
    userPost: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "Correo@correo.com",
        },
        password: {
          type: "string",
          example: "Clave123*",
        },
        confirmPassword: {
          type: "string",
          example: "Clave123*",
        },
      },
    },
    userCreated: {
      type: "object",
      properties: {
        token: {
          type: "string",
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjI0NDQwOTIzNWIwMzUyYjhiNGZlYiIsImlhdCI6MTY1NTg1MDA0OCwiZXhwIjoxNjU1OTM2NDQ4fQ.MF1tIWpf7a0lck5vk6bMZ5dIQsLpXEBzSVSJwWUmjps",
        },
        message: {
          type: "string",
          example: "User created",
        },
      },
    },
    userLogin: {
      type: "object",
      properties: {
        email: {
          type: "string",
          example: "Correo@correo.com",
        },
        password: {
          type: "string",
          example: "Clave123*",
        },
      },
    },
    userloginsuccesfull: {
        type: "object",
        properties: {
          token: {
            type: "string",
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjI0NDQwOTIzNWIwMzUyYjhiNGZlYiIsImlhdCI6MTY1NTg1MDA0OCwiZXhwIjoxNjU1OTM2NDQ4fQ.MF1tIWpf7a0lck5vk6bMZ5dIQsLpXEBzSVSJwWUmjps",
          },
          message: {
            type: "string",
            example: "User login succesfully",
          },
        },
      },
  },
};
