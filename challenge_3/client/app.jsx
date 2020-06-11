class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeActive: true,
      accountActive: false,
      shippingActive: false,
      paymentActive: false,
      confirmActive: false,
    }
    this.onNext = this.onNext.bind(this);
  }

  onNext(formState) {
    this.setState(formState)
  }

  render() {
    if (this.state.homeActive) {
      return (
        <Home onClick={this.onNext}/>
      )
    } else if (this.state.accountActive) {
      return (
        <Account onClick={this.onNext}/>
      )
    } else if (this.state.shippingActive) {
      return (
        <Shipping onClick={this.onNext}/>
      )
    } else if (this.state.paymentActive) {
      return (
        <Payment onClick={this.onNext}/>
      )
    } else if (this.state.confirmActive) {
      return(
        <Confirmation onClick={this.onNext} />
      )
    }
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.onCheckout = this.onCheckout.bind(this);
  }

  onCheckout(event) {
    event.preventDefault();
    this.props.onClick({
      homeActive: false,
      accountActive: true
    })
  }

  render() {
    return (
      <div>
        <h1>Ready to Checkout?</h1>
        <button className="checkout" onClick={this.onCheckout}>Checkout</button>
      </div>
    )
  }
}

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.onInput = this.onInput.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onInput(event) {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  }

  onNext(event) {
    event.preventDefault();
    this.props.onClick({
      accountActive: false,
      shippingActive: true
    });
  }

  render() {
    return (
      <form onSubmit={this.onNext}>
        <div>
          <label> Name:
          <input name="name" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> Email:
            <input name="email" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> Password:
            <input type="password" name="password" onChange={this.onInput} />
          </label>
        </div>
        <button>Next</button>
      </form>
    )
  }
}

class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };
    this.onInput = this.onInput.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onInput(event) {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  }

  onNext(event) {
    event.preventDefault();
    this.props.onClick({
      shippingActive: false,
      paymentActive: true
    });
  }

  render() {
    return (
      <form onSubmit={this.onNext}>
        <div>
          <label> Street1:
          <input name="street1" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> Street2:
            <input name="street2" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> City:
            <input name="city" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> Zipcode:
            <input name="zip" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> Phone:
            <input type="tel" name="phone" onChange={this.onInput} />
          </label>
        </div>
        <button>Next</button>
      </form>
    )
  }
}

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cc: '',
      cvv: '',
      zip: ''
    }
    this.onInput = this.onInput.bind(this);
    this.onNext = this.onNext.bind(this);
  }

  onInput(event) {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  }

  onNext(event) {
    event.preventDefault();
    this.props.onClick({
      paymentActive: false,
      confirmActive: true
    });
  }

  render() {
    return (
      <form onSubmit={this.onNext}>
        <div>
          <label> Credit Card:
          <input name="cc" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> CVV:
            <input name="cvv" onChange={this.onInput} />
          </label>
        </div>
        <div>
          <label> Zipcode:
            <input name="zip" onChange={this.onInput} />
          </label>
        </div>
        <button>Next</button>
      </form>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.onNext = this.onNext.bind(this);
  }

  onNext(event) {
    event.preventDefault();
    this.props.onClick({
      confirmActive: false,
      homeActive: true
    });
  }

  render() {
    return (
      <div>
        <h3>Detail Confiration</h3>
        <div>Customer Details</div>
        <div>Shipping Details</div>
        <div>Payment Details</div>
        <button name="purchase" onClick={this.onNext}>Purchase</button>
      </div>

    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));