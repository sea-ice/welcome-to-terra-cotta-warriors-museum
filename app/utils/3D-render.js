import * as THREE from 'three'

let renderer, scene, camera, controls

export default function (opt) {
  let renderer = init(opt)
  animate()
}

function init ({ele, mtlPath, objPath}) {
  let width = document.documentElement.clientWidth || document.body.clientWidth
  let height = width / 1.7777778 * 0.62037

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(ele.clientWidth, height)
  renderer.setClearColor(0xffffff)
  renderer.setClearAlpha(.4)
  ele.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, ele.clientWidth / height, 0.1, 10000)
  camera.position.set(1965.91, 1432.44, 1099.14)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  let light = new THREE.PointLight(0xffffff)
  light.position.set(0, 2000, 0)
  light.castShadow = true
  scene.add(light)

  let mtlLoader = new THREE.MTLLoader()
  mtlLoader.load(mtlPath, mtl => {
    let objLoader = new THREE.OBJLoader()
    objLoader.setMaterials(mtl)
    objLoader.load(objPath, obj => {
      obj.scale.set(1.5, 1.5, 1.5)
      scene.add(obj)
    })
  })

  controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.5
  controls.enableZoom = true
  controls.minDistance = 1000
  controls.maxDistance = 5000
  controls.enablePan = true
}

function animate () {
  renderer.render(scene, camera)
  controls.update()
  requestAnimationFrame(animate)
}
