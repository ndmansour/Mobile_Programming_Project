export class restaurant_details {
    name: string;
    location: string;
    phone: string;
    url_img: string;
    code_postal: number;
    city: string;

    constructor(name: string, location: string, code_postal: number, city: string, phone: string, url_img: string) {
        this.name = name;
        this.location = location;
        this.code_postal = code_postal;
        this.city = city;
        this.phone = phone;
        this.url_img = url_img;
    }
}
/*
export class ProviderRestaurantsData {
    getData() {
        res: restaurant_details;
    }

}*/