const username=process.env.myusername;
const password=process.env.mypassword;

console.log("username",username,"password",password)

if(!username||!password){
    throw new Error("MongoDB Wrong Crediantial")
}

export const connectString=`mongodb+srv://${username}:${password}@cluster0.ybalpyj.mongodb.net/dfordaked?retryWrites=true&w=majority&appName=Cluster0`;

