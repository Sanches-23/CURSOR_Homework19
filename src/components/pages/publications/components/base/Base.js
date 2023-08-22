import baseStyle from  '../../components/styles/Base.module.css'

import checkIcon from '../assets/icons/check-badge.svg'
import commIcon from '../assets/icons/notification.svg'
import retweetIcon from '../assets/icons/retweet-2-svgrepo-com.svg'
import likeIcon from '../assets/icons/heart-svgrepo-com.svg'
import loadIcon from '../assets/icons/download-svgrepo-com.svg'

const Base = ({data}) => {

    return (
        <div className={baseStyle.container}>
            <div className={baseStyle.card}>
                <div className={baseStyle.postContent}>
                    <img src={data.author.photo} alt={data.author.name} />
                    <h2>{data.author.name}</h2>
                    <img className={baseStyle.icons} src={checkIcon} alt={"f"} style={{fill: '#ff0000' }}/>
                    <span className={baseStyle.postContentSecondary}>{data.author.nickname}</span>
                    <span className={baseStyle.postContentSecondary}>{data.date}</span>
                </div>
                <div className={baseStyle.content}>
                    <p>{data.content}</p>
                    <img className={baseStyle.postImage} src={data.image} alt="Post" />
                    <div className={baseStyle.postInfo}>
                        <span>
                            <img className={baseStyle.icons} src={commIcon} alt={"f"} />
                            {data.comments}
                        </span>
                        <span>
                            <img className={baseStyle.icons} src={retweetIcon} alt={"f"} />
                            {data.retweets}
                        </span>
                        <span>
                            <img className={baseStyle.icons} src={likeIcon} alt={"f"} />
                            {data.likes}
                        </span>
                        <span>
                            <img className={baseStyle.icons} src={loadIcon} alt={"f"} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Base;