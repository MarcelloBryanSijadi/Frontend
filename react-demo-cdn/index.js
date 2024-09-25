"use strict";
const e = React.createElement;
class Likebutton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { likes: false };
    }
    render() {
        let text = "Like";
        if (this.state.liked) {
          // jika sudah di click, maka boleh batalkan.
          text = "Sudah di like. Batalkan?";
        } else {
            // jika belum di click, maka boleh like.
            text = "Like";
        }
        return e("button", 
            { onClick: () => this.setState({ liked: !this.state.liked }) }, text
        );
    }
}
const domContainer = document.querySelector("#button");
ReactDOM.render(e(Likebutton), domContainer);