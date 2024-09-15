import express from 'express'
import router from './Modules/index.js'
const app = express()

app.listen(3000, () => {
    console.log('Listening at 3000')
})


app.use('/', router)
