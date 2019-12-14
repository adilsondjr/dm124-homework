class Delivery {
    constructor(
                id, 
                orderId, 
                clientId, 
                receiverName,
                receiverCpf,
                isBuyer,
                dateTime,
                local,
                status) {
        this.id = id, 
        this.orderId = orderId, 
        this.clientId = clientId, 
        this.receiverName = receiverName,
        this.receiverCpf = receiverCpf,
        this.isBuyer = isBuyer,
        this.dateTime = dateTime,
        this.local = local
        this.status = status
    }
}

module.exports = Delivery;