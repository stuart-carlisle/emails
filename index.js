

const fs = require('fs');
const Path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const WelcomeEmail = require('./transpiledLibs/welcome_lib/Email').default;
const CancellationEmail = require('./transpiledLibs/cancellation_lib/Email').default;

const STYLE_TAG = '%STYLE%';
const CONTENT_TAG = '%CONTENT%';

/**
 * Get the file from a relative path
 * @param {String} relativePath
 * @return {Promise.<string>}
*/


function getFile(relativePath) {
  return new Promise((resolve, reject) => {
    const path = Path.join(__dirname, relativePath);

    return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
      if (err) return reject(err);
      return resolve(file);
    })
  });
}

/**
 * Renders the React app with the passed data.
 * Returns a promise that resolves to the full email HTML.
 * @param {Object} data
 * @return {Promise.<String>}
 */
function createWelcomeEmail(data) {
  return Promise.all([
    getFile('./transpiledLibs/welcome_lib/inlined-welcome.css'),
    getFile('./email.html'),
  ])
    .then(([style, template]) => {
      const emailElement = React.createElement(WelcomeEmail, { data });
      const content = ReactDOMServer.renderToStaticMarkup(emailElement);

      // Replace the template tags with the content
      let emailHTML = template;
      emailHTML = emailHTML.replace(CONTENT_TAG, content);
      emailHTML = emailHTML.replace(STYLE_TAG, style);

      return emailHTML;
    });
}

function createCancellationEmail(data) {
  return Promise.all([
    getFile('./transpiledLibs/cancellation_lib/inlined-cancellation.css'),
    getFile('./email.html'),
  ])
    .then(([style, template]) => {
      const emailElement = React.createElement(CancellationEmail, { data });
      const content = ReactDOMServer.renderToStaticMarkup(emailElement);

      // Replace the template tags with the content
      let emailHTML = template;
      emailHTML = emailHTML.replace(CONTENT_TAG, content);
      emailHTML = emailHTML.replace(STYLE_TAG, style);

      return emailHTML;
    });
}

module.exports = {
  createWelcomeEmail,
  createCancellationEmail
}

