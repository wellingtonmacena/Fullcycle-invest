import { Prop, Schema,SchemaFactory } from '@nestjs/mongoose';
import crypto from 'crypto';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';
import { Wallet, WalletDocument } from './wallet.entity';
import { Asset, AssetDocument } from 'src/assets/entities/asset.entity';

export type WalletAssetDocument = HydratedDocument<WalletAsset>;

@Schema({ timestamps: true })
export class WalletAsset {
    @Prop({default: () =>  crypto.randomUUID()})
    _id: string;

    @Prop({type: mongoose.Schema.Types.Int32})
    shares: number;

    @Prop({type: String, ref: 'Wallet'})
    wallet: WalletDocument | string;

    @Prop({type: String, ref: Asset.name})
    asset: AssetDocument |string;

    createdAt: Date;
    updatedAt: Date;
}

export const WalletAssetSchema = SchemaFactory.createForClass(WalletAsset);
//schema de tipos

WalletAssetSchema.index({ wallet: 1, asset: 1 }, { unique: true });