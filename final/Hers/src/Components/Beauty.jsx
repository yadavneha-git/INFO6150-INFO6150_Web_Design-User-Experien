import { useRef } from "react";
import "./Beauty.css";

import Modal from "./Modal";

function Beauty() {
    const subscribeRef = useRef(null);

    return (

        <div className='formbox'>
            <p>“We, makeup artists, are a unique bunch of people; we don’t have the classic brain, the classic training, but we’re creative, so we figure it out.” – Bobbi Brown</p>
            <div className="cards">



                <div className="card">
                    <div className="image-box">
                        <img className="pic-beauty" src={require("../Images/beauty2.jpg")} alt="test" />
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Bossy Beauties</h1>
                            </div>
                            <div className="card-body">
                                <p>
                                    You can be a woman who wants to look good and still stand up for the equality of women.” – Meghan Markle
                                </p>
                            </div>
                        </div>

                        <div className="button">
                            <Modal />
                            {/* <button>
                                    <a>Subscribe for membership{Modal}</a>
                                </button> */}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="pic-beauty" src={require("../Images/beauty3.jpg")} alt="test" />
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Supreme Sparkle</h1>
                            </div>
                            <div className="card-body">
                                <p>
                                    I do put on a little makeup every day because it helps me feel put together. Mascara is essential.” – Emma Stone
                                </p>
                            </div>
                        </div>

                        <div className="button">
                            <Modal />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="pic-beauty" src={require("../Images/beauty4.jpg")} alt="test" />
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Generous Glam</h1>
                            </div>
                            <div className="card-body">
                                <p>
                                    “If she likes makeup, let her wear it. If she likes fashion, let her dress up. But if she doesn’t like either, let her be.” – Chimamanda Ngozi Adichie
                                </p>
                            </div>
                        </div>

                        <div className="button">
                            <Modal />
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="image-box">
                        <img className="pic-beauty" src={require("../Images/modal1.jpg")} alt="test" />
                        <div className="card-content">
                            <div className="card-title">
                                <h1>Beauty Basics</h1>
                            </div>
                            <div className="card-body">
                                <p>
                                    “Makeup is the finishing touch, the final accessory.” – Marc Jacobs.
                                </p>
                            </div>
                        </div>

                        <div className="button">
                            <Modal />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );


}

export default Beauty;