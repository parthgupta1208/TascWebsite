const router = require('express').Router();

const { createCoreMember, deleteCoreMember, updateCoreMemberByUid, getCoreMember } = require('../Controller/coreMembersControllers')


//create CoreMembers
router.post('/create', createCoreMember)


//get CoreMembers
router.get('/all', getCoreMember)

//delete CoreMembers
router.delete('/delete/:uid', deleteCoreMember)

//update coreMembers
router.put('/update/:uid', updateCoreMemberByUid)



module.exports = router;

