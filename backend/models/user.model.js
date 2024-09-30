const mongoose = require('mongoose');

const userShema = mongoose.Schema(
    {
        name:{
            type: String,
            required : true
        },
        surname:{
            type: String,
            required: true
        },
        pseudo:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
    );

    module.exports = mongoose.model('user', userShema);