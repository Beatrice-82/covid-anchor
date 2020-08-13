/**
 * This is a handler 
 * @param {*} req 
 * @param {*} res 
 */

const handleCreateStory= (req,res)=>{
    const data=req.body;
    data.id=Math.random().toString();

    res.json(data);
};

module.exports=handleCreateStory;