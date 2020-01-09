const axios = require("axios");
let searchterm = "London&client_id=";
const apikey = process.env.REACT_APP_API_KEY;

var query = 'https://api.unsplash.com/search/photos?query=' + searchterm + apikey;

module.exports ={
    
    findAllData:function(req,res){
       
        axios.get(query).then(data=>{
           console.log(data.data.results);
            return res.send(data.data)
        }).catch(err => res.status(422).json(err));
    }
}