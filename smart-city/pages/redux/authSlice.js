import { PermPhoneMsgOutlined } from "@mui/icons-material";
import {createSlice,  createAsyncThunk} from "@reduxjs/toolkit"

const initialState ={
    msg :"",
    user:"",
    token:"",
    loading:false,
    error:""
}

export const signUpUser = createAsyncThunk("signUp",async()=>{
    const res =await fetch ("dddddddddddd",{

        method:"post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    
    })
    return await res.json();
})

export const signInUser = createAsyncThunk("signUp",async()=>{
    const res =await fetch ("https://smatcity.000webhostapp.com/api/authUser/login",{

        method:"post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    
    })
    return await res.json();
})

 const authSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

        addToken : (state,action)=>{
            state.token = localStorage.getItem("token")
        },
        addUser : (state,action)=>{
            state.token = localStorage.getItem("user")
        },
        Logout : (state,action)=>{
            state.token = null ;
            localStorage.clear();
        }

    },
    extraReducers:{
        [signUpUser.pending]:(state,action)=>{
            state.loading = true
        },
        [signUpUser.fulfilled]:(state,{payload:{error,msg}})=>{
            state.loading = false;

            if(error){
                state.error  =error;
            }else{
                state.msg = msg;
                state.token = token
                state.user = user;

                localStorage.setItem("msg",msg)
                localStorage.setItem("user",JSON.stringify(user ))

                localStorage.setItem("token",token)

            }
            if(error){
                state.error = error
            }
            else{
                state.msg = msg
            }
        },  [signUpUser.rejected]:(state,action)=>{
            state.loading = true
        },
        [signUpUser.pending]:(state,action)=>{
            state.loading = true
        },
        [signUpUser.fulfilled]:(state,{payload:{error,msg}})=>{
            state.loading = false;
            if(error){
                state.error = error
            }
            else{
                state.msg = msg
            }
        },  [signUpUser.rejected]:(state,action)=>{
            state.loading = true
        }

    }
})
export const {addToken,addUser,Logout} = authSlice
export default authSlice.reducer