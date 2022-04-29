const { ipcRenderer, contextBridge } = require ("electron");

const janela = {
    window: {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize")
    }
}

contextBridge.exposeInMainWorld("app", janela)