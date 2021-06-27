const Pet =({name, animal, breed})=>{
    return React.createElement(
        "div",
        {id:"sth-important"},
        [
            React.createElement(
                "h1", {}, name
            ),
            React.createElement(
                "h2", {}, animal
            ),
            React.createElement(
                "h3", {}, breed
            ),
        ]
    );
};


const App =()=>{
    return React.createElement(
        "div",
        {id:"sth-important"},
        [ // can be array or one simple element!
            React.createElement(
                "h1", {}, "Adopt Me!"
            ),
            React.createElement(Pet, { name:"magoul", animal:"hamster", breed:"robofski"}),
            React.createElement(Pet, { name:"magoul", animal:"hamster", breed:"robofski"}),
            React.createElement(Pet, { name:"magoul", animal:"hamster", breed:"robofski"}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));