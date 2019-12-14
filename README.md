# DM124-homework
Final homework

## Endpoint
http://dm124-adilson.herokuapp.com
Authorization: Basic Auth
User: admin
Password: admin

#### Create Delivery

```bash
POST
*/api/deliveries
Content-Type: application/json
Response (201 CREATED):

Body:
{
	
	"orderId": 1,
	"clientId": 1,
	"receiverName": "Goku",
	"receiverCpf": "777.888.999-00",
	"isBuyer": true,
	"dateTime": "2019-12-12 17:00 PM",
	"local": "Santa Rita do Sapucaí"
	
}
```

#### List Deliveries
```bash
GET ALL
*/api/deliveries
Response (200 OK):

```

#### Get Delivery by ID

```bash
GET BY ID
*/api/deliveries/{deliveryID}
Response (200 OK):

```

#### Update Delivery

```bash
PATCH
*/api/deliveries/{deliveryID}
Content-Type: application/json
Response (200 OK):

Body:
{
    "status": "ENTREGUE"
}

```

#### Delete Order

```bash
DELETE
*/api/deliveries/{deliveryID}
Response (200 OK):

```
