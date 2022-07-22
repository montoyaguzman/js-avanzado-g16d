class ShoesServices {

    constructor() {
        this.shoes = [];
        this.generateData();
    }

    generateData() {
        this.shoes = [
            { id: 1, brand: 'noke', price: 200, size: 29 },
            { id: 2, brand: 'edidas', price: 500, size: 22 },
            { id: 3, brand: 'floxi', price: 900, size: 25 },
            { id: 4, brand: 'pima', price: 1900, size: 24 },
            { id: 5, brand: 'gassi', price: 1100, size: 23 },
        ];
    }

    create(newShoe) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                this.shoes.push(newShoe);
                // 6.1.6 En caso de exito usar resolve();
                resolve();
            }, 1000);
        })
    }

    findAll(price) {
        // 6.1.4: Se simula una promesa (new Promise) y una operacion asincrona (setTimeout = base de datos)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 6.1.5 Logica de negocio
                if (price) {
                    const filteredData = this.shoes.filter(shoe => shoe.price >= price);
                    // 6.1.6 En caso de exito usar resolve();
                    resolve(filteredData);
                }
                resolve(this.shoes);
            }, 1000);
        })
    }

    findOne() {

    }

    editPartial() {

    }

    editComplete() {

    }

    delete() {

    }

}

module.exports = ShoesServices;
