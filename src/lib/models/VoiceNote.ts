import {Schema} from 'mongoose'

export interface IVoiceNote {
    audioURL: string
    transcript: string
    createdAt: Date
}

export const VoiceNoteSchema = new Schema<IVoiceNote>(
    {
        audioURL: {type: String, required: true},
        transcript: {type: String, required: true},
        createdAt: {type: Date, default: Date.now},
    },
    {
        _id: false,
        timestamps: false,
    }
)

// import mongoose, {Document, Model, model, models, Schema} from 'mongoose';
//
// export interface IVoiceNote extends Document {
//     userId?: mongoose.Types.ObjectId;
//     audioURL: string;
//     transcript: string;
//     createdAt: Date
//     temporaryUserId?: string;
// }
//
// export const VoiceNoteSchema: Schema<IVoiceNote> = new Schema({
//         audioURL: {type: String, required: true},
//         transcript: {type: String, required: true},
//         createdAt: { type: Date, default: Date.now },
//     },
//     {timestamps: true}
// );
//
// const VoiceNote: Model<IVoiceNote> = models.VoiceNote || model<IVoiceNote>('VoiceNote', VoiceNoteSchema);
//
// export default VoiceNote;
