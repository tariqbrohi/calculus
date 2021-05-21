import React from 'react';

class Accordion extends React.Component {
    handleAccordionClick = (e) => {
        let pannel = e.target.nextElementSibling;
        e.target.classList.toggle('active');
        if (pannel.style.display === '' || pannel.style.display === 'none') {
            pannel.style.display = 'block';
        } else {
            pannel.style.display = 'none';
        }
    }
    
    render() {
        return (
            <div className="accordion">
                <button className="accord" onClick={this.handleAccordionClick}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sapiente. </button>
                <div className="pannel"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia fuga repellat, sit esse sapiente! Veritatis ut vel accusamus maxime dignissimos similique, aliquid magnam eaque nulla placeat culpa excepturi aspernatur sapiente suscipit? Incidunt eum error dolore dolores enim beatae blanditiis, natus deleniti soluta nam consectetur ipsum, doloribus non atque autem. </div>
                <button className="accord" onClick={this.handleAccordionClick}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sapiente. </button>
                <div className="pannel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia fuga repellat, sit esse sapiente! Veritatis ut vel accusamus maxime dignissimos similique, aliquid magnam eaque nulla placeat culpa excepturi aspernatur sapiente suscipit? Incidunt eum error dolore dolores enim beatae blanditiis, natus deleniti soluta nam consectetur ipsum, doloribus non atque autem.</div>
                <button className="accord" onClick={this.handleAccordionClick}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sapiente. </button>
                <div className="pannel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia fuga repellat, sit esse sapiente! Veritatis ut vel accusamus maxime dignissimos similique, aliquid magnam eaque nulla placeat culpa excepturi aspernatur sapiente suscipit? Incidunt eum error dolore dolores enim beatae blanditiis, natus deleniti soluta nam consectetur ipsum, doloribus non atque autem.</div>
                <button className="accord" onClick={this.handleAccordionClick}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sapiente. </button>
                <div className="pannel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia fuga repellat, sit esse sapiente! Veritatis ut vel accusamus maxime dignissimos similique, aliquid magnam eaque nulla placeat culpa excepturi aspernatur sapiente suscipit? Incidunt eum error dolore dolores enim beatae blanditiis, natus deleniti soluta nam consectetur ipsum, doloribus non atque autem.</div>
                <button className="accord" onClick={this.handleAccordionClick}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sapiente. </button>
                <div className="pannel">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos officia fuga repellat, sit esse sapiente! Veritatis ut vel accusamus maxime dignissimos similique, aliquid magnam eaque nulla placeat culpa excepturi aspernatur sapiente suscipit? Incidunt eum error dolore dolores enim beatae blanditiis, natus deleniti soluta nam consectetur ipsum, doloribus non atque autem.</div>
            </div>
        );
    }
}

export default Accordion;