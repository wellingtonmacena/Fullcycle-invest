import { OrderType } from "../entities/order.entity";

export class CreateOrderDto {
    walletId: number;
    assetId: number;
    shares: number;
    price: number;
    type: OrderType;
}
