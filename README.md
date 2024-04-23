# React client, Node server

## 🦊 simple ordering form

---

## Setup

### The Frontend

1. Open a terminal in VS Code
2. `cd client`
3. `npm install`

Use `npm run dev:frontend` to start the frontend dev environment.

### The Backend

1. Open _another_ terminal in VS Code
2. `cd server`
3. `npm install`

Use `npm run dev:backend` to start the backend dev environment.

---

## ⚡ Exercises

![order-form](client\public\images\order-form.png)

#### Validation

1. Validate that the user has not yet placed an order (because the product is free, we limit 1 per customer). We cannot know this with 100% accuracy, but we can refuse users

   - whose name is already in our database.
   - whose email is already in our database.
   - whose address matches an address already in our database. Use only the street number and name for this.

2. Validate that the data received is _valid_ as much as is possible.
   - Is the email, an email? Does it include `@`? _(No need to go crazy here. Just a cursory evaluation.)_
3. Validate that delivery address is within Canada. We only ship to Canada!
4. Validate that the item selected is actually in stock.

If any of these validations fail, return an error as a response.

| Error ID          | Description                                        |
| ----------------- | -------------------------------------------------- |
| 'unavailable'     | Item out of stock                                  |
| 'repeat-customer' | Customer has already purchased an item             |
| 'undeliverable'   | Customer didn't supply a Canadian shipping address |
| 'missing-data'    | Some of the required information was not provided  |

The form expects a JSON object as a response. For example, if everything works great:

```json
{
  "status": "success"
}
```

If there is an error, you should change the `status`, as well as provide the error:

```json
{
  "status": "error",
  "error": "unavailable"
}
```

#### Endpoint details

The form makes a POST request to the `/order` path; you will need to create this endpoint in Express.
