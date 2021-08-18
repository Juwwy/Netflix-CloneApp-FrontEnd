import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                        
                    </select>
                </div>
            )}
            <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
             alt=""/>

            
             <div className="info">
                 <img src="https://i2.wp.com/www.herald.ng/wp-content/uploads/2020/11/Banner.jpg?resize=750%2C430&ssl=1" 
                 alt=""/>

                 <span classname="desc">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rem magni provident consequuntur sunt
                      nesciunt, possimus totam? Eveniet eius
                      rem perspiciatis! Explicabo voluptatibus tempora non aliquid deleniti omnis rerum soluta!
                 </span>
                 <div className="buttons">
                     <button className="play">
                         <PlayArrow/>
                         <span>Play</span>
                     </button>
                     <button className="more">
                         <InfoOutlined/>
                         <span>Info</span>
                     </button>
                 </div>
             </div>
        </div>
    )
}
