control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_A_DOWN, function () {
    if (billencs == 0) {
        basic.showIcon(IconNames.Heart)
    }
    billencs = 1
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_A_UP, function () {
    if (billencs == 1) {
        basic.showIcon(IconNames.Happy)
    }
    billencs = 0
})
let billencs = 0
billencs = 0
