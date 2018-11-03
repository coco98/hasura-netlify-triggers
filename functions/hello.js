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

exports.handler = (netlifyEvent, context, cb) => {
  // Extract JSON payload
  console.log(JSON.parse(netlifyEvent.body));
  cb(null, {
    statusCode: 200,
    body: 'Hi'
  });
};
