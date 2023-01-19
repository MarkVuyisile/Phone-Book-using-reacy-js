const PhoneBook = require("../models/mySchemas");
const savePhoneBook = (app) => {
  app.post("/save", async (req, res) => {
    try {
      let { Firstname, Number, Email } = req.body;
      let phoneBook = new PhoneBook({
        Firstname,
        Number,
        Email,
      });
      const phoneBookSave = await phoneBook.save();
      res.send({
        massage: "Succesfully Saved",
        phoneBookSave,
      });
    } catch (error) {
      console.log();
      res.send({ message: "Post Error" }).status(404);
    }
  });
  app.get("/Contact", async (req, res) => {
    try {
      const findPhoneBooks = await PhoneBook.find();
      res.send(findPhoneBooks);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });
  app.get("/phone/:id", async (req, res) => {
    try {
      const findPhoneBook = await PhoneBook.findById(req.body.id);
      res.send(findPhoneBook);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });

app.put('/update/:id', async (req,res) =>{
   const { id } = req.params;
   let { Firstname, Number, Email } = req.body;

   try {
 const update = await PhoneBook.findOneAndUpdate(req.body.id,
        { _id: `${id}` },
        {Firstname, Number, Email} )
        res.send({ message: "Succesfully Updated", update });
   } catch (error) {
      console.log({ message: "Editing Unsuccesfully" });
   }
})
app.put('/contact/:id',async(req,res)=>{
  try {
    const { id } = req.params;
    const FindContact = await PhoneBook.findByIdAndUpdate({id:id})
    
    res.send({ message: "Succesfully Updated", FindContact});
 } catch (error) {
    console.log({ message: "Deleting Unsuccesfully" })
    res.sendStatus(404)
 }
})

  app.delete('/delete/:id', async (req, res) =>{
   try {
      const { id } = req.params;
      const deleteContact = await PhoneBook.deleteOne({id:id})
      
      res.send({ message: "Succesfully Updated", deleteContact});
   } catch (error) {
      console.log({ message: "Deleting Unsuccesfully" })
      res.sendStatus(404)
   }
  });
};
module.exports = {savePhoneBook}