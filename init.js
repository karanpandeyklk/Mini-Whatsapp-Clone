const mongoose=require("mongoose");
const Chat=require("./models/chat.js");
main()
.then(()=>{console.log("connection successfull ");}).catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let chats=[
    {
        from :"neha",
        to:"pretti",
        msg:"kya kar rhi ho",
        created_at:new Date(),
    },{
        from :"rohit",
        to:"mohit",
        msg:"kab chalega college",
        created_at:new Date(),
    },{
        from :"amit",
        to:"karan",
        msg:"kya papa kaise  hai ",
        created_at:new Date(),
    }
    ,{
        from:"khushi",
        to:"raj",
        msg:"i miss you ",
        created_at:new Date(),
    }
];
Chat.insertMany(chats);