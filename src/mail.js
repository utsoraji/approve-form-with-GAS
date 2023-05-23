/**
 * 承認依頼メールを送る
 */
function sendAskApproveMail(record) {
  const url = `${WEB_APP_URL}?id=${record.id}` 

  const subject = `「${record.subject}」承認依頼`
  const body = `${record.clientName} 様から ${record.subject} について承認依頼が来ています。
以下のリンクから確認をお願いします。

${url}
`
  sendEmail(
    getFormOwner().getEmail(),
    [OFFICE_MAIL],
    subject,
    body
  )
}

/**
 * 承認通知メールを送る
 */
function sendNoticeAcceptedMail(record, comment) {
  const commentCode = encodeBase64Text(comment)
  const url = `${WEB_APP_URL}?id=${record.id}&comment=${commentCode}`

  const subject = `「${record.subject}」承認されました`
  const body = ` ${record.subject} について承認されました。
コメント：
${comment}

詳細は以下のリンクを参照ください。

${url}
`
  sendEmail(
    record.clientMail,
    [OFFICE_MAIL, getFormOwner().getEmail()],
    subject,
    body
  )
}

/**
 * 差し戻し通知メールを送る
 */
function sendNoticeRejectedMail(record, comment) {
  const url = `${WEB_APP_URL}?id=${record.id}&view=1`

  const subject = `「${record.subject}」差戻されました`
  const body = ` ${record.subject} について差戻されました。
コメント：
${comment}

詳細は以下のリンクを参照ください。

${url}
`
  const option = {
    name: MAIL_SENDER_NAME,
    cc: record.picMail
  }

  sendEmail(
    record.clientMail,
    [OFFICE_MAIL, getFormOwner().getEmail()],
    subject,
    body
  )
}

/**
 * メール送信処理共通化。
 * @param {string} recipient
 * @param {string | string[]} cc
 * @param {string} subject
 * @param {string} body
 */
function sendEmail(recipient, cc, subject, body) {
  ccStr = Array.isArray(cc) ? cc.join(','): cc ?? ''

  const option = {
    name: MAIL_SENDER_NAME,
    cc: ccStr
  }

  // Logger.log(recipient)
  // Logger.log(ccStr)
  // Logger.log(subject)
  // Logger.log(body)

  GmailApp.sendEmail(
    recipient,
    MAIL_SUBJECT_PREFIX + subject,
    body,
    option)
}

function test2() {
  const record = convertResponse2Record(getForm().getResponse('2_ABaOnuelIwEUN8k_26q6UQtOuiYc3gqPPSIQFRzOWY5Ji8lHgCbKum4DH7isIuI-zqvNEII'))
  sendAskApproveMail(record)
  sendNoticeAcceptedMail(record, 'xxx')
  sendNoticeRejectedMail(record, 'aaa')
}
