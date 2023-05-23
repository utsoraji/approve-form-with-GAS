/**
 * web app GET 
 * @param e event
 * @query id responce id
 * @query comment comment
 */
function doGet(e) {
  Logger.log(e);

  const id = e.parameter.id
  const codeComment = e.parameter.comment ?? ''
  const comment = decodeBase64Text(codeComment)

  if(!id) return show404()

  const response = getForm().getResponse(id)

  return showApproveForm(response, comment, isAuthorizer())
}


function showApproveForm(response, comment, askApprove) {
  const record = convertResponse2Record(response)
  const t = HtmlService.createTemplateFromFile('page_get.html');
  t.id=record.id;
  t.laboName=record.laboName;
  t.subject=record.subject;
  t.clientMail=record.clientMail;
  t.clientName=record.clientName;
  t.date=record.timestamp;
  t.description=record.description;

  let fileListContent = ''
  for (const f of record.files) {
    fileListContent += include('pelem_li_link.html', f)
  }
  t.fileList = fileListContent

  t.pic = record.pic;
  t.picMail = record.picMail;

  // 承認ボタン・コメント
  if (askApprove) {
    t.approveForm = include('pelem_form_decision.html', {id: record.id, comment, appUrl: ScriptApp.getService().getUrl()})
  } else if (comment){
    t.approveForm = `<hr /><textarea style="width:25em;height:10em" name="comment" id="comment" readonly>${comment}</textarea><br />`
  } else {
    t.approveForm = ''
  }

  t.logSheet = SHEET_LOG_ID
  t.logQuery = `SELECT A, E, G WHERE F CONTAINS '${record.id}'`

  return t.evaluate().setTitle(`${record.subject} 承認依頼`)
}
