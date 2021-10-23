/* global interfaceConfig */
// list of tips
const hints = [
    '可以通过点击参与者的头像来锁定他们。',
    '可以使用“举手”功能告诉别人您有话要说',
    '按Shift+?可以获取快捷键列表',
    '将鼠标悬停在头像的连接状态上，可以了解连接状态的更多信息',
    '点击右下角的按钮可以隐藏所有头像'
];


/**
 * Get a random hint message from hint array.
 *
 * @return {string} the hint message.
 */
function getHint() {
    const l = hints.length - 1;
    const n = Math.round(Math.random() * l);

    return hints[n];
}

/**
 * Inserts text message
 * into DOM element
 *
 * @param id {string} element identificator
 * @param msg {string} text message
 */
function insertTextMsg(id, msg) {
    const el = document.getElementById(id);

    if (el) {
        el.innerHTML = msg;
    }
}

/**
 * Sets the hint and thanks messages. Will be executed on load event.
 */
function onLoad() {
    // Intentionally use string concatenation as this file does not go through
    // babel but IE11 is still supported.
    // eslint-disable-next-line prefer-template
    const thankYouMessage = '感谢使用 ' + interfaceConfig.APP_NAME;

    // Works only for close2.html because close.html doesn't have this element.
    insertTextMsg('thanksMessage', thankYouMessage);

    // If there is a setting show a special message only for the guests
    if (interfaceConfig.CLOSE_PAGE_GUEST_HINT) {
        if (window.sessionStorage.getItem('guest') === 'true') {
            const element = document.getElementById('hintQuestion');

            element.classList.add('hide');
            insertTextMsg('hintMessage', interfaceConfig.CLOSE_PAGE_GUEST_HINT);

            return;
        }
    }

    insertTextMsg('hintMessage', getHint());
}

window.onload = onLoad;
