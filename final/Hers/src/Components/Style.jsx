import "./Style.css";
import styleData from "./style-data";
import Cart from "./Cart";

function Style({ onNav }) {

  const list = styleData.map((style) => {

    return (
      <li className="stylelist" key={style.id}>
        <div className="cardstyle">
          <h3 className="customtag">{style.customtag}</h3>

          <img className="style__pic" src={style.pic} alt={style.alt} />
          <span className="dressbrand">{style.dressbrand}</span>
          <span className="dressname">{style.dressname}</span>


          <span className="price">{style.price}</span>
          <span className="priceactual">{style.priceactual}</span>

          <a className="link-style"
            href="#Cart"
            onClick={onNav}
            data-page="Cart"

          >

            Add to cart <i className="gg-shopping-bag"></i> </a>
          <p className="text" >{style.text}</p><span className="heart">{style.heart}</span>
        </div>
      </li>
    );
  });

  return (
    <div className="style">



      <ul className="style__list">

        {list}
      </ul>

    </div>

  );

}

export default Style;