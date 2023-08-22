import photosStyle from './photosStyle.module.css'
import photos from "./PhotosInfo.json"; // Підключення JSON-даних

const Photos = () => {
    return (
        <div className={photosStyle.gallery}>
            {photos.map((item, index) => (
                <div className={photosStyle.item} key={index}>
                    <img className={photosStyle.image} src={item.image} alt={`photo-${index}`} />
                </div>
            ))}
        </div>
    );
}

export default Photos;