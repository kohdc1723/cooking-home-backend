# Cooking Home
***Cooking Home*** offers users an extensive ***recipe search engine*** and ***recommends recipes*** based on their favorite foods and the ingredients they have at home.
- Frontend Repository: [https://github.com/kohdc1723/cooking-home-frontend](https://github.com/kohdc1723/cooking-home-frontend)

# cooking-home-backend
***cooking-home-backend*** repository contains the backend-side codebase of the ***Cooking Home*** application, serving as a serverless RESTful API provider for the application.
- Base API URL: [https://mioqkb90kc.execute-api.ca-central-1.amazonaws.com/prod/api](https://mioqkb90kc.execute-api.ca-central-1.amazonaws.com/prod/api)

---

### Built with
![javascript-logo]
![nodejs-logo]
![express-logo]
![mongodb-logo]
![mongoose-logo]
![jwt-logo]

### CI/CD with
![aws-lambda-logo]
![aws-api-gateway-logo]
![github-actions-logo]

---

# File structure
    .
    ├── index.js                      # entry point of the express app
    │
    ├── routes                        # routes for distinct features
    │   ├── rootRoutes.js             # root routes
    │   ├── authRoutes.js             # routes related to the authentication
    │   ├── preferenceRoutes.js       # routes related to the user preference
    │   └── usersRoutes.js            # routes related to the users
    │
    ├── models                        # Mongoose schemas
    │   ├── Preference.js             # Preference schema
    │   └── User.js                   # User schema
    │
    ├── views                         # HTML templates for rendering views
    │   ├── 404.html                  # HTML for the 404 error page
    │   └── index.html                # HTML for the index page
    │
    ├── controllers                   # controllers for handling business logic
    │   ├── authController.js         # controllers related to the authentication
    │   ├── preferenceController.js   # controllers related to the user preference
    │   └── usersController.js        # controllers related to the users
    │
    ├── middlewares                   # custom middlewares
    │   └── verifyToken.js            # middleware for verifying JWT
    │
    ├── config                        # configurations
    │   ├── allowedOrigins.js         # allowed origins for CORS
    │   ├── corsOptions.js            # configuration for CORS
    │   └── connectDb.js              # configuration for connecting to MongoDB
    │
    ├── public                        # static files
    │   └── css                       # stylesheets
    │       └── style.css             # main css file
    │
    └── README.md                     # README file

---

# Endpoints
### Authentication
| Method   | Endpoint        | Parameters (required*)                     | Description                                    | Auth Required |
|----------|-----------------|--------------------------------------------|------------------------------------------------|---------------|
| `POST`   | `/auth/login`   | `username: string*`<br>`password: string*` | Logs in a user                                 | No            |
| `GET`    | `/auth/refresh` | -                                          | Refreshes the access token using refresh token | Refresh Token |
| `POST`   | `/auth/logout`  | -                                          | Logs out the user                              | No            |

### Users
| Method   | Endpoint     | Parameters (required*)                                     | Description                                    | Auth Required |
|----------|--------------|------------------------------------------------------------|------------------------------------------------|---------------|
| `GET`    | `/users/:id` | -                                                          | Get a user by id                               | Access Token  |
| `POST`   | `/users`     | `username: string*`<br>`password: string*`                 | Create a new user                              | No            |
| `PATCH`  | `/users`     | `id: string*`<br>`username: string*`<br>`password: string` | Update a user                                  | Access Token  |
| `DELETE` | `/users`     | `id: string*`                                              | Delete a user                                  | Access Token  |

### Preference
| Method  | Endpoint          | Parameters (required*)                                              | Description                                    | Auth Required |
|---------|-------------------|---------------------------------------------------------------------|------------------------------------------------|---------------|
| `GET`   | `/preference/:userId` | -                                                                   | Get a preference by user id                    | Access Token  |
| `POST`  | `/preference`     | `userId: string*`                                                   | Create a default preference of the user        | Access Token  |
| `PATCH` | `/preference`     | `id: string*`<br>`favorites: [string]*`<br>`ingredients: [string]*` | Update a preference                            | Access Token  |

---

[javascript-logo]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[nodejs-logo]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[express-logo]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[mongodb-logo]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[mongoose-logo]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white
[jwt-logo]: https://img.shields.io/badge/JSONWebToken-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white
[github-actions-logo]: https://img.shields.io/badge/Github%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white
[route53-logo]: https://img.shields.io/badge/Amazon%20Route53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white
[aws-lambda-logo]: https://img.shields.io/badge/AWS%20Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=white
[aws-api-gateway-logo]: https://img.shields.io/badge/AWS%20API%20Gateway-FF4F8B?style=for-the-badge&logo=amazonapigateway&logoColor=white
