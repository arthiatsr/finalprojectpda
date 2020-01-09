import axios from "axios";




export default {
  
  getAuth: function(email,password) {
     return axios.get("/api/auth/" + email + "/" + password  );

  },
  
  saveAuth: function(authData) {
    console.log("authData", authData)
    return axios.post("/api/auth", authData);
  },

  findData:function(){
    console.log("i ma in find data" )
    return axios.get("/api/test/new");
  }
};
