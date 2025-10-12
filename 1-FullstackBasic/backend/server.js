import express from "express";
const app=express();

app.get("/",(req,res)=>{
  res.send("server is ready");

});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programmer Joke",
      content: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      id: 2,
      title: "Binary Joke",
      content: "There are 10 types of people in the world: those who understand binary and those who don’t."
    },
    {
      id: 3,
      title: "Algorithm Joke",
      content: "Why did the algorithm cross the road? To improve its running time."
    },
    {
      id: 4,
      title: "Debugging Joke",
      content: "Debugging is like being the detective in a crime movie where you are also the murderer."
    },
    {
      id: 5,
      title: "Hardware Joke",
      content: "I would tell you a joke about UDP, but you might not get it."
    }
  ];

  res.send(jokes);
});


const port=process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`server at http://localhost:${port}`);

})