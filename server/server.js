const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

<<<<<<< Updated upstream
const app = express();
app.use(cors());
const port = 5000;
=======
const app = express()
app.use(cors())

app.use(express.json())

const port = 5000
>>>>>>> Stashed changes

dotenv.config()
const MONGODB_URL =
  'mongodb+srv://dathuynh1005:dathuynh1005@cluster0.hco7ct9.mongodb.net/PrintingApp'
mongoose.connect(MONGODB_URL).then(() => {
  console.log('Connected to MongoDB')
})

const SchemaMachine = mongoose.Schema(
  {
    Code: String,
    printerName: String,
    venue: Number,
    floor: Number,
    printerStatus: String,
    building: String,
  },
  {
    collection: 'PrintingMachine',
  }
)

const SchemaAccount = mongoose.Schema(
  {
    code: String,
    username: String,
    password: String,
  },
  {
    collection: 'Account',
  }
)

const SchemaHistory = mongoose.Schema(
  {
    fileName: String,
    uploadDate: String,
    fileType: String,
    fileSize: String,
    printerID: String,
    fileStatus: String,
  },
  {
    collection: 'histories',
  }
)

const DataBaseMachine = mongoose.model('DataMachine', SchemaMachine)
const DataBaseAccount = mongoose.model('DataAccount', SchemaAccount)
const DataBaseHistory = mongoose.model('DataHistory', SchemaHistory)

app.listen(port, () => {
  console.log('Server is running on ' + port)
})

app.get('/api/account', async (req, res) => {
  try {
    const account = await DataBaseAccount.find()
    res.json(account)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.post('/api/history', async (req, res) => {
  try {
    const newHistory = req.body
    const history = await DataBaseHistory.create(newHistory)
    res.json(history)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

app.get('/api/history', async (req, res) => {
  try {
    const history = await DataBaseHistory.find()
    res.json(history)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Route lấy danh sách máy in
app.get('/api/machine', async (req, res) => {
  try {
    const printers = await DataBaseMachine.find()
    res.json(printers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Route thêm máy in mới
app.post('/api/machine', async (req, res) => {
  try {
<<<<<<< Updated upstream
    const newPrinter = req.body;
    const printer = await DataBaseMachine.create(newPrinter);
    res.json(printer);
=======
    console.log(req.body)
    const newPrinter = req.body
    const printer = await DataBaseMachine.create(newPrinter)
    res.json(printer)
>>>>>>> Stashed changes
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Route cập nhật thông tin máy in
app.put('/api/machine/:Code', async (req, res) => {
  try {
    const Code = req.params.Code
    const updatedPrinter = req.body
    const printer = await DataBaseMachine.findOneAndUpdate(
      {
        Code: Code,
      },
      updatedPrinter,
      { new: true }
    )
    res.json(printer)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// Route xóa máy in
app.delete('/api/machine/:Code', async (req, res) => {
  try {
<<<<<<< Updated upstream
    const Code = req.params.Code;
    await DataBase.findOneAndDelete({
=======
    const Code = req.params.Code
    await DataBaseMachine.findOneAndDelete({
>>>>>>> Stashed changes
      Code: Code,
    })
    res.json({ message: 'Printer deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal server error' })
  }
})
