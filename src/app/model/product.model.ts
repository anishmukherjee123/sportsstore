// this contains the data model representation of a product sold by the store
// corresponds with the data defined in the RESTful web service (the json server)
export class Product {
    constructor(
        // the '?' characters in the constructor indicate that the field is optional
        public id?: number,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number){}
}