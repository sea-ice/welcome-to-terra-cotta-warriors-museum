import * as THREE from 'three'

let renderer, scene, camera, controls

export default function (opt) {
  let renderer = init(opt)
  animate()
}

function init ({ele, mtlPath, objPath}) {
  let width = document.documentElement.clientWidth || document.body.clientWidth
  let height = width / 1.7777778 * 0.61

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(ele.clientWidth, height)
  renderer.setClearColor(0x409d9b, .4)
  console.log(renderer.getClearAlpha())
  ele.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, ele.clientWidth / height, 0.1, 10000)
  camera.position.set(1965.91, 1432.44, 1099.14)
  camera.lookAt(new THREE.Vector3(0, 0, 0))

  let topLight = new THREE.PointLight(0xffffff)
  topLight.position.set(0, 2000, 0)
  topLight.castShadow = true
  scene.add(topLight)

  let bottomLight = new THREE.PointLight(0xffffff)
  bottomLight.position.set(0, -2000, 0)
  bottomLight.castShadow = true
  scene.add(bottomLight)

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
