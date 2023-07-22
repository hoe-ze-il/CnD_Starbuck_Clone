import data from "../../Data/starbucks_data.json"
import { useParams } from "react-router-dom"

function Customize() {
    const { item_id } = useParams()
    const itemId = parseInt(item_id)

    let item_name = ''
    let item_image = ''
    for (const item of data) {
        if (item.item_id === itemId) {
            item_name = item.item_name
            item_image = '.' + item.item_img_path
        }

    }

    return (
        <div>
            <h2>{item_name}</h2>
            <img src={item_image} />
        </div>
    )
}

export default Customize