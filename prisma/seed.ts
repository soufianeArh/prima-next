import {PrismaClient} from "@prisma/client"
const prisma=new PrismaClient();
async function seed(){
      return await prisma.user.createMany({
            data:[
                  {name:"soufiane2", email:"example@example2.com"},
                  {name:"soufiane3", email:"example1@example3.com"},
            ]
      })
}
async function runSeed(){
      try{
           await seed();
           console.log("seed sent")
           prisma.$disconnect()

      }catch(err){
            console.log("seed failed", err)
      }
}
runSeed()