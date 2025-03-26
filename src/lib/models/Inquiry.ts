import mongoose, { Document, Model, model, models, Schema } from 'mongoose';

export interface IInquiry extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
    budget?: string;
    website?: string;
    createdAt: Date;
}

const InquirySchema: Schema<IInquiry> = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        company: { type: String },
        phone: { type: String },
        message: { type: String, required: true },
        budget: { type: String },
        website: { type: String },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const Inquiry: Model<IInquiry> = models.Inquiry || model<IInquiry>('Inquiry', InquirySchema);

export default Inquiry;
