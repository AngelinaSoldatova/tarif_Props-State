import React from 'react';
import './tarif.css';

class Tarif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    };
  }
  handleChange = () => {
    this.setState(
      {pressed: !this.state.pressed}
    );
  }

  render() {
    const {bezlimit,ryb,doc} = this.props;
    return (
      <div className="tarif">
        <div className="tafir_bezlimit">{bezlimit}</div>
        <div className="tarif_ryb">{ryb}</div>
        <div className="tarif_doc">{doc}</div>
        <div className="tarif_ob">Объем включенного трафика не ограничен</div>
        <button className='tarif_vibor' onClick={this.handleChange}>
          {this.state.pressed ? "Выбран":"Выбрать тариф"}
        </button>
      </div>
    );
  }
}

export default Tarif;