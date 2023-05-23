function onSubmit(e) {
  sendAskApproveMail(convertResponse2Record(e.response))
}

function getForm() {
  return FormApp.getActiveForm()
}

function getFormOwner() {
  return DriveApp.getFileById(getForm().getId()).getOwner()
}

function dev_showResponseIds() {
  for(const res of getForm().getResponses()) {
    Logger.log(res.getId())
  }
}

function dev_showItemIDs() {
  const items = getForm().getItems()
  Logger.log(items.map((i) => ({ title:i.getTitle(), id: i.getId()})))
}

