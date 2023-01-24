const PhoneBook = require("../models/mySchemas");
const savePhoneBook = (app) => {
  /*
  *Mark:
  *I think the route name should be "/save/contact".
  */
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
  
  /*
  *Mark:
  *It's always good to keep the route names all lowercase.
  *Bad naming, if you trying to get all contacts, then the route name should be "/contacts" or "/get/contacts".
  *"findPhoneBooks" should be "allContacts" or "contacts"
  */
  app.get("/Contact", async (req, res) => {
    try {
      const findPhoneBooks = await PhoneBook.find();
      res.send(findPhoneBooks);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });
  
  /*
  *Mark:
  *The route name should be "/contact/:id" or "/get/contact/:id".
  *"findPhoneBook" should be "contact"
  */
  app.get("/phone/:id", async (req, res) => {
    try {
      const findPhoneBook = await PhoneBook.findById(req.body.id);
      res.send(findPhoneBook);
    } catch (error) {
      console.log({ message: "Get Error" });
    }
  });
  
  /*
  *Mark:
  *I think it's better you name this route "/update/contact/:id"
  */
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
  
  /*
  *Mark:
  *Not sure whats supposed to happen on the function below...??
  */
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

  /*
  *Mark:
  *I think it's better you name this route "/delete/contact/:id" and the succesful response shouble something like "Contact deleted"
  */
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
