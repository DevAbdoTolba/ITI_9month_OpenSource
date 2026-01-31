const notFound = (req,res,next)=>{
    res.status(404).json({message: "Looks like you are in need of some rani!"});
    next();
};

module.exports = notFound;