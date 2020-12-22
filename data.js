// this file contains the data collections presented by the RESTful web service.
module.exports = function() {
    return {
        products: [
            {id: 1, name: "Kayak", category: "Watersports", description: "A boat for one person.", price: 275},
            {id: 2, name: "Life Jacket", category: "Watersports", description: "A life saving jacket.", price: 50},
            {id: 3, name: "Soccer Ball", category: "Soccer", description: "A ball used to play soccer.", price: 15},
            {id: 4, name: "Chess Board", category: "Chess", description: "A luxurious board used to play chess.", price: 50},
        ],
        orders: []
    }
}