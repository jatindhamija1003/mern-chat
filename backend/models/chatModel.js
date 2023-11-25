const mongoose = require('mongoose')


const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, deafult: false },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        ggroupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        }
    },
    {
        timeStamps: true,
    }
)

const Chat = mongoose.model("Chat", chatModel)

module.exports = Chat