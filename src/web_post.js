function doPost(e) {
  Logger.log(e);

  const id = e.parameter.id
  const decision = e.parameter.decision
  const comment = e.parameter.comment

  response = getForm().getResponse(id) // check id

  switch (decision) {
    case 'accept':
      return accept(response, comment)
    case 'reject':
      return reject(response, comment)
    default:
      throw new Error('Decition value is invalid: ' +  decision)
  }
}

function accept(response, comment) {
  const record = convertResponse2Record(response)
  sendNoticeAcceptedMail(record, comment)
  outputLog(record, 'accept', comment)
  return ContentService.createTextOutput(record.subject + ' is accepted');
}

function reject(response, comment) {
  const record = convertResponse2Record(response)
  sendNoticeRejectedMail(record, comment)
  outputLog(record, 'reject', comment)
  return ContentService.createTextOutput(record.subject + ' is rejected');
}
