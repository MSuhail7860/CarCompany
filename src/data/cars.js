export const carsData = [
    {
        id: 1,
        name: 'Apex GT-R',
        category: 'Sports',
        tagline: 'Born to dominate',
        description: 'Experience raw power and precision engineering in our flagship sports car. The GT-R combines cutting-edge aerodynamics with unmatched performance.',
        image: '/cars/gt-r.jpg',
        price: '$189,000',
        specs: {
            engine: '4.0L Twin-Turbo V8',
            horsepower: '720 HP',
            torque: '850 Nm',
            acceleration: '0-100 km/h in 2.8s',
            topSpeed: '340 km/h',
            transmission: '8-Speed Dual-Clutch',
            drivetrain: 'AWD',
            fuelType: 'Premium Gasoline'
        },
        features: [
            'Active Aerodynamics',
            'Carbon Ceramic Brakes',
            'Adaptive Suspension',
            'Track Mode',
            'Launch Control',
            'Performance Exhaust'
        ],
        colors: ['Midnight Black', 'Racing Red', 'Arctic White', 'Storm Grey']
    },
    {
        id: 2,
        name: 'Apex Phantom',
        category: 'Luxury Sedan',
        tagline: 'Elegance redefined',
        description: 'The ultimate expression of luxury and comfort. The Phantom delivers a serene driving experience with unparalleled craftsmanship.',
        image: '/cars/phantom.jpg',
        price: '$245,000',
        specs: {
            engine: '6.0L V12',
            horsepower: '563 HP',
            torque: '900 Nm',
            acceleration: '0-100 km/h in 4.8s',
            topSpeed: '250 km/h',
            transmission: '8-Speed Automatic',
            drivetrain: 'RWD',
            fuelType: 'Premium Gasoline'
        },
        features: [
            'Massage Seats',
            'Starlight Headliner',
            'Air Suspension',
            'Rear Entertainment',
            'Ambient Lighting',
            'Premium Sound System'
        ],
        colors: ['Diamond Black', 'Pearl White', 'Sapphire Blue', 'Champagne Gold']
    },
    {
        id: 3,
        name: 'Apex Volt',
        category: 'Electric',
        tagline: 'The future is electric',
        description: 'Zero emissions, infinite possibilities. The Volt represents our commitment to sustainable luxury with groundbreaking electric technology.',
        image: '/cars/volt.jpg',
        price: '$95,000',
        specs: {
            engine: 'Dual Electric Motors',
            horsepower: '450 HP',
            torque: '700 Nm',
            acceleration: '0-100 km/h in 3.5s',
            topSpeed: '250 km/h',
            transmission: 'Single-Speed',
            drivetrain: 'AWD',
            fuelType: 'Electric'
        },
        features: [
            '500km Range',
            'Fast Charging',
            'Autopilot',
            'OTA Updates',
            'Regenerative Braking',
            'Smart Climate Control'
        ],
        colors: ['Cyber Silver', 'Electric Blue', 'Quantum White', 'Stealth Black']
    },
    {
        id: 4,
        name: 'Apex Titan',
        category: 'SUV',
        tagline: 'Conquer any terrain',
        description: 'Luxury meets capability in our premium SUV. The Titan is engineered for adventure without compromising on comfort or style.',
        image: '/cars/titan.jpg',
        price: '$125,000',
        specs: {
            engine: '3.5L Twin-Turbo V6',
            horsepower: '450 HP',
            torque: '650 Nm',
            acceleration: '0-100 km/h in 5.2s',
            topSpeed: '240 km/h',
            transmission: '10-Speed Automatic',
            drivetrain: 'AWD',
            fuelType: 'Premium Gasoline'
        },
        features: [
            'Off-Road Package',
            'Panoramic Roof',
            '7-Seat Configuration',
            'Terrain Response',
            '360° Camera',
            'Towing Package'
        ],
        colors: ['Alpine White', 'Forest Green', 'Desert Sand', 'Obsidian Black']
    },
    {
        id: 5,
        name: 'Apex Viper',
        category: 'Hypercar',
        tagline: 'Unleash the beast',
        description: 'Our most extreme creation. The Viper pushes the boundaries of automotive engineering with mind-bending performance.',
        image: '/cars/viper.jpg',
        price: '$2,500,000',
        specs: {
            engine: '8.0L Quad-Turbo V12',
            horsepower: '1,500 HP',
            torque: '1,600 Nm',
            acceleration: '0-100 km/h in 2.2s',
            topSpeed: '420 km/h',
            transmission: '7-Speed Sequential',
            drivetrain: 'AWD',
            fuelType: 'Racing Fuel'
        },
        features: [
            'Active Aero',
            'DRS System',
            'Carbon Fiber Monocoque',
            'Hybrid Power',
            'Track Telemetry',
            'Custom Configurator'
        ],
        colors: ['Venom Green', 'Inferno Orange', 'Stealth Carbon', 'Electric Purple']
    },
    {
        id: 6,
        name: 'Apex Cruiser',
        category: 'Convertible',
        tagline: 'Freedom in motion',
        description: 'Experience open-air luxury with our elegant convertible. The Cruiser combines timeless design with modern performance.',
        image: '/cars/cruiser.jpg',
        price: '$145,000',
        specs: {
            engine: '3.0L Twin-Turbo I6',
            horsepower: '382 HP',
            torque: '500 Nm',
            acceleration: '0-100 km/h in 4.6s',
            topSpeed: '280 km/h',
            transmission: '8-Speed Automatic',
            drivetrain: 'RWD',
            fuelType: 'Premium Gasoline'
        },
        features: [
            'Power Soft Top',
            'Wind Deflector',
            'Heated Seats',
            'Adaptive LED Lights',
            'Sport Exhaust',
            'Premium Leather'
        ],
        colors: ['Ocean Blue', 'Sunset Red', 'Ivory White', 'Graphite Grey']
    }
];

export const featuredCars = carsData.slice(0, 3);

export const getCarById = (id) => {
    return carsData.find(car => car.id === parseInt(id));
};

export const getCarsByCategory = (category) => {
    return carsData.filter(car => car.category === category);
};
