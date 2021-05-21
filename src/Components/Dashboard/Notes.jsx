import React from 'react';


class Notes extends React.Component {
    render() {
        return(
            <div className="notes">
                <div className="note-text">
                    {this.props.note_text}
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam repellendus perferendis nisi nobis. Excepturi fugit voluptatem enim illo odit. Ullam sunt ratione porro iusto? At veritatis architecto eveniet earum animi quasi dicta deserunt rerum quis, odio cum, illo sit adipisci quos neque quia, debitis voluptatem vero recusandae voluptatum voluptas fuga obcaecati sapiente impedit. Nulla laborum nemo quam, dolore cupiditate alias aspernatur perspiciatis recusandae similique, libero neque dignissimos. Quaerat, pariatur? Non nesciunt tempora vero error quos ipsam. Voluptate deserunt quos nisi quae ratione iste adipisci animi numquam est! Unde, neque magni? Doloribus deserunt, natus debitis sed consequuntur tempore quaerat soluta deleniti.
                </div>
            </div>
        );
    }
}

export default Notes;