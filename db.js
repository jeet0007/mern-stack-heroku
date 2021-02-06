const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        })
        console.log("Connection to database success 👍")
    } catch (error) {
        console.log("Connection to database failed 🎇")
    }
}
module.exports = connectDb;