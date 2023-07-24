import { DivCStyled } from "../../UI/styledComponents/StyledComponents";

function Card() {
    return (
        <DivCStyled>
            <div className="card-img">
                <img src="https://www.dailypaws.com/thmb/u1N0WaaUVnCWEKcyUO-1OrmcwHQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-cat-peeking-over-table-908714708-2000-133980624c474a448167c228b4cecddc.jpg" alt="" />
            </div>
            <div className="card-content">
                <h3>holi</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime sapiente illum amet delectus beatae officiis debitis ratione? Sint, voluptas quae.</p>
            </div>
        </DivCStyled>
    )
}

export default Card;
