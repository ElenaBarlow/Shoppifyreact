import React from 'react';
import '../../App.css'; 
import images from '../images';
import '../../components/Arabic.css'

export default function Arabic() {
    return (
    <>
      <div className="product">
    <div className="First_row">
        <div className="box">

                <img src={images.mitv} />
                <div className="amount">
                    <span className="dollar">$</span>
                    <span className="price">١٥.٦٢</span>
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
                <span className="price">٢١٤.٢٠</span>
            </div>
            <p className="xbox"> xbox one s</p>
            <div className="addres_data">
                <p id="san4">San Antonio, Texas</p>
                <p> JUL ٢٧</p>
            </div>
        </div>
        <div className="box">
            <img src={images.fridge} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">٣١٢.٢٧</span>
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
                <span className="price">٣٠.٩٦</span>
            </div>
            <p className="mitsu"> Mitsubishi Pajero (٢٠١٢) </p>
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
                <span className="price">٣.٥٧</span>
            </div>
            <p className="jeans"> Black Jeans for man</p>
            <div className="addres_data">
                <p id="fort">Fort Worth, Texas</p>
                <p> DEC ٢٤ </p>
            </div>
        </div>
        <div className="box">
            <img src={images.board} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">١٣.٣٩</span>
            </div>
            <p className="board"> Pricise corrom board</p>
            <div className="addres_data">
                <p id="austin2">Austin, Texas</p>
                <p> JAN ٢٩ </p>
            </div>
        </div>
        <div className="box">
            <img src={images.earbuds} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">١٦.٩٦</span>
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
                <span className="price">١٧٤.٠٤</span>
            </div>
            <p className="camera"> Nikon D٧٠ DSLR camera </p>
            <div className="addres_data">
                <p id="austin3">Austin, Texas</p>
                <p> FEB ٠٢ </p>
            </div>
        </div>
    </div>




    <div className="First_row">
        <div className="box">
            <img src={images.jacket} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">١.٧٨</span>
            </div>
            <p className="jacket"> Black jacket</p>
            <div className="addres_data">
                <p id="dal2">Dallas, Texas</p>
                <p> FEB ١ </p>
            </div>
        </div>
        <div className="box">
            <img src={images.washingmachine} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">١٥.١٧</span>
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
                <span className="price">٣.١٢</span>
            </div>
            <p id="shoes"> Running Shoe (athletes) </p>
            <div className="addres_data">
                <p id="fort3">Fort Worth, Texas</p>
                <p> FEB ٢٥ </p>
            </div>
        </div>
        <div className="box">
            <img src={images.sofa} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">١٥٦.١٩</span>
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
                <span className="price">١٤٩٤.٩٢</span>
            </div>
            <p id="hyun"> Hyundai I٢٠ (٢٠١٠)</p>
            <div className="addres_data">
                <p id="san2">San Antonio, Texas</p>
                <p> JAN ١٤ </p>
            </div>
        </div>
        <div className="box">
            <img src={images.table} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">٢٦.٧</span>
            </div>
            <p id="table"> dining table</p>
            <div className="addres_data">
                <p id="san5">San Antonio, Texas</p>
                <p> JUN ١٠</p>
            </div>
        </div>
        <div className="box">
            <img src={images.watch} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">٥.٣٥</span>
            </div>
            <p id="watch"> Mens fastrack watch </p>
            <div className="addres_data">
                <p id="fort5">Fort Worth, Texas</p>
                <p> JAN ٧ </p>
            </div>
        </div>
        <div className="box"> 
            <img src={images.dumbbell} />
            <div className="amount">
                <span className="dollar">$</span>
                <span className="price">١٥.٦٢</span>
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