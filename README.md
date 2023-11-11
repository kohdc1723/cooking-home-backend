# Cooking Home
***Cooking Home*** is an application that offers users a extensive ***recipe search engine*** and ***recommends recipes*** based on their favorite foods and the ingredients they have in their refrigerator.

# cooking-home-backend
***cooking-home-backend*** repository contains the codebase of the backend-side of the ***Cooking Home*** application, serving as a RESTful API provider for the application.

### Link
[https://cooking-home-api.kro.kr](https://cooking-home-api.kro.kr)

### Built with
![javascript-logo]
![nodejs-logo]
![express-logo]
![mongodb-logo]
![mongoose-logo]
![jwt-logo]

### CI/CD with
![ec2-logo]
![route53-logo]
![github-actions-logo]

### Web Server Configuration and Security Setup with
![nginx-logo]
![letsencrypt-logo]

## Endpoints
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

[javascript-logo]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[nodejs-logo]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[express-logo]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[mongodb-logo]: https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white
[mongoose-logo]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white
[jwt-logo]: https://img.shields.io/badge/JSONWebToken-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white
[ec2-logo]: https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white
[github-actions-logo]: https://img.shields.io/badge/Github%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white
[nginx-logo]: https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white
[route53-logo]: https://img.shields.io/badge/Amazon%20Route53-8C4FFF?style=for-the-badge&logo=amazonroute53&logoColor=white
[letsencrypt-logo]: https://img.shields.io/badge/Let's%20Encrypt-003A70?style=for-the-badge&logo=letsencrypt&logoColor=white
