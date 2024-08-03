interface UpdateWithOptions {
  name?: string;
  description?: string;
  price?: number;
}

export class Product {
  // public id: string;
  // public name: string;
  // public description?: string;
  // public price?: number;

  constructor(
    public id: number,
    public name: string,
    public price: number,
  ) {}

  updateWith({ name, price }: UpdateWithOptions) {
    this.name = name ?? this.name;
    this.price = price ?? this.price;
  }
}
