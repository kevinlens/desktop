require('./sentry')

const { app } = require('electron')
const update = require('./update')
const platform = require('./platform')
const menu = require('./menu')
const contextMenu = require('./contextMenu')
const navigation = require('./navigation')
const window = require('./window')
const deeplink = require('./deeplink')
const webview = require('./webview')

//fix webview fail for twitter
app.commandLine.appendSwitch("disable-features", "CrossOriginOpenerPolicy")

//security
app.enableSandbox()

//start all modules
app.on('ready', function() {
    update()
    platform()
    menu()
    contextMenu()
    navigation()
    webview()
    
    const w = window()
    deeplink(w)
})