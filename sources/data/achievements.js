import labData from './lab.js'
import projectsData from './projects.js'
import { isZh } from '../Game/i18n.js'

// Tuples: [id, title, description(html), count, unique]. Only title (index 1)
// and description (index 2) are translated; id/count/unique stay. Translations
// are indexed (not keyed by the English title) so curly-vs-straight apostrophe
// differences in the source never break matching.
const en =
[
    [
        'landingLeave',
        'I\'m going on an adventure!',
        'Get out of the landing area.',
        1
    ],
    [
        'areas',
        'Traveler',
        'Vist every area.',
        13,
        true // Unique
    ],
    [
        'projects',
        'But can you fix the wifi?',
        'Check every project in the <strong>projects</strong> area.',
        projectsData.length,
        true // Unique
    ],
    [
        'lab',
        'I\'m a bit of a scientist myself',
        'Check every project in the <strong>lab</strong> area.',
        labData.length,
        true // Unique
    ],
    [
        'cookie',
        'Wake & bake',
        'Accept <strong>1</strong> cookies.',
        1
    ],
    [
        'cookie',
        'Making some dough',
        'Accept <strong>10</strong> cookies.',
        10
    ],
    [
        'cookie',
        'So baked right now',
        'Accept <strong>100</strong> cookies.',
        100
    ],
    [
        'cookie',
        'Cookie Clicker',
        'Accept <strong>1000</strong> cookies.',
        1000
    ],
    [
        'whisper',
        'It\'s About Sending A Message',
        'Post a whisper.',
        1
    ],
    [
        'sea',
        'Under the sea',
        'Go make friend with the fishes.',
        1
    ],
    [
        'upsideDown',
        'Turtle',
        'Get upside down.',
        1
    ],
    [
        'frontFlip',
        'Teeth first',
        'Do a front flip and land on your 4 wheels.',
        1
    ],
    [
        'backFlip',
        'Flip of faith',
        'Do a back flip and land on your 4 wheels.',
        1
    ],
    [
        'suspensions',
        'Lowrider',
        'Use the vehicle suspensions.',
        4
    ],
    [
        'honk',
        'Honk',
        'Honk me like one of your french driver.',
        10
    ],
    [
        'explosiveCrates',
        'Great Explosion Murder God Dynamight',
        'Blow up every explosive crate.',
        20,
        true // Unique
    ],
    [
        'goHigh',
        'Limit the sky',
        'Reach <strong>15 meters</strong> high.',
        15
    ],
    [
        'strike',
        'F*** it, dude. Let\'s go bowling',
        'Accomplished a strike.',
        1
    ],
    [
        'toiletDown',
        'Do not disturb',
        'Knock down the latrine.',
        1
    ],
    [
        'circuitFinish',
        'Participation medal',
        'Finish a race.',
        1
    ],
    [
        'circuitFinishFast',
        'KA-CHOW!',
        'Finish a race in less than <strong>30s</strong>.',
        1
    ],
    [
        'circuitLeaderboard',
        'Early Bird gets the Worm',
        'Make it to the leaderboard.',
        1
    ],
    [
        'fullDay',
        'Don’t you have work to do?',
        'Spend a full day cycle here in one go.',
        1
    ],
    [
        'distanceDriven',
        'Baby step',
        'Drive 1km.',
        1
    ],
    [
        'distanceDriven',
        'Are we there yet?',
        'Drive 10km.',
        10
    ],
    [
        'distanceDriven',
        'Honey, I’m home!',
        'Drive 100km.',
        100
    ],
    [
        'sacrifice',
        'One for the god of Chaos',
        'Sacrifice yourself into the altar.',
        1
    ],
    [
        'cataclysm',
        'Witness me!',
        'Witness a cataclysm',
        1
    ],
    [
        'weatherSnow',
        'Do you want to build a snowman?',
        'Witness snowy weather.',
        1
    ],
    [
        'weatherRain',
        'I’m singing in the rain',
        'Witness a rainy weather.',
        1
    ],
    [
        'lightning',
        '1.21 Gigawatts!',
        'Get hit by a lightning.',
        1
    ],
    [
        'waterfall',
        'Gamer instinct',
        'What did you expect? A treasure?',
        1
    ],
    [
        'fan',
        'You’re my only fan',
        'Spawn a fan.',
        1
    ],
    [
        'reset',
        'Clean your room',
        'Put back everything as it was.',
        1
    ],
    [
        'statueDown',
        'Revolution!',
        'Tear that statue down.',
        1
    ],
    [
        'konami',
        'Up up down down…',
        'You know the rest.',
        1
    ],
    [
        'debug',
        'It\'s not a bug, it\'s a feature',
        'Access the debug UI.',
        1
    ],
    [
        'hacker',
        'Hacker',
        'This one can’t be achieved.',
        1
    ],
]

// Index-aligned [title, description] translations for zh.
const zh =
[
    [ '我要去冒险了！', '离开登陆点区域。' ],
    [ '旅行者', '游览所有区域。' ],
    [ '但你能修好 WiFi 吗？', '查看<strong>作品</strong>区域里的所有项目。' ],
    [ '我自己也算个科学家', '查看<strong>实验室</strong>区域里的所有项目。' ],
    [ '醒醒，烤起来', '接受 <strong>1</strong> 块饼干。' ],
    [ '赚点面团', '接受 <strong>10</strong> 块饼干。' ],
    [ '现在烤得正欢', '接受 <strong>100</strong> 块饼干。' ],
    [ '饼干点击器', '接受 <strong>1000</strong> 块饼干。' ],
    [ '重要的是传递信息', '发布一条留言。' ],
    [ '海底世界', '去和鱼儿交个朋友。' ],
    [ '乌龟', '四脚朝天。' ],
    [ '牙齿着地', '做一个前空翻并四轮着地。' ],
    [ '信仰之翻', '做一个后空翻并四轮着地。' ],
    [ '低趴车', '使用车辆悬挂。' ],
    [ '鸣笛', '像你的法国司机那样对我鸣笛。' ],
    [ '大爆炸凶杀神·炸药', '炸毁所有炸药箱。' ],
    [ '直冲云霄', '达到 <strong>15 米</strong>高。' ],
    [ '管他呢，哥们。去打保龄球吧', '完成一次全中。' ],
    [ '请勿打扰', '把茅房撞倒。' ],
    [ '参与奖', '完成一场比赛。' ],
    [ '嗖——！', '在 <strong>30 秒</strong>内完成一场比赛。' ],
    [ '早起的鸟儿有虫吃', '登上排行榜。' ],
    [ '你不是还有活要干吗？', '一口气在这里度过一整个昼夜循环。' ],
    [ '蹒跚学步', '行驶 1 公里。' ],
    [ '我们到了吗？', '行驶 10 公里。' ],
    [ '亲爱的，我回来啦！', '行驶 100 公里。' ],
    [ '献给混沌之神', '把自己献祭进祭坛。' ],
    [ '见证我！', '见证一次大灾变。' ],
    [ '你想堆个雪人吗？', '见证下雪天气。' ],
    [ '我在雨中歌唱', '见证下雨天气。' ],
    [ '1.21 吉瓦！', '被闪电击中。' ],
    [ '玩家直觉', '你期望什么？宝藏吗？' ],
    [ '你是我唯一的粉丝', '召唤一个粉丝。' ],
    [ '收拾你的房间', '把一切放回原样。' ],
    [ '革命！', '把那座雕像推倒。' ],
    [ '上上下下……', '你知道剩下的。' ],
    [ '这不是 bug，这是特性', '打开调试界面。' ],
    [ '黑客', '这个成就无法达成。' ],
]

export default isZh
    ? en.map((entry, index) => [ entry[0], zh[index][0], zh[index][1], entry[3], entry[4] ])
    : en
