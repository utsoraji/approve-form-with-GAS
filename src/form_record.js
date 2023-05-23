
/**
 * Convert formResponse to record data object
 * @param {FormResponse} response
 */
function convertResponse2Record(response) {
  const ret = createEmptyRecord()

  ret.id = response.getId()
  ret.clientMail = response.getRespondentEmail()
  ret.timestamp = response.getTimestamp()

  for (const iRes of response.getItemResponses())  {
    const itemId = iRes.getItem().getId()
 
    switch(itemId) {
      case IID.LABO_NAME:
        ret.laboName = iRes.getResponse()
        break
      case IID.SUBJECT:// タイトル
        ret.subject = iRes.getResponse()
        break
      case IID.APPLICANT_NAME:// 依頼者氏名
        ret.clientName = iRes.getResponse()
        break
      // case IID.PIC:// 担当者
      //   ret.pic = iRes.getResponse()
      //   ret.picMail = getPICMail(ret.pic)
      //   break
      case IID.FILES:// 添付ファイル
        for(const fileId of iRes.getResponse()) {
          const file = DriveApp.getFileById(fileId)
          ret.files.push({
            id: fileId,
            name: file.getName(),
          })
        }
        break
      case IID.DESCRIPTION:// 説明
        ret.description = iRes.getResponse()
        break
    }
  }
  return ret
}

function createEmptyRecord() {
  return {
    id: '',
    subject: '',
    laboName: '',
    clientMail: '',
    clientName: '',
    timestamp: '',
    files: [],
    pic: '',
    description: ''
  }
}

/**
 * record の型を示すための例
 */
const RECORD_EXAMPLE = {
  id: 'asdfasdfasdadafds',// ResponseID
  subject: 'Subject',
  clientMail: 'client@xxx.u-tokyo.ac.jp',
  clientName: 'client',
  timestamp: '2023/04/18 17:19:30',
  files: [
    {
      id: 'xxx1',
      name: 'xxx1',
    },
    {
      id: 'xxx2',
      name: 'xxx2',
    },
  ],
  description: 'xxxx\nxxx',
  pic: 'A',
  picMail: 'a@dummy.u-tokyo.ac.jp'
}