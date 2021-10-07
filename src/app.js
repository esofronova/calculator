import { useState } from "react";
import './style.scss';

const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'CE', '0', '+', '='];

export default function Calculator() {

  let [value, setValue] = useState(0);
  let [str, setStr] = useState(value);

  return (
    <>
      <h1 className="header mt-4">Calculator</h1>
      <div className="calculator mx-auto fs-1 rounded">
        <input
          type="text"
          className="w-100 mb-3 text-end px-2 rounded screen"
          value={value}
          onFocus={() => { if (value === 0) { setValue('') } }}
          onChange={e => { setValue(e.target.value); }}
        />
        <div className="row row-cols-4">
          {
            buttons.map((btn, index) => {
              return (
                <div
                  key={index}
                  className="col my-2"
                >
                  <button
                    className="btn w-100 fs-3 fw-bold"
                    style={
                      btn === "CE" ? { backgroundImage: "linear-gradient(rgb(218, 71, 71), rgb(173, 29, 29))", color: "white" } : btn === "=" ? { backgroundImage: "linear-gradient(rgb(245, 210, 146), rgb(209, 136, 0))", color: "white" } : {}
                    }
                    value={btn}
                    onClick={e => {
                      setStr(value + e.target.value);
                      setValue(value === 0 ? e.target.value : value + e.target.value);
                      // eslint-disable-next-line
                      if (e.target.value === '=') { setValue(eval(str)); }; 
                      if (e.target.value === 'CE') { setValue(0); };
                    }}
                  >{btn}</button>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
};