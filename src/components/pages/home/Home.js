import homeStyle from './homeStyle.module.css'

const Home = () => {
    return (
        <div className={homeStyle.homeContainer}>
            <h2 className={homeStyle.title}>Home</h2>
            <div className={homeStyle.imageContainer}>
                <img className={homeStyle.image}
                     src={"https://c4.wallpaperflare.com/wallpaper/101/380/61/cat-animals-bokeh-cute-wallpaper-preview.jpg"}
                     alt={"home-img-cat"}
                />
            </div>

            <div className={homeStyle.text}>
                <p>
                    Integer quis fermentum purus. Nullam tortor mauris, mollis a tincidunt sit amet, luctus ut ante. Nullam
                    cursus nunc vel ipsum interdum, vitae rutrum ex varius. Aenean a orci ut orci luctus sagittis.
                    Pellentesque ac iaculis sem, ut feugiat lectus. Donec non placerat orci. Donec ligula dolor, tincidunt a
                    tincidunt vitae, venenatis eget odio.                </p>
                <p>
                    Morbi vitae nulla mauris. Nam vel rhoncus nibh, quis egestas libero. Vestibulum venenatis velit sed
                    rhoncus suscipit. Praesent eget volutpat lectus. Fusce eget orci at nibh dictum convallis eu ut nulla.
                    Sed interdum risus quis ultricies congue. Ut feugiat, sapien vel mollis venenatis, diam diam blandit
                    velit, eget tincidunt urna metus sed nisi. Aliquam erat volutpat. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Integer sed placerat mi.                </p>
                <p>
                    In sollicitudin elit vel eros scelerisque suscipit. Nullam eget gravida nibh. Aenean vitae ante id mi
                    luctus ultrices. Cras ut porttitor mauris. Phasellus aliquam neque euismod, maximus eros a, porttitor
                    urna. Aliquam aliquam metus in nulla tempor hendrerit. In laoreet leo ut eros efficitur mollis. Ut
                    pulvinar, purus ac imperdiet consectetur, orci nisl pellentesque quam, id luctus leo ligula et est.
                    Praesent blandit tortor eget lorem malesuada, non ornare ipsum consectetur.                </p>
            </div>
        </div>
    );
};

export default Home;