// Code 01 - The React.Component class

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>nVidia</li>
                </ul>
            </div>
        );
    }
}


// Code 02 - React.createElement

return React.createElement('div', { className: 'shopping-list' },
    React.createElement('h1', /* ... This is the H1 children */),
    React.createElement('ul', /* ... This is the UL children */)
);


// Code03 - TicTacToe (HTML code)

<div id="errors" style="
    background: #c00;
    color: #FFF;
    display: none;
    margin: -20px -20px 20px;
    padding: 20px;
    white-space: pre-wrap;"></div>
    <div id="root"></div>
    <script>
        window.addEventListener('mousedown',function(e){
            document.body.classList.add('mouse-navigation');
            document.body.classList.remove('kbd-navigation');
        });
        window.addEventListener('keydown',function(e){
            if(e.keyCode === 9){
                document.body.classList.add('kbd-navigation');
                document.body.classList.remove('mouse-navigation');
            }
        });
        window.addEventListener('click', function(e){
            if(e.target.tagName === 'A' && e.target.getAttribute('href') === '#'){
                else.preventDefault();
            }
        });
        window.onerror = function(message, source, line, col, error){
            var text = error ? error.stack || error: message + ' (at ' + source + ':' + line + ':'+ col + ')';
            errors.textContent += text + '\n';
            errors.style.display = '';
        };
        console.error = (function(old){
            return function error(){
                errors.textContent += Array.prototype.slice.call(arguments).join('')+ '\n';
                errors.style.display = '';
                old.apply(this, arguments);
            }
        })(console.error);
    </script>


// Code 04 - TicTacToe (JS code)

class Square extends React.Component {
    render() {
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* Status*/}</div>
                    <ol>{/* ToDo */}</ol>
                </div>
            </div>
        );
    }
}

// =============================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


/* Code 05 - Data change with mutation

var player = { score: 1, name: 'Scott' };
player.score = 2;
// Player data = {score: 2, name: 'Scott'}


// Code 06 - Data change without mutation

var player = { score: 1, name: 'Markus' };

var newPlayer = Object.assign({}, player, { score: 2 });
// Player = unchanged. newPlayer = {score: 2, name: 'Markus'}

// OR this can be used =
// var newPlayer = {...player, score: 2};

*/