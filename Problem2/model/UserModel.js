const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        // check the length of phone number
        validate: {
          validator: function(v) {
            return v.length==10;
          },
          message: props => `${props.value} is not a valid phone number!`
        },
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',

        },
        coordinates: {
            type: [Number],
            required: true,
        },
    },
});

UserSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('User', UserSchema);
