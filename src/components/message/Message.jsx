import "./message.css"
import { format } from "timeago.js"

export default function Message({message,own}) {
  return (
    <div className={own ? "message own" : "message"}>
             <div className="messageTop">
         <img
          className="messageImg"
          src="https://ghantee.com/wp-content/uploads/2021/07/mallika-singh-radha-hd-phone-wallpaper.jpg"
          alt=""
        />
        <p className="messageText">{message.text}</p>
         </div>
         <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
