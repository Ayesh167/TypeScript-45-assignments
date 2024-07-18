function createCar(manufacturer: string, modelName: string, ...args: Record<string, any>[]): Record<string, any> {
    let carObject: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const keys = Object.keys(arg);
        for (let j = 0; j < keys.length; j++) {
            const key = keys[j];
            carObject[key] = arg[key];
        }
    }

    return carObject;
}

// Example usage
const car = createCar('Toyota', 'Camry', { color: 'blue' }, { year: 2023 }, { features: ['navigation', 'sunroof'] });

console.log(car);