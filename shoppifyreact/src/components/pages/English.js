import React from 'react';
import '../../App.css'; 
import images from '../images';
import '../../components/English.css'

export default function English() {
    return (
    <>
      <div className="product">
    <div className="First_row">
        <div className="box">

                <img src={images.mitv} />
                <div className="amount">
                    <span className="dollar">$</span>
                    <span className="price">15.62</span>
                </div>
                <p className="mitv">Mi TV Stick</p>
                <div className="addres_data">
                    <p id="austin">Austin, Texas</p>
                    <p>Today</p>
                </div>
      
        </div>
        <div className="box">
            <img src={images.xbox} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">214.20</span>
            </div>
            <p className="xbox"> xbox one s</p>
            <div className="addres_data">
                <p id="san4">San Antonio, Texas</p>
                <p> JUL 27</p>
            </div>
        </div>
        <div className="box">
            <img src={images.fridge} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">312.27</span>
            </div>
            <p className="fridge"> Refrigerator</p>
            <div className="addres_data">
                <p id="houst">Houston, Texas</p>
                <p> Today </p>
            </div>
        </div>
        <div className="box">
            <img src={images.mitsu} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">3000.96</span>
            </div>
            <p className="mitsu"> Mitsubishi Pajero (2012) </p>
            <div className="addres_data">
                <p id="dal">Dallas, Texas</p>
                <p> Today </p>
            </div>
        </div>
    </div>



    <div className="First_row">
        <div className="box">
            <img src={images.jeans} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">3.57</span>
            </div>
            <p className="jeans"> Black Jeans for man</p>
            <div className="addres_data">
                <p id="fort">Fort Worth, Texas</p>
                <p> DEC 24 </p>
            </div>
        </div>
        <div className="box">
            <img src={images.board} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">13.39</span>
            </div>
            <p className="board"> Pricise corrom board</p>
            <div className="addres_data">
                <p id="austin2">Austin, Texas</p>
                <p> JAN 29 </p>
            </div>
        </div>
        <div className="box">
            <img src={images.earbuds} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">16.96</span>
            </div>
            <p className="buds"> CrossBeat Torq Buds</p>
            <div className="addres_data">
                <p id="fort2">Fort Worth, Texas</p>
                <p> Today </p>
            </div>
        </div>
        <div className="box">
            <img src={images.camera} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">174.04</span>
            </div>
            <p className="camera"> Nikon D7000 DSLR camera </p>
            <div className="addres_data">
                <p id="austin3">Austin, Texas</p>
                <p> FEB 02 </p>
            </div>
        </div>
    </div>




    <div className="First_row">
        <div className="box">
            <img src={images.jacket} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">1.78</span>
            </div>
            <p className="jacket"> Black jacket</p>
            <div className="addres_data">
                <p id="dal2">Dallas, Texas</p>
                <p> FEB 11 </p>
            </div>
        </div>
        <div className="box">
            <img src={images.washingmachine} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">15.17</span>
            </div>
            <p id="washing"> LG Washing machine </p>
            <div className="addres_data">
                <p id="houst2">Houston, Texas</p>
                <p> Today </p>
            </div>
        </div>
        <div className="box">
            <img src={images.shoes} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">3.12</span>
            </div>
            <p id="shoes"> Running Shoe (athletes) </p>
            <div className="addres_data">
                <p id="fort3">Fort Worth, Texas</p>
                <p> FEB 25 </p>
            </div>
        </div>
        <div className="box">
            <img src={images.sofa} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">156.19</span>
            </div>
            <p id="sofa"> Antique premium teak wood Sofa set </p>
            <div className="addres_data">
                <p id="fort4">Fort Worth, Texas</p>
                <p> Today </p>
            </div>
        </div>
    </div>



    <div className="First_row">
        <div className="box">
            <img src={images.hyun} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">1494.92</span>
            </div>
            <p id="hyun"> Hyundai I20 (2010)</p>
            <div className="addres_data">
                <p id="san2">San Antonio, Texas</p>
                <p> JAN 14 </p>
            </div>
        </div>
        <div className="box">
            <img src={images.table} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">26.77</span>
            </div>
            <p id="table"> dining table</p>
            <div className="addres_data">
                <p id="san5">San Antonio, Texas</p>
                <p> JUN 10</p>
            </div>
        </div>
        <div className="box">
            <img src={images.watch} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">5.35</span>
            </div>
            <p id="watch"> Mens fastrack watch </p>
            <div className="addres_data">
                <p id="fort5">Fort Worth, Texas</p>
                <p> JAN 7 </p>
            </div>
        </div>
        <div className="box">
            <img src={images.dumbbell} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">15.62</span>
            </div>
            <p id="dumbells"> Pure Metal Dumbbells</p>
            <div className="addres_data">
                <p id="houst3">Houston, Texas</p>
                <p> Today </p>
            </div>
        </div>
    </div>

</div>
      
    </>
   );
}