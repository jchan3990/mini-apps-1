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
    });
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

  // componentDidMount() {

  // }

  onInput(event) {
    event.preventDefault();
    this.setState({[event.target.name] : event.target.value});
  }

  onNext(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/checkout/account',
      data: this.state,
      success: () => {console.log('Added Account')},
      error: err => console.log('Error in creating Account')
    });
    // this.setState({
    //   name: '',
    //   email: '',
    //   password: ''
    // })
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
          <input name="name" onChange={this.onInput} value={this.state.name}/>
          </label>
        </div>
        <div>
          <label> Email:
            <input name="email" onChange={this.onInput} value={this.state.email}/>
          </label>
        </div>
        <div>
          <label> Password:
            <input type="password" name="password" onChange={this.onInput} value={this.state.password}/>
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
      streetOne: '',
      streetTwo: '',
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
    $.ajax({
      type: 'POST',
      url: '/checkout/shipping',
      data: this.state,
      success: console.log('Success'),
      error: err => console.log('Error in creating Account')
    });
    this.setState({
      streetOne: '',
      streetTwo: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    });
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
          <input name="streetOne" onChange={this.onInput} value={this.state.streetOne}/>
          </label>
        </div>
        <div>
          <label> Street2:
            <input name="streetTwo" onChange={this.onInput} value={this.state.streetTwo}/>
          </label>
        </div>
        <div>
          <label> City:
            <input name="city" onChange={this.onInput} value={this.state.city}/>
          </label>
        </div>
        <div>
          <label> Zipcode:
            <input name="zip" onChange={this.onInput} value={this.state.zip}/>
          </label>
        </div>
        <div>
          <label> Phone:
            <input type="tel" name="phone" onChange={this.onInput} value={this.state.phone}/>
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
    $.ajax({
      type: 'POST',
      url: 'localhost:3000/account',
      data: this.state,
      success: console.log('Success'),
      error: err => console.log('Error in creating Account')
    });
    this.setState({
      cc: '',
      cvv: '',
      zip: ''
    });
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
          <input name="cc" onChange={this.onInput} value={this.state.cc}/>
          </label>
        </div>
        <div>
          <label> CVV:
            <input name="cvv" onChange={this.onInput} value={this.state.cvv}/>
          </label>
        </div>
        <div>
          <label> Zipcode:
            <input name="zip" onChange={this.onInput} value={this.state.zip}/>
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