// Google Drive API

/**
 * 設定を変更した場合、そのあと以下の手順を実行する
 * 
 * 1. [デプロイ]->[新しいデプロイ] から新しくデプロイをする
 * 2. デプロイ結果からウェブアプリのURLをコピーする
 * 3.プロジェクトの設定（左端の縦メニューの歯車）
 */

const OFFICE_MAIL = PropertiesService.getScriptProperties().getProperty('OFFICE_MAIL')

/**
 * メールの送信者名
 */
const MAIL_SENDER_NAME = PropertiesService.getScriptProperties().getProperty('MAIL_SENDER_NAME')

/**
 * メール件名の先頭句
 */
const MAIL_SUBJECT_PREFIX = PropertiesService.getScriptProperties().getProperty('MAIL_SUBJECT_PREFIX') //'【承認依頼フォーム】'

/**
 * Web App URL
 */
//const WEB_APP_URL = 'https://script.google.com/a/macros/g.ecc.u-tokyo.ac.jp/s/AKfycbyBVZnfQJE--yuTBbPca6lxH0AXCANTiQXmBvOTaEo/dev'
const WEB_APP_URL = PropertiesService.getScriptProperties().getProperty('WEB_APP_URL_PROD')

/**
 * Form Item ID
 * フォームの質問項目に自動設定されるID
 */
const IID = {
  LABO_NAME: 1560782439,
  APPLICANT_NAME: 1489385232,
  SUBJECT: 1731546253,
  FILES: 631025102,
  DESCRIPTION: 1953491396,
  //PIC: 524207978,
}
Object.freeze(IID)

/**
 * 承認ログスプレッドシート
 */
const SHEET_LOG_ID = '13NsShGGaX7OKUp_Msj7NmJIrWnFp91bmpwNPc-WJHzw'

/**
 * スプレッドシート列内容
 */
const SHEET_COLUMN = {
  DATE: 0,
  PIC:1,
  CLIENT:2,
  SUBJECT:3,
  DECISION:4,
  LINK:5,
  COMMENT:6
}
Object.freeze(SHEET_COLUMN)

function showConfig() {
  Logger.log(MAIL_SENDER_NAME)
  Logger.log(WEB_APP_URL)
  Logger.log(IID)
  Logger.log(SHEET_LOG_ID)
  Logger.log(SHEET_COLUMN)
}