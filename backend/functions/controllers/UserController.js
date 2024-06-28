require('dotenv').config()


const acces_token = process.env.ACCESS_TOKEN
const { db, query, where,
    getDoc,
    getDocs,
    doc,
    collection,
    addDoc,
    deleteDoc,
    updateDoc, } = require("../models/firebase")

    
const UserController = {
    getUsers: async(req, res) => {
        try {
            const querySnapshot = await getDocs(collection(db, "users"))
            const users = querySnapshot.docs.map(doc => ({id: doc.id}))
            res.status(200).send(users)
        } catch (error) {
            res.status(500).send({
                error: 1,
                message: "O servidor não esta respondendo!"
            })
        }
    },


    getUserById: async(req, res) => {
        try {
            const userID = req.params.id
            const userRef = doc(db, "users", userID)
            const user = await getDoc(userRef)
            if (!user.exists()) {
                return res.status(404).send({
                    error: 0,
                    message: "Usuário não encontrado!"
                })
            }else {
                res.status(200).send({id: user.id, ...user.data()})
            }
        } catch (error) {
            res.status(500).send({
                error: 1,
                message: "O servidor não esta respondendo!"
            })
        }
    },

    createUser: async(req, res) => {
        try {
            const dataUser = {...req.body, created_at: new Date()}
            const userRef = await addDoc(collection(db, "users"), dataUser)
            res.status(201).send({
                error: 0,
                message: `Usuário criado com succeso.`,
            })
        } catch (error) {
            res.status(500).send({
                error: 1,
                message: "Servidor não esta respondendo!"
            })
        }
    },

    updateUser: async(req, res) => {
        const userId = req.params.id
        dataToupdate = req.body
        try {
            userRef = doc(db, "users", userId)
            await updateDoc(userRef, {
                cpf: dataToupdate.cor
            })
            res.status(200).send({
                error: 0,
                message: "O usuário foi atualizado com sucesso!",
            })
        } catch (error) {
            error: 1,
            res.status(400).send({
                error: 1,
                message: error
            })
        }       
    },

    deleteUser: async(req, res) => {
        const userId = req.params.id
        try {
            const userRef = doc(db, "users", userId)
            await deleteDoc(userRef)
            res.status(200).send({
                error: 0,
                message: "Usuário deletado com sucesso!"
            })
        } catch (error) {
            res.status(404).send({
                error: 0,
                message: "O usuário não foi encontrado!",
                error
            })
            
        }
    },


    
        testUsers: async (req, res) => {
            const url = 'https://api.dingconnect.com/api/V1/GetCountries'
            
        const options = {
            method: 'GET',
            headers: {
                cookie: '__cf_bm=J0XDibzqouWOtZDlX55FMgtrFL8N6.rwfLPEVUnBFY4-1718588421-1.0.1.1-7z.XWxeMQZgreqwqLByrx5TTjMfAgDnpdYxDy183NAzn1ZzrYLBZZwmX8YjaKPxwr.ZLCJRhG.zpAAlf2XyErA',
                Authorization: `Bearer ${acces_token}`
            }

        }

        try {
            await fetch(url, options)
            .then(response => response.json())
            .then(data => {
                res.status(200).send({
                    data
                })
            })
        } catch (error) {
            res.status(200).send({
                error
            })
        }

    }
}

module.exports = UserController