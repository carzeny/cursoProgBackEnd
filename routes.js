const express=require('express')
//funcion para escuchar las rutas
function escucha(app)
{ const router=express.Router()
  app.use('/api',router)
  router.get('/datos',async function(req,res,next){
    console.log("recibio peticion get en /api/datos")
    try {
        res.status(200).json({
            'Nombre':'Carlos Martinez Hernandez',
            'telefono':'3313511670',
            'email':'carlos.mh@tlajomulco.tecnm.mx'
        })
    } catch (error) {
        console.log(error)
    }
  })
}
//Exporta la funcion escucha
module.exports=escucha