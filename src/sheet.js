/**
 * @param record {object} record
 * @param decision {string} decision
 */
function outputLog(record, decision, comment) {
  const spreadSheet = SpreadsheetApp.openById(SHEET_LOG_ID);  
  const sheet = spreadSheet.getSheetByName('Log')

  // 承認者は1人だけなので、排他制御は考慮しない
  sheet.appendRow([
    new Date(), // 日時
    record.pic, // 担当者
    record.clientName, // 申請者
    record.subject, // 件名
    decision, // 結果
    `${WEB_APP_URL}?id=${record.id}`,// リンク
    comment
  ])
  
}

function findLog(id) {
  const spreadSheet = SpreadsheetApp.openById(SHEET_LOG_ID);  
  const sheet = spreadSheet.getSheetByName('Log')

  var log = sheet.getDataRange().getValues()
  
  return log
    .filter(row => row[SHEET_COLUMN.LINK].toString().indexOf(id) !== -1)
    .sort((a,b) => b[SHEET_COLUMN.DATE].getTime() - a[SHEET_COLUMN.DATE].getTime())
    .map(row => ({
      date: row[SHEET_COLUMN.DATE],
      pic: row[SHEET_COLUMN.PIC],
      client: row[SHEET_COLUMN.CLIENT],
      subject: row[SHEET_COLUMN.SUBJECT],
      decision: row[SHEET_COLUMN.DECISION],
      link: row[SHEET_COLUMN.LINK]
    }))
}

function getPICMail(name) {
  const spreadSheet = SpreadsheetApp.openById(SHEET_LOG_ID);  
  const sheet = spreadSheet.getSheetByName('PIC')

  const found = sheet.getDataRange().getValues().slice(1).filter((row) => row[0] === name)

  if(found.length === 1) {
    return found[0][1]
  }
  throw new Error('Invalid PIC name')
}

function test() {
  const record = convertResponse2Record(getForm().getResponse('2_ABaOnuelIwEUN8k_26q6UQtOuiYc3gqPPSIQFRzOWY5Ji8lHgCbKum4DH7isIuI-zqvNEII'))
  Logger.log(record.pic)
  Logger.log(getPICMail(record.pic))

  Logger.log(findLog('2_ABaOnudQfzfgWJuvycNsHRaovUp5xElVJnSdYte4JbQzVhcUF169ELhuc6LEHUQt1nX5gAQ'))
}