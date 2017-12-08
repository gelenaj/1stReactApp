<<<<<<< HEAD
function Application(props) {
    return(
      <div className="scoreboard">
        <div className="header">
          <h1>{props.title}</h1>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">Gloria Elena
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score">31</div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
            <div className="player">
              <div className="player-name">Judy Ghost
              </div>
              <div className="player-score">
                <div className="counter">
                  <button className="counter-action decrement"> - </button>
                  <div className="counter-score">100</div>
                  <button className="counter-action increment"> + </button>
                </div>
              </div>
          </div>
      </div>
</div>

    );

}

Application.propTypes = {
  title: React.PropTypes.string,
};

Application.defaultProps ={
  title: "Scoreboard"
}

ReactDOM.render(<Application/>, document.getElementById('container'));
=======
function Application() {
    return(
        <div>
            <h1>This is my first application using React</h1>
            <p>I am learning the basics</p>
        </div>
    );

}

ReactDOM.render(<Application/>, document.getElementById('container'));
>>>>>>> 140ff455016ca81c20cbcf668eb95e3439b5e89b
