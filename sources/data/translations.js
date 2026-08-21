// Localization dictionary. English is the source language and lives verbatim
// in sources/index.html (translateDOM is a no-op for en). dict.en here is the
// fallback source for keys missing from dict.zh, and the lookup table for
// JS-managed strings via t(). Keys are flat dotted, grouped by surface.

export const dict =
{
    en:
    {
        // Meta
        'meta.title': "Cheng's",
        'meta.description': "Cheng Yu's creative portfolio",

        // Touch buttons
        'touch.interact': 'Interact',
        'touch.unstuck': 'Unstuck',

        // Whispers preview (contenteditable default; also reset by Whispers.js)
        'whispers.previewMessage': 'Your message here',

        // Home
        'home.title': "Cheng's Home",
        'home.welcome': 'Welcome!',
        'home.intro': 'My name is <strong>Cheng Yu</strong>, and I\'m a <strong>creative developer</strong> (mostly for the web).',
        'home.drive': 'This is my portfolio. Please drive around to learn more about me and discover the many secrets of this world.',
        'home.dontBreak': 'And don\'t break anything!',

        // Options
        'options.title': 'Options',
        'options.audio': 'Audio',
        'options.audio.tooltip': 'Toggles sound',
        'options.quality': 'Quality',
        'options.quality.tooltip': 'Toggles some effects',
        'options.quality.low': 'Low',
        'options.quality.high': 'High',
        'options.stuck': "I'm stuck!",
        'options.respawn': 'Respawn',
        'options.respawn.tooltip': 'Teleports you to the closest respawn',
        'options.reset': 'Reset',
        'options.reset.tooltip': 'Resets every object',
        'options.renderer': 'Renderer',
        'options.renderer.tooltip': 'Best for performance',
        'options.renderer.webgpu': 'WebGPU',
        'options.renderer.webgl': 'WebGL',
        'options.renderer.webglTooltip': 'Your browser is <strong>not compatible</strong> with WebGPU resulting in performance loss',
        'options.server': 'Server',
        'options.server.pending': 'Pending',
        'options.server.online': 'Online',
        'options.server.offline': 'Offline',
        'options.server.onlineTooltip': 'Enjoy the <strong>multiplayer</strong> features',
        'options.server.offlineTooltip': 'Should be back soon',

        // Controls — tab labels
        'controls.tab.mouseKeyboard': 'Mouse Keyboard',
        'controls.tab.mobile': 'Mobile Tablet',
        'controls.tab.gamepad': 'Gamepad',

        // Controls — mouse/keyboard actions
        'controls.mk.move': 'Move around',
        'controls.mk.boost': 'Boost',
        'controls.mk.brake': 'Brake',
        'controls.mk.jump': 'Jump',
        'controls.mk.interact': 'Interact',
        'controls.mk.map': 'Map',
        'controls.mk.mute': 'Mute',
        'controls.mk.whisper': 'Post a whisper',
        'controls.mk.respawn': 'Respawn',
        'controls.mk.hydraulics': 'Activate hydraulics',
        'controls.mk.moveCamera': 'Move camera',
        'controls.mk.honk': 'Honk',

        // Controls — mouse/keyboard mixed key cells (preserve spans)
        'controls.mk.keys.move': '<span class="key">WASD</span> or <span class="key">ARROWS</span>',
        'controls.mk.keys.brake': '<span class="key">CTRL LEFT</span> or <span class="key">B</span>',
        'controls.mk.keys.numpad': '<span class="key">NUM KEYS</span>/<span class="key">NUM PAD</span>',

        // Controls — touch
        'controls.touch.oneFinger': 'One finger',
        'controls.touch.twoFingers': 'Two fingers',
        'controls.touch.tap': 'Tap (on the car)',
        'controls.touch.moveCar': 'Move the car',
        'controls.touch.moveCameraZoom': 'Move camera / zoom',

        // Controls — gamepad
        'controls.gamepad.interactExit': 'Interact / Exit',
        'controls.gamepad.accelerate': 'Accelerate',
        'controls.gamepad.backwardAccelerate': 'Backward accelerate',
        'controls.gamepad.hydraulics': 'Hydraulics',
        'controls.gamepad.turnWheels': 'Turn wheels',
        'controls.gamepad.zoom': 'Zoom in/out',
        'controls.gamepad.pause': 'Pause',
        'controls.gamepad.joystickLeft': 'Joystick Left',
        'controls.gamepad.joystickLeftPress': 'Joystick Left (press)',
        'controls.gamepad.joystickRight': 'Joystick Right',
        'controls.gamepad.joystickRightPress': 'Joystick Right (press)',
        'controls.gamepad.select': 'Select',
        'controls.gamepad.start': 'Start',

        // Achievements
        'achievements.title': 'Achievements',
        'achievements.rewards': 'Rewards',
        'achievements.unlockAt': 'Unlock at <strong></strong>',
        'achievements.reset': 'Reset achievements',
        'achievements.resetConfirm1': 'Are you sure?',
        'achievements.resetConfirm2': 'Definitely?',
        'achievements.resetConfirm3': 'Done!',

        // Circuit
        'circuit.title': 'Circuit',
        'circuit.offline': 'Server currently offline. Scores can\'t be saved.',
        'circuit.noScore': 'No score yet today',
        'circuit.resetsIn': 'Resets in <span class="js-reset-time reset-time"></span>',
        'circuit.end': 'End',
        'circuit.controls': 'Controls',

        // Whispers
        'whispers.title': 'Leave a whisper',
        'whispers.desc': 'Whispers are messages left by visitors.',
        'whispers.rules': '- Everyone can see them<br />- New whispers remove old ones (max 30)<br />- One whisper per user<br />- Choose a flag<br />- No slur!<br />- Max 30 characters',
        'whispers.offline': 'Server currently offline',

        // Behind the scene
        'behind.title': 'Behind the scene',
        'behind.intro': 'Thank you for visiting my portfolio!<br />If you are curious about the stack and how I built this project, here\'s everything you need to know.',
        'behind.threejs.h': 'Three.js',
        'behind.threejs.p': '<a href="https://threejs.org" target="_blank" rel="noreferrer">Three.js</a> is the library I\'m using to render this 3D world.<br />It was created by <strong>mr.doob</strong> (<a href="https://x.com/mrdoob" target="_blank" rel="noreferrer">X</a>, <a href="http://github.com/mrdoob" target="_blank" rel="noreferrer">GitHub</a>), followed by hundreds of awesome developers, one of which being Sunag (<a href="https://x.com/sea3dformat" target="_blank" rel="noreferrer">X</a>, <a href="https://github.com/sunag" target="_blank" rel="noreferrer">GitHub</a>) who added <a href="https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language" target="_blank" rel="noreferrer">TSL</a>, enabling the use of both WebGL and WebGPU, making this portfolio possible.',
        'behind.journey.h': 'Three.js Journey',
        'behind.journey.p': 'If you want to learn Three.js, I got you covered with this <a href="https://threejs-journey.com" target="_blank" rel="noreferrer">huge course</a>.<br />It contains everything you need to start building awesome stuff with Three.js (and much more).',
        'behind.devlogs.h': 'Devlogs',
        'behind.devlogs.p': 'I\'ve been making devlogs since the very start of this portfolio and you can find them all on my <a href="https://www.youtube.com/playlist?list=PL5nApUt6Z8sTZxEsEMd8x89OCKCAAfNL0" target="_blank" rel="noreferrer">Youtube channel</a>.',
        'behind.source.h': 'Source code',
        'behind.source.p': 'The code is available on <a href="https://github.com/ChengYu08/folio-2025" target="_blank" rel="noreferrer">GitHub</a> under <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noreferrer">MIT license</a>. Even the Blender files are there, so have fun!<br />For security reasons, I\'m not sharing the server code, but the portfolio works without it.',
        'behind.musics.h': 'Musics',
        'behind.musics.p': 'The music you hear was made especially for this portfolio by the awesome Kounine (<a href="https://linktr.ee/Kounine" target="_blank" rel="noreferrer">Linktree</a>).<br />They are now under <a href="https://choosealicense.com/licenses/cc0-1.0/" target="_blank" rel="noreferrer">CC0 license</a>, meaning you can do whatever you want with them!<br />Download them <a href="https://github.com/ChengYu08/folio-2025/tree/main/static/sounds/musics" target="_blank" rel="noreferrer">here</a>.',
        'behind.links.h': 'Some more links',
        'behind.links.ul': '<li>Physics library ⇒ <a href="https://rapier.rs" target="_blank" rel="noreferrer">Rapier</a></li><li>Audio library ⇒ <a href="https://howlerjs.com" target="_blank" rel="noreferrer">Howler.js</a></li><li>Fonts ⇒ <a href="https://fonts.google.com/specimen/Amatic+SC" target="_blank" rel="noreferrer">Amatic SC</a> & <a href="https://fonts.google.com/specimen/Nunito?query=Nunito" target="_blank" rel="noreferrer">Nunito</a></li>',
        'behind.sign': '— Cheng',

        // Circuit end modal
        'circuitEnd.yourTime': 'Your time<br /><span class="js-time value">00:00:000</span>',
        'circuitEnd.notTop10': 'Sorry, you didn\'t make it to the top 10.',
        'circuitEnd.submit': 'Submit',
        'circuitEnd.or': 'or',

        // Discord (title "Discord" left as brand)
        'discord.publicServer': 'Public server',
        'discord.publicDesc': 'Come hang out with the community<span class="optional">, show us your projects and ask us anything</span>.',
        'discord.join': 'Join server',
        'discord.private': 'Private messages',
        'discord.privateDesc': 'Contact me directly.<span class="optional"><br />I have to warn you, I try to answer everyone, but it might take a while.</span>',
        'discord.startChat': 'Start chating',

        // Shared
        'common.search': 'Search…',
        'common.noResult': 'No result',
        'common.restart': 'Restart',

        // Map area names (rendered to DOM by Map.js)
        'map.achievements': 'Achievements',
        'map.altar': 'Altar',
        'map.behind': 'Behind<br /> the scene',
        'map.bowling': 'Bowling',
        'map.career': 'Career',
        'map.circuit': 'Circuit',
        'map.cookie': 'Cookie',
        'map.lab': 'Lab',
        'map.landing': 'Landing',
        'map.projects': 'Projects',
        'map.social': 'Social',
        'map.timeMachine': 'Time Machine',

        // In-world InteractivePoints labels
        'world.easter': 'Easter event',
        'world.behind': 'Behind the scene',
        'world.cookie': 'Accept cookie',
        'world.achievements': 'Achievements',
        'world.bowling.restart': 'Restart',
        'world.bowling.bumpers': 'Bumpers',
        'world.bowling.changeSong': 'Change song',
        'world.projects': 'Projects',
        'world.circuit.start': 'Start race!',
        'world.timeMachine': 'Time Machine',
        'world.landing.map': 'Map',
        'world.landing.controls': 'Controls',
        'world.lab': 'Lab',

        // Altar
        'altar.ellipsis': '...',

        // Time formatting units (timeToReadableString)
        'time.hour': 'h',
        'time.minute': 'm',
        'time.second': 's',
    },

    zh:
    {
        // Meta
        'meta.title': '布鲁诺的小天地',
        'meta.description': 'Cheng Yu 的创意作品集',

        // Touch buttons
        'touch.interact': '互动',
        'touch.unstuck': '脱困',

        // Whispers preview
        'whispers.previewMessage': '在此留言',

        // Home
        'home.title': '布鲁诺的小天地',
        'home.welcome': '欢迎！',
        'home.intro': '我叫 <strong>Cheng Yu</strong>，是一名<strong>创意开发者</strong>（主要做网页方向）。',
        'home.drive': '这是我的作品集。请开车四处转转，了解我并发现这个世界里藏着的许多秘密。',
        'home.dontBreak': '别把东西撞坏哦！',

        // Options
        'options.title': '选项',
        'options.audio': '声音',
        'options.audio.tooltip': '切换声音',
        'options.quality': '画质',
        'options.quality.tooltip': '切换部分特效',
        'options.quality.low': '低',
        'options.quality.high': '高',
        'options.stuck': '我卡住了！',
        'options.respawn': '重生',
        'options.respawn.tooltip': '传送至最近的复活点',
        'options.reset': '重置',
        'options.reset.tooltip': '重置所有物体',
        'options.renderer': '渲染器',
        'options.renderer.tooltip': '性能最佳',
        'options.renderer.webgpu': 'WebGPU',
        'options.renderer.webgl': 'WebGL',
        'options.renderer.webglTooltip': '你的浏览器与 WebGPU <strong>不兼容</strong>，会有性能损失',
        'options.server': '服务器',
        'options.server.pending': '等待中',
        'options.server.online': '在线',
        'options.server.offline': '离线',
        'options.server.onlineTooltip': '享受<strong>多人</strong>功能',
        'options.server.offlineTooltip': '应该很快回来',

        // Controls — tab labels
        'controls.tab.mouseKeyboard': '鼠标 键盘',
        'controls.tab.mobile': '移动 平板',
        'controls.tab.gamepad': '手柄',

        // Controls — mouse/keyboard actions
        'controls.mk.move': '移动',
        'controls.mk.boost': '加速',
        'controls.mk.brake': '刹车',
        'controls.mk.jump': '跳跃',
        'controls.mk.interact': '互动',
        'controls.mk.map': '地图',
        'controls.mk.mute': '静音',
        'controls.mk.whisper': '发布留言',
        'controls.mk.respawn': '重生',
        'controls.mk.hydraulics': '启动液压',
        'controls.mk.moveCamera': '移动镜头',
        'controls.mk.honk': '鸣笛',

        // Controls — mouse/keyboard mixed key cells (preserve spans)
        'controls.mk.keys.move': '<span class="key">WASD</span> 或 <span class="key">方向键</span>',
        'controls.mk.keys.brake': '<span class="key">左 CTRL</span> 或 <span class="key">B</span>',
        'controls.mk.keys.numpad': '<span class="key">数字键</span>/<span class="key">小键盘</span>',

        // Controls — touch
        'controls.touch.oneFinger': '单指',
        'controls.touch.twoFingers': '双指',
        'controls.touch.tap': '点按（车上）',
        'controls.touch.moveCar': '移动车辆',
        'controls.touch.moveCameraZoom': '移动镜头 / 缩放',

        // Controls — gamepad
        'controls.gamepad.interactExit': '互动 / 离开',
        'controls.gamepad.accelerate': '加速',
        'controls.gamepad.backwardAccelerate': '倒车加速',
        'controls.gamepad.hydraulics': '液压',
        'controls.gamepad.turnWheels': '转向',
        'controls.gamepad.zoom': '缩放',
        'controls.gamepad.pause': '暂停',
        'controls.gamepad.joystickLeft': '左摇杆',
        'controls.gamepad.joystickLeftPress': '左摇杆（按下）',
        'controls.gamepad.joystickRight': '右摇杆',
        'controls.gamepad.joystickRightPress': '右摇杆（按下）',
        'controls.gamepad.select': 'Select',
        'controls.gamepad.start': 'Start',

        // Achievements
        'achievements.title': '成就',
        'achievements.rewards': '奖励',
        'achievements.unlockAt': '解锁于 <strong></strong>',
        'achievements.reset': '重置成就',
        'achievements.resetConfirm1': '确定吗？',
        'achievements.resetConfirm2': '真的确定？',
        'achievements.resetConfirm3': '完成！',

        // Circuit
        'circuit.title': '赛道',
        'circuit.offline': '服务器当前离线，成绩无法保存。',
        'circuit.noScore': '今日尚无成绩',
        'circuit.resetsIn': '<span class="js-reset-time reset-time"></span> 后重置',
        'circuit.end': '结束',
        'circuit.controls': '控制',

        // Whispers
        'whispers.title': '留下一条留言',
        'whispers.desc': '留言是访客留下的消息。',
        'whispers.rules': '- 所有人都能看到<br />- 新留言会替换旧留言（最多 30 条）<br />- 每位用户一条留言<br />- 选择一个旗帜<br />- 禁止辱骂！<br />- 最多 30 个字符',
        'whispers.offline': '服务器当前离线',

        // Behind the scene
        'behind.title': '幕后',
        'behind.intro': '感谢参观我的作品集！<br />如果你对技术栈和这个项目是怎么做出来的感兴趣，这里有你需要知道的一切。',
        'behind.threejs.h': 'Three.js',
        'behind.threejs.p': '<a href="https://threejs.org" target="_blank" rel="noreferrer">Three.js</a> 是我用来渲染这个 3D 世界的库。<br />它由 <strong>mr.doob</strong>（<a href="https://x.com/mrdoob" target="_blank" rel="noreferrer">X</a>，<a href="http://github.com/mrdoob" target="_blank" rel="noreferrer">GitHub</a>）创建，随后有数百位出色的开发者参与，其中 Sunag（<a href="https://x.com/sea3dformat" target="_blank" rel="noreferrer">X</a>，<a href="https://github.com/sunag" target="_blank" rel="noreferrer">GitHub</a>）加入了 <a href="https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language" target="_blank" rel="noreferrer">TSL</a>，使其同时支持 WebGL 和 WebGPU，这个作品集才得以实现。',
        'behind.journey.h': 'Three.js Journey',
        'behind.journey.p': '如果你想学 Three.js，我为你准备了这门<a href="https://threejs-journey.com" target="_blank" rel="noreferrer">超棒课程</a>。<br />它包含你用 Three.js 开始做出酷炫作品所需的一切（以及更多）。',
        'behind.devlogs.h': '开发日志',
        'behind.devlogs.p': '从这个作品集一开始我就在做开发日志，你可以在我的<a href="https://www.youtube.com/playlist?list=PL5nApUt6Z8sTZxEsEMd8x89OCKCAAfNL0" target="_blank" rel="noreferrer">YouTube 频道</a>找到全部。',
        'behind.source.h': '源代码',
        'behind.source.p': '代码在 <a href="https://github.com/ChengYu08/folio-2025" target="_blank" rel="noreferrer">GitHub</a> 上以 <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noreferrer">MIT 许可</a>开源。连 Blender 文件都在里面，尽情玩吧！<br />出于安全原因，我不公开服务端代码，但作品集在没有它的情况下也能运行。',
        'behind.musics.h': '音乐',
        'behind.musics.p': '你听到的音乐是出色的 Kounine（<a href="https://linktr.ee/Kounine" target="_blank" rel="noreferrer">Linktree</a>）专为这个作品集制作的。<br />它们现在以 <a href="https://choosealicense.com/licenses/cc0-1.0/" target="_blank" rel="noreferrer">CC0 许可</a>发布，你可以随意使用！<br />在<a href="https://github.com/ChengYu08/folio-2025/tree/main/static/sounds/musics" target="_blank" rel="noreferrer">这里</a>下载。',
        'behind.links.h': '更多链接',
        'behind.links.ul': '<li>物理库 ⇒ <a href="https://rapier.rs" target="_blank" rel="noreferrer">Rapier</a></li><li>音频库 ⇒ <a href="https://howlerjs.com" target="_blank" rel="noreferrer">Howler.js</a></li><li>字体 ⇒ <a href="https://fonts.google.com/specimen/Amatic+SC" target="_blank" rel="noreferrer">Amatic SC</a> 与 <a href="https://fonts.google.com/specimen/Nunito?query=Nunito" target="_blank" rel="noreferrer">Nunito</a></li>',
        'behind.sign': '— Cheng',

        // Circuit end modal
        'circuitEnd.yourTime': '你的用时<br /><span class="js-time value">00:00:000</span>',
        'circuitEnd.notTop10': '抱歉，你没能进入前十。',
        'circuitEnd.submit': '提交',
        'circuitEnd.or': '或',

        // Discord
        'discord.publicServer': '公共服务器',
        'discord.publicDesc': '来社区逛逛<span class="optional">，给我们看看你的作品、随便问点什么</span>。',
        'discord.join': '加入服务器',
        'discord.private': '私信',
        'discord.privateDesc': '直接联系我。<span class="optional"><br />我得提醒你，我会尽量回复每个人，但可能需要一些时间。</span>',
        'discord.startChat': '开始聊天',

        // Shared
        'common.search': '搜索…',
        'common.noResult': '无结果',
        'common.restart': '重新开始',

        // Map area names (rendered to DOM by Map.js)
        'map.achievements': '成就',
        'map.altar': '祭坛',
        'map.behind': '幕后<br />花絮',
        'map.bowling': '保龄球',
        'map.career': '经历',
        'map.circuit': '赛道',
        'map.cookie': '饼干',
        'map.lab': '实验室',
        'map.landing': '登陆点',
        'map.projects': '作品',
        'map.social': '社交',
        'map.timeMachine': '时光机',

        // In-world InteractivePoints labels
        'world.easter': '复活节活动',
        'world.behind': '幕后花絮',
        'world.cookie': '接受 Cookie',
        'world.achievements': '成就',
        'world.bowling.restart': '重新开始',
        'world.bowling.bumpers': '护栏',
        'world.bowling.changeSong': '换歌',
        'world.projects': '作品',
        'world.circuit.start': '开始比赛！',
        'world.timeMachine': '时光机',
        'world.landing.map': '地图',
        'world.landing.controls': '控制',
        'world.lab': '实验室',

        // Altar
        'altar.ellipsis': '……',

        // Time formatting units (timeToReadableString)
        'time.hour': '小时',
        'time.minute': '分',
        'time.second': '秒',
    },
}
