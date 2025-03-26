import mongoose from 'mongoose';

const NewsletterSubscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
});

const NewsletterSubscriber =
    mongoose.models.NewsletterSubscriber ||
    mongoose.model('NewsletterSubscriber', NewsletterSubscriberSchema);

export default NewsletterSubscriber;
