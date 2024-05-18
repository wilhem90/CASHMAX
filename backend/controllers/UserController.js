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
            const userUid = 'BvBQc76Fncb9PWPRjZPmULttufa'; 
            try {
                const q = query(collection(db, 'users'), where('uid', '==', userUid));
                const snapshot = await getDocs(q);
                const users = snapshot.docs.map(doc => doc.data());
                console.log(users);
                res.status(200).json(users); // Responder com os dados do usuário
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
                res.status(500).json({ message: 'Erro ao buscar usuários', error });
            }
        }

}

module.exports = UserController