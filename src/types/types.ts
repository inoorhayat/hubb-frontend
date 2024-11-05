

export interface User {
    name: string;
    email: string;
    photo: string;
    gender: string;
    role: string;
    dob: string;
    _id: string;
}

export type Product = {
    name: string;
    price: number;
    stock: number;
    category: string;
    photo: string;
    _id: string;
}

export type ShippingInfo = {
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: number;

};

export type CartItem = {
    productId: string;
    photo: string;
    name: string;
    price: number;
    quantity: string;
    stock: number;
};

export type OrderItem = Omit<CartItem, "stock"> & { _id: string };

export type Order = {
    orderItems: OrderItem[];
    shippingInfo: ShippingInfo;
    subtotal: number;
    tax: number;
    shippingCharges: number;
    discount: number;
    total: number;
    status: string;
    user: {
        name: string;
        _id: string;
      } | null;
    _id: string;
};

type CountAndChange = {
    revenue: number;
    product: number;
    user: number;
    order: number;
};

type LatestTransaction = {
    _id: string;
    amount: number;
    discount: number;
    quantity: number;
    status: string;
}

export type Stats = {
    categoryCount: Record<string, number>[],
    changePercent: CountAndChange,
    counts: CountAndChange,
    chart: {
        order: number[],
        revenue: number[],
    },
    userRatio: {
        male: number;
        female: number;
    },
    latestTransaction: LatestTransaction[],
};

export type Pie = {
    orderFullfillment: {
        processing: number;
        shipped: number;
        delivered: number;
    },
    productCategories: Record<string, number>[],
    stockAvailability: {
        inStock: number;
        outOfStock: number;
    },
    revenueDistribution: {
        netMargin: number;
        discount: number;
        productionCost: number;
        burnt: number;
        marketingCost: number;
    },
    usersAgeGroup: {
        teen: number;
        adult: number;
        old: number;
    },
    adminCustomer: {
        admin: number;
        customer: number;
    },
};

export type Bar = {
    users: number[],
    products: number[],
    orders: number[]
};

export type Line = {
    users: number[],
    products: number[],
    discount: number[]
    revenue: number[]
};
