import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.fileChanged = this.fileChanged.bind(this);
    this.upload = this.upload.bind(this);
    this.state = {
      file: null
    };
  }

  fileChanged(event) {
    this.setState({ file: event.target.files[0] });
  }

  upload() {
    if (!this.state.file) {
      alert('No file selected');
      return;
    }
    fetch(
      '',
      {
        method: 'PUT',
        body: this.state.file
      }
    )
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileChanged} />
        <button onClick={this.upload}>Upload</button>
      </div>
    );
  }
}

export default App;
