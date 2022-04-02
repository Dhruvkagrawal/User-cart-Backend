const { Router } = require("express");
const router = Router();

const cart = require("../Models/cart.model");

router.get("/:name", async (req, res) => {
  console.log("working1");
  try {
    const carts = await cart.find({first_name:req.params.name}).lean().exec();
    return res.status(200).send(carts);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const carts = await cart.find({}).lean().exec();
    return res.status(200).send({ data: carts });
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
});

router.post("",async(req,res)=>{
  try {
    const carts = await cart.create(req.body)
    return res.status(200).send({ data: carts });
  } catch (error) {
    return res.status(500).send({ status: "Failed", message: error.message });
  }
})

module.exports = router;
