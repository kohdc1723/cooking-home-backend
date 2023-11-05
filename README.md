# Cooking Home Backend
This repository contains the codebase of the backend-side for the ***Cooking Home*** application, serving as a RESTful API provider for the app.

## Endpoints
### Authentication
| Method   | Endpoint        | Parameters (required*)                     | Description                                    | Public/Protected |
|----------|-----------------|--------------------------------------------|------------------------------------------------|------------------|
| `POST`   | `/auth/login`   | `username: string*`<br>`password: string*` | Logs in a user                                 | Public           |
| `GET`    | `/auth/refresh` | -                                          | Refreshes the access token using refresh token | Public           |
| `POST`   | `/auth/logout`  | -                                          | Logs out the user                              | Public           |

### Users
| Method   | Endpoint     | Parameters (required*)                                     | Description                                    | Public/Protected |
|----------|--------------|------------------------------------------------------------|------------------------------------------------|------------------|
| `GET`    | `/users/:id` | -                                                          | Get a user by id                               | Protected        |
| `POST`   | `/users`     | `username: string*`<br>`password: string*`                 | Create a new user                              | Public           |
| `PATCH`  | `/users`     | `id: string*`<br>`username: string*`<br>`password: string` | Update a user                                  | Protected        |
| `DELETE` | `/users`     | `id: string*`                                              | Delete a user                                  | Protected        |

### Preference
| Method  | Endpoint          | Parameters (required*)                                              | Description                                    | Public/Protected |
|---------|-------------------|---------------------------------------------------------------------|------------------------------------------------|------------------|
| `GET`   | `/preference/:id` | -                                                                   | Get a preference by user id                    | Protected        |
| `POST`  | `/preference`     | `userId: string*`                                                   | Create a default preference of the user        | Protected        |
| `PATCH` | `/preference`     | `id: string*`<br>`favorites: [string]*`<br>`ingredients: [string]*` | Update a preference                            | Protected        |
