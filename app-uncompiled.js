/* Some common elements we'll be reusing throughout the app */

// Creates a div with the logo centered in it
// Note: this should be created inside of containers that are position: relative
class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img src="assets/images/everyday-white.svg" alt="everyday logo" />
      </div>
    );
  }
}

class Heading extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <header>
        <div className="logo-container">
          <Logo />
        </div>
      </header>
    );
  }
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goViewDay = this.goViewDay.bind(this);
  }
  
  goHome(e) {
    e.preventDefault();
    this.props.home(e.target.value);
  }
  
  goViewDay(e) {
    e.preventDefault();
    this.props.viewDay(e.target.value);
  }
  
  render() {
    let selected = this.props.selected;
    let home = <li><a href="" onClick={this.goHome}><i className="material-icons-round">home</i><span>Home</span></a></li>;
    let today = <li><a href="" onClick={this.goViewDay}><i className="material-icons-round">today</i><span>Today</span></a></li>;
    
    if (selected == "home") {
      home = <li className="selected"><a href="" onClick={this.goHome}><i className="material-icons-round">home</i><span>Home</span></a></li>;
    } else if (selected == "today") {
      today = <li className="selected"><a href="" onClick={this.goViewDay}><i className="material-icons-round">today</i><span>Today</span></a></li>;
    } else {
    }
    
    return (
      <footer>
      <nav id="main-nav">
        <ul>
          {home}
          {today}
        </ul>
      </nav>
    </footer>
    );
  }
}

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  // For month view
  // Need to know how many weeks to display
  // Need to know how many invalid days to show before first day of month
  // Need to know how many invalid days to show after last day of month
  // Then for each valid day we want to create an element by loading the mood
  // Also need to make it so that arrows change the month, not the week
  /*
  function weekCount(year, month_number, startDayOfWeek) {
    // month_number is in the range 1..12

    // Get the first day of week week day (0: Sunday, 1: Monday, ...)
    var firstDayOfWeek = startDayOfWeek || 0;

    var firstOfMonth = new Date(year, month_number-1, 1);
    var lastOfMonth = new Date(year, month_number, 0);
    var numberOfDaysInMonth = lastOfMonth.getDate();
    var firstWeekDay = (firstOfMonth.getDay() - firstDayOfWeek + 7) % 7;

    var used = firstWeekDay + numberOfDaysInMonth;

    return Math.ceil( used / 7);
  }
  */
  
  
  // For week view
  // Only need to render today and the previous 6 days
  // Also need to make it so that arrows change the week, not the month
  render() {
    return (
      <div id="calendar">
        <div className="calendar-heading">
          <div className="calendar-navigation">
            <span className="material-icons-round arrow-left">keyboard_arrow_left</span>
            <p className="month">October</p>
            <span className="material-icons-round arrow-right">keyboard_arrow_right</span>
          </div>
          <div className="calendar-views">
            <span className="material-icons-round">view_module</span>
            <span className="material-icons-round">view_stream</span>
          </div>
        </div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
        <div className="day-small"></div>
      </div>
    );
  }
}

/* Different main screen states */

// Creates Splash screen
class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.goLogIn = this.goLogIn.bind(this);
    this.goSignUp = this.goSignUp.bind(this);
  }
  
  // Handles state change for log in button
  goLogIn(e) {
    this.props.logIn(e.target.value);
  }
  
  // Handles state change for sign up button
  goSignUp(e) {
    this.props.signUp(e.target.value);
  }
  
  render() {
    return (
      <div className="blue-background footer-space">
        <Logo />
        <footer className="bottom-buttons">
          <div className="button" onClick={this.goLogIn}>Log In</div>
          <div className="button" onClick={this.goSignUp}>Sign Up</div>
        </footer>
      </div>
    );
  }
}

// Creates Log in screen
class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goSplash = this.goSplash.bind(this);
  }
  
  goHome(e) {
    this.props.home(e.target.value);
  }
  
  // Handles state change for sign up button
  goSplash(e) {
    this.props.splash(e.target.value);
  }
  
  render() {
    return (
      <div className="full-height footer-space">
        <form id="log-in">
          <h1>Log in</h1>
          <label htmlFor="log-in-email">Email</label>
          <br />
          <input type="text" name="log-in-email" id="log-in-email" placeholder="email" />
          <br />
          <label htmlFor="log-in-password">Password</label>
          <br />
          <input type="password" name="log-in-password" id="log-in-password" placeholder="password" />
          <div className="error-container"></div>
          <footer className="bottom-buttons">
            <div className="button" onClick={this.goHome}>Log In</div>
            <div className="button" onClick={this.goSplash}>Back</div>
          </footer>
        </form>
      </div>
    );
  }
}

// Creates Sign up screen
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goSplash = this.goSplash.bind(this);
  }
  
  // Handles state change for log in button
  goHome(e) {
    this.props.home(e.target.value);
  }
  
  // Handles state change for sign up button
  goSplash(e) {
    this.props.splash(e.target.value);
  }
  
  render() {
    return (
      <div className="full-height footer-space">
        <form id="sign-up">
          <h1>Log in</h1>
          <label htmlFor="sign-up-email">Email</label>
          <br />
          <input type="text" name="sign-up-email" id="sign-up-email" placeholder="email" />
          <br />
          <label htmlFor="sign-up-password">Password</label>
          <br />
          <input type="password" name="sign-up-password" id="sign-up-password" placeholder="password" />
          <div className="error-container"></div>
          <footer className="bottom-buttons">
            <div className="button" onClick={this.goHome}>Sign Up</div>
            <div className="button" onClick={this.goSplash}>Back</div>
          </footer>
        </form>
      </div>
    );
  }
}

class HomeNav extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goViewDay = this.goViewDay.bind(this)
  }
  
  goHome() {
    this.props.home();
  }
  
  // Handles state change for sign up button
  goViewDay() {
    this.props.viewDay();
  }
  
  render() {
    return (
      <div className="full-height footer-space header-space">
        <Heading />
        <h1>Home State</h1>
        <Calendar />
        <Nav home={this.goHome} viewDay={this.goViewDay} selected="home"/>
      </div>
    );
  }
}

class TodayView extends React.Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.goViewDay = this.goViewDay.bind(this)
  }
  
  goHome() {
    this.props.home();
  }
  
  // Handles state change for sign up button
  goViewDay() {
    this.props.viewDay();
  }
  
  render() {
    return (
      <div className="full-height footer-space header-space">
        <Heading />
        <h1>View Day State</h1>
        <Nav home={this.goHome} viewDay={this.goViewDay} selected="today"/>
      </div>
    );
  }
}

/* App main */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {viewState: "splash"};
    
    this.goSplash = this.goSplash.bind(this);
    this.goLogIn = this.goLogIn.bind(this);
    this.goSignUp = this.goSignUp.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goViewDay = this.goViewDay.bind(this);
    this.goLogDay = this.goLogDay.bind(this);
  }
  
  goSplash() {
    this.setState({viewState: "splash"});
  }
  
  goLogIn() {
    this.setState({viewState: "logIn"});
  }
  
  goSignUp() {
    this.setState({viewState: "signUp"});
  }
  
  goHome() {
    this.setState({viewState: "home"});
  }
  
  goViewDay() {
    this.setState({viewState: "viewDay"});
  }
  
  goLogDay() {
    this.setState({viewState: "logDay"});
  }
  
  render() {
    let viewState = this.state.viewState;
    let container;
    if (viewState == "splash") {
      container = <Splash logIn={this.goLogIn} signUp={this.goSignUp}/>;
    } else if (viewState == "logIn") {
      container = <LogInForm home={this.goHome} splash={this.goSplash}/>;
    } else if (viewState == "signUp") {
      container = <SignUpForm home={this.goHome} splash={this.goSplash}/>;
    } else if (viewState == "home") {
      container = <HomeNav home={this.goHome} viewDay={this.goViewDay}/>;
    } else if (viewState == "viewDay") {
      container = <TodayView home={this.goHome} viewDay={this.goViewDay}/>;
    } else if (viewState == "logDay") {
      container = <h1>Log Day State</h1>;
    } else {
      container = <h1>Unknown State</h1>;
    }
    
    return (
      <div>
        {container}
      </div>
    );
  }
}

/* Render call */

ReactDOM.render(
  <App viewState={"home"} />,
  document.getElementById('root')
);
