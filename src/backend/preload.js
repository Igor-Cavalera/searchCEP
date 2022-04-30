const { ipcRenderer, contextBridge } = require ("electron");

const Test = {
    window: {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize")
    }
}

contextBridge.exposeInMainWorld("app", Test);