const express = require("express");/* aca requiero exprees */
const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const usuarioController = require("../controllers/userController")
const uploadFile = require('../middlewares/uploadAvatar');
const userInSessionCheck = require ('../middlewares/userInSessionCheck');



/* GET - Renderiza vista login */
router.get("/", userInSessionCheck, usuarioController.logeo) 
router.post("/", usuarioController.procesoLogin )

/* GET - Renderiza vista registro */
router.get("/registro", userInSessionCheck, usuarioController.registro) 
/* POST - Crea un nuevo registro */
router.post("/registro", uploadFile.single("avatar") ,usuarioController.procesoRegistro) /* ("avatar") el nombre avatar viene de la caja examinar imagenes */ 
/* Ruta donde se elimina la Session */
router.get("/signOff", usuarioController.singOff)


module.exports= router;