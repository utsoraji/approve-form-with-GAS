/**
 * HTMLをインクルードする.
 *
 * @param {string} filename HTMLファイル名
 * @param {Object} params インクルード先に渡すパラメーター
 */
function include(filename, params) {
  const template = HtmlService.createTemplateFromFile(filename);
  if (params) {
    for (const key in params) {
      template[key] = params[key];
    }
  }
  return template.evaluate().getContent();
}

function show404() {
  return  HtmlService.createTemplateFromFile('page_404.html').evaluate()
}

// エンコード
function encodeBase64Text(text) {
  return Utilities.base64Encode(text, Utilities.Charset.UTF_8)
}
 
// デコード
function decodeBase64Text(code) {
  return Utilities.newBlob(Utilities.base64Decode(code, Utilities.Charset.UTF_8)).getDataAsString()
}

/**
 * アクセス者が承認者か確認する
 * フォームの所有者を承認者とする
 */
function isAuthorizer() {
  const authorizer = getFormOwner()
  const currentUser = Session.getActiveUser()
  return authorizer.getEmail() === currentUser.getEmail()
}
