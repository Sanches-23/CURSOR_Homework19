import photosStyle from './photosStyle.module.css'
import photos from "./PhotosInfo.json"; // Підключення JSON-даних

const Photos = () => {
    return (
        // <>
        //     <h1>Photosssssssssssss!</h1>
        //     <div className={photosStyle.item}>
        //         <img src="https://picsum.photos/250/250?random=1" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=2" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=3" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=4" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=5" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=6" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=7" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=8" alt="random image"/>
        //         <img src="https://picsum.photos/250/250?random=9" alt="random image"/>
        //     </div>
        // </>
        // <>
        //     <div className={photosStyle.photos}>
        //         <h2 className={photosStyle.title}>Photos</h2>
        //         <div className={photosStyle.wrapper}>
        //             {data.map((e) => (
        //                 <div className={photosStyle.card}>
        //                     <img className={photosStyle.imgBlock} src={e.img} alt="" />
        //                     <p>{e.text}</p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </>
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