const mongoose = require('mongoose');
const { Schema } = mongoose; // const Scheme = mongoose.Schema; 

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema); // equivalent to 'use users' in Mongodb
                                    // 2 arguments means load scheme to mongoose
                                    // 1 argument mongoose.model('users') means fetch scheme fom moongose