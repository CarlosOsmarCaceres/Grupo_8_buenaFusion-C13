const express = require("express");/* aca requiero exprees */
const router = express.Router()  /* acá guardo el metodo router que pertenece a express en una variable  */
const aControllers = require("../controllers/adminControllers") /* aca estamos en routes, quiero entrar en controllers */
const adminProductControllers = require("../controllers/adminProductControllers")
const uploadFile = require('../middlewares/uploadProduct');
const userSessionCheck = require("../middlewares/userSessionCheck");
const adminCheck = require("../middlewares/adminCheck");
const productCreateValidator = require('../validations/productCreateValidator');
const productEditValidator = require("../validations/productEditValidator");

// products
router.get("/", userSessionCheck, adminCheck, aControllers.index) 
router.get("/productos/agregar", userSessionCheck, adminCheck, adminProductControllers.productAdd)
router.get("/productos/editar/:id", userSessionCheck, adminCheck, adminProductControllers.productEdit)
router.get("/productos", userSessionCheck, adminCheck, adminProductControllers.productList)
router.post("/productos",uploadFile.single("image"),productCreateValidator , adminProductControllers.productCreate)
router.put("/productos/:id",uploadFile.single("image"),productEditValidator, adminProductControllers.productoEditar)
router.delete("/productos/:id", adminProductControllers.productDelete)



 module.exports= router