export type Delivery = {
    receiver: string,
    address: {
        description: string,
        city: string,
        zipcode: string,
        number: number,
        complement: string
    }
}