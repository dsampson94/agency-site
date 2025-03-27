import mongoose, {Document, Model, model, models, Schema} from 'mongoose'
import {EnquirySchema, IEnquiry} from './Enquiry'

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId
    username: string
    email: string
    password?: string
    enquiries: IEnquiry[]
    usageCountThisMonth: number
    badges: string[]
    role: 'USER' | 'ADMIN'
    createdAt: Date
}

const UserSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: false,
            unique: false,
            default: function () {
                return this.email
                    ? this.email.split('@')[0]
                    : 'user_' + Math.random().toString(36).slice(2, 11)
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate: {
                validator: (v: string) =>
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
                message: 'Invalid email format.',
            },
        },
        password: {type: String, required: false},
        role: {type: String, enum: ['USER', 'ADMIN'], default: 'USER'},

        enquiries: [EnquirySchema],

        usageCountThisMonth: {type: Number, default: 0},
        badges: [{type: String}],
        createdAt: {type: Date, default: Date.now},
    },
    {timestamps: true}
)

const User: Model<IUser> = models.User || model<IUser>('User', UserSchema)
export default User
