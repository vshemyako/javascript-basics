let chicken = () => {
    egg();
};

let egg = () => {
    chicken();
};

chicken();