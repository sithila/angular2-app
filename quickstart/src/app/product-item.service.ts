export class ProductItemService {

    get() {
        return this.productItems;

    }

    add(productItem) {
        this.productItems.push(productItem);

    }

    delete() { }


    productItems = [
        {
            id: 1,
            name: "sithila Sandaruwan Waduge",
            mtype: "student",
            category: "student",
            watchedOn: 122444242,
            bday: 1499939475,
            isFavorite: false
        },
        {
            id: 2,
            name: "sithsdsdsdila dfdffffffffffffffffdfdf",
            mtype: "student",
            category: "student",
            watchedOn: 122444242,
            bday: 1499939475,
            isFavorite: true

        },
        {
            id: 3,
            name: "sdsdsd",
            mtype: "worker",
            category: "abc",
            watchedOn: 122444242,
            bday: 1499939475,
            isFavorite: true

        },
        {
            id: 4,
            name: "sdsdsd",
            mtype: "worker",
            category: "student",
            watchedOn: 122444242,
            bday: 1499939475,
            isFavorite: true

        },
        {
            id: 5,
            name: "sdsdsd",
            mtype: "worker",
            category: "worker",
            watchedOn: 122444242,
            bday: 1499939475,
            isFavorite: true

        },
        {
            id: 6,
            name: "sdsdsd",
            mtype: "worker",
            category: "student",
            watchedOn: 122444242,
            bday: 1499939475,
            isFavorite: true

        }


    ];



}