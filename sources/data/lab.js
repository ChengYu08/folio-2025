import { isZh } from '../Game/i18n.js'

// Titles are descriptive project names (translated). URLs/images stay as-is.
const titles =
{
    'Black Hole': '黑洞',
    'Infinite World': '无限世界',
    'My Room in 3D': '我的 3D 房间',
    'Particles System': '粒子系统',
    'Stylized Low Poly': '风格化低多边形',
    'Holographic terrain': '全息地形',
    'Woodkid Volcano Robot': 'Woodkid 火山机器人',
    'Bounce Friday': '弹跳星期五',
    'VFX flames': 'VFX 火焰',
    'VFX tornado': 'VFX 龙卷风',
    'DOOM Portal': 'DOOM 传送门',
    'Organic Sphere': '有机球体',
    'Attractors': '吸引子',
}

const tr = (t) => isZh ? (titles[t] ?? t) : t

export default [
    {
        title: tr('Black Hole'),
        url: 'https://awwwards-2022-workshop.vercel.app',
        image: 'black-hole.ktx',
        imageMini: 'black-hole-mini.ktx'
    },
    {
        title: tr('Infinite World'),
        url: 'https://infinite-world.vercel.app',
        image: 'infinite-world.ktx',
        imageMini: 'infinite-world-mini.ktx'
    },
    {
        title: tr('My Room in 3D'),
        url: 'https://my-room-in-3d.vercel.app',
        image: 'my-room-in-3d.ktx',
        imageMini: 'my-room-in-3d-mini.ktx',
    },
    {
        title: tr('Particles System'),
        url: 'https://three-js-tsl-particles-system.vercel.app',
        image: 'particles-system.ktx',
        imageMini: 'particles-system-mini.ktx'
    },
    {
        title: tr('Stylized Low Poly'),
        url: 'https://stylized-low-poly.vercel.app',
        image: 'stylized-low-poly.ktx',
        imageMini: 'stylized-low-poly-mini.ktx'
    },
    {
        title: tr('Holographic terrain'),
        url: 'https://experiment-holographic-terrain.vercel.app',
        image: 'holographic-terrain.ktx',
        imageMini: 'holographic-terrain-mini.ktx'
    },
    {
        title: tr('Woodkid Volcano Robot'),
        url: 'https://experiment-woodkid-volcano-robot.vercel.app',
        image: 'woodkid-volcano-robot.ktx',
        imageMini: 'woodkid-volcano-robot-mini.ktx'
    },
    {
        title: tr('Bounce Friday'),
        url: 'https://threejs-journey.com/apps/bounce-friday/',
        image: 'bounce-friday.ktx',
        imageMini: 'bounce-friday-mini.ktx'
    },
    {
        title: tr('VFX flames'),
        url: 'https://threejs.org/examples/webgpu_tsl_vfx_flames.html',
        image: 'vfx-flames.ktx',
        imageMini: 'vfx-flames-mini.ktx'
    },
    {
        title: tr('VFX tornado'),
        url: 'https://threejs.org/examples/webgpu_tsl_vfx_tornado.html',
        image: 'vfx-tornado.ktx',
        imageMini: 'vfx-tornado-mini.ktx'
    },
    {
        title: tr('DOOM Portal'),
        url: 'https://doom-portal-in-webgl.vercel.app',
        image: 'doom-portal.ktx',
        imageMini: 'doom-portal-mini.ktx'
    },
    {
        title: tr('Organic Sphere'),
        url: 'https://organic-sphere.vercel.app',
        image: 'organic-sphere.ktx',
        imageMini: 'organic-sphere-mini.ktx'
    },
    {
        title: tr('Attractors'),
        url: 'https://threejs.org/examples/webgpu_tsl_compute_attractors_particles.html',
        image: 'attractors.ktx',
        imageMini: 'attractors-mini.ktx'
    }
]
