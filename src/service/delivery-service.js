const Delivery = require('../model/delivery')

const registry = {};
let sequence = 0;

class DeliveryService {
    static add(newDelivery) {
        return new Promise((resolve) => {
            console.log(newDelivery)
            const delivery = new Delivery(++sequence, 
                newDelivery.orderId, 
                newDelivery.clientId, 
                newDelivery.receiverName,
                newDelivery.receiverCpf,
                newDelivery.isBuyer,
                newDelivery.dateTime,
                newDelivery.local,
                "PENDENTE");
            registry[delivery.id] = delivery;
            resolve(delivery);
        });
    }

    static getAll() {
        const toArray = key => registry[key];
        return new Promise((resolve) => {
            const deliveries = Object.keys(registry).map(toArray);
            resolve(deliveries);
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            resolve(registry[id]);
        });
    }

    static update(deliveryId, updatedDelivery) {
        return new Promise(async (resolve) => {
            const delivery = await DeliveryService.getById(deliveryId);
            if (delivery) {
                delivery.receiverName = updatedDelivery.receiverName || delivery.receiverName;
                delivery.receiverCpf = updatedDelivery.receiverCpf || delivery.receiverCpf;
                delivery.isBuyer = updatedDelivery.isBuyer || delivery.isBuyer;
                delivery.dateTimeDelivery = updatedDelivery.dateTimeDelivery || delivery.dateTimeDelivery;
                delivery.location = updatedDelivery.location || delivery.location;
                delivery.status = updatedDelivery.status || delivery.status;
                resolve(delivery);
            }
            resolve(null);
        });
    }

    static delete(id) {
        return new Promise((resolve) => {
            const delivery = registry[id];
            if (delivery) {
                delete registry[id];
                resolve(true);
            }
            resolve(false);
        });
    }
}

module.exports = DeliveryService;