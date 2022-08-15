import { useParams } from "react-router-dom";


export default function PostDetailPage(){
    const {id} = useParams()
    console.log(id)

    return (
        <h1>Post Detail</h1>
    )
}