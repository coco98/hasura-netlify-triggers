/* Handle Hasura event trigger
 * This is what the structure of the event payload looks like
 *
 * {
 *   "event": {
 *       "op": "<op-name>",
 *       "data": {
 *         "old": <old-object>,
 *         "new": <new-object>
 *       }
 *   },
 *   "created_at": "<timestamp>",
 *   "id": "<uuid>",
 *   "trigger": {
 *       "name": "<name-of-trigger>",
 *       "id": "<event-uuid>"
 *   },
 *   "table":  {
 *       "schema": "<schema-name>",
 *       "name": "<table-name>"
 *   }
 * }
 *
 */

const nodemailer = require('nodemailer');

exports.handler = (netlifyEvent, context, cb) => {
  // Get the email of the user
  const hasuraTriggerPayload = JSON.parse(netlifyEvent.body);

  const email = hasuraTriggerPayload.event.data.new.email;
  console.log('Sending email to: ' + email);

  let transporter = nodemailer.createTransport({sendmail: true});
  transporter.sendMail({
      from: 'tanmai-netlify-test@tanmaigopal.com',
      to: email,
      subject: 'Netlify functions test',
      text: 'I hope this message gets delivered!'
  }, (err, info) => {
      cb(null, {
        statusCode: 200,
        body: JSON.stringify({msg: 'Hello world'})
      });
      console.log(info.envelope);
      console.log(info.messageId);
  });
};
