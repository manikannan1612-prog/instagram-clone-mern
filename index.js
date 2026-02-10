const express = require("express");
const app=express();

const cors = require('cors');
app.use(cors({
  origin: true, 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
})); 
app.use(express.json());
const port=8000; 


const mongoose = require('mongoose');


const mongoURI = process.env.MONGO_URI || "mongodb+srv://manikannan1612:58087745@instaclonecluster.0ztumsp.mongodb.net/instaclone";

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("Connection failed:", err));

app.get("/Users",(req,res)=>{
    return res.send()
});

const postSchema = new mongoose.Schema({
  user: {
    username: String,
    profile_pic: String,
  },
  image: String,
  likes: { type: Number, default: 0 },
  caption: String,
  comments:[
  {
    user:String,
    comment:String,
  }
  ],
  timestamp :String

});

const Post = mongoose.model('Post', postSchema);

app.get('/posts',async(req,res)=>{
  try{
  const allPosts=await Post.find();
  res.status(200).json(allPosts);
  }
  catch(err){
    res.status(500).json({message:"fetching posts",error:err})
  }
});
app.post('/posts',async(req,res)=>{
  try{
    const newpost= new Post({
     user: {
        username: req.body.user.username,
        profile_pic: req.body.user.profile_pic
      },
      image: req.body.image,
      caption: req.body.caption
});
const savedPost=await(newpost).save();
res.status(201).json(savedPost)
  }
    catch(err){
    res.status(500).json({message:"failed to post",error:err})
  }

  
});


const profileSchema=new mongoose.Schema({
  profile:{
  user:{
    username:[String],
    profile_pic:String,
  }
},



})

const Profile=mongoose.model('Profile',profileSchema,'profile')

app.get('/Profile',async(req,res)=>{
  try{
    const data=await Profile.findOne();
    res.status(200).json(data.profile);
  }
    catch(err){
      res.status(500).json({message:"failed to fetch profile",error:err});
      
    }

  }
);
app.put('/Profile',async(req,res)=>{
    const newData=req.body;
    await Profile.findOneAndUpdate({},{profile:newData})
  
});

const followerSchema=new mongoose.Schema({
  username:String,
  profile_pic:String

})

const Followers= mongoose.model('Followers',followerSchema,'followers');
app.get('/followers',async(req,res)=>{
  try{
    const allFollower=await Followers.find();
    res.status(200).json(allFollower);
  }
  catch(err){
    res.status(500).json({message:"fetchig followers",error:err})
  }
});
app.delete('/followers/:_id', async(req,res)=>{
  try{
    const {_id}=req.params;
    await Followers.findByIdAndDelete(_id);
    res.status(200).json({message:"deleted sucessfully"})
  }
  catch(err){
    res.status(500).json({message:"pending delete",error:err})
  }
});
app.post('/followers',async(req,res)=>{
  
    const newFollower=new Followers({
      username:req.body.username,
      profile_pic:req.body.profile_pic
    });
    await newFollower.save();
    res.send("save")
    
  
  
  });





const suggestionSchema=new mongoose.Schema({
  username:String,
  profile_pic:String,

});
const Suggestions=mongoose.model('Suggestions',suggestionSchema,'suggestions');
app.get('/suggestions',async(req,res)=>{
  try{
    const allSuggest=await Suggestions.find();
    res.status(200).json(allSuggest);

  }
  catch(err){
    res.status(500).json({message:"fetching suggestions",err})
  }
});
const storySchema=new mongoose.Schema({
  user:{
     username:String,
  profile_pic:String,

  },
  image:String,
  

});
const Story=mongoose.model('stories',storySchema);
app.get('/stories',async(req,res)=>{
  try{
    const allStories=await Story.find();
    res.json(allStories);
  }
  catch(err){
    res.status(500).json({message:"fetching messages",error:err})
  }
});

const messageSchema=new mongoose.Schema({
  username:String,
  profile_pic:String,
  text:String,
  timestamp:Date,
});

const Messages=mongoose.model('Messages',messageSchema,'messages');

app.get('/messages',async(req,res)=>{
  try{
    const allMessages=await Messages.find();
    res.status(200).json(allMessages);
  }
  catch(err){
    res.status(500).json({message:"fetching messages",error:err})
  }
});



app.get('/api/logo', (req, res) => {
  res.json({ 
    logoUrl: "https://res.cloudinary.com/dmx9kxose/image/upload/v1770206398/instagramlogonew1_prfy71.png" 
  });
});


const PORT=process.env.PORT ||8000;
app.listen(PORT,()=>{
    console.log(`app is ruuning on port${PORT}`);

});

module.exports = app;