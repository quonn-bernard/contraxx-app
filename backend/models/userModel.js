import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Please add a first name']
    },
    lname: {
        type: String,
        required: [true, 'Please add a last name']
    },
    email: {
        type: String,
        required: [true, 'Please add a name']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema)