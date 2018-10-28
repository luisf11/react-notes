import React, {Component} from 'react';
import styled from 'styled-components';

const NoteEditorContainer = styled.div`
    display: flex;
    width: 500px;
    text-align: center;
    align-self: center;
    position: relative;
`;

const TextArea = styled.textarea`
    width: 100%;
    max-width: 100%;
    height: 150px !important;
    outline: none;
    resize: none;
    display: block;
    border: none;
    padding: 15px 15px 50px 15px;
    margin-bottom: 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Button = styled.button`
     width: 100px;
    height: 30px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: #408e51;
    border: none;
    box-shadow: 0 1px 2px rgba(0,0,0,0.4);
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 0 5px rgba(0,0,0,0.5);
    outline: none;
    cursor: pointer;
    margin-bottom: 5px;
    &:hover:enabled{
      box-shadow:none;
      background-color: white;
        color: #408e51;
        border: 2px solid #408e51;
    }
    &:disabled {
        background: gray;
        box-shadow:none;
    }
`;

class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.color = 'ff6680';
        this.state = {text: '', color: this.color};
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleChangeColor(e) {
        this.setState({color: e.target.value});
    }

    render() {
        return (
            <NoteEditorContainer>
                <TextArea placeholder="Enter your note here..." onChange={this.handleChange.bind(this)}></TextArea>

                <input className="jscolor" value={this.state.color} onBlur={this.handleChangeColor.bind(this)}/>
                <Button onClick={() => this.props.onNoteAdd(this.state.text, this.state.color)}
                        disabled={!this.state.text}>add</Button>
            </NoteEditorContainer>
        );
    }
}

export default NoteEditor;