import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './MessageItem/MessageItem'

class Dialogs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let newMessageElem = React.createRef()

    let onChangeMessage = () => {
      let text = newMessageElem.current.value
      this.props.updateNewMessageText(text)
    }

    let onAddMessage = () => {
      this.props.addMessage()
    }

    let dialogsElement = this.props.dialogsPage.dialogs.map((d) => (
      <DialogItem name={d.name} key={d.id} id={d.id} />
    ))
    let messagesElement = this.props.dialogsPage.messages.map((m) => (
      <MessageItem message={m.message} key={m.id} id={m.id} />
    ))
    return (
      <div className={s.dialogs}>
        <div className={s.dialogsElement}>{dialogsElement}</div>

        <div className={s.messagesElement}>
          {messagesElement}
          <div>
            <textarea
              onChange={onChangeMessage}
              ref={newMessageElem}
              value={this.props.newMessageElem}></textarea>
            <button onClick={onAddMessage}>Add</button>
            <button>Remote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialogs
