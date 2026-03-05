const { Router } = require("express");
const ProductController = require("./product.controller");
const { rotaProtegida } = require("../../shared/middlewares/token.middleware");
const { verifyAccess } = require("../../shared/middlewares/access.middleware");

const router = Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);

router.post("/", rotaProtegida, verifyAccess, ProductController.create);
router.put("/:id", rotaProtegida, verifyAccess, ProductController.update);
router.delete("/:id", rotaProtegida, verifyAccess, ProductController.delete);

router.put("/:id/tamanhos", rotaProtegida, ProductController.atualizarTamanhos);

router.put("/:id/cores", rotaProtegida, ProductController.atualizarCores);

module.exports = router;