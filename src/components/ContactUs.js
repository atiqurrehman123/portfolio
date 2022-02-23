import React, { Component } from 'react';
class ContactUs extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    const { resumeData } = this.props;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            <form
              onSubmit={this.submitForm}
              action={resumeData.formSpreeUrl}
              method="POST"
            >
              <label>Email:</label>
              <input type="email" name="email" />
              <label>Message:</label>
              <textarea
                type="text"
                name="message"
                style={{ minHeight: '200px' }}
              />
              {status === 'SUCCESS' ? <p>Thanks!</p> : <button>Submit</button>}
              {status === 'ERROR' && <p>Ooops! There was an error.</p>}

            </form>
          </div>
          <aside className="twelve columns footer-widgets">
            <div className="widget">
              <h4>
                Linked in:
                <a href={resumeData.linkedinId}>
                  {resumeData.name}
                </a>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default ContactUs;
