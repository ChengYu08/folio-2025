import './threejs-override.js'
import { translateDOM } from './Game/i18n.js'
import { Game } from './Game/Game.js'
import consoleLog from './data/consoleLog.js'

// Resolve locale and translate static DOM text before the game boots, so the
// first frame already shows the resolved language.
translateDOM()

if(import.meta.env.VITE_LOG)
    console.log(
        ...consoleLog
    )

if(import.meta.env.VITE_GAME_PUBLIC)
    window.game = new Game()
else
    new Game()