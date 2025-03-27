import {Schema} from 'mongoose'
import {IVoiceNote, VoiceNoteSchema} from './VoiceNote'

export interface IEnquiry {
    voiceNotes: IVoiceNote[]
    createdAt: Date
    responded: boolean
    response?: string
    originalMessage?: string
    extra?: {
        name?: string
        email?: string
        company?: string
        phone?: string
        budget?: string
        website?: string
    }
}

const voiceNotesLimit = (val: IVoiceNote[]) => val.length <= 3

export const EnquirySchema = new Schema<IEnquiry>(
    {
        voiceNotes: {
            type: [VoiceNoteSchema],
            default: [],
            validate: [voiceNotesLimit, 'Maximum of 3 voice notes per enquiry allowed.'],
        },
        createdAt: {type: Date, default: Date.now},
        responded: {type: Boolean, default: false},
        response: {type: String},
        originalMessage: {type: String},
        extra: {
            name: {type: String},
            email: {
                type: String,
                validate: {
                    validator: (v: string) =>
                        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
                    message: 'Invalid email format.',
                },
            },
            company: {type: String},
            phone: {type: String},
            budget: {type: String},
            website: {type: String},
        },
    },
    {
        _id: false,
        timestamps: true,
    }
)

// import mongoose, {Document, Model, model, models, Schema} from 'mongoose'
// import {IVoiceNote, VoiceNoteSchema} from './VoiceNote'
//
// export interface IEnquiry extends Document {
//     _id: mongoose.Types.ObjectId
//     voiceNotes: IVoiceNote[]
//     createdAt: Date
//     responded: boolean
//     response?: string
//     originalMessage?: string
//     extra?: {
//         name?: string
//         email?: string
//         company?: string
//         phone?: string
//         budget?: string
//         website?: string
//     }
// }
//
// const voiceNotesLimit = (val: IVoiceNote[]) => val.length <= 3
//
// export const EnquirySchema: Schema<IEnquiry> = new Schema(
//     {
//         voiceNotes: {
//             type: [VoiceNoteSchema],
//             default: [],
//             validate: [voiceNotesLimit, 'Maximum of 3 voice notes per enquiry allowed.'],
//         },
//         createdAt: {type: Date, default: Date.now},
//         responded: {type: Boolean, default: false},
//         response: {type: String},
//         originalMessage: {type: String},
//         extra: {
//             name: {type: String},
//             email: {
//                 type: String,
//                 validate: {
//                     validator: function (v: string) {
//                         return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
//                     },
//                     message: 'Invalid email format. Please provide a valid email address.',
//                 },
//             },
//             company: {type: String},
//             phone: {type: String},
//             budget: {type: String},
//             website: {type: String},
//         },
//     },
//     {
//         timestamps: true,
//     }
// )
//
// const Enquiry: Model<IEnquiry> = models.Enquiry || model<IEnquiry>('Enquiry', EnquirySchema)
// export default Enquiry
