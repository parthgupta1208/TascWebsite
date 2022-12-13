const CoreMembers = require('../Modals/CoreMembers')
const { v4: uuidv4 } = require('uuid');


//create CoreMembers
const createCoreMember = async (req, res) => {
    const uid = await uuidv4();
    const newCoreMember = await new CoreMembers({
        uid: uid,
        desc: req.body.desc,
        name: req.body.name,
        usn: req.body.usn,
        image: req.body.image,
    })
    try {
        const savedCoreMembers = await newCoreMember.save()
        res.status(200).json(savedCoreMembers)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get CoreMembers

const getCoreMember = async (req, res) => {
    try {
        const coreMembers = await CoreMembers.find()
        res.status(200).json(coreMembers)
    } catch (error) {
        res.status(500).json(error)
    }
}



//delete CoreMembers

const deleteCoreMember = async (req, res) => {
    try {
        const CoreMembers = await CoreMembers.findOne({ uid: req.params.uid })
        if (CoreMembers) {
            await CoreMembers.delete()
            res.status(200).json("CoreMembers has been deleted")
        } else {
            res.status(200).json("CoreMembers not found")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

//update coreMembers

const updateCoreMemberByUid = async (req, res) => {
    try {
        const CoreMembers = await CoreMembers.findOne({ uid: req.params.uid })

        if (CoreMembers) {
            CoreMembers.name = req.body.name
            CoreMembers.desc = req.body.desc
            CoreMembers.usn = req.body.usn
            CoreMembers.image = req.body.image
            await CoreMembers.save()
            res.status(200).json(CoreMembers)
        } else {
            res.status(200).json("CoreMembers not found")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = {createCoreMember,getCoreMember, deleteCoreMember,updateCoreMemberByUid}