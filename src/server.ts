import app from "./app"

const start = ()=>{
      app.listen(5551, ()=>{
            console.log("app listening on 5551")
      } )
}
start();
