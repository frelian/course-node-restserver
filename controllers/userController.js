import { response } from 'express';

const getUsers = (req, res = response) => {

    const { q, name = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - getUsers',
        q,
        name,
        apikey, 
        page, 
        limit
    })
}

const postUsers = (req, res = response) => {

    const { name, age } = req.body;

    res.json({
        msg: 'post API - postUsers',
        name, 
        age
    })
}

const putUsers = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - putUsers',
        id
    })
}

const patchUsers = (req, res = response) => {
    res.json({
        msg: 'patch API - patchUsers'
    })
}

const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'delete API - deleteUsers'
    })
}

export {
    getUsers,
    postUsers,
    putUsers,
    patchUsers,
    deleteUsers,
}