import { useDispatch } from "react-redux";
import { deletetransaction,updatepocket } from "../redux/slices";

const handledelete=(id,amount)=>{

    const dispatch=useDispatch()
    dispatch(deletetransaction(id))
    dispatch(updatepocket(amount))

}

export default handledelete;