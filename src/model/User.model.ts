import {Schema ,Document} from "mongoose"

export interface Message extends Document{
    content :string;
    createdAt :Date
}

const MessageSchema : Schema<Message> = new Schema({
    content :{type :String, required :true},
    createdAt :{type :Date, required :true,default :Date.now}
})

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    isverified: boolean;
    messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
    username: { type: String, required: [true, 'Username is required'],trim: true, unique: true },
    email: { type: String, required: [true, 'Email is required'],trim: true, unique: true },
    password: { type: String, required: [true, 'Password is required'],trim: true },
    verifyCode: { type: String, required: [true, 'Verify code is required'],trim: true },
    verifyCodeExpiry: { type: Date, required: [true, 'Verify code expiry is required'] },
    isAcceptingMessage: { type: Boolean, required: [true, 'Accepting message status is required'] },
    isverified: { type: Boolean, required: [true, 'Verification status is required'], default: false },
    messages: { type: [MessageSchema]}
})
  