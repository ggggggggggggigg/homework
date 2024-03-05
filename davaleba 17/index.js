import express from 'express'
import mongoose from 'mongoose'
import {Url} from './urls.js'

const app = express()

app.get('/urls', async (req, res) => {
    const urls = await Url.find()
    res.json({ urls})
})

app.post('/urls', async (req, res) => {
    const newurls = req.body

    const newurl = new Url(newurls)
    await newurl.save()

    res.status(201).json(newurl)
})

app.patch('/urls/:id', async (req, res) => {
    const params = req.params
    const updatedvalues = req.body

    const updatedurls = await findByIdAndUqdate(params.id, updatedvalues, {
        new: true
    })

    res.json(updatedurls)
})

app.listen(3000, async () => {
  console.log('server running')
  await mongoose.connect('mongodb://127.0.0.1:27017/demo')
})
