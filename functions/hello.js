exports.handler = (lambdaEvent, context, cb) => {
  const hasuraEventPayload = JSON.parse(lambdaEvent.body);
  const data = hasuraEventPayload.event.data.new;
  console.log(data);
  cb(null, {
    statusCode: 200,
    body: JSON.stringify({receivedData: data})
  });
};
