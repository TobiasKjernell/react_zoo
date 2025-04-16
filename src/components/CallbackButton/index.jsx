const CallbackButton = ({ callback, customClass, text }) => {
    return (
        <button className={customClass} onClick={callback}>{text}</button>
    )
}

export default CallbackButton;