type Card = {
    name: 	string,
    number:	string,
    code:	number
}

type Expires = {
    month:	number,
    year: number
}

export type Payment = {
    card : Card,
    expires: Expires
}