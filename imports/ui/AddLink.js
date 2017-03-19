import React from 'react';
import {Meteor} from 'meteor/meteor';
import Modal from 'react-modal';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      isOpen: false
    };
  }

	onSubmit(e) {
    const url = this.state.url;
    e.preventDefault();

    if (url) {
      Meteor.call('links.insert', url, (err, res) => {
        if (!err) {
          this.setState({
            url: '',
            isOpen: false
          });
        }
      });
    }
  }

  onChange(e) {
    this.setState({
      url: e.target.value
    });
  }

	render() {
		return (
			<div>
        <button onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
        <Modal isOpen={this.state.isOpen} contentLabel="Add Link">
          <p>Add Link</p>
            <form onSubmit={this.onSubmit.bind(this)}>
              <input
                type="text"
                placeholder="URL"
                value={this.state.text}
                onChange={this.onChange.bind(this)}/>
              <button>Add Link</button>
            </form>
            <button onClick={() => {
                  this.setState({
                    url: '',
                    isOpen: false
                  });
                }
              }>Cancel</button>
        </Modal>
			</div>
		)
	}
}